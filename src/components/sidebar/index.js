import React, { Component } from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
    variables,
} from "native-base";

import styles from "./style";

const datas = [
	{
		name: "Home",
		route: "Home",
		icon: "phone-portrait",
		bg: "#C5F442",
	},
	{
		name: "Users",
		route: "Users",
		icon: "easel",
		bg: "#C5F442",
	},
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                    <Image
                        source={require("../../img/sidebar/sidebarPattern.png")}
                        style={{
                        height: 120,
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center"
                        }}>
                    </Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;