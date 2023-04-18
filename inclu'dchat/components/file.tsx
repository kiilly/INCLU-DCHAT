
import Image from 'next/image';

export default function file(props){
    const image = require(`../src/public/${props.fileName}`)
    return (
        // <img className='w-[500px]' src={require('../src/public/RobloxScreenShot20200613_211841172.png')} alt={props.fileName}/>
        <Image width={500} height={500} src={image} alt={'test'}/>
    )
}
