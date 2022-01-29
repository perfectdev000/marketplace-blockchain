import Amount from "./Amount"
import Recently from "./Recently"
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
];
const Dashboard = () => {
  return (
    <>
      <div className="min-w-[100vw] px-8 pt-4 bg-[#242735] pb-16">
        <Amount/>
        <Recently items={items}/>
      </div>
    </>
  )
}

export default Dashboard