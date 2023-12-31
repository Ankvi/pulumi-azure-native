export const DeploymentMode = {
    Incremental: "Incremental",
    Complete: "Complete",
} as const;

/**
 * Describes the type of ARM deployment to be performed on the resource.
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

export const RestAuthLocation = {
    Query: "Query",
    Header: "Header",
} as const;

/**
 * The location of the authentication key/value pair in the request.
 */
export type RestAuthLocation = (typeof RestAuthLocation)[keyof typeof RestAuthLocation];

export const RestAuthType = {
    ApiKey: "ApiKey",
    RolloutIdentity: "RolloutIdentity",
} as const;

/**
 * The authentication type.
 */
export type RestAuthType = (typeof RestAuthType)[keyof typeof RestAuthType];

export const RestMatchQuantifier = {
    All: "All",
    Any: "Any",
} as const;

/**
 * Indicates whether any or all of the expressions should match with the response content.
 */
export type RestMatchQuantifier = (typeof RestMatchQuantifier)[keyof typeof RestMatchQuantifier];

export const RestRequestMethod = {
    GET: "GET",
    POST: "POST",
} as const;

/**
 * The HTTP method to use for the request.
 */
export type RestRequestMethod = (typeof RestRequestMethod)[keyof typeof RestRequestMethod];

export const StepType = {
    Wait: "Wait",
    HealthCheck: "HealthCheck",
} as const;

/**
 * The type of step.
 */
export type StepType = (typeof StepType)[keyof typeof StepType];
