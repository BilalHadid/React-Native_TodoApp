import React, { Fragment } from 'react'
import {StyleSheet,
        View,
        Text,
        TextInput,
        Button,
        Dimensions,
        Header,
        Left,
        Icon} from 'react-native'
import Carousel,{Pagination} from 'react-native-snap-carousel';


class App extends React.Component{
  
  constructor(props)
  {
   
    super(props)
    this.state={
      value : '',
      text: []
    }

    
  }
  onTodoApp = () => {
    const {value, text} = this.state
    const merge = [...text,value]
    this.setState({text : merge})
  }
  _renderItem =({item, index}) => {
    return(
      <View style={style.slide}>
        <Text style={{backgroundColor:"blue",height:150,}}>{item}</Text>
      </View>
    )
  }
  get pagination () {
    const { text, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={text.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}
  render(){
    return(
      <Fragment>
        <View >
          <Text style = {style.head}>This is TodoApp</Text>
        </View>
      <View style={style.container}>
        
        <TextInput
        placeholder="Please Enter Something"
        onChangeText={(values) => this.setState({value:values})}
         style={style.myvalue} />
  
        <Button title="Add Todo" onPress={() => this.onTodoApp()} >
          <Text>Add Todo</Text>
        </Button>
        
         <Carousel
              
              ref={(c) => { this._carousel = c; }}
              data={this.state.text}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get('screen').width}
              itemWidth={150}
              onSnapToItem={(index) => this.setState({ value: index }) }
                />
                 { this.pagination }
            
      </View>
      </Fragment>
    )
  }
}
const style = StyleSheet.create({
  container: {
    
    alignItems:'center',
    justifyContent:'center',
    
  },
  head:{
    fontSize: 25,
    backgroundColor: 'red',
    textAlign: 'center',
    marginTop: 20,
    padding: 20,
    
  },
  myvalue:{
    width:'100%',
    height: 50,
    backgroundColor:"gray"
  }
})

export default App