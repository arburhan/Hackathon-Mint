import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AdminPage = () => {
    const [previewImage, setPreviewImage] = useState("");
    const { register, getValues, setError, formState: { errors }, handleSubmit, watch } = useForm({ mode: "onBlur" });
    const startDate = watch('startDate');
    const endDate = watch('endDate');

    useEffect(() => {
        if (startDate && endDate && startDate > endDate) {
            setError('endDate', { type: 'manual', message: 'End date must be after start date' });
        }
    }, [startDate, endDate, setError]);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const onSubmit = (data) => {
        console.log(data);

    };


    return (
        <section className='bg-white text-black px-2 md:pl-[90px] py-8 ' >
            <h1 className='text-2xl bg-[#F8F9FD]' >Challenge Details</h1>
            <div className='py-8' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text text-black">Challenge Name</span>
                        </label>
                        <input
                            type="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-md border-[#B7B7B7] bg-white"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text text-black">Starting Date</span>
                        </label>
                        <input
                            onfocus="(this.type='date')"
                            type="date"
                            placeholder="Add Start Date"
                            className="input input-bordered w-full max-w-md  border-[#B7B7B7] bg-white"
                            {...register("startDate", {
                                required: {
                                    value: true,
                                    message: 'Date is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.startDate?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.startDate?.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text text-black">End Date</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Add End Date"
                            className="input input-bordered w-full max-w-md border-[#B7B7B7] bg-white"
                            {...register("endDate", {
                                required: {
                                    value: true,
                                    message: 'Date is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.endDate?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.endDate?.message}</span>}
                            {errors?.endDate?.type === 'manual' && <span className="label-text-alt text-red-500">{errors?.endDate?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-md border-[#B7B7B7] bg-white"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                            {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-[810px] ">
                        <label className="label">
                            <span className="label-text text-black">Description</span>
                        </label>
                        <textarea {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            },
                            maxLength: {
                                value: 900,
                                message: 'Cannot be greater than 255 charecter'
                            }
                        })} className="textarea textarea-bordered h-64 border-[#B7B7B7] bg-white" placeholder="Details about challenges "></textarea>
                        <label className="label">
                            {errors?.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.description.message}</span>}
                            {errors?.description?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors?.description.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-sm ">
                        <label className="label">
                            <span className="label-text text-black">Image</span>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            className="input input-bordered w-full max-w-md border-[#B7B7B7] bg-white"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                },
                                pattern: {
                                    value: /\.(jpeg|jpg|png)$/i,
                                    message: 'Provide a jpeg, jpg or png image format'
                                }
                            })}
                            onChange={handleImageChange}
                        />
                        {previewImage && <img src={previewImage}
                            style={{ width: "150px", height: "150px" }} alt="Preview" />}

                        <label className="label">
                            {errors?.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image.message}</span>}
                            {errors?.image?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors?.image.message}</span>}
                        </label>
                    </div>
                    <div className="form-control py-3">
                        <p>Level Type</p>
                        <div className="input-group ">
                            <select className="select select-bordered rounded-lg bg-white my-2">
                                <option selected>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                    </div>
                    <input className='px-[18px] py-2 bg-[#44924C] rounded-lg text-white' value="Create Challenge" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AdminPage;