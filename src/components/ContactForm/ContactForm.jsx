import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const ContactForm = ({ addContact }) => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Должно быть от 5 букв!')
      .required('Это обязательное поле!'),
    number: Yup.number()
      .required('Это обязательное поле!')
      .min(6, 'Должно быть от 6 цифр!'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">
          Name
          <Field name="name" />
          <ErrorMessage name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="number" name="number" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
