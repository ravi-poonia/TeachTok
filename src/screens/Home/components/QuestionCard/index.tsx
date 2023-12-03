import {Image, StyleSheet, Text, View} from 'react-native';
import RenderQuestion from './RenderQuestion';
import BottomSection from './BottomSection';
import {IQuestion, IUserAnswers} from '../../../../services/questionInterface';
import PlaylistIcon from '../../../../assets/images/playlist.png';
import RightIcon from '../../../../assets/images/rightIcon.png';

interface IProps {
  question: IQuestion;
  userAnswers: IUserAnswers;
  containerHeight: number;
  index: number;
  onPressOption: (index: number, optionId: string) => void;
}

interface IPlaylistBarProps {
  question: IQuestion;
}

function PlaylistBar(props: IPlaylistBarProps) {
  const {question} = props;
  const {playlist} = question;

  return (
    <View style={styles.playlistBarContainer}>
      <View style={styles.row}>
        <Image source={PlaylistIcon} style={styles.playlistIcon} />
        <Text style={styles.playlistText}>{playlist}</Text>
      </View>
      <Image source={RightIcon} style={styles.rightIcon} />
    </View>
  );
}

function QuestionCard(props: IProps) {
  const {question, index, userAnswers, containerHeight, onPressOption} = props;

  return (
    <View style={[styles.container, {height: containerHeight}]}>
      <View style={styles.contentContainer}>
        <RenderQuestion question={question} />
        <BottomSection
          index={index}
          question={question}
          userAnswers={userAnswers}
          onPressOption={onPressOption}
        />
      </View>
      <PlaylistBar question={question} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 59,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playlistBarContainer: {
    backgroundColor: 'rgba(22, 22, 22, 1)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playlistText: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '600',
    color: '#fff',
  },
  playlistIcon: {
    width: 20,
    height: 16,
    marginRight: 10,
  },
  rightIcon: {
    width: 11,
    height: 16,
  },
});

export default QuestionCard;
