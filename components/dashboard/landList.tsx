import React, {useState} from 'react'
import Item from '../items/landItem'

const landList = (props:any) => {
  return (
    <>      
      {props.items.map((item: { id: any; }) => <Item key={item.id} data={item} />)}      
    </>
  )
}

export default landList