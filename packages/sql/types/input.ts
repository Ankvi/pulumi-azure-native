import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface DatabaseIdentityArgs {
    /**
     * The identity type
     */
    type?: pulumi.Input<string | enums.DatabaseIdentityType | undefined>;
    /**
     * The resource ids of the user assigned identities to use
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Properties for an Azure SQL Database Vulnerability Assessment rule baseline's result.
 */
export interface DatabaseVulnerabilityAssessmentRuleBaselineItemArgs {
    /**
     * The rule baseline result
     */
    result: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Database specific information
 */
export interface DistributedAvailabilityGroupDatabaseArgs {
    /**
     * The name of the database in link
     */
    databaseName?: pulumi.Input<string | undefined>;
}

/**
 * Per database settings of an elastic pool.
 */
export interface ElasticPoolPerDatabaseSettingsArgs {
    /**
     * Auto Pause Delay for per database within pool
     */
    autoPauseDelay?: pulumi.Input<number | undefined>;
    /**
     * The maximum capacity any one database can consume.
     */
    maxCapacity?: pulumi.Input<number | undefined>;
    /**
     * The minimum capacity all databases are guaranteed.
     */
    minCapacity?: pulumi.Input<number | undefined>;
}

/**
 * Read-only endpoint of the failover group instance.
 */
export interface FailoverGroupReadOnlyEndpointArgs {
    /**
     * Failover policy of the read-only endpoint for the failover group.
     */
    failoverPolicy?: pulumi.Input<string | enums.ReadOnlyEndpointFailoverPolicy | undefined>;
    /**
     * The target partner server where the read-only endpoint points to.
     */
    targetServer?: pulumi.Input<string | undefined>;
}

/**
 * Read-write endpoint of the failover group instance.
 */
export interface FailoverGroupReadWriteEndpointArgs {
    /**
     * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
     */
    failoverPolicy: pulumi.Input<string | enums.ReadWriteEndpointFailoverPolicy>;
    /**
     * Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
     */
    failoverWithDataLossGracePeriodMinutes?: pulumi.Input<number | undefined>;
}

/**
 * Read-only endpoint of the failover group instance.
 */
export interface InstanceFailoverGroupReadOnlyEndpointArgs {
    /**
     * Failover policy of the read-only endpoint for the failover group.
     */
    failoverPolicy?: pulumi.Input<string | enums.ReadOnlyEndpointFailoverPolicy | undefined>;
}

/**
 * Read-write endpoint of the failover group instance.
 */
export interface InstanceFailoverGroupReadWriteEndpointArgs {
    /**
     * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
     */
    failoverPolicy: pulumi.Input<string | enums.ReadWriteEndpointFailoverPolicy>;
    /**
     * Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
     */
    failoverWithDataLossGracePeriodMinutes?: pulumi.Input<number | undefined>;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface JobAgentIdentityArgs {
    /**
     * The job agent identity tenant id
     */
    tenantId?: pulumi.Input<string | undefined>;
    /**
     * The job agent identity type
     */
    type: pulumi.Input<string | enums.JobAgentIdentityType>;
    /**
     * The resource ids of the user assigned identities to use
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Scheduling properties of a job.
 */
export interface JobScheduleArgs {
    /**
     * Whether or not the schedule is enabled.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Schedule end time.
     */
    endTime?: pulumi.Input<string | undefined>;
    /**
     * Value of the schedule's recurring interval, if the ScheduleType is recurring. ISO8601 duration format.
     */
    interval?: pulumi.Input<string | undefined>;
    /**
     * Schedule start time.
     */
    startTime?: pulumi.Input<string | undefined>;
    /**
     * Schedule interval type
     */
    type?: pulumi.Input<enums.JobScheduleType | undefined>;
}
/**
 * jobScheduleArgsProvideDefaults sets the appropriate defaults for JobScheduleArgs
 */
export function jobScheduleArgsProvideDefaults(val: JobScheduleArgs): JobScheduleArgs {
    return {
        ...val,
        endTime: (val.endTime) ?? "9999-12-31T17:29:59+05:30",
        startTime: (val.startTime) ?? "0001-01-01T05:30:00+05:30",
        type: (val.type) ?? "Once",
    };
}

/**
 * The action to be executed by a job step.
 */
export interface JobStepActionArgs {
    /**
     * The source of the action to execute.
     */
    source?: pulumi.Input<string | enums.JobStepActionSource | undefined>;
    /**
     * Type of action being executed by the job step.
     */
    type?: pulumi.Input<string | enums.JobStepActionType | undefined>;
    /**
     * The action value, for example the text of the T-SQL script to execute.
     */
    value: pulumi.Input<string>;
}
/**
 * jobStepActionArgsProvideDefaults sets the appropriate defaults for JobStepActionArgs
 */
export function jobStepActionArgsProvideDefaults(val: JobStepActionArgs): JobStepActionArgs {
    return {
        ...val,
        source: (val.source) ?? "Inline",
        type: (val.type) ?? "TSql",
    };
}

/**
 * The execution options of a job step.
 */
export interface JobStepExecutionOptionsArgs {
    /**
     * Initial delay between retries for job step execution.
     */
    initialRetryIntervalSeconds?: pulumi.Input<number | undefined>;
    /**
     * The maximum amount of time to wait between retries for job step execution.
     */
    maximumRetryIntervalSeconds?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of times the job step will be reattempted if the first attempt fails.
     */
    retryAttempts?: pulumi.Input<number | undefined>;
    /**
     * The backoff multiplier for the time between retries.
     */
    retryIntervalBackoffMultiplier?: pulumi.Input<number | undefined>;
    /**
     * Execution timeout for the job step.
     */
    timeoutSeconds?: pulumi.Input<number | undefined>;
}
/**
 * jobStepExecutionOptionsArgsProvideDefaults sets the appropriate defaults for JobStepExecutionOptionsArgs
 */
export function jobStepExecutionOptionsArgsProvideDefaults(val: JobStepExecutionOptionsArgs): JobStepExecutionOptionsArgs {
    return {
        ...val,
        initialRetryIntervalSeconds: (val.initialRetryIntervalSeconds) ?? 1,
        maximumRetryIntervalSeconds: (val.maximumRetryIntervalSeconds) ?? 120,
        retryAttempts: (val.retryAttempts) ?? 10,
        retryIntervalBackoffMultiplier: (val.retryIntervalBackoffMultiplier) ?? 2,
        timeoutSeconds: (val.timeoutSeconds) ?? 43200,
    };
}

/**
 * The output configuration of a job step.
 */
export interface JobStepOutputArgs {
    /**
     * The resource ID of the credential to use to connect to the output destination.
     */
    credential?: pulumi.Input<string | undefined>;
    /**
     * The output destination database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The output destination resource group.
     */
    resourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * The output destination schema.
     */
    schemaName?: pulumi.Input<string | undefined>;
    /**
     * The output destination server name.
     */
    serverName: pulumi.Input<string>;
    /**
     * The output destination subscription id.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * The output destination table.
     */
    tableName: pulumi.Input<string>;
    /**
     * The output destination type.
     */
    type?: pulumi.Input<string | enums.JobStepOutputType | undefined>;
}
/**
 * jobStepOutputArgsProvideDefaults sets the appropriate defaults for JobStepOutputArgs
 */
export function jobStepOutputArgsProvideDefaults(val: JobStepOutputArgs): JobStepOutputArgs {
    return {
        ...val,
        schemaName: (val.schemaName) ?? "dbo",
        type: (val.type) ?? "SqlDatabase",
    };
}

/**
 * A job target, for example a specific database or a container of databases that is evaluated during job execution.
 */
export interface JobTargetArgs {
    /**
     * The target database name.
     */
    databaseName?: pulumi.Input<string | undefined>;
    /**
     * The target elastic pool name.
     */
    elasticPoolName?: pulumi.Input<string | undefined>;
    /**
     * Whether the target is included or excluded from the group.
     */
    membershipType?: pulumi.Input<enums.JobTargetGroupMembershipType | undefined>;
    /**
     * The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target.
     */
    refreshCredential?: pulumi.Input<string | undefined>;
    /**
     * The target server name.
     */
    serverName?: pulumi.Input<string | undefined>;
    /**
     * The target shard map.
     */
    shardMapName?: pulumi.Input<string | undefined>;
    /**
     * The target type.
     */
    type: pulumi.Input<string | enums.JobTargetType>;
}
/**
 * jobTargetArgsProvideDefaults sets the appropriate defaults for JobTargetArgs
 */
export function jobTargetArgsProvideDefaults(val: JobTargetArgs): JobTargetArgs {
    return {
        ...val,
        membershipType: (val.membershipType) ?? "Include",
    };
}

/**
 * Properties of a active directory administrator.
 */
export interface ManagedInstanceExternalAdministratorArgs {
    /**
     * Type of the sever administrator.
     */
    administratorType?: pulumi.Input<string | enums.AdministratorType | undefined>;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    azureADOnlyAuthentication?: pulumi.Input<boolean | undefined>;
    /**
     * Login name of the server administrator.
     */
    login?: pulumi.Input<string | undefined>;
    /**
     * Principal Type of the sever administrator.
     */
    principalType?: pulumi.Input<string | enums.PrincipalType | undefined>;
    /**
     * SID (object ID) of the server administrator.
     */
    sid?: pulumi.Input<string | undefined>;
    /**
     * Tenant ID of the administrator.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Pairs of Managed Instances in the failover group.
 */
export interface ManagedInstancePairInfoArgs {
    /**
     * Id of Partner Managed Instance in pair.
     */
    partnerManagedInstanceId?: pulumi.Input<string | undefined>;
    /**
     * Id of Primary Managed Instance in pair.
     */
    primaryManagedInstanceId?: pulumi.Input<string | undefined>;
}

export interface ManagedInstancePrivateEndpointPropertyArgs {
    /**
     * Resource id of the private endpoint.
     */
    id?: pulumi.Input<string | undefined>;
}

export interface ManagedInstancePrivateLinkServiceConnectionStatePropertyArgs {
    /**
     * The private link service connection description.
     */
    description: pulumi.Input<string>;
    /**
     * The private link service connection status.
     */
    status: pulumi.Input<string>;
}

/**
 * Partner server information for the failover group.
 */
export interface PartnerInfoArgs {
    /**
     * Resource identifier of the partner server.
     */
    id: pulumi.Input<string>;
}

/**
 * Partner region information for the failover group.
 */
export interface PartnerRegionInfoArgs {
    /**
     * Geo location of the partner managed instances.
     */
    location?: pulumi.Input<string | undefined>;
}

export interface PrivateEndpointPropertyArgs {
    /**
     * Resource id of the private endpoint.
     */
    id?: pulumi.Input<string | undefined>;
}

export interface PrivateLinkServiceConnectionStatePropertyArgs {
    /**
     * The private link service connection description.
     */
    description: pulumi.Input<string>;
    /**
     * The private link service connection status.
     */
    status: pulumi.Input<string | enums.PrivateLinkServiceConnectionStateStatus>;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface ResourceIdentityArgs {
    /**
     * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
     */
    type?: pulumi.Input<string | enums.IdentityType | undefined>;
    /**
     * The resource ids of the user assigned identities to use
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Schedule info describing when the server should be started or stopped.
 */
export interface ScheduleItemArgs {
    /**
     * Start day.
     */
    startDay: pulumi.Input<string | enums.DayOfWeek>;
    /**
     * Start time.
     */
    startTime: pulumi.Input<string>;
    /**
     * Stop day.
     */
    stopDay: pulumi.Input<string | enums.DayOfWeek>;
    /**
     * Stop time.
     */
    stopTime: pulumi.Input<string>;
}

/**
 * Properties of a active directory administrator.
 */
export interface ServerExternalAdministratorArgs {
    /**
     * Type of the sever administrator.
     */
    administratorType?: pulumi.Input<string | enums.AdministratorType | undefined>;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    azureADOnlyAuthentication?: pulumi.Input<boolean | undefined>;
    /**
     * Login name of the server administrator.
     */
    login?: pulumi.Input<string | undefined>;
    /**
     * Principal Type of the sever administrator.
     */
    principalType?: pulumi.Input<string | enums.PrincipalType | undefined>;
    /**
     * SID (object ID) of the server administrator.
     */
    sid?: pulumi.Input<string | undefined>;
    /**
     * Tenant ID of the administrator.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Server info for the server trust group.
 */
export interface ServerInfoArgs {
    /**
     * Server Id.
     */
    serverId: pulumi.Input<string>;
}

/**
 * The managed instance's service principal configuration for a resource.
 */
export interface ServicePrincipalArgs {
    /**
     * Service principal type.
     */
    type?: pulumi.Input<string | enums.ServicePrincipalType | undefined>;
}

/**
 * An ARM Resource SKU.
 */
export interface SkuArgs {
    /**
     * Capacity of the particular SKU.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the SKU, typically, a letter + Number code, e.g. P3.
     */
    name: pulumi.Input<string>;
    /**
     * Size of the particular SKU
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * The tier or edition of the particular SKU, e.g. Basic, Premium.
     */
    tier?: pulumi.Input<string | undefined>;
}

/**
 * Properties of sync group schema.
 */
export interface SyncGroupSchemaArgs {
    /**
     * Name of master sync member where the schema is from.
     */
    masterSyncMemberName?: pulumi.Input<string | undefined>;
    /**
     * List of tables in sync group schema.
     */
    tables?: pulumi.Input<pulumi.Input<SyncGroupSchemaTableArgs>[] | undefined>;
}

/**
 * Properties of table in sync group schema.
 */
export interface SyncGroupSchemaTableArgs {
    /**
     * List of columns in sync group schema.
     */
    columns?: pulumi.Input<pulumi.Input<SyncGroupSchemaTableColumnArgs>[] | undefined>;
    /**
     * Quoted name of sync group schema table.
     */
    quotedName?: pulumi.Input<string | undefined>;
}

/**
 * Properties of column in sync group table.
 */
export interface SyncGroupSchemaTableColumnArgs {
    /**
     * Data size of the column.
     */
    dataSize?: pulumi.Input<string | undefined>;
    /**
     * Data type of the column.
     */
    dataType?: pulumi.Input<string | undefined>;
    /**
     * Quoted name of sync group table column.
     */
    quotedName?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a Vulnerability Assessment recurring scans.
 */
export interface VulnerabilityAssessmentRecurringScansPropertiesArgs {
    /**
     * Specifies that the schedule scan notification will be is sent to the subscription administrators.
     */
    emailSubscriptionAdmins?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies an array of e-mail addresses to which the scan notification is sent.
     */
    emails?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Recurring scans state.
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
}
/**
 * vulnerabilityAssessmentRecurringScansPropertiesArgsProvideDefaults sets the appropriate defaults for VulnerabilityAssessmentRecurringScansPropertiesArgs
 */
export function vulnerabilityAssessmentRecurringScansPropertiesArgsProvideDefaults(val: VulnerabilityAssessmentRecurringScansPropertiesArgs): VulnerabilityAssessmentRecurringScansPropertiesArgs {
    return {
        ...val,
        emailSubscriptionAdmins: (val.emailSubscriptionAdmins) ?? true,
    };
}
