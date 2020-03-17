import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Input, Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router';

class ReviewFormTry extends React.Component {

  locationInput({ input, meta: { touched, error }, ...custom }) {
    const hasError = touched && error !== undefined;
    return (
      <div>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />}
        <Input
          error={hasError}
          fluid
          placeholder='Location...'
          {...input}
          {...custom} />
      </div>
    )
  }

  submit({ location }, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type:' FETCH REVIEWS',
        location,
        resolve,
        reject
      })
    }).catch((error) => {
      throw new SubmissionError(error)
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        Write a Review
        <Field name='location' component={this.locationInput} />
        <br />
        <Button fluid type='submit'>Submit</Button>
      </form>
    )
  }
}

const validate = values => {
  const { location } = values;
  // const location = values.location
  const errors = {};
  if (!location || location.trim() === '') {
    errors.location = 'Location required';
  }
  return errors;
}


export default reduxForm({
  form: 'review',
  validate
})(ReviewFormTry)