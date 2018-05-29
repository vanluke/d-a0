import React from 'react';
import PropTypes from 'prop-types';
import {
  Details,
  Row,
  Input,
  Label,
} from './details-styled';

const ProfileDetails = ({
  name,
  email,
  nickname,
}) => (
  <Details>
    <Row>
      <Label>User name</Label>
      <Input value={name} type="text" />
    </Row>
    <Row>
      <Label>Email</Label>
      <Input value={email} type="email" />
    </Row>
    <Row>
      <Label>Nickname</Label>
      <Input value={nickname} type="text" />
    </Row>
  </Details>
);

ProfileDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default ProfileDetails;
