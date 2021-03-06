import * as React from 'react'

function SvgEnvelope(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 15.852c-.076.302-.151.604-.233.906-.02.078-.062.145-.108.242L16 8.539 22.583 2c.148.238.243.492.312.756.04.168.069.34.105.507v12.59z"
        fill="#FEFEFE"
      />
      <mask
        id="Envelope_svg__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={8}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.467h7.584v15.046H0V1.467z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#Envelope_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.744c.078-.284.146-.567.234-.851.047-.142.128-.269.207-.426l7.143 6.56c-2.404 2.83-4.8 5.645-7.222 8.486-.07-.168-.145-.314-.195-.467-.064-.217-.11-.44-.167-.657V2.744z"
          fill="#FEFEFE"
        />
      </g>
      <mask
        id="Envelope_svg__b"
        maskUnits="userSpaceOnUse"
        x={1}
        y={9}
        width={21}
        height={9}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.298 9.018h20.488V18H1.299V9.018z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#Envelope_svg__b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.298 17.534c2.484-2.846 4.95-5.673 7.426-8.516.184.163.354.311.524.467.597.534 1.193 1.067 1.79 1.608.31.275.701.27 1.016-.007a405.66 405.66 0 012.205-1.979l.101-.085c2.477 2.838 4.946 5.666 7.427 8.512a2.486 2.486 0 01-1.049.419c-.199.03-.405.044-.607.044-2.466.004-4.932 0-7.394 0-2.878 0-5.756 0-8.63.004H2.86a2.8 2.8 0 01-1.446-.389c-.033-.022-.062-.044-.116-.078z"
          fill="#FEFEFE"
        />
      </g>
      <mask
        id="Envelope_svg__c"
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={21}
        height={10}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.45.13h20.188v9.378H1.45V.129z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#Envelope_svg__c)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.45.51c.293-.18.59-.283.904-.335.188-.03.383-.048.575-.048h17.227c.47 0 .918.085 1.341.303.04.018.08.044.141.077-3.37 3.003-6.724 5.998-10.094 9C8.178 6.512 4.824 3.513 1.45.511z"
          fill="#FEFEFE"
        />
      </g>
    </svg>
  )
}

export default SvgEnvelope
