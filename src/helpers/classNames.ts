export function classNames(className: string, mods: {}, additional: string[]) {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([label, value]) => Boolean(value))
            .map(([label, value]) => label)
    ]
        .join(' ');
};