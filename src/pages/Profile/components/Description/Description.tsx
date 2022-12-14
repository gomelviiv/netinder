import { isEmpty } from 'lodash';
import React, { FC, memo } from 'react';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { Divider, Typography } from '@mui/material';
import { ProfileActionsContainer } from '@pages/Profile/styles';
import { IMatchProfile } from '@redux/components/matches/__types__/matches';
import { IJobs, ISchool } from '@redux/components/matches/__types__/matches.tinder.response';
import LikeDislikeButtons from '@shared/components/LikeDislikeButtons';
import getCurrentAge from '@shared/utils/getCurrentAge';

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
        <ProfileDescriptionField>
          <PersonIcon />
          <Typography>{`${data.name} ${getCurrentAge(data.birthDate)}`}</Typography>
        </ProfileDescriptionField>
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
        <Divider />
        <ProfileActionsContainer>
          <LikeDislikeButtons id={id} />
        </ProfileActionsContainer>
      </>
    </ProfileDescriptionContainer>
  );
};

export default memo(Description);
