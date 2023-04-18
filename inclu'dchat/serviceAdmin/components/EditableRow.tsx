import React from 'react';
import '../../styles/output.css';
import '../../styles/input.css';

/**
 * It returns a table row with input fields for the user's name, email, role, and group, and buttons
 * for saving and canceling the edit
 * @param  - editUser: the user object that is being edited
 * @returns A table row with a form to edit a user.
 */
export function EditableRow({ editUser, handleEdituser, handleCancelClick }) {
  return (
    <tr>
      <td>
        <input type="text" placeholder="Enter a name" name="username" value={editUser.username} onChange={handleEdituser}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a email" name="email" value={editUser.email} onChange={handleEdituser}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a role" name="role_id" value={editUser.role_id} onChange={handleEdituser}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a group" name="group_id" value={editUser.group_id} onChange={handleEdituser}></input>
      </td>
      <td>
        <button type="submit" className='boutton rounded-lg w-8 h-fit'>Save</button>
        <button type='submit'className='boutton rounded-lg w-14 h-fit'onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}

/**
 * This function is used to edit the event
 * @param  - editEvent: the event that is being edited
 */
export function EditEventableRow({ editEvent, handleEditevent, handleCancelClick }) {
  return (
    <tr>
      <td>
        <input type="text" placeholder="Enter a title" name="title" value={editEvent.title} onChange={handleEditevent}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a start" name="start" value={editEvent.start} onChange={handleEditevent}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a end" name="end" value={editEvent.end} onChange={handleEditevent}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a color" name="color" value={editEvent.color} onChange={handleEditevent}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a color" name="content" value={editEvent.content} onChange={handleEditevent}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a create_by" name="created_by" value={editEvent.created_by} onChange={handleEditevent}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a belong_to" name="belong_to" value={editEvent.belong_to} onChange={handleEditevent}></input>
      </td>
      <td>
        <button type="submit" className='boutton rounded-lg w-8 h-fit'>Save</button>
        <button type='submit'className='boutton rounded-lg w-14 h-fit'onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}

/**
 * It returns a table row with two cells, the first cell contains an input field for the group name,
 * the second cell contains two buttons, one for saving the group name and the other for cancelling the
 * edit
 * @param  - editGroup - the group that is being edited
 * @returns A table row with two cells. The first cell contains an input field and the second cell
 * contains two buttons.
 */
export function EditgrouptableRow({ editGroup, handleEditgroup, handleCancelClick }) {
  return (
    <tr>
      <td>
      <input type="text" placeholder="Enter a name" name="name" value={editGroup.name} onChange={handleEditgroup}></input>
      </td>
      <td>
        <button type="submit" className='boutton rounded-lg w-8 h-fit'>Save</button>
        <button type='submit'className='boutton rounded-lg w-14 h-fit'onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}