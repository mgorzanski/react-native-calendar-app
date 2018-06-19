import React, { Component } from 'react';
import { View, UIManager, findNodeHandle, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

interface PopupMenuProps {
  actions: Array<string>;
  onPress?: Function;
};

export default class PopupMenu extends Component<PopupMenuProps, any> {
  constructor(props: PopupMenuProps) {
    super(props);
    this.state = {
      icon: null
    };
  }

  onPress = () => {
    if (this.state.icon) {
      UIManager.showPopupMenu(
        findNodeHandle(this.state.icon),
        this.props.actions,
        null,
        this.props.onPress
      );
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Icon
            type="MaterialIcons"
            name='more-vert'
            style={{ width: 32, height: 32}}
            ref={this.onRef} />
        </TouchableOpacity>
      </View>
    );
  }

  onRef = icon => {
    if (!this.state.icon) {
      this.setState({icon});
    }
  }
}