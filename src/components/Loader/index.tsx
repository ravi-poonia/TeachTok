import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';

interface ILoaderProps extends ActivityIndicatorProps {}

function Loader(props: ILoaderProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#fffF" size="large" {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
