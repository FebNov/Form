import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../../../../../Modal';
import FormItem from '../../../../../FormItem';
import Input from '../../../../../Input';
import TextArea from '../../../../../TextArea';
import Button from '../../../../../Button';
import sendGrid from '../../../../../../apis/sendGrid';
import mailGun from '../../../../../../apis/mailGun';
import withForm from '../../../../../withForm';
import compose from '../../../../../../utils/compose';
import form from './form';
import Alert from '../../../Alert';

const Body = styled.div`
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 4px;
`;
const Form = styled.form`
  padding: 16px 0;
`;
const Label = styled.label`
  font-size: 18px;
`;

const Select = styled.select`
  margin-left: 5px;
  height: 25px;
`;
const Response = {
  true: 'We have received the Idea, Thank you',
  false: 'Something unexpect happen, try again later',
};
class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceType: {
        value: 'MailGun',
        touched: false,
      },
      showAlert: {
        open: false,
        status: false,
      },
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    const { serviceType } = this.state;
    const {
      isFormValid,
      getData,
    } = this.props;
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }
    const data = getData();

    if (serviceType.value === 'MailGun') {
      mailGun(data).then(() => {
        this.setState({
          showAlert: {
            open: true,
            status: true,
          },
        });
      })
        .catch(() => {
          this.setState({
            showAlert: {
              open: true,
              status: false,
            },
          });
        });
    } else {
      sendGrid(data);
    }
  }

  handleChange(event) {
    this.setState({ serviceType: { value: event.target.value } });
  }

  render() {
    const { serviceType, showAlert } = this.state;
    const {
      onClose,
      formData,
      getErrorMessage,
      handleFormDataChange,
      isFormValid,
    } = this.props;
    return (
      <Modal onClose={onClose}>
        <Body>
          <Title>Lendi Lunch Ideas</Title>
          <Form onSubmit={this.handleFormSubmit}>
            {showAlert.open && (
            <FormItem>
              <Alert>{Response[showAlert.status]}</Alert>
            </FormItem>
            )}
            {Object.keys(form).map((key) => {
              const { label, type } = form[key];
              const { value, touched } = formData[key];
              const errorMessage = touched ? getErrorMessage(key) : '';
              return (
                <FormItem
                  key={key}
                  htmlFor={key}
                  label={label}
                  errorMessage={errorMessage}
                >
                  {key === form.textarea.key ? (
                    <TextArea
                      id={key}
                      type={type}
                      error={errorMessage}
                      value={value}
                      onChange={handleFormDataChange(key)}
                    />
                  ) : (
                    <Input
                      id={key}
                      type={type}
                      error={errorMessage}
                      value={value}
                      onChange={handleFormDataChange(key)}
                    />
                  )}

                </FormItem>
              );
            })}
            <FormItem>
              <Label>
                Service Provider
                <Select value={serviceType.value} onChange={this.handleChange}>
                  <option value="MailGun">MailGun</option>
                  <option value="SendGrid">SendGrid</option>
                </Select>
              </Label>
            </FormItem>
            <FormItem>
              <Button
                disabled={!isFormValid()}
                width="100%"
                variant="success"
              >
                Submit
              </Button>
            </FormItem>
          </Form>
        </Body>
        <Modal.Footer>Lendi</Modal.Footer>
      </Modal>
    );
  }
}
FormModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  getErrorMessage: PropTypes.func.isRequired,
  handleFormDataChange: PropTypes.func.isRequired,
  isFormValid: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.string,
    touched: PropTypes.bool,
  })).isRequired,
};

const EnhancedFormModal = compose(
  withForm(form),
)(FormModal);

export default EnhancedFormModal;
