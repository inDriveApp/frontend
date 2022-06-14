import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  
`;

export const Title = styled.h1`
  margin-top: 5%;
  margin-bottom: 9%;
  margin-left: 1%;
  align-items: center;
`;

export const Subtitle = styled.p`
  margin-top: 5%;
  align-items: center;
  padding-left: 25%;
`;

export const Button = styled.button`
  color: #FEFEFE;
  background: #22385F;
  margin-left: 28%;
  margin-top: 5%;
  margin-bottom: 10px;
  height: 50px;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  padding: 0 32px;

  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  transition: filter 0.2s;

  &:hover {
      filter: brightness(0.9);
  }
  & + button {
    margin-left: 3%;
    color: #FEFEFE;
    background: #22385F;
  }

`;

export const Select = styled.select`
background: #fff;
border-radius: 10px;        
padding: 16px;
width: 100%;
border: 2px solid #232129;
color: #666360;
font-family: 'Roboto Slab',serif;
font-size: 16px;
& + input {
  margin-top: 8px;

}
`;