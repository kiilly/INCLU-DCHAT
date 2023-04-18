import Link from 'next/link';

export default function Button01({ title, direction }) {
  return (
        <>
         <Link href={direction}> <button className="bg-gradient-to-r from-[#FD9262] via-[#e31988] to-[#A371D0] flex text-center rounded-full  w-6/12 h-fit px-[24px] py-[12px] hover:from-[#fd9362af] hover:via-[#fc1ba6b0] hover:to-[#a471d0bc] hover:brightness-75 text-[15px] font-sans text-white justify-center"><strong className='whitespace-nowrap'>{title}</strong></button></Link>
        </>
  );
}
