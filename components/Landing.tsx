import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { black, HOME_FADE_PROPS, HOME_SHOW_VARIANT } from '../constants/styles';
import { ArrowIcon } from './arrowIcon';
import { AnimatedName, Emp, HomePageSection } from './reusableComponents';

const animationProps = HOME_FADE_PROPS;
export const Landing = ({ onWorkClick }) => {
    return (
        <Container className="landing" id="landing">
            <motion.div className="intro-title" {...animationProps}>
                Hi there, I am
            </motion.div>
            {/* <Name className="name" onAnimationComplete={() => console.log('Name')}> */}
            {/* <AnimatedTitle text="Nahush Farkande." /> */}
            {/* </Name> */}
            <AnimatedName />
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
