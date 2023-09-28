export const AuthenticationMethod = {
    Token: "Token",
    AAD: "AAD",
} as const;

/**
 * The mode of client authentication.
 */
export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];
