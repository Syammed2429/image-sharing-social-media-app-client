import React from 'react'
import { urlFor } from '../../client'

const Pin = ({ pin: { postedBy, image, id, destination } }) => {
    return (
        <>
            <img
                className="rounded-lg w-full"
                alt="user-post"
                src={urlFor(image).width(250).url()}
            />
        </>
    )
}

export { Pin }
