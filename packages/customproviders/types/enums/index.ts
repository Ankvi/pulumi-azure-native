// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// Export sub-modules:
import * as v20180901preview from "./v20180901preview";

export {
    v20180901preview,
};

export const ActionRouting = {
    Proxy: "Proxy",
} as const;

export type ActionRouting = (typeof ActionRouting)[keyof typeof ActionRouting];

export const ResourceTypeRouting = {
    Proxy: "Proxy",
    Proxy_Cache: "Proxy,Cache",
} as const;

export type ResourceTypeRouting = (typeof ResourceTypeRouting)[keyof typeof ResourceTypeRouting];

export const ValidationType = {
    Swagger: "Swagger",
} as const;

export type ValidationType = (typeof ValidationType)[keyof typeof ValidationType];
