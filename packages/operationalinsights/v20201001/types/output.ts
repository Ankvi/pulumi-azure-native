import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
         * The capacity reservation level for this workspace, when CapacityReservation sku is selected.
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
