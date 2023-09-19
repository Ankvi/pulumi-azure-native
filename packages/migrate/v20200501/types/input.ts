import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of Connection state request.
     */
    export interface ConnectionStateRequestBodyPropertiesArgs {
        /**
         * Private endpoint connection state.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    }

    /**
     * Properties of a migrate project.
     */
    export interface MigrateProjectPropertiesArgs {
        /**
         * Gets or sets the state of public network access.
         */
        publicNetworkAccess?: pulumi.Input<string>;
        /**
         * Service endpoint.
         */
        serviceEndpoint?: pulumi.Input<string>;
        /**
         * Utility storage account id.
         */
        utilityStorageAccountId?: pulumi.Input<string>;
    }

    /**
     * Private endpoint connection state.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * Action required.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * Description of the object.
         */
        description?: pulumi.Input<string>;
        /**
         * Private link connection state.
         */
        status?: pulumi.Input<string | enums.Status>;
    }
