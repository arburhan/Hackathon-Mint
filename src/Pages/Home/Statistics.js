import React from 'react';
import healingIcon from '../../Assests/Images/ai-healing.png';
import dataScientist from '../../Assests/Images/data-scientist.png';
import AiIcon from '../../Assests/Images/eos-icon.png';

const Statistics = () => {
    return (
        <section className='bg-[#002A3B] text-white py-10' >
            <div className='flex justify-center flex-col md:flex-row ' >
                <div className='flex items-center border-b-0 md:border-r-2 border-[#C4C4C4] px-12' >
                    <div className='px-5' >
                        <figure className='bg-white rounded-md w-[35px]'>
                            <img className='p-[8px] ' src={AiIcon} alt="" />
                        </figure>
                    </div>
                    <div>
                        <h3 className='font-semibold'>100K+</h3>
                        <p className=' text-[15px]' >AI Model Submissions</p>
                    </div>
                </div>
                <div className='flex items-center border-b-0 md:border-r-2 py-7 md:py-0 border-[#C4C4C4] px-12' >
                    <div className='px-5' >
                        <figure className='bg-white rounded-md w-[35px]'>
                            <img className='p-[8px]' src={dataScientist} alt="" />
                        </figure>
                    </div>
                    <div>
                        <h3 className='font-semibold'>50K+</h3>
                        <p className=' text-[15px]' >Data Scientist</p>
                    </div>
                </div>
                <div className='flex items-center px-12' >
                    <div className='px-5' >
                        <figure className='bg-white rounded-md w-[35px]'>
                            <img className=' p-[8px]' src={healingIcon} alt="" />
                        </figure>
                    </div>
                    <div>
                        <h3 className='font-semibold'>100+</h3>
                        <p className=' text-[15px]' >AI Challange Hosted</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;