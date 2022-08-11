import React, { FC } from 'react';

import { Avatar } from '@mui/material';
import Card from '@shared/components/Card';

const Profile: FC = () => {
  return (
    <article>
      <div>
        <div className="">
          <Avatar>I</Avatar>
          <p>Ivan</p>
        </div>
        <div>information by profile</div>
      </div>
      <div>
        <Card />
      </div>
    </article>
  );
};

export default Profile;
