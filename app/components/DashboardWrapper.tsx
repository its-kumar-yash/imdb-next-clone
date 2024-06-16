"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import MenuItem from './MenuItem';
import { MdDashboard } from 'react-icons/md';
import { FaSignInAlt } from "react-icons/fa";


export default function DashboardWrapper() {
    const { data: session } = useSession();

    return (
        <div>
            {session ? (<MenuItem title="dashboard" address="/dashboard" Icon={MdDashboard} />) : (<MenuItem title="signup" address="/signup" Icon={FaSignInAlt} />)}
        </div>
    )
}
