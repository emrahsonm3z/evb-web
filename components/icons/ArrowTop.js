import * as React from 'react'

function SvgArrowTop(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <rect
          fill="currentColor"
          opacity={0.3}
          x={11}
          y={10}
          width={2}
          height={10}
          rx={1}
        />
        <path
          d="M6.707 12.707a1 1 0 11-1.414-1.414l6-6a1 1 0 011.383-.03l6 5.5a1 1 0 11-1.352 1.474L12.03 7.384l-5.323 5.323z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}

export default SvgArrowTop
