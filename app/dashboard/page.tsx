import React from 'react'
import SideBar from '../components/SideBar';

export default function page() {
  return (
    <div className="flex h-screen">
    <SideBar />
    <div className="flex-grow p-6">
        <h1 className="text-2xl font-semibold">Your Bookmarked Movies</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        </div>
    </div>
</div>
  )
}
