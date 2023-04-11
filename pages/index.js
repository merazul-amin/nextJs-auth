import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      {
        session?.user?.email ?
          <button onClick={signOut}>Sign Out</button>
          :
          <button onClick={signIn}>Sign In</button>
      }
      <br />
      <br />
      <Link href={'/dashboard'}>Dashboard</Link>
    </div>
  )
}
