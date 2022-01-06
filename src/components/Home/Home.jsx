import React, { useState, useEffect, useRef } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/hi';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile, Login } from '../index';
import { client } from '../../client';
import logo from '../../assets/logo.png';



const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <UserProfile />
            <Sidebar />

        </div>
    )
}

export { Home }
