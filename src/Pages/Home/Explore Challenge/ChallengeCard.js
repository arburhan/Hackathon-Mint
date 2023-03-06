import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountDown from './CountDown';

const ChallengeCard = ({ data }) => {
    const navigate = useNavigate();
    const handleParticipate = _id => {
        navigate(`/challenge/${_id}`);
    }
    return (
        <div className="card w-[354px] shadow-xl">
            <figure className="">
                <img src={data?.image} alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center gap-0 py-7 bg-white text-black ">
                <p>Coming</p>
                <h2 className=" text-base font-bold pt-4 pb-5">{data?.name}</h2>
                <div className='pb-8' >
                    <p className='pb-2 text-[#444444]'>Starts in</p>
                    <CountDown />
                </div>
                <div className="">
                    <button
                        onClick={() => { handleParticipate(data?._id) }}
                        className="bg-[#44924C] text-white py-3 px-6 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline pr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>Perticipate Now</button>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;