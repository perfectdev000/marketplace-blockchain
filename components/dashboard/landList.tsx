import React, {useState} from 'react'
import Item from '../items/landItem'

const landList = (props:any) => {
  return (
    <>      
      {props.items.map((item: { id: any; }, _index:number) => <Item key={_index} data={item} />)}      
    </>
  )
}

export default landList