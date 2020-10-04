import './formik-demo.css'
import React from 'react'
import { render } from 'react-dom'
import { Formik, Field } from 'formik'
import Yup from 'yup'
import classNames from 'classnames'

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className={classNames('input-feedback')}>{error}</div> : null

// Checkbox input
const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames('radio-button')}
      />
      <label htmlFor={id}>{label}</label>
      {touched[name] && <InputFeedback error={errors[name]} />}
    </div>
  )
}

// Checkbox group
class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    const target = event.currentTarget
    let valueArray = [...this.props.value] || []

    if (target.checked) {
      valueArray.push(target.id)
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1)
    }

    this.props.onChange(this.props.id, valueArray)
  }

  handleBlur = () => {
    // take care of touched
    this.props.onBlur(this.props.id, true)
  }

  render() {
    const { value, error, touched, label, className, children } = this.props

    const classes = classNames(
      'input-field',
      {
        'is-success': value || (!error && touched), // handle prefilled or user-filled
        'is-error': !!error && touched
      },
      className
    )

    return (
      <div className={classes}>
        <fieldset>
          <legend>{label}</legend>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: this.handleChange,
                onBlur: this.handleBlur
              }
            })
          })}
          {touched && <InputFeedback error={error} />}
        </fieldset>
      </div>
    )
  }
}

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames('radio-button')}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = classNames(
    'input-field',
    {
      'is-success': value || (!error && touched), // handle prefilled or user-filled
      'is-error': !!error && touched
    },
    className
  )

  return (
    <div className={classes}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  )
}

const App = () => (
  <div className="app">
    <h1>Radio & checkbox inputs with Formik</h1>
    <Formik
      initialValues={{
        radioGroup: '',
        checkboxGroup: [],
        singleCheckbox: false
      }}
      validationSchema={Yup.object().shape({
        radioGroup: Yup.string().required('A radio option is required'),
        checkboxGroup: Yup.array().required(
          'At least one checkbox is required'
        ),
        singleCheckbox: Yup.bool().oneOf([true], 'Must agree to something')
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 500)
      }}
      render={({
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        values,
        errors,
        touched,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <h2>Single checkbox</h2>
          <Field
            component={Checkbox}
            name="singleCheckbox"
            id="singleCheckbox"
            label="Agree to something"
          />

          <h2>Checkbox group</h2>
          <CheckboxGroup
            id="checkboxGroup"
            label="Which of these?"
            value={values.checkboxGroup}
            error={errors.checkboxGroup}
            touched={touched.checkboxGroup}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
          >
            <Field
              component={Checkbox}
              name="checkboxGroup"
              id="checkbox1"
              label="Option 1"
            />
            <Field
              component={Checkbox}
              name="checkboxGroup"
              id="checkbox2"
              label="Option 2"
            />
            <Field
              component={Checkbox}
              name="checkboxGroup"
              id="checkbox3"
              label="Option 3"
            />
          </CheckboxGroup>

          <h2>Radio group</h2>
          <RadioButtonGroup
            id="radioGroup"
            label="One of these please"
            value={values.radioGroup}
            error={errors.radioGroup}
            touched={touched.radioGroup}
          >
            <Field
              component={RadioButton}
              name="radioGroup"
              id="radioOption1"
              label="Choose this option"
            />
            <Field
              component={RadioButton}
              name="radioGroup"
              id="radioOption2"
              label="Or choose this one"
            />
          </RadioButtonGroup>

          <h2>Single radio</h2>
          <p>Is that a valid use case?</p>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    />
  </div>
)
