import React, {useState} from 'react'
import Item from '../items/boxItem'

const boxList = (props:any) => {
  const [listItems, setListItems] = useState(props.items)
  return (
    <>      
      {listItems.map((item: { id: any; }) => <Item key={item.id} data={item} />)}      
    </>
  )
}

export default boxList