# CommonDialog
This is a combination of the pop-up box confirmation react-native components for Android and Ios,you can customize the style and parameters for the component  
# react-native-zDialog-List
- A react-native picker/selector component for both Android & iOS.
#Features
- Pure JS.
- Pop up box and confirm the box together .
- Custom pop-up box
- Compatible with both iOS and Android.
- Highly customizable.(You can change the style you want)
- Controllable with API by code. (show/hide/valueChange)
- Flexible change of content
#Installation
- npm i react-native-dialogs-master --save

#Usage
- Import this module:
--javascript
- import CommonDialog from 'react-native-dialogs-master';
--
```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import TimerMixin from 'react-timer-mixin'; 
import CommonDialog from './mineUI/product/commonDialog';
export default class DialogDemo extends Component { 
  constructor(props){
	 super(props); 
  }
  funAlert(){
	  var options={
		 thide:true,
         innersWidth:300,
         innersHeight:150,	
		 buttons:[
					 {
						txt:'知道了'
					 }
				 ]			 
	  }
	 this.refs.dAlert.show(options) 
  }
  funConfirm(){
	 var options={
		 thide:true, /*不显示头部标题*/
         messText:'投资前需开通第三方存管账户',
         buttons:[
			 {
				txt:'取消'
			 },
			 {
				txt:'确定'
			 }
		 ]				 
	  } 
	 this.refs.dConfirm.show(options) 
  }
  funcustomConfirm(){
	 var options={
		 title:'购买', /*不显示头部标题*/
		 headStyle:{backgroundColor:'#ff6600',color:'#ffffff',fontSize:24},
         messText:'投资前需开通第三方存管账户',
		 buttons:[
			 {
				txt:'暂不投资',
				btnStyle:{backgroundColor:'transparent'},
				txtStyle:{color:'#ff6600'},
				onpress:this.cancels.bind(this)
			 },
			 {
				txt:'立即投资',
				btnStyle:{backgroundColor:'#ff6600'},
				txtStyle:{color:'#ffffff'}, 
				onpress:this.cok.bind(this)
			 }
		 ]		 
	  } 
     this.refs.dcustomConfirm.show(options) 	  
  }
  cok(){
	alert("你点击了确定按钮!")  
  }
  cancels(){
	this.refs.dokAlert.show({
		headStyle:{backgroundColor:'#ff6600',color:'#ffffff',fontSize:24},
		messText:'确定取消投资吗？',
		buttons:[{txt:'确定',btnStyle:{backgroundColor:'transparent'},txtStyle:{color:'#ff6600'}}],
		innersWidth:300,
		innersHeight:150,
		}) 
  }
  funAutofade(){
	  var options={
		animationType:'none',
		title:'自定义组件',
        clickScreen:false		
	  }
	 this.refs.dAutofade.show(options) 
  }
  hides(){
	  this.refs.dAutofade.hide();
  }
  render() {
	 
    return (
       <View style={styles.container}>
	      <TouchableHighlight style={[styles.comBtnBtnView,{width:100}]} underlayColor='transparent' onPress={this.funAlert.bind(this)}>  
			<Text style={[styles.comBtnText]}>alert</Text>  
		  </TouchableHighlight>
		  <TouchableHighlight style={[styles.comBtnBtnView,{width:100}]} underlayColor='transparent' onPress={this.funConfirm.bind(this)}>  
			<Text style={[styles.comBtnText]}>confirm</Text>  
		  </TouchableHighlight>
		  <TouchableHighlight style={[styles.comBtnBtnView,{width:100}]} underlayColor='transparent' onPress={this.funcustomConfirm.bind(this)}>  
			<Text style={[styles.comBtnText]}>customconfirm</Text>  
		  </TouchableHighlight>
		  <TouchableHighlight style={[styles.comBtnBtnView,{width:100}]} underlayColor='transparent' onPress={this.funAutofade.bind(this)}>  
			<Text style={[styles.comBtnText]}>Autofade</Text>  
		  </TouchableHighlight>
		  <CommonDialog types={'alert'} components={<DefineCon/>}   ref="dAlert" />
		  <CommonDialog types={'confirm'} ref="dConfirm" />
		  <CommonDialog  ref="dokAlert" />
		  <CommonDialog  ref="dcustomConfirm" />
		  <CommonDialog  ref="dAutofade"  components={<DefineCon2 onclick={this.hides.bind(this)}/>}  />
	   </View>
    );
  }
}
class DefineCon2 extends Component{
	mixins = [TimerMixin];
	constructor(props){
		super(props);
		this.timer=""; 
		this.state={
			times:3
		}
	}
	componentDidMount() {
		this.timer=setInterval(  
			() => {  
			
			  if(this.state.times<=1){
				clearInterval(this.timer)
                this.props.onclick()				
			  }else{
				  this.setState({times:this.state.times-1})
			  }  
			},  
			1000 
		  );
	}
	 componentWillUnmount() {
		 clearInterval(this.timer);
		
    }
	
	render(){
	    return(
		  <View style={[styles.conMid]}>
		      <View style={{flex:1,flexDirection:'column',padding:15,alignItems:'center',justifyContent:'center'}}>
			    <Text style={{flex:1,color:'#000000',textAlignVertical:'center'}}>支付成功,订单已提交审核！</Text>
				<Text style={{flex:1,fontSize:12,textAlignVertical:'center'}}>即将关闭此窗口（<Text style={{color:'#ff0000'}}>{this.state.times}秒</Text>）</Text>
			  </View> 
		  </View>
		)
	}
}
class DefineCon extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		  <View style={[styles.conMid]}>
		     <Image source={require('./mineUI/product/imgs/alert.png')} style={{width:32,height:32}} />
		     <Text style={[styles.tmid,{width:120,paddingLeft:15}]}>我是自定义内容</Text>
		  </View>
		)
	}
} 
```
    
## Demo
<img src="https://github.com/antiantian/CommonDialog/blob/master/show.gif" width = "400" height = "auto" alt="Demo 1"/>

### Customization options



- 'animateType': Change pop up block display animation ('fade','normal','slide')
       - The animationType prop controls how the modal animates.
            - slide: slides in from the bottom
            -fade: fades into view
            -none: appears without an animation
- 'thide'：(true|false) show or hide header			
- 'title':	Custom header text    
- 'headStyle': Change the style of the dialogs header
- 'innersWidth': Change the width of the dialogs
- 'innersHeight':Change the height of the dialogs
- 'clickScreen': (true|false) Transparent area can click
- 'messText': Prompt text
- 'buttons':Button group object
```javascript
      buttons:[
			 {
				txt:'button text',     ---string
				btnStyle:{backgroundColor:'transparent'},  button style---object
				txtStyle:{color:'#ff6600'},    button text style           ---object
				onpress:this.cancels.bind(this) button click event          ---function
			 }
			 ...
            ]
```
### Props 
- 'components': Custom middle context component

### Methods
Method            |  Description
----------------- |  -----------
`show(options)`   |  Show  dialogs   （ use the react-native Modal component  to always be at the top）
`hide()`          |  Hide dialogs



