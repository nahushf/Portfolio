import { motion, Variant } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { black, CUSTOM_EASING, HOME_SHOW_VARIANT, red } from '../constants/styles';
import { ArrowIcon } from './arrowIcon';
import { Emp, HomePageSection, Name } from './reusableComponents';

const parentVariant = {
    initial: {},
    animate: {
        transition: { delayChildren: 0.4, staggerChildren: 0.05 }
    }
};

const letterVariant = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: CUSTOM_EASING,
            duration: 0.5
        }
    }
};

const AnimatedTitle = ({ text }) => {
    return (
        <motion.div variants={parentVariant} initial="initial" animate="animate">
            {[...text.split('')].map((chr: string, index: number) => {
                return chr === ' ' ? (
                    <>&nbsp;</>
                ) : (
                    <motion.span
                        key={index}
                        variants={letterVariant}
                        className="animated-title__char"
                        style={{ display: 'inline-block' }}
                    >
                        {chr}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};

const animationProps = {
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants: HOME_SHOW_VARIANT(1.2)
};

export const Landing = ({ onWorkClick }) => {
    return (
        <Container className="landing" id="landing">
            <motion.div className="intro-title" {...animationProps}>
                Hi there, I am
            </motion.div>
            <Name className="name" variants={parentVariant} onAnimationComplete={() => console.log("Name")}>
                <AnimatedTitle text="Nahush Farkande." />
            </Name>
            <motion.div className="description" {...animationProps}>
                I’m a UI/UX Designer who is passionate about solving problems. Currently pursuing my Masters in Human
                Computer Interaction Indiana University. Previously I have led multiple UI development teams while
                coordinating with a number of designers, before jumping on the design bandwagon myself. Most recently, I
                managed to bag the <Emp>Best Overall Product</Emp> award at the AT&T 5G Sports Hackathon.
            </motion.div>
            <motion.div className="links-container" {...animationProps}>
                <Link href="">
                    <motion.span className="link-content" onClick={onWorkClick}>
                        <img src="/arrow.png" /> View my work
                    </motion.span>
                </Link>
                <Link href="/about">
                    <span className="link-content">
                        <ArrowIcon fill="#fff" />
                        Read my story
                    </span>
                </Link>
            </motion.div>
        </Container>
    );
};

export const Container = styled(HomePageSection)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    .intro-title {
        font-size: 24px;
    }
    ${Name} {
        overflow: hidden;

        .animated-title__char:last-child {
            color: ${red};
        }
    }
    .intro-title,
    .description {
        line-height: 1.8;
        font-size: 18px;
    }

    .links-container {
        display: flex;
        align-items: center;
        font-size: 20px;
        gap: 16px;
        .link-content {
            padding: 8px;
            cursor: pointer;
            color: white;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #fff;
            border-radius: 100px;
            &:first-child {
                border: 1px solid #f87e77;
                background: #f87e77;
                color: ${black};
                img {
                    transform: rotate(90deg);
                }
            }
        }
    }
`;
