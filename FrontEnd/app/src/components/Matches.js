import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Button} from 'react-native';
 
export default class Matches extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
 
        return fetch('http://192.168.8.100:3000/listUsers')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson,
              
            }, function(){
          
            });
      
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    
      render(){
    
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View style={{flex: 1, paddingTop:20}}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.statusShortDescription},{item.status},{item.title},{item.shortName},{item.moreDetails},{item.format}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
      }
}

 