import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';

import { PageEnum } from '../../constants/page-routes';

const routes: { page: PageEnum; value: number; icon: JSX.Element }[] = [
  {
    page: PageEnum.Home,
    icon: <HomeIcon />,
    value: 0,
  },
  {
    page: PageEnum.Expenses,
    icon: <CreditCardIcon />,
    value: 1,
  },
  {
    page: PageEnum.Add,
    icon: <AddCircleIcon />,
    value: 2,
  },
  {
    page: PageEnum.Calendar,
    icon: <CalendarTodayIcon />,
    value: 3,
  },
  {
    page: PageEnum.Settings,
    icon: <SettingsIcon />,
    value: 4,
  },
];

export default function NavigationBar() {
  const [navigatePage, setNavigatePage] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      value={navigatePage}
      onChange={(_, newValue) => {
        setNavigatePage(newValue);
      }}
    >
      {routes.map((route) => (
        <BottomNavigationAction
          key={route.page}
          icon={route.icon}
          onClick={() => navigate(route.page)}
        />
      ))}
    </BottomNavigation>
  );
}
