
import { Platform, StyleSheet, View, Text, ImageBackground } from 'react-native';
import icedCoffeeImg from "@/assets/images/coffee-splash.png"



export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
          <ImageBackground 
            source={icedCoffeeImg}
            resizeMode='cover'
            style={styles.image}
          >
            <Text style={styles.title}>Coffee Shop</Text>
          </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4
  }
})
