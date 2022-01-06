import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function getAudio() {
    return new Audio('/courtside/ball-bouncing.mp3');
}

const BasketballAudio = () => {
    const myAudio = useRef<HTMLAudioElement>(getAudio());
    myAudio.current.addEventListener('ended', () => {
        myAudio.current.currentTime = 0;
        myAudio.current.play();
    });
    const audioCtx = useRef<AudioContext>(null);
    const source = useRef(null);
    const interval = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [positionAngle, setPositionAngle] = useState(0);
    let panNode = useRef(null);
    useEffect(() => {
        return () => {
            clearInterval(interval.current);
        };
    }, []);
    useEffect(() => {
        audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
        if (source.current) {
            source.current.disconnect();
            myAudio.current = getAudio();
        }
        source.current = audioCtx.current.createMediaElementSource(myAudio.current);
        panNode.current = audioCtx.current.createStereoPanner();
        source.current.connect(panNode.current);
        panNode.current.connect(audioCtx.current.destination);
    }, []);
    const sinValue = Math.sin((positionAngle * Math.PI) / 180);
    useEffect(() => {
        panNode.current.pan.setValueAtTime(sinValue, audioCtx.current.currentTime);
    }, [positionAngle, panNode.current]);
    return (
        <Container className={playing ? 'playing' : ''}>
            <div className="ball-animation">
                <img
                    src="/courtside/basketball.png"
                    id="bouncing-ball"
                    className={playing ? 'bounce' : ''}
                    style={{ marginLeft: `${((sinValue + 1) / 2) * 100}%` }}
                />
                <button
                    data-cursor-text="Play Animation"
                    data-gradient-start="#fafafa"
                    data-gradient-end="#fafafa"
                    data-cursor-size="100"
                    data-cursor-color="#4a4a4a"
                    onClick={() => {
                        setPlaying(!playing);
                        audioCtx.current[playing ? 'suspend' : 'resume']();
                        myAudio.current[playing ? 'pause' : 'play']();
                        if (playing) {
                            interval.current = clearInterval(interval.current);
                        } else {
                            interval.current = setInterval(() => {
                                setPositionAngle((angle) => angle + 10);
                            }, 100);
                        }
                    }}
                >
                    <FontAwesomeIcon icon={playing ? 'pause' : 'play'} />
                </button>
            </div>
        </Container>
    );
};

const ballHeight = '100px';
const Container = styled.div`
    margin-top: 16px;
    &.playing {
        .ball-animation {
            &::after,
            button {
                display: none;
            }
            &:hover {
                &::after,
                button {
                    display: block;
                }
            }
        }
    }
    .ball-animation {
        position: relative;
        height: 240px;
        width: calc(100% - ${ballHeight});
        margin-left: calc(${ballHeight} / 2);
        #bouncing-ball {
            width: 100px;
            height: ${ballHeight};
            position: relative;
            border-radius: 50%;
            margin-left: 50%;
            transition: margin-left 0.1s linear;
            transform: translateX(-50%);
            &.bounce {
                animation: bounce 0.5s infinite;
            }
        }
        @keyframes bounce {
            0% {
                top: 0px;
            }
            50% {
                top: calc(100% - ${ballHeight});
            }
            100% {
                top: 0px;
            }
        }

        button {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 0px;
            background: #f2f2f2;
            height: 72px;
            width: 72px;
            border-radius: 50%;
            color: #ed6b4e;
            z-index: 999;
            transform: translate(-50%, -50%);
            &:focus {
                outline: 0px;
                box-shadow: none;
            }
        }
        &::after {
            margin: 0px calc(${ballHeight} / -2);
            z-index: 99;
            content: '';
            position: absolute;
            height: 100%;
            width: calc(100% + ${ballHeight});
            top: 0px;
            left: 0px;
            background: #00000023;
        }
    }
`;

export default BasketballAudio;
