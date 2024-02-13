type Mods = Record<string, boolean | string>

/**
 * @params
 * cls:
 *
 *
 */
export const classNames = (cls:string, mods: Mods, additional: string[] ): string=> {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([cls, value]) => !!value)
            .map(([cls, value]) => cls),
        ...additional
    ].join(' ')
}

// console.log('1', classNames('remove-btn', {'hover': true}));
// console.log('2', classNames('remove-btn'))
// console.log('3', classNames('remove-btn', {'hove2r': true}))
// console.log('4', classNames('remove-btn', {'hover3': true}))