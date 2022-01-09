import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styled from 'styled-components';

export const BackButton = ({ href, text }: { href: string; text?: string }) => {
    return (
        <Link href={href}>
            <BackButtonContainer>
                <FontAwesomeIcon icon="chevron-left" />
                &nbsp;{text ?? 'Back'}
            </BackButtonContainer>
        </Link>
    );
};

const BackButtonContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    height: 29px;
    display: flex;
    align-items: center;
    color: #1b1425;
    .svg-inline--fa {
        margin-right: 8px;
    }
    &:active {
        color: #000;
        font-size: 14px;
    }
`;
