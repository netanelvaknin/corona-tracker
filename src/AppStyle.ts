import styled from 'styled-components/macro';

export const AppWrapper = styled.div`
    background: ${props => props.theme.palette.secondary.dark};
    min-height: 100%;
    color: ${props => props.theme.palette.primary.light};
    padding-top: 15rem;
`;