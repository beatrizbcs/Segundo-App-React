import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [data, setData] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
      if (status !== 'granted') Alert.alert("Permissão negada", "Não foi possível acessar a câmera.");
    })();

    (async () => {
      try {
        // Use 'localhost' ou seu IP na rede para dispositivos reais
        const response = await fetch('http://localhost:3000/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    })();
  }, []);

  if (hasCameraPermission === null)
    return (<View style={styles.container}><Text>Verificando permissões...</Text></View>);
  if (!hasCameraPermission)
    return (<View style={styles.container}><Text>Sem acesso à câmera.</Text></View>);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} />
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>
          {data ? data.message : "Carregando dados..."}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  camera: { width: 300, height: 300 },
  dataContainer: { marginTop: 20, paddingHorizontal: 20 },
  dataText: { fontSize: 16, textAlign: 'center' },
});