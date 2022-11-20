type Modes = Record<string, boolean | string>;

export const classNames = (cls: string, modes: Modes = {}, extraClasses: string[] = []): string => {
	return [
		cls,
		...extraClasses.filter(Boolean),
		...Object.entries(modes)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className)
	].join(' ');
};
