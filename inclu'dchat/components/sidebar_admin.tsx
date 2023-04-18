// import SideBarIcon from './sidebar_Icon';
import '../styles/input.css';
import React from 'react';
import { Tab } from '@headlessui/react';
import UserPost from '../serviceAdmin/userservices';
import EventPost from '../serviceAdmin/eventservice';
import GrouPost from '../serviceAdmin/groupservices';
import Page from '../app/test/page';
import App from '../pages/calendar';

export default function MyTabs() {
  return (
    <div>
    <Tab.Group>
      <Tab.List className="fixed top-0 left-0 h-screen w-28
                        flex flex-col gap-3
                        bg-[#f3f3f3] text-black shadow-xl">
        <Tab className="w-full h-12 focus:bg-[#ADB6FA] focus:border-l-4 focus:border-[#A371D0]">Calendar</Tab>
        <Tab className="w-full h-12 focus:bg-[#ADB6FA] focus:border-l-4 focus:border-[#A371D0]">Chat</Tab>
        <Tab className="w-full h-12 focus:bg-[#ADB6FA] focus:border-l-4 focus:border-[#A371D0] ">User</Tab>
        <Tab className="w-full h-12 focus:bg-[#ADB6FA] focus:border-l-4 focus:border-[#A371D0] ">Events</Tab>
        <Tab className="w-full h-12 focus:bg-[#ADB6FA] focus:border-l-4 focus:border-[#A371D0]">Groups</Tab>
      </Tab.List>
      <Tab.Panels className=" ml-[10%] font-xl">
        <Tab.Panel><a href="/calendar" className='mx-auto bg-gradient-to-r from-[#FD9262] via-[#e31988] to-[#A371D0] flex text-center rounded-full  w-6/12 h-fit px-[24px] py-[12px] hover:from-[#fd9362af] hover:via-[#fc1ba6b0] hover:to-[#a471d0bc] hover:brightness-75 text-[15px] font-sans text-white justify-center mt-5'>go to calendar</a></Tab.Panel>
        <Tab.Panel><Page/></Tab.Panel>
        <Tab.Panel><UserPost/></Tab.Panel>
        <Tab.Panel><EventPost/></Tab.Panel>
        <Tab.Panel><GrouPost/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
}
