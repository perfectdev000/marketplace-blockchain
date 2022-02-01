import ExpandDiv from "../shared/ExpandDiv"

const AxiesFilter = (props:any) => {
  return (
    <>      
      <div className="w-full min-w-[100vw] bg-[#242735] m-0 h-full">         
        <div className='flex w-full h-full'>
          <div className='left-part border-r border-gray-700 text-14 text-white font-normal'>
            <p className='p-5 text-20 font-medium'>Filter</p>
            <ExpandDiv filtertitle="Class"/>
            <ExpandDiv filtertitle="Parts"/>
            <ExpandDiv filtertitle="Purity &amp; Genes"/>
            <ExpandDiv filtertitle="Stats"/>
            <ExpandDiv filtertitle="Other"/>
          </div>
          <div className='right-part'>
              <div className='p-[300px]'>
                right
              </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default AxiesFilter