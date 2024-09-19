import { View , Text } from 'react-native';
import { Link } from 'expo-router';

export default function Cookie() {
  return (
    <View>
      <Text>Cookie</Text>
      <Link href="/soup">take me to soup page</Link>
    </View>
  )
}