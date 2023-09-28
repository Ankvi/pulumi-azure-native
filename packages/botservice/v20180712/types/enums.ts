export const EnterpriseChannelNodeState = {
    Creating: "Creating",
    CreateFailed: "CreateFailed",
    Started: "Started",
    Starting: "Starting",
    StartFailed: "StartFailed",
    Stopped: "Stopped",
    Stopping: "Stopping",
    StopFailed: "StopFailed",
    Deleting: "Deleting",
    DeleteFailed: "DeleteFailed",
} as const;

/**
 * The current state of the Enterprise Channel Node.
 */
export type EnterpriseChannelNodeState = (typeof EnterpriseChannelNodeState)[keyof typeof EnterpriseChannelNodeState];

export const EnterpriseChannelState = {
    Creating: "Creating",
    CreateFailed: "CreateFailed",
    Started: "Started",
    Starting: "Starting",
    StartFailed: "StartFailed",
    Stopped: "Stopped",
    Stopping: "Stopping",
    StopFailed: "StopFailed",
    Deleting: "Deleting",
    DeleteFailed: "DeleteFailed",
} as const;

/**
 * The current state of the Enterprise Channel.
 */
export type EnterpriseChannelState = (typeof EnterpriseChannelState)[keyof typeof EnterpriseChannelState];

export const Kind = {
    Sdk: "sdk",
    Designer: "designer",
    Bot: "bot",
    Function: "function",
} as const;

/**
 * Required. Gets or sets the Kind of the resource.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const SkuName = {
    F0: "F0",
    S1: "S1",
} as const;

/**
 * The sku name
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
