export const ContentType = {
    AnalyticRule: "AnalyticRule",
    Workbook: "Workbook",
} as const;

/**
 * Content type.
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export const DeploymentFetchStatus = {
    Success: "Success",
    Unauthorized: "Unauthorized",
    NotFound: "NotFound",
} as const;

/**
 * Status while fetching the last deployment.
 */
export type DeploymentFetchStatus = (typeof DeploymentFetchStatus)[keyof typeof DeploymentFetchStatus];

export const DeploymentResult = {
    Success: "Success",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

/**
 * The outcome of the deployment.
 */
export type DeploymentResult = (typeof DeploymentResult)[keyof typeof DeploymentResult];

export const DeploymentState = {
    In_Progress: "In_Progress",
    Completed: "Completed",
    Queued: "Queued",
    Canceling: "Canceling",
} as const;

/**
 * Current status of the deployment.
 */
export type DeploymentState = (typeof DeploymentState)[keyof typeof DeploymentState];

export const EntityTimelineKind = {
    /**
     * activity
     */
    Activity: "Activity",
    /**
     * bookmarks
     */
    Bookmark: "Bookmark",
    /**
     * security alerts
     */
    SecurityAlert: "SecurityAlert",
    /**
     * anomaly
     */
    Anomaly: "Anomaly",
} as const;

/**
 * The entity query kind
 */
export type EntityTimelineKind = (typeof EntityTimelineKind)[keyof typeof EntityTimelineKind];

export const RepoType = {
    Github: "Github",
    DevOps: "DevOps",
} as const;

/**
 * The repository type of the source control
 */
export type RepoType = (typeof RepoType)[keyof typeof RepoType];

export const Version = {
    V1: "V1",
    V2: "V2",
} as const;

/**
 * The version number associated with the source control
 */
export type Version = (typeof Version)[keyof typeof Version];
