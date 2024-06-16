"use client"

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Page() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className='max-w-6xl mx-auto p-3 space-y-4'>
            {session ? (
                <>
                    <Image src={session.user?.image as string} className="rounded-full h-20 w-20" alt="User profile picture" width={80} height={80} />
                    <div>
                        <h1 className="text-3xl text-green-500 font-bold">Welcome Back!! {session.user?.name}</h1>
                        <h1 className="text-2xl font-semibold">{session.user?.email}</h1>
                    </div>
                    <div className="flex space-x-5">
                        <button className="border border-blue-500 rounded-lg px-5 py-1" onClick={handleGoHome}>Go Home</button>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <h1 className="text-3xl text-red-500 font-bold">You&#39;re not logged in</h1>
                    </div>
                    <div className="flex space-x-5">
                        <button className="border border-white rounded-lg px-5 py-1" onClick={() => signIn("google")}>SignIn with Google</button>
                    </div>
                </>
            )}
        </div>
    )
}
