import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMaps } from '../redux/mapSlice'
import Loading from '../layouts/Loading'
import MapCard from '../components/MapCard'

const Maps = () => {
    const dispatch = useDispatch()
    const {maps, mapsStatus} = useSelector(state => state.maps)

    useEffect(()=>{
        dispatch(getMaps())
    }, [dispatch])

    console.log(maps);
  return (
    <div className='flex flex-wrap gap-3 justify-center py-6 gap-5'>
            {mapsStatus === 'LOADING' ? (
                <Loading />
            ) : (
                <Fragment>
                    {
                        maps?.map((map, index) =>{
                           return <MapCard key={index} map={map}/>
                        })
                    }
                </Fragment>
            )}
        </div>
  )
}

export default Maps