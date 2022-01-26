import Amount from "./Amount"
import Recently from "./Recently"

const Dashboard = () => {
  return (
    <>
      <div className="min-w-[100vw] px-8 pt-4">
        <Amount/>
        <Recently/>
      </div>
    </>
  )
}

export default Dashboard