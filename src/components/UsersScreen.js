import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, Item, Input } from 'native-base';

export default class UsersScreen extends Component {
    constructor()
    {
        super();
        this.state = {
            users:[]
        };
        this.fetchUsers();
    }

    fetchUsers()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=> response.json())
            .then((response)=>{
                this.setState({
                    users : response
                });
            });
    }

    fetchUserDetail(id)
    {
        let index = this.state.users.findIndex(function(item, i){
            return item.id === id
        });
        console.log(this.state.users[index]);
        this.props.navigation.navigate();
    }

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
                        <Title>Users</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>this.fetchUsers()}>
                            <Icon name="refresh" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List
                        dataArray={this.state.users}
                        renderRow={data =>
                            <ListItem onPress = {() => this.fetchUserDetail(data.id)}>
                                <Text>{data.name}</Text>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}