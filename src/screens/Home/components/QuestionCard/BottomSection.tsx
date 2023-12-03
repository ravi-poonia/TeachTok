import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IQuestion, IUserAnswers} from '../../../../services/questionInterface';
import AddBookmark from '../../../../assets/images/bookmark.png';
import Heart from '../../../../assets/images/heart.png';
import Message from '../../../../assets/images/message.png';
import Bookmark from '../../../../assets/images/bookmark_2.png';
import Share from '../../../../assets/images/share.png';
import ThumbsUp from '../../../../assets/images/ThumbsUp.png';
import ThumbsDown from '../../../../assets/images/ThumbsDown.png';

interface IProps {
  question: IQuestion;
  userAnswers: IUserAnswers;
  onPressOption: (questionUd: number, optionId: string) => void;
}

function RenderLeftSection(props: IProps) {
  const {question, userAnswers, onPressOption} = props;
  const {id, answer, options, user, description} = question;

  const userAnswer = userAnswers[id];
  const isAnswered = Boolean(userAnswer);

  const renderOptions = () => {
    return options.map(option => {
      const isAnsweredOption = userAnswer === option.id;
      const isCorrectOptions = answer === option.id;

      return (
        <TouchableOpacity
          disabled={isAnswered}
          key={option.id}
          style={[
            styles.optionContainer,
            isAnswered && {
              ...(isCorrectOptions ? styles.wrongOption : {}),
              ...(isAnsweredOption ? styles.correctOption : {}),
            },
          ]}
          onPress={() => onPressOption(id, option.id)}>
          <Text style={styles.optionText}>{option.answer}</Text>
          {isAnswered && isCorrectOptions ? (
            <Image
              source={
                isAnsweredOption && isCorrectOptions ? ThumbsUp : ThumbsDown
              }
              style={styles.thumbsImage}
            />
          ) : null}
        </TouchableOpacity>
      );
    });
  };

  const renderDetails = () => {
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{user.name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.leftContainer}>
      {renderOptions()}
      {renderDetails()}
    </View>
  );
}

function RenderRightSection() {
  return (
    <View style={styles.rightContainer}>
      <Image source={AddBookmark} style={styles.addBookmarkImage} />
      <View style={styles.actionContainer}>
        <Image source={Heart} style={styles.actionImage} />
        <Text style={styles.actionText}>87</Text>
      </View>
      <View style={styles.actionContainer}>
        <Image source={Message} style={styles.actionImage} />
        <Text style={styles.actionText}>2</Text>
      </View>
      <View style={styles.actionContainer}>
        <Image source={Bookmark} style={styles.actionImage} />
        <Text style={styles.actionText}>203</Text>
      </View>
      <View style={styles.actionContainer}>
        <Image source={Share} style={styles.actionImage} />
        <Text style={styles.actionText}>17</Text>
      </View>
    </View>
  );
}

function BottomSection(props: IProps) {
  const {question, userAnswers, onPressOption} = props;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <RenderLeftSection
          question={question}
          userAnswers={userAnswers}
          onPressOption={onPressOption}
        />
        <RenderRightSection />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    flexShrink: 1,
    flexGrow: 1,
    marginRight: 15,
    justifyContent: 'flex-end',
  },
  rightContainer: {
    alignItems: 'center',
  },
  optionContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 21,
    color: '#fff',
    flex: 1,
    marginRight: 5,
  },
  actionContainer: {
    marginVertical: 10,
  },
  addBookmarkImage: {
    height: 47,
    width: 45,
  },
  actionImage: {
    height: 28,
    width: 26,
  },
  actionText: {
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
    marginTop: 4,
  },
  detailsContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    color: '#fff',
  },
  descriptionText: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
    marginTop: 5,
    color: '#fff',
  },
  correctOption: {
    backgroundColor: 'rgba(40, 177, 143, 0.7)',
  },
  wrongOption: {
    backgroundColor: 'rgba(220, 95, 95, 0.7)',
  },
  thumbsImage: {
    height: 30,
    width: 30,
  },
});

export default BottomSection;
