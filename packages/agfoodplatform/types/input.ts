import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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


