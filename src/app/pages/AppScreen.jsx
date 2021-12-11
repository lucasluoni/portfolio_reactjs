import { React, useState, useEffect } from 'react'
import { apiGetWorksData, apiGetAboutData, apiGetNavData } from './../services/ApiServices'
import Loading from './../components/Loading'
import Hero from '../components/Hero'
import Works from '../components/Works'
import About from '../components/About'
import Contact from '../components/Contact' 
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/AppBar'
import { createTheme } from '@mui/material/styles'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

const theme = createTheme({
  typography: {
    fontFamily: ['SF Pro Text', 'Roboto', 'Arial', 'sans-serif',].join(','),
    fontSize: '20px',
    h1: {
      fontWeight: '600',
      WebkitFontSmoothing: 'antialiased',
      color: '#4831D4'
    },
    h2: {
      margin: '0px 0px 10px',
      fontSize: '32px',
      fontWeight: '600',
      textTransform: 'capitalize',
      color: 'var(--main-purple)',
      lineHeight: '1.1',
      transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      // transition: 'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
      // transitionDelay: '200ms',
      '&::before': {
        color: 'var(--main-body)',
        position: 'relative',
        bottom: '0',
        counterIncrement: 'section 1',
        content: "'0' counter(section) '.'",
        marginRight: '10px',
        fontSize: '20px',
        fontWeight: '400'
      }
    },
    body1: {
      margin: '0px',
      width: '100%',
      minHeight: '100%',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      lineHeight: '1.3',
    },
  },  
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 'var(--border-radius)',
          padding: '1.25rem 1.75rem',
          fontSize: '14px',
          lineHeight: '1',
          color: 'var(--main-purple)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          cursor: 'pointer',
          // transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
          // transition: 'var(--transition)',
          backgroundColor: 'var(--white-background)',
          border: '1px solid var(--main-purple)',
          marginTop: '50px',
          '& :hover': {
            backgroundColor: 'var(--light-purple)'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          // padding: '0px',
          '& :hover': {
            backgroundColor: 'var(--white-background)',
            color: 'var(--main-purple)'
          }
        }
      }
    },
    // MuiPopover: {
    //   styleOverrides: {
    //     Modal: {
    //       paddingBottom: '3.473em',
    //       anchorPosition: {
    //         left: '200px', top: '20px'
    //       }
    //     }
    //   }
    // }
  }
})
const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    margin: '0',
    padding: '0'
  },
  [theme.breakpoints.up('md')]: {
    margin: '0',
    padding: '0'
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0',
    padding: '0'
  },
  '--main-purple': '#4831D4',
  '--body-purple': '#3d155f',
  '--light-purple': '#AEA2F5',
  '--main-body': '#4831D4',
  '--white-background': '#fff',
  '--border-radius': '0px',
  '--body-background': '#F9F9F9',
  height: '100vh' 
}))
const loadingStyles = css({
    display: 'flex',
    alignItems: 'center',
    // marginTop: '49vh',
    margin: 'auto',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'hidden'
})
const errorStyles = css({
    display: 'block',
    width: '25vw',
    margin: '65px auto 0',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#FCA7A7'
})
const errorBody = css({
  backgroundColor: 'var(--white-background)',
  height: '100vh',
  overflow: 'hidden'
  })

export default function AppScreen() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [workData, setWorkData] = useState([])
  const [aboutData, setAboutData] = useState([])
  const [navData, setNavData] = useState([])

  useEffect(() => {
  // busca os dados do json e passa pros estados
  const fetchData = async function () {
    try {
      const dataWork = await apiGetWorksData()
      setWorkData(dataWork)
      const dataAbout = await apiGetAboutData()
      setAboutData(dataAbout)
      const dataNav = await apiGetNavData()
      setNavData(dataNav)
      setLoading(false)
    } catch (error) {
      setError(error.message)
    }
  }
    fetchData()
  },[])

  let appJsx = (
    <Box css={loadingStyles}>
      <Loading />
    </Box>
  )

  if (error) {
    appJsx = (
      <Box css={errorBody} sx={{}}>
        <Typography 
          variant='h4'
          gutterBottom
          component='div'
          css={errorStyles}>
        {error}
        </Typography>
      </Box>
    )
  }

  if (!loading) {
    appJsx = (
      <Box sx={{backgroundColor: 'var(--body-background)', color: '(--body-purple)'}}>
        <ResponsiveAppBar navData={navData} />
        <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '0 50px', overflowY: 'hidden' }}>
          <Hero />
          <Works workData={workData} />
          <About aboutData={aboutData} />
          <Contact />
          <Footer />
        </Box>
      </Box>
    )
  }

  return (
    <ThemeProvider theme={theme} >
      <Root style={{}} >
        {appJsx}
        <CssBaseline />
      </Root>
    </ThemeProvider>
  )
}
