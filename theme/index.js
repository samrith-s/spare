"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR_MAPPING = exports.COLORS = void 0;
exports.COLORS = {
    light: {
        // base
        '--background': '#efefef',
        '--foreground': '#111111',
        // primary
        '--primary': '#111111',
        // secondary
        '--secondary': '#dedede',
        '--secondary-foreground': '#333333',
        // muted
        '--muted': '#bfbfbf',
        '--muted-foreground': '#666666',
        // card
        '--card': '#dedede',
        get '--card-foreground'() {
            return this['--foreground'];
        },
        // success
        '--success': '#10b981',
        get '--success-foreground'() {
            return this['--background'];
        },
        // destructive
        '--destructive': '#ef4444',
        get '--destructive-foreground'() {
            return this['--background'];
        },
        // tints
        '--tint-lightest': 'rgba(255, 255, 255, 0.1)',
        '--tint-lighter': 'rgba(100, 100, 100, 0.1)',
        '--tint': 'rgba(0, 0, 0, 0.25)',
        '--tint-darker': 'rgba(0, 0, 0, 0.5)',
        '--tint-darkest': 'rgba(0, 0, 0, 0.75)',
    },
    dark: {
        // base
        '--background': '#111111',
        '--foreground': '#efefef',
        '--primary': '#efefef',
        // secondary
        '--secondary': '#222222',
        '--secondary-foreground': '#222222',
        // muted
        '--muted': '#3e3e3e',
        '--muted-foreground': '',
        // card
        '--card': '#333333',
        get '--card-foreground'() {
            return this['--foreground'];
        },
        // success
        '--success': '#096F4D',
        get '--success-foreground'() {
            return this['--foreground'];
        },
        // destructive
        '--destructive': '#8F2828',
        get '--destructive-foreground'() {
            return this['--foreground'];
        },
        // tints
        '--tint-lightest': 'rgba(255, 255, 255, 0.1)',
        '--tint-lighter': 'rgba(100, 100, 100, 0.1)',
        '--tint': 'rgba(0, 0, 0, 0.25)',
        '--tint-darker': 'rgba(0, 0, 0, 0.5)',
        '--tint-darkest': 'rgba(0, 0, 0, 0.75)',
    },
};
exports.COLOR_MAPPING = Object.keys({
    ...exports.COLORS.light,
    ...exports.COLORS.dark,
}).reduce((acc, key) => {
    const regexp = /--([A-Za-z\-0-9]+)/;
    const match = key.match(regexp) || [];
    const color = match[1];
    return {
        ...acc,
        [color]: `var(${key})`,
    };
}, {});
