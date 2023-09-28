export const ApiType = {
    NotSpecified: "NotSpecified",
    Rest: "Rest",
    Soap: "Soap",
} as const;

/**
 * The API type
 */
export type ApiType = (typeof ApiType)[keyof typeof ApiType];

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

export const WsdlImportMethod = {
    NotSpecified: "NotSpecified",
    SoapToRest: "SoapToRest",
    SoapPassThrough: "SoapPassThrough",
} as const;

/**
 * The WSDL import method
 */
export type WsdlImportMethod = (typeof WsdlImportMethod)[keyof typeof WsdlImportMethod];
