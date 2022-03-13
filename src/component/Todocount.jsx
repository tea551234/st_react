import React, { useState } from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

export default function Todocount() {

  const blue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };



  const CustomButtonRoot = styled('span')`
        font-size: 20px;
        background-color: ${blue[500]};
        padding: 10px 10px;
        border-radius: 7px;
        color: white;
        transition: all 150ms ease;
        cursor: pointer;
        margin-right: 15px;
        width:40px;
              
      
        &:hover {
          background-color: ${blue[600]};
        }
      
        &.${buttonUnstyledClasses.active} {
          background-color: ${blue[700]};
        }
      
        &.${buttonUnstyledClasses.focusVisible} {
          box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
          outline: none;
        }
      
        &.${buttonUnstyledClasses.disabled} {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `;
  function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }

  const [count, setCount] = useState(1);
  const addcount = () => setCount(count => count + 1);
  const delcount = () => (count > 0) ? setCount(count => count - 1) : alert('不可以小於0', setCount(count => 1));
  return (
    <div>
      <CustomButton style={{ float: 'right'}} onClick={addcount}>加</CustomButton>
      <div style={{ float: 'right' , marginRight:'13px'}} className='countnumber'> {count} </div>
      <CustomButton style={{ float: 'right'}} onClick={delcount}>減</CustomButton>
    </div>
  );
}