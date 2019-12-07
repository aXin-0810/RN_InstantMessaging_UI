import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {
    Container, 
    Header, 
    Content,
    InputGroup,
    Input,
    Button,
    Icon,
} from 'native-base';
import {
    Carousel,
    SegmentedBar,
    TabView
} from 'teaset';
import {
    Card,
    Subtitle,
    Caption,
} from '@shoutem/ui'
import AdaptiveImage from '../components/adaptiveImage'

// 头部导航模块
const headerModule = (this_) => {
    
    // 输入框文本内容
    var inputStr = ''

    // 点击定位触发函数
    function clickPositioning(){
        console.log('点击了定位');
    }

    // 点击搜索按钮触发函数
    function clickSearch(){
        console.log('点击了搜索');
    }

    // 点击标签按钮
    function clickLabel(index){
        var item = this_.state.serviceOptions[index];
        console.log(item)
    }

    return (
        <Header 
            iosBarStyle={'dark-content'}
            androidStatusBarColor={'#fff'}
            style={styles.headerContainer}>
            {/* <InputGroup borderType="rounded" style={{width:"82%",height:"60%",backgroundColor:'#f2f2f2',borderRadius:30,borderBottomWidth:0}}>
                <Text style={{ width:'15%', fontSize:14, textAlign:'center' }}>搜索</Text>
                <Input 
                    style={{ color: '#B0B0B0', fontSize:12 }} 
                    onChangeText={(str)=>{inputStr = str}}
                />
            </InputGroup> */}
            <View style={{width:"73%",height:"60%",}}>
                <SegmentedBar justifyItem='scrollable' indicatorType='customWidth' onChange={clickLabel}>
                    {this_.state.serviceOptions.map((item,index)=>{return (
                        <View style={{padding: 8}} pointerEvents='none'>
                            <TabView.Button title={item.title}/>
                        </View>
                    )})}                        
                </SegmentedBar>
            </View>
            <TouchableOpacity onPress={clickSearch}>
                <Icon name="apps" style={{color: '#ccc',fontSize:24}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={clickSearch}>
                <Icon name="search" style={{color: '#ccc',fontSize:24}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={clickPositioning}>
                <Icon name="pin" style={{color: '#ccc',fontSize:22}}/>
            </TouchableOpacity>
        </Header>
    )
}; 

// 轮播模块
const bannerModule = (this_) => {

    // 点击轮播图片
    function clickBanner(item,index){
        console.log(item)
        console.log(index)
    }

    return (
        <View style={styles.shufflingContainer}>
            <Carousel 
                style={{ width:'96%', height: 60 }}
                // control={
                //     // 轮播标点提示
                //     <Carousel.Control
                //         dot={<View style={styles.controlView}><Text style={styles.dotStyle}></Text></View>}
                //         activeDot={<View style={styles.controlView}><Text style={styles.activeDotStyle}></Text></View>}
                //     />
                // }
                >
                {this_.state.shufflingFigureGroup.map((item,index,arr)=>{ return (
                    <TouchableOpacity 
                        key={index}
                        onPress={()=>{ clickBanner(item,index) }}>
                        <Image 
                            resizeMode='cover' 
                            style={{width:'100%', height: '100%',}} 
                            source={ (item.uri && {uri:item.uri}) || item.require } />
                    </TouchableOpacity>
                )})}
            </Carousel>
        </View>
    );
};

// 服务导航模块
const serviceNavModule = (this_) => {

    // 点击服务标签
    function clickService(item,index){
        console.log(item)
        console.log(index)
    }

    return (
        <View
            style={styles.serviceNav}>
            {this_.state.serviceOptions.map((item,index,arr) => { return (
                <TouchableOpacity
                    key={index}
                    onPress={()=>{ clickService(item,index) }}>
                    <View style={styles.iconContainer}>
                        {/* 图标 */}
                        <Image  
                            resizeMode='stretch'
                            style={styles.iconImg}
                            source={ (item.uri && {uri:item.uri}) || item.require }
                        />
                        
                        {/* 热门图标 */}
                        {item.hot && <Text style={styles.hotIcon}>HOT</Text>}
                        
                        {/* 服务文本 */}
                        <Text style={styles.iconText}>
                            {item.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            )})}
        </View>
    );
};

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 轮播集合
            shufflingFigureGroup:[
                {
                    uri:'http://pic33.photophoto.cn/20141022/0019032438899352_b.jpg',
                    router:'',
                },
                {
                    uri:'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg',
                    router:'',
                },
                {
                    uri:'http://img5.duitang.com/uploads/item/201208/23/20120823175210_HnQJc.jpeg',
                    router:'',
                },
            ],
            // 服务导航选项
            serviceOptions: [
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                    title: '推荐'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                    title: '京东超市'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                    title: '京东生鲜'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',
                    title: '京东服饰'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5707/83/1407890143/14681/29321e2c/59263c71Nc7d16503.png',
                    title: '领券'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5773/256/159664156/17475/742fec7e/591d9475Na810c2eb.png',
                    title: '京东到家'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5647/156/156583179/12255/981e942a/591d94a1Nfde63a47.png',
                    title: '充值缴费'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/s126x126_jfs/t2758/175/4146829331/10078/d6a3aa98/57aacab9N98edf989.png',
                    title: '全球购'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png',
                    title: '火车票'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5824/248/156712927/7215/1ad6be5f/591d94c6Nc4711ad2.png',
                    title: '赚钱'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                    title: '京东超市'
                }
            ],
            //卡片列表数据
            cardListDataLeft:[
                'http://upyun.ijucaimao.cn/picforapp/744702466@chatroom/Receive/20181203/b6ec33d162b983c103b04883fb05469a.jpg',
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181013/da2d91100aab98ffb086018f1fc8ff2e.jpg',
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181014/443911e5bd29bf8c254d95d95880efa5.jpg',
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181014/c708345c4a54eb246b457f2fd94be416.jpg',
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181014/d5a96ec3617dc070b7ad493908fb6e40.jpg',
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181019/2f670fdcc28c82e5842e195be15c49e9.jpg',
            ],
            cardListDataRight:[
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181019/3aad115b9bceb638de860243d05491e9.jpg',
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181019/7d354f3ac39241c9c33e5d8960609758.jpg',
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181019/446c3fbd8bb180c62efa3299f00799e9.jpg',
                'http://upyun.ijucaimao.cn/picforapp/4690633915@chatroom/Send/20181019/527382e0f8b9e1f23adb424c6e8cc45e.jpg',
                'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png',
            ],
        }
    }
    render() {
      return (
        <Container>
            {/* 头部 */ headerModule(this)}
            
            {/* 主内容 */}
            <Content>
                <View>
                    {/* 轮播图 */   bannerModule(this)}
                </View>

                <View>
                    {/* 服务分类按钮组件 */}
                </View>

                {/* 卡片列表数据 */}
                <View style={styles.shufflingContainer}>
                    <View style={{
                        width:'96%',
                        flexDirection:'row',
                        flexWrap:'nowrap',
                        justifyContent:'space-between',
                        }}>

                        <View style={{width:'49%'}}>
                            {this.state.cardListDataLeft.map((uri,index)=>{ return (
                                <View style={{marginBottom:10}}>
                                    <AdaptiveImage
                                        uri={uri}
                                        type={'height'}
                                        proportion={0.96*0.49}
                                    />
                                    <View><Text>1</Text></View>
                                    <View><Text>1</Text></View>
                                </View>
                            )})}
                        </View>

                        <View style={{width:'49%'}}>
                            {this.state.cardListDataRight.map((uri,index)=>{ return (
                                <View style={{marginBottom:10}}>
                                    <AdaptiveImage
                                        uri={uri}
                                        type={'height'}
                                        proportion={0.96*0.49}
                                    />
                                    <View><Text>1</Text></View>
                                    <View><Text>1</Text></View>
                                </View>
                            )})}
                        </View>
                        
                    </View>
                </View>

            </Content>
        </Container>
      )
    }
}

const styles = StyleSheet.create({
    // 导航头部
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#fff',
    },

    // 轮播区域样式
    shufflingContainer:{
        paddingTop:8,
        paddingBottom:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    controlView:{
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        padding: 4,
    },
    dotStyle:{
        width:6,
        height:6,
        borderRadius:3,
        backgroundColor:'#fff',
    },
    activeDotStyle:{
        width:6,
        height:6,
        borderRadius:3,
        backgroundColor:'#5bc0de',
    },

    // 服务分导航区域样式
    serviceNav: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: global.width,
        height: 'auto'
    },
    iconContainer: {
        width:global.rem*1.4,
        height:global.rem*1.6,
        margin: global.rem * 0.3,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative'
    },
    iconImg: {
        width:global.rem*1,
        height:global.rem*1
    },
    hotIcon: {
        fontSize:global.rem*0.2,
        padding:global.rem*0.02,
        borderRadius:global.rem*0.1,
        backgroundColor:'red',
        color:'#fff',
        position: 'absolute',
        right:1,
        top:1
    },
    iconText:{
        fontSize:global.rem*0.3
    },


});