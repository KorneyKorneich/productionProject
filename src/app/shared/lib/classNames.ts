export function classNames(className: string, mods?: {}, additional?: string[]) {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([value]) => Boolean(value))
            .map(([label]) => label)
    ]
        .join(' ');
}