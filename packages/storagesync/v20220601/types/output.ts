import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Cloud endpoint change enumeration activity object
     */
    export interface CloudEndpointChangeEnumerationActivityResponse {
        /**
         * Progress percentage for processing deletes. This is done separately from the rest of the enumeration run
         */
        deletesProgressPercent: number;
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
        /**
         * Estimate of time remaining for the enumeration run
         */
        minutesRemaining: number;
        /**
         * Change enumeration operation state
         */
        operationState: string;
        /**
         * Count of directories processed
         */
        processedDirectoriesCount: number;
        /**
         * Count of files processed
         */
        processedFilesCount: number;
        /**
         * Progress percentage for change enumeration run, excluding processing of deletes
         */
        progressPercent: number;
        /**
         * Timestamp when change enumeration started
         */
        startedTimestamp: string;
        /**
         * When non-zero, indicates an issue that is delaying change enumeration
         */
        statusCode: number;
        /**
         * Change enumeration total counts state
         */
        totalCountsState: string;
        /**
         * Total count of directories enumerated
         */
        totalDirectoriesCount: number;
        /**
         * Total count of files enumerated
         */
        totalFilesCount: number;
        /**
         * Total enumerated size in bytes
         */
        totalSizeBytes: number;
    }

    /**
     * Cloud endpoint change enumeration status object
     */
    export interface CloudEndpointChangeEnumerationStatusResponse {
        /**
         * Change enumeration activity
         */
        activity: CloudEndpointChangeEnumerationActivityResponse;
        /**
         * Status of last completed change enumeration
         */
        lastEnumerationStatus: CloudEndpointLastChangeEnumerationStatusResponse;
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
    }

    /**
     * Cloud endpoint change enumeration status object
     */
    export interface CloudEndpointLastChangeEnumerationStatusResponse {
        /**
         * Timestamp when change enumeration completed
         */
        completedTimestamp: string;
        /**
         * Count of directories in the namespace
         */
        namespaceDirectoriesCount: number;
        /**
         * Count of files in the namespace
         */
        namespaceFilesCount: number;
        /**
         * Namespace size in bytes
         */
        namespaceSizeBytes: number;
        /**
         * Timestamp of when change enumeration is expected to run again
         */
        nextRunTimestamp: string;
        /**
         * Timestamp when change enumeration started
         */
        startedTimestamp: string;
    }

    /**
     * Server endpoint cloud tiering status object.
     */
    export interface CloudTieringCachePerformanceResponse {
        /**
         * Count of bytes that were served from the local server
         */
        cacheHitBytes: number;
        /**
         * Percentage of total bytes (hit + miss) that were served from the local server
         */
        cacheHitBytesPercent: number;
        /**
         * Count of bytes that were served from the cloud
         */
        cacheMissBytes: number;
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
    }

    /**
     * Status of the date policy
     */
    export interface CloudTieringDatePolicyStatusResponse {
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
        /**
         * Most recent access time of tiered files
         */
        tieredFilesMostRecentAccessTimestamp: string;
    }

    /**
     * Server endpoint cloud tiering status object.
     */
    export interface CloudTieringFilesNotTieringResponse {
        /**
         * Array of tiering errors
         */
        errors: FilesNotTieringErrorResponse[];
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
        /**
         * Last cloud tiering result (HResult)
         */
        totalFileCount: number;
    }

    /**
     * Information regarding the low disk mode state
     */
    export interface CloudTieringLowDiskModeResponse {
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
        /**
         * Low disk mode state
         */
        state: string;
    }

    /**
     * Server endpoint cloud tiering status object.
     */
    export interface CloudTieringSpaceSavingsResponse {
        /**
         * Cached content size on the server
         */
        cachedSizeBytes: number;
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
        /**
         * Count of bytes saved on the server
         */
        spaceSavingsBytes: number;
        /**
         * Percentage of cached size over total size
         */
        spaceSavingsPercent: number;
        /**
         * Total size of content in the azure file share
         */
        totalSizeCloudBytes: number;
        /**
         * Volume size
         */
        volumeSizeBytes: number;
    }

    /**
     * Status of the volume free space policy
     */
    export interface CloudTieringVolumeFreeSpacePolicyStatusResponse {
        /**
         * Current volume free space percentage.
         */
        currentVolumeFreeSpacePercent: number;
        /**
         * In the case where multiple server endpoints are present in a volume, an effective free space policy is applied.
         */
        effectiveVolumeFreeSpacePolicy: number;
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
    }

    /**
     * Files not tiering error object
     */
    export interface FilesNotTieringErrorResponse {
        /**
         * Error code (HResult)
         */
        errorCode: number;
        /**
         * Count of files with this error
         */
        fileCount: number;
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Background data download activity object
     */
    export interface ServerEndpointBackgroundDataDownloadActivityResponse {
        /**
         * Running count of bytes downloaded
         */
        downloadedBytes: number;
        /**
         * Progress percentage
         */
        percentProgress: number;
        /**
         * Timestamp when the operation started
         */
        startedTimestamp: string;
        /**
         * Timestamp when properties were updated
         */
        timestamp: string;
    }

    /**
     * Server endpoint cloud tiering status object.
     */
    export interface ServerEndpointCloudTieringStatusResponse {
        /**
         * Information regarding how well the local cache on the server is performing.
         */
        cachePerformance: CloudTieringCachePerformanceResponse;
        /**
         * Status of the date policy
         */
        datePolicyStatus: CloudTieringDatePolicyStatusResponse;
        /**
         * Information regarding files that failed to be tiered
         */
        filesNotTiering: CloudTieringFilesNotTieringResponse;
        /**
         * Cloud tiering health state.
         */
        health: string;
        /**
         * The last updated timestamp of health state
         */
        healthLastUpdatedTimestamp: string;
        /**
         * Last cloud tiering result (HResult)
         */
        lastCloudTieringResult: number;
        /**
         * Last cloud tiering success timestamp
         */
        lastSuccessTimestamp: string;
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
        /**
         * Information regarding the low disk mode state
         */
        lowDiskMode: CloudTieringLowDiskModeResponse;
        /**
         * Information regarding how much local space cloud tiering is saving.
         */
        spaceSavings: CloudTieringSpaceSavingsResponse;
        /**
         * Status of the volume free space policy
         */
        volumeFreeSpacePolicyStatus: CloudTieringVolumeFreeSpacePolicyStatusResponse;
    }

    /**
     * Files not syncing error object
     */
    export interface ServerEndpointFilesNotSyncingErrorResponse {
        /**
         * Error code (HResult)
         */
        errorCode: number;
        /**
         * Count of persistent files not syncing with the specified error code
         */
        persistentCount: number;
        /**
         * Count of transient files not syncing with the specified error code
         */
        transientCount: number;
    }

    /**
     * Server endpoint recall error object
     */
    export interface ServerEndpointRecallErrorResponse {
        /**
         * Count of occurences of the error
         */
        count: number;
        /**
         * Error code (HResult)
         */
        errorCode: number;
    }

    /**
     * Server endpoint recall status object.
     */
    export interface ServerEndpointRecallStatusResponse {
        /**
         * Last updated timestamp
         */
        lastUpdatedTimestamp: string;
        /**
         * Array of recall errors
         */
        recallErrors: ServerEndpointRecallErrorResponse[];
        /**
         * Total count of recall errors.
         */
        totalRecallErrorsCount: number;
    }

    /**
     * Sync Session status object.
     */
    export interface ServerEndpointSyncActivityStatusResponse {
        /**
         * Applied bytes
         */
        appliedBytes: number;
        /**
         * Applied item count.
         */
        appliedItemCount: number;
        /**
         * Per item error count
         */
        perItemErrorCount: number;
        /**
         * Session minutes remaining (if available)
         */
        sessionMinutesRemaining: number;
        /**
         * Sync mode
         */
        syncMode: string;
        /**
         * Timestamp when properties were updated
         */
        timestamp: string;
        /**
         * Total bytes (if available)
         */
        totalBytes: number;
        /**
         * Total item count (if available)
         */
        totalItemCount: number;
    }

    /**
     * Sync Session status object.
     */
    export interface ServerEndpointSyncSessionStatusResponse {
        /**
         * Array of per-item errors coming from the last sync session.
         */
        filesNotSyncingErrors: ServerEndpointFilesNotSyncingErrorResponse[];
        /**
         * Sync mode
         */
        lastSyncMode: string;
        /**
         * Last sync per item error count.
         */
        lastSyncPerItemErrorCount: number;
        /**
         * Last sync result (HResult)
         */
        lastSyncResult: number;
        /**
         * Last sync success timestamp
         */
        lastSyncSuccessTimestamp: string;
        /**
         * Last sync timestamp
         */
        lastSyncTimestamp: string;
        /**
         * Count of persistent files not syncing.
         */
        persistentFilesNotSyncingCount: number;
        /**
         * Count of transient files not syncing.
         */
        transientFilesNotSyncingCount: number;
    }

    /**
     * Server Endpoint sync status
     */
    export interface ServerEndpointSyncStatusResponse {
        /**
         * Background data download activity
         */
        backgroundDataDownloadActivity: ServerEndpointBackgroundDataDownloadActivityResponse;
        /**
         * Combined Health Status.
         */
        combinedHealth: string;
        /**
         * Download sync activity
         */
        downloadActivity: ServerEndpointSyncActivityStatusResponse;
        /**
         * Download Health Status.
         */
        downloadHealth: string;
        /**
         * Download Status
         */
        downloadStatus: ServerEndpointSyncSessionStatusResponse;
        /**
         * Last Updated Timestamp
         */
        lastUpdatedTimestamp: string;
        /**
         * Offline Data Transfer State
         */
        offlineDataTransferStatus: string;
        /**
         * Sync activity
         */
        syncActivity: string;
        /**
         * Total count of persistent files not syncing (combined upload + download).
         */
        totalPersistentFilesNotSyncingCount: number;
        /**
         * Upload sync activity
         */
        uploadActivity: ServerEndpointSyncActivityStatusResponse;
        /**
         * Upload Health Status.
         */
        uploadHealth: string;
        /**
         * Upload Status
         */
        uploadStatus: ServerEndpointSyncSessionStatusResponse;
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
