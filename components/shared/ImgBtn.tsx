import { useState } from "react"
import Image from "next/image"
const ImgBtn = (props:any) =>{
  const btnNum = props.name === 'Bulbasaur'?1:props.name === 'Lvysaur'?2:props.name === 'Venusaur'?3:props.name === 'Charmander'?4:0
  // const [pressed, setPressed] = useState(props.value===btnNum?true:false)
  const selToken = () =>{    
    props.selChang(btnNum);
  }
  return(
    <>
      <div className="px-2 py-1 rounded-md bg-gray-700 m-1 text-12 hover:cursor-pointer hover:bg-gray-600 flex items-center"
        style={{backgroundColor:props.value===btnNum?'#046cfc':'#3a3f50'}}
        onClick={()=>selToken()}
      >
        <Image src={'/assets/img/'+ btnNum +'.png'} width={15} height={15} alt="image"/>        
        <div className="ml-1">{props.name}</div>
      </div>
    </>
  )
}

export default ImgBtn