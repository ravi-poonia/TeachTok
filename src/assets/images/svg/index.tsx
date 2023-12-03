import React from 'react';
import {SvgProps} from 'react-native-svg';
import Home from './HomeIcon.svg';
import Activity from './ActivityIcon.svg';
import Bookmarks from './BookmarksIcon.svg';
import Discover from './DiscoverIcon.svg';
import Profile from './ProfileIcon.svg';
import Timer from './Timer.svg';
import Search from './Search.svg';

export function HomeIcon(props: SvgProps) {
  return <Home {...props} title='home-icon' />;
}

export function ActivityIcon(props: SvgProps) {
  return <Activity {...props} title='activity-icon' />;
}

export function BookmarksIcon(props: SvgProps) {
  return <Bookmarks {...props} title='bookmarks-icon' />;
}

export function DiscoverIcon(props: SvgProps) {
  return <Discover {...props} title='discover-icon' />;
}

export function ProfileIcon(props: SvgProps) {
  return <Profile {...props} title='profile-icon' />;
}

export function TimerIcon(props: SvgProps) {
  return <Timer {...props} title='timer-icon' />;
}


export function SearchIcon(props: SvgProps) {
  return <Search {...props} title='search-icon' />;
}
