import React from 'react';
import Notebook from '../../../Assests/Images/notebook.png';
import Team from '../../../Assests/Images/team.png';
import Robot from '../../../Assests/Images/Robot.png';
import Identification from '../../../Assests/Images/IdentificationCard.png';
import WhyPCard from './WhyPCard';

const WhyParticipate = () => {
    const cardTitle1 = "Prove your skills";
    const cardTitle2 = "Learn from community";
    const cardTitle3 = "Challenge yourself";
    const cardTitle4 = "Earn recognition";
    const description1 = "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.";
    const description2 = "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.";
    const description3 = "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.";
    const description4 = "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.";
    return (
        <section>
            <h2 className="text-3xl">Why Participate in <span className='text-[#44924C]' >AI Challenges?</span> </h2>
            <div className=' flex flex-col md:grid md:grid-cols-2 gap-9 md:px-[80px] px-[20px] py-[20px] md:py-[40px] ' >
                <WhyPCard image={Notebook} cardTitle={cardTitle1} description={description1} ></WhyPCard>
                <WhyPCard image={Team} cardTitle={cardTitle2} description={description2} ></WhyPCard>
                <WhyPCard image={Robot} cardTitle={cardTitle3} description={description3} ></WhyPCard>
                <WhyPCard image={Identification} cardTitle={cardTitle4} description={description4} ></WhyPCard>
            </div>
        </section>
    );
};

export default WhyParticipate;