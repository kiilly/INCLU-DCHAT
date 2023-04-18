import '../styles/input.css';
import { BiChat } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import SideBarIcon from './sidebar_Icon';
import  Collapse  from "./collapse"

export default function SideBar() {
  return (
        <div className="w-full
                        flex flex-col
                        bg-[#f3f3f3] text-white border-r-2 z-10">
            <a href="/messagerie"><SideBarIcon icon={<BiChat size="28"/>}text='Chat'/></a>
            <a href="/calendar"><SideBarIcon icon={<IoCalendarNumberOutline size="28"/>}text='Calendar'/></a>
            <Collapse/>
        </div>);
}
