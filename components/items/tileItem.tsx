import Image from "next/image"

const color = ['#FF1493', '#9932CC', '#00BFFF', '#ADFF2F']

const tileItem = (props:any) => { 
  return (
    <>
      <div className="mt-6 mx-2 px-3 py-4 border border-gray-700 hover:border-black hover:shadow-xl rounded-md hover:cursor-pointer">
        <div className="ml-8 text-16 text-white font-medium">
          {props.data.name}
        </div>
        <div className="ml-8 text-12 text-white font-normal">
          Rarity : {props.data.rarity}
        </div>
        <div className="ml-8 text-12 text-gray-500 font-normal">
          Count : {props.data.count}
        </div>
        
        <div className="mt-2 flex justify-center items-center mx-8">
          <Image src={'/assets/img/'+(1+ props.data.id % 4)+'.png'} width={140} height={140} alt="token"/>
        </div>
        
        <div className="flex items-center justify-center w-full mt-4">          
            <div className="mr-2">Ξ {props.data.price}</div>
            <div className="text-gray-500">${Math.round(2493.98 * props.data.price)/100}</div>          
        </div>
      </div>
    </>
  )
}

export default tileItem