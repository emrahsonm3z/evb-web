import React from 'react'
import cn from 'classnames'
import { useField } from 'formik'

import 'moment/locale/tr'
import 'moment/locale/de'

import InputFeedback from './InputFeedback'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { i18n } from '../../i18n'

import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment'

const DayPicker = ({ label, language, className, ...props }) => {
  const [field, meta] = useField(props)

  const renderInput = React.forwardRef((props, ref) => {
    return (
      <input
        ref={ref}
        className={cn([
          'form-control',
          className,
          meta.touched && meta.error ? 'is-invalid' : ''
        ])}
        {...field}
        {...props}
      />
    )
  })

  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <DayPickerInput
        name={field.name}
        formatDate={formatDate}
        parseDate={parseDate}
        format="LL"
        placeholder={`${formatDate(new Date(), 'LL', i18n.language)}`}
        dayPickerProps={{
          locale: i18n.language,
          localeUtils: MomentLocaleUtils
        }}
        component={renderInput}
      />
      {meta.touched && meta.error ? <InputFeedback error={meta.error} /> : null}
    </div>
  )
}
export default DayPicker
