import {connect} from 'react-redux';
import {updateUser} from 'client/users/profile/state';
import {ImageForm} from 'client/common/components/image-upload';
import {
  compose,
  withHandlers,
} from 'recompose';
import withSpinner from 'client/common/components/spinner';

const pictureWithState = compose(
  connect(({user, profile}) => ({user, isLoading: profile.isLoading}), {updateUser}),
  withHandlers({
    handleSubmit: props => (e) => {
      e.preventDefault();
      props.updateUser({file: props.preview, user: props.user});
    },
    handleImageChange: ({readFile}) => (e) => {
      e.preventDefault();
      const [f] = e.target.files;
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = {
          file: f,
          preview: reader.result,
        };
        readFile(image);
        return image;
      };
      return reader.readAsDataURL(f);
    },
  }),
  withSpinner,
);

export default pictureWithState(ImageForm);
