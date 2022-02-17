import Tabs, { TabPane } from 'rc-tabs';
import Image from 'next/image';
import AxiesFilter from './AxiesFilter';

var items = [
  { id:1, name: 'Bulbasaur', type:1, price: 0.21, rarity: 0.12, resellable:true, count:8},
  { id:2, name: 'Lvysaur', type:2, price: 0.37, rarity: 0.2, resellable:true, count:5 },
  { id:3, name: 'Venusaur', type:3, price: 0.45, rarity: 0.22, resellable:true, count:2 },
  { id:4, name: 'Charmander', type:4, price: 0.12, rarity: 0.42, resellable:true, count:12 },
  { id:5, name: 'Bulbasaur', type:1, price: 0.25, rarity: 0.32, resellable:false, count:4},
  { id:6, name: 'Lvysaur', type:2, price: 0.39, rarity: 0.25, resellable:false, count:6 },
  { id:7, name: 'Venusaur', type:3, price: 0.42, rarity: 0.27, resellable:true, count:7 },
  { id:8, name: 'Charmander', type:4, price: 0.22, rarity: 0.18, resellable:true, count:1 },
  { id:9, name: 'Bulbasaur', type:1, price: 0.27, rarity: 0.12, resellable:false, count:0},
  { id:10, name: 'Lvysaur', type:2, price: 0.32, rarity: 0.2, resellable:true, count:6 },
  { id:11, name: 'Venusaur', type:3, price: 0.17, rarity: 0.02, resellable:false, count:5},
  { id:12, name: 'Charmander', type:4, price: 0.32, rarity: 0.04, resellable:true, count:9 },
  { id:8, name: 'Charmander', type:4, price: 0.22, rarity: 0.18, resellable:true, count:1 },
  { id:9, name: 'Bulbasaur', type:1, price: 0.27, rarity: 0.12, resellable:false, count:0},
  { id:10, name: 'Lvysaur', type:2, price: 0.32, rarity: 0.2, resellable:true, count:6 },
  { id:11, name: 'Venusaur', type:3, price: 0.17, rarity: 0.02, resellable:false, count:5},
  { id:12, name: 'Charmander', type:4, price: 0.32, rarity: 0.04, resellable:true, count:9 },
];
const tab_axies=
          <div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-axie.png" width={24} height={24} alt="image"/>
            <div className='ml-2 hidden md:block'>Pokemons</div>
          </div>
const tab_land =
          <div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-land.png" width={24} height={24} alt="image"/>
            <div className='ml-2 hidden md:block'>Land</div>
          </div>
const tab_items =
          <div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-item.png" width={24} height={24} alt="image"/>
            <div className='ml-2 hidden md:block'>Items</div>
          </div>
const tab_bundles = 
          <div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-bundle.png" width={24} height={24} alt="image"/>
            <div className='ml-2 hidden md:block'>PokeBoxes</div>
          </div>
const MarketPlace = (props:any) => {
  return (
    <>      
      <div className="min-w-[100vw] bg-[#242735]" style={{overflowY:'hidden'}}>
        <div className="general-tabs">
          <Tabs defaultActiveKey="1" >
            <TabPane tab= {tab_axies} key="1">
              <AxiesFilter items={items}/>
            </TabPane>
            <TabPane tab= {tab_bundles} key="2">
              <div className='w-[100vw] h-[655px] relative'>
                <Image src={'/assets/img/Screenshot_6.png'} layout='fill' alt='image'/>    
              </div>
            </TabPane>
            <TabPane tab= {tab_land} key="3">
              <div className='w-[100vw] h-[655px] relative'>
                <Image src={'/assets/img/Screenshot_4.png'} layout='fill' alt='image'/>    
              </div>
            </TabPane>
            <TabPane tab= {tab_items} key="4">
              <div className='w-[100vw] h-[655px] relative'>
                <Image src={'/assets/img/Screenshot_5.png'} layout='fill' alt='image'/>    
              </div>              
            </TabPane>
          </Tabs>
        </div>
      </div>      
    </>
  )
}

export default MarketPlace