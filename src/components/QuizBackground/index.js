// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
font-family: 'JetBrains Mono', monospace;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position-x: 80%;
  background-position-y: 30%;
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 1000px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      /* background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage}); */
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
