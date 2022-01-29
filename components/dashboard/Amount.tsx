import Tabs, { TabPane } from 'rc-tabs';
import AmountDisplay from './AmountDisplay';

const Amount = () => {
  return (
    <>
      <div className="general-tabs w-[1220px] mx-auto rounded-md border border-gray-700">
        <Tabs defaultActiveKey="2" >
          <TabPane tab= "Last 24h" key="1">
            <AmountDisplay sale="37154" volume={1231.8} sold="37086"/>
          </TabPane>
          <TabPane tab= "7 days" key="2">
            <AmountDisplay sale="329013" volume={10664.6} sold="328618"/>
          </TabPane>
          <TabPane tab= "30 days" key="3">
            <AmountDisplay sale="1321890" volume={45340.9} sold="1319833"/>
          </TabPane>
        </Tabs>
      </div>
    </>
  )
}

export default Amount