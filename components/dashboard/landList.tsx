import React, {useState} from 'react'
import Item from '../items/landItem'

const landList = (props:any) => {
  const [listItems, setListItems] = useState(props.items)
  return (
    <>      
      {listItems.map((item: { id: any; }) => <Item key={item.id} data={item} />)}      
    </>
  )
}

export default landList