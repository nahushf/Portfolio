import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { black, HOME_FADE_PROPS, HOME_SHOW_VARIANT, red } from '../constants/styles';
import { ArrowIcon } from './arrowIcon';
import { AnimatedName, Emp, HomePageSection } from './reusableComponents';

const animationProps = HOME_FADE_PROPS;
export const Landing = ({ onWorkClick }) => {
    return (
        <Container className="landing" id="landing">
            <motion.div className="intro-title" {...animationProps}>
                Hello, my name is
            </motion.div>
            <AnimatedName />
            <motion.div className="description" {...animationProps}>
                <div className="intro-tagline">
                    I’m a <Emp>UI/UX Designer</Emp> who likes to use design as a tool to <Emp>make a difference</Emp> in
                    people's lives.
                </div>
                <div className="intro-bullets">
                    <div className="intro-bullet"></div>
                </div>
            </motion.div>
            {/* <motion.div className="links-container" {...animationProps}> */}
            {/* <Link href=""> */}
            {/* <motion.a className="link-content" onClick={onWorkClick}> */}
            {/* <img src="/arrow.png" /> View my work */}
            {/* </motion.a> */}
            {/* </Link> */}
            {/* <Link href="/about" passHref> */}
            {/* <motion.a className="link-content"> */}
            {/* <ArrowIcon fill="#fff" /> */}
            {/* Read my story */}
            {/* </motion.a> */}
            {/* </Link> */}
            {/* </motion.div> */}
        </Container>
    );
};

export const Container = styled(HomePageSection)`
    padding-top: 56px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    font-size: 24px;
    .intro-title,
    .description {
        line-height: 1.8;
        font-size: 18px;
    }
    .description {
        .intro-tagline {
            margin-bottom: 16px;
        }
        .intro-bullets {
            font-size: 16px;
        }
    }
    .links-container {
        display: flex;
        align-items: center;
        font-size: 20px;
        gap: 16px;
        .link-content {
            padding: 8px 16px 8px 8px;
            cursor: pointer;
            color: white;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #fff;
            border-radius: 100px;
            &:first-child {
                border: 1px solid ${red};
                background: ${red};
                color: ${black};
                img {
                    transform: rotate(90deg);
                }
            }
        }
    }
`;
