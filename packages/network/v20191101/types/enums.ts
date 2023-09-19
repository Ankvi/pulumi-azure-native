export const State = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type State = (typeof State)[keyof typeof State];
