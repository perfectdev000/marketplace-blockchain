import { useState } from "react"
import Image from "next/image"
const ImgBtn = (props:any) =>{
  // Bulbasaur'/>
  //               <ImgBtn name='Lvysaur'/>
  //               <ImgBtn name='Venusaur'/>
  //               <ImgBtn name='Charmander
  const [pressed, setPressed] = useState(false)
  const btnNum = props.name === 'Bulbasaur'?1:props.name === 'Lvysaur'?2:props.name === 'Venusaur'?3:4

  return(
    <>
      <div className="px-3 py-1 rounded-md bg-gray-700 m-1 text-14 hover:cursor-pointer hover:bg-gray-600 flex items-center"
        style={{backgroundColor:pressed?'#7777ee':'#3a3f50'}}
        onClick={()=>setPressed(!pressed)}
      >
        <Image src={'/assets/img/'+ btnNum +'.png'} width={15} height={15} />        
        <div className="ml-1">{props.name}</div>
      </div>
    </>
  )
}

export default ImgBtn