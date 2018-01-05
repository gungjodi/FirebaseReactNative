import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Left>
                <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
              Home
          </Text>
        </Content>
      </Container>
    );
  }
}