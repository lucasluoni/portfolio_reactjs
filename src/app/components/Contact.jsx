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
    backgroundColor: 'rgba(25, 118, 210, 0.04) !important',
    border: '1px solid #1976d2'
  },
  '& a': {
    color: 'var(--main-purple)',
    padding: '1.25rem 1.75rem',
    display: 'block'
  },
  '& a:hover': {
    border: '0',
    backgroundColor: '#fff'
  }
})
const link = css({
  cursor: 'pointer',
  fontFamily: 'SF Pro Text,Roboto,Arial,sans-serif',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  padding: '1.25rem 1.75rem',
  fontSize: '14px',
  lineHeight: '1',
  color: 'var(--main-purple)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  backgroundColor: 'var(--white-background)',
  border: '1px solid var(--main-purple)',
  marginTop: '50px'
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
        
          <Box css={btn}>
          <Controls.Link
              // component='button'
              // variant='outlined'
              // color='primary'
              text='mande sua mensagem'
              href='mailto:contato@lucasluoni.com.br'
              target='_blank'
              rel='noopener noreferrer'
              underline='none'
              >
            </Controls.Link>
          </Box>

        </Container>
    </>
  )
}
