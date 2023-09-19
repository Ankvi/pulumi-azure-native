import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authorization payload.
     */
    export interface AuthorizationArgs {
        /**
         * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
         * 
         * Only used during PUT/PATCH operations. The secret is cleared during GET.
         */
        code?: pulumi.Input<string>;
    }

    /**
     * DevOps Configuration properties.
     */
    export interface DevOpsConfigurationPropertiesArgs {
        /**
         * Authorization payload.
         */
        authorization?: pulumi.Input<AuthorizationArgs>;
        /**
         * AutoDiscovery states.
         */
        autoDiscovery?: pulumi.Input<string | enums.AutoDiscovery>;
        /**
         * The provisioning state of the resource.
         * 
         * Pending - Provisioning pending.
         * Failed - Provisioning failed.
         * Succeeded - Successful provisioning.
         * Canceled - Provisioning canceled.
         * PendingDeletion - Deletion pending.
         * DeletionSuccess - Deletion successful.
         * DeletionFailure - Deletion failure.
         */
        provisioningState?: pulumi.Input<string | enums.DevOpsProvisioningState>;
        /**
         * List of top-level inventory to select when AutoDiscovery is disabled.
         * This field is ignored when AutoDiscovery is enabled.
         */
        topLevelInventoryList?: pulumi.Input<pulumi.Input<string>[]>;
    }
