import { authClient } from '@/lib/auth-client';
import { getMyTutors } from '@/lib/getMyTutors';
import React from 'react';

const page = async () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const myTutors = await getMyTutors(user.id);

    return (
        <div>

        </div>
    );
};

export default page;