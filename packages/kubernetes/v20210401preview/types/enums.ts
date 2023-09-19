export const AuthenticationMethod = {
    Token: "Token",
    AAD: "AAD",
} as const;

export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];
