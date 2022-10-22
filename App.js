import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';

const Bandara = [
  {
    bandara_kode: 'B1',
    bandara_nama: 'Bandara Raden Intan II',
  },
  {
    bandara_kode: 'B2',
    bandara_nama: 'Bandara Soekarno Hatta',
  },
  {
    bandara_kode: 'B1',
    bandara_nama: 'Bandara Adi Sucipto',
  },
]

const Maskapai = [
  {
    maskapai_id: 'M1',
    maskapai_nama: 'Garuda Indonesia',
  },
  {
    maskapai_id: 'M2',
    maskapai_nama: 'Batavia Air',
  },
  {
    maskapai_id: 'M3',
    maskapai_nama: 'Lion Air',
  },
]

const JadwalTerbang = [
  {
    jadwal_id: 'P1',
    bandara_kode_keberangkatan: 'B2',
    bandara_kode_tujuan: 'B1',
    maskapai_id: 'M3',
    tgl_berangkat: 8,
  },
  {
    jadwal_id: 'P2',
    bandara_kode_keberangkatan: 'B1',
    bandara_kode_tujuan: 'B3',
    maskapai_id: 'M2',
    tgl_berangkat: 12,
  },
  {
    jadwal_id: 'P3',
    bandara_kode_keberangkatan: 'B1',
    bandara_kode_tujuan: 'B2',
    maskapai_id: 'M3',
    tgl_berangkat: 23,
  },
  {
    jadwal_id: 'P4',
    bandara_kode_keberangkatan: 'B3',
    bandara_kode_tujuan: 'B2',
    maskapai_id: 'M1',
    tgl_berangkat: 1,
  },
  {
    jadwal_id: 'P5',
    bandara_kode_keberangkatan: 'B2',
    bandara_kode_tujuan: 'B3',
    maskapai_id: 'M1',
    tgl_berangkat: 5,
  },
]

function PageFormulir({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>
        Hiling.id
      </Text>
      <View style={styles.box}>
        <Text style={styles.TextSblmInput}>
          Lokasi Keberangkatan
        </Text>
        <TextInput style={styles.input}>
          Masukkan Lokasi Keberangkatan
        </TextInput>  

        <Text style={styles.TextSblmInput}>
          Lokasi Tujuan
        </Text>
        <TextInput style={styles.input}>
          Masukkan Lokasi Tujuan
        </TextInput>  

        <Text style={styles.TextSblmInput}>
          Tanggal Keberangkatan
        </Text>
        <TextInput style={styles.input}>
          Masukkan Tanggal Keberangkatan
        </TextInput>  

      <Pressable style={styles.button} onPress={() => {
        navigation.navigate('Page Jadwal')
      }}>
        <Text style={styles.text}>{"Cari"}</Text>
      </Pressable>
      </View>
      <Text style={styles.identitas}>
        Copyright Denny Prayoga Setiawan Halim 120140012
      </Text>
    </View>
  );
}

function PageJadwal({}){
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>
        Hiling.id
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Page Formulir" component={PageFormulir} />
      <Stack.Screen name="Page Jadwal" component={PageJadwal} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e9e4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderRadius: 20,
    margin: 10,
    flex: 0.8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingVertical: 12,
    paddingHorizontal: 125,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  identitas: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderWidth: 1,
    marginLeft: 20,
    padding: 8,
    margin: 10,
    borderColor: '#777',
    fontSize: 12,
    fontWeight: 'thin',
    color: 'black',
    textAlign: 'left',
  },
  TextSblmInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    textAlign: 'left',
  },
  judul: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
