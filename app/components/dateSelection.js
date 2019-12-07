import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {Wheel} from 'teaset'

var now = new Date(),
    y = now.getFullYear(),
    m = now.getMonth(),
    d = now.getDate();
var yearsArray = yearsInterval();

// 设置年限
function yearsInterval(start,end){
    var yearsArray = []

    if(start && end){
        for(var i=start;i<=end;i++)yearsArray.push(i);
    }else{
        for(var i=(y-15);i<=(y+15);i++)yearsArray.push(i);
    }
    
    return yearsArray
}

// 设置日期
function dayInterval(years,month){
    var dayNumber, dayArray=[];

    if(years%4==0 && month==2){
        dayNumber = 29;
    }else{
        if([1,3,5,7,8,10,12].indexOf(month)>-1){
            dayNumber = 31;
        }else if([4,6,9,11].indexOf(month)>-1){
            dayNumber = 30;
        }else if(month == 2){
            dayNumber = 28;
        }
    }
    
    if(!(years || years))dayNumber=31;

    for(var i=1;i<=dayNumber;i++)dayArray.push(i);

    return dayArray
}

export default class DateSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 选中年份下标
            yearsIndex:yearsArray.indexOf(y),
            // 默认年份下标
            defaultYearsIndex:yearsArray.indexOf(y),
            // 获取年份数组
            yearsArray:yearsArray,
            // 选中月份下标
            monthIndex:m,
            // 默认月份下标
            defaultMonthIndex:m,
            // 月份数组
            monthArray:[1,2,3,4,5,6,7,8,9,10,11,12],
            // 选中日期下标
            dayIndex:(d-1),
            // 默认日期下标
            defaultDayIndex:(d-1),
            // 日期数组
            dayArray:dayInterval(y,(m+1)),
        }
    }

    // 获取年
    getYears(){
        var this_ = this;
        return (index)=>{
            this_.setState({
                yearsIndex : index
            })
            if(this_.state.yearsIndex == index){
                this_.getCurrentTime_()
            }
        }
    }

    // 获取月
    getMonth(index){
        var this_ = this;
        return (index)=>{
            this_.setState({
                monthIndex : index,
                dayArray:dayInterval(
                    this_.state.yearsArray[this_.state.yearsIndex],
                    this_.state.monthArray[index]
                )
            })
            if(this_.state.monthIndex == index){
                this_.getCurrentTime_()
            }
        }
    }

    // 获取日
    getDay(index){
        var this_ = this;
        return (index)=>{
            this_.setState({
                dayIndex : index
            })
            if(this_.state.dayIndex == index){
                this_.getCurrentTime_()
            }
        }
    }

    // 获取当前时间
    getCurrentTime_(){
        var this_  = this;
        var years_ = this_.state.yearsArray[this_.state.yearsIndex];
        var month_ = this_.state.monthArray[this_.state.monthIndex];
        var day_   = this_.state.dayArray[this_.state.dayIndex];

        if(this.props.getCurrentTime){
            var timeSTR = years_ + '-' + (month_>=10 ? month_ : '0' + month_) + '-' + (day_>=10 ? day_ : '0' + day_);
            this.props.getCurrentTime(timeSTR)
        }
    }

    // 组件加载执行
    componentDidMount(){
        this.getCurrentTime_()
    }

    render() {
      return (
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
            }}>
            <Wheel
                style={{height: 200, width: 80}}
                itemStyle={{textAlign: 'center'}}
                index={this.yearsIndex}
                defaultIndex={this.state.defaultYearsIndex}
                items={this.state.yearsArray}
                onChange={this.getYears()}
            />
            <Wheel
                style={{height: 200, width: 80}}
                itemStyle={{textAlign: 'center'}}
                index={this.monthIndex}
                defaultIndex={this.state.defaultMonthIndex}
                items={this.state.monthArray}
                onChange={this.getMonth()}
            />
            <Wheel
                style={{height: 200, width: 80}}
                itemStyle={{textAlign: 'center'}}
                index={this.dayIndex}
                defaultIndex={this.state.defaultDayIndex}
                items={this.state.dayArray}
                onChange={this.getDay()}
            />
        </View>
      )
    }
}

// 调用
// <DateSelection
//     getCurrentTime={(STR)=>{console.log(STR)}}
// />
