import {StyleSheet, Text, View} from 'react-native';
import {SearchIcon, TimerIcon} from '../../../assets/images/svg';

interface IProps {
  timeRemaining: number;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes ? `${minutes}m` : ''} ${
    remainingSeconds ? `${remainingSeconds}s` : ''
  }`;
};

function Header(props: IProps) {
  const {timeRemaining} = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TimerIcon color="#ffffff" height={20} width={19} />
        <Text style={styles.timeLabel}>{formatTime(timeRemaining)}</Text>
      </View>
      <View style={styles.forYouContainer}>
        <Text style={styles.forYouLabel}>For You</Text>
        <View style={styles.dash} />
      </View>
      <View>
        <SearchIcon color="#fff" height={22} width={22} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    marginLeft: 4,
  },
  forYouContainer: {
    alignItems: 'center',
  },
  forYouLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  dash: {
    marginTop: 4,
    height: 4,
    width: 30,
    backgroundColor: '#fff',
  },
});

export default Header;
