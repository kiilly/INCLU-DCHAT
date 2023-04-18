'use client';

import '../styles/App.css';
import { useEffect, useState, Fragment } from 'react';
import { Group } from '../interfaces';
import { ReadGroupOnlyRow } from './components/ReadOnlyRow';
import { EditgrouptableRow } from './components/EditableRow';

export default function GrouPost() {
  /* Creating a state variable called addGroup and a function called setAddGroup. */
  const [addGroup, setAddGroup] = useState({
    name: '',
  });

  /**
   * The function takes an event as an argument, prevents the default action, gets the name and value
   * of the field, creates a new object with the spread operator, and sets the state of the new object
   * to the newGroup object
   * @param event - the event that triggered the function
   */
  const handleAddgroup = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newGroup = { ...addGroup };
    newGroup[fieldName] = fieldValue;

    setAddGroup(newGroup);
  };

  /* A function that is called when the form is submitted. It prevents the default action,
  fetches the data from the api, and then reloads the page. */
  const handleAddgroupsubmit = async (event) => {
    event.preventDefault();
    const group = await fetch('/api/groups/', {
      method: 'POST',
      body: JSON.stringify({
        name: addGroup.name,
      }),
    });
    console.log(group);
    window.location.reload();
  };

  /* This is a hook that is fetching the data from the api and setting the state of the groups variable
  to the data. */
  const [groups, setGroups] = useState(null);
  useEffect(() => {
    const res = fetch('http://localhost:3000/api/groups')
      .then((response) => response.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);

  const [editgroupid, setEditgroupid] = useState<Number>(null);

  const [editGroup, setEditGroup] = useState({
    name: '',
  });

  /**
   * The function takes an event as an argument, prevents the default action, gets the name and value
   * of the field, creates a new object with the new value, and sets the state of the editGroup to the
   * new object
   * @param event - the event that triggered the function
   */
  const handleEditgroup = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newgroup = { ...editGroup };
    newgroup[fieldName] = fieldValue;

    setEditGroup(newgroup);
  };

  /**
   * When the edit button is clicked, the editgroupid is set to the group id, and the form values are
   * set to the group name
   * @param event - The event that triggered the function.
   * @param {Group} group - Group - this is the group object that is passed in from the map function.
   */
  const handleEditclick = (event, group: Group) => {
    event.preventDefault();
    setEditgroupid(group.id);

    const formValues = {
      name: group.name,
    };
    setEditGroup(formValues);
  };

  /**
   * The handleEditsubmit function is called when the user clicks the submit button on the edit group
   * form. It sends a PUT request to the server with the new group name
   * @param event - This is the event that is triggered when the form is submitted.
   */
  const handleEditsubmit = async (event) => {
    event.preventDefault();
    const req = await fetch(`/api/groups/${editgroupid}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: editGroup.name,
      }),
    });
    window.location.reload();
  };

  const handleCancelClick = () => {
    setEditgroupid(null);
  };

  /**
   * It takes an event and a group as parameters, prevents the default action of the event, logs the
   * group id, makes a fetch request to the api/groups/:id route, and then reloads the page
   * @param event - The event that triggered the function.
   * @param {Group} group - Group - this is the group object that is passed in from the parent
   * component.
   */
  const handleDeleteclick = async (event, group: Group) => {
    event.preventDefault();
    console.log(group.id);

    const req = await fetch(`/api/groups/${group.id}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };

  return (
    <div className="app-container">
      <h5>Add a Group</h5>
      <form onSubmit={handleAddgroupsubmit}>
        <input
          onChange={handleAddgroup}
          type="text"
          name="name"
          placeholder="Enter a name"
          className="mt-1 flex px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#FD9262] via-[#e31988] to-[#A371D0] flex text-center rounded-full  w-3/9 h-fit px-[24px] py-[12px] hover:from-[#fd9362af] hover:via-[#fc1ba6b0] hover:to-[#a471d0bc] hover:brightness-75 text-[16px] font-sans text-white justify-center"
        >
          Add
        </button>
      </form>
      <form onSubmit={handleEditsubmit}>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups
              && groups.map((group: Group, i: any) => (
                <>
                <Fragment>
                  {editgroupid === group.id ? (
                    <EditgrouptableRow
                      editGroup={editGroup}
                      handleEditgroup={handleEditgroup}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadGroupOnlyRow
                    group={group}
                    handlegroupClick={handleEditclick}
                    handleDeleteclick={handleDeleteclick}
                    />
                  )}
                </Fragment>
                </>
              ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
