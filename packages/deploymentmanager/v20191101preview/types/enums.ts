export const DeploymentMode = {
    Incremental: "Incremental",
    Complete: "Complete",
} as const;

export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

export const RestAuthLocation = {
    Query: "Query",
    Header: "Header",
} as const;

export type RestAuthLocation = (typeof RestAuthLocation)[keyof typeof RestAuthLocation];

export const RestAuthType = {
    ApiKey: "ApiKey",
    RolloutIdentity: "RolloutIdentity",
} as const;

export type RestAuthType = (typeof RestAuthType)[keyof typeof RestAuthType];

export const RestMatchQuantifier = {
    All: "All",
    Any: "Any",
} as const;

export type RestMatchQuantifier = (typeof RestMatchQuantifier)[keyof typeof RestMatchQuantifier];

export const RestRequestMethod = {
    GET: "GET",
    POST: "POST",
} as const;

export type RestRequestMethod = (typeof RestRequestMethod)[keyof typeof RestRequestMethod];

export const StepType = {
    Wait: "Wait",
    HealthCheck: "HealthCheck",
} as const;

export type StepType = (typeof StepType)[keyof typeof StepType];
