import {
  FlatList,
  ImageBackground,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useRef, useState} from 'react';
import BackgroundImage from '../../assets/images/background.png';
import QuestionCard from './components/QuestionCard';
import {IQuestion, IUserAnswers} from '../../services/questionInterface';
import {fetchAnswer, fetchQuestion} from '../../services/question';
import Header from './components/Header';
import Loader from '../../components/Loader';

const getAnswer = async (id: string) => {
  const {data: res} = await fetchAnswer(id);
  return res?.correct_options?.[0]?.id;
};

const getQuestions = (limit = 5) => {
  return Promise.all(
    new Array(limit).fill(0).map(async (): Promise<IQuestion> => {
      const {data: res} = await fetchQuestion();
      if (res) {
        const answer = await getAnswer(res.id);
        res.answer = answer;
      }
      return res;
    }),
  );
};

function Home() {
  const FlatlistRef = useRef(null);

  const [questions, setQuestion] = useState<IQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<IUserAnswers>({});
  const [containerHeight, setContainerHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    getNextFiveQuestions();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getNextFiveQuestions = async () => {
    setLoading(true);
    const newQuestion = await getQuestions(5);
    setQuestion(v => [...v, ...newQuestion]);
    setLoading(false);
  };

  const handleAnswerSubmit = (questionId: number, optionId: string) => {
    setUserAnswers(v => ({...v, [questionId]: optionId}));
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <SafeAreaView style={styles.contentContainer}>
          <Header timeRemaining={timeRemaining} />
          <View style={styles.listContainer} onLayout={onLayout}>
            <FlatList
              pagingEnabled
              contentContainerStyle={styles.container}
              data={questions}
              decelerationRate={0.9}
              getItemLayout={(_data, index) => ({
                length: containerHeight,
                offset: containerHeight * index,
                index,
              })}
              keyExtractor={(item, index) => `${item?.id}_${index}`}
              ListEmptyComponent={
                loading ? (
                  <Loader />
                ) : (
                  <View>
                    <View style={styles.noRecordContainer}>
                      <Text style={styles.noRecordLabel}>
                        No Questions available
                      </Text>
                    </View>
                  </View>
                )
              }
              ref={FlatlistRef}
              renderItem={({item, index}) => (
                <QuestionCard
                  containerHeight={containerHeight}
                  index={index}
                  question={item}
                  userAnswers={userAnswers}
                  onPressOption={handleAnswerSubmit}
                />
              )}
              showsVerticalScrollIndicator={false}
              onEndReached={getNextFiveQuestions}
              onEndReachedThreshold={2}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  listContainer: {
    flexGrow: 1,
  },
  noRecordContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  noRecordLabel: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Home;
