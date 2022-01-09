import { useEffect, useState } from 'react';
import { deviceWidths } from './constants/styles';

export function useResizeEnd(cb, timeout = 0) {
    useEffect(() => {
        let timer;
        const resizeHandler = () => {
            timer = setTimeout(() => {
                if (timer) {
                    clearTimeout(timer);
                }
                cb();
            }, timeout);
        };
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);
}

export function useIsDevice(deviceType: 'mobile' | 'tablet' | 'desktop') {
    const [innerWidth, setInnerWidth] = useState(typeof window === 'undefined' ? 0 : window.innerWidth);
    useEffect(() => {
        if (!innerWidth) {
            setInnerWidth(window.innerWidth);
        }
    }, []);
    useResizeEnd(() => {
        setInnerWidth(window.innerWidth);
    });
    if (deviceType === 'desktop') {
        return innerWidth >= deviceWidths.tablet;
    }
    return innerWidth < deviceWidths[deviceType];
}
