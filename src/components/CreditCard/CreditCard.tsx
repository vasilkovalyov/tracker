import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { CreditCardType } from './CreditCard.type'
import { formatToBalanceCard, getCardType, getSplitCardNumber } from '@/src/utils/common'
import { styled } from '@mui/material/styles'
import { TypeCard } from '@/src/types/common'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const DotsButton = styled(Button)(() => ({
  position: 'absolute',
  top: '10px',
  right: '16px',
  height: '22px',
  padding: '10px',
  minWidth: '40px',
  fontSize: '20px',
  color: 'white',
}))

const TypeCardLogo = styled(Box)(() => ({
  position: 'absolute',
  bottom: '20px',
  right: '28px',
  maxWidth: '48px',
}))

const CreditCardStyle = styled(Box)(() => ({
  padding: '24px 30px',
  borderRadius: 24,
}))

function getLogoType(type: TypeCard) {
  if (type === 'visa') return <img src='/visa.png' alt={type} width={48} />
  if (type === 'mastercard') return <img src='/mastercard.png' alt={type} width={48} />
  return null
}

export default function CreditCard({
  balance,
  cardNumber,
  currency,
  themeColor = 'secondary.dark',
}: CreditCardType) {
  const [open, setOpen] = useState(false)

  const typeCard = getCardType(cardNumber)

  const handleSaveToClipboard = () => {
    if (!balance) return
    navigator.clipboard
      .writeText(cardNumber.toString())
      .then(() => {
        setOpen(true)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <CreditCardStyle className='credit-card' position='relative' sx={{ bgcolor: themeColor }}>
      <DotsButton variant='text' onClick={(e) => console.log(e)}>
        ...
      </DotsButton>
      <Box>
        <Typography variant='h4' color='white'>
          Total Balance
        </Typography>
      </Box>
      <Typography color='white' fontSize={30} fontWeight={700} marginBottom={6}>
        {currency}
        {balance ? formatToBalanceCard(balance) : '0'}
      </Typography>
      <Box>
        <Typography
          variant='h4'
          color='info.main'
          marginBottom={0.5}
          onClick={handleSaveToClipboard}
          sx={{
            cursor: 'pointer',
          }}
        >
          {getSplitCardNumber(cardNumber)}
        </Typography>
      </Box>
      <TypeCardLogo>{getLogoType(typeCard)}</TypeCardLogo>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        sx={{ width: '100%', right: '0' }}
      >
        <Alert onClose={handleClose} severity='success'>
          Card copied.
        </Alert>
      </Snackbar>
    </CreditCardStyle>
  )
}
