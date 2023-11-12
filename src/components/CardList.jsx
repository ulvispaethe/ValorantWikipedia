import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAgents } from '../redux/agentSlice';
import Loading from '../layouts/Loading';
import Card from './Card';

const CardList = () => {
    const dispatch = useDispatch();
    const { agents, agentsStatus } = useSelector((state) => state.agents);

    useEffect(() => {
        dispatch(getAgents());
    }, [dispatch]);

    return (
        <div className='flex flex-wrap gap-3 justify-center py-3'>
            {agentsStatus === 'LOADING' ? (
                <Loading />
            ) : (
                <Fragment>
                    {
                        agents?.map((agent, index) =>{
                           return <Card agent={agent} key={index}/>
                        })
                    }
                </Fragment>
            )}
        </div>
    );
};

export default CardList;
