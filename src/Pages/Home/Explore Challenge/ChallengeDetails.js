import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { challengeData } from './challengeData';

const ChallengeDetails = () => {
    const [cardId, setCardId] = useState([]);
    const { id } = useParams();
    console.log(id);
    // bring to top
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        const filterData = challengeData.filter((obj) => obj?._id === parseInt(id));
        setCardId(filterData);
    }, [id]);
    console.log(cardId);


    return (
        <div>


        </div>
    );
};

export default ChallengeDetails;