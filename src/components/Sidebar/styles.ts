import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import buttonLogout from '../../assets/iconlogout.svg';

interface MenuProps {
  isMenuActive: boolean;
}

const isSelect = css`
  width: 320px;
  height: 55px;
  left: 0px;
  top: 241px;

  background: rgba(34, 56, 95, 0.9);
  border-radius: 10px;

  div{
    width: 320px;
    height: 0px;
    left: 4px;
    top: 299px;
    
    border: 1px solid #FD640F; 
  }
`;

const isSelectTitleMenu = css`
  position:absolute;
  background: none;
  color: #fff;
`;

const isSelectIconMenu = css`
  color: #fff;
  
`;


export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    background: #292727;
    width: 320px;
    height: 120%;
`;

export const Menu = styled.div`  
    position: absolute;
    top: 257px;
    left: 60px;
    width: 244px;
    height: 123px;
`;

export const Submenu = styled.button` 
  border:2px;
  background:none;
  width: 323px;
  height: 30px;  
  margin-bottom: 30px;
  color: #fff;
  margin-left: -4rem;

  ${(props: MenuProps): false | FlattenSimpleInterpolation => props.isMenuActive && isSelect}
`;

export const Icon = styled.img`
  top: 3px;
  left: 0;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin-right: 13px;
  margin-left: -8rem;
  ${(props: MenuProps): false | FlattenSimpleInterpolation => props.isMenuActive && isSelectIconMenu}
  `;

export const Title = styled.span`
  position: absolute;
  font-family: 'Archivo Narrow';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  ${(props: MenuProps): false | FlattenSimpleInterpolation => props.isMenuActive && isSelectTitleMenu}
`;

export const UserBar = styled.div`
  display:flex;
  align-item: center;
  top: 20px;
  margin-left: 300%;
  width: 380px;
  text-align: right;
  font-size: 24px;
  font-family: Heebo;
`;

export const Profile = styled.div`
  display:grid;
  align-item: center
  padding: 10px;
`;

export const NameAvatar = styled.span`
  margin-top:10%;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: right;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const Category = styled.span`
  font-size: 14px;
  color: #FD640F;
`;


export const Buttonlogout = styled.button`
  border: 0;
  margin-left: 15%;
  margin-top: 4%;
  top: 12px;
  left: 220px;
  width: 30px;
  height: 30px;
  background: url(${buttonLogout});
`;

export const Avatar = styled.img`
  margin-left: 10%;
  margin-top: 4%;
  width: 60px;
  height: 60px;
`;

