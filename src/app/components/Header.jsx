import React from 'react'
import {AppBar, Toolbar, Grid, IconButton, Badge} from '@mui/material'
import FlashAutoIcon from '@mui/icons-material/FlashAuto'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const root = css({
  backgroundColor: 'var(--white-background)',
  transform: 'translateZ(0)',
  counterReset: 'nav-item',
    '& a': {
      fontSize: '0.9rem',
      lineHeight: '2.2rem',
    },
    '& span': {
      marginRight: '10px'
    }
})

const navLink = css({
  minWidth: '130px',
  display: 'inline-block',
  position: 'relative',
  textDecoration: 'none',
  textDecorationSkipInk: 'auto',
  color: 'var(--main-body)',
  transition: 'var(all 0.25s cubic-bezier(0.645,0.045,0.355,1))',
  '&::before': {
    color: 'var(--main-purple)',
    position: 'relative',
    bottom: '0',
    counterIncrement: 'nav-item',
    content: "'0' counter(nav-item) '.'",
    marginRight: '10px',
    fontSize: '13px',
    fontWeight: '400',
  }
})

export default function Header({navData}) {

  const navMenu = navData.map(({
    ID,
    title,
    url,
  }) => ({ ID, title, url }))

  return (
    <AppBar postion='static' css={root}>
      <Toolbar >
        <Grid container>
        <Grid item>
        <IconButton>
              <Badge color="secondary">
                <FlashAutoIcon fontSize='small' />
              </Badge>
            </IconButton>
        </Grid>
        <Grid item sm></Grid>
          <Grid item alignItems='center' >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
              {navMenu.map(({ID, title, url} = navMenu) => (
                <Link href={url} key={ID} css={navLink} underline="none">
                  {title}
                </Link>
              ))}
            </Box>
        </Grid>
        </Grid>
      </Toolbar> 
    </AppBar>
    )
}