import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import data from '../data/byte_edition.json'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Editions',
  };

  componentDidMount() {
    // console.log(data)
  }

  renderCards() {
    let render_cards = []
    for (let key in data) {
      let year_editions = data[key]
      for (let year in year_editions) {
        let edition = year_editions[year]
        render_cards.push(<Card title={year} key={year}>
          <View>
            <Text>{edition['main-content']}</Text>
            <Button onPress={() => this.props.navigation.navigate('edition', {edition})}>Read more</Button>
          </View>
        </Card>)
      }
    }
    return render_cards
  }

  render() {
    const users = [{
      name: 'brynn',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }]

    return (
      <View style={styles.container}>
        <ScrollView>
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
