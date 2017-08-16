import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        return r1 !== r2;
      }
    });

    this.dataSource = dataSource.cloneWithRows(this.props.libraries);
  }

  renderRow(item) {
    return (
        <ListItem item={item} />
    )
  }

  render() {
    return (
        <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);