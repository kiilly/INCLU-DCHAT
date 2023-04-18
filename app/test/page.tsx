'use client';

import '../../styles/App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { getCookie } from 'typescript-cookie';
import { Tab } from '@headlessui/react';
import Chat from './chat';
import AdminChat from './adminchat';

const socket = io.connect('http://localhost:3001');
function index() {
  const [username, setUsername] = useState();
  const [room, setRoom] = useState();
  const [showChat, setShowChat] = useState(false);
  const [adminChat, setAdminChat] = useState(false);
  const [chatRooms, setChatRooms] = useState(null);

  async function joinRoom(username, room, role) {
    if (username !== '' && room !== '' && role === 1) {
      socket.emit('join_room', room);
      setShowChat(true);
    } else if (username !== '' && room !== '' && role === 2) {
      console.log('test');
      socket.emit('join_room', room);
      setShowChat(false);
    }
  }
  useEffect(() => {
    const NbRoom = fetch('http://localhost:3000/api/groups', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setChatRooms(data));
    const res = fetch(`http://localhost:3000/api/users/${getCookie('id')}`)
      .then((response) => response.json())
      .then((data) => {
        setRoom(data.group_id),
        setUsername(data.username),
        joinRoom(data.username, data.group_id, data.role_id);
      });
  }, []);
  return (
    <div className="flex App align-center w-full">
      {!showChat ? (
        <div className="flex align-center w-full rounded-lg shadow-2xl bg-gray-100 p-4">
          {' '}
          {chatRooms
            && chatRooms.map((rooms) => (
              <div className="group w-full focus:grow">
                {' '}
                <button
                  onClick={() => joinRoom(username, rooms.name, 2)}
                  className="bg-gradient-to-r from-[#FD9262] via-[#e31988] to-[#A371D0] flex text-center rounded-full  w-6/12 h-fit px-[24px] py-[12px] hover:from-[#fd9362af] hover:via-[#fc1ba6b0] hover:to-[#a471d0bc] hover:brightness-75 text-[15px] font-sans text-white justify-center"
                >
                  {rooms.name}
                </button>{' '}
                <div className="hidden w-full group-focus-within:flex">
                  <AdminChat socket={socket} username={username} room={rooms.name} />
                </div>
              </div>
            ))}{' '}
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default index;
