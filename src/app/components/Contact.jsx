import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Controls from './controls/Controls'
import { renderedData } from './../helpers/renderedDataHelpers'

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

export default function Contact({contactData}) {

  return (
    <>
      <CssBaseline />
      <Container css={section} maxWidth="lg" id='contato'>
        
          <Typography 
            variant='h2'
            gutterBottom
            component='div'
            css={overline}>
            {contactData.title.rendered}
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
            {renderedData(contactData.content.rendered)}
          </Typography>
        
          <Box css={btn}>
          <Controls.Link
              text='mande sua mensagem'
              href='mailto:lucas@arteluz.art.br'
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
