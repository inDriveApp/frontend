import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import buttonMore from '../../assets/iconmore.svg';
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
    top: 0;
    width: 350px;
    height: 100vh;    
`;
export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-color: #292727;
    width: 320px;
    height: 100vh;
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
  position: fixed;
  font-family: 'Archivo Narrow';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  ${(props: MenuProps): false | FlattenSimpleInterpolation => props.isMenuActive && isSelectTitleMenu}
`;

export const UserBar = styled.div`
  position:absolute;
  margin-left: auto;
  align-item: center;
  top: 20px;
  left: 140vh;
  width: 400px;
  text-align: right;
  font-size: 24px;
  font-family: Heebo;
`;

export const NameAvatar = styled.span`
  position:absolute;  
  top: 0;
  left: 2.2rem;
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
  position:absolute;
  top: 26px;
  left: 2.6rem;
  font-size: 14px;
  color: #FD640F;
`;

export const ButtonMore = styled.button`
  position:absolute;
  border: 0;
  top: 19px;
  left: 265px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  background: url(${buttonMore});
`;

export const Buttonlogout = styled.button`
  position:absolute;
  border: 0;
  top: 12px;
  left: 342px;
  width: 30px;
  height: 30px;
  background: url(${buttonLogout});
`;

export const Avatar = styled.img`
  position:absolute;
  top: 0;
  left: 195px;
  width: 60px;
  height: 60px;
`;

