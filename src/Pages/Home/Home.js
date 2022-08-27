import React from 'react';
import Banner from './Banner/Banner';
import ExploreChallenge from './Explore Challenge/ExploreChallenge';
import Statistics from './Statistics';
import WhyParticipate from './Why Participate/WhyParticipate';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Statistics></Statistics>
            <WhyParticipate></WhyParticipate>
            <ExploreChallenge></ExploreChallenge>
        </>
    );
};

export default Home;