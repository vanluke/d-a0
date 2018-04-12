import React from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  List,
  ListItem,
  Button,
  Img,
  Label,
  Input,
  Details,
  Name,
  Text,
  Email,
} from './user-dropdown-styled';

const UserDropdown = ({user}) => (
  <Nav>
    <Text to="/me">Your profile</Text>
    <Input type="checkbox" id="toggle" />
    <Label htmlFor="toggle">
      <Img src={user.picture} />
    </Label>
    <List>
      <ListItem>
        <Details>
          <Name>{user.nickname}</Name>
          <Email>{user.email}</Email>
        </Details>
      </ListItem>
      <ListItem>
        <Button>Your Profile</Button>
      </ListItem>
      <ListItem>
        <Button>Sign out</Button>
      </ListItem>
    </List>
  </Nav>
);

UserDropdown.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserDropdown;
