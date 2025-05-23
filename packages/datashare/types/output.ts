import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Identity of resource
 */
export interface IdentityResponse {
    /**
     * service principal Id
     */
    principalId: string;
    /**
     * Tenant Id
     */
    tenantId: string;
    /**
     * Identity Type
     */
    type?: string;
}

/**
 * A type of synchronization setting based on schedule
 */
export interface ScheduledSourceSynchronizationSettingResponse {
    /**
     * Kind of synchronization setting on share.
     * Expected value is 'ScheduleBased'.
     */
    kind: "ScheduleBased";
    /**
     * Recurrence Interval
     */
    recurrenceInterval?: string;
    /**
     * Synchronization time
     */
    synchronizationTime?: string;
}

/**
 * A ShareSubscriptionSynchronization data transfer object.
 */
export interface ShareSubscriptionSynchronizationResponse {
    /**
     * Synchronization duration
     */
    durationMs: number;
    /**
     * End time of synchronization
     */
    endTime: string;
    /**
     * message of Synchronization
     */
    message: string;
    /**
     * start time of synchronization
     */
    startTime: string;
    /**
     * Raw Status
     */
    status: string;
    /**
     * Synchronization id
     */
    synchronizationId: string;
    /**
     * Synchronization Mode
     */
    synchronizationMode: string;
}

/**
 * A ShareSynchronization data transfer object.
 */
export interface ShareSynchronizationResponse {
    /**
     * Email of the user who created the synchronization
     */
    consumerEmail?: string;
    /**
     * Name of the user who created the synchronization
     */
    consumerName?: string;
    /**
     * Tenant name of the consumer who created the synchronization
     */
    consumerTenantName?: string;
    /**
     * synchronization duration
     */
    durationMs?: number;
    /**
     * End time of synchronization
     */
    endTime?: string;
    /**
     * message of synchronization
     */
    message?: string;
    /**
     * start time of synchronization
     */
    startTime?: string;
    /**
     * Raw Status
     */
    status?: string;
    /**
     * Synchronization id
     */
    synchronizationId?: string;
    /**
     * Synchronization mode
     */
    synchronizationMode: string;
}

/**
 * Synchronization details at data set level
 */
export interface SynchronizationDetailsResponse {
    /**
     * Id of data set
     */
    dataSetId: string;
    /**
     * Type of the data set
     */
    dataSetType: string;
    /**
     * Duration of data set level copy
     */
    durationMs: number;
    /**
     * End time of data set level copy
     */
    endTime: string;
    /**
     * The number of files read from the source data set
     */
    filesRead: number;
    /**
     * The number of files written into the sink data set
     */
    filesWritten: number;
    /**
     * Error message if any
     */
    message: string;
    /**
     * Name of the data set
     */
    name: string;
    /**
     * The number of files copied into the sink data set
     */
    rowsCopied: number;
    /**
     * The number of rows read from the source data set.
     */
    rowsRead: number;
    /**
     * The size of the data read from the source data set in bytes
     */
    sizeRead: number;
    /**
     * The size of the data written into the sink data set in bytes
     */
    sizeWritten: number;
    /**
     * Start time of data set level copy
     */
    startTime: string;
    /**
     * Raw Status
     */
    status: string;
    /**
     * The vCore units consumed for the data set synchronization
     */
    vCore: number;
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
     * The type of identity that last modified the resource.
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
 * Table level sharing properties dto for kusto data set properties
 */
export interface TableLevelSharingPropertiesResponse {
    /**
     * External tables to be excluded in the data set
     */
    externalTablesToExclude?: string[];
    /**
     * External tables to be included in the data set
     */
    externalTablesToInclude?: string[];
    /**
     * Materialized views to be excluded in the data set
     */
    materializedViewsToExclude?: string[];
    /**
     * Materialized views to be included in the data set
     */
    materializedViewsToInclude?: string[];
    /**
     * Tables to be excluded in the data set
     */
    tablesToExclude?: string[];
    /**
     * Tables to be included in the data set
     */
    tablesToInclude?: string[];
}
