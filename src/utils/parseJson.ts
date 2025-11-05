export const parseJson = <T>(str: string | null) => JSON.parse(str ?? '{}') as T;
