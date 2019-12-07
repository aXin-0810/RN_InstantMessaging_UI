/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Theme} from 'teaset';
import { createAppContainer, createStackNavigator } from 'react-navigation';

// 引入全局公共
import './app/assets/js/common'

// 底栏标签页页面
import TableModule from './app/TableModule';

// 设置路由导航
const MasterArts = createAppContainer(createStackNavigator({
    TableModule: {
        screen: TableModule,
        navigationOptions:{header:null}
    }
},{ initialRouteName: "TableModule" }));

// 视频 IPhoneX 刘海
Theme.set({fitIPhoneX: true});

// 关闭全部黄色警告
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => MasterArts);


