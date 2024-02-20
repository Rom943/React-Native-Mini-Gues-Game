import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

export default function GameOverScreen() {
  return (
    <View style ={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highLight}>X</Text> rounds to guess the number <Text style={styles.highLight}>Y</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer:{
    width:300,
    height:300,
    borderRadius:150,
    borderWidth:3,
    borderColor:Colors.primary800,
    overflow:"hidden",
    margin:36,
  },
  image:{
    width:'100%',
    height:'100%'
  },
  rootContainer:{
    flex:1,
    padding:24,
    justifyContent:"center",
    alignItems:"center"
  },
  highLight:{
    fontWeight:"bold",
    color:Colors.primary500,
  },
  summaryText:{
    fontSize:24
  }
});
