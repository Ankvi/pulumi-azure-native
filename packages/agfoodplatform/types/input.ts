import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace agfoodplatform {
    /**
     * ApiKeyAuthCredentials class for ApiKey based Auth.
     */
    export interface ApiKeyAuthCredentialsArgs {
        /**
         * Properties of the key vault.
         */
        apiKey: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * Enum for different types of AuthCredentials supported.
         * Expected value is 'ApiKeyAuthCredentials'.
         */
        kind: pulumi.Input<"ApiKeyAuthCredentials">;
    }

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
     * DataConnector Properties.
     */
    export interface DataConnectorPropertiesArgs {
        /**
         * AuthCredentials abstract base class for Auth Purpose.
         */
        credentials: pulumi.Input<ApiKeyAuthCredentialsArgs | OAuthClientCredentialsArgs>;
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
     * Properties of the key vault.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * Name of Key Vault key.
         */
        keyName: pulumi.Input<string>;
        /**
         * Uri of the key vault.
         */
        keyVaultUri: pulumi.Input<string>;
        /**
         * Version of Key Vault key.
         */
        keyVersion: pulumi.Input<string>;
    }

    /**
     * OAuthClientCredentials for clientId clientSecret auth.
     */
    export interface OAuthClientCredentialsArgs {
        /**
         * ClientId associated with the provider.
         */
        clientId: pulumi.Input<string>;
        /**
         * Properties of the key vault.
         */
        clientSecret: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * Enum for different types of AuthCredentials supported.
         * Expected value is 'OAuthClientCredentials'.
         */
        kind: pulumi.Input<"OAuthClientCredentials">;
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
         * Sensor integration enable state.
         */
        enabled?: pulumi.Input<string>;
    }

    /**
     * Solution resource properties.
     */
    export interface SolutionPropertiesArgs {
        /**
         * SaaS application Marketplace Publisher Id.
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
         * Role Assignment Id.
         */
        roleAssignmentId?: pulumi.Input<string>;
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

    export namespace v20200512preview {
        /**
         * The resource model definition representing SKU
         */
        export interface SkuArgs {
            /**
             * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
             */
            capacity?: pulumi.Input<number>;
            /**
             * If the service has different generations of hardware, for the same SKU, then that can be captured here.
             */
            family?: pulumi.Input<string>;
            /**
             * The name of the SKU. Ex - P3. It is typically a letter+number code
             */
            name: pulumi.Input<string>;
            /**
             * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
             */
            size?: pulumi.Input<string>;
            /**
             * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
             */
            tier?: pulumi.Input<enums.v20200512preview.SkuTier>;
        }

    }

    export namespace v20210901preview {
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
            type?: pulumi.Input<enums.v20210901preview.ResourceIdentityType>;
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
            status?: pulumi.Input<string | enums.v20210901preview.PrivateEndpointServiceConnectionStatus>;
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

    }

    export namespace v20230601preview {
        /**
         * ApiKeyAuthCredentials class for ApiKey based Auth.
         */
        export interface ApiKeyAuthCredentialsArgs {
            /**
             * Properties of the key vault.
             */
            apiKey: pulumi.Input<v20230601preview.KeyVaultPropertiesArgs>;
            /**
             * Enum for different types of AuthCredentials supported.
             * Expected value is 'ApiKeyAuthCredentials'.
             */
            kind: pulumi.Input<"ApiKeyAuthCredentials">;
        }

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
         * DataConnector Properties.
         */
        export interface DataConnectorPropertiesArgs {
            /**
             * AuthCredentials abstract base class for Auth Purpose.
             */
            credentials: pulumi.Input<v20230601preview.ApiKeyAuthCredentialsArgs | v20230601preview.OAuthClientCredentialsArgs>;
        }

        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20230601preview.ResourceIdentityType>;
        }

        /**
         * Properties of the key vault.
         */
        export interface KeyVaultPropertiesArgs {
            /**
             * Name of Key Vault key.
             */
            keyName: pulumi.Input<string>;
            /**
             * Uri of the key vault.
             */
            keyVaultUri: pulumi.Input<string>;
            /**
             * Version of Key Vault key.
             */
            keyVersion: pulumi.Input<string>;
        }

        /**
         * OAuthClientCredentials for clientId clientSecret auth.
         */
        export interface OAuthClientCredentialsArgs {
            /**
             * ClientId associated with the provider.
             */
            clientId: pulumi.Input<string>;
            /**
             * Properties of the key vault.
             */
            clientSecret: pulumi.Input<v20230601preview.KeyVaultPropertiesArgs>;
            /**
             * Enum for different types of AuthCredentials supported.
             * Expected value is 'OAuthClientCredentials'.
             */
            kind: pulumi.Input<"OAuthClientCredentials">;
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
            status?: pulumi.Input<string | enums.v20230601preview.PrivateEndpointServiceConnectionStatus>;
        }

        /**
         * Sensor integration request model.
         */
        export interface SensorIntegrationArgs {
            /**
             * Sensor integration enable state.
             */
            enabled?: pulumi.Input<string>;
        }

        /**
         * Solution resource properties.
         */
        export interface SolutionPropertiesArgs {
            /**
             * SaaS application Marketplace Publisher Id.
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
             * Role Assignment Id.
             */
            roleAssignmentId?: pulumi.Input<string>;
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

    }
}
