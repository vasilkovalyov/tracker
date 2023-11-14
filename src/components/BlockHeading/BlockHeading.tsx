import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { BlockHeadingType } from './BlockHeading.type'

export default function BlockHeading({ heading, linkPath }: BlockHeadingType) {
  return (
    <Grid container alignItems='flex-start' justifyContent='space-between' marginBottom={3}>
      <Grid item>
        <Typography variant='h2' marginBottom={0}>
          {heading}
        </Typography>
      </Grid>
      {linkPath && (
        <Grid item paddingTop={0.5}>
          <Link to={linkPath}>
            <Typography component='span' variant='subtitle1' marginBottom={0}>
              View All
            </Typography>
          </Link>
        </Grid>
      )}
    </Grid>
  )
}
