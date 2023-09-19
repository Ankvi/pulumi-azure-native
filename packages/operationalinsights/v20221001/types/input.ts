import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Table column.
     */
    export interface ColumnArgs {
        /**
         * Column data type logical hint.
         */
        dataTypeHint?: pulumi.Input<string | enums.ColumnDataTypeHintEnum>;
        /**
         * Column description.
         */
        description?: pulumi.Input<string>;
        /**
         * Column display name.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Column name.
         */
        name?: pulumi.Input<string>;
        /**
         * Column data type.
         */
        type?: pulumi.Input<string | enums.ColumnTypeEnum>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * Type of managed service identity.
         */
        type: pulumi.Input<enums.IdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Restore parameters.
     */
    export interface RestoredLogsArgs {
        /**
         * The timestamp to end the restore by (UTC).
         */
        endRestoreTime?: pulumi.Input<string>;
        /**
         * The table to restore data from.
         */
        sourceTable?: pulumi.Input<string>;
        /**
         * The timestamp to start the restore from (UTC).
         */
        startRestoreTime?: pulumi.Input<string>;
    }

    /**
     * Table's schema.
     */
    export interface SchemaArgs {
        /**
         * A list of table custom columns.
         */
        columns?: pulumi.Input<pulumi.Input<ColumnArgs>[]>;
        /**
         * Table description.
         */
        description?: pulumi.Input<string>;
        /**
         * Table display name.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Table name.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Parameters of the search job that initiated this table.
     */
    export interface SearchResultsArgs {
        /**
         * Search job Description.
         */
        description?: pulumi.Input<string>;
        /**
         * The timestamp to end the search by (UTC)
         */
        endSearchTime?: pulumi.Input<string>;
        /**
         * Limit the search job to return up to specified number of rows.
         */
        limit?: pulumi.Input<number>;
        /**
         * Search job query.
         */
        query?: pulumi.Input<string>;
        /**
         * The timestamp to start the search from (UTC)
         */
        startSearchTime?: pulumi.Input<string>;
    }

    /**
     * The daily volume cap for ingestion.
     */
    export interface WorkspaceCappingArgs {
        /**
         * The workspace daily quota for ingestion.
         */
        dailyQuotaGb?: pulumi.Input<number>;
    }

    /**
     * Workspace features.
     */
    export interface WorkspaceFeaturesArgs {
        /**
         * Dedicated LA cluster resourceId that is linked to the workspaces.
         */
        clusterResourceId?: pulumi.Input<string>;
        /**
         * Disable Non-AAD based Auth.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * Flag that indicate if data should be exported.
         */
        enableDataExport?: pulumi.Input<boolean>;
        /**
         * Flag that indicate which permission to use - resource or workspace or both.
         */
        enableLogAccessUsingOnlyResourcePermissions?: pulumi.Input<boolean>;
        /**
         * Flag that describes if we want to remove the data after 30 days.
         */
        immediatePurgeDataOn30Days?: pulumi.Input<boolean>;
    }

    /**
     * The SKU (tier) of a workspace.
     */
    export interface WorkspaceSkuArgs {
        /**
         * The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected.
         */
        capacityReservationLevel?: pulumi.Input<number>;
        /**
         * The name of the SKU.
         */
        name: pulumi.Input<string | enums.WorkspaceSkuNameEnum>;
    }
