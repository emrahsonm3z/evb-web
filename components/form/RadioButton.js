import React from 'react'
import { useField } from 'formik'

const RadioButton = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: 'radio' })
  return (
    <label className="radio">
      <input {...field} {...props} type="radio" />
      <span></span>
      {label}
    </label>
  )
}
export default RadioButton
