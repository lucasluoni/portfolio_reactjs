import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link'
import { renderedData } from './../helpers/renderedDataHelpers'

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const link = css({
  display: 'block',
  color: 'unset'
})
const top = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '35px',
})
const cardJob = css({
    display: 'flex',
    alignContent: 'space-between'
})
const linkColor = css({
  color: 'var(--main-purple)',
  fontSize: '1.5rem'
})
const cardTitle = css({
  fontWeight: 600,
  lineHeight: 1.1,
  fontSize: '22px',
  margin: '0px 0px 10px'
})
const cardBody = css({
  fontSize: '16px',
  lineHeight: '1.4',
  color: 'var(--body-purple)',
})
const techList = ({
    display: 'flex',
    alignItems: 'flex-end',
    flexGrow: '1',
    flexWrap: 'wrap',
    padding: '0px',
    margin: '20px 0px 0px',
    listStyle: 'none',
  })
const listItem = ({
    display: 'inline-flex',
    marginRight: '15px',
    fontSize: '12px',
    lineHeight: '1.75'
})
const cardPaper = css({
  borderRadius: 'var(--border-radius)',
  backgroundColor: 'var(--white-background)',
})

export default function PortfolioCard({trabalho}) {
  
  const card = (
      <Link css={link} href='#' underline="none">
        <CardActions css={top}>
          <GitHubIcon css={linkColor} />
          <LaunchIcon css={linkColor} />
        </CardActions>
        <CardContent>
          <Typography variant='h6' component='div' css={[linkColor, cardTitle]}>
          {renderedData(trabalho.title.rendered)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} css={cardBody}>
            {renderedData(trabalho.content.rendered)}
          </Typography>
          <ul className={techList}>
            {trabalho.tecnologias.map(tecnologia => (
              <li key={tecnologia} className={listItem}>{tecnologia}</li>
            )) }
            </ul>
        </CardContent>
      </Link>
  )

  return (
    
    <Card css={cardPaper}>
      {card}
    </Card>
  )
}
