import React from 'react';
import { useState } from 'react';
import ChallengeCard from './ChallengeCard';
import { challengeData } from './challengeData';
import CheckboxFilter from './CheckboxFilter';
import './ExploreChallenge.css';

const ExploreChallenge = () => {
    const [dropdown, setDropdown] = useState(false);
    // const [hackData, setHackData] = useState({});

    const statusData = [
        {
            _id: 1,
            name: "All"
        },
        {
            _id: 2,
            name: "Upcoming"
        },
        {
            _id: 3,
            name: "Active"
        },
        {
            _id: 4,
            name: "Past"
        },
    ];
    const levelData = [
        {
            _id: 1,
            name: "Easy"
        },
        {
            _id: 2,
            name: "Medium"
        },
        {
            _id: 3,
            name: "Hard"
        },
    ]

    return (
        <section className='' >
            {/* search & filter option */}
            <div className='bg-[#002A3B] relative pt-5 pb-24'>
                <h3 className='text-3xl text-white py-10 text-center' >Explore Challenge</h3>
                <div className='lg:pl-[150px] md:pl-[70px] flex flex-col md:flex-row items-center  md:items-start gap-4' >
                    <div className='relative' >
                        <span className='absolute top-2 left-3' >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input className='rounded-md  md:w-[380px] lg:w-[580px] xl:w-[830px] placeholder:font-[300] search-inputField' type="text" name="search" id="" placeholder='Search ' />
                    </div>
                    <div>
                        {dropdown === false ?
                            <div
                                onClick={() => {
                                    setDropdown(true)
                                }}
                                className='flex duration-100   absolute bg-white p-2 rounded-md text-black cursor-pointer smFilterBtn' >
                                <p className='px-2' >Filter</p>
                                <figure className='pl-2' >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </figure>
                            </div>
                            :
                            <div
                                className='duration-100 w-[200px] md:w-[290px] lg:w-[260px] xl:w-[290px] bg-white pl-4 pt-6 pb-3 rounded-md text-black absolute z-10  shadow-2xl smFilterBtn' >
                                <div
                                    onClick={() => {
                                        setDropdown(false)
                                    }}
                                    className='flex justify-between items-center pb-[14px] cursor-pointer' >
                                    <p className='text-lg' >Filter</p>
                                    <figure className='pr-7' >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </figure>
                                </div>
                                <hr className='px-2 text-[#ECECEC] w-[170px] xl:w-[265.01px]' />
                                <div className='py-4' >
                                    <fieldset>
                                        <legend className='text-[#666666]' >Status</legend>
                                        {
                                            statusData.map(status => <CheckboxFilter key={status._id} status={status} />)
                                        }
                                    </fieldset>
                                </div>
                                <hr className='px-2 text-[#ECECEC] w-[170px] xl:w-[265.01px]' />
                                <div className='py-4'>
                                    <fieldset>
                                        <legend className='text-[#666666]' >Level</legend>
                                        {
                                            levelData.map(status => <CheckboxFilter key={status._id} status={status} />)
                                        }
                                    </fieldset>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/* challenges */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-14 pt-20 pb-32 bg-[#003145]' >
                {
                    challengeData.map(data => <ChallengeCard key={data?._id} data={data} ></ChallengeCard>)
                }
            </div>
        </section >
    );
};

export default ExploreChallenge;