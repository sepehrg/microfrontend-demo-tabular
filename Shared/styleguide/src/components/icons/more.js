import React from 'react'
import SvgIcon from '../svgIcon/svgIcon'

const MoreIcon = (props) => {
  return (
    <SvgIcon viewBox="-465 267 28 28" {...props}>
      <path
        d="M-451,288c-0.3,0-0.6-0.1-0.9-0.4l-11.5-11.5c-0.5-0.5-0.5-1.3,0-1.8s1.3-0.5,1.8,0L-451,285l10.6-10.6
			c0.5-0.5,1.3-0.5,1.8,0s0.5,1.3,0,1.8l-11.5,11.5C-450.4,287.9-450.7,288-451,288z"
      />
    </SvgIcon>
  )
}

export default React.memo(MoreIcon)
