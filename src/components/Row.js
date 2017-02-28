import React, { Component } from 'react';
import { ListView, StyleSheet, View, Text, Image } from 'react-native';


class Row extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg' }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{this.props.movie.title}</Text>
          <Text>{this.props.movie.year}</Text>
          <Text>{this.props.movie.mpaa_rating}</Text>
        </View>
      </View>
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
    width: 380,
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

export default Row;
