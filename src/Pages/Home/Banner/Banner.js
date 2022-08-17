import React from 'react';
import rocketImage from '../../../Assests/Images/rocket.png';

const Banner = () => {
    return (
        <section className='bg-[#003145] px-20px md:px-[120px] text-white py-[120px]' >
            <div>
                <div className=' md:grid grid-cols-4 ' >
                    <div className='md:col-span-3 px-5 order-0 '>
                        <h1 className="text-3xl pl-4 md:text-5xl border-l-[5px] border-[#FFCE5C] ">Accelerate Innovation with Global AI hallanges</h1>
                        <p className='py-[35px]'>
                            AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                            Create Challenge
                        </p>
                        <button className='btn bg-white text-black hover:text-white' >Participate Now</button>
                    </div>
                    <div className='col-span-1 mx-auto order-1 '>
                        <img src={rocketImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;