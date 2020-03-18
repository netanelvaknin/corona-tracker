import styled from 'styled-components/macro';
import Typography from "@material-ui/core/Typography";

export const SummaryBox = styled.div`
    height: 30rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 960px) {
      height: 17rem;
    }
`;

export const SummaryBoxTitle = styled(Typography)`
    font-size: 5.2rem;
    color: ${props => props.theme.palette.primary.main};
`;

export const SummaryBoxSubtitle = styled(Typography)`
  font-size: 4.2rem;
  color: ${props => props.theme.palette.secondary.light};
`;