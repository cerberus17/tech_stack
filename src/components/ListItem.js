import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { CardSection } from "./common/CardSection"

class ListItem extends Component {
  render() {
    return (
        <CardSection>
          <Text style={styles.titleStyle}>{this.props.item.title}</Text>
        </CardSection>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;