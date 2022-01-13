import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Controls from './controls/Controls'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const section = css({
    display: 'flex',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    WebkitBoxAlign: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '100vh',
    padding: '0px'
})
const hello = css({
    margin: '0px 0px 30px 4px',
    display: 'block',
    marginBottom: '0',
    fontSize: 'clamp(14px, 5vw, 16px)',
    fontWeight: '400',
})
const heading = css({
    margin: '0',
    fontSize: 'clamp(40px, 8vw, 80px)',
    lineHeight: '1.1',
    color: 'var(--main-purple)'
})
const body = css({
    margin: '20px 0px 0px',
    maxWidth: '540px',
    fontSize: '17px',
    lineHeight: '1.3',
    color: 'var(--body-purple)'
})
const btn = css({
  width: '241px',
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
    display: 'block',
  },
  '& a:hover': {
    border: '0',
    backgroundColor: '#fff'
  }
})

export default function Hero() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" css={section}>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{transitionDelay: '100ms'}}
          css={hello}>
          Olá 👋 , sou
        </Typography>
        <Typography
          variant="h1"
          gutterBottom
          component="div"
          css={heading}>
          lucas_luoni
        </Typography>
        <Typography
          variant="h1"
          gutterBottom
          component="div"
          css={[heading]}>
          frontend_dev
        </Typography>
        <Grid item xs={12} sm={12} md={8} lg={8}>
        <Typography
          variant='body1'
          gutterBottom
          component='div'
            css={body}>
            <p>Sou desenvolvedor e designer gráfico, trabalho com web desde 2010. Recentemente decidi focar minha carreira no desenvolvimento front-end, começando por aprimorar meus conhecimentos em JavaScript, React & NodeJs. Este website procura representar minha recente produção nessa área.</p>
        </Typography>
        <Box css={btn}>
          <Controls.Link
            text='conheça meu trabalho'
            href='/#trabalhos'
            rel='noopener noreferrer'
            underline='none'            
          >
          </Controls.Link>
        </Box>
        </Grid>
      </Container>
    </>
  )
}
