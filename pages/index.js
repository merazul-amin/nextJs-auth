import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div>
      {
        session?.user?.email ?
          <button onClick={signOut}>Sign Out</button>
          :
          <button onClick={signIn}>Sign In</button>
      }

      <h1>{session?.user?.email ? session?.user?.email : 'Not Logged In'}</h1>
      <br />
      <br />
      <Link href={'/dashboard'}>Dashboard</Link>
    </div>
  )
}
