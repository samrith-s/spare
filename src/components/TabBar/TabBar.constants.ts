import { IconHome6Fill } from '~/icons/Buildings/Home6Fill';
import { IconHome6Line } from '~/icons/Buildings/Home6Line';
import { IconPieChart2Fill } from '~/icons/Business/PieChart2Fill';
import { IconPieChart2Line } from '~/icons/Business/PieChart2Line';
import { IconListRadio } from '~/icons/Editor/ListRadio';
import { IconSettings2Fill } from '~/icons/System/Settings2Fill';
import { IconSettings2Line } from '~/icons/System/Settings2Line';

import { type IconLike } from '../ui/Icon';

export enum TabBarRoutes {
  HOME = 'home',
  OVERVIEW = 'overview',
  CATEGORIES = 'categories',
  SETTINGS = 'settings',
}

export const TAB_BAR_CONFIG: {
  route: TabBarRoutes;
  title: string;
  header?: boolean;
  icon: {
    unfocused: IconLike;
    focused: IconLike;
  };
}[] = [
  {
    route: TabBarRoutes.HOME,
    title: 'Home',
    header: true,
    icon: {
      unfocused: IconHome6Line,
      focused: IconHome6Fill,
    },
  },
  {
    route: TabBarRoutes.OVERVIEW,
    title: 'Overview',
    header: true,
    icon: {
      unfocused: IconPieChart2Line,
      focused: IconPieChart2Fill,
    },
  },
  {
    route: TabBarRoutes.CATEGORIES,
    title: 'Categories',
    header: false,
    icon: {
      unfocused: IconListRadio,
      focused: IconListRadio,
    },
  },
  {
    route: TabBarRoutes.SETTINGS,
    title: 'Settings',
    header: false,
    icon: {
      unfocused: IconSettings2Line,
      focused: IconSettings2Fill,
    },
  },
];
