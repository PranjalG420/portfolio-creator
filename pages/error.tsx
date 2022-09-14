import { GetServerSideProps } from "next";

export default function UnknownError({ code, message }) {
    return (
        <div>
            <div className="mx-auto mb-16 flex max-w-4xl flex-col items-start justify-center space-y-8">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                    {code} - {message}
                </h1>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                    <blockquote className="border-l-4 border-gray-300 p-2 px-4 dark:border-gray-700">
                        <code>ERROR {code}</code>
                    </blockquote>
                </p>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    console.log(req.url);
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const message = url.searchParams.get("message");

    if (code && message) {
        return {
            props: {
                code,
                message,
            },
        };
    } else {
        return {
            notFound: true,
        };
    }
};
