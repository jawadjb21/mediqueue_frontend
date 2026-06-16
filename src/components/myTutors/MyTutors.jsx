import { auth } from '@/lib/auth';
import { getMyTutors } from '@/lib/getMyTutors';
import { headers } from 'next/headers';
import React from 'react';
import TutorAccordion from './TutorAccordion';
import EmptyState from './EmptyState';

const MyTutorsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const myTutors = await getMyTutors(user.id);
    console.log(myTutors);
    return (
        <>
            {
                myTutors.length > 0 ?
                    <TutorAccordion myTutors={myTutors}></TutorAccordion>
                    : <EmptyState></EmptyState>
            }
        </>
    );
};

export default MyTutorsPage;