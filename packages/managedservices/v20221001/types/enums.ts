export const MultiFactorAuthProvider = {
    Azure: "Azure",
    None: "None",
} as const;

/**
 * The multi-factor authorization provider to be used for just-in-time access requests.
 */
export type MultiFactorAuthProvider = (typeof MultiFactorAuthProvider)[keyof typeof MultiFactorAuthProvider];
