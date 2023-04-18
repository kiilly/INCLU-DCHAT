'use client';

import '../styles/App.css';
import { useEffect, useState, Fragment } from 'react';
import { ReadEventOnlyRow } from './components/ReadOnlyRow';
import { EditEventableRow } from './components/EditableRow';
import { Getevent } from '../interfaces';

export default function EventPost() {
  /* Setting the state of the addEvent to an empty object. */
  const [addEvent, setAddEvent] = useState({
    title: '',
    start: '',
    end: '',
    color: '',
    content: '',
    created_by: Number,
    belong_to: '',
  });

  /**
   * The function takes an event as an argument, prevents the default action, gets the name and value
   * of the field, creates a new event object, and sets the state of the new event object
   * @param event - the event object that is passed to the function
   */
  const handleAddevent = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newEvent = { ...addEvent };
    newEvent[fieldName] = fieldValue;

    setAddEvent(newEvent);
  };

  /**
   * The handleAddeventsubmit function is an async function that takes an event as a parameter. It
   * prevents the default action of the event, and then it fetches the /api/events/ route, and sends a
   * POST request with the addEvent object as the body
   * @param event - the event object that is passed to the function
   */
  const handleAddeventsubmit = async (event) => {
    event.preventDefault();
    const Event = await fetch('/api/events/', {
      method: 'POST',
      body: JSON.stringify(addEvent),
    });
    window.location.reload();
  };

  /* This is a hook that is fetching the data from the database and setting the state of the events to
  the data that is fetched. */
  const [events, setEvents] = useState(null);
  useEffect(() => {
    const res = fetch('http://localhost:3000/api/events/')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  const [editeventid, setEditeventid] = useState<Number>(null);

  /* Setting the state of the editEvent to an empty object. */
  const [editEvent, setEditEvent] = useState({
    title: '',
    start: '',
    end: '',
    color: '',
    content: '',
    created_by: Number,
    belong_to: '',
  });

  /**
   * The function takes an event as an argument, prevents the default action, gets the name and value
   * of the field, creates a new object with the spread operator, and sets the new object to the state
   * @param event - the event object that was triggered
   */
  const handleEditevent = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newEvent = { ...editEvent };
    newEvent[fieldName] = fieldValue;

    setEditEvent(newEvent);
  };

  /**
   * When the edit button is clicked, the event id is set to the event id of the event that was
   * clicked, and the form values are set to the values of the event that was clicked
   * @param event - The event that was clicked on
   * @param {Getevent} Event - Getevent
   */
  const handleEditClick = (event, Event: Getevent) => {
    event.preventDefault();
    setEditeventid(Event.id);

    const formValues = {
      title: Event.title,
      start: Event.start,
      end: Event.end,
      color: Event.color,
      content: Event.content,
      created_by: Event.created_by,
      belong_to: Event.belong_to,
    };
    setEditEvent(formValues);
  };

  /**
   * It takes the event id from the state, and then it fetches the event from the database, and then it
   * updates the event with the new information from the state
   * @param event - the event object that is being edited
   */
  const handleEditsubmit = async (event) => {
    event.preventDefault();
    const Event = await fetch(`/api/events/${editeventid}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: editEvent.title,
        start: editEvent.start,
        end: editEvent.end,
        color: editEvent.color,
        content: editEvent.content,
        created_by: editEvent.created_by,
        belong_to: editEvent.belong_to,
      }),
    });
    window.location.reload();
  };

  const handleCancelClick = () => {
    setEditeventid(null);
  };

  /**
   * The function is called when the delete button is clicked. It prevents the default action of the
   * button, then it sends a request to the server to delete the event with the id of the event that
   * was clicked
   * @param event - the event that was triggered
   * @param {Getevent} Event - Getevent
   */
  const handleDeleteclick = async (event, Event: Getevent) => {
    event.preventDefault();
    console.log(Event.id);

    const res = await fetch(`/api/events/${Event.id}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };

  return (
    <div className="app-container">
      <h5>Add an Event </h5>
      <form onSubmit={handleAddeventsubmit}>
      <input
          onChange={handleAddevent}
          type="text"
          name="title"
          placeholder="Enter a title"
          className="mt-1 flex px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          onChange={handleAddevent}
          type="text"
          name="start"
          placeholder="Enter an start"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          onChange={handleAddevent}
          type="text"
          name="end"
          placeholder="Enter a end"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          onChange={handleAddevent}
          type="text"
          name="color"
          placeholder="Enter a color"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          onChange={handleAddevent}
          type="text"
          name="content"
          placeholder="Enter a content"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          onChange={handleAddevent}
          name="created_by"
          type="text"
          placeholder="Enter a created by"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          onChange={handleAddevent}
          type="text"
          name="belong_to"
          placeholder="Enter a belong to"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
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
              <th>title</th>
              <th>start</th>
              <th>end</th>
              <th>color</th>
              <th>content</th>
              <th>created by</th>
              <th>belong to</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events
              && events.map((Event: Getevent, i: any) => (
                <>
                  <Fragment>
                    {editeventid === Event.id ? (
                      <EditEventableRow
                        editEvent={editEvent}
                        handleEditevent={handleEditevent}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadEventOnlyRow
                        Event={Event}
                        handleEditClick={handleEditClick}
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
