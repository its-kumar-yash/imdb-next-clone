"use client"

import { signIn, signOut, useSession } from "next-auth/react";

const SignUp = () => {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <>
                    <img src={session.user?.image as string} className="rounded-full h-20 w-20" />
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
                        <h1 className="text-3xl text-red-500 font-bold">You're not logged in</h1>
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
