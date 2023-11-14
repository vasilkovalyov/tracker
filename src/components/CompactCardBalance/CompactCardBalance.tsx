import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import CreditCardIcon from '@mui/icons-material/CreditCard'
import { CompactCardBalanceType } from './CompactCardBalance.type'

const IconColorPrimaryStyles = styled(CreditCardIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
}))

const IconColorSecondaryStyles = styled(CreditCardIcon)(({ theme }) => ({
  color: theme.palette.secondary.light,
}))

const BankAccountStyles = styled(Box)(({ theme }) => ({
  borderRadius: '10px 10px 0 0',
  padding: '12px 16px',
  backgroundColor: theme.palette.info.light,
  display: 'flex',
}))

export default function CompactCardBalance({
  balance,
  cardtLastNumbers,
  theme = 'primary',
}: CompactCardBalanceType) {
  const stars = '****'

  function getBgColor() {
    if (theme === 'primary') return 'primary.main'
    if (theme === 'secondary') return 'secondary.main'
    return ''
  }

  function getIcon() {
    if (theme === 'primary')
      return <IconColorPrimaryStyles sx={{ width: '40px', height: '40px' }} />
    if (theme === 'secondary')
      return <IconColorSecondaryStyles sx={{ width: '40px', height: '40px' }} />
    return <CreditCardIcon sx={{ width: '40px', height: '40px' }} />
  }

  return (
    <Box
      className='compact-card-balance'
      sx={{
        backgroundColor: getBgColor(),
        borderRadius: '6px',
      }}
    >
      <Box paddingTop={3} paddingX={3} paddingBottom={1.2}>
        <Typography color='white' variant='h5'>
          Total Balance
        </Typography>
        <Typography color='white' fontSize={27} fontWeight={700}>
          {balance}
        </Typography>
      </Box>
      <BankAccountStyles>
        <Box width={40} marginRight={1}>
          {getIcon()}
        </Box>
        <Box>
          <Typography variant='h6' marginBottom={0}>
            Bank Account
          </Typography>
          <Typography variant='subtitle2'>
            {stars}
            {stars}
            {cardtLastNumbers}
          </Typography>
        </Box>
      </BankAccountStyles>
    </Box>
  )
}
