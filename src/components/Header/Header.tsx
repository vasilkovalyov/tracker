import { useAppSelector } from '../../redux/hooks'

import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'

export default function Header() {
  const user = useAppSelector((store) => store.adminAuthSlice.user)

  return (
    <Box component='header' py={5}>
      <Container>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Avatar
              style={{
                borderRadius: 6,
              }}
              src={
                user.avatar
                  ? user.avatar
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png'
              }
              alt={user.userName || 'user avatar'}
            />
          </Grid>
          <Grid item>
            <Badge variant='dot' invisible={false} color='primary'>
              <NotificationsNoneOutlinedIcon color='action' />
            </Badge>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
