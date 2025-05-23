import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Data Lake data destination for Analytics Connector.
 */
export interface AnalyticsConnectorDataLakeDataDestinationArgs {
    /**
     * The name for the Data Lake.
     */
    dataLakeName: pulumi.Input<string>;
    /**
     * Name of data destination.
     */
    name?: pulumi.Input<string>;
    /**
     * Type of data destination.
     * Expected value is 'datalake'.
     */
    type: pulumi.Input<"datalake">;
}

/**
 * The FHIR service data source for Analytics Connector.
 */
export interface AnalyticsConnectorFhirServiceDataSourceArgs {
    /**
     * The kind of FHIR Service.
     */
    kind: pulumi.Input<string | enums.FhirServiceVersion>;
    /**
     * Type of data source.
     * Expected value is 'fhirservice'.
     */
    type: pulumi.Input<"fhirservice">;
    /**
     * The URL of FHIR service.
     */
    url: pulumi.Input<string>;
}

/**
 * FHIR Service data mapping configuration for Analytics Connector.
 */
export interface AnalyticsConnectorFhirToParquetMappingArgs {
    /**
     * Artifact reference for extension schema.
     */
    extensionSchemaReference?: pulumi.Input<string>;
    /**
     * Artifact reference for filter configurations.
     */
    filterConfigurationReference?: pulumi.Input<string>;
    /**
     * Type of data mapping.
     * Expected value is 'fhirToParquet'.
     */
    type: pulumi.Input<"fhirToParquet">;
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface CorsConfigurationArgs {
    /**
     * If credentials are allowed via CORS.
     */
    allowCredentials?: pulumi.Input<boolean>;
    /**
     * The headers to be allowed via CORS.
     */
    headers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The max age to be allowed via CORS.
     */
    maxAge?: pulumi.Input<number>;
    /**
     * The methods to be allowed via CORS.
     */
    methods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The origins to be allowed via CORS.
     */
    origins?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Settings to encrypt a service
 */
export interface EncryptionArgs {
    /**
     * The encryption settings for the customer-managed key
     */
    customerManagedKeyEncryption?: pulumi.Input<EncryptionCustomerManagedKeyEncryptionArgs>;
}

/**
 * The encryption settings for the customer-managed key
 */
export interface EncryptionCustomerManagedKeyEncryptionArgs {
    /**
     * The URL of the key to use for encryption
     */
    keyEncryptionKeyUrl?: pulumi.Input<string>;
}

/**
 * Azure container registry configuration information
 */
export interface FhirServiceAcrConfigurationArgs {
    /**
     * The list of the Azure container registry login servers.
     */
    loginServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of Open Container Initiative (OCI) artifacts.
     */
    ociArtifacts?: pulumi.Input<pulumi.Input<ServiceOciArtifactEntryArgs>[]>;
}

/**
 * Authentication configuration information
 */
export interface FhirServiceAuthenticationConfigurationArgs {
    /**
     * The audience url for the service
     */
    audience?: pulumi.Input<string>;
    /**
     * The authority url for the service
     */
    authority?: pulumi.Input<string>;
    /**
     * The array of identity provider configurations for SMART on FHIR authentication.
     */
    smartIdentityProviders?: pulumi.Input<pulumi.Input<SmartIdentityProviderConfigurationArgs>[]>;
    /**
     * If the SMART on FHIR proxy is enabled
     */
    smartProxyEnabled?: pulumi.Input<boolean>;
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface FhirServiceCorsConfigurationArgs {
    /**
     * If credentials are allowed via CORS.
     */
    allowCredentials?: pulumi.Input<boolean>;
    /**
     * The headers to be allowed via CORS.
     */
    headers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The max age to be allowed via CORS.
     */
    maxAge?: pulumi.Input<number>;
    /**
     * The methods to be allowed via CORS.
     */
    methods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The origins to be allowed via CORS.
     */
    origins?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Export operation configuration information
 */
export interface FhirServiceExportConfigurationArgs {
    /**
     * The name of the default export storage account.
     */
    storageAccountName?: pulumi.Input<string>;
}

/**
 * Import operation configuration information
 */
export interface FhirServiceImportConfigurationArgs {
    /**
     * If the import operation is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * If the FHIR service is in InitialImportMode.
     */
    initialImportMode?: pulumi.Input<boolean>;
    /**
     * The name of the default integration storage account.
     */
    integrationDataStore?: pulumi.Input<string>;
}

/**
 * The settings for Implementation Guides - defining capabilities for national standards, vendor consortiums, clinical societies, etc.
 */
export interface ImplementationGuidesConfigurationArgs {
    /**
     * If US Core Missing Data requirement is enabled.
     */
    usCoreMissingData?: pulumi.Input<boolean>;
}

/**
 * Event Hub ingestion endpoint configuration
 */
export interface IotEventHubIngestionEndpointConfigurationArgs {
    /**
     * Consumer group of the event hub to connected to.
     */
    consumerGroup?: pulumi.Input<string>;
    /**
     * Event Hub name to connect to.
     */
    eventHubName?: pulumi.Input<string>;
    /**
     * Fully qualified namespace of the Event Hub to connect to.
     */
    fullyQualifiedEventHubNamespace?: pulumi.Input<string>;
}

/**
 * The mapping content.
 */
export interface IotMappingPropertiesArgs {
    /**
     * The mapping.
     */
    content?: any;
}

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
 * The settings for history tracking for FHIR resources.
 */
export interface ResourceVersionPolicyConfigurationArgs {
    /**
     * The default value for tracking history across all resources.
     */
    default?: pulumi.Input<string | enums.FhirResourceVersionPolicy>;
    /**
     * A list of FHIR Resources and their version policy overrides.
     */
    resourceTypeOverrides?: pulumi.Input<{[key: string]: pulumi.Input<string | enums.FhirResourceVersionPolicy>}>;
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
 * Azure container registry configuration information
 */
export interface ServiceAcrConfigurationInfoArgs {
    /**
     * The list of the ACR login servers.
     */
    loginServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of Open Container Initiative (OCI) artifacts.
     */
    ociArtifacts?: pulumi.Input<pulumi.Input<ServiceOciArtifactEntryArgs>[]>;
}

/**
 * Authentication configuration information
 */
export interface ServiceAuthenticationConfigurationInfoArgs {
    /**
     * The audience url for the service
     */
    audience?: pulumi.Input<string>;
    /**
     * The authority url for the service
     */
    authority?: pulumi.Input<string>;
    /**
     * If the SMART on FHIR proxy is enabled
     */
    smartProxyEnabled?: pulumi.Input<boolean>;
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface ServiceCorsConfigurationInfoArgs {
    /**
     * If credentials are allowed via CORS.
     */
    allowCredentials?: pulumi.Input<boolean>;
    /**
     * The headers to be allowed via CORS.
     */
    headers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The max age to be allowed via CORS.
     */
    maxAge?: pulumi.Input<number>;
    /**
     * The methods to be allowed via CORS.
     */
    methods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The origins to be allowed via CORS.
     */
    origins?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The settings for the Cosmos DB database backing the service.
 */
export interface ServiceCosmosDbConfigurationInfoArgs {
    /**
     * The multi-tenant application id used to enable CMK access for services in a data sovereign region.
     */
    crossTenantCmkApplicationId?: pulumi.Input<string>;
    /**
     * The URI of the customer-managed key for the backing database.
     */
    keyVaultKeyUri?: pulumi.Input<string>;
    /**
     * The provisioned throughput for the backing database.
     */
    offerThroughput?: pulumi.Input<number>;
}

/**
 * Export operation configuration information
 */
export interface ServiceExportConfigurationInfoArgs {
    /**
     * The name of the default export storage account.
     */
    storageAccountName?: pulumi.Input<string>;
}

/**
 * Import operation configuration information
 */
export interface ServiceImportConfigurationInfoArgs {
    /**
     * If the import operation is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * If the FHIR service is in InitialImportMode.
     */
    initialImportMode?: pulumi.Input<boolean>;
    /**
     * The name of the default integration storage account.
     */
    integrationDataStore?: pulumi.Input<string>;
}

/**
 * Setting indicating whether the service has a managed identity associated with it.
 */
export interface ServiceManagedIdentityIdentityArgs {
    /**
     * Type of identity being specified, currently SystemAssigned and None are allowed.
     */
    type: pulumi.Input<string | enums.ServiceManagedIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * An Open Container Initiative (OCI) artifact.
 */
export interface ServiceOciArtifactEntryArgs {
    /**
     * The artifact digest.
     */
    digest?: pulumi.Input<string>;
    /**
     * The artifact name.
     */
    imageName?: pulumi.Input<string>;
    /**
     * The Azure Container Registry login server.
     */
    loginServer?: pulumi.Input<string>;
}

/**
 * The properties of a service instance.
 */
export interface ServicesPropertiesArgs {
    /**
     * The access policies of the service instance.
     */
    accessPolicies?: pulumi.Input<pulumi.Input<ServiceAccessPolicyEntryArgs>[]>;
    /**
     * The azure container registry settings used for convert data operation of the service instance.
     */
    acrConfiguration?: pulumi.Input<ServiceAcrConfigurationInfoArgs>;
    /**
     * The authentication configuration for the service instance.
     */
    authenticationConfiguration?: pulumi.Input<ServiceAuthenticationConfigurationInfoArgs>;
    /**
     * The settings for the CORS configuration of the service instance.
     */
    corsConfiguration?: pulumi.Input<ServiceCorsConfigurationInfoArgs>;
    /**
     * The settings for the Cosmos DB database backing the service.
     */
    cosmosDbConfiguration?: pulumi.Input<ServiceCosmosDbConfigurationInfoArgs>;
    /**
     * The settings for the export operation of the service instance.
     */
    exportConfiguration?: pulumi.Input<ServiceExportConfigurationInfoArgs>;
    /**
     * The settings for the import operation of the service instance.
     */
    importConfiguration?: pulumi.Input<ServiceImportConfigurationInfoArgs>;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<PrivateEndpointConnectionArgs>[]>;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
}

/**
 * Setting indicating whether the service has a managed identity associated with it.
 */
export interface ServicesResourceIdentityArgs {
    /**
     * Type of identity being specified, currently SystemAssigned and None are allowed.
     */
    type?: pulumi.Input<string | enums.ManagedServiceIdentityType>;
}

/**
 * An Application configured in the Identity Provider used to access FHIR resources.
 */
export interface SmartIdentityProviderApplicationArgs {
    /**
     * The actions that are permitted to be performed on FHIR resources for the application.
     */
    allowedDataActions?: pulumi.Input<pulumi.Input<string | enums.SmartDataActions>[]>;
    /**
     * The audience that will be used to validate bearer tokens against the given authority.
     */
    audience?: pulumi.Input<string>;
    /**
     * The application client id defined in the identity provider. This value will be used to validate bearer tokens against the given authority.
     */
    clientId?: pulumi.Input<string>;
}

/**
 * An object to configure an identity provider for use with SMART on FHIR authentication.
 */
export interface SmartIdentityProviderConfigurationArgs {
    /**
     * The array of identity provider applications for SMART on FHIR authentication.
     */
    applications?: pulumi.Input<pulumi.Input<SmartIdentityProviderApplicationArgs>[]>;
    /**
     * The identity provider token authority also known as the token issuing authority.
     */
    authority?: pulumi.Input<string>;
}

/**
 * The configuration of connected storage
 */
export interface StorageConfigurationArgs {
    /**
     * The filesystem name of connected storage account.
     */
    fileSystemName?: pulumi.Input<string>;
    /**
     * The resource id of connected storage account.
     */
    storageResourceId?: pulumi.Input<string>;
}
