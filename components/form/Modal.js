import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import cn from 'classnames'
import { withTranslation } from '../../i18n'

import { Close } from '../icons'
import styles from './modal.module.css'
ReactModal.setAppElement('body')

function Modal({ t, label, title, children, ...props }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <a className={styles.link} onClick={toggleModal}>
        {label}
      </a>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className={cn([styles.modal, styles.fade, isOpen ? styles.show : ''])}
        {...props}
      >
        <div
          className={cn([styles[('modal-dialog', 'modal-dialog-scrollable')]])}
        >
          <div className={styles['modal-content']}>
            <div className={styles['modal-header']}>
              <h5 className={styles['modal-title']}>{title}</h5>
              <a className={styles.close} onClick={toggleModal}>
                <Close />
              </a>
            </div>
            <div className={styles['modal-body']}>{children}</div>
            <div className={styles['modal-footer']}>
              <button
                type="button"
                className="btn btn-light-primary font-weight-bold"
                data-dismiss="modal"
                onClick={toggleModal}
              >
                {t('Close')}
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  )
}

Modal.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Modal.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Modal)
