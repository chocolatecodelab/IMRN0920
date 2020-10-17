import React, { Component } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity, 
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './VideoItem';
import data from '../data.json';


class App extends Component {
    render(){ 
        return (
            <View style={Styles.container}>
                <View style={Styles.navBar}>
                    <Image source={require('../images/logo.png')} style={{width: 98, height: 22}} />
                    <View style={Styles.rightNav}>
                            <TouchableOpacity> 
                            <Icon style={Styles.navItem} name="search" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity> 
                            <Icon style={Styles.navItem} name="account-circle" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.body}>
                    <FlatList 
                    data={data.items}
                    renderItem={(video) =><VideoItem video={video.item} />}
                    keyExtractor={(item) => item.id }
                    ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: "#E5E5E5"}}/>}
                    />
                </View>
                <View style={Styles.tabBar}>
                    <TouchableOpacity style={Styles.tabItem}>
                        <Icon name="home" size={25}/>
                        <Text style={Styles.tabTitle}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.tabItem}>
                        <Icon name="whatshot" size={25}/>
                        <Text style={Styles.tabTitle}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.tabItem}>
                        <Icon name="subscriptions" size={25}/>
                        <Text style={Styles.tabTitle}>Subscriptions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.tabItem}>
                        <Icon name="folder" size={25}/>
                        <Text style={Styles.tabTitle}>Library</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};


const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: "white",
        borderBottomWidth: 3,
        borderBottomColor: 'grey',
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rightNav: {
        flexDirection: "row",
    },
    navItem: {
        marginLeft: 25,
    },
    body : {
        flex: 1,
        
    },
    tabBar: {
        backgroundColor: "white",
        height: 55,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        justifyContent: "space-around",
        flexDirection: "row",

    },
    tabItem : {
        alignItems: "center", 
        justifyContent: "center"       
    },
    tabTitle: {
        fontSize: 11,
        color: "#3c3c3c",
        paddingTop: 4,
    }
})








export default App;