import {StyleSheet, Text, View} from 'react-native';
import {IQuestion} from '../../../../services/questionInterface';

interface IProps {
  question: IQuestion;
}

function RenderQuestion(props: IProps) {
  const {question} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingRight: 80,
  },
  question: {
    color: '#fff',
    alignSelf: 'flex-start',
    textAlign: 'auto',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 35,
    padding: 7,
    borderRadius: 10,
  },
});

export default RenderQuestion;
