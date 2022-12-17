import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from '../../types';
import { useContext } from 'react';
import { ThemeContext, ThemeType } from '../theme/Theme';
import { darkTheme } from '../theme/darkTheme';
import { lightTheme } from '../theme/lightTheme';

import HomeTabScreen from '../screens/HomeTab/HomeTabScreen';
import SearchTabScreen from '../screens/SearchTab/SearchTabScreen';
import ReelsTabScreen from '../screens/ReelsTab/ReelsTabScreen';
import ShopTabScreen from '../screens/ShopTab/ShopTabScreen';
import ProfileTabScreen from '../screens/ProfileTab/ProfileTabScreen';

import { Icon } from '../components';
import { IconSourceTypes } from '../interfaces';
import { Icons } from '../assets';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === ThemeType.dark;

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        // tabBarActiveTintColor: isDarkMode
        //   ? darkTheme.colors.tabIconSelected
        //   : lightTheme.colors.tabIconSelected,
        // tabBarInactiveTintColor: isDarkMode
        //   ? darkTheme.colors.tabIconDefault
        //   : lightTheme.colors.tabIconDefault,
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: isDarkMode
            ? darkTheme.colors.background
            : lightTheme.colors.background,
        },
        headerTitleStyle: {
          color: isDarkMode ? darkTheme.colors.text : lightTheme.colors.text,
        },
        tabBarStyle: {
          backgroundColor: isDarkMode
            ? darkTheme.colors.background
            : lightTheme.colors.background,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTabScreen}
        options={({ navigation }: RootTabScreenProps<'HomeTab'>) => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconSource={focused ? Icons.HomeFilled : Icons.Home} />
          ),
        })}
      />
      <BottomTab.Screen
        name="SearchTab"
        component={SearchTabScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon iconSource={Icons.Search} />,
        }}
      />
      <BottomTab.Screen
        name="ReelsTab"
        component={ReelsTabScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon iconSource={Icons.Film} />,
        }}
      />
      <BottomTab.Screen
        name="ShopTab"
        component={ShopTabScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon iconSource={Icons.ShoppingCart} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconSource={focused ? Icons.UserFilled : Icons.User} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  iconSource: IconSourceTypes; // color: string;
}) {
  return <Icon {...props} />;
}
