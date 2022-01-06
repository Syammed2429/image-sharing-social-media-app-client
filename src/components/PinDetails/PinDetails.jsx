import React, { useState } from 'react'
import { MdDownloadForOffline } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { client, urlFor } from '../../client';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import { pinDetailMorePinQuery, pinDetailQuery } from '../../utils/data';
import { Spinner } from '../Spinner/Spinner';




const PinDetails = ({ user }) => {
    const [pins, setPins] = useState(null);
    const [pinDetails, setPinDetails] = useState(null);
    const [comment, setComment] = useState('');
    const [addingComment, setAddingComment] = useState(false)


    return (
        <>

        </>
    )
}

export { PinDetails }
