import styled from 'styled-components/macro';

export const Form = styled.form`
    margin: 0 auto 3rem;
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
        direction: ltr;
    }
`;

export const InputInstruction = styled.span`
    margin-top: .5rem;
    font-size: 1.6rem;
    color: ${props => props.theme.palette.primary.main};
    font-weight: bold;
`;