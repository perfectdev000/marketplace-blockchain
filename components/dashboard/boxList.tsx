import React from 'react'
import Item from '../items/boxItem'

const boxList = (props:any) => {
  return (
    <>      
      {props.items.map((item: { id: any; }, _index:number) => <Item key={_index} data={item} />)}      
    </>
  )
}

export default boxList