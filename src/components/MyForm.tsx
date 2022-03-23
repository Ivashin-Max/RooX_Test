import { Formik, Field, Form } from 'formik';

import { Values } from '../types/form';
import { MyFormProps } from '../types/props';

const MyForm = (props: MyFormProps) => {
  return (
    <Formik
      initialValues={{
        name: props.user.name,
        userName: props.user.username,
        email: props.user.email,
        street: props.user.address.street,
        city: props.user.address.city,
        zip: props.user.address.zipcode.toString(),
        phone: props.user.phone.toString(),
        web: props.user.website,
        comment: '',
      }}
      onSubmit={(
        values: Values,
      ) => {
        if (props.disabled) return
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className="edit_container">
          <div className="edit_row">
            <label htmlFor="name">Name</label>
            <Field name="name" disabled={props.disabled} required />
          </div>
          <div className="edit_row">
            <label htmlFor="userName">User name</label>
            <Field name="userName" disabled={props.disabled} required />
          </div>
          <div className="edit_row">
            <label htmlFor="email">E-mail</label>
            <Field name="email" disabled={props.disabled} required />
          </div>
          <div className="edit_row">
            <label htmlFor="street">Street</label>
            <Field name="street" disabled={props.disabled} required />
          </div>
          <div className="edit_row">
            <label htmlFor="city">City</label>
            <Field name="city" disabled={props.disabled} required />
          </div>
          <div className="edit_row">
            <label htmlFor="zip">Zip code</label>
            <Field name="zip" disabled={props.disabled} required />
          </div>
          <div className="edit_row">
            <label htmlFor="phone">Phone</label>
            <Field name="phone" disabled={props.disabled} required />
          </div>
          <div className="edit_row">
            <label htmlFor="web">Website</label>
            <Field name="web" disabled={props.disabled} required />
          </div>
          <div className="edit_row">
            <label htmlFor="comment">Comment</label>
            <Field name="comment" as="textarea" disabled={props.disabled} />
          </div>
        </div>
        <button className={props.disabled ? 'button button_gray ' : 'button button_green'} type="submit" >Отправить</button>
      </Form>
    </Formik>
  )
}

export default MyForm