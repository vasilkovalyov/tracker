import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'

import { formatToNumber, getPercentage } from '@/src/utils/common'
import { ChartAnalyticsType } from './ChartAnalytics.type'

const ChartAnalyticsStyle = styled(Box)(() => ({
  width: '360px',
  overflowX: 'auto',
}))

const BarParentStyle = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flex: 1,
  marginBottom: '16px',
}))

const BarStyle = styled(Box)(() => ({
  width: '32px',
  borderRadius: '6px 6px 0 0',
}))

export default function ChartAnalytics({ data, activeBar }: ChartAnalyticsType) {
  const getMaxValue = data
    ? data.reduce((max, obj) => (obj.value > max.value ? obj : max), data[0]).value
    : 0

  return (
    <ChartAnalyticsStyle className='chart-analytics' display='flex' flexDirection='column'>
      {data ? (
        <Grid
          container
          justifyContent='space-between'
          flexWrap='nowrap'
          gap='20px'
          height={160}
          marginBottom={2}
        >
          {data.map((item, index) => (
            <Grid key={item.id} item display='flex' flexDirection='column'>
              <BarParentStyle>
                <Typography
                  variant='subtitle1'
                  fontSize={10}
                  marginBottom={0.5}
                  color={activeBar === index ? 'secondary' : ''}
                >
                  ${formatToNumber(item.value)}
                </Typography>
                <BarStyle
                  bgcolor={activeBar === index ? 'secondary.main' : 'info.light'}
                  height={`${getPercentage(item.value, getMaxValue)}%`}
                />
              </BarParentStyle>
              <Typography
                variant='subtitle1'
                fontSize={13}
                textAlign='center'
                marginBottom={0}
                color={activeBar === index ? 'secondary' : ''}
              >
                {item.legend}
              </Typography>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant='h4' textAlign='center'>
          No Analytics
        </Typography>
      )}
    </ChartAnalyticsStyle>
  )
}
