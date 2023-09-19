import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Api properties.
     */
    export interface ApiPropertiesArgs {
        /**
         * Interval in minutes for which the weather data for the api needs to be refreshed.
         */
        apiFreshnessTimeInMinutes?: pulumi.Input<number>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
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

    /**
     * Sensor integration request model.
     */
    export interface SensorIntegrationArgs {
        /**
         * Sensor integration enable state. Allowed values are True, None
         */
        enabled?: pulumi.Input<string>;
    }

    /**
     * Solution resource properties.
     */
    export interface SolutionPropertiesArgs {
        /**
         * SaaS application Publisher Id.
         */
        marketplacePublisherId: pulumi.Input<string>;
        /**
         * SaaS application Offer Id.
         */
        offerId: pulumi.Input<string>;
        /**
         * SaaS application Plan Id.
         */
        planId: pulumi.Input<string>;
        /**
         * SaaS subscriptionId of the installed SaaS application.
         */
        saasSubscriptionId: pulumi.Input<string>;
        /**
         * SaaS subscription name of the installed SaaS application.
         */
        saasSubscriptionName: pulumi.Input<string>;
        /**
         * SaaS application Term Id.
         */
        termId: pulumi.Input<string>;
    }
