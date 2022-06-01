import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { CloseIcon } from './CloseIcon';
import { HomePageSection } from './reusableComponents';
import Image from 'next/image';
import lettering1 from '../public/other-work/lettering-1.png';
import lettering2 from '../public/other-work/lettering-2.png';
import lettering3 from '../public/other-work/lettering-3.png';
import lettering4 from '../public/other-work/lettering-4.png';
import lettering5 from '../public/other-work/lettering-5.png';
import lettering6 from '../public/other-work/lettering-6.png';
import lettering7 from '../public/other-work/the_trip.png';
import artwork0 from '../public/other-work/chadwick.png';
import artwork1 from '../public/other-work/joaquin.png';
import artwork2 from '../public/other-work/The_Rock.png';
import artwork3 from '../public/other-work/sketch-2.png';
import artwork4 from '../public/other-work/eagle.png';
import artwork5 from '../public/other-work/random.png';
import artwork6 from '../public/other-work/sketch.png';
import artwork7 from '../public/other-work/urban.png';
import { CUSTOM_EASING } from '../constants/styles';

const overlayVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            ease: CUSTOM_EASING,
            duration: 0.5
        }
    }
};

const artVariants = {
    hidden: { ...overlayVariants.hidden, transform: 'translateY(100px)' },
    show: { ...overlayVariants.show, transform: 'translateY(0px)' }
};

export const OtherWork = () => {
    const [modalSrc, setModalSrc] = useState('');

    const closeModal = useCallback(() => setModalSrc(''), [setModalSrc]);
    const renderImages = (imgArr: StaticImageData[]) => {
        return imgArr.map((file, index) => {
            // return (
            // <div className="other-work__image-container" key={index}>
            // <Image src={file} objectFit="contain"  />
            // </div>
            // );
            const imgUrl = file.src;
            return <motion.img src={imgUrl} key={file.src} onClick={() => setModalSrc(imgUrl)} />;
        });
    };
    // const { scrollXProgress } = useViewportScroll();
    // console.log(scrollXProgress);
    return (
        <Container id="other-work">
            <h2>A few other things that I do</h2>
            <h4>Hand lettering</h4>
            <div className="lettering-images">
                {renderImages([lettering1, lettering2, lettering3, lettering4, lettering5, lettering6, lettering7])}
            </div>
            <h4>Digital and Analog Art</h4>
            <div className="artwork-images-container">
                <div className="artwork-images">
                    {renderImages([artwork0, artwork1, artwork2, artwork3, artwork4, artwork5, artwork6, artwork7])}
                </div>
            </div>

            <AnimatePresence>
                {modalSrc && (
                    <motion.div
                        className="overlay"
                        onClick={closeModal}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={overlayVariants}
                    >
                        <motion.div
                            className="image-container"
                            variants={artVariants}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                            }}
                        >
                            <div className="close-overlay" onClick={closeModal}>
                                <CloseIcon />{' '}
                            </div>
                            <motion.img src={modalSrc} />{' '}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
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
