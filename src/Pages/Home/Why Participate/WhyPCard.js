import React from 'react';

const WhyPCard = ({ image, cardTitle, description }) => {
    return (
        <div className='p-[30px] bg-[#F8F9FD]' >
            <figure>
                <img src={image} alt="" />
            </figure>
            <h3 className='text-[22px] text-[#000000]' >{cardTitle}</h3>
            <p className='text-[#64607D]' >{description}</p>
        </div>
    );
};

export default WhyPCard;