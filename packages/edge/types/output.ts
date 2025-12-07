import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Available Solution template Version along with latest revision
 */
export interface AvailableSolutionTemplateVersionResponse {
    /**
     * Has this solution template version been configured
     */
    isConfigured: boolean;
    /**
     * Latest Configuration Revision
     */
    latestConfigRevision: string;
    /**
     * Solution template Version
     */
    solutionTemplateVersion: string;
}

/**
 * The complex type of the extended location.
 */
export interface AzureResourceManagerCommonTypesExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name: string;
    /**
     * The type of the extended location.
     */
    type: string;
}

/**
 * Capability, to match in Solution Templates and Targets
 */
export interface CapabilityResponse {
    /**
     * Description of Capability
     */
    description: string;
    /**
     * Name of Capability
     */
    name: string;
    /**
     * State of resource
     */
    state?: string;
}

/**
 * Component Status
 */
export interface ComponentStatusResponse {
    /**
     * Component name
     */
    name?: string;
    /**
     * Component status
     */
    status?: string;
}

/**
 * Config Template Properties
 */
export interface ConfigTemplatePropertiesResponse {
    /**
     * Description of config template
     */
    description: string;
    /**
     * Latest config template version
     */
    latestVersion: string;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
}

/**
 * Configuration Properties
 */
export interface ConfigurationPropertiesResponse {
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
}

/**
 * Properties for ConfigurationReference Resource
 */
export interface ConfigurationReferencePropertiesResponse {
    /**
     * ArmId of Configuration resource
     */
    configurationResourceId?: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

/**
 * Context Properties
 */
export interface ContextPropertiesResponse {
    /**
     * List of Capabilities
     */
    capabilities: CapabilityResponse[];
    /**
     * List of Hierarchies
     */
    hierarchies: HierarchyResponse[];
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
}

/**
 * Deployment Status
 */
export interface DeploymentStatusResponse {
    /**
     * Indicates if Instance is deployed
     */
    deployed?: number;
    /**
     * The expected running job id
     */
    expectedRunningJobId?: number;
    /**
     * Deployment Generation
     */
    generation?: number;
    /**
     * The lastModified of the Status
     */
    lastModified?: string;
    /**
     * The running job id
     */
    runningJobId?: number;
    /**
     * Deployment status
     */
    status?: string;
    /**
     * Status details
     */
    statusDetails?: string;
    /**
     * Target resource statuses
     */
    targetStatuses?: TargetStatusResponse[];
}

/**
 * The properties of a Diagnostic resource.
 */
export interface DiagnosticPropertiesResponse {
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

/**
 * Dynamic Configuration Properties
 */
export interface DynamicConfigurationPropertiesResponse {
    /**
     * Current Version of dynamic configuration
     */
    currentVersion: string;
    /**
     * Type of dynamic configuration model
     */
    dynamicConfigurationModel: string;
    /**
     * Type of dynamic configuration
     */
    dynamicConfigurationType: string;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
}

/**
 * Dynamic Configuration Properties
 */
export interface DynamicConfigurationVersionPropertiesResponse {
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Schema Id for configuration
     */
    schemaId: string;
    /**
     * Values of configuration version
     */
    values: string;
}

/**
 * DynamicSchema Properties
 */
export interface DynamicSchemaPropertiesResponse {
    /**
     * Type of configuration model
     */
    configurationModel: string;
    /**
     * Type of configuration
     */
    configurationType: string;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
}

/**
 * Error Action Properties
 */
export interface ErrorActionResponse {
    /**
     * Max tolerated failures
     */
    maxToleratedFailures?: number;
    /**
     * Error action mode
     */
    mode?: string;
}
/**
 * errorActionResponseProvideDefaults sets the appropriate defaults for ErrorActionResponse
 */
export function errorActionResponseProvideDefaults(val: ErrorActionResponse): ErrorActionResponse {
    return {
        ...val,
        mode: (val.mode) ?? "stopOnAnyFailure",
    };
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
}

/**
 * Execution Properties
 */
export interface ExecutionPropertiesResponse {
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Execution specification
     */
    specification?: any;
    /**
     * Status of Execution
     */
    status: ExecutionStatusResponse;
    /**
     * Workflow version of execution
     */
    workflowVersionId: string;
}

/**
 * Execution Status
 */
export interface ExecutionStatusResponse {
    /**
     * target resource statuses
     */
    stageHistory?: StageStatusResponse[];
    /**
     * Deployment status
     */
    status?: number;
    /**
     * status details
     */
    statusMessage?: string;
    /**
     * The lastModified timestamp of the Status
     */
    updateTime?: string;
}

/**
 * Hierarchy, to tag Sites / Hierarchy Provider nodes with what they represent
 */
export interface HierarchyResponse {
    /**
     * Description of Hierarchy
     */
    description: string;
    /**
     * Name of Hierarchy
     */
    name: string;
}

/**
 * Instance Properties
 */
export interface InstancePropertiesResponse {
    /**
     * State of instance
     */
    activeState?: string;
    /**
     * Deployment timestamp of instance
     */
    deploymentTimestampEpoch: number;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Reconciliation policy of instance
     */
    reconciliationPolicy?: ReconciliationPolicyPropertiesResponse;
    /**
     * Scope of instance
     */
    solutionScope?: string;
    /**
     * Solution version of instance
     */
    solutionVersionId: string;
    /**
     * Status of instance
     */
    status: DeploymentStatusResponse;
    /**
     * Target of instance
     */
    targetId: string;
}

/**
 * Defines a ReconciliationPolicy
 */
export interface ReconciliationPolicyPropertiesResponse {
    /**
     * Policy interval
     */
    interval: string;
    /**
     * The state of the ReconciliationPolicy
     */
    state: string;
}

/**
 * Schema Properties
 */
export interface SchemaPropertiesResponse {
    /**
     * Current Version of schema
     */
    currentVersion: string;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
}

/**
 * Schema Reference Properties
 */
export interface SchemaReferencePropertiesResponse {
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Schema Id of schema reference
     */
    schemaId: string;
}

/**
 * Schema Version Properties
 */
export interface SchemaVersionPropertiesResponse {
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Value of schema version
     */
    value: string;
}

/**
 * Site address properties
 */
export interface SiteAddressPropertiesResponse {
    /**
     * City of the address
     */
    city?: string;
    /**
     * Country of the address
     */
    country?: string;
    /**
     * Postal or ZIP code of the address
     */
    postalCode?: string;
    /**
     * State or province of the address
     */
    stateOrProvince?: string;
    /**
     * First line of the street address
     */
    streetAddress1?: string;
    /**
     * Second line of the street address
     */
    streetAddress2?: string;
}

/**
 * Site properties
 */
export interface SitePropertiesResponse {
    /**
     * AddressResource ArmId of Site resource
     */
    addressResourceId?: string;
    /**
     * Description of Site resource
     */
    description?: string;
    /**
     * displayName of Site resource
     */
    displayName?: string;
    /**
     * Key-value pairs for labeling the site resource.
     */
    labels?: {[key: string]: string};
    /**
     * Provisioning state of last operation
     */
    provisioningState: string;
    /**
     * Physical address of the site
     */
    siteAddress?: SiteAddressPropertiesResponse;
}

/**
 * Site Reference Properties
 */
export interface SiteReferencePropertiesResponse {
    /**
     * Provisioning State
     */
    provisioningState: string;
    /**
     * Azure Resource ID for Site
     */
    siteId: string;
}

/**
 * Solution Dependency Context
 */
export interface SolutionDependencyResponse {
    /**
     * Solution dependencies
     */
    dependencies?: SolutionDependencyResponse[];
    /**
     * Solution Instance Name
     */
    solutionInstanceName?: string;
    /**
     * Solution Template Version Id
     */
    solutionTemplateVersionId: string;
    /**
     * Solution Version Id
     */
    solutionVersionId: string;
    /**
     * Target Id
     */
    targetId: string;
}

/**
 * Solution Properties
 */
export interface SolutionPropertiesResponse {
    /**
     * List of latest revisions for available solution template versions
     */
    availableSolutionTemplateVersions: AvailableSolutionTemplateVersionResponse[];
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Solution template Id
     */
    solutionTemplateId: string;
}

/**
 * Solution Template Properties
 */
export interface SolutionTemplatePropertiesResponse {
    /**
     * List of capabilities
     */
    capabilities: string[];
    /**
     * Description of Solution template
     */
    description: string;
    /**
     * Flag to enable external validation
     */
    enableExternalValidation?: boolean;
    /**
     * Latest solution template version
     */
    latestVersion: string;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * State of resource
     */
    state?: string;
}

/**
 * Solution Version Properties
 */
export interface SolutionVersionPropertiesResponse {
    /**
     * The type of the latest action performed on this solution version.
     */
    actionType: string;
    /**
     * Resolved configuration values
     */
    configuration: string;
    /**
     * Error Details if any failure is there
     */
    errorDetails: ErrorDetailResponse;
    /**
     * External validation id
     */
    externalValidationId: string;
    /**
     * The URI for tracking the latest action performed on this solution version.
     */
    latestActionTrackingUri: string;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Review id of resolved config for this solution version
     */
    reviewId: string;
    /**
     * Revision number of resolved config for this solution version
     */
    revision: number;
    /**
     * Solution Dependency Context
     */
    solutionDependencies: SolutionDependencyResponse[];
    /**
     * Solution instance name
     */
    solutionInstanceName: string;
    /**
     * Solution Template Version Id
     */
    solutionTemplateVersionId: string;
    /**
     * App components spec
     */
    specification: any;
    /**
     * State of solution instance
     */
    state: string;
    /**
     * Name of applicable target's display name
     */
    targetDisplayName: string;
    /**
     * Configuration on the line level across all solution template versions
     */
    targetLevelConfiguration: string;
}

/**
 * Stage Properties
 */
export interface StageSpecResponse {
    /**
     * Name of Stage
     */
    name: string;
    /**
     * Stage specification
     */
    specification?: any;
    /**
     * Task option for the stage
     */
    taskOption?: TaskOptionResponse;
    /**
     * List of tasks in the stage
     */
    tasks?: TaskSpecResponse[];
}
/**
 * stageSpecResponseProvideDefaults sets the appropriate defaults for StageSpecResponse
 */
export function stageSpecResponseProvideDefaults(val: StageSpecResponse): StageSpecResponse {
    return {
        ...val,
        taskOption: (val.taskOption ? taskOptionResponseProvideDefaults(val.taskOption) : undefined),
    };
}

/**
 * Result of Stage execution
 */
export interface StageStatusResponse {
    /**
     * Error message
     */
    errorMessage?: string;
    /**
     * The inputs of the StageHistory, Inputs holds a key-value map of user-defined parameters for the initial stage
     */
    inputs?: any;
    /**
     * whether this stage is active or inactive
     */
    isActive?: string;
    /**
     * Next stage
     */
    nextstage?: string;
    /**
     * The outputs of the StageHistory, it is different as the different input stages.
     */
    outputs?: any;
    /**
     * Current stage
     */
    stage?: string;
    /**
     * Deployment status
     */
    status?: number;
    /**
     * Status message
     */
    statusMessage?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Target Properties
 */
export interface TargetPropertiesResponse {
    /**
     * List of capabilities
     */
    capabilities: string[];
    /**
     * ArmId of Context
     */
    contextId: string;
    /**
     * Description of target
     */
    description: string;
    /**
     * Display name of target
     */
    displayName: string;
    /**
     * Hierarchy Level
     */
    hierarchyLevel: string;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Scope of the target resource
     */
    solutionScope?: string;
    /**
     * State of resource
     */
    state?: string;
    /**
     * Status of target
     */
    status: DeploymentStatusResponse;
    /**
     * target spec
     */
    targetSpecification: any;
}

/**
 * Target Status
 */
export interface TargetStatusResponse {
    /**
     * Component statuses
     */
    componentStatuses?: ComponentStatusResponse[];
    /**
     * Target name
     */
    name?: string;
    /**
     * Target status
     */
    status?: string;
}

/**
 * Task Option Properties
 */
export interface TaskOptionResponse {
    /**
     * Parallel worker numbers of the tasks
     */
    concurrency?: number;
    /**
     * Error action for the tasks
     */
    errorAction?: ErrorActionResponse;
}
/**
 * taskOptionResponseProvideDefaults sets the appropriate defaults for TaskOptionResponse
 */
export function taskOptionResponseProvideDefaults(val: TaskOptionResponse): TaskOptionResponse {
    return {
        ...val,
        concurrency: (val.concurrency) ?? 1,
        errorAction: (val.errorAction ? errorActionResponseProvideDefaults(val.errorAction) : undefined),
    };
}

/**
 * Task Spec
 */
export interface TaskSpecResponse {
    /**
     * Name of Task
     */
    name: string;
    /**
     * Task specification
     */
    specification: any;
    /**
     * Target ARM id
     */
    targetId?: string;
}

/**
 * Workflow Properties
 */
export interface WorkflowPropertiesResponse {
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Workflow template Id
     */
    workflowTemplateId: string;
}

/**
 * Workflow Version Properties
 */
export interface WorkflowVersionPropertiesResponse {
    /**
     * Resolved configuration values
     */
    configuration: string;
    /**
     * Provisioning state of resource
     */
    provisioningState: string;
    /**
     * Review id of resolved config for this workflow version
     */
    reviewId: string;
    /**
     * Revision number of resolved config for this workflow version
     */
    revision: number;
    /**
     * Execution specification
     */
    specification?: any;
    /**
     * A list of stage specs
     */
    stageSpec: StageSpecResponse[];
    /**
     * State of workflow version
     */
    state: string;
}
