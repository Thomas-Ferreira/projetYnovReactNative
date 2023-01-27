import { StyleSheet } from 'react-native';

import GeoMap from '../components/GeoMap';
import { readUser } from '../config/firebaseconfig';
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  readUser()
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
