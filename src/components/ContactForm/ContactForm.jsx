import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Please enter your name!'),
    number: yup.number().required('Please enter your number'),
});

const initialValues = {
  name: '',
  number: '',
  id: '',
};

const ContactForm = ({formSubmit}) => {
    const handleSubmit = (values, { resetForm }) => {
        values.id = nanoid();
        formSubmit(values);
        resetForm();
    }
    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
          <label htmlFor="tel">Number</label>
          <Field name="number" type="tel" />
          <ErrorMessage name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
};

export default ContactForm;
