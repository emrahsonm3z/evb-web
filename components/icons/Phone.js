import * as React from 'react'

function SvgPhone(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 25" fill="none" {...props}>
      <mask
        id="Phone_svg__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={3}
        width={20}
        height={22}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3.142h19.793V25H0V3.142z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#Phone_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5.787c.144-.592.264-1.183.44-1.762.092-.292.28-.55.448-.883a5750.78 5750.78 0 005.436 6.074c-.512.608-.412 1.265-.068 1.848.412.694.876 1.371 1.4 1.98a95.446 95.446 0 003.569 3.892c.536.555 1.2.994 1.835 1.438.448.32.948.373 1.444-.037 1.76 1.963 3.513 3.922 5.289 5.905-.496.435-1.08.591-1.672.682-1.72.267-3.328-.185-4.872-.904-2.34-1.084-4.309-2.718-6.113-4.558-2.092-2.127-3.988-4.431-5.412-7.096C.88 10.785.232 9.126.056 7.31.048 7.24.02 7.175 0 7.105V5.787z"
          fill="#FEFEFE"
        />
      </g>
      <mask
        id="Phone_svg__b"
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={9}
        height={9}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.525.6h7.693v8.051H1.525V.601z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#Phone_svg__b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.999.6c.244.189.517.344.718.567C6.1 2.64 7.464 4.132 8.833 5.614c.055.055.105.11.151.168.328.425.315.908-.067 1.281-.546.53-1.109 1.038-1.692 1.588-1.907-2.07-3.797-4.129-5.7-6.203.58-.538 1.13-1.063 1.697-1.571.134-.122.32-.19.479-.277h.298z"
          fill="#FEFEFE"
        />
      </g>
      <mask
        id="Phone_svg__c"
        maskUnits="userSpaceOnUse"
        x={15}
        y={15}
        width={8}
        height={9}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.364 15.809h7.485v7.9h-7.485v-7.9z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#Phone_svg__c)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.364 17.645c.59-.554 1.137-1.092 1.713-1.6.386-.345.871-.307 1.224.075a755.47 755.47 0 014.256 4.68c.415.457.386.961-.058 1.385-.527.504-1.066 1-1.622 1.525-1.838-2.02-3.659-4.028-5.513-6.065z"
          fill="#FEFEFE"
        />
      </g>
    </svg>
  )
}

export default SvgPhone
