import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Form, Formik } from 'formik'

import ApplyFormResponse from './response'
import { withTranslation } from '../../i18n'

import styles from './index.module.css'
import Loading from '../../components/loader'

class Wizard extends React.Component {
  static Page = ({ children, parentState }) => {
    return children(parentState)
  }

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues,
      validationSchema: props.validationSchema
    }
  }

  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }))

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0)
    }))

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props
    const { page } = this.state
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values, bag)
    } else {
      bag.setTouched({})
      bag.setSubmitting(false)
      this.next(values)
    }
  }

  render() {
    const { children, t, formLoading } = this.props
    const { page, values, validationSchema } = this.state
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1
    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        // validate={this.validate}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {(props) => {
          const { handleSubmit, isSubmitting } = props

          if (!isSubmitting) {
            return (
              <Fragment>
                {formLoading && <Loading />}
                <Form className={styles.form}>
                  {React.cloneElement(activePage, {
                    parentState: { ...props }
                  })}
                  <div className={styles.buttons}>
                    {page > 0 && (
                      <div className={styles.actionBtn}>
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={this.previous}
                        >
                          {t('Previous')}
                        </button>
                      </div>
                    )}

                    {!isLastPage && (
                      <div className={styles.actionBtn}>
                        <button className="btn btn-primary" type="submit">
                          {t('Next')}
                        </button>
                      </div>
                    )}
                    {isLastPage && (
                      <div className={styles.actionBtn}>
                        <button
                          className="btn btn-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {t('Submit')}
                        </button>
                      </div>
                    )}
                  </div>
                </Form>
              </Fragment>
            )
          } else {
            return <ApplyFormResponse />
          }
        }}
      </Formik>
    )
  }
}

Wizard.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Wizard)
