import React, {useState} from 'react'
import Item from '../items/nftItem'

const NftList = (props:any) => {
  const [listItems, setListItems] = useState(props.items)
  return (
    <>      
      {listItems.map((item: { id: any; }) => <Item key={item.id} data={item} />)}      
    </>
  )
}

export default NftList