import { useEffect, useState } from 'react';
import { BiChevronDown, BiLogOut } from 'react-icons/bi';
import '../styles/input.css';
import DropButton from './dropbutton';
import { getCookie } from 'typescript-cookie';
import Avatar from '@mui/material/Avatar';
import { setCookie } from 'typescript-cookie';

export default function Selector() {
  const [username,setUsername] = useState(null)
  function stringToColor(string: string) {
    let hash = 0;
    let i;
    if(string){
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  }
  function stringAvatar(name: string) {
    if(name){
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${Array.from(name)[0].toUpperCase()}`,
    };
  }
  }
  function logout(){    
    setCookie('id','',0)
    setCookie('group','',0)
    setCookie('token','',0)
    document.location = 'http://localhost:3000/';
  }
  useEffect(() => {
    const res = fetch(`http://localhost:3000/api/users/${getCookie('id')}`).then((response) => response.json())
    .then((data) => {setUsername(data.username)})
  }, []);
  return (<div className='ml-[0.5%] w-32 h-fit font-medium flex  z-20 '>
  <button className="bg-white w-full p-1 flex items-center justify-center rounded-full mt-[440%]  group"><BiChevronDown size={20}/>
  <div className='ml-6 text-[#A371D0]'><DropButton text={username}/></div>
  <Avatar className='flex ml-4 object-cover h-8 w-8 rounded-full ' {...stringAvatar(username)}></Avatar>
  <ul className='absolute hidden group-focus:block bottom-[3%] w-42 bg-white text-[#A371D0] shadow-md mt-5 ml-0 rounded'>
    <li onClick={logout} className='p-2 text-sm hover:bg-[#f3f3f3] hover:text-[#A371D0]'><DropButton text='Log Out'/></li>
  </ul>
  </button>
  </div>
  );
}
