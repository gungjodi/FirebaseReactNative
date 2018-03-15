import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import SideBar from "./components/sidebar";

import HomeScreen from './components/HomeScreen';
import UsersScreen from './components/UsersScreen';


const RootDrawer = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Users: { screen: UsersScreen },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default RootDrawer;