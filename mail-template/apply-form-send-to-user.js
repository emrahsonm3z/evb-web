import React from 'react'
import Layout from './layout'

const ApplyFormSendToUser = ({ form }) => {
  console.log('form', form)
  return {
    subject: `İş başvurunuz alınmıştır`,
    body: (
      <Layout title="İş başvurusu">
        <div>
          <table>
            {Object.entries(form).map((entry) => {
              const [key, value] = entry
              return (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{value}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </Layout>
    )
  }
}
export default ApplyFormSendToUser
