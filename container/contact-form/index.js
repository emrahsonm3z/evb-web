import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import cn from 'classnames'
import { scroller } from 'react-scroll'
import axios from 'axios'

import { withTranslation } from '../../i18n'
import {
  MAX_FULLNAME,
  MAX_EMAIL,
  MIN_MESSAGE,
  MAX_MESSAGE,
  PHONE_REG_EXP
} from '../../constants'
import { TextArea, TextInput } from '../../components/form'
import ErrorFocus from '../../components/form/ErrorFocus'

import styles from '../apply-form/index.module.css'
import SubTitle from '../../components/title/subtitle'
import Wizard from '../apply-form/wizard'
import List, { ListItem } from '../../components/list'

const scrollerOptions = {
  duration: 500,
  spy: true,
  smooth: true,
  offset: -30
}

const initialValues =
  process.env.NODE_ENV !== 'production'
    ? {
        NameAndSurname: 'Emrah Sönmez',
        EmailAddress: 'emrahsonm3z@gmail.com',
        Phonenumber: '5443755025',
        Message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci alias unde quas deserunt, odit maiores reprehenderit eveniet? Quidem iure, deleniti soluta distinctio beatae dignissimos fugit eius quibusdam a itaque.
      Itaque magnam vitae accusantium autem delectus, ipsa ipsum hic veritatis in repudiandae. Consectetur, at, natus doloribus ab voluptas, quibusdam dolor voluptatibus consequatur nisi tempora eveniet eius numquam soluta et maiores.
      Doloribus iusto, deserunt aliquam provident ab ducimus ratione quae qui, vel corporis numquam distinctio cupiditate. Quas non tenetur qui blanditiis, facilis numquam beatae inventore maiores voluptates, ipsa eveniet magnam! Officia.`
      }
    : {
        NameAndSurname: '',
        EmailAddress: '',
        Phonenumber: '',
        Message: ''
      }

function ContactForm({ t }) {
  const [formLoading, setFormLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  return (
    <div className="container" id="contact-form">
      <SubTitle title={t('ContactUs')} />

      <Wizard
        initialValues={initialValues}
        validationSchema={Yup.object({
          NameAndSurname: Yup.string()
            .max(MAX_FULLNAME, t('validation:Max', { max: MAX_FULLNAME }))
            .required(t('validation:Required')),
          EmailAddress: Yup.string()
            .max(MAX_EMAIL, t('validation:Max', { max: MAX_EMAIL }))
            .email(t('validation:Invalid.Email'))
            .required(t('validation:Required')),
          Phonenumber: Yup.string()
            .matches(PHONE_REG_EXP, t('validation:Invalid.Phone'))
            .required(t('validation:Required')),
          Message: Yup.string()
            .min(MIN_MESSAGE, t('validation:Min', { min: MIN_MESSAGE }))
            .max(MAX_MESSAGE, t('validation:Max', { max: MAX_MESSAGE }))
            .required(t('validation:Required'))
        })}
        onSubmit={(values, actions) => {
          // scroll.scrollToTop()
          scroller.scrollTo('contact-form', { ...scrollerOptions })
          setFormLoading(true)
          actions.setSubmitting(false)

          let formData = new FormData()

          Object.entries(values).map(([key, value]) => {
            if (typeof value === 'string' || value instanceof File) {
              console.log(key, value)
              formData.append(key, value)
            }
          })

          const response = axios
            .post('/api/contact', formData, {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
              }
            })
            .then(function (response) {
              setFormLoading(false)
              actions.setSubmitting(true)
            })
            .catch(function (error) {
              setStatusMessage(error.message)
              setFormLoading(false)
              actions.setSubmitting(false)
            })
        }}
        formLoading={formLoading}
      >
        <Wizard.Page>
          {() => {
            return (
              <>
                <TextInput
                  id="NameAndSurname"
                  name="NameAndSurname"
                  label={t('NameAndSurname')}
                  type="text"
                  placeholder={t('NameAndSurname')}
                  className="form-control-solid"
                />
                <TextInput
                  id="EmailAddress"
                  name="EmailAddress"
                  label={t('EmailAddress')}
                  type="email"
                  placeholder={t('EmailAddress')}
                  className="form-control-solid"
                />
                <TextInput
                  id="Phonenumber"
                  name="Phonenumber"
                  label={t('Phonenumber')}
                  type="tel"
                  placeholder={t('Phonenumber')}
                  className="form-control-solid"
                />
                <TextArea
                  id="Message"
                  name="Message"
                  label={t('YourMessage')}
                  rows="5"
                  placeholder={t('YourMessage')}
                  className={cn([
                    'form-control-solid',
                    'a-height',
                    styles.message
                  ])}
                />
                <ErrorFocus />
              </>
            )
          }}
        </Wizard.Page>
        <Wizard.Page>
          {({ values }) => {
            return (
              <List className={styles.list}>
                {Object.entries(values).map(([key, value]) => {
                  if (typeof value === 'string' || value instanceof File) {
                    return <ListItem key={key} title={t(key)} value={value} />
                  }
                })}
              </List>
            )
          }}
        </Wizard.Page>
      </Wizard>
    </div>
  )
}

ContactForm.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation']
})

ContactForm.propTypes = {
  t: PropTypes.func.isRequired
}
export default withTranslation('common')(ContactForm)
