import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Certificate information
 */
export interface CertificateInfoResponse {
    /**
     * The certificate name
     */
    certificateName: string;
    /**
     * The certificate expiry date
     */
    expiryDate: string;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface DatabaseIdentityResponse {
    /**
     * The Azure Active Directory tenant id.
     */
    tenantId: string;
    /**
     * The identity type
     */
    type?: string;
    /**
     * The resource ids of the user assigned identities to use
     */
    userAssignedIdentities?: {[key: string]: DatabaseUserIdentityResponse};
}

/**
 * Database level key used for encryption at rest.
 */
export interface DatabaseKeyResponse {
    /**
     * The database key creation date.
     */
    creationDate: string;
    /**
     * Subregion of the server key.
     */
    subregion: string;
    /**
     * Thumbprint of the database key.
     */
    thumbprint: string;
    /**
     * The database key type. Only supported value is 'AzureKeyVault'.
     */
    type: string;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface DatabaseUserIdentityResponse {
    /**
     * The Azure Active Directory client id.
     */
    clientId: string;
    /**
     * The Azure Active Directory principal id.
     */
    principalId: string;
}

/**
 * Properties for an Azure SQL Database Vulnerability Assessment rule baseline's result.
 */
export interface DatabaseVulnerabilityAssessmentRuleBaselineItemResponse {
    /**
     * The rule baseline result
     */
    result: string[];
}

/**
 * Database specific information
 */
export interface DistributedAvailabilityGroupDatabaseResponse {
    /**
     * Link connected state
     */
    connectedState: string;
    /**
     * The name of the database in link
     */
    databaseName?: string;
    /**
     * Redo lag when Managed Instance link side is primary
     */
    instanceRedoReplicationLagSeconds: number;
    /**
     * Managed instance replica id
     */
    instanceReplicaId: string;
    /**
     * Replication lag when Managed Instance link side is primary
     */
    instanceSendReplicationLagSeconds: number;
    /**
     * Last backup LSN
     */
    lastBackupLsn: string;
    /**
     * Last backup LSN time
     */
    lastBackupTime: string;
    /**
     * Last commit LSN
     */
    lastCommitLsn: string;
    /**
     * Last commit LSN time
     */
    lastCommitTime: string;
    /**
     * Last hardened LSN
     */
    lastHardenedLsn: string;
    /**
     * Last hardened LSN time
     */
    lastHardenedTime: string;
    /**
     * Last received LSN
     */
    lastReceivedLsn: string;
    /**
     * Last received LSN time
     */
    lastReceivedTime: string;
    /**
     * Last sent LSN
     */
    lastSentLsn: string;
    /**
     * Last sent LSN time
     */
    lastSentTime: string;
    /**
     * The most recent link connection error description
     */
    mostRecentLinkError: string;
    /**
     * SQL server certificate validity
     */
    partnerAuthCertValidity: CertificateInfoResponse;
    /**
     * SQL server replica id
     */
    partnerReplicaId: string;
    /**
     * Current link state
     */
    replicaState: string;
    /**
     * Seeding progress
     */
    seedingProgress: string;
    /**
     * Link health state
     */
    synchronizationHealth: string;
}

/**
 * Per database settings of an elastic pool.
 */
export interface ElasticPoolPerDatabaseSettingsResponse {
    /**
     * Auto Pause Delay for per database within pool
     */
    autoPauseDelay?: number;
    /**
     * The maximum capacity any one database can consume.
     */
    maxCapacity?: number;
    /**
     * The minimum capacity all databases are guaranteed.
     */
    minCapacity?: number;
}

/**
 * Read-only endpoint of the failover group instance.
 */
export interface FailoverGroupReadOnlyEndpointResponse {
    /**
     * Failover policy of the read-only endpoint for the failover group.
     */
    failoverPolicy?: string;
    /**
     * The target partner server where the read-only endpoint points to.
     */
    targetServer?: string;
}

/**
 * Read-write endpoint of the failover group instance.
 */
export interface FailoverGroupReadWriteEndpointResponse {
    /**
     * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
     */
    failoverPolicy: string;
    /**
     * Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
     */
    failoverWithDataLossGracePeriodMinutes?: number;
}

/**
 * Read-only endpoint of the failover group instance.
 */
export interface InstanceFailoverGroupReadOnlyEndpointResponse {
    /**
     * Failover policy of the read-only endpoint for the failover group.
     */
    failoverPolicy?: string;
}

/**
 * Read-write endpoint of the failover group instance.
 */
export interface InstanceFailoverGroupReadWriteEndpointResponse {
    /**
     * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
     */
    failoverPolicy: string;
    /**
     * Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
     */
    failoverWithDataLossGracePeriodMinutes?: number;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface JobAgentIdentityResponse {
    /**
     * The job agent identity tenant id
     */
    tenantId?: string;
    /**
     * The job agent identity type
     */
    type: string;
    /**
     * The resource ids of the user assigned identities to use
     */
    userAssignedIdentities?: {[key: string]: JobAgentUserAssignedIdentityResponse};
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface JobAgentUserAssignedIdentityResponse {
    /**
     * The Azure Active Directory client id.
     */
    clientId: string;
    /**
     * The Azure Active Directory principal id.
     */
    principalId: string;
}

/**
 * Scheduling properties of a job.
 */
export interface JobScheduleResponse {
    /**
     * Whether or not the schedule is enabled.
     */
    enabled?: boolean;
    /**
     * Schedule end time.
     */
    endTime?: string;
    /**
     * Value of the schedule's recurring interval, if the ScheduleType is recurring. ISO8601 duration format.
     */
    interval?: string;
    /**
     * Schedule start time.
     */
    startTime?: string;
    /**
     * Schedule interval type
     */
    type?: string;
}
/**
 * jobScheduleResponseProvideDefaults sets the appropriate defaults for JobScheduleResponse
 */
export function jobScheduleResponseProvideDefaults(val: JobScheduleResponse): JobScheduleResponse {
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
export interface JobStepActionResponse {
    /**
     * The source of the action to execute.
     */
    source?: string;
    /**
     * Type of action being executed by the job step.
     */
    type?: string;
    /**
     * The action value, for example the text of the T-SQL script to execute.
     */
    value: string;
}
/**
 * jobStepActionResponseProvideDefaults sets the appropriate defaults for JobStepActionResponse
 */
export function jobStepActionResponseProvideDefaults(val: JobStepActionResponse): JobStepActionResponse {
    return {
        ...val,
        source: (val.source) ?? "Inline",
        type: (val.type) ?? "TSql",
    };
}

/**
 * The execution options of a job step.
 */
export interface JobStepExecutionOptionsResponse {
    /**
     * Initial delay between retries for job step execution.
     */
    initialRetryIntervalSeconds?: number;
    /**
     * The maximum amount of time to wait between retries for job step execution.
     */
    maximumRetryIntervalSeconds?: number;
    /**
     * Maximum number of times the job step will be reattempted if the first attempt fails.
     */
    retryAttempts?: number;
    /**
     * The backoff multiplier for the time between retries.
     */
    retryIntervalBackoffMultiplier?: number;
    /**
     * Execution timeout for the job step.
     */
    timeoutSeconds?: number;
}
/**
 * jobStepExecutionOptionsResponseProvideDefaults sets the appropriate defaults for JobStepExecutionOptionsResponse
 */
export function jobStepExecutionOptionsResponseProvideDefaults(val: JobStepExecutionOptionsResponse): JobStepExecutionOptionsResponse {
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
export interface JobStepOutputResponse {
    /**
     * The resource ID of the credential to use to connect to the output destination.
     */
    credential?: string;
    /**
     * The output destination database.
     */
    databaseName: string;
    /**
     * The output destination resource group.
     */
    resourceGroupName?: string;
    /**
     * The output destination schema.
     */
    schemaName?: string;
    /**
     * The output destination server name.
     */
    serverName: string;
    /**
     * The output destination subscription id.
     */
    subscriptionId?: string;
    /**
     * The output destination table.
     */
    tableName: string;
    /**
     * The output destination type.
     */
    type?: string;
}
/**
 * jobStepOutputResponseProvideDefaults sets the appropriate defaults for JobStepOutputResponse
 */
export function jobStepOutputResponseProvideDefaults(val: JobStepOutputResponse): JobStepOutputResponse {
    return {
        ...val,
        schemaName: (val.schemaName) ?? "dbo",
        type: (val.type) ?? "SqlDatabase",
    };
}

/**
 * A job target, for example a specific database or a container of databases that is evaluated during job execution.
 */
export interface JobTargetResponse {
    /**
     * The target database name.
     */
    databaseName?: string;
    /**
     * The target elastic pool name.
     */
    elasticPoolName?: string;
    /**
     * Whether the target is included or excluded from the group.
     */
    membershipType?: string;
    /**
     * The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target.
     */
    refreshCredential?: string;
    /**
     * The target server name.
     */
    serverName?: string;
    /**
     * The target shard map.
     */
    shardMapName?: string;
    /**
     * The target type.
     */
    type: string;
}
/**
 * jobTargetResponseProvideDefaults sets the appropriate defaults for JobTargetResponse
 */
export function jobTargetResponseProvideDefaults(val: JobTargetResponse): JobTargetResponse {
    return {
        ...val,
        membershipType: (val.membershipType) ?? "Include",
    };
}

/**
 * Properties of a active directory administrator.
 */
export interface ManagedInstanceExternalAdministratorResponse {
    /**
     * Type of the sever administrator.
     */
    administratorType?: string;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    azureADOnlyAuthentication?: boolean;
    /**
     * Login name of the server administrator.
     */
    login?: string;
    /**
     * Principal Type of the sever administrator.
     */
    principalType?: string;
    /**
     * SID (object ID) of the server administrator.
     */
    sid?: string;
    /**
     * Tenant ID of the administrator.
     */
    tenantId?: string;
}

/**
 * Pairs of Managed Instances in the failover group.
 */
export interface ManagedInstancePairInfoResponse {
    /**
     * Id of Partner Managed Instance in pair.
     */
    partnerManagedInstanceId?: string;
    /**
     * Id of Primary Managed Instance in pair.
     */
    primaryManagedInstanceId?: string;
}

/**
 * A private endpoint connection under a managed instance
 */
export interface ManagedInstancePecPropertyResponse {
    /**
     * Resource ID.
     */
    id: string;
    /**
     * Private endpoint connection properties
     */
    properties: ManagedInstancePrivateEndpointConnectionPropertiesResponse;
}

/**
 * Properties of a private endpoint connection.
 */
export interface ManagedInstancePrivateEndpointConnectionPropertiesResponse {
    /**
     * Private endpoint which the connection belongs to.
     */
    privateEndpoint?: ManagedInstancePrivateEndpointPropertyResponse;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    privateLinkServiceConnectionState?: ManagedInstancePrivateLinkServiceConnectionStatePropertyResponse;
    /**
     * State of the Private Endpoint Connection.
     */
    provisioningState: string;
}

export interface ManagedInstancePrivateEndpointPropertyResponse {
    /**
     * Resource id of the private endpoint.
     */
    id?: string;
}

export interface ManagedInstancePrivateLinkServiceConnectionStatePropertyResponse {
    /**
     * The private link service connection description.
     */
    actionsRequired: string;
    /**
     * The private link service connection description.
     */
    description: string;
    /**
     * The private link service connection status.
     */
    status: string;
}

/**
 * Partner server information for the failover group.
 */
export interface PartnerInfoResponse {
    /**
     * Resource identifier of the partner server.
     */
    id: string;
    /**
     * Geo location of the partner server.
     */
    location: string;
    /**
     * Replication role of the partner server.
     */
    replicationRole: string;
}

/**
 * Partner region information for the failover group.
 */
export interface PartnerRegionInfoResponse {
    /**
     * Geo location of the partner managed instances.
     */
    location?: string;
    /**
     * Replication role of the partner managed instances.
     */
    replicationRole: string;
}

/**
 * Properties of a private endpoint connection.
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * Group IDs.
     */
    groupIds: string[];
    /**
     * Private endpoint which the connection belongs to.
     */
    privateEndpoint?: PrivateEndpointPropertyResponse;
    /**
     * Connection state of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStatePropertyResponse;
    /**
     * State of the private endpoint connection.
     */
    provisioningState: string;
}

export interface PrivateEndpointPropertyResponse {
    /**
     * Resource id of the private endpoint.
     */
    id?: string;
}

export interface PrivateLinkServiceConnectionStatePropertyResponse {
    /**
     * The actions required for private link service connection.
     */
    actionsRequired: string;
    /**
     * The private link service connection description.
     */
    description: string;
    /**
     * The private link service connection status.
     */
    status: string;
}

/**
 * Contains error information for an Azure SQL Database, Server or Elastic Pool Recommended Action.
 */
export interface RecommendedActionErrorInfoResponse {
    /**
     * Gets the reason why the recommended action was put to error state. e.g., DatabaseHasQdsOff, IndexAlreadyExists
     */
    errorCode: string;
    /**
     * Gets whether the error could be ignored and recommended action could be retried. Possible values are: Yes/No
     */
    isRetryable: string;
}

/**
 * Contains information of estimated or observed impact on various metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action.
 */
export interface RecommendedActionImpactRecordResponse {
    /**
     * Gets the absolute value of this dimension if applicable. e.g., Number of Queries affected
     */
    absoluteValue: number;
    /**
     * Gets the absolute change in the value of this dimension. e.g., Absolute Disk space change in Megabytes
     */
    changeValueAbsolute: number;
    /**
     * Gets the relative change in the value of this dimension. e.g., Relative Disk space change in Percentage
     */
    changeValueRelative: number;
    /**
     * Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected.
     */
    dimensionName: string;
    /**
     * Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected.
     */
    unit: string;
}

/**
 * Contains information for manual implementation for an Azure SQL Database, Server or Elastic Pool Recommended Action.
 */
export interface RecommendedActionImplementationInfoResponse {
    /**
     * Gets the method in which this recommended action can be manually implemented. e.g., TSql, AzurePowerShell.
     */
    method: string;
    /**
     * Gets the manual implementation script. e.g., T-SQL script that could be executed on the database.
     */
    script: string;
}

/**
 * Contains time series of various impacted metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action.
 */
export interface RecommendedActionMetricInfoResponse {
    /**
     * Gets the name of the metric. e.g., CPU, Number of Queries.
     */
    metricName: string;
    /**
     * Gets the start time of time interval given by this MetricInfo.
     */
    startTime: string;
    /**
     * Gets the duration of time interval for the value given by this MetricInfo. e.g., PT1H (1 hour)
     */
    timeGrain: string;
    /**
     * Gets the unit in which metric is measured. e.g., DTU, Frequency
     */
    unit: string;
    /**
     * Gets the value of the metric in the time interval given by this MetricInfo.
     */
    value: number;
}

/**
 * Database, Server or Elastic Pool Recommended Action.
 */
export interface RecommendedActionResponse {
    /**
     * Gets additional details specific to this recommended action.
     */
    details: {[key: string]: string};
    /**
     * Gets the error details if and why this recommended action is put to error state.
     */
    errorDetails: RecommendedActionErrorInfoResponse;
    /**
     * Gets the estimated impact info for this recommended action e.g., Estimated CPU gain, Estimated Disk Space change
     */
    estimatedImpact: RecommendedActionImpactRecordResponse[];
    /**
     * Gets the time taken for applying this recommended action on user resource. e.g., time taken for index creation
     */
    executeActionDuration: string;
    /**
     * Gets if approval for applying this recommended action was given by user/system.
     */
    executeActionInitiatedBy: string;
    /**
     * Gets the time when this recommended action was approved for execution.
     */
    executeActionInitiatedTime: string;
    /**
     * Gets the time when system started applying this recommended action on the user resource. e.g., index creation start time
     */
    executeActionStartTime: string;
    /**
     * Resource ID.
     */
    id: string;
    /**
     * Gets the implementation details of this recommended action for user to apply it manually.
     */
    implementationDetails: RecommendedActionImplementationInfoResponse;
    /**
     * Gets if this recommended action was suggested some time ago but user chose to ignore this and system added a new recommended action again.
     */
    isArchivedAction: boolean;
    /**
     * Gets if this recommended action is actionable by user
     */
    isExecutableAction: boolean;
    /**
     * Gets if changes applied by this recommended action can be reverted by user
     */
    isRevertableAction: boolean;
    /**
     * Resource kind.
     */
    kind: string;
    /**
     * Gets time when this recommended action was last refreshed.
     */
    lastRefresh: string;
    /**
     * Gets the linked objects, if any.
     */
    linkedObjects: string[];
    /**
     * Resource location.
     */
    location: string;
    /**
     * Resource name.
     */
    name: string;
    /**
     * Gets the observed/actual impact info for this recommended action e.g., Actual CPU gain, Actual Disk Space change
     */
    observedImpact: RecommendedActionImpactRecordResponse[];
    /**
     * Gets the reason for recommending this action. e.g., DuplicateIndex
     */
    recommendationReason: string;
    /**
     * Gets the time taken for reverting changes of this recommended action on user resource. e.g., time taken for dropping the created index.
     */
    revertActionDuration: string;
    /**
     * Gets if approval for reverting this recommended action was given by user/system.
     */
    revertActionInitiatedBy: string;
    /**
     * Gets the time when this recommended action was approved for revert.
     */
    revertActionInitiatedTime: string;
    /**
     * Gets the time when system started reverting changes of this recommended action on user resource. e.g., time when index drop is executed.
     */
    revertActionStartTime: string;
    /**
     * Gets the impact of this recommended action. Possible values are 1 - Low impact, 2 - Medium Impact and 3 - High Impact
     */
    score: number;
    /**
     * Gets the info of the current state the recommended action is in.
     */
    state: RecommendedActionStateInfoResponse;
    /**
     * Gets the time series info of metrics for this recommended action e.g., CPU consumption time series
     */
    timeSeries: RecommendedActionMetricInfoResponse[];
    /**
     * Resource type.
     */
    type: string;
    /**
     * Gets the time since when this recommended action is valid.
     */
    validSince: string;
}

/**
 * Contains information of current state for an Azure SQL Database, Server or Elastic Pool Recommended Action.
 */
export interface RecommendedActionStateInfoResponse {
    /**
     * Gets who initiated the execution of this recommended action. Possible Value are: User    -> When user explicity notified system to apply the recommended action. System  -> When auto-execute status of this advisor was set to 'Enabled', in which case the system applied it.
     */
    actionInitiatedBy: string;
    /**
     * Current state the recommended action is in. Some commonly used states are: Active      -> recommended action is active and no action has been taken yet. Pending     -> recommended action is approved for and is awaiting execution. Executing   -> recommended action is being applied on the user database. Verifying   -> recommended action was applied and is being verified of its usefulness by the system. Success     -> recommended action was applied and improvement found during verification. Pending Revert  -> verification found little or no improvement so recommended action is queued for revert or user has manually reverted. Reverting   -> changes made while applying recommended action are being reverted on the user database. Reverted    -> successfully reverted the changes made by recommended action on user database. Ignored     -> user explicitly ignored/discarded the recommended action. 
     */
    currentValue: string;
    /**
     * Gets the time when the state was last modified
     */
    lastModified: string;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface ResourceIdentityResponse {
    /**
     * The Azure Active Directory principal id.
     */
    principalId: string;
    /**
     * The Azure Active Directory tenant id.
     */
    tenantId: string;
    /**
     * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
     */
    type?: string;
    /**
     * The resource ids of the user assigned identities to use
     */
    userAssignedIdentities?: {[key: string]: UserIdentityResponse};
}

/**
 * Schedule info describing when the server should be started or stopped.
 */
export interface ScheduleItemResponse {
    /**
     * Start day.
     */
    startDay: string;
    /**
     * Start time.
     */
    startTime: string;
    /**
     * Stop day.
     */
    stopDay: string;
    /**
     * Stop time.
     */
    stopTime: string;
}

/**
 * Properties of a active directory administrator.
 */
export interface ServerExternalAdministratorResponse {
    /**
     * Type of the sever administrator.
     */
    administratorType?: string;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    azureADOnlyAuthentication?: boolean;
    /**
     * Login name of the server administrator.
     */
    login?: string;
    /**
     * Principal Type of the sever administrator.
     */
    principalType?: string;
    /**
     * SID (object ID) of the server administrator.
     */
    sid?: string;
    /**
     * Tenant ID of the administrator.
     */
    tenantId?: string;
}

/**
 * Server info for the server trust group.
 */
export interface ServerInfoResponse {
    /**
     * Server Id.
     */
    serverId: string;
}

/**
 * A private endpoint connection under a server
 */
export interface ServerPrivateEndpointConnectionResponse {
    /**
     * Resource ID.
     */
    id: string;
    /**
     * Private endpoint connection properties
     */
    properties: PrivateEndpointConnectionPropertiesResponse;
}

/**
 * The managed instance's service principal configuration for a resource.
 */
export interface ServicePrincipalResponse {
    /**
     * The Azure Active Directory application client id.
     */
    clientId: string;
    /**
     * The Azure Active Directory application object id.
     */
    principalId: string;
    /**
     * The Azure Active Directory tenant id.
     */
    tenantId: string;
    /**
     * Service principal type.
     */
    type?: string;
}

/**
 * An ARM Resource SKU.
 */
export interface SkuResponse {
    /**
     * Capacity of the particular SKU.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU, typically, a letter + Number code, e.g. P3.
     */
    name: string;
    /**
     * Size of the particular SKU
     */
    size?: string;
    /**
     * The tier or edition of the particular SKU, e.g. Basic, Premium.
     */
    tier?: string;
}

/**
 * Properties of sync group schema.
 */
export interface SyncGroupSchemaResponse {
    /**
     * Name of master sync member where the schema is from.
     */
    masterSyncMemberName?: string;
    /**
     * List of tables in sync group schema.
     */
    tables?: SyncGroupSchemaTableResponse[];
}

/**
 * Properties of column in sync group table.
 */
export interface SyncGroupSchemaTableColumnResponse {
    /**
     * Data size of the column.
     */
    dataSize?: string;
    /**
     * Data type of the column.
     */
    dataType?: string;
    /**
     * Quoted name of sync group table column.
     */
    quotedName?: string;
}

/**
 * Properties of table in sync group schema.
 */
export interface SyncGroupSchemaTableResponse {
    /**
     * List of columns in sync group schema.
     */
    columns?: SyncGroupSchemaTableColumnResponse[];
    /**
     * Quoted name of sync group schema table.
     */
    quotedName?: string;
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
 * Azure Active Directory identity configuration for a resource.
 */
export interface UserIdentityResponse {
    /**
     * The Azure Active Directory client id.
     */
    clientId: string;
    /**
     * The Azure Active Directory principal id.
     */
    principalId: string;
}

/**
 * Properties of a Vulnerability Assessment recurring scans.
 */
export interface VulnerabilityAssessmentRecurringScansPropertiesResponse {
    /**
     * Specifies that the schedule scan notification will be is sent to the subscription administrators.
     */
    emailSubscriptionAdmins?: boolean;
    /**
     * Specifies an array of e-mail addresses to which the scan notification is sent.
     */
    emails?: string[];
    /**
     * Recurring scans state.
     */
    isEnabled?: boolean;
}
/**
 * vulnerabilityAssessmentRecurringScansPropertiesResponseProvideDefaults sets the appropriate defaults for VulnerabilityAssessmentRecurringScansPropertiesResponse
 */
export function vulnerabilityAssessmentRecurringScansPropertiesResponseProvideDefaults(val: VulnerabilityAssessmentRecurringScansPropertiesResponse): VulnerabilityAssessmentRecurringScansPropertiesResponse {
    return {
        ...val,
        emailSubscriptionAdmins: (val.emailSubscriptionAdmins) ?? true,
    };
}
