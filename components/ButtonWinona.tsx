import styled from 'styled-components';

/** Picked from https://codepen.io/StephenFlannery/pen/MaoMyp*/

export const ButtonWinona = ({ text }: { text: string }) => {
    return (
        <WinonaContainer>
            <button className="button button--winona" data-text={text}>
                <span>{text}</span>
            </button>
        </WinonaContainer>
    );
};

const WinonaContainer = styled.div`
    .button {
        border: 1px solid #4a4a4a;
        border-radius: 8px;
        cursor: pointer;
        font-size: 24px;
        float: left;
        min-width: 150px;
        max-width: 400;
        display: block;
        background: none;
        color: inherit;
        padding: 24px;
        vertical-align: middle;
        position: relative;
        z-index: 1;
        -webkit-backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
    }
    .button:focus {
        outline: none;
    }
    .button > span {
        vertical-align: middle;
    }
    .button--winona {
        overflow: hidden;
        -webkit-transition: border-color 0.3s, background-color 0.3s;
        transition: border-color 0.3s, background-color 0.3s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
    .button--winona::after {
        content: attr(data-text);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        color: #3f51b5;
        -webkit-transform: translate3d(0, 25%, 0);
        transform: translate3d(0, 25%, 0);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button--winona > span {
        display: block;
    }
    .button--winona::after,
    .button--winona > span {
        webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        letter-spacing: 7px;
    }
    .button--winona:hover {
        border-color: #3f51b5;
        background-color: rgba(63, 81, 181, 0.1);
    }
    .button--winona.button--inverted:hover {
        border-color: #21333c;
        background-color: #21333c;
    }
    .button--winona:hover::after {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    .button--winona:hover > span {
        opacity: 0;
        -webkit-transform: translate3d(0, -25%, 0);
        transform: translate3d(0, -25%, 0);
    }
`;