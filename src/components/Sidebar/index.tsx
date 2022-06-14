import React, { useEffect, useState } from 'react';


import { Container,Profile,Menu,Submenu,Icon,Title,UserBar,NameAvatar, Category,Buttonlogout,Avatar} from './styles';

import folderIcon from '../../assets/folder.svg';
import sharedIcon from '../../assets/shared.svg';
import avatarImg from '../../assets/avatar.png';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

export default function Sidebar() {  
  const { user,signOut } = useAuth();
  const [isSelectFile,setIsSelectFile]= useState(false);
  const [isSelectShare,setIsSelectShare]= useState(false);
  const history = useHistory();
  const params = history.location.pathname;

  useEffect(() => {
    if(params === "/shared"){
      setIsSelectShare(true);
    }
    if(params === "/files"){
      setIsSelectFile(true);
    }

  }, [params]);

  const name = user.name.charAt(0).toUpperCase()+user.name.slice(1);
  
  function selectMenuFile() {
    setIsSelectFile(true);
    setIsSelectShare(false);
    history.push('/files');
  }
  function selectMenuShare() {
    setIsSelectShare(true);
    setIsSelectFile(false);
    history.push('/shared');
  }

  return (
      <Container>
        <Menu>
          <Submenu isMenuActive={isSelectFile} onClick={selectMenuFile}>
            <Icon isMenuActive={isSelectFile} src={folderIcon}></Icon>
            <Title isMenuActive={isSelectFile} > Arquivos</Title>
            <div/>
          </Submenu>
          <Submenu isMenuActive={isSelectShare} onClick={selectMenuShare}>
            <Icon isMenuActive={isSelectShare} src={sharedIcon}></Icon>
            <Title isMenuActive={isSelectShare} >Compartilhado</Title>
            <div/>
          </Submenu>
        </Menu>
        <UserBar>
          <Profile>
            <NameAvatar>{name}</NameAvatar>
            <Category>Administrador</Category>
          </Profile>          
          <Avatar src={avatarImg}/>
          <Buttonlogout onClick={signOut}/>
        </UserBar>
      </Container>
  );
}