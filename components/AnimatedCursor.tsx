import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function useEventListener(eventName, handler, element = document) {
    const savedHandler = useRef<any>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        const eventListener = (event) => savedHandler.current(event);

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
}

/**
 * Animated Cursor
 * Replaces the native cursor with a custom animated cursor.
 *
 * @author Stephen Scaff
 */
export default function AnimatedCursor({ innerSize = 8, outerSize = 24, outerScale = 1.5, innerScale = 0.7 }) {
    const cursorOuterRef = useRef<any>();
    const cursorInnerRef = useRef<any>();
    const requestRef = useRef<any>();
    const previousTimeRef = useRef();
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isActiveClickable, setIsActiveClickable] = useState(false);

    const DEFAULT_CURSOR_PROPS = { text: '', size: innerSize, gradient: ['#4a4a4a', '#4a4a4a'] };
    const [cursorStuff, setCursorStuff] = useState(DEFAULT_CURSOR_PROPS);
    let endX = useRef(0);
    let endY = useRef(0);
    const onMouseMove = useCallback(
        ({ target, clientX, clientY }) => {
            if (!cursorOuterRef.current || !cursorInnerRef.current) {
                return;
            }
            const closestTextNode = target.closest('[data-cursor-text]');
            const closestGradientNode = target.closest('[data-gradient-start]');
            if (closestTextNode) {
                const nodeCursorText = closestTextNode.getAttribute('data-cursor-text');
                const nodeCursorSize = parseInt(closestTextNode.getAttribute('data-cursor-size')) || innerSize;
                const gradientStart = closestGradientNode.getAttribute('data-gradient-start');
                const gradientEnd = closestGradientNode.getAttribute('data-gradient-end');
                if (
                    cursorStuff.text !== nodeCursorText ||
                    cursorStuff.gradient[0] !== gradientStart ||
                    cursorStuff.gradient[1] !== gradientEnd
                ) {
                    setCursorStuff({
                        text: nodeCursorText,
                        size: nodeCursorSize,
                        gradient: [gradientStart, gradientEnd]
                    });
                }
            } else if (!closestTextNode && !!cursorStuff.text) {
                setCursorStuff(DEFAULT_CURSOR_PROPS);
            }
            setCoords({ x: clientX, y: clientY });
            cursorInnerRef.current.style.top = `calc(${clientY + 'px'} - ${cursorStuff.size / 2}px)`;
            cursorInnerRef.current.style.left = `calc(${clientX + 'px'} - ${cursorStuff.size / 2}px)`;
            endX.current = clientX;
            endY.current = clientY;
        },
        [cursorStuff]
    );

    const animateOuterCursor = useCallback(
        (time) => {
            if (!cursorOuterRef.current) {
                return;
            }
            if (previousTimeRef.current !== undefined) {
                coords.x += (endX.current - coords.x) / 8;
                coords.y += (endY.current - coords.y) / 8;
                cursorOuterRef.current.style.top = `calc(${coords.y + 'px'} - ${outerSize / 2}px)`;
                cursorOuterRef.current.style.left = `calc(${coords.x + 'px'} - ${outerSize / 2}px)`;
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animateOuterCursor);
        },
        [requestRef] // eslint-disable-line
    );

    useEffect(() => (requestRef.current = requestAnimationFrame(animateOuterCursor) as any), [animateOuterCursor]);

    const onMouseDown = useCallback(() => setIsActive(true), []);
    const onMouseUp = useCallback(() => setIsActive(false), []);
    const onMouseEnter = useCallback((e) => {
        setIsVisible(true);
    }, []);
    const onMouseLeave = useCallback(() => setIsVisible(false), []);

    useEventListener('mousemove', onMouseMove, document);
    useEventListener('mousedown', onMouseDown, document);
    useEventListener('mouseup', onMouseUp, document);
    useEventListener('mouseenter', onMouseEnter, document);
    useEventListener('mouseleave', onMouseLeave, document);

    useEffect(() => {
        if (!cursorOuterRef.current || !cursorInnerRef.current) {
            return;
        }
        if (isActive) {
            cursorInnerRef.current.style.transform = `scale(${innerScale})`;
            cursorOuterRef.current.style.transform = `scale(${outerScale})`;
        } else {
            cursorInnerRef.current.style.transform = 'scale(1)';
            cursorOuterRef.current.style.transform = 'scale(1)';
        }
    }, [innerScale, outerScale, isActive]);

    useEffect(() => {
        if (!cursorOuterRef.current || !cursorInnerRef.current) {
            return;
        }
        if (isActiveClickable) {
            cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3}) translate(-50%, -50%)`;
            cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4}) translate(-50%, -50%)`;
        }
    }, [innerScale, outerScale, isActiveClickable]);

    useEffect(() => {
        if (!cursorOuterRef.current || !cursorInnerRef.current) {
            return;
        }
        if (isVisible) {
            cursorInnerRef.current.style.opacity = 1;
            cursorOuterRef.current.style.opacity = 1;
        } else {
            cursorInnerRef.current.style.opacity = 0;
            cursorOuterRef.current.style.opacity = 0;
        }
    }, [isVisible]);

    useEffect(() => {
        document.documentElement.style.cursor = 'none';
        const clickables = document.querySelectorAll(
            'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
        );
        clickables.forEach((el: any) => {
            el.style.cursor = 'none';

            el.addEventListener('mouseover', () => {
                setIsActive(true);
            });
            el.addEventListener('click', () => {
                setIsActive(true);
                setIsActiveClickable(false);
            });
            el.addEventListener('mousedown', () => {
                setIsActiveClickable(true);
            });
            el.addEventListener('mouseup', () => {
                setIsActive(true);
            });
            el.addEventListener('mouseout', () => {
                setIsActive(false);
                setIsActiveClickable(false);
            });
        });

        return () => {
            clickables.forEach((el) => {
                el.removeEventListener('mouseover', () => {
                    setIsActive(true);
                });
                el.removeEventListener('click', () => {
                    setIsActive(true);
                    setIsActiveClickable(false);
                });
                el.removeEventListener('mousedown', () => {
                    setIsActiveClickable(true);
                });
                el.removeEventListener('mouseup', () => {
                    setIsActive(true);
                });
                el.removeEventListener('mouseout', () => {
                    setIsActive(false);
                    setIsActiveClickable(false);
                });
            });
        };
    }, [isActive]);

    const styles: Record<string, any> = {
        cursor: {
            zIndex: 999,
            position: 'fixed',
            opacity: 1,
            pointerEvents: 'none',
            transition:
                'opacity 0.15s ease-in-out, transform 0.10s ease-in-out, max-height 0.1s ease-in-out, max-width 0.1s ease-in-out'
        },
        cursorInner: {
            position: 'fixed',
            borderRadius: '50%',
            // width: innerSize,
            // height: innerSize,
            maxWidth: cursorStuff.size + 'px',
            maxHeight: cursorStuff.size + 'px',
            pointerEvents: 'none',
            background: `linear-gradient(135deg, ${cursorStuff.gradient[0]}, ${cursorStuff.gradient[1]})`,
            transition:
                'opacity 0.15s ease-in-out, transform 0.10s ease-in-out, max-height 0.1s ease-in-out, max-width 0.1s ease-in-out, background 0.15s ease-in-out'
        },
        cursorOuter: {
            position: 'fixed',
            borderRadius: '50%',
            pointerEvents: 'none',
            // width: cursorStuff.size + 'px',
            // height: cursorStuff.size + 'px',
            maxWidth: outerSize,
            maxHeight: outerSize,
            background: `linear-gradient(135deg, ${cursorStuff.gradient[0]}40, ${cursorStuff.gradient[1]}40)`,
            transition:
                'opacity 0.15s ease-in-out, transform 0.10s ease-in-out, max-height 0.1s ease-in-out, max-width 0.1s ease-in-out'
        }
    };

    return (
        <Fragment>
            <OuterCursor ref={cursorOuterRef} style={styles.cursorOuter} />
            <InnerCursor
                className={`inner-cursor ${cursorStuff.text ? 'has-cursor-text' : ''}`}
                ref={cursorInnerRef}
                style={styles.cursorInner}
            >
                {cursorStuff.text}
            </InnerCursor>
        </Fragment>
    );
}

const InnerCursor = styled.div`
    z-index: 99999;
    height: 200px;
    width: 200px;
    transition: max-height 0.15s ease-in-out, max-width 0.15s ease-in-out;
    font-size: 12px;
    &.has-cursor-text {
        text-align: center;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
`;

const OuterCursor = styled.div`
    z-index: 99999;
    height: 200px;
    width: 200px;
    transition: max-height 0.15s ease-in-out, max-width 0.15s ease-in-out;
`;
