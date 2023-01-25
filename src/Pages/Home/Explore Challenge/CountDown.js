import React, { useEffect, useState } from 'react';

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    function getTimeLeft() {
        const targetDate = new Date("Jan 31, 2023 23:30:00").getTime();
        const currentDate = new Date().getTime();
        const timeLeft = targetDate - currentDate;
        if (timeLeft < 0) {
            return {
                days: ("00"),
                hours: ("00"),
                minutes: ("00"),
                seconds: ("00"),
            };
        }
        return {
            days: ("0" + Math.floor(timeLeft / (1000 * 60 * 60 * 24))).slice(-2),
            hours: ("0" + Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
            minutes: ("0" + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
            seconds: ("0" + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2),
        };


    }
    return (
        <div>
            {<div>
                <div className='flex text-lg'>
                    <div className='' >
                        {timeLeft.days}
                        <span className='px-4' >
                            :
                        </span>
                    </div>

                    <div>
                        {timeLeft.hours}
                        <span className='px-4' >
                            :
                        </span>
                    </div>

                    <div> {timeLeft.minutes}</div>

                </div>
                <div className='flex text-xs gap-5'>
                    <div>
                        Days
                    </div>
                    <div>
                        Hours
                    </div>
                    <div>
                        Minutes
                    </div>

                </div>
            </div>}
        </div>
    );
};

export default CountDown;