import { isEmpty } from 'lodash';
import React, { FC, memo } from 'react';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import { Divider, Typography } from '@mui/material';
import { IMatchProfile } from '@redux/components/matches/__types__/matches';
import { IJobs, ISchool } from '@redux/components/matches/__types__/matches.tinder.response';

import { ProfileDescriptionContainer, ProfileDescriptionField } from './styles';

interface Props {
  data: IMatchProfile;
  id: string;
}

const Description: FC<Props> = ({ data, id }) => {
  return (
    <ProfileDescriptionContainer>
      <>
        {(!isEmpty(data.jobs) || !isEmpty(data.schools) || data?.city) && (
          <Divider>
            <Typography>Общая информация</Typography>
          </Divider>
        )}
        {console.log(data.jobs)}
        {!isEmpty(data.jobs) &&
          data.jobs.map((job: IJobs) => (
            <ProfileDescriptionField key={`${job.company}${job.title}-${id}`}>
              <HomeRepairServiceIcon />
              {job.company && <>где: {job.company.name}</>}
              {job.title && <>кто: {job.title.name}</>}
            </ProfileDescriptionField>
          ))}
        {!isEmpty(data.schools) &&
          data.schools.map((school: ISchool) => (
            <ProfileDescriptionField key={`${school.displayed}${school.name}-${id}`}>
              <SchoolIcon />
              <> {school.name}</>
            </ProfileDescriptionField>
          ))}
        {data?.city && (
          <ProfileDescriptionField>
            <HouseIcon />
            {data.city.name}
          </ProfileDescriptionField>
        )}
        {data.bio && (
          <>
            <Divider>
              <Typography>Описание</Typography>
            </Divider>
            <ProfileDescriptionField>{data.bio}</ProfileDescriptionField>
            <ProfileDescriptionField></ProfileDescriptionField>
          </>
        )}
      </>
    </ProfileDescriptionContainer>
  );
};

export default memo(Description);
