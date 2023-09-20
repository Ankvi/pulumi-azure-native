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

export type EnterpriseChannelState = (typeof EnterpriseChannelState)[keyof typeof EnterpriseChannelState];

export const Kind = {
    Sdk: "sdk",
    Designer: "designer",
    Bot: "bot",
    Function: "function",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const SkuName = {
    F0: "F0",
    S1: "S1",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];