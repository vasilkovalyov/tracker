import { useState } from 'react'
import Box from '@mui/material/Box'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import { BlockHeading, ChartAnalytics } from '@/src/components'
import { ChartAnalyticsBar } from '@/src/components/ChartAnalytics'
import { generateYears } from '@/src/utils/common'

const chartData: Record<number, ChartAnalyticsBar[]> = {
  2023: [
    {
      id: '1',
      value: 1234,
      legend: 'Jan',
    },
    {
      id: '2',
      value: 2234,
      legend: 'Feb',
    },
    {
      id: '3',
      value: 5234,
      legend: 'Mar',
    },
    {
      id: '4',
      value: 2234,
      legend: 'Apr',
    },
    {
      id: '5',
      value: 1000,
      legend: 'May',
    },
    {
      id: '6',
      value: 2900,
      legend: 'Jun',
    },
    {
      id: '7',
      value: 3900,
      legend: 'Jul',
    },
  ],
  2022: [
    {
      id: '1',
      value: 3234,
      legend: 'Jan',
    },
    {
      id: '2',
      value: 3214,
      legend: 'Feb',
    },
    {
      id: '3',
      value: 7040,
      legend: 'Mar',
    },
    {
      id: '4',
      value: 1300,
      legend: 'Apr',
    },
  ],
}

const years = generateYears(2010)

export default function BlockAnalytics() {
  const [year, setYear] = useState<number>(new Date().getFullYear())

  const handleChange = (event: SelectChangeEvent) => {
    setYear(parseInt(event.target.value))
  }

  return (
    <Box className='block-analytics' mb={4}>
      <BlockHeading heading='Analytics'>
        <Select
          variant='standard'
          sx={{
            width: '120px',
          }}
          value={year.toString()}
          renderValue={(value) => (value ? `Year - ${value}` : `Year - ${year}`)}
          onChange={handleChange}
        >
          {years.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </BlockHeading>
      <ChartAnalytics data={chartData[year]} activeBar={2} />
    </Box>
  )
}
