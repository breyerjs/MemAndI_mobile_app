
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import StarredFeed from './screens/StarredFeed';
import FeedHome from './screens/FeedHome';
import PlayListHome from './screens/PlayListHome'

export const Menu = TabNavigator({
  FeedHome: {
    screen: FeedHome,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    }
  },
  PlayListHome: {
    screen: PlayListHome,
    navigationOptions: {
      tabBarLabel: 'Playlists',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  },
  StarredFeed: {
    screen: StarredFeed,
    navigationOptions: {
      tabBarLabel: 'Starred',
      tabBarIcon: ({ tintColor }) => <Icon name="star" size={35} color={tintColor} />
    }
  }
});
