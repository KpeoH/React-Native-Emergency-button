import { Text, View, TouchableOpacity, TextInput, Image, ScrollView, Linking, Modal, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

export default function App() {
  const [phoneNumbers, setPhoneNumbers] = React.useState(new Map([['Пожарные', '101'], ['Полиция', '102'], ['Скорая', '103']]));
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const hideModal = () => setIsModalVisible(false);

  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const showModal2 = () => setIsModalVisible2(true);

  const hideModal2 = () => setIsModalVisible2(false);
  function openPhoneNumber(number : string) {
    const url = `telprompt://${number}`;
    return Linking.openURL(url);
  }
  function renderPhoneList() {
    return (
      <View style={styles.contactItem}>
        {Array.from(phoneNumbers.entries()).map(([key, value]) => (
          <Text key={key} style={styles.contactItem} onPress={() => openPhoneNumber(value)} onLongPress={() => deleteContact(key)}>{key}: {value}</Text>
        ))}
      </View>
    );
  }
  function deleteContact(key : string) {
    setPhoneNumbers(prevPhoneNumbers => {
      prevPhoneNumbers.delete(key);
      return new Map(prevPhoneNumbers);
    });
  }

    return(
      <ImageBackground source={require('./assets/back.jpg')} style={styles.backgroundImg}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('./assets/sos.gif')} style={{borderRadius: 1, height:150, width:150}}/>
          <Modal animationType='slide' transparent={true} visible={isModalVisible}>
            <View style={styles.modalView}>
              <Text style={styles.main}>Введите данные:</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20}}>Имя:</Text>
              <TextInput style={styles.input} placeholder='Вася' onEndEditing={(value) => setName(value.nativeEvent.text)}/>
              <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Номер:</Text>
              <TextInput style={styles.input} placeholder='(без +7)' maxLength={10} onChangeText={setNumber} />
              <TouchableOpacity style={styles.button} onPress={() => {
                if (name && number) {
                  setPhoneNumbers(prevPhoneNumbers => {
                    prevPhoneNumbers.set(name, `+7${number}`);
                    return new Map(prevPhoneNumbers);
                  });
                }
                hideModal();
              }}>
              <Text>Готово</Text>
              </TouchableOpacity>
              </View>
            </Modal>
        <View style={styles.contactBlock}>
            {renderPhoneList()}
        </View>
        <TouchableOpacity style={[styles.button, styles.buttonAdd]} onPress={showModal}>
            <Text>Добавить экстренный контакт</Text>
          </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonDel]} onPress={showModal2} onLongPress={() => alert('я пасхалка')}>
          <Text >Удалить контакт</Text>
        </TouchableOpacity>
        <Modal animationType='slide' transparent={true} visible={isModalVisible2}>
          <View style={styles.modalView}>
            <Text style={styles.main}>Введите имя контакта</Text>
            <Text style={{ fontSize: 8, fontWeight: 'bold', marginBottom: 10}}>(Вы также можете удалить контакт с помощью долгого нажатия на него)</Text>
            <TextInput style={styles.input} placeholder='Вася' onSubmitEditing={(value) => deleteContact(value.nativeEvent.text)}/>
            <TouchableOpacity style={styles.button} onPress={hideModal2}>
              <Text>Готово</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      </ScrollView>
      </ImageBackground>
  );
}