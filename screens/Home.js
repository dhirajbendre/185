import React,{Component} from 'react';
import {
    View,
    Text,
    Stylesheet,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }
    render(){
        return(
            <View style={styles.Container}>
  <SafeAreaView style={styles.AndroidSafeArea}/>


  <View style={styles.headingConatiner}>

    
    <View styles={{
        flex:'row',
     flexwrap:'wrap'   
    }}>
      <Text styles={styles.subheading}> Try Out</Text>
    </View>
  </View>

  <View style={styles.contentContainer}>

    
<View styles={{
    flex:'row',
 flexwrap:'wrap'   
}}>
  <Text styles={styles.subheading}> Experience the virtual </Text>
</View>
</View>
                
            </View>
        
        )
    }
    
}

const styles =  StyleSheet.create({


    Container:{
        flex:1,
        backgroundColor:"#6278e4"
    }
})