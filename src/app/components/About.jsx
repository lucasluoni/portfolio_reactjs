import { React, useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
// import { renderedData } from './../helpers/renderedDataHelpers'
import Box from '@mui/material/Box'
// apiService para regras de negócio do back end
import { get } from './../services/httpService'

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'


const about = css({
    margin: '0 auto',
    padding: '100px 0',
    maxWidth: '900px'
})
const heading = css({
  '&::before': {
    color: 'var(--main-body)',
    position: 'relative',
    bottom: '0',
    counterIncrement: 'section 2',
    content: "'0' counter(section) '.'",
    marginRight: '10px',
    fontSize: '20px',
    fontWeight: '400'
  }
})
const inner = css({
  gap: '50px',
  '& p': {
    margin: '0px 0px 15px'
  }
})
const content = css({
  paddingRight: '2em',
  color: 'var(--body-purple)'
})
const styledPic = css({
  display: 'flex'
})
const wrapper = css({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
})
const imageWrapper = css({
  position: 'relative',
  borderRadius: '0',
  mixBlendMode: 'multiply',
  filter: 'grayscale(100%) contrast(1)',
  transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
  marginRight: 'auto',
  marginBottom: '0',
  marginLeft: 'auto',
  zIndex: '1',
  width: '19.234em',
  height: '18.67em',
  border: '0.115rem solid var(--body-purple)',
  backgroundColor: '#fff'
})
const imagem = css({
  display: 'block',
  bottom: '0',
  height: '100%',
  left: '0',
  margin: '0',
  padding: '0',
  objectFit: 'cover',
  backgroundSize: 'cover',
  backgroundPositionX: 'center',
  marginTop: '-1.435em',
  marginLeft: '-1.2em',
  border: '0.115rem solid var(--body-purple)'
})

export default function About({ aboutData }) {

  const FEATURE_IMAGE_URL = `${aboutData._links['wp:featuredmedia'][0].href}`
  
  const [imageData, setImageData] = useState('')
  const [error, setError] = useState('')
  
  useEffect(() => {

    async function apiGetAboutImageData() {
      const imageData = await get(FEATURE_IMAGE_URL)
      const imageSizesArray = imageData.media_details.sizes
      return imageSizesArray
    }
    
    // busca os dados do json e passa pros estados
    const fetchImageData = async function () {
      try {
        const dataImage = await apiGetAboutImageData()
        setImageData(dataImage)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchImageData()
  },[FEATURE_IMAGE_URL])
  
  return (
    <>
      <CssBaseline />
      <Container css={about} maxWidth="lg" id='sobre_mim'>
        
        <Typography 
          variant='h2'
          gutterBottom
          component='div'
          css={heading}
          dangerouslySetInnerHTML={{__html: aboutData.title.rendered}}>
        </Typography>

        <Grid container css={inner} spacing={2}>
         
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography
              variant='body1'
              component='div'
              css={content}
              dangerouslySetInnerHTML={{__html: aboutData.content.rendered}}>
            </Typography>
          </Grid>
          
          <Grid css={styledPic} item xs={12} sm={12} md={4} lg={4}>
            <Box component='span' css={wrapper}>
              <Box css={imageWrapper} component='div'>
                {imageData && 
                  <picture>
                    <img src={imageData.full.source_url}
                      srcSet={`${imageData.full.source_url} 500w`}
                      // srcSet={`${imageData.thumbnail.source_url} 125w, ${imageData.medium.source_url} 250w, ${imageData.full.source_url} 500w`}
                      alt="Flowers"
                      style={{ width: 'auto' }}
                      css={imagem}>
                    </img>
                  </picture>
                }
              </Box>
            </Box>
          </Grid>
        
        </Grid>

      </Container>
    </>
  )
}
