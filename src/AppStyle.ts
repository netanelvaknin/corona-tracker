import styled from 'styled-components/macro';

export const AppWrapper = styled.div`
    background: ${props => props.theme.palette.primary.dark};
    height: 100%;
    color: ${props => props.theme.palette.primary.light};
`;