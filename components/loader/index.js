import React from 'react'
import Loader from 'react-loader'

function Loading() {
  return (
    <Loader
      lines={13}
      length={10}
      width={5}
      radius={15}
      corners={1}
      rotate={0}
      direction={1}
      color="#63a140"
      speed={1}
      trail={60}
      shadow={false}
      hwaccel={false}
      className="spinner"
      zIndex={2e9}
      top="50%"
      left="50%"
      scale={1.0}
      loadedClassName="loadedContent"
    />
  )
}

export default Loading
