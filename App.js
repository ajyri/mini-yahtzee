import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';
import styles from './styles/style';

export default function App() {
  return (
    <View style={styles.container}>
            <Header></Header>
            <Game></Game>
            <Footer></Footer>
    </View>
  );
}
