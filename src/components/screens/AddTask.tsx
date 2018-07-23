import React from "react";
import {
  Icon,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";

export default class AddTask extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: "Add task",
    tabBarIcon: () => <Icon type="Entypo" name="add-to-list" />
  });

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Button full>
              <Text>Add</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
