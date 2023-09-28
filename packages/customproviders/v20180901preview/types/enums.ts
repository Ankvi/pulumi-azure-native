export const ActionRouting = {
    Proxy: "Proxy",
} as const;

/**
 * The routing types that are supported for action requests.
 */
export type ActionRouting = (typeof ActionRouting)[keyof typeof ActionRouting];

export const ResourceTypeRouting = {
    Proxy: "Proxy",
    Proxy_Cache: "Proxy,Cache",
} as const;

/**
 * The routing types that are supported for resource requests.
 */
export type ResourceTypeRouting = (typeof ResourceTypeRouting)[keyof typeof ResourceTypeRouting];

export const ValidationType = {
    Swagger: "Swagger",
} as const;

/**
 * The type of validation to run against a matching request.
 */
export type ValidationType = (typeof ValidationType)[keyof typeof ValidationType];
