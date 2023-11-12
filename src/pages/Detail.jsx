import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAgentDetail } from '../redux/agentSlice'
import DetailComp from '../components/DetailComp'
import Loading from '../layouts/Loading'

const Detail = () => {

    const {uuid} = useParams()
    const dispatch = useDispatch()
    const {agentDetail, agentDetailStatus} = useSelector(state =>state.agents)

    useEffect(() => {
        dispatch(getAgentDetail(uuid))
    }, [dispatch, uuid])

  return (
    <div>
    {
        agentDetailStatus == "LOADING" ? <Loading/> : <DetailComp agentDetail={agentDetail}/>
    }
</div>
  )
}

export default Detail