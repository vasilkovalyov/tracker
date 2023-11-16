import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { UserTransactionType } from './UserTransaction.type'
import { styled } from '@mui/material/styles'
import { formatToCurrency } from '@/src/utils/common'

const UserTransactionStandAlone = styled(Box)(({ theme }) => ({
  padding: 10,
  borderRadius: 21,
  marginBottom: 16,
  backgroundColor: theme.palette.info['light'],
}))

export default function UserTransaction({
  imageSrc,
  heading,
  subheading,
  cost,
  date,
  isStandalone,
}: UserTransactionType) {
  function Body() {
    return (
      <Grid container direction='row' width='100%' gap={2}>
        <Grid item>
          <Avatar src={imageSrc || ''} alt={heading} />
        </Grid>
        <Grid item>
          <Box>
            <Typography variant='h5' marginBottom={0.5}>
              {heading}
            </Typography>
            <Typography variant='subtitle1' marginBottom={0}>
              {subheading}
            </Typography>
          </Box>
        </Grid>
        <Grid item marginLeft='auto'>
          <Box textAlign='right'>
            {cost && (
              <Typography variant='h4' marginBottom={0.5} color='success.main'>
                ${formatToCurrency(cost)}
              </Typography>
            )}
            <Typography variant='subtitle1' marginBottom={0}>
              {date}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    )
  }

  if (isStandalone) {
    return (
      <UserTransactionStandAlone>
        <Body />
      </UserTransactionStandAlone>
    )
  }
  return (
    <Box className='user-transaction'>
      <Body />
    </Box>
  )
}
