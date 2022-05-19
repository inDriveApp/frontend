import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    top: 0;
    left: 0;
    background: #E5E5E5;
`;

export const TableContainer = styled.section`
  margin-top: 30vh;
  margin-left: 10vh;
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
      
      &.income {
        color: #12a454;
      }
      &.outcome {
        color: #e83f5b;
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




