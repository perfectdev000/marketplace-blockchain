import Tabs, { TabPane } from 'rc-tabs';
import Image from 'next/image';

const tab_axies=<div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-axie.png" width={24} height={24}/>
            <div className='ml-2'>Axies</div>
          </div>
const tab_land=<div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-land.png" width={24} height={24}/>
            <div className='ml-2'>Land</div>
          </div>
const tab_items=<div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-item.png" width={24} height={24}/>
            <div className='ml-2'>Items</div>
          </div>
const tab_bundles=<div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-bundle.png" width={24} height={24}/>
            <div className='ml-2'>Boundles</div>
          </div>
const Recently = (props:any) => {
  return (
    <>      
      <div className="min-w-[100vw] bg-[#242735] -mt-[24px]">         
        <div className="general-tabs">
          <Tabs defaultActiveKey="1" >
            <TabPane tab= {tab_axies} key="1">
              <div className='w-[100vw] h-[655px] relative'>
                <Image src={'/assets/img/Screenshot_3.png'} layout='fill'/>    
              </div>              
            </TabPane>
            <TabPane tab= {tab_land} key="2">
              <div className='w-[100vw] h-[655px] relative'>
                <Image src={'/assets/img/Screenshot_4.png'} layout='fill'/>    
              </div>              
            </TabPane>
            <TabPane tab= {tab_items} key="3">
              <div className='w-[100vw] h-[655px] relative'>
                <Image src={'/assets/img/Screenshot_5.png'} layout='fill'/>    
              </div>              
            </TabPane>
            <TabPane tab= {tab_bundles} key="4">
              <div className='w-[100vw] h-[655px] relative'>
                <Image src={'/assets/img/Screenshot_6.png'} layout='fill'/>    
              </div>              
            </TabPane>
          </Tabs>
        </div>
      </div>      
    </>
  )
}

export default Recently