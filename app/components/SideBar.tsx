"use client"
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';

const SideBar = () => {
    const { data: session } = useSession();

    if (!session) return null;

    const user = session.user;

    const handleLogout = () => {
        signOut({ callbackUrl: '/' });
    };

    return (
        <div className="w-64 h-full bg-gray-800 text-white p-4">
            <div className="flex flex-col items-center">
                <Image
                    src={user?.image as string}
                    alt="User Avatar"
                    className="rounded-full"
                    width={80}
                    height={80}
                    priority={false}
                />
                <h1 className="mt-2 text-xl font-semibold">{user?.name}</h1>
                <p className="text-sm">{user?.email}</p>
                <button
                    className="mt-4 border border-red-500 rounded-lg px-4 py-2"
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-semibold">Bookmarks</h2>
                <ul id="bookmarks-list">
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
