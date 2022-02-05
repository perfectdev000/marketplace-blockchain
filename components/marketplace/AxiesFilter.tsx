import { useState } from "react"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ExpandDiv from "../shared/ExpandDiv"
import TileItem from "../items/tileItem"
import ListItem from "../items/listItem";

const AxiesFilter = (props:any) => {
  const [showListType, setShowListType] = useState(true);
  const options = [
    'Highest ID', 'Lowest ID', 'Highest Price', 'Lowest Price', 'Latest'
  ];
  const defaultOption = options[4];
  const onChangeMenuItem = () => {

  }
  return (
    <>      
      <div className="w-full min-w-[100vw] bg-[#242735] m-0 h-full">         
        <div className='flex w-full h-full'>
          <div className='left-part border-r border-gray-700 text-14 text-white font-normal'>
            <p className='p-5 text-20 font-medium'>Filter</p>
            <ExpandDiv filtertitle="Class"/>
            <ExpandDiv filtertitle="Counts"/>
            <ExpandDiv filtertitle="Purity &amp; Genes"/>
            <ExpandDiv filtertitle="Stats"/>
            <ExpandDiv filtertitle="Other"/>
          </div>
          <div className='right-part'>
              <div className='px-8 py-6'>
                <div className="right-top flex justify-between items-center">
                  <div className="text-20 font-medium">
                    {props.items.length}&nbsp;&nbsp;Pokemons
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="mr-2">
                      <Dropdown options={options} onChange={onChangeMenuItem} value={defaultOption} placeholder="Select an option" />
                    </div>
                    <div className="flex">
                      <div className="p-2 border rounded-sm hover:cursor-pointer" style={{borderColor:!showListType?'gray':'#004eba'}}
                        onClick={()=>setShowListType(true)}
                      >
                        <svg fill="#ffffff" width="16" height="16" viewBox="0 0 16 16">
                          <path d="M1.125 0h4.75C6.496 0 7 .576 7 1.286V5.57c0 .71-.504 1.286-1.125 1.286h-4.75C.504 6.857 0 6.282 0 5.571V1.286C0 .576.504 0 1.125 0zM0 14.714V10.43c0-.71.504-1.286 1.125-1.286h4.75c.621 0 1.125.575 1.125 1.286v4.285C7 15.424 6.496 16 5.875 16h-4.75C.504 16 0 15.424 0 14.714zM9.508 16h5.984c.28 0 .508-.576.508-1.286V10.43c0-.71-.227-1.286-.508-1.286H9.508c-.28 0-.508.575-.508 1.286v4.285c0 .71.227 1.286.508 1.286zM9 5.571V1.286C9 .576 9.227 0 9.508 0h5.984c.28 0 .508.576.508 1.286V5.57c0 .71-.227 1.286-.508 1.286H9.508c-.28 0-.508-.575-.508-1.286z"></path>
                        </svg>
                      </div>
                      <div className="p-2 border rounded-sm hover:cursor-pointer" style={{borderColor:showListType?'gray':'#004eba'}}
                        onClick={()=>setShowListType(false)}
                      >
                        <svg fill="#ffffff" width="16" height="16" viewBox="0 0 16 16">
                          <path d="M3.917 1H.75a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h3.167a.75.75 0 00.75-.75v-2.5a.75.75 0 00-.75-.75zm.75 8.25v-2.5a.75.75 0 00-.75-.75H.75a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h3.167a.75.75 0 00.75-.75zM0 14.25v-2.5A.75.75 0 01.75 11h3.167a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75H.75a.75.75 0 01-.75-.75zm15.25.75H6.417a.75.75 0 01-.75-.75v-2.5a.75.75 0 01.75-.75h8.833a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75zM5.667 1.75v2.5c0 .414.335.75.75.75h8.833a.75.75 0 00.75-.75v-2.5a.75.75 0 00-.75-.75H6.417a.75.75 0 00-.75.75zM15.25 10H6.417a.75.75 0 01-.75-.75v-2.5a.75.75 0 01.75-.75h8.833a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex jsutify-center">
                  {
                    showListType ?
                      <div className="flex flex-wrap justify-center">
                        {props.items.map((item: { id: any; }) => <TileItem key={item.id} data={item} />)}
                      </div>
                    :                      
                      <div className="w-full">
                        {props.items.map((item: { id: any; }) => <ListItem key={item.id} data={item} />)}
                      </div>
                  }
                </div>
              </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default AxiesFilter