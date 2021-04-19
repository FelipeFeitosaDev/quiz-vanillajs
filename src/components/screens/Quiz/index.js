/* eslint-disable react/prop-types */
import React from 'react';
// import db from '../../../../db.json';
import Widget from '../../Widget';
import QuizBackground from '../../QuizBackground';
import Footer from '../../Footer';
import GitHubCorner from '../../GitHubCorner';
import Button from '../../Button';
import QuizContainer from '../../QuizContainer';
import AlternativesForm from '../../AlternativesForm';
import BackLinkArrow from '../../BackLinkArrow';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio do loading]
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Tela de Resultado
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {results.reduce((totalResults, indexResult) => {
            const isTrue = indexResult === true;
            if (isTrue) {
              return totalResults + 1;
            }
            return totalResults;
          }, 0)}
        </p>
        <ul>
          {results.map((result, resultIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`result ${resultIndex}`}>
              #0
              {resultIndex + 1}
              {' '}
              Resultado:
              {' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}

        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  indexQuestion,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState();
  const questionId = `Alternative ${indexQuestion}`;
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <p>
          {`${indexQuestion + 1}`}
          /
          {`${totalQuestions}`}
        </p>
      </Widget.Header>
      <img
        alt="descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h3>{question.title}</h3>
        <p>{question.description}</p>
        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            addResult(isCorrect);
            setIsQuestionSubmited(true);
            setTimeout(() => {
              // vai pra proxima questão e zera tudo
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `Alternative ${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>confirmar</Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [indexQuestion, setIndexQuestion] = React.useState(0);
  const question = externalQuestions[indexQuestion];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setResults([...results, result]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = indexQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setIndexQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        {/* se screenState for igual o valor loading,
         exibe o modulo LoadingWidget */}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {/* se screenState for igual o valor QUIZ,
         exibe o modulo QuestionWidget */}
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          totalQuestions={totalQuestions}
          indexQuestion={indexQuestion}
          question={question}
          onSubmit={handleSubmitQuiz}
          addResult={addResult}
        />
        )}
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/FelipeFeitosaDev/quiz-vanillajs" />
    </QuizBackground>
  );
}
