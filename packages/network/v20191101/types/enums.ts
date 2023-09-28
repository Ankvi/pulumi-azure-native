export const State = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of the Experiment
 */
export type State = (typeof State)[keyof typeof State];
