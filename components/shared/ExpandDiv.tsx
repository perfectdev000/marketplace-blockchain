import { useState } from "react"
import ImgBtn from "./ImgBtn"
import { Slider } from 'antd';

const icon=<svg width="16" height="16" viewBox="0 0 16 16" fill="#57627b">
            <path d="M3.01 5h9.98c.898 0 1.347 1.085.714 1.718l-4.991 4.987a1.003 1.003 0 01-1.422 0L2.296 6.718C1.663 6.085 2.112 5 3.01 5z"></path>
          </svg>


const ExpandDiv = (props:any) => {
  
  const [close, setClose] = useState(false)
  const [isSlideValue, setSlideValue] = useState([1,10])
  const [tokens, setTokens] = useState(0)
  const btnStyle0 = { transform: 'rotate(0deg)',transition: 'transform 1s' }
  const btnStyle1 = { transform: 'rotate(180deg)', transition: 'transform 1s' }
  const divStyle0 = {overflow: 'hidden', transition: 'max-height 1s', maxHeight: '0px', }
  const divStyle1 = {overflow: 'hidden', transition: 'max-height 3s', height: 'auto', maxHeight: '600px', }
  const title = props.filtertitle
    
  function onChangeSliderValue(value: React.SetStateAction<number[]>) {
    setSlideValue(value)
    const initialItems=[...props.items]
    var temps: any[]=[];
    initialItems.forEach(function (item) {        
      if((item.count >= isSlideValue[0]) && (item.count <= isSlideValue[1])){
        temps.push(item)
      }
    });
    props.filterItems(temps)
  }
  const selChang = (value:number) =>{
    setTokens(value)
    const btnName = value ===1?'Bulbasaur':value === 2?'Lvysaur':value === 3?'Venusaur':'Charmander'     
    const initialItems=[...props.items]
    if(value===0)
      props.filterItems(initialItems)
    else{
      var temps: any[]=[];
      initialItems.forEach(function (item) {        
        if(item.name === btnName){          
          temps.push(item)
        }
      });
      props.filterItems(temps)
    }
  }
  return (
    <>      
      <div className='w-full h-auto'>
        <div className="p-5 text-16 font-normal border-t border-gray-700 flex items-center">
          <div className="hover:cursor-pointer" onClick={()=>setClose(!close)}>
            <div style={close?btnStyle0:btnStyle1}>{icon}</div>
          </div>
          <div className="ml-2.5">{title}</div>
        </div>
        <div style={close?divStyle0:divStyle1}>
          {
            title=='Class'?
              <div className="flex flex-wrap px-4 pb-4">
                <ImgBtn name='Bulbasaur' value={tokens} selChang={selChang}/>
                <ImgBtn name='Lvysaur' value={tokens} selChang={selChang}/>
                <ImgBtn name='Venusaur' value={tokens} selChang={selChang}/>
                <ImgBtn name='Charmander' value={tokens} selChang={selChang}/>
              </div>
            :
            title=='Counts'?
              <div className="w-full px-4 pb-4">
                <p className='text-base text-gray-300 font-medium text-center'>Counts : {isSlideValue[0]} - {isSlideValue[1]}</p>
                <Slider range={{ draggableTrack: true }} min={1} max={10} defaultValue={[1, 10]} step={1}
                onChange={onChangeSliderValue} />
              </div>
            :
            title=='Purity & Genes'?
              <div className="flex flex-wrap px-4 pb-4">
                <ImgBtn name='Lvysaur'/>
                <ImgBtn name='Venusaur'/>
                <ImgBtn name='Charmander'/>
              </div>
            :
            title=='Stats'?
              <div className="flex flex-wrap px-4 pb-4">
                <ImgBtn name='Venusaur'/>
                <ImgBtn name='Charmander'/>
              </div>
            :
            <></>
          }
        </div>
      </div>
    </>
  )
}

export default ExpandDiv