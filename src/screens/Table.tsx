import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import TableItem from '../components/TableItem'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Table extends React.Component<{}> {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="table-large" size={32} color={tintColor} />)
  }

  render() {
    return (
      <View style={styles.container}>

        <TableItem 
          title="Ball Possesion"
          scores={[1,5]}
        />
         
        
         <TableItem 
          title="Goal Attempts"
          scores={[4,2]}
        />
         


        <TableItem 
          title="Shots on Goal"
          scores={[1,5]}
        />
        <TableItem 
          title="Shots of Goal"
          scores={[1,5]}
        />

        <TableItem 
          title="Goalkeeper saves"
          scores={[1,5]}
        />

        <TableItem 
          title="Corner Kick"
          scores={[1,5]}
        />

        <TableItem 
          title="Offsides"
          scores={[1,5]}
        />

        <TableItem 
          title="Fouls"
          scores={[1,5]}
        />
         
        <TableItem 
          title="Yellow Card"
          scores={[1,5]}
          yellowCard={true}
        />

        <TableItem 
          title="Red Card"
          scores={[1,5]}
          redCard={true}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 20,
    backgroundColor: COLOR.PRIMARY
  },
  header: {backgroundColor: COLOR.BLACK, flex: 1, paddingTop: 50, flexDirection: 'column', alignItems: 'flex-start', position: 'relative'},
  headerTitle: {color: COLOR.PRIMARY, fontSize: DIMEN.HEADER_TITLE, alignSelf: 'center' },
  headerInfoIcon: {alignSelf: 'flex-end', marginRight: 20, marginTop: 0, top: 50, right: 5, position: 'absolute'}
});
