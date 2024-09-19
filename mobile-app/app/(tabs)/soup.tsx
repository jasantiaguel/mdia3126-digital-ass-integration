import { View , Text } from 'react-native';
import { Link } from 'expo-router';

export default function Soup() {
  return (
    <View>
      <Text>Soup</Text>
      <Link href="/cookie">take me to cookie page</Link>
    </View>
  )
}