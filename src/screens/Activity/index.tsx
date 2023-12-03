import {StyleSheet, Text, View} from 'react-native';

function Activity() {
  return (
    <View style={styles.container}>
      <Text>Activity Screen</Text>
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

export default Activity;
