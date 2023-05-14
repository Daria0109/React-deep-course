export type Modes = Record<string, boolean | string | undefined>;

export const classNames = (
	cls: string,
	modes: Modes = {},
	extraClasses: (string | undefined)[] = []
): string => [
	cls,
	...extraClasses.filter(Boolean),
	...Object.entries(modes)
		.filter(([_, value]) => Boolean(value))
		.map(([className]) => className)
].join(' ');
