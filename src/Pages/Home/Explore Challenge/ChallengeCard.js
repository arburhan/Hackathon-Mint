import React from 'react';
import CountDown from './CountDown';

const ChallengeCard = ({ data }) => {
    return (
        <div className="card w-[354px] shadow-xl">
            <figure className="">
                <img src={data?.image} alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center py-7 bg-white text-black ">
                <p></p>
                <h2 className=" text-base font-bold">{data?.name}</h2>
                <CountDown />
                <div className="">
                    <button className="bg-[#44924C] text-white py-3 px-6 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline pr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>Perticipate Now</button>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;