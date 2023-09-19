import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
