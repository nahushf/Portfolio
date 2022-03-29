export const deviceWidths = {
    mobile: 768,
    tablet: 1024,
    desktop: 1366
};

export const deviceHeights = {
    iphone5: 568
};

export const maxHeights = {
    iphone5: `@media screen and (max-height: ${deviceHeights.iphone5}px)`
};

export const maxDevice = generateDeviceBreakpoints(true);
export const minDevice = generateDeviceBreakpoints(false);

function generateDeviceBreakpoints(max: boolean) {
    const limitToken = max ? 'max' : 'min';
    return {
        tablet: `@media screen and (${limitToken}-width: ${max ? deviceWidths.tablet - 1 : deviceWidths.tablet}px)`,
        mobile: `@media screen and (${limitToken}-width: ${max ? deviceWidths.mobile - 1 : deviceWidths.mobile}px)`,
        desktop: `@media screen and (${limitToken}-width: ${max ? deviceWidths.desktop - 1 : deviceWidths.desktop}px)`
    };
}

export const CUSTOM_EASING = [0.6, 0.01, -0.05, 0.95];
export const HOME_SHOW_VARIANT = (delay = 2, duration = 1) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { ease: 'easeInOut', delay, duration } },
    exit: {}
});

export const black = '#1b1425';
export const textColor = '#9c92ab';
export const red = '#f87e77';
export const darkBackground = '#291d37';


export const HOME_FADE_PROPS = {
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants: HOME_SHOW_VARIANT(1.2)
};
