import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The complex type of the extended location.
 */
export interface AzureResourceManagerCommonTypesExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type: pulumi.Input<string | enums.ExtendedLocationType>;
}

/**
 * Capability, to match in Solution Templates & Targets
 */
export interface CapabilityArgs {
    /**
     * Description of Capability
     */
    description: pulumi.Input<string>;
    /**
     * Name of Capability
     */
    name: pulumi.Input<string>;
    /**
     * State of resource
     */
    state?: pulumi.Input<string | enums.ResourceState>;
}

/**
 * Config Template Properties
 */
export interface ConfigTemplatePropertiesArgs {
    /**
     * Description of config template
     */
    description: pulumi.Input<string>;
}

/**
 * Properties for ConfigurationReference Resource
 */
export interface ConfigurationReferencePropertiesArgs {
    /**
     * ArmId of Configuration resource
     */
    configurationResourceId?: pulumi.Input<string>;
}

/**
 * Context Properties
 */
export interface ContextPropertiesArgs {
    /**
     * List of Capabilities
     */
    capabilities: pulumi.Input<pulumi.Input<CapabilityArgs>[]>;
    /**
     * List of Hierarchies
     */
    hierarchies: pulumi.Input<pulumi.Input<HierarchyArgs>[]>;
}

/**
 * Dynamic Configuration Properties
 */
export interface DynamicConfigurationPropertiesArgs {
    /**
     * Current Version of dynamic configuration
     */
    currentVersion: pulumi.Input<string>;
}

/**
 * Dynamic Configuration Properties
 */
export interface DynamicConfigurationVersionPropertiesArgs {
    /**
     * Values of configuration version
     */
    values: pulumi.Input<string>;
}

/**
 * Error Action Properties
 */
export interface ErrorActionArgs {
    /**
     * Max tolerated failures
     */
    maxToleratedFailures?: pulumi.Input<number>;
    /**
     * Error action mode
     */
    mode?: pulumi.Input<string | enums.ErrorActionMode>;
}
/**
 * errorActionArgsProvideDefaults sets the appropriate defaults for ErrorActionArgs
 */
export function errorActionArgsProvideDefaults(val: ErrorActionArgs): ErrorActionArgs {
    return {
        ...val,
        mode: (val.mode) ?? "stopOnAnyFailure",
    };
}

/**
 * Execution Properties
 */
export interface ExecutionPropertiesArgs {
    /**
     * Execution specification
     */
    specification?: any;
    /**
     * Workflow version of execution
     */
    workflowVersionId: pulumi.Input<string>;
}

/**
 * Hierarchy, to tag Sites / Hierarchy Provider nodes with what they represent
 */
export interface HierarchyArgs {
    /**
     * Description of Hierarchy
     */
    description: pulumi.Input<string>;
    /**
     * Name of Hierarchy
     */
    name: pulumi.Input<string>;
}

/**
 * Instance Properties
 */
export interface InstancePropertiesArgs {
    /**
     * State of instance
     */
    activeState?: pulumi.Input<string | enums.ActiveState>;
    /**
     * Reconciliation policy of instance
     */
    reconciliationPolicy?: pulumi.Input<ReconciliationPolicyPropertiesArgs>;
    /**
     * Scope of instance
     */
    solutionScope?: pulumi.Input<string>;
    /**
     * Solution version of instance
     */
    solutionVersionId: pulumi.Input<string>;
    /**
     * Target of instance
     */
    targetId: pulumi.Input<string>;
}

/**
 * Defines a ReconciliationPolicy
 */
export interface ReconciliationPolicyPropertiesArgs {
    /**
     * Policy interval
     */
    interval: pulumi.Input<string>;
    /**
     * The state of the ReconciliationPolicy
     */
    state: pulumi.Input<string | enums.ReconciliationState>;
}

/**
 * Schema Version Properties
 */
export interface SchemaVersionPropertiesArgs {
    /**
     * Value of schema version
     */
    value: pulumi.Input<string>;
}

/**
 * Site address properties
 */
export interface SiteAddressPropertiesArgs {
    /**
     * City of the address
     */
    city?: pulumi.Input<string>;
    /**
     * Country of the address
     */
    country?: pulumi.Input<string>;
    /**
     * Postal or ZIP code of the address
     */
    postalCode?: pulumi.Input<string>;
    /**
     * State or province of the address
     */
    stateOrProvince?: pulumi.Input<string>;
    /**
     * First line of the street address
     */
    streetAddress1?: pulumi.Input<string>;
    /**
     * Second line of the street address
     */
    streetAddress2?: pulumi.Input<string>;
}

/**
 * Site properties
 */
export interface SitePropertiesArgs {
    /**
     * AddressResource ArmId of Site resource
     */
    addressResourceId?: pulumi.Input<string>;
    /**
     * Description of Site resource
     */
    description?: pulumi.Input<string>;
    /**
     * displayName of Site resource
     */
    displayName?: pulumi.Input<string>;
    /**
     * Key-value pairs for labeling the site resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Physical address of the site
     */
    siteAddress?: pulumi.Input<SiteAddressPropertiesArgs>;
}

/**
 * Site Reference Properties
 */
export interface SiteReferencePropertiesArgs {
    /**
     * Azure Resource ID for Site
     */
    siteId: pulumi.Input<string>;
}

/**
 * Solution Template Properties
 */
export interface SolutionTemplatePropertiesArgs {
    /**
     * List of capabilities
     */
    capabilities: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of Solution template
     */
    description: pulumi.Input<string>;
    /**
     * Flag to enable external validation
     */
    enableExternalValidation?: pulumi.Input<boolean>;
    /**
     * State of resource
     */
    state?: pulumi.Input<string | enums.ResourceState>;
}

/**
 * Solution Version Properties
 */
export interface SolutionVersionPropertiesArgs {
    /**
     * App components spec
     */
    specification: any;
}

/**
 * Stage Properties
 */
export interface StageSpecArgs {
    /**
     * Name of Stage
     */
    name: pulumi.Input<string>;
    /**
     * Stage specification
     */
    specification?: any;
    /**
     * Task option for the stage
     */
    taskOption?: pulumi.Input<TaskOptionArgs>;
    /**
     * List of tasks in the stage
     */
    tasks?: pulumi.Input<pulumi.Input<TaskSpecArgs>[]>;
}
/**
 * stageSpecArgsProvideDefaults sets the appropriate defaults for StageSpecArgs
 */
export function stageSpecArgsProvideDefaults(val: StageSpecArgs): StageSpecArgs {
    return {
        ...val,
        taskOption: (val.taskOption ? pulumi.output(val.taskOption).apply(taskOptionArgsProvideDefaults) : undefined),
    };
}

/**
 * Target Properties
 */
export interface TargetPropertiesArgs {
    /**
     * List of capabilities
     */
    capabilities: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ArmId of Context
     */
    contextId: pulumi.Input<string>;
    /**
     * Description of target
     */
    description: pulumi.Input<string>;
    /**
     * Display name of target
     */
    displayName: pulumi.Input<string>;
    /**
     * Hierarchy Level
     */
    hierarchyLevel: pulumi.Input<string>;
    /**
     * Scope of the target resource
     */
    solutionScope?: pulumi.Input<string>;
    /**
     * State of resource
     */
    state?: pulumi.Input<string | enums.ResourceState>;
    /**
     * target spec
     */
    targetSpecification: any;
}

/**
 * Task Option Properties
 */
export interface TaskOptionArgs {
    /**
     * Parallel worker numbers of the tasks
     */
    concurrency?: pulumi.Input<number>;
    /**
     * Error action for the tasks
     */
    errorAction?: pulumi.Input<ErrorActionArgs>;
}
/**
 * taskOptionArgsProvideDefaults sets the appropriate defaults for TaskOptionArgs
 */
export function taskOptionArgsProvideDefaults(val: TaskOptionArgs): TaskOptionArgs {
    return {
        ...val,
        concurrency: (val.concurrency) ?? 1,
        errorAction: (val.errorAction ? pulumi.output(val.errorAction).apply(errorActionArgsProvideDefaults) : undefined),
    };
}

/**
 * Task Spec
 */
export interface TaskSpecArgs {
    /**
     * Name of Task
     */
    name: pulumi.Input<string>;
    /**
     * Task specification
     */
    specification: any;
    /**
     * Target ARM id
     */
    targetId?: pulumi.Input<string>;
}

/**
 * Workflow Version Properties
 */
export interface WorkflowVersionPropertiesArgs {
    /**
     * Execution specification
     */
    specification?: any;
    /**
     * A list of stage specs
     */
    stageSpec: pulumi.Input<pulumi.Input<StageSpecArgs>[]>;
}
