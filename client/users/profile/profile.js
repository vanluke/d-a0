import React from 'react';
//import {connect} from 'react-redux';
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from 'client/common/components/tabs';
import ImageUpload from './picture';
import ProfileDetails from './details';

const Profile = () => (
  <Tabs>
    <TabList>
      <Tab tab="basic">Basic</Tab>
      <Tab tab="picture">Picture</Tab>
      <Tab tab="advance">Advance</Tab>
    </TabList>
    <TabPanels>
      <TabPanel tab="basic">
        <ProfileDetails />
      </TabPanel>
      <TabPanel tab="picture">
        <ImageUpload />
      </TabPanel>
      <TabPanel tab="advance">
        Advance settings here
      </TabPanel>
    </TabPanels>
  </Tabs>
);

// Profile.propTypes = {
//   user: PropTypes.shape({
//     email: PropTypes.string,
//   }).isRequired,
// };

export default Profile;
