import React, {useState} from 'react';
import 
{ 
  View,
  FlatList,
  ScrollView,
  TouchableOpacity   
} from 'react-native';
import {SvgCss} from 'react-native-svg';

import Text from 'components/text';
import Header from 'components/Header/';
import ModalSetting from 'components/ModalSetting/';

import styles from './homeScreen.styles';
import colors from '../../themes/colors';

//icon
import plane from '../../Assets/svg/plane';
import hotel from '../../Assets/svg/hotel';
import exp from '../../Assets/svg/exp';
import planeHotel from '../../Assets/svg/planeHotel';
import eat from '../../Assets/svg/eat';
import ticketTrain from '../../Assets/svg/ticketTrain';
import ticketBus from '../../Assets/svg/ticketBus';
import rentalCar from '../../Assets/svg/rentalCar';
import airportTf from '../../Assets/svg/airportTf';
import more from '../../Assets/svg/more';
import scan from '../../Assets/svg/scan';
import coin from '../../Assets/svg/coin';
import pay from '../../Assets/svg/pay';
import payLater from '../../Assets/svg/payLater';
import goto from '../../Assets/svg/goto';

const menuList = [
  {
    title: 'Tiket Pesawat',
    icon: plane,
    color: colors.plane
  },
  {
    title: 'Hotel',
    icon: hotel,
    color: colors.hotel
  },
  {
    title: 'Pesawat Hotel',
    icon: planeHotel,
    color: colors.planeHotel
  },
  {
    title: 'Xperience',
    icon: exp,
    color: colors.exp
  },
  {
    title: 'Eats',
    icon: eat,
    color: colors.orange
  },
  {
    title: 'Kereta Api',
    icon: ticketTrain,
    color: colors.train
  },
  {
    title: 'Ticket Bus & Travel',
    icon: ticketBus,
    color: colors.bus
  },
  {
    title: 'Mobil',
    icon: rentalCar,
    color: colors.rental
  },
  {
    title: 'Airport Transfer',
    icon: airportTf,
    color: colors.airport
  },
  {
    title: 'Semua Produk',
    icon: more,
    color: colors.gray
  }
];

walletList = [
  {
    title: 'Points',
    icon: coin,
  },
  {
    title: 'Payments',
    icon: pay
  },
  {
    title: 'PayLater',
    icon: payLater
  },
]

function HomeScreen({navigation}) {
  const [modalSetting, setModalSetting] = useState(false)

  return (
    <View style={styles.screen}>
      <Header 
        onPressSearch={() => navigation.navigate('Search')}
        onPressSetting={() => setModalSetting(true)}
      />
      <ScrollView>
        <View
          style={styles.sectionInfo}
        >
          <View
            style={styles.infoName}
          >
            <View
              style={styles.infoNameContent}
            >
              <Text style={{textAlign: "center"}}>AT</Text>
            </View>
            <Text style={styles.nameText}>Ahmad Tri</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Scanner')}
            activeOpacity={1}
            style={{
              padding: 10,
              alignItems: "center"
            }}
          >
            <SvgCss width={30} height={30} xml={scan}/>
            <Text style={{textAlign: "center"}}>Pindai</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={3}
          data={walletList}
          renderItem={({item}) => {
            return(
              <View
                activeOpacity={1}
                style={{
                  flex:1,
                  marginTop:0,
                  margin: 3,
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 10,
                    flexDirection: 'row'
                  }}
                >
                  <SvgCss width={20} height={20} xml={item.icon}/>
                  <Text>{item.title == 'Points' ? 0 : ''}</Text>
                  <Text>{item.title}</Text>
                  <SvgCss width={20} height={20} xml={goto} rotation={270}/>
                </TouchableOpacity>
              </View>
            )
          }}
        />
        <FlatList
          style={styles.sectionMenu}
          numColumns={5}
          data={menuList}
          renderItem={({item}) => {
            return(
              <View
                style={{flexWrap:"wrap"}}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('Menu')}
                  style={[styles.menu, {backgroundColor: item.color}]}
                >
                  {
                    <SvgCss width={30} height={30} xml={item.icon}/>
                  }
                </TouchableOpacity>
                <Text 
                  style={styles.menuText}>
                  {item.title}
                </Text>
              </View>
            )
          }}
        />
      </ScrollView>
      <ModalSetting
        visible={modalSetting}
        setVisible={setModalSetting}
      />
    </View>
  );
}

export default HomeScreen;
