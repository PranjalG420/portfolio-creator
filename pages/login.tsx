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
        <form
            method="post"
            action="/api/auth/callback/credentials"
            className="text-2xl flex flex-col items-center mt-20 bg-zinc-900 py-20 rounded"
        >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <p className="mb-10 font-bold">Sign Up</p>
            <label className="mb-10">
                <input name="username" type="text" placeholder="Username" />
            </label>
            <label>
                <input name="password" type="password" placeholder="Password" />
            </label>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-700 mt-10 rounded "
            >
                Sign in
            </button>
        </form>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}
