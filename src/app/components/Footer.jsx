import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Button } from '@mui/material'

const footer = css({
  display: 'flex',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'auto',
  minHeight: '70px',
  padding: '15px',
  textAlign: 'center'
})
const content = css({
  padding: '10px',
  fontSize: '16px',
})
const copyright = css({
  marginTop: '10px',
  fontSize: '14px',
  display: 'block'
})

export default function Footer() {
  return (
    <>
      <CssBaseline />
      <Container css={footer} maxWidth="lg">
        
          <Typography 
            variant='body'
            gutterBottom
            component='div'
            css={content}>
            Criado e desenvolvido por Lucas Luoni
            <Box component='div' css={copyright}>© Copyright 2021</Box>
          </Typography>
      
      </Container>
    </>
  )
}