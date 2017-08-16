import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from "./common/CardSection";
import * as actions from "../actions/index";

class ListItem extends Component {
  componentDidMount() {
    // Required for LayoutAnimation to work in Android
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.item.description}</Text>
        </CardSection>
    );
  }

  render() {
    let expandedSection = null;

    if (this.props.expanded)
      expandedSection = this.renderDescription();

    return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.item.id)}>
          <View>
            <CardSection>
              <Text style={styles.titleStyle}>{this.props.item.title}</Text>
            </CardSection>
              {expandedSection}
          </View>
        </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    expanded: state.selectedLibraryId === ownProps.item.id
  }
};

export default connect(mapStateToProps, actions)(ListItem);