import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import SideBar from "./components/sidebar";

import HomeScreen from './components/HomeScreen';


const RootDrawer = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default RootDrawer;