import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Data Lake data destination for Analytics Connector.
 */
export interface AnalyticsConnectorDataLakeDataDestinationResponse {
    /**
     * The name for the Data Lake.
     */
    dataLakeName: string;
    /**
     * Name of data destination.
     */
    name?: string;
    /**
     * Type of data destination.
     * Expected value is 'datalake'.
     */
    type: "datalake";
}

/**
 * The FHIR service data source for Analytics Connector.
 */
export interface AnalyticsConnectorFhirServiceDataSourceResponse {
    /**
     * The kind of FHIR Service.
     */
    kind: string;
    /**
     * Type of data source.
     * Expected value is 'fhirservice'.
     */
    type: "fhirservice";
    /**
     * The URL of FHIR service.
     */
    url: string;
}

/**
 * FHIR Service data mapping configuration for Analytics Connector.
 */
export interface AnalyticsConnectorFhirToParquetMappingResponse {
    /**
     * Artifact reference for extension schema.
     */
    extensionSchemaReference?: string;
    /**
     * Artifact reference for filter configurations.
     */
    filterConfigurationReference?: string;
    /**
     * Type of data mapping.
     * Expected value is 'fhirToParquet'.
     */
    type: "fhirToParquet";
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface CorsConfigurationResponse {
    /**
     * If credentials are allowed via CORS.
     */
    allowCredentials?: boolean;
    /**
     * The headers to be allowed via CORS.
     */
    headers?: string[];
    /**
     * The max age to be allowed via CORS.
     */
    maxAge?: number;
    /**
     * The methods to be allowed via CORS.
     */
    methods?: string[];
    /**
     * The origins to be allowed via CORS.
     */
    origins?: string[];
}

/**
 * Authentication configuration information
 */
export interface DicomServiceAuthenticationConfigurationResponse {
    /**
     * The audiences for the service
     */
    audiences: string[];
    /**
     * The authority url for the service
     */
    authority: string;
}

/**
 * Settings to encrypt a service
 */
export interface EncryptionResponse {
    /**
     * The encryption settings for the customer-managed key
     */
    customerManagedKeyEncryption?: EncryptionResponseCustomerManagedKeyEncryption;
}

/**
 * The encryption settings for the customer-managed key
 */
export interface EncryptionResponseCustomerManagedKeyEncryption {
    /**
     * The URL of the key to use for encryption
     */
    keyEncryptionKeyUrl?: string;
}

/**
 * Azure container registry configuration information
 */
export interface FhirServiceAcrConfigurationResponse {
    /**
     * The list of the Azure container registry login servers.
     */
    loginServers?: string[];
    /**
     * The list of Open Container Initiative (OCI) artifacts.
     */
    ociArtifacts?: ServiceOciArtifactEntryResponse[];
}

/**
 * Authentication configuration information
 */
export interface FhirServiceAuthenticationConfigurationResponse {
    /**
     * The audience url for the service
     */
    audience?: string;
    /**
     * The authority url for the service
     */
    authority?: string;
    /**
     * The array of identity provider configurations for SMART on FHIR authentication.
     */
    smartIdentityProviders?: SmartIdentityProviderConfigurationResponse[];
    /**
     * If the SMART on FHIR proxy is enabled
     */
    smartProxyEnabled?: boolean;
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface FhirServiceCorsConfigurationResponse {
    /**
     * If credentials are allowed via CORS.
     */
    allowCredentials?: boolean;
    /**
     * The headers to be allowed via CORS.
     */
    headers?: string[];
    /**
     * The max age to be allowed via CORS.
     */
    maxAge?: number;
    /**
     * The methods to be allowed via CORS.
     */
    methods?: string[];
    /**
     * The origins to be allowed via CORS.
     */
    origins?: string[];
}

/**
 * Export operation configuration information
 */
export interface FhirServiceExportConfigurationResponse {
    /**
     * The name of the default export storage account.
     */
    storageAccountName?: string;
}

/**
 * Import operation configuration information
 */
export interface FhirServiceImportConfigurationResponse {
    /**
     * If the import operation is enabled.
     */
    enabled?: boolean;
    /**
     * If the FHIR service is in InitialImportMode.
     */
    initialImportMode?: boolean;
    /**
     * The name of the default integration storage account.
     */
    integrationDataStore?: string;
}

/**
 * The settings for Implementation Guides - defining capabilities for national standards, vendor consortiums, clinical societies, etc.
 */
export interface ImplementationGuidesConfigurationResponse {
    /**
     * If US Core Missing Data requirement is enabled.
     */
    usCoreMissingData?: boolean;
}

/**
 * Event Hub ingestion endpoint configuration
 */
export interface IotEventHubIngestionEndpointConfigurationResponse {
    /**
     * Consumer group of the event hub to connected to.
     */
    consumerGroup?: string;
    /**
     * Event Hub name to connect to.
     */
    eventHubName?: string;
    /**
     * Fully qualified namespace of the Event Hub to connect to.
     */
    fullyQualifiedEventHubNamespace?: string;
}

/**
 * The mapping content.
 */
export interface IotMappingPropertiesResponse {
    /**
     * The mapping.
     */
    content?: any;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * The settings for history tracking for FHIR resources.
 */
export interface ResourceVersionPolicyConfigurationResponse {
    /**
     * The default value for tracking history across all resources.
     */
    default?: string;
    /**
     * A list of FHIR Resources and their version policy overrides.
     */
    resourceTypeOverrides?: {[key: string]: string};
}

/**
 * An access policy entry.
 */
export interface ServiceAccessPolicyEntryResponse {
    /**
     * An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.
     */
    objectId: string;
}

/**
 * Azure container registry configuration information
 */
export interface ServiceAcrConfigurationInfoResponse {
    /**
     * The list of the ACR login servers.
     */
    loginServers?: string[];
    /**
     * The list of Open Container Initiative (OCI) artifacts.
     */
    ociArtifacts?: ServiceOciArtifactEntryResponse[];
}

/**
 * Authentication configuration information
 */
export interface ServiceAuthenticationConfigurationInfoResponse {
    /**
     * The audience url for the service
     */
    audience?: string;
    /**
     * The authority url for the service
     */
    authority?: string;
    /**
     * If the SMART on FHIR proxy is enabled
     */
    smartProxyEnabled?: boolean;
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface ServiceCorsConfigurationInfoResponse {
    /**
     * If credentials are allowed via CORS.
     */
    allowCredentials?: boolean;
    /**
     * The headers to be allowed via CORS.
     */
    headers?: string[];
    /**
     * The max age to be allowed via CORS.
     */
    maxAge?: number;
    /**
     * The methods to be allowed via CORS.
     */
    methods?: string[];
    /**
     * The origins to be allowed via CORS.
     */
    origins?: string[];
}

/**
 * The settings for the Cosmos DB database backing the service.
 */
export interface ServiceCosmosDbConfigurationInfoResponse {
    /**
     * The multi-tenant application id used to enable CMK access for services in a data sovereign region.
     */
    crossTenantCmkApplicationId?: string;
    /**
     * The URI of the customer-managed key for the backing database.
     */
    keyVaultKeyUri?: string;
    /**
     * The provisioned throughput for the backing database.
     */
    offerThroughput?: number;
}

/**
 * Export operation configuration information
 */
export interface ServiceExportConfigurationInfoResponse {
    /**
     * The name of the default export storage account.
     */
    storageAccountName?: string;
}

/**
 * Import operation configuration information
 */
export interface ServiceImportConfigurationInfoResponse {
    /**
     * If the import operation is enabled.
     */
    enabled?: boolean;
    /**
     * If the FHIR service is in InitialImportMode.
     */
    initialImportMode?: boolean;
    /**
     * The name of the default integration storage account.
     */
    integrationDataStore?: string;
}

/**
 * Setting indicating whether the service has a managed identity associated with it.
 */
export interface ServiceManagedIdentityResponseIdentity {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of identity being specified, currently SystemAssigned and None are allowed.
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * An Open Container Initiative (OCI) artifact.
 */
export interface ServiceOciArtifactEntryResponse {
    /**
     * The artifact digest.
     */
    digest?: string;
    /**
     * The artifact name.
     */
    imageName?: string;
    /**
     * The Azure Container Registry login server.
     */
    loginServer?: string;
}

/**
 * The properties of a service instance.
 */
export interface ServicesPropertiesResponse {
    /**
     * The access policies of the service instance.
     */
    accessPolicies?: ServiceAccessPolicyEntryResponse[];
    /**
     * The azure container registry settings used for convert data operation of the service instance.
     */
    acrConfiguration?: ServiceAcrConfigurationInfoResponse;
    /**
     * The authentication configuration for the service instance.
     */
    authenticationConfiguration?: ServiceAuthenticationConfigurationInfoResponse;
    /**
     * The settings for the CORS configuration of the service instance.
     */
    corsConfiguration?: ServiceCorsConfigurationInfoResponse;
    /**
     * The settings for the Cosmos DB database backing the service.
     */
    cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfoResponse;
    /**
     * The settings for the export operation of the service instance.
     */
    exportConfiguration?: ServiceExportConfigurationInfoResponse;
    /**
     * The settings for the import operation of the service instance.
     */
    importConfiguration?: ServiceImportConfigurationInfoResponse;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    privateEndpointConnections?: PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    publicNetworkAccess?: string;
}

/**
 * Setting indicating whether the service has a managed identity associated with it.
 */
export interface ServicesResourceResponseIdentity {
    /**
     * The principal ID of the resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of the resource.
     */
    tenantId: string;
    /**
     * Type of identity being specified, currently SystemAssigned and None are allowed.
     */
    type?: string;
}

/**
 * An Application configured in the Identity Provider used to access FHIR resources.
 */
export interface SmartIdentityProviderApplicationResponse {
    /**
     * The actions that are permitted to be performed on FHIR resources for the application.
     */
    allowedDataActions?: string[];
    /**
     * The audience that will be used to validate bearer tokens against the given authority.
     */
    audience?: string;
    /**
     * The application client id defined in the identity provider. This value will be used to validate bearer tokens against the given authority.
     */
    clientId?: string;
}

/**
 * An object to configure an identity provider for use with SMART on FHIR authentication.
 */
export interface SmartIdentityProviderConfigurationResponse {
    /**
     * The array of identity provider applications for SMART on FHIR authentication.
     */
    applications?: SmartIdentityProviderApplicationResponse[];
    /**
     * The identity provider token authority also known as the token issuing authority.
     */
    authority?: string;
}

/**
 * The configuration of connected storage
 */
export interface StorageConfigurationResponse {
    /**
     * The filesystem name of connected storage account.
     */
    fileSystemName?: string;
    /**
     * The resource id of connected storage account.
     */
    storageResourceId?: string;
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
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * Workspaces resource specific properties.
 */
export interface WorkspaceResponseProperties {
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    publicNetworkAccess: string;
}
