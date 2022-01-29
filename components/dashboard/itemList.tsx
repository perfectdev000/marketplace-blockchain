import React, {useState} from 'react'
import Item from '../items/itemsItem'

const itemList = (props:any) => {
  const [listItems, setListItems] = useState(props.items)
  return (
    <>      
      {listItems.map((item: { id: any; }) => <Item key={item.id} data={item} />)}      
    </>
  )
}

export default itemList