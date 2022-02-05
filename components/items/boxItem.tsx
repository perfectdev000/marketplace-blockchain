import Image from "next/image"

const color = ['#FF1493', '#9932CC', '#00BFFF', '#ADFF2F']

const boxItem = (props:any) => {
  // { id:1, name: 'Bulbasaur', type:1, price: 21, rarity: 0.12, resellable:true, count:8},  
  return (
    <>
      <div className="h-16 flex justify-between border-b border-gray-700 text-white text-14 font-normal hover:cursor-pointer hover:opacity-50">
        <div className="flex items-center">
          <div className="flex justify-start items-center px-3">
            <Image src={'/assets/img/box'+(props.data.id%3+1)+'.png'} width={50} height={50} alt="token"/>
          </div>

          <div className="text-gray-300 font-normal px-4">
            <div>
              <div className="flex justify-center text-14 font-medium text-white">
                {props.data.id%3+1}X Reward
              </div>
              <div className="flex justify-center">
                Count : {props.data.count}
              </div>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-end mr-2">
          <div>
            <div className="">Ξ {props.data.price}</div>
            <div className="text-gray-500">$ {Math.round(2493.98 * props.data.price)/100}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default boxItem