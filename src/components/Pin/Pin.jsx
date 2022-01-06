import React, { useState } from 'react'
import { urlFor, client } from '../../client'
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { MdDownloadForOffline } from 'react-icons/md'
import { AiTwotooneDelete } from 'react-icons/ai'
import { BsFillArrowUpRIghtCircleFill } from 'react-icons/bs'


const Pin = ({ pin: { postedBy, image, _id, destination } }) => {

    const navigate = useNavigate();

    const [postHovered, setPostHovered] = useState(false)
    const [savingPost, setSavingPost] = useState(false)



    return (
        <>
            <div className="m-2">
                <div
                    onMouseEnter={() => setPostHovered(true)}
                    onMouseLeave={() => setPostHovered(false)}
                    onClick={() => navigate(`/pin-detail/${_id}`)}
                    className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration=500 ease-out'
                >
                    <img
                        className="rounded-lg w-full"
                        alt="user-post"
                        src={urlFor(image).width(250).url()}
                    />
                    {postHovered && (
                        <div
                            style={{ height: '100%' }}
                            className="absolute top-0 width-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50">

                            <div className="flex items-center justify-between ">
                                <div className="flex gap-2">
                                    <a
                                        href={`${image?.asset?.url}?dl=`}
                                        onClick={(e) => e.stopPropagation()}
                                        className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark-xl opacity-75 hover:shadow-md outline-none'
                                    >
                                        <MdDownloadForOffline />
                                    </a>
                                </div>

                            </div>
                        </div>
                    )}


                </div>





            </div>
        </>
    )
}

export { Pin }
