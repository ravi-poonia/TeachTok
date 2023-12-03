/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import {
  ActivityIcon,
  BookmarksIcon,
  DiscoverIcon,
  HomeIcon,
  ProfileIcon,
} from '../assets/images/svg';
import Discover from '../screens/Discover';
import Activity from '../screens/Activity';
import Bookmarks from '../screens/Bookmarks';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const ROUTE_ICONS = {
  Home: HomeIcon,
  Discover: DiscoverIcon,
  Activity: ActivityIcon,
  Bookmarks: BookmarksIcon,
  Profile: ProfileIcon,
};

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const Icon = ROUTE_ICONS[route.name as keyof typeof ROUTE_ICONS];
          return <Icon color={color} />;
        },
        tabBarStyle: {borderColor: '#000'},
        tabBarActiveTintColor: '#FFFFFF',
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#000',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
        headerShown: false,
      })}>
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Discover} name="Discover" />
      <Tab.Screen component={Activity} name="Activity" />
      <Tab.Screen component={Bookmarks} name="Bookmarks" />
      <Tab.Screen component={Profile} name="Profile" />
    </Tab.Navigator>
  );
}

export default HomeTabs;
