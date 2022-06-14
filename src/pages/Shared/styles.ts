import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
    display:flex;
    item-align:center;
    background: #E5E5E5;   
    widght: 100%; 
    height: 100%;
`;


export const Upload = styled.div`
  background: #ff9000;
  height: 40px;
  border:0;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 140px;
  font-weight: 500;
  margin-top: 10rem;
  margin-left: 78%;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }

  input{
    display: none
  }
  p{
    margin-left: 30px;
    margin-top: 10px;
  }
  cursor:pointer;
`;



export const TableContainer = styled.section`
  margin-top: 30vh;
  margin-left: 30%;
  height: 10%;
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {      
      color: #000000;
      font-weight: normal;
      padding: 10px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;

      
    }
    th:first-child {
      margin-right: -200px;      
    }
    div{
        display: flex;
        align-items: center;
        cursor:pointer;
        td{
            margin-left: -25px;
        }
    }   
    button{
        padding: 0;
        border: 0;
        background: none;
        margin-left: 20px;
        margin-top: -10px;
    } 
    td {        
      padding: 10px 30px;
      border: 0;
      font-size: 16px;
      font-weight: normal;
      color: #000000;      
      
      &.title {
        color: #000000;
      }

      img{
        margin-right: -200px;
      }
      
      &.income {
        color: #12a454;
      }
      &.outcome {
        color: #e83f5b;
      }
      &.popover {
        display: inline-grid;
        margin: 10px;
        background: #DFDDE0;
      }
      
      .popover h5 {
        margin: 0px;
        font-size: 1.3em;
      }
      
      .popover p {
        margin: 10px 0px;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;




