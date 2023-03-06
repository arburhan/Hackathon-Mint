import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { challengeData } from './challengeData';

const ChallengeDetails = () => {
    const [challengedata, setChallengeData] = useState([]);
    const { id } = useParams();
    console.log(id);
    // bring to top
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        const filterData = challengeData.filter((obj) => obj?._id === parseInt(id));
        setChallengeData(filterData);
    }, [id]);
    console.log(challengedata);


    return (
        <section>

            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Starts on {moment().format("MMM Do YY")}

                </div>
            </div>


        </section>
    );
};

export default ChallengeDetails;