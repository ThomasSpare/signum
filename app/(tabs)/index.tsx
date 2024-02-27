import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
// import { animate } from "motion";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signum</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <div id="box"></div>
      <EditScreenInfo path="" />
    </View>
  );
}

// animate(
//   "#box",
//   { x: 100, rotate: 45 },
//   { duration: 0.5 }
// )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
