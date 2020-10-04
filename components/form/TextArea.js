import React from 'react'
import cn from 'classnames'
import { useField } from 'formik'

import InputFeedback from './InputFeedback'

const TextArea = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={cn([
          'form-control',
          className,
          meta.touched && meta.error ? 'is-invalid' : ''
        ])}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <InputFeedback error={meta.error} /> : null}
    </div>
  )
}

export default TextArea
