import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Table column.
     */
    export interface ColumnResponse {
        /**
         * Column data type logical hint.
         */
        dataTypeHint?: string;
        /**
         * Column description.
         */
        description?: string;
        /**
         * Column display name.
         */
        displayName?: string;
        /**
         * Is displayed by default.
         */
        isDefaultDisplay: boolean;
        /**
         * Is column hidden.
         */
        isHidden: boolean;
        /**
         * Column name.
         */
        name?: string;
        /**
         * Column data type.
         */
        type?: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * Type of managed service identity.
         */
        type: string;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
    }

    /**
     * The private link scope resource reference.
     */
    export interface PrivateLinkScopedResourceResponse {
        /**
         * The full resource Id of the private link scope resource.
         */
        resourceId?: string;
        /**
         * The private link scope unique Identifier.
         */
        scopeId?: string;
    }

    /**
     * Restore parameters.
     */
    export interface RestoredLogsResponse {
        /**
         * Search results table async operation id.
         */
        azureAsyncOperationId: string;
        /**
         * The timestamp to end the restore by (UTC).
         */
        endRestoreTime?: string;
        /**
         * The table to restore data from.
         */
        sourceTable?: string;
        /**
         * The timestamp to start the restore from (UTC).
         */
        startRestoreTime?: string;
    }

    /**
     * Search job execution statistics.
     */
    export interface ResultStatisticsResponse {
        /**
         * The number of rows that were returned by the search job.
         */
        ingestedRecords: number;
        /**
         * Search job completion percentage.
         */
        progress: number;
        /**
         * Search job: Amount of scanned data.
         */
        scannedGb: number;
    }

    /**
     * Table's schema.
     */
    export interface SchemaResponse {
        /**
         * Table category.
         */
        categories: string[];
        /**
         * A list of table custom columns.
         */
        columns?: ColumnResponse[];
        /**
         * Table description.
         */
        description?: string;
        /**
         * Table display name.
         */
        displayName?: string;
        /**
         * Table labels.
         */
        labels: string[];
        /**
         * Table name.
         */
        name?: string;
        /**
         * List of solutions the table is affiliated with
         */
        solutions: string[];
        /**
         * Table's creator.
         */
        source: string;
        /**
         * A list of table standard columns.
         */
        standardColumns: ColumnResponse[];
        /**
         * The subtype describes what APIs can be used to interact with the table, and what features are available against it.
         */
        tableSubType: string;
        /**
         * Table's creator.
         */
        tableType: string;
    }

    /**
     * Parameters of the search job that initiated this table.
     */
    export interface SearchResultsResponse {
        /**
         * Search results table async operation id.
         */
        azureAsyncOperationId: string;
        /**
         * Search job Description.
         */
        description?: string;
        /**
         * The timestamp to end the search by (UTC)
         */
        endSearchTime?: string;
        /**
         * Limit the search job to return up to specified number of rows.
         */
        limit?: number;
        /**
         * Search job query.
         */
        query?: string;
        /**
         * The table used in the search job.
         */
        sourceTable: string;
        /**
         * The timestamp to start the search from (UTC)
         */
        startSearchTime?: string;
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
     * User assigned identity properties.
     */
    export interface UserIdentityPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * The daily volume cap for ingestion.
     */
    export interface WorkspaceCappingResponse {
        /**
         * The workspace daily quota for ingestion.
         */
        dailyQuotaGb?: number;
        /**
         * The status of data ingestion for this workspace.
         */
        dataIngestionStatus: string;
        /**
         * The time when the quota will be rest.
         */
        quotaNextResetTime: string;
    }

    /**
     * Workspace features.
     */
    export interface WorkspaceFeaturesResponse {
        /**
         * Dedicated LA cluster resourceId that is linked to the workspaces.
         */
        clusterResourceId?: string;
        /**
         * Disable Non-AAD based Auth.
         */
        disableLocalAuth?: boolean;
        /**
         * Flag that indicate if data should be exported.
         */
        enableDataExport?: boolean;
        /**
         * Flag that indicate which permission to use - resource or workspace or both.
         */
        enableLogAccessUsingOnlyResourcePermissions?: boolean;
        /**
         * Flag that describes if we want to remove the data after 30 days.
         */
        immediatePurgeDataOn30Days?: boolean;
    }

    /**
     * The SKU (tier) of a workspace.
     */
    export interface WorkspaceSkuResponse {
        /**
         * The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected.
         */
        capacityReservationLevel?: number;
        /**
         * The last time when the sku was updated.
         */
        lastSkuUpdate: string;
        /**
         * The name of the SKU.
         */
        name: string;
    }
