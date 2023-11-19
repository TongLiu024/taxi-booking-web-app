import { get } from 'http';
import React, { useEffect, useState } from 'react'

/**
 * the type of pick-up and destination addrsses
 */
interface address{
  address: String;

}

/**
 * 
 * @returns the react component for the Autocomplete address input box as part of the UI
 */
const AutoCompleteAddress = () => {

  const address1: address = {address:"digd"};
  const address2: address = {address: "sgd"};
  const [source, setSource] = useState<any>('');
  const [addressList, setAddressList] = useState<any>([address1, address2]);


  // //to get the addresslist according to the source 
  // const getAddressList = async() => {
    
  //   const res = await fetch('/api/search_address?q='+source, 
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   });

  //   const result = await res.text();
  //   setAddressList(result);
    
  // }


  // //to call the getAddressList every time the input changes 
  // useEffect(() => {
  //   //setTimeOut fucntion get called, its inner function gets called and the the call stack does not stop until 1000 ms has passed 
  //   //setTimeOut function has to be called within the ClearTimeOut function 
  //   //every time user key in some letter, the useEffect get called, and deleyDeboundFn get called using setTimeOut, only after 1000 ms it can get called again,
  //   //WITH THE cleanup function, if the user key in another letter within 1000 ms, the useEFFECT get called again, the clean up function will be called and the timer get resets to starting 1000 ms counting down

  //   const delayDeboundFn = setTimeout(() => {
  //     getAddressList()  
  //   }, 1000);

  //   return () => clearTimeout(delayDeboundFn);

  // }, [source])









  return (
    <div className='text-black mt-4'>
      <form action="">
        <div>
          <label className='text-gray-800'>Where From?</label>
          <input type='text' 
          className='rounded-md border-[1px] w-full p-2 outline-none focus:border-purple-200' 
          value = {source}
          onChange={(e)=> setSource(e.target.value)}
          />
        <div className='shadow-md p-1 rounded-md relative w-full bg-gray-50'>
            {addressList.map((item:any, index: number) => (
              <h2 className='p-3 hover:bg-purple-50 cursor-pointer'
              onClick={()=>{setSource(item.address); setAddressList([]);}}>{item.address}</h2>
            ))}
          </div>
          {/* {addressList?.suggestions?
          <div className='shadow-md p-1 rounded-md absolute w-full bg-purple-50'>
            {addressList?.suggestions.map((item:any, index: number) => (
              <h2 className='p-3 hover:bg-gray-50 cursor-pointer'
              onClick={()=>{setSource(item.full_address); setAddressList([]);}}>{item.full_address}</h2>
            ))}
          </div>:null
          } */}
            
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
