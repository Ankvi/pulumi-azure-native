import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Config of the AgriService resource instance.
 */
export interface AgriServiceConfigResponse {
    /**
     * App service resource Id.
     */
    appServiceResourceId: string;
    /**
     * Cosmos Db resource Id.
     */
    cosmosDbResourceId: string;
    /**
     * Instance URI of the AgriService instance.
     */
    instanceUri: string;
    /**
     * Key vault resource Id.
     */
    keyVaultResourceId: string;
    /**
     * Redis cache resource Id.
     */
    redisCacheResourceId: string;
    /**
     * Storage account resource Id.
     */
    storageAccountResourceId: string;
    /**
     * Version of AgriService instance.
     */
    version: string;
}

/**
 * Details of the Agriculture AgriDataManager.
 */
export interface AgriServiceResourcePropertiesResponse {
    /**
     * Config of the AgriService instance.
     */
    config?: AgriServiceConfigResponse;
    /**
     * Data connector credentials of AgriService instance.
     */
    dataConnectorCredentials?: DataConnectorCredentialMapResponse[];
    /**
     * AgriService installed solutions.
     */
    installedSolutions?: InstalledSolutionMapResponse[];
    /**
     * Managed On Behalf Of Configuration.
     */
    managedOnBehalfOfConfiguration: ManagedOnBehalfOfConfigurationResponse;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

/**
 * Mapping of data connector credentials.
 */
export interface DataConnectorCredentialMapResponse {
    /**
     * The key representing the credential.
     */
    key: string;
    /**
     * The data connector credential value.
     */
    value: DataConnectorCredentialsResponse;
}

/**
 * The properties related to an AgriService data connector.
 */
export interface DataConnectorCredentialsResponse {
    /**
     * Client Id associated with the provider, if type of credentials is OAuthClientCredentials.
     */
    clientId?: string;
    /**
     * Name of the key vault key.
     */
    keyName?: string;
    /**
     * Uri of the key vault
     */
    keyVaultUri?: string;
    /**
     * Version of the key vault key.
     */
    keyVersion?: string;
    /**
     * Type of credential.
     */
    kind?: string;
}

/**
 * Data Manager for Agriculture solution.
 */
export interface DataManagerForAgricultureSolutionResponse {
    /**
     * Entra application Id used to access azure data manager for agriculture instance.
     */
    accessAzureDataManagerForAgricultureApplicationId: string;
    /**
     * Entra application name used to access azure data manager for agriculture instance.
     */
    accessAzureDataManagerForAgricultureApplicationName: string;
    /**
     * Data access scopes.
     */
    dataAccessScopes: string[];
    /**
     * Whether solution inference will validate input.
     */
    isValidateInput: boolean;
    /**
     * Marketplace offer details.
     */
    marketPlaceOfferDetails: MarketPlaceOfferDetailsResponse;
    /**
     * Partner Id.
     */
    partnerId: string;
    /**
     * Partner tenant Id.
     */
    partnerTenantId: string;
    /**
     * Saas application Id.
     */
    saasApplicationId: string;
    /**
     * Solution Id.
     */
    solutionId: string;
}

/**
 * Mapping of installed solutions.
 */
export interface InstalledSolutionMapResponse {
    /**
     * The key representing the installed solution.
     */
    key: string;
    /**
     * The installed solution value.
     */
    value: SolutionResponse;
}

/**
 * Configuration of the managed on behalf of resource.
 */
export interface ManagedOnBehalfOfConfigurationResponse {
    /**
     * Associated MoboBrokerResources.
     */
    moboBrokerResources: MoboBrokerResourceResponse[];
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Marketplace offer details of Agri solution.
 */
export interface MarketPlaceOfferDetailsResponse {
    /**
     * Publisher Id.
     */
    publisherId: string;
    /**
     * Saas offer Id.
     */
    saasOfferId: string;
}

/**
 * MoboBroker resource.
 */
export interface MoboBrokerResourceResponse {
    /**
     * The fully qualified resource ID of the MoboBroker resource.
     * Example: `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}`
     */
    id: string;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuResponse {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: string;
}

/**
 * Installed data manager for Agriculture solution detail.
 */
export interface SolutionResponse {
    /**
     * Application name of the solution.
     */
    applicationName?: string;
    /**
     * Marketplace publisher Id.
     */
    marketPlacePublisherId?: string;
    /**
     * Partner Id.
     */
    partnerId?: string;
    /**
     * Plan Id.
     */
    planId?: string;
    /**
     * Saas subscription Id.
     */
    saasSubscriptionId?: string;
    /**
     * Saas subscription name.
     */
    saasSubscriptionName?: string;
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
