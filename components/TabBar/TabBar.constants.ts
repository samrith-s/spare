import { IconHome6Fill } from '~/assets/icons/Buildings/Home6Fill';
import { IconHome6Line } from '~/assets/icons/Buildings/Home6Line';
import { IconPieChart2Fill } from '~/assets/icons/Business/PieChart2Fill';
import { IconPieChart2Line } from '~/assets/icons/Business/PieChart2Line';
import { IconListRadio } from '~/assets/icons/Editor/ListRadio';
import { IconSettings2Fill } from '~/assets/icons/System/Settings2Fill';
import { IconSettings2Line } from '~/assets/icons/System/Settings2Line';

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
    header: true,
    icon: {
      unfocused: IconListRadio,
      focused: IconListRadio,
    },
  },
  {
    route: TabBarRoutes.SETTINGS,
    title: 'Settings',
    icon: {
      unfocused: IconSettings2Line,
      focused: IconSettings2Fill,
    },
  },
];
