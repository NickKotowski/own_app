import React, { Component } from 'react';
import { ListView, StyleSheet, View, Text } from 'react-native';
import Row from './Row';

const source_data = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class ListScreen extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  componentDidMount() {
   this.fetchData();
 }

 fetchData() {
    fetch(source_data)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading peop...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return <Row movie={movie} />;
}

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  thumbnail: {
    width: 53,
    height: 81,

    marginRight: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,

  },

});

export default ListScreen;
