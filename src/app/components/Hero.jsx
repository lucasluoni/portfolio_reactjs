import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
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
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </Typography>
        <Controls.Button
          variant='outlined'
          size='large'
          text='Conheça meu trabalho'
        />
        </Grid>
      </Container>
    </>
  )
}
