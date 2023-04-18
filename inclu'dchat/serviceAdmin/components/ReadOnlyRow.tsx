import React from 'react';

/**
 * It returns a table row with the user's username, email, role_id, and group_id, and two buttons, one
 * for editing and one for deleting the user
 * @param  - user - the user object that is being rendered
 * @returns A table row with the user's username, email, role_id, and group_id.
 */
export default function ReadOnlyRow({ user, handleEditClick, handleDeleteclick }) {
  if (user) {
    return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.role_id}</td>
      <td>{user.group_id}</td>
      <td>
        <button type="button" className='boutton rounded-lg w-8 h-fit' onClick={(event) => handleEditClick(event, user)}>
          Edit
        </button>
        <button type="button" className='boutton rounded-lg w-14 h-fit' onClick={(event) => handleDeleteclick(event, user)}>Delete</button>
      </td>
    </tr>
    );
  }
}

/**
 * ReadEventOnlyRow is a function that takes in an Event object and two functions as props, and returns
 * a table row with the Event's data and two buttons that call the two functions when clicked
 * @param  - Event - the event object
 * @returns A table row with the event information and two buttons to edit and delete the event.
 */
export function ReadEventOnlyRow({ Event, handleEditClick, handleDeleteclick }) {
  return (
    <tr>
      <td>{Event.title}</td>
      <td>{Event.start}</td>
      <td>{Event.end}</td>
      <td>{Event.color}</td>
      <td>{Event.content}</td>
      <td>{Event.created_by}</td>
      <td>{Event.belong_to}</td>
      <td>
        <button type="button" className='boutton rounded-lg w-8 h-fit' onClick={(event) => handleEditClick(event, Event)}>
          Edit
        </button>
        <button type="button" className='boutton rounded-lg w-14 h-fit' onClick={(event) => handleDeleteclick(event, Event)}>Delete</button>
      </td>
    </tr>
  );
}

/**
 * ReadGroupOnlyRow is a function that takes in a group object and two functions as props and returns a
 * table row with the group name and two buttons, one to edit the group and one to delete the group
 * @param  - group - the group object
 * @returns A table row with the group name and two buttons.
 */
export function ReadGroupOnlyRow({ group, handlegroupClick, handleDeleteclick }) {
  if (group) {
    return (
    <tr>
      <td>{group.name}</td>
      <td>
        <button type="button" className='boutton rounded-lg w-8 h-fit' onClick={(event) => handlegroupClick(event, group)}>
          Edit
        </button>
        <button type="button" className='boutton rounded-lg w-14 h-fit' onClick={(event) => handleDeleteclick(event, group)}>Delete</button>
      </td>
    </tr>
    );
  }
}