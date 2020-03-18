import styled from 'styled-components/macro';

export const GlobalSummaryWrapper = styled.div`
    background: ${props => props.theme.palette.primary.dark};
    display: flex;
    justify-content: space-around;

    @media (max-width: 960px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;