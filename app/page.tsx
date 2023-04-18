/* eslint-disable import/extensions */

'use client';
'use client';

import '../styles/output.css';
import { useEffect, useState } from 'react';
import { getCookie } from 'typescript-cookie';
import Button01 from '../components/button_01';

export default function Page() {
  const [link, setLink] = useState('');
  useEffect(() => {
    setLink('../login');
    document.title = 'INCLU\'CHAT';
    if (getCookie('token')) {
      setLink('../messagerie');
    } else {
      setLink('../login');
    }

    document.title = "INCLU'CHAT";
  }, []);
  return (
    <div className="bg-white w-full h-screen grid grid-cols-2 gap-1 ">

      <div className="grid grid-rows-3 w-full h-full">
        <div></div>
        <div className="text-[#A371D0] font-serif">
          <p className="text-3xl ml-20 flex justify-center">
            <strong>CHAT'NCLUDE</strong>
          </p>
          <p className="ml-20 flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="ml-20 flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="ml-20 flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="ml-20 flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-1 w-full h-full">
        <div></div>
        <div></div>
        <div className="text-center">
          <Button01 direction={link} title="Connectez-vous" />
        </div>
      </div>
    </div>
  );
}
