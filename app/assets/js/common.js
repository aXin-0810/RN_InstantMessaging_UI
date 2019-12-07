import { Dimensions, PixelRatio } from 'react-native'

(()=>{
    let deviceWidth = Dimensions.get('window').width,      //设备的宽度
        deviceHeight = Dimensions.get('window').height,    //设备的高度
        fontScale = PixelRatio.getFontScale(),             //返回字体大小缩放比例
        pixelRatio = PixelRatio.get();                     //当前设备的像素密度
   

    //宽度除以密度
    const w = deviceWidth / pixelRatio;
    //高度除以密度
    const h = deviceHeight / pixelRatio;
    //获取缩放比例
    const scale = Math.min(deviceHeight / h, deviceWidth / w);
    
    
    /**
     * 设置text
     */
    function FontSize(size){
        size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
        return size / pixelRatio;
    }
    
    /**
     * 设置rem
     */
    function RemSize(size){
        size = Math.round(size * scale + 0.5);
        return size / pixelRatio;
    }

    // 全局rem单位值
    global.rem      =RemSize(deviceWidth)/10;
    
    // 屏幕宽
    global.width    =RemSize(deviceWidth);
    
    // 屏幕高度
    global.height   =RemSize(deviceHeight);
    
    /*************************************************************  定义全局数据  ******************************************************************* */

    // 主颜色
    global.mianColor    =   '#FF6347';

})();