// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// Export sub-modules:
import * as v20230208preview from "./v20230208preview";

export {
    v20230208preview,
};

export const Status = {
    Pending: "Pending",
    Extracting: "Extracting",
    Analyzing: "Analyzing",
    Ready: "Ready",
    Error: "Error",
} as const;

export type Status = (typeof Status)[keyof typeof Status];
