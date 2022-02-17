import Image from "next/image"

const AmountDisplay = (props:any) => {
  return (
    <>
      <div className="w-full md:flex justify-around items-center ">

        <div className="flex justify-start items-center w-min-[300px] pl-8 my-4">
          <svg width="50" height="50" viewBox="0 0 50 50"><g fill="none" fillRule="evenodd"><circle fill="#2BBAA7" cx="25" cy="25" r="25"></circle><path d="M38.344 32.5c.36 0 .656.295.656.656v2.188c0 .36-.295.656-.656.656H11.656a.658.658 0 01-.656-.656V15.656c0-.36.295-.656.656-.656h2.188c.36 0 .656.295.656.656V32.5h23.844zm-6.962-12.277l-4.632 3.09-4.665-6.218a.657.657 0 00-1.088.054l-4.747 7.913v5.688h21l-4.916-10.27a.656.656 0 00-.952-.257z" fill="#FFF" fillRule="nonzero"></path></g></svg>
          <div className="ml-4">
            <p className="text-10 font-bold text-gray-400 m-0">TOTAL SALE</p>
            <p className="text-24 font-medium text-white m-0">{props.sale}</p>
          </div>
        </div>

        <div className="flex justify-start items-center w-min-[300px] pl-8 my-4">
          <svg width="50" height="50" viewBox="0 0 50 50"><g fill="none" fillRule="evenodd"><circle fill="#4D70E7" cx="25" cy="25" r="25"></circle><path d="M33.62 25.262l-8.307 5.075L17 25.262 25.313 11l8.307 14.262zm-8.307 6.705L17 26.892 25.313 39l8.312-12.108-8.313 5.075z" fill="#FFF" fillRule="nonzero"></path></g></svg>
          <div className="ml-4">
            <p className="text-10 font-bold text-gray-400 m-0">TOTAL VOLUME</p>            
            <p className="text-24 font-medium text-white m-0">Ξ {props.volume} 
              <span className="ml-2 text-22 font-medium text-gray-500">$M{Math.round(2493.98 * props.volume/10000)/100}</span>
            </p>            
          </div>
        </div>

        <div className="flex justify-start items-center w-min-[300px] pl-8 my-4">
          <Image src="/assets/img/axie-sold.png" width={50} height={50} alt='logo'/>
          <div className="ml-4">
            <p className="text-10 font-bold text-gray-400 m-0">Pokemon SOLD</p>
            <p className="text-24 font-medium text-white m-0">{props.sold}</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default AmountDisplay