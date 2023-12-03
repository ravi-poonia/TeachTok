import { StatusBar } from 'react-native';
import NavContainer from './navigation';

function App(): JSX.Element {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavContainer />
    </>
  );
}

export default App;
