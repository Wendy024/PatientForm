import React from 'react';

function FormInput({ label, name, value, onChange, placeholder, className, type = 'text' }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

export default FormInput;