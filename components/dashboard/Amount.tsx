import Tabs, { TabPane } from 'rc-tabs';
import AmountDisplay from './AmountDisplay';

const Amount = () => {
  return (
    <>
      <div className="general-tabs w-[1220px] mx-auto rounded-md border border-gray-700">
        <Tabs defaultActiveKey="2" >
          <TabPane tab= "Last 24h" key="1">
            <AmountDisplay sale="37,154" volume="1,231.8" sold="37,086"/>
          </TabPane>
          <TabPane tab= "7 days" key="2">
            <AmountDisplay sale="329,013" volume="10,664.6" sold="328,618"/>
          </TabPane>
          <TabPane tab= "30 days" key="3">
            <AmountDisplay sale="1,321,890" volume="45,340.9" sold="1,319,833"/>
          </TabPane>
        </Tabs>
      </div>
    </>
  )
}

export default Amount