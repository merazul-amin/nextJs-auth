import { getCsrfToken, getProviders, signIn, useSession, getSession } from "next-auth/react"
import { useRouter } from "next/router";


// import { authOptions } from "./api/auth/[...nextauth]";
export default function SignIn({ csrfToken, providers }) {
    const { data: session } = useSession();
    const router = useRouter();
    if (session) {
        router.push(router.query.callbackUrl);
    }

    return (
        <>
            <form method="post" action="/api/auth/signin/email">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label>
                    Email address
                    <input type="email" id="email" name="email" />
                </label>
                <button type="submit">Sign in with Email</button>
            </form>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context)
    const providers = await getProviders();

    const session = await getSession(context);
    // console.log(session)
    // if (session) {
    //     return { redirect: { destination: "/" } };
    // }
    return {
        props: { csrfToken, providers: providers || [] },
    }
}