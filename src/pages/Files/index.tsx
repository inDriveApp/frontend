import React, { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { Container,TableContainer,Upload} from './styles';
import Sidebar from '../../components/Sidebar';
import { useFiles } from '../../hooks/files';
import { useHistory } from 'react-router-dom';

import Dropzone from 'react-dropzone';

import genericIcon from '../../assets/IconFiles/ext-generic.svg';
import csvIcon from '../../assets/IconFiles/ext-csv.svg';
import pdfIcon from '../../assets/IconFiles/ext-pdf.svg';
import xlsIcon from '../../assets/IconFiles/ext-xls.svg';
import xlsxIcon from '../../assets/IconFiles/ext-xlsx.svg';
import docxIcon from '../../assets/IconFiles/ext-docx.svg';
import apkIcon from '../../assets/IconFiles/ext-apk.svg';
import docIcon from '../../assets/IconFiles/ext-doc.svg';
import txtIcon from '../../assets/IconFiles/ext-txt.svg';
import mp3Icon from '../../assets/IconFiles/ext-mp3.svg';
import pptxIcon from '../../assets/IconFiles/ext-pptx.svg';
import pptIcon from '../../assets/IconFiles/ext-ppt.svg';
import mp4Icon from '../../assets/IconFiles/ext-mp4.svg';
import odsIcon from '../../assets/IconFiles/ext-ods.svg';
import wavIcon from '../../assets/IconFiles/ext-wav.svg';
import epubIcon from '../../assets/IconFiles/ext-epub.svg';
import flacIcon from '../../assets/IconFiles/ext-flac.svg';
import srtIcon from '../../assets/IconFiles/ext-srt.svg';
import odtIcon from '../../assets/IconFiles/ext-odt.svg';
import rtfIcon from '../../assets/IconFiles/ext-rtf.svg';
import mobiIcon from '../../assets/IconFiles/ext-mobi.svg';
import aacIcon from '../../assets/IconFiles/ext-aac.svg';
import wmaIcon from '../../assets/IconFiles/ext-wma.svg';
import odpIcon from '../../assets/IconFiles/ext-odp.svg';
import dtsIcon from '../../assets/IconFiles/ext-dts.svg';
import ttfIcon from '../../assets/IconFiles/ext-ttf.svg';
import oggIcon from '../../assets/IconFiles/ext-ogg.svg';
import otfIcon from '../../assets/IconFiles/ext-otf.svg';

import { Popover } from '../../components/Popover';
import { FiDownload, FiTrash2, FiShare2 } from 'react-icons/fi';


import api from '../../services/api';
import {useAuth} from '../../hooks/auth';
import ModalShare from '../../components/ModalShare';
import ModalDelete from '../../components/ModalDelete';



export default function Files() {
  const {user} = useAuth();
  const {files} = useFiles();
  const history = useHistory();

  
  //MODAL SHARE
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [fileShareModalOpen, setFileShareModalOpen] = useState('');
  const [fileKeyShareModalOpen, setFileKeyShareModalOpen] = useState(0);

  //MODAL DELETE
  const [delModalOpen, setDelModalOpen] = useState(false);
  const [fileDelModalOpen, setFileDelModalOpen] = useState('');
  const [fileKeyDelModalOpen, setFileKeyDelModalOpen] = useState(100);

  async function fileUpload(files:File[]){
    const formData = new FormData();
    for(var file of files){
      formData.append('file',file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data',
              'x-user': user.id
          }
    }
    await api.post("api/files", formData,config);
    

    }
    history.push('/');
  }


 
  function convertDate(unix: number) {
    const date = new Date(unix * 1000);
    const dateFormat = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    return dateFormat;
  }

  

  function extSelect(extension: string) {
    let icon = "";
    switch(extension){
      case "csv":
        icon = csvIcon;
        break;
      case "pdf":
        icon = pdfIcon;
      break;
      case "xls":
        icon = xlsIcon;
        break;
      case "xlsx":
        icon = xlsxIcon;
      break;
      case "docx":
        icon = docxIcon;
        break;
      case "apk":
        icon = apkIcon;
      break;
      case "doc":
        icon = docIcon;
        break;
      case "txt":
        icon = txtIcon;
      break;
      case "mp3":
        icon = mp3Icon;
        break;
      case "pptx":
        icon = pptxIcon;
      break;
      case "ppt":
        icon = pptIcon;
        break;
      case "flac":
        icon = flacIcon;
      break;
      case "epub":
        icon = epubIcon;
        break;
      case "wav":
        icon = wavIcon;
      break;
      case "ods":
        icon = odsIcon;
        break;
      case "mp4":
        icon = mp4Icon;
      break;
      case "srt":
        icon = srtIcon;
        break;
      case "odt":
        icon = odtIcon;
      break;
      case "rtf":
        icon = rtfIcon;
        break;
      case "mobi":
        icon = mobiIcon;
      break;
      case "aac":
        icon = aacIcon;
      break;
      case "wma":
        icon = wmaIcon;
        break;
      case "odp":
        icon = odpIcon;
      break;
      case "dts":
        icon = dtsIcon;
        break;
      case "ttf":
        icon = ttfIcon;
      break;
      case "ogg":
        icon = oggIcon;
        break;
      case "otf":
        icon = otfIcon;
      break;
      default:
        icon = genericIcon;
      break;
    }

    return icon;
  }

  function toggleShareModal(): void {
    setShareModalOpen(!shareModalOpen);        
  }  

  function toggleDelModal(): void {
    setDelModalOpen(!delModalOpen);        
  }  


  async function baixarArquivo(filename:string,owner:string) {      
    const headers = {
      'Content-Type': 'application/json',
      'X-User': user.id,
      'X-Owner': owner
    }
    await api.get(`api/files/download/${filename}`, {
        headers: headers
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${filename}`); //or any other extension
        document.body.appendChild(link);
        link.click();
    });
  }

  

  async function handleShareFile(filename:string) {
    toggleShareModal();
    setFileShareModalOpen(filename);
    setFileKeyShareModalOpen(fileKeyShareModalOpen+1);
  }

  async function handleDelFile(filename:string) {
    toggleDelModal();
    setFileDelModalOpen(filename);
    setFileKeyDelModalOpen(fileKeyDelModalOpen+1);
  }
  
  return (
    
    <Container> 
       <Sidebar/> 
       <ModalShare
       key={fileKeyShareModalOpen}
        isOpen={shareModalOpen}
        setIsOpen={toggleShareModal}
        filename={fileShareModalOpen}
      />
      <ModalDelete
        key={fileKeyDelModalOpen}
        isOpen={delModalOpen}
        setIsOpen={toggleDelModal}
        fileName={fileDelModalOpen}
      />
       <Upload>
        <Dropzone onDrop={files => fileUpload(files)}>
          {({getRootProps, getInputProps}) => (
            <div className="container">
              <div
                {...getRootProps({
                  className: 'dropzone',
                  onDrop: event => event.stopPropagation()
                })}
              >
                <input {...getInputProps()} />
                <p>Upload</p>
              </div>
            </div>
          )}
        </Dropzone>
        </Upload>
      <TableContainer>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Tamanho</th>
                <th>Data de envio</th>
                <th>Ação</th>
              </tr>
            </thead>            
            <tbody>
            
            {//eslint-disable-next-line
            files.map(file => { 

              return (
                <tr
                key={file.name}
                >                  
                  <td>
                  <img className="iconTable" src={extSelect(file.extension)} alt="" width={28} height={28} />
                  </td>
                  <td className="title">                   
                    {file.name}</td>
                <td>
                {file.size}
                </td>
                <td>{convertDate(file.uploaded)}</td>
                <td>                
                <Popover
        popover={({ visible, close }) => {
          return (
            <div className="popover" onClick={close}>
             <button onClick={() => baixarArquivo(file.name,file.owner)}>
                <FiDownload />
                Baixar</button>
              <button onClick={() => handleDelFile(file.name)}>
                <FiTrash2 />
                  Excluir</button>
              <button onClick={() => handleShareFile(file.name)}>
                <FiShare2 />
                Compartilhar</button>
            </div>
          );
        }}
      >
        <button>...</button>
      </Popover>
                </td>
              </tr>
              );
              })}        
            </tbody>
          </table>
        </TableContainer>
        
      
    </Container>
    
  );
}
