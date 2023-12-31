import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties that define the scope private link mode settings.
     */
    export interface AccessModeSettingsArgs {
        /**
         * List of exclusions that override the default access mode settings for specific private endpoint connections.
         */
        exclusions?: pulumi.Input<pulumi.Input<AccessModeSettingsExclusionArgs>[]>;
        /**
         * Specifies the default access mode of ingestion through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array.
         */
        ingestionAccessMode: pulumi.Input<string | enums.AccessMode>;
        /**
         * Specifies the default access mode of queries through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array.
         */
        queryAccessMode: pulumi.Input<string | enums.AccessMode>;
    }

    /**
     * Properties that define the scope private link mode settings exclusion item. This setting applies to a specific private endpoint connection and overrides the default settings for that private endpoint connection.
     */
    export interface AccessModeSettingsExclusionArgs {
        /**
         * Specifies the access mode of ingestion through the specified private endpoint connection in the exclusion.
         */
        ingestionAccessMode?: pulumi.Input<string | enums.AccessMode>;
        /**
         * The private endpoint connection name associated to the private endpoint on which we want to apply the specific access mode settings.
         */
        privateEndpointConnectionName?: pulumi.Input<string>;
        /**
         * Specifies the access mode of queries through the specified private endpoint connection in the exclusion.
         */
        queryAccessMode?: pulumi.Input<string | enums.AccessMode>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }
