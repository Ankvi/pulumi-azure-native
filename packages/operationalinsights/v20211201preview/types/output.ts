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
