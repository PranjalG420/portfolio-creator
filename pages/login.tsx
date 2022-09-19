// import { GetServerSideProps } from "next";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// export default function email() {
//     const [user, setUser] = useState("");
//     const [password, setPassword] = useState("");
//     const [state, setState] = useState(true);
//     const router = useRouter();
//     const handleSend = async () => {
//         try {
//             setState(false);
//             await fetch("/api/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     user: user,
//                     password: password,
//                 }),
//             });
//             router.push("/");
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return (
//         <>
//             <h1>LOGIN</h1>
//             {state ? (
//                 <form onSubmit={handleSend}>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="user-login"
//                             onChange={(e) => {
//                                 setUser(e.target.value);
//                             }}
//                         ></input>
//                     </div>
//                     <div>
//                         <input
//                             type="password"
//                             placeholder="pass-login"
//                             onChange={(e) => {
//                                 setPassword(e.target.value);
//                             }}
//                         ></input>
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             ) : (
//                 "Thanks for Submitting!"
//             )}
//             <a href="register">Register page</a>
//         </>
//     );
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const user = context.req.cookies.user ?? null;
//     console.log(user);
//     if (user) {
//         return {
//             redirect: {
//                 destination: "/",
//                 permanent: false,
//             },
//         };
//     }

//     return {
//         props: { user },
//     };
// };

import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
    return (
        <>
            <div className="flex justify-around">
                <form
                    method="post"
                    action="/api/auth/callback/credentials"
                    className="text-xl flex flex-col items-center mt-10 rounded-2xl px-20 py-[60px] bg-zinc-900"
                >
                    <input
                        name="csrfToken"
                        type="hidden"
                        defaultValue={csrfToken}
                    />
                    <label className="mb-5 font-bold text-3xl">Sign In</label>
                    <label className="">
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            className="px-2 py-1 rounded border-4"
                        />
                    </label>
                    <label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="px-2 py-1 my-5 rounded border-4"
                        />
                    </label>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-700 font-semibold rounded hover:bg-slate-300 hover:text-black transition-colors"
                    >
                        Submit
                    </button>
                    <label className="text-xl text-neutral-600 italic mt-5">
                        Don't have an account? Register{" "}
                        <a
                            href="/register"
                            className="hover:text-blue-500 transition-colors underline"
                        >
                            here
                        </a>
                        {"."}
                    </label>
                </form>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}
