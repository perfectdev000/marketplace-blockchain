import Image from "next/image"

const color = ['#FF1493', '#9932CC', '#00BFFF', '#ADFF2F']

const listItem = (props:any) => { 
  return (
    <>
      <div className="h-28 mx-4 mt-3 px-3 py-4 grid grid-cols-6 items-center
          border border-gray-700 hover:border-black hover:shadow-xl rounded-md hover:cursor-pointer">
        <div className="flex justify-center">
          <Image src={'/assets/img/'+(1+ props.data.id % 4)+'.png'} width={80} height={80} alt="token"/>
        </div>

        <div className="col-span-4 pl-16">
          <div className="text-16 text-white font-medium">
            {props.data.name}
          </div>
          <div className="mt-1 text-12 text-white font-normal">
            Rarity : {props.data.rarity}
          </div>
          <div className="mt-1 text-12 text-gray-500 font-normal">
            Count : {props.data.count}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="">
            <div className="mr-2 text-18">Ξ {props.data.price}</div>
            <div className="text-14 text-gray-500">${Math.round(2493.98 * props.data.price)/100}</div>          
          </div>
        </div>
      </div>
    </>
  )
}

export default listItem