import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Card, SearchBar } from 'react-native-elements'
import _ from 'lodash'
import uuid from 'uuid/v4'
import data from '../data/byte_edition.json'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Editions',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#613c8c'
    },
    headerTitleStyle: {
      fontSize: 24
    }
  };

  constructor(){
    super()
    this.state = {
      search_val: ''
    }
    this.updateSearch=this.updateSearch.bind(this)
  }

  updateSearch(value) {
    this.setState({
      search_val: value
    })
  }

  componentDidMount() {
    // console.log(data)
  }

  renderCards() {
    let { search_val } = this.state

    let render_cards = _.map(data, edition => {
      let is_valid = true

      if (search_val !== '' && edition['title'].indexOf(search_val) === -1) {
        is_valid = false
      }

      if (is_valid) {
        return (<Card title={edition['title']} key={uuid()}>
          <View>
            <Text>{edition['header']}</Text>
            <Text onPress={() => this.props.navigation.navigate('edition', { edition })}>Read more</Text>
          </View>
        </Card>)
      }
    })
    return render_cards
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <SearchBar
            placeholder="Search the edition here..."
            onChangeText={this.updateSearch}
          // value={search}
          />
          {this.renderCards()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  }
});
