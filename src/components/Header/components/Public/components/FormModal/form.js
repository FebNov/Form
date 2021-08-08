const EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const form = {
  email: {
    label: 'Email:',
    type: 'text',
    getErrorMessage: (value) => {
      if (!value) {
        return 'Please enter your email address';
      }
      if (!EMAIL_REGEXP.test(value)) {
        return 'Please enter a valid email address';
      }
      return '';
    },
  },
  textarea: {
    key: 'textarea',
    label: 'BrainStorm:',
    type: 'text',
    getErrorMessage: (value) => {
      if (!value) {
        return 'Please tell us what you think';
      }
      return '';
    },
  },
};

export default form;
