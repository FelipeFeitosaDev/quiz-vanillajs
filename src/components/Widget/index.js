import styled from 'styled-components'
import db from '../../../db.json'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: none;
  background-color: ${({theme})=> theme.colors.contrastText };
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 4px 5px 10px rgba(50, 50, 50, 0.20);
  h1,h2,h3 {
    font-size: 24px;
    font-weight: 300;
    line-height: 2;
    margin-bottom: 0;
    // border-bottom: 1px solid #ccc;
    
  }
  p{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
  span{
    font-size: 14px;
      font-weight: 200;
      color: gray;
      text-align: right;
  }
`
;

Widget.Header = styled.header`
    /* padding: 24px 32px 32px 32px;
    display: flex;
    justify-content: flex-start; */
    align-items: center;
    padding: 18px 32px 6px 30px;
    background-color: ${({ theme }) => theme.colors.contrastText};
  
  *{
    margin: 0;
  }
`

Widget.Content = styled.div`
  padding: 18px 32px 32px 32px;
  & > *:first-child{
    margin-top: 0;
  }
  & > *:first-child{
    margin-bottom: 0;
  }
  ul{
    list-style: none;
    padding: 0;
  }
`

export default Widget;