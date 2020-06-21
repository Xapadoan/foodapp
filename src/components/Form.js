import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

const renderTextInput = (field) => {
  return (
    <input
      type='text'
      key={uniqueId()}
      name={field.name}
      placeholder={field.placeholder}
      value={field.value}
      minLength={field.minLength}
      maxLength={field.maxLength}
      required={field.required || false}
    />
  )
}

const renderTextArea = (field) => {
  return (
    <div key={uniqueId()}>
      <label htmlFor={field.name}>{field.name} :</label>
      <textarea
        form={field.formId}
        name={field.name}
        maxLength={field.maxLength}
        rows={field.rows}
        columns={field.columns}
        required={field.required || false}
      >
        {field.value}
      </textarea>
    </div>
  )
}

const renderSeparation = (field) => {
  return <h3>{field.name}</h3>
}

const renderFields = (fields) => {
  let render = [];
  fields.forEach(field => {
    const { type } = field
    if (type === 'text_input') render.push(renderTextInput(field));
    else if (type === 'text_area') render.push(renderTextArea(field));
    else if (type === 'separation') render.push(renderSeparation(field));
  });
  return render;
};

const Form = ({ method, action, fields, button_value }) => {
  return (
    <form method={method} action={action} className='form flex-container'>
      {renderFields(fields)}
      <button>{button_value}</button>
    </form>
  );
};

Form.propTypes = {
  method: PropTypes.oneOf(['GET', 'POST']).isRequired,
  action: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([
        'text_input',
        'text_area',
        'separation',
      ]).isRequired,
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      value: PropTypes.string,
      minLength: PropTypes.number,
      maxLength: PropTypes.number,
      formId: PropTypes.string,
      rows: PropTypes.number,
      columns: PropTypes.number,
    })
  ).isRequired,
}

export default Form;