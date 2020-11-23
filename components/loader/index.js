import React from 'react'
import Loader from 'react-loader'

function Loading({
  lines = 13,
  length = 7,
  width = 3,
  radius = 10,
  color = '#000',
  speed = 1
}) {
  return (
    <Loader
      lines={lines}
      length={length}
      width={width}
      radius={radius}
      corners={1}
      rotate={0}
      direction={1}
      color={color}
      speed={speed}
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
