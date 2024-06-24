import { Suspense } from 'react';

import UserProfileClient from '@/components/UserProfileClient';

const UserProfile = ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfileClient userId={params.id} />
    </Suspense>
  );
};

export default UserProfile;