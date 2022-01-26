import Tabs, { TabPane } from 'rc-tabs';


const Amount = () => {
  return (
    <>
      <div className="general-tabs w-[1280px] mx-auto rounded-md border border-gray-700">
        <Tabs defaultActiveKey="2" >
          <TabPane tab= "Last 24h" key="1">
            123
          </TabPane>
          <TabPane tab= "7 days" key="2">
            456
          </TabPane>
          <TabPane tab= "30 days" key="3">
            789
          </TabPane>
        </Tabs>
      </div>
    </>
  )
}

export default Amount