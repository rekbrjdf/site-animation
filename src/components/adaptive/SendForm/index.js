'use client';

import { bindClasses, atLeastOneNonSpaceChar } from 'utils/functions';
import BlackButton from 'components/adaptive/BlackButton';
import classNames from 'classnames';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'components/adaptive/InputField';
import * as Yup from 'yup';
import UploadFile from './UploadFile';
import SubmitFormMessage from './SubmitFormMessage';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'form');

const contactsSchema = (isDemoRequest) =>
  Yup.object().shape({
    name: Yup.string().test(
      'at-least-one-non-space-char',
      'Please introduce yourself',
      atLeastOneNonSpaceChar,
    ),
    email: Yup.string().email('Invalid email address').required('This field is required'),
    company:
      isDemoRequest &&
      Yup.string().test(
        'at-least-one-non-space-char',
        'Please introduce your company',
        atLeastOneNonSpaceChar,
      ),
    message: Yup.string()
      .test('at-least-one-non-space-char', 'This field is required', atLeastOneNonSpaceChar)
      .max(250, 'Максимум 250 знаков'),
  });

const SendForm = ({ title, buttonName, withFile, demoRequest }) => {
  const [fileInfo, setFileInfo] = useState(null);
  const [message, setMessage] = useState(null);

  const onSubmitHandler = async (values, resetForm) => {
    const apiHost =
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_API_MAIN_DOMAIN
        : window.location.host;

    try {
      const response = await fetch(`https://${apiHost}/api/feedback`, {
        method: 'POST',
        body: JSON.stringify({ ...values, files: fileInfo || null }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Please check internet connection.');
      }
      setMessage({
        type: 'success',
        text: 'We always try our best to respond as soon as possible, you can expect a reply in at most 24 hours.',
        title: 'Thank you!',
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message,
        title: 'Oops!',
      });
    } finally {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        company: '',
      }}
      validationSchema={contactsSchema(demoRequest)}
      onSubmit={(values, { resetForm }) => {
        onSubmitHandler(values, resetForm);
      }}
    >
      {({ isValid, dirty }) => (
        <Form
          className={classes.form}
          style={{ backgroundColor: withFile ? '#1A1A1A' : '#121212' }}
        >
          {message ? (
            <SubmitFormMessage type={message.type} message={message.text} title={message.title} />
          ) : (
            <>
              <h2 className={bc.__title}>{title}</h2>
              <div className={bc['__form-wrapper']}>
                <div className={bc['__input-wrapper']}>
                  <InputField placeholder="Name" type="text" name="name" />
                </div>
                <div className={bc['__input-wrapper']}>
                  <InputField placeholder="E-mail" type="email" name="email" />
                </div>
                {demoRequest && (
                  <div className={bc['__input-wrapper']}>
                    <InputField placeholder="Company" type="text" name="company" />
                  </div>
                )}
                <div className={classNames(bc['__input-wrapper'], bc.__message)}>
                  <InputField placeholder="Message or Question" type="text" name="message" />
                </div>
                {withFile && <UploadFile setFileInfo={setFileInfo} />}
              </div>
              <div className={bc['__send-wrapper']}>
                <p className={bc.__warning}>
                  By clicking on a button, I accept <a>Private Policy</a>
                </p>
                <BlackButton isDisabled={!(isValid && dirty)} type="submit">
                  {buttonName}
                </BlackButton>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SendForm;
