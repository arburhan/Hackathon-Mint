import React from 'react';
import { useState } from 'react';
import ChallengeCard from './ChallengeCard';
import { challengeData } from './challengeData';
import './ExploreChallenge.css';

const ExploreChallenge = () => {
    const [dropdown, setDropdown] = useState(false);
    const [hackData, setHackData] = useState({});

    return (
        <section className='bg-[#002A3B] py-[70px] relative' >
            <h3 className='text-3xl text-white py-10 text-center' >Explore Challenge</h3>
            <div className='pl-[150px] flex gap-4' >
                <div className='relative' >
                    <span className='absolute top-2 left-3' >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input className='rounded-md w-[830px] placeholder:font-[300] search-inputField' type="text" name="search" id="" placeholder='Search ' />
                </div>
                <div className='cursor-pointer'>
                    {/* <select className='p-2 rounded-md' name="filter" id="">
                        <optgroup className='p-2 rounded-md' label="Flying cats">
                            <option value="Filter">Filter</option>
                            <option value="Cat">Cat</option>
                            <option value="Cat">Cat</option>
                            <div>
                                <input type="checkbox" id="scales" name="scales" checked />
                                <label for="scales">Scales</label>
                            </div>
                        </optgroup>
                    </select> */}
                    {dropdown === false ?
                        <div
                            onClick={() => {
                                setDropdown(true)
                            }}
                            className='flex duration-100   absolute bg-white p-2 rounded-md text-black' >
                            <p className='px-2' >Filter</p>
                            <figure className='pl-2' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </figure>
                        </div>
                        :
                        <div
                            className='duration-100  w-[290px] bg-white pl-4 py-6 rounded-md text-black absolute z-10 shadow-2xl' >
                            <div
                                onClick={() => {
                                    setDropdown(false)
                                }}
                                className='flex justify-between items-center pb-[14px]' >
                                <p className='text-lg' >Filter</p>
                                <figure className='pr-7' >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </figure>
                            </div>
                            <div>
                                <hr className='px-2 text-[#ECECEC] w-[265.01px] pb-[22px]' />
                                <fieldset>
                                    <legend>Status</legend>
                                    <p><label htmlFor="All"><input type="checkbox" name="status" id="All" /> All </label></p>
                                    <p><label htmlFor="Active"><input type="checkbox" name="status" id="Active" /> Active </label></p>
                                    <p><label htmlFor="Upcoming"><input type="checkbox" name="status" id="Upcoming" /> Upcoming </label></p>
                                    <p><label htmlFor="Past"><input type="checkbox" name="status" id="Past" /> Past </label></p>
                                </fieldset>
                            </div>
                            <div>
                                <hr className='px-2 text-[#ECECEC] w-[265.01px] pb-[22px]' />
                                <fieldset>
                                    <legend>Level</legend>
                                    <p><label htmlFor="Easy"><input type="checkbox" name="Level" id="Easy" /> Easy </label></p>
                                    <p><label htmlFor="Medium"><input type="checkbox" name="Level" id="Medium" /> Medium </label></p>
                                    <p><label htmlFor="Hard"><input type="checkbox" name="Level" id="Hard" /> Hard </label></p>
                                </fieldset>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='grid grid-cols-3 justify-items-center gap-y-14  py-10' >
                {
                    challengeData.map(data => <ChallengeCard key={data?._id} data={data} ></ChallengeCard>)
                }
            </div>
        </section >
    );
};

export default ExploreChallenge;