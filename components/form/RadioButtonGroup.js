import React from 'react'
import InputFeedback from './InputFeedback'

const RadioButtonGroup = ({ error, touched, label, children }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="radio-inline">{children}</div>
      {touched && error ? <InputFeedback error={error} /> : null}
    </div>
  )
}

export default RadioButtonGroup
