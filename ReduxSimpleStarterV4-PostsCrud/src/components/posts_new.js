import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
          />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> {title:"asdfa", catgories:"asfaf", content: "asdfaf"}
  
  const errors = {}
  // Validate the inputs from 'values'
  if(!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  }
  if(!values.categories) {
    errors.categories = "Enter a category";
  }
  if(!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has ANY properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
