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

export const black = '#1b1425';
