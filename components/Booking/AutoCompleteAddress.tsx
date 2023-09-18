import { get } from 'http';
import React, { useEffect, useState } from 'react'

const AutoCompleteAddress = () => {
  const [source, setSource] = useState<any>('');
  const [addressList, setAddressList] = useState<any>([]);


  //to get the addresslist according to the source 
  const getAddressList = async() => {
    
    const res = await fetch('/api/search_address?q='+source, 
    {
      headers: {
        'Content_Type': 'application/json',
      }
    })

    const result = await res.json();
    setAddressList(result);
    
  }


  //to call the getAddressList every time the input changes 
  useEffect(() => {

    const delayDeboundFn = setTimeout(() => {
      getAddressList()  
    }, 1000);

    return clearTimeout(delayDeboundFn);

  }, [source])



  return (
    <div className='text-black mt-2'>
      <form action="">
        <div>
          <label className='text-gray-800'>Where From?</label>
          <input type='text' 
          className='rounded-md border-[1px] w-full p-2 outline-none focus:border-purple-200' 
          value = {source}
          onChange={(e)=> setSource(e.target.value)}
          />
          {addressList?.suggestions?
          <div>
            {addressList?.suggestions.map((item:any, index: number) => (
              <h2>{item.full_address}</h2>
            ))}
          </div>:null
          }
            
        </div>
      
        <div>
          <label className='text-gray-800'>Where to?</label>
          <input type="text"
          className='rounded-md border-[1px] w-full p-2 outline-none focus:border-purple-200' />
        </div>
      </form>
    </div>
  )
}

export default AutoCompleteAddress
