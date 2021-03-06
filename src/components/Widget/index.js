import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: none;
  background-color: ${({ theme }) => theme.colors.contrastText};
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 4px 5px 10px rgba(50, 50, 50, 0.20);
  h1,h2{
    font-size: 24px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 0;
    // border-bottom: 1px solid #ccc;
    
  }
  h3 {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 0;
    // border-bottom: 1px solid #ccc;
    
  }
  p{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
 
`;
Widget.Header = styled.header`
   
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 18px 32px 6px 30px;
    background-color: ${({ theme }) => theme.colors.contrastText};
    
    p{
    text-align: right; 
    font-size: 14px;
      font-weight: 200;
      color: gray;
  }
  
  *{
    margin: 0;
  }
`;

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
`;

Widget.Topic = styled.a`
  outline:0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  border-width: .5px;
  border-color: #cccccc;
  border-style: solid;
  border-radius: 20px;
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: .3s;
  display: block;

  /* &:hover,
  &:focus{
    opacity: .5s;
  } */
  :hover{
    background-color: #E8E8E8;
  }
`;

export default Widget;
