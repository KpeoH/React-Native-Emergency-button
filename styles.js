import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '50%',
    },
    backgroundImg:{
      flex: 1,
      resizeMode: 'cover',
    },
    input: {
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 50,
      width: '100%',
      padding: 10,
      backgroundColor: '#FBF3E8',
      color: '#040113',
      fontSize: 18,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    main: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 50,
      elevation: 3,
      color: 'blue',
      width: '70%',
      height: 50,
      marginTop: 20,
      backgroundColor: '#84e57d',
    },
    buttonAdd: {
      backgroundColor: '#84e57d',
    },
    buttonDel: {
      backgroundColor: '#E6797F',
    },
    registration: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      display: 'flex',
    },
    modalView: {
      marginTop: '50%',
      backgroundColor: '#F0CE9D',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 40,
      elevation: 2,
      width: '80%',
      position: 'absolute',
      left: '10%',
    },
    contactBlock: {
      borderStyle:'solid',
      margin: 20,
      fontSize: 26,
    },
    contactItem: {
      backgroundColor: 'red',
      textAlign: 'center',
      color: 'white',
      padding: 10,
      borderRadius: 20,
      fontSize: 18,
    }
  });

  export default styles;