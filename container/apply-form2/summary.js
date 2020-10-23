import { useFormikWizard } from '../../utils/formik-wizard'
import React from 'react'

function Summary() {
  const { values } = useFormikWizard()

  console.log('values', values)

  return (
    <table>
      <tbody>
        {Object.entries(values.form).map(([key, value]) => {
          console.log(key, value)

          typeof value !== 'object' && (
            <tr key={key}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Summary
