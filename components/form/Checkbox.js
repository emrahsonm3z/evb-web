import React from 'react'
import cn from 'classnames'
import { useField } from 'formik'
import InputFeedback from './InputFeedback'

const Checkbox = ({ label, className, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div className="form-group">
      <label className={cn(['checkbox', className])}>
        <input {...field} {...props} type="checkbox" />
        <span></span>
        {label}
      </label>
      {meta.touched && meta.error ? <InputFeedback error={meta.error} /> : null}
    </div>
  )
}

export default Checkbox
