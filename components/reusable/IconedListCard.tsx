import styled, { StyledComponent } from 'styled-components';
import { Emp } from '../reusableComponents';
import { ListCard } from '../scrollComponents';

export const IconedListCard = styled(({ iconWidth, ...props }) => {
    return <ListCard {...props} />;
})`
    margin-top: 0px;
    position: relative;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 8px;
    align-items: center;
    svg {
        width: ${(props) => props.iconWidth || '60px'};
        grid-row-end: span 2;
        grid-column-start: 1;
        grid-row-start: 1;
        justify-self: center;
    }
    & > ${Emp} {
        grid-column-start: 2;
    }
    p {
        margin: 0px;
    }
`;
