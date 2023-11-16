/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keyboard, ActivityIndicator} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {
  Container,
  List,
  Cidade,
  Name,
  CityButton,
  ProfileButtonText,
} from './style';

export default class City extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({users: JSON.parse(users)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {users} = this.state;

    if (prevState.users !== users) {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    try {
      const {users, newUser} = this.state;

      this.setState({loading: true});

      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
      };

      this.setState({
        users: [...users, data],
        newUser: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      alert('Usuário não encontrado!');
      this.setState({loading: false});
    }

    // eslint-disable-next-line no-undef
    console.log(response.data);
  };

  render() {
    const {users, newUser, loading} = this.state;

    return (
      <Container>

          <CityButton
            onPress={() => {
              this.props.navigation.navigate('data');
            }}>
          <ProfileButtonText>Ver dados da cidade</ProfileButtonText>
        </CityButton>
        <List
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <Cidade>
              <Name>{item.name}</Name>

              <CityButton
                onPress={() => {
                  this.props.navigation.navigate('main', {user: item});
                }}>
                <ProfileButtonText>Ver dados da cidade</ProfileButtonText>
              </CityButton>
            </Cidade>
          )}
        />
      </Container>
    );
  }
}
