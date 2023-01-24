import React from 'react';

const WhyPCard = ({ image, cardTitle, description }) => {
    return (
        <div className='px-[35px] py-[60px] bg-[#e8ebf7] rounded-xl cursor-pointer hover:bg-[#e9eaec]' >
            <figure>
                <img src={image} alt="" />
            </figure>
            <h3 className='text-[22px] text-[#000000] py-3 font-semibold' >{cardTitle}</h3>
            <p className='text-[#64607D]' >{description}</p>
        </div>
    );
};

export default WhyPCard;