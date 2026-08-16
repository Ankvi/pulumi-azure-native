import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | undefined>;
}

/**
 * An access policy entry.
 */
export interface ServiceAccessPolicyEntryArgs {
    /**
     * An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.
     */
    objectId: pulumi.Input<string>;
}

/**
 * Authentication configuration information
 */
export interface ServiceAuthenticationConfigurationInfoArgs {
    /**
     * The audience url for the service
     */
    audience?: pulumi.Input<string | undefined>;
    /**
     * The authority url for the service
     */
    authority?: pulumi.Input<string | undefined>;
    /**
     * If the SMART on FHIR proxy is enabled
     */
    smartProxyEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface ServiceCorsConfigurationInfoArgs {
    /**
     * If credentials are allowed via CORS.
     */
    allowCredentials?: pulumi.Input<boolean | undefined>;
    /**
     * The headers to be allowed via CORS.
     */
    headers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The max age to be allowed via CORS.
     */
    maxAge?: pulumi.Input<number | undefined>;
    /**
     * The methods to be allowed via CORS.
     */
    methods?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The origins to be allowed via CORS.
     */
    origins?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The settings for the Cosmos DB database backing the service.
 */
export interface ServiceCosmosDbConfigurationInfoArgs {
    /**
     * The URI of the customer-managed key for the backing database.
     */
    keyVaultKeyUri?: pulumi.Input<string | undefined>;
    /**
     * The provisioned throughput for the backing database.
     */
    offerThroughput?: pulumi.Input<number | undefined>;
}

/**
 * Export operation configuration information
 */
export interface ServiceExportConfigurationInfoArgs {
    /**
     * The name of the default export storage account.
     */
    storageAccountName?: pulumi.Input<string | undefined>;
}

/**
 * The properties of a service instance.
 */
export interface ServicesPropertiesArgs {
    /**
     * The access policies of the service instance.
     */
    accessPolicies?: pulumi.Input<pulumi.Input<ServiceAccessPolicyEntryArgs>[] | undefined>;
    /**
     * The authentication configuration for the service instance.
     */
    authenticationConfiguration?: pulumi.Input<ServiceAuthenticationConfigurationInfoArgs | undefined>;
    /**
     * The settings for the CORS configuration of the service instance.
     */
    corsConfiguration?: pulumi.Input<ServiceCorsConfigurationInfoArgs | undefined>;
    /**
     * The settings for the Cosmos DB database backing the service.
     */
    cosmosDbConfiguration?: pulumi.Input<ServiceCosmosDbConfigurationInfoArgs | undefined>;
    /**
     * The settings for the export operation of the service instance.
     */
    exportConfiguration?: pulumi.Input<ServiceExportConfigurationInfoArgs | undefined>;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<PrivateEndpointConnectionArgs>[] | undefined>;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess | undefined>;
}

/**
 * Setting indicating whether the service has a managed identity associated with it.
 */
export interface ServicesResourceIdentityArgs {
    /**
     * Type of identity being specified, currently SystemAssigned and None are allowed.
     */
    type?: pulumi.Input<string | enums.ManagedServiceIdentityType | undefined>;
}
