import React from 'react'
import { useField } from 'formik'

const RadioButton = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'radio' })
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="radio" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}
export default RadioButton
