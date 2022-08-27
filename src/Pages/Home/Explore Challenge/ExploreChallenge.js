import React from 'react';
import './ExploreChallenge.css';

const ExploreChallenge = () => {
    return (
        <section className='bg-[#002A3B] py-[70px]' >
            <h3 className='text-center text-3xl text-white py-5' >Explore Challenge</h3>
            <div className='text-center' >
                <div className='searchParent flex justify-center items-center' >
                    <input className='rounded-md w-[50%] placeholder:font-[300] search-inputField' type="text" name="search" id="" placeholder='Search ' />
                    <span className='searchIcon' >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ExploreChallenge;