import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { useField } from 'formik'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment'
import { i18n } from '../../i18n'

import InputFeedback from './InputFeedback'

const currentYear = new Date().getFullYear()
const fromMonth = new Date(currentYear, 0)
const toMonth = new Date(currentYear - 70, 11)

function YearMonthForm({ date, localeUtils, locale, onChange }) {
  const months = localeUtils.getMonths(locale)

  const years = []
  for (let i = fromMonth.getFullYear(); i >= toMonth.getFullYear(); i -= 1) {
    years.push(i)
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form
    onChange(new Date(year.value, month.value))
  }

  return (
    <div className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}

const DayPicker = ({ label, language, className, ...props }) => {
  const [field, meta] = useField(props)
  const [locale, setLocale] = useState('tr')
  const [month, setMonth] = useState(fromMonth)

  const handleYearMonthChange = (month) => setMonth(month)

  useEffect(() => {
    setLocale(i18n.language)
  }, [i18n.language])

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
        placeholder={`${formatDate(new Date(), 'LL', locale)}`}
        dayPickerProps={{
          locale: locale,
          localeUtils: MomentLocaleUtils,
          month: month,
          fromMonth: fromMonth,
          toMonth: toMonth,
          captionElement: ({ date, localeUtils, locale }) => (
            <YearMonthForm
              date={date}
              localeUtils={localeUtils}
              locale={locale}
              onChange={handleYearMonthChange}
            />
          )
        }}
        component={renderInput}
      />
      {meta.touched && meta.error ? <InputFeedback error={meta.error} /> : null}
    </div>
  )
}

export default DayPicker
