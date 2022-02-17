import React from 'react'
import Item from '../items/itemsItem'

const itemList = (props:any) => {
  return (
    <>      
      {props.items.map((item: { id: any; }, _index:number) => <Item key={_index} data={item} />)}      
    </>
  )
}

export default itemList