import '../styles/input.css';

import { FiMail } from 'react-icons/fi';

export default function SideBar02() {
  return (
    <div className='z-10'>
      <div
        className="w-full h-screen
        flex flex-col
        bg-[#f3f3f3] text-white z-0"
      >
        <div className="flex pt-[2.5%] mx-auto">
          <div className="flex p-3 mb-3 hover:bg-gray-200 rounded-lg ">
            <div>
              <img className="w-14 h-14 rounded-full bg-[url('https://www.gpao.fr/wp-content/uploads/2020/03/62681-flat-icons-face-computer-design-avatar-icon.png')]" />
            </div>
            <div className="flex-grow ml-3">
              <div className="flex text-sm text-gray-400 justify-between font-bold">
                <div>Abdou</div>
                <div>20:00</div>
              </div>
              <div className="text-sm text-gray-500 p-1">
                {' '}
                j'ai pas encore fini !!!
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-auto">
          <div className="flex p-3 mb-3 hover:bg-gray-200 rounded-lg ">
            <div>
              <img className="w-14 h-14 rounded-full bg-[url('https://www.gpao.fr/wp-content/uploads/2020/03/62681-flat-icons-face-computer-design-avatar-icon.png')]" />
            </div>
            <div className="flex-grow ml-3">
              <div className="flex text-sm text-gray-400 justify-between font-bold">
                <div>Abdou</div>
                <div>20:00</div>
              </div>
              <div className="text-sm text-gray-500 p-1">
                {' '}
                j'ai pas encore fini !!!
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-auto">
          <div className="flex p-3 mb-3 hover:bg-gray-200 rounded-lg ">
            <div>
              <img className="w-14 h-14 rounded-full bg-[url('https://www.gpao.fr/wp-content/uploads/2020/03/62681-flat-icons-face-computer-design-avatar-icon.png')]" />
            </div>
            <div className="flex-grow ml-3">
              <div className="flex text-sm text-gray-400 justify-between font-bold">
                <div>Abdou</div>
                <div>20:00</div>
              </div>
              <div className="text-sm text-gray-500 p-1">
                {' '}
                j'ai pas encore fini !!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
