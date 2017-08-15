import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return (
        <View>
          <Text>{this.props.libraries[0].title}</Text>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);