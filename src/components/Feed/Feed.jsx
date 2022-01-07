import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../../client';
import { feedQuery, searchQuery } from '../../utils/data';
import { MasonryLayout } from '../MasonryLayout/MasonryLayout'
import { Spinner } from '../Spinner/Spinner'



const Feed = () => {

    const [loading, setLoading] = useState(false)
    const [pins, setPins] = useState(null)
    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) {
            setLoading(true)
            const query = searchQuery(categoryId)

            client.fetch(query)
                .then((data) => {
                    setPins(data)
                    setLoading(false)
                })

        } else {
            client.fetch(feedQuery)
                .then((data) => {
                    setPins(data)
                    setLoading(false)
                })

        }
    }, [categoryId]);


    if (loading) return <Spinner message={`We are fetching ${categoryId} images for you!`} />

    if (!pins?.length) return <h2 className='flex justify-center items-center'>No Images are available for <span className='font-bold mx-2'>{categoryId}</span> category  </h2>

    return (
        <>
            {pins && <MasonryLayout pins={pins} />}
        </>
    )
}

export { Feed }
