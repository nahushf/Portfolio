import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { CloseIcon } from './CloseIcon';
import { HomePageSection } from './reusableComponents';

export const OtherWork = () => {
    const [modalSrc, setModalSrc] = useState('');
    const renderImages = (imgArr: string[]) => {
        return imgArr.map((file) => {
            const imgUrl = `/other-work/${file}`;
            return (
                <motion.img
                    src={imgUrl}
                    key={file}
                    layoutId={imgUrl}
                    onClick={() => setModalSrc(imgUrl)}
                    onAnimationComplete={() => console.log(22)}
                />
            );
        });
    };
    // const { scrollXProgress } = useViewportScroll();
    // console.log(scrollXProgress);
    return (
        <Container id="other-work">
            <AnimateSharedLayout>
                <h2>A few other things that I do</h2>
                <h4>Hand lettering</h4>
                <div className="lettering-images">
                    {renderImages([
                        'lettering-3.png',
                        'lettering-4.png',
                        'lettering-5.png',
                        'the_trip.png',
                        'lettering-6.png',
                        'lettering-7.png',
                        'lettering-1.png',
                        'lettering-2.png'
                    ])}
                </div>
                <h4>Digital and Analog Art</h4>
                <div className="artwork-images-container">
                    <div className="artwork-images">
                        {renderImages([
                            'chadwick.png',
                            'joaquin.png',
                            'The_Rock.png',
                            'sketch-2.png',
                            'eagle.png',
                            'random.png',
                            'sketch.png',
                            'urban.png'
                        ])}
                    </div>
                    {/* <div className="nav-button left"> */}
                    {/* <FontAwesomeIcon icon="chevron-right" /> */}
                    {/* </div> */}
                    {/* <div className="nav-button right" style={{ display: scrollXProgress === 1 ? 'none' : 'flex' }}> */}
                    {/* <FontAwesomeIcon icon="chevron-right" /> */}
                    {/* </div> */}
                </div>
                {modalSrc && (
                    <AnimatePresence>
                        <div className="overlay" onClick={() => setModalSrc('')}>
                            <div className="image-container">
                                <div className="close-overlay">
                                    <CloseIcon />{' '}
                                </div>
                                <motion.img
                                    layoutId={modalSrc}
                                    src={modalSrc}
                                />{' '}
                            </div>
                        </div>
                    </AnimatePresence>
                )}
            </AnimateSharedLayout>
        </Container>
    );
};

const Container = styled(HomePageSection)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    h4 {
        margin-bottom: 16px;
    }
    .lettering-images,
    .artwork-images {
        display: flex;
        align-items: center;
        height: 200px;
        gap: 8px;
        overflow: auto;
        position: relative;
        img {
            height: 100%;
            cursor: pointer;
        }
    }
    .artwork-images-container {
        position: relative;
        .nav-button {
            height: 100%;
            width: 50px;
            color: #fafafa;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.6);
            position: absolute;
            cursor: pointer;
            top: 0px;
            &:active {
                background: rgba(0, 0, 0, 0.7);
            }
            &.left {
                left: 0px;
                svg {
                    transform: rotate(180deg);
                }
            }
            &.right {
                right: 0px;
            }
        }
    }
    .overlay {
        z-index: 99999;
        position: fixed;
        height: 100vh;
        width: 100vw;
        left: 0px;
        top: 0px;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        .image-container {
            height: 50%;
            position: relative;
            .close-overlay {
                height: 56px;
                width: 56px;
                font-size: 72px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 16px;
                right: 16px;
                backdrop-filter: blur(24px);
                color: #000;
                cursor: pointer;
                svg {
                    height: 32px;
                    width: 32px;
                }
            }
            img {
                height: 100%;
            }
        }
    }
`;
