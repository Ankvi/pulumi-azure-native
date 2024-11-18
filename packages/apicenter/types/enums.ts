export const ApiKind = {
    /**
     * A Representational State Transfer Api
     */
    Rest: "rest",
    /**
     * A Graph query language Api
     */
    Graphql: "graphql",
    /**
     * A gRPC Api
     */
    Grpc: "grpc",
    /**
     * A SOAP Api
     */
    Soap: "soap",
    /**
     * Web Hook
     */
    Webhook: "webhook",
    /**
     * Web Socket
     */
    Websocket: "websocket",
} as const;

/**
 * Kind of API. For example, REST or GraphQL.
 */
export type ApiKind = (typeof ApiKind)[keyof typeof ApiKind];

export const DeploymentState = {
    /**
     * Active State
     */
    Active: "active",
    /**
     * Inactive State
     */
    Inactive: "inactive",
} as const;

/**
 * State of API deployment.
 */
export type DeploymentState = (typeof DeploymentState)[keyof typeof DeploymentState];

export const EnvironmentKind = {
    /**
     * Development environment
     */
    Development: "development",
    /**
     * Testing environment
     */
    Testing: "testing",
    /**
     * Staging environment
     */
    Staging: "staging",
    /**
     * Production environment
     */
    Production: "production",
} as const;

/**
 * Environment kind.
 */
export type EnvironmentKind = (typeof EnvironmentKind)[keyof typeof EnvironmentKind];

export const EnvironmentServerType = {
    /**
     * Api Management Server
     */
    Azure_API_Management: "Azure API Management",
    /**
     * Compute server
     */
    Azure_compute_service: "Azure compute service",
    /**
     * Apigee server
     */
    Apigee_API_Management: "Apigee API Management",
    /**
     * AWS Api Gateway server
     */
    AWS_API_Gateway: "AWS API Gateway",
    /**
     * Kong API Gateway server
     */
    Kong_API_Gateway: "Kong API Gateway",
    /**
     * Kubernetes server
     */
    Kubernetes: "Kubernetes",
    /**
     * Mulesoft Api Management server
     */
    MuleSoft_API_Management: "MuleSoft API Management",
} as const;

/**
 * Type of the server that represents the environment.
 */
export type EnvironmentServerType = (typeof EnvironmentServerType)[keyof typeof EnvironmentServerType];

export const ImportSpecificationOptions = {
    /**
     * Indicates that the specification should be never be imported.
     */
    Never: "never",
    /**
     * Indicates that the specification should be imported only by request.
     */
    OnDemand: "ondemand",
    /**
     * Indicates that the specification should always be imported along with metadata.
     */
    Always: "always",
} as const;

/**
 * Indicates if the specification should be imported along with metadata.
 */
export type ImportSpecificationOptions = (typeof ImportSpecificationOptions)[keyof typeof ImportSpecificationOptions];

export const LifecycleStage = {
    /**
     * design stage
     */
    Design: "design",
    /**
     * development stage
     */
    Development: "development",
    /**
     * testing stage
     */
    Testing: "testing",
    /**
     * In preview
     */
    Preview: "preview",
    /**
     * In production
     */
    Production: "production",
    /**
     * deprecated stage
     */
    Deprecated: "deprecated",
    /**
     * Retired stage
     */
    Retired: "retired",
} as const;

/**
 * Current lifecycle stage of the API.
 */
export type LifecycleStage = (typeof LifecycleStage)[keyof typeof LifecycleStage];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MetadataAssignmentEntity = {
    /**
     * Assigned to API
     */
    Api: "api",
    /**
     * Assigned to Environment
     */
    Environment: "environment",
    /**
     * Assigned to Deployment
     */
    Deployment: "deployment",
} as const;

/**
 * The entities this metadata schema component gets applied to.
 */
export type MetadataAssignmentEntity = (typeof MetadataAssignmentEntity)[keyof typeof MetadataAssignmentEntity];
