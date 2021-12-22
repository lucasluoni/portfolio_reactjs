import React from 'react'
import { Link as MuiLink } from '@mui/material'

export default function ButtonMailto(props) {
  const {variant, color, css, href, target, rel, text, underline, component} = props
  return (
    <MuiLink
      component={component}
      variant={variant}
      color={color}
      css={css}
      href={href}
      target={target}
      rel={rel}
      underline={underline}
    >
      {text}
    </MuiLink>
  )
}
