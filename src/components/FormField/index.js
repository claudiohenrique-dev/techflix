import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
`;

const FormFieldWrapper = styled.div``;
const Label = styled.label``;

function FormField({ as = 'input', label, name, onChange, type, value }) {
  const fieldId = `id_${name}`;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        {label}
        <Input
          id={fieldId}
          as={as}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Label>
    </FormFieldWrapper>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  as: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};
export default FormField;
