import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties related to Azure Data Explorer (Adx) Resource
 */
export interface AdxProfileResponse {
    /**
     * Data Ingestion Uri of Adx Resource
     */
    dataIngestionUri: string;
    /**
     * Resource Id of Adx Resource
     */
    id: string;
    /**
     * Uri of Adx Resource
     */
    uri: string;
}

/**
 * The properties related to Aks Resource
 */
export interface AksProfileResponse {
    /**
     * Resource Id of AKS Resource
     */
    id: string;
}

/**
 * Information about application versions
 */
export interface ApplicationVersionResponse {
    /**
     * Is Deprecated
     */
    isDeprecated: boolean;
    /**
     * Is Latest
     */
    isLatest: boolean;
    /**
     * Is Preview
     */
    isPreview: boolean;
    /**
     * Application Version
     */
    version: string;
}

/**
 * The properties related to CMK
 */
export interface CmkProfileResponse {
    /**
     * URI of Key in AKV
     */
    keyUri: string;
}

/**
 * The properties related to Database Resource
 */
export interface DatabaseProfileResponse {
    /**
     * Resource Id of Cosmos Resource
     */
    cosmosId: string;
}

/**
 * The properties related to Deny Assignment Exclusions
 */
export interface DenyAssignmentExclusionResponse {
    /**
     * Object Id of Identity
     */
    id: string;
    /**
     * Type of Identity
     */
    type: string;
}

/**
 * The properties related to EventHub Resource
 */
export interface EventHubProfileResponse {
    /**
     * Resource Id of Adx Instance
     */
    adxInstanceId: string;
    /**
     * Host Name
     */
    hostName: string;
}

/**
 * The properties related to Fabric
 */
export interface FabricProfileResponse {
    /**
     * Azure Key Vault Uri
     */
    keyUri: string;
    /**
     * One Lake Path
     */
    oneLakePath: string;
    /**
     * URI of One Lake
     */
    oneLakeUri: string;
}

/**
 * The properties related to Azure Function App Resource
 */
export interface FunctionAppProfileResponse {
    /**
     * Resource Id of Azure Function App Resource
     */
    id: string;
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
 * Configuration of the managed resource group associated with the resource.
 */
export interface ManagedResourceGroupConfigurationResponse {
    /**
     * The resource group location.
     */
    location: string;
    /**
     * The resource group name.
     */
    name: string;
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
 * Details of the ManufacturingPlatform MdsResource.
 */
export interface MdsResourcePropertiesResponse {
    /**
     * AAD Application Id.
     */
    aadApplicationId: string;
    /**
     * Profile of Adx Created.
     */
    adxProfile: AdxProfileResponse;
    /**
     * AKS Admin Group Id.
     */
    aksAdminGroupId?: string;
    /**
     * Profile of AKS Created.
     */
    aksProfile: AksProfileResponse;
    /**
     * Profile of CMK Settings.
     */
    cmkProfile?: CmkProfileResponse;
    /**
     * Profile of Database Created.
     */
    databaseProfile: DatabaseProfileResponse;
    /**
     * Deny Assignments exclusion list.
     */
    denyAssignmentExclusions?: DenyAssignmentExclusionResponse[];
    /**
     * Enable Copilot.
     */
    enableCopilot?: boolean;
    /**
     * Enable Diagnostic Settings.
     */
    enableDiagnosticSettings?: boolean;
    /**
     * Profile of EventHub Resource.
     */
    eventHubProfile: EventHubProfileResponse;
    /**
     * Profile of Fabric resources.
     */
    fabricProfile?: FabricProfileResponse;
    /**
     * Profile of Function App Resource.
     */
    functionAppProfile: FunctionAppProfileResponse;
    /**
     * Managed On Behalf Of Configuration.
     */
    managedOnBehalfOfConfiguration: ManagedOnBehalfOfConfigurationResponse;
    /**
     * Configuration of the managed resource group associated with the resource.
     */
    managedResourceGroupConfiguration: ManagedResourceGroupConfigurationResponse;
    /**
     * Profile of Monitoring Resource Created.
     */
    monitoringProfile: MonitoringProfileResponse;
    /**
     * Profile of OpenAI Resource.
     */
    openAIProfile?: OpenAIProfileResponse;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Profile of Azure Redis Created.
     */
    redisProfile: RedisProfileResponse;
    /**
     * Zone redundancy state for resources
     */
    redundancyState?: string;
    /**
     * State of the resource
     */
    resourceState?: string;
    /**
     * Service Url
     */
    serviceUrl: string;
    /**
     * Profile of Storage Created.
     */
    storageProfile: StorageProfileResponse;
    /**
     * Profile of User Managed OpenAI Resource.
     */
    userManagedOpenAIProfile?: UserManagedOpenAIProfileResponse;
    /**
     * Mds Resource Version.
     */
    version?: string;
}
/**
 * mdsResourcePropertiesResponseProvideDefaults sets the appropriate defaults for MdsResourcePropertiesResponse
 */
export function mdsResourcePropertiesResponseProvideDefaults(val: MdsResourcePropertiesResponse): MdsResourcePropertiesResponse {
    return {
        ...val,
        aksAdminGroupId: (val.aksAdminGroupId) ?? "00000000-0000-0000-0000-000000000000",
    };
}

/**
 * MoboBroker resource.
 */
export interface MoboBrokerResourceResponse {
    /**
     * Resource Id of MoboBrokerResource
     */
    id: string;
}

/**
 * The properties related to Monitoring Resource
 */
export interface MonitoringProfileResponse {
    /**
     * Resource Id of Application Insights Resource
     */
    id: string;
}

/**
 * The properties related to OpenAI Resource
 */
export interface OpenAIProfileResponse {
    /**
     * Embedding Model Capacity
     */
    embeddingModelCapacity?: number;
    /**
     * Embedding Model Name
     */
    embeddingModelName?: string;
    /**
     * Embedding Model SKU Name
     */
    embeddingModelSkuName?: string;
    /**
     * Embedding Model Version
     */
    embeddingModelVersion?: string;
    /**
     * GPT Model Capacity
     */
    gptModelCapacity?: number;
    /**
     * GPT Model Name
     */
    gptModelName?: string;
    /**
     * GPT Model SKU Name
     */
    gptModelSkuName?: string;
    /**
     * GPT Model Version
     */
    gptModelVersion?: string;
    /**
     * Resource Id of OpenAI Resource
     */
    id: string;
}

/**
 * The properties related to Azure Redis Cache Resource
 */
export interface RedisProfileResponse {
    /**
     * Resource Id of Azure Redis Cache Resource
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
 * The properties related to Storage Resource
 */
export interface StorageProfileResponse {
    /**
     * Resource Id of Storage Resource
     */
    id: string;
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
 * The properties related to User Managed OpenAI Resource
 */
export interface UserManagedOpenAIProfileResponse {
    /**
     * Embedding Model Deployment Name
     */
    embeddingModelDeploymentName: string;
    /**
     * Embedding Model Type
     */
    embeddingModelType: string;
    /**
     * GPT Model Deployment Name
     */
    gptModelDeploymentName: string;
    /**
     * Resource Id of OpenAI Resource
     */
    id: string;
}
