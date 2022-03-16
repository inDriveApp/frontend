import { InputHTMLAttributes } from 'react';
import {IconBaseProps} from 'react-icons';
import '../../styles/Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name:string;
    icon?:React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon:Icon, ...rest}) => (
    <div className='container-input'>
    {Icon && <Icon size={20}/>}    
    <input {...rest}/>  
    </div>
    
);


export default Input;