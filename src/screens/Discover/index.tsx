import {StyleSheet, Text, View} from 'react-native';

function Discover() {
  return (
    <View style={styles.container}>
      <Text>Discover Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Discover;
