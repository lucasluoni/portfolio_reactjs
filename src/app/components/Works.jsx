import { React } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import PortfolioCard from './Card'
import { getNewId } from '../services/idServices'

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const section = css({
    display: 'flex',
    flexDirection: 'column',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    margin: '0px auto',
    padding: '100px 0px',
    maxWidth: '1000px',
})
const title = css({
  margin: '0px 0px 10px',
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
})
const subTitle = css({
  fontSize: '14px',
  textAlign: 'center',
})
const gridContainer = css({
  margin: '50px 0px 0px 0px',
  padding: '0px',
})
const item = css({
    display: 'inline-flex',
    padding: '8px',
    margin: '0',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-7px)',
      visibility: 'visible',
      opacity: '1',
      cursor: 'pointer',
    }  
})

export default function Works({workData}) {

  const trabalhos = workData.map(({
    title,
    content,
    id,
    tecnologia_1,
    tecnologia_2,
    tecnologia_3,
    tecnologia_4,
  }) => ({ title, content, id, tecnologias: [tecnologia_1, tecnologia_2, tecnologia_3, tecnologia_4] }))

  return (
    <>
      <CssBaseline />
      <Container css={section} maxWidth="lg">
        
          <Typography 
            variant='h2'
            gutterBottom
            component='div'
            css={title}>
            Trabalhos
          </Typography>
          <Typography
            variant='body1'
            component='div'
            css={subTitle}>
            veja um pouco dos meus últimos projetos
          </Typography>
            
          <Grid container spacing={0} css={gridContainer}>
              {trabalhos.map((trabalho) => (          
                <Grid css={item} key={getNewId()} item xs={12} sm={6} md={6} lg={4}>
                  <PortfolioCard trabalho={trabalho} />
                </Grid>
              ))}
          </Grid>

        </Container>
    </>
  )
}
