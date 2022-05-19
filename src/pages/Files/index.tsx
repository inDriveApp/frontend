import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { Container,TableContainer} from './styles';
import Sidebar from '../../components/Sidebar';
import pdfImg from '../../assets/ext-pdf.svg';
import docImg from '../../assets/ext-doc.svg';
//import { useAuth } from '../../hooks/auth';


export default function Files() {
  

  return (
    <Container>   
      <Sidebar/> 
      <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tamanho</th>
                <th>Data de envio</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
                <tr>
                 <div>
                    <img className="iconTable" src={pdfImg} alt="" />
                    <td className="title">                   
                      arquivo.pdf</td>
                  </div>
                  <td>
                    10 MB
                  </td>
                  <td>12/05/2022</td>
                  <td>
                  <button>
                    ...
                    </button>
                  </td>
                </tr>
                <tr>
                 <div>
                    <img className="iconTable" src={docImg} alt="" />
                    <td className="title">                   
                      document.docx</td>
                  </div>
                  <td>
                    2 MB
                  </td>
                  <td>12/05/2022</td>
                  <td>
                  <button>
                    ...
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </TableContainer>

      
    </Container>
    
    
  );
}
