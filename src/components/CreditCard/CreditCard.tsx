import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { CreditCardType } from './CreditCard.type'
import { getCardType, getSplitCardNumber } from '@/src/utils/common'
import { styled } from '@mui/material/styles'
import { TypeCard } from '@/src/types/common'

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

const CreditCardStyle = styled(Box)(({ theme }) => ({
  padding: '24px 30px',
  borderRadius: 24,
  backgroundColor: theme.palette.secondary['dark'],
}))

function getLogoType(type: TypeCard) {
  if (type === 'visa') return <img src='/public/visa.png' alt={type} width={48} />
  if (type === 'mastercard') return <img src='/public/mastercard.png' alt={type} width={48} />
  return null
}

export default function CreditCard({ balance, cardNumber }: CreditCardType) {
  const typeCard = getCardType(cardNumber)

  return (
    <CreditCardStyle className='credit-card' position='relative'>
      <DotsButton variant='text' onClick={(e) => console.log(e)}>
        ...
      </DotsButton>
      <Box>
        <Typography variant='h4' color='white'>
          Total Balance
        </Typography>
      </Box>
      <Box marginBottom={5}>
        <Typography color='white' fontSize={30} fontWeight={700}>
          ${balance || '0'}
        </Typography>
      </Box>
      <Box>
        <Typography variant='h4' color='info.main' marginBottom={0.5}>
          {getSplitCardNumber(cardNumber)}
        </Typography>
      </Box>
      <TypeCardLogo>{getLogoType(typeCard)}</TypeCardLogo>
    </CreditCardStyle>
  )
}
