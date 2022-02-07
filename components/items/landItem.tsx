import Image from "next/image"

const color = ['#FF1493', '#9932CC', '#00BFFF', '#ADFF2F']
const landItem = (props:any) => {
  // { id:1, name: 'Bulbasaur', type:1, price: 21, rarity: 0.12, resellable:true, count:8},  
  return (
    <>
      <div className="flex justify-between h-16 border-b border-gray-700 text-white text-14 font-normal hover:cursor-pointer hover:opacity-50">
        <div className="flex items-center">
          <div className="flex justify-start items-center px-3">
            <div className="rounded-md" style={{width:50, height:50, backgroundColor:color[props.data.type-1]}}/>
          </div>

          <div className="text-gray-300 font-normal px-4">
            <div>
              <span className="flex px-8 rounded text-12  border border-transparent" style={{paddingTop: 1, paddingBottom: 1, backgroundColor:color[props.data.type-1],  borderColor: 'transparent'}}>
                <div className="flex items-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#ffffff">
                    <path d="M5.29 12.675c.591.842 1.284 1.828 2.093 3.002a.75.75 0 001.234 0c.81-1.174 1.502-2.16 2.092-3.002C13.431 8.799 14 7.988 14 6A6 6 0 102 6c0 1.988.569 2.798 3.29 6.675zM10.5 6a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                  </svg>
                  <span className="ml-4 text-gray-500">-137, -131</span>
                </div>
              </span>
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

export default landItem