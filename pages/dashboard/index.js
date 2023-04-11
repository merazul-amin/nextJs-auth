import React, { useEffect, useState } from 'react';
import { getSession, signIn, signOut, session } from "next-auth/react"

const DashboardPage = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const securePage = async () => {
            const session = await getSession();
            if (!session) {
                signIn();
            }
            else {
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
                session?.user?.email ?
                    <button onClick={signOut}>Sign Out</button>
                    :
                    <button onClick={signIn}>Sign In</button>
            }
        </div>
    );
};

export default DashboardPage;