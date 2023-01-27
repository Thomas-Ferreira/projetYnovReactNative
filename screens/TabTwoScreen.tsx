import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import GeoMap from '../components/GeoMap';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <GeoMap />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
