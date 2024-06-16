"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';

const SignUp = () => {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <>
                    <Image src={session.user?.image as string} className="rounded-full h-20 w-20" alt="User profile picture" width={80} height={80} />
                    <div>
                        <h1 className="text-3xl text-green-500 font-bold">Welcome Back!! {session.user?.name}</h1>
                        <h1 className="text-2xl font-semibold">{session.user?.email}</h1>
                    </div>
                    <div className="flex space-x-5">
                        <button className="border border-red-500 rounded-lg px-5 py-1" onClick={() => signOut()}>SignOut</button>
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
        </>
    )
}

export default SignUp;
