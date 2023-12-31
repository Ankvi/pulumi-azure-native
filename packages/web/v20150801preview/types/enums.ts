export const ConnectionParameterType = {
    String: "string",
    Securestring: "securestring",
    Secureobject: "secureobject",
    Int: "int",
    Bool: "bool",
    Object: "object",
    Array: "array",
    OauthSetting: "oauthSetting",
    Connection: "connection",
} as const;

/**
 * Type of the parameter
 */
export type ConnectionParameterType = (typeof ConnectionParameterType)[keyof typeof ConnectionParameterType];

export const PrincipalType = {
    ActiveDirectory: "ActiveDirectory",
    Connection: "Connection",
    MicrosoftAccount: "MicrosoftAccount",
} as const;

/**
 * Principal type
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];
