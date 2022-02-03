import styled from 'styled-components';
import { maxDevice } from '../constants/styles';
import { Navigation } from './reusableComponents';

export const HomeLeft = () => {
    return (
        <Container>
            <Navigation />
            <div className="page-header">
                <div className="title">UI/UX DESIGNER</div>
                <h1 className="name">Nahush Farkande</h1>
            </div>
        </Container>
    );
};

const Container = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
        font-size: 24px;
        letter-spacing: 11px;
        font-weight: 300;
    }
    .button--winona {
        margin-bottom: 24px;
    }
    ${maxDevice.mobile} {
        padding: 16px;
        .title {
            letter-spacing: 6px;
            font-size: 16px;
        }
        .button--winona {
            margin-bottom: 16px;
        }
    }
`;
