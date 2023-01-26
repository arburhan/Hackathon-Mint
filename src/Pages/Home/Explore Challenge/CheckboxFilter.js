import React from 'react';


const CheckboxFilter = ({ status }) => {

    return (
        <>
            <p className='text-[#858585] mt-2 text-[14px]' >
                <label htmlFor={status?.name} className='cursor-pointer' >
                    <input type="checkbox" name="status" id={status?.name} value={"status?.name"} /> {status?.name}
                </label>
            </p>
        </>
    );
};

export default CheckboxFilter;