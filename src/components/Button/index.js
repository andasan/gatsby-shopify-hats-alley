import React from 'react';
import { ButtonWrapper} from './styles';

const Button = (props) => {
    return(
        <>
        <ButtonWrapper {...props} >
            {props.children}
        </ButtonWrapper>
        </>
    )
}

export { Button };