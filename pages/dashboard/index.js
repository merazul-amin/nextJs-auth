import React, { useEffect, useState } from 'react';
import { getSession, signIn, signOut, session } from "next-auth/react"

const DashboardPage = () => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const securePage = async () => {
            const session = await getSession();
            console.log(session)
            if (!session) {
                signIn();
            }
            else {
                setUser(session);
                setLoading(false);
            }
        }
        securePage()
    }, []);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            <h1>This is Dashboard</h1>
            {
                user?.user?.email ?
                    <button onClick={signOut}>Sign Out</button>
                    :
                    <button onClick={signIn}>Sign In</button>
            }
        </div>
    );
};

export default DashboardPage;