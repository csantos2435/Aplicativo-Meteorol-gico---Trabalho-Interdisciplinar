/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
// import api from '../services/api';
import { Container, Info, Title } from './style';
import { LineChartBicolor, LineChart } from 'react-native-gifted-charts';
import { ScrollView, View, Text } from 'react-native';

export default class Data extends Component {

  // state = {
  //   stars: [],
  // };

  // async componentDidMount() {
  //   const {route} = this.props;
  //   const {user} = route.params;
  //   const response = await api.get(`users/${user.login}/starred`);

  //   this.setState({stars: response.data});
  // }

  render() {
    const data = [
      { value: 40 },
      { value: -10 },
      { value: 20 },
      { value: 35 },
      { value: -5 },
      { value: 20 },
      { value: 35 },
    ];
    const lineData = [
      { value: 0, dataPointText: '0' },
      { value: 20, dataPointText: '20' },
      { value: 18, dataPointText: '18' },
      { value: 40, dataPointText: '40' },
      { value: 36, dataPointText: '36' },
      { value: 60, dataPointText: '60' },
      { value: 54, dataPointText: '54' },
      { value: 85, dataPointText: '85' },
      { value: 40, dataPointText: '40' },
      { value: 36, dataPointText: '36' },
      { value: 60, dataPointText: '60' },
      { value: 54, dataPointText: '54' },
      { value: 40, dataPointText: '40' },
      { value: 36, dataPointText: '36' },
    ];
    // const {route} = this.props;
    // const {user} = route.params;
    // const {stars} = this.state;

    return (
      <Container>
        {/* <Header>
          <Avatarperfil source={{uri: user.avatar}} />
          <Nameperfil>{user.name}</Nameperfil>
          <Bioperfil>{user.bio}</Bioperfil>
        </Header>

        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({item}) => (
            <Starred>
              <OwnerAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        /> */}
        <ScrollView>
          <View style={{ backgroundColor: '#1A3461', borderRadius: 20, marginBottom: 20 }}>
          <Text
              style={{
                fontSize: 20,
                color: '#fff',
                textAlign: 'center',
                marginTop: 15,
                marginBottom: 15
              }}>
              Excellent
            </Text>
            <LineChart
              width={300}
              height={250}
              initialSpacing={0}
              isAnimated
              data={lineData}
              spacing={30}
              textColor1="yellow"
              textShiftY={-8}
              textShiftX={-10}
              textFontSize={13}
              thickness={5}
              hideRules
              hideYAxisText
              yAxisColor="#0BA5A4"
              showVerticalLines
              verticalLinesColor="rgba(14,164,164,0.5)"
              xAxisColor="#0BA5A4"
              color="#0BA5A4"
            />
          </View>
          <View style={{ backgroundColor: '#fff', borderRadius: 20}}>
            <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>Temperatura</Text>
            <LineChartBicolor
              width={300}
              height={250}
              data={data}
              areaChart
              colo
              color="red"
              colorNegative="blue"
              startFillColor="red"
              startFillColorNegative="blue"
              backgroundColor={'#fff'}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
