/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: {
            screens: {
              HomeTab: 'homeTab',
            },
          },
          SearchTab: {
            screens: {
              SearchTab: 'searchTab',
            },
          },
          ReelsTab: {
            screens: {
              ReelsTab: 'reelsTab',
            },
          },
          ShopTab: {
            screens: {
              ShopTab: 'shopTab',
            },
          },
          ProfileTab: {
            screens: {
              ProfileTab: 'profileTab',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
