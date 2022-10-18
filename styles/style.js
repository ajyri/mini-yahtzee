import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: '10%',
    backgroundColor: '#dc143c',
    flexDirection: 'row',
  },
  footer: {
    backgroundColor: '#dc143c',
    flexDirection: 'row',
  },
  gameboard: {
    marginTop: '30%',
    marginBottom: 'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceList:{
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    alignSelf: 'flex-end',
    margin: 10,
  },
  dice:{
    margin: 20,
    marginBottom: 0
  },
  diceSelect:{
    backgroundColor: 'red',
    margin: 20,
  },
  scoreList:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  score:{
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 0,
    paddingLeft: 9,
    height: 30,
    width: 30,
    fontSize: 15
  },
  score2:{
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 0,
    paddingLeft: 4,
    height: 30,
    width: 30,
    fontSize: 15
  },
  number:{
    marginLeft: 20,
    paddingLeft: 9,
    height: 30,
    width: 30,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 50,
    color: 'white',
    backgroundColor: 'black',
  },
  error:{
    color: 'red',
    fontSize: 15
  },
  numberSet:{
    marginLeft: 20,
    paddingLeft: 9,
    height: 30,
    width: 30,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 50,
    color: 'white',
    backgroundColor: '#dc143c',
  },
  throws:{
    fontSize: 25,
    marginBottom: 20
  },
  total:{
    marginTop: 20,
    fontSize: 25
  },
  bonus:{
    marginTop: 10,
    fontSize: 16
  },
  scoreView:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});