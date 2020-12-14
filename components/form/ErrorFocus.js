import { useEffect } from 'react'
import { useFormikContext } from 'formik'
import { scroller } from 'react-scroll'

const ErrorFocus = () => {
  const scrollerOptions = {
    duration: 500,
    spy: true,
    smooth: true,
    offset: -140
  }

  const { isSubmitting, isValidating, errors } = useFormikContext()

  useEffect(() => {
    const keys = Object.keys(errors)

    if (keys.length > 0 && !isValidating) {
      const errorElement = document.querySelector(`[id="${keys[0]}"]`)

      if (errorElement) {
        scroller.scrollTo(errorElement.id, scrollerOptions)
      }
    }
  }, [isSubmitting, isValidating, errors])

  return null
}

export default ErrorFocus
