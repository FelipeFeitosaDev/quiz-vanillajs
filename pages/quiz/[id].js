/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/components/screens/Quiz';

export default function QuizExterno({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

/* essa função trás a página convertida do servidor
evitando que o navegador crie os elementos ou faça requisições  */
export async function getServerSideProps(context) {
  // console.log('Infos que o next da para nós', context.query.id);
  const [projectName, githubUser] = context.query.id.split('___');
  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }

        throw new Error('Falha em pegar os dados');
      })
      .then((jsonConvertido) => jsonConvertido);
    // console.log('dbExterno:', dbExterno);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error('Houve um erro de', err);
  }
}
