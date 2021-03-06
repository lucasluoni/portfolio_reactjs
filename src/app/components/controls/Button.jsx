import React from 'react'
import { Button as MuiButton } from '@mui/material'

export default function Button(props) {
  const {text, size, color, variant, onClick, css} = props
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      css={css}
      onClick={onClick}
    >
      {text}</MuiButton>
  )
}
