import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Controls from './controls/Controls'

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const section = css({
  display: 'flex',
  flexDirection: 'column',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  padding: '100px 0px',
  maxWidth: '600px',
  margin: '0px auto 100px',
  textAlign: 'center',
})
const overline = css({
  '&::before': {
    counterIncrement: 'section 3',
  }
})
const title = css({
  fontSize: 'clamp(40px, 5vw, 60px)',
})
const subTitle = css({
  maxWidth: '570px',
  color: 'var(--body-purple)'
})
const btn = css({
  borderRadius: 'var(--border-radius)',
  padding: '1.25rem 1.75rem',
  fontSize: '14px',
  lineHeight: '1',
  color: 'var(--main-purple)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
  backgroundColor: 'var(--white-background)',
  border: '1px solid var(--main-purple)',
  marginTop: '50px',
  '& :hover': {
    backgroundColor: 'var(--light-purple)'
  }
})

export default function Contact() {
  return (
    <>
      <CssBaseline />
      <Container css={section} maxWidth="lg" id='contato'>
        
          <Typography 
            variant='h2'
            gutterBottom
            component='div'
            css={overline}>
            contato
          </Typography>
          <Typography 
            variant='h1'
            gutterBottom
            component='div'
            css={title}>
            Fale comigo
          </Typography>
          <Typography
            variant='body1'
            component='div'
            css={subTitle}>
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </Typography>
        
          <Box>
          <Controls.Button
            variant='outlined'
            size='large'
            color='primary'
            text='mande sua mensagem'
            css={btn}
          />
          </Box>

        </Container>
    </>
  )
}
