import React from 'react';
import rocketImage from '../../../Assests/Images/rocket.png';

const Banner = () => {
    return (

        < section className='bg-[#003145] px-10px md:px-[70px] text-white md:pt-[100px] md:py-5' >

            <div className='flex flex-col md:flex md:flex-row items-center justify-center ' >
                <div className='py-3 px-5 md:px-[60px] order-last md:order-first'>
                    <h1 className="text-2xl pl-4 md:text-5xl border-l-[5px] border-[#FFCE5C] ">Accelerate Innovation with Global AI Challanges</h1>
                    <p className='py-[35px]'>
                        AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                        Create Challenge
                    </p>
                    <button className='btn bg-white text-black hover:text-white' >Participate Now</button>
                </div>
                <div className='py-3 w-[90%] mx-auto order-first md:order-last'>
                    <figure>
                        <img src={rocketImage} alt="" />
                    </figure>
                </div>
            </div>

        </section >
    );
};

export default Banner;