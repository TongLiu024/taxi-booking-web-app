import { UserLocationContext } from '@/context/UserLocationContext'
import { useContext } from 'react'
import { Map } from 'react-map-gl'


const MapBoxMap = () => {
    const [userLocation, setUserLocation] = useContext(UserLocationContext)
  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-bold mb-2'>Map</h2>
        <div className='rounded-lg overflow-hidden'>
        {userLocation?
        (<Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
        longitude:userLocation?.lng,
        latitude:userLocation?.lat,
        zoom: 14
        }}
        style={{width:"100%", height: 450, borderRadius:15 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        />):null 
        }
        
        </div>
    </div>
  )
}

export default MapBoxMap
