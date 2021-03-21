import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import VanillaLogo from '../src/components/VanillaLogo';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex:1;
//   background-size: cover;
//   background-position: center;
// `
// ;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 1005px){
    width: 100%;
    max-width: 350px;
    margin: auto; 
    padding: 15px;
  }
`;
export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <VanillaLogo />
        <Widget>
          <Widget.Header>
            <h1>QUIZ - Vanilla JS</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Testes seus conhecimentos aqui.</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizzes:</h1>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/FelipeFeitosaDev" />
    </QuizBackground>
  );
}
