import React from 'react'
import Item from '../items/boxItem'

const boxList = (props:any) => {
  return (
    <>      
      {props.items.map((item: { id: any; }) => <Item key={item.id} data={item} />)}      
    </>
  )
}

export default boxList