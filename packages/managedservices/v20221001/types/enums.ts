export const MultiFactorAuthProvider = {
    Azure: "Azure",
    None: "None",
} as const;

export type MultiFactorAuthProvider = (typeof MultiFactorAuthProvider)[keyof typeof MultiFactorAuthProvider];
