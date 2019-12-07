import React, { Component } from 'react';
import {View,Image,} from 'react-native';
import {TabView,Theme} from 'teaset';

// 标签页
import Home from './pages/home'
import SmallTalk from './pages/smallTalk'
import Release from './pages/release'
import OrderManag from './pages/orderManag'
import PersonalCenter from './pages/personalCenter'

export default class TableModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
      return (
        <TabView style={{flex: 1}} type='projector' barStyle={{borderColor:'#fff'}}>
            <TabView.Sheet
                title='总览'
                icon={<Image source={require('./assets/img/table/数据统计.png')} style={{width:25,height:25}} tintColor={Theme.tvBarBtnTitleColor}/>}
                activeIcon={<Image source={require('./assets/img/table/数据统计.png')} style={{width:25,height:25}} tintColor={Theme.tvBarBtnActiveTitleColor}/>}>
                <View style={{backgroundColor:'#fff',height:'100%'}}>
                    <PersonalCenter/>
                </View>
            </TabView.Sheet>
            <TabView.Sheet
                title='服务'
                icon={<Image source={require('./assets/img/table/服务商.png')} style={{width:25,height:25}} tintColor={Theme.tvBarBtnTitleColor}/>}
                activeIcon={<Image source={require('./assets/img/table/服务商.png')} style={{width:25,height:25}} tintColor={Theme.tvBarBtnActiveTitleColor}/>}>
                <View style={{backgroundColor:'#fff',height:'100%'}}>
                    <Home/>
                </View>
            </TabView.Sheet>
            <TabView.Sheet
                title='微聊'
                badge={1}
                icon={<Image source={require('./assets/img/table/微聊.png')} style={{width:26,height:26}} tintColor={Theme.tvBarBtnTitleColor}/>}
                activeIcon={<Image source={require('./assets/img/table/微聊.png')} style={{width:26,height:26}} tintColor={Theme.tvBarBtnActiveTitleColor}/>}>
                <View style={{backgroundColor:'#fff',height:'100%'}}>
                    <SmallTalk/>
                </View>
            </TabView.Sheet>
            <TabView.Sheet
                title='管理'
                icon={<Image source={require('./assets/img/table/订单管理.png')} style={{width:26,height:26}} tintColor={Theme.tvBarBtnTitleColor}/>}
                activeIcon={<Image source={require('./assets/img/table/订单管理.png')} style={{width:26,height:26}} tintColor={Theme.tvBarBtnActiveTitleColor}/>}>
                <View style={{backgroundColor:'#fff',height:'100%'}}>
                    <OrderManag/>
                </View>
            </TabView.Sheet>
            <TabView.Sheet
                title='发布'
                iconContainerStyle={{width:50,height:50,borderRadius:25}}
                icon={<Image source={require('./assets/img/table/火箭.png')} style={{width:50,height:50,borderRadius:25,}}/>}
                activeIcon={<Image source={require('./assets/img/table/火箭.png')} style={{width:50,height:50,borderRadius:25,}}/>}>
                <View style={{backgroundColor:'#fff',height:'100%'}}>
                    <Release/>
                </View>
            </TabView.Sheet>
        </TabView>
      )
    }
}