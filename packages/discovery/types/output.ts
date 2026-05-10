import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Azure NetApp Files properties.
 */
export interface AzureNetAppFilesStoreResponse {
    /**
     * The kind of the backing storage store.
     * Expected value is 'AzureNetAppFiles'.
     */
    kind: "AzureNetAppFiles";
    /**
     * The associated Azure NetApp Files volume ID.
     */
    netAppVolumeId: string;
}

/**
 * The Azure storage blob properties.
 */
export interface AzureStorageBlobStoreResponse {
    /**
     * The kind of the backing storage store.
     * Expected value is 'AzureStorageBlob'.
     */
    kind: "AzureStorageBlob";
    /**
     * The associated Azure Storage Account ID.
     */
    storageAccountId: string;
}

/**
 * Key Vault Properties with clientId selection
 */
export interface BookshelfKeyVaultPropertiesResponse {
    /**
     * The client ID of the identity to use for accessing the Key Vault. Must be a workload identity assigned to the Bookshelf resource.
     */
    identityClientId: string;
    /**
     * The Key Name in Key Vault
     */
    keyName: string;
    /**
     * The Key Vault URI
     */
    keyVaultUri: string;
    /**
     * The Key Version in Key Vault
     */
    keyVersion?: string;
}

/**
 * Bookshelf properties
 */
export interface BookshelfPropertiesResponse {
    /**
     * The bookshelf data plane API URI
     */
    bookshelfUri: string;
    /**
     * Whether or not to use a customer managed key when encrypting data at rest
     */
    customerManagedKeys?: string;
    /**
     * The key to use for encrypting data at rest when customer managed keys are enabled. Required if Customer Managed Keys is enabled.
     */
    keyVaultProperties?: BookshelfKeyVaultPropertiesResponse;
    /**
     * The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
     */
    logAnalyticsClusterId?: string;
    /**
     * Managed-On-Behalf-Of configuration properties. This configuration exists for the resources where a resource provider manages those resources on behalf of the resource owner.
     */
    managedOnBehalfOfConfiguration: WithMoboBrokerResourcesResponse;
    /**
     * The resource group for resources managed on behalf of customer.
     */
    managedResourceGroup: string;
    /**
     * List of private endpoint connections.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * Private Endpoint Subnet ID for private endpoint connections.
     */
    privateEndpointSubnetId?: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Whether or not public network access is allowed for this resource. For security reasons, it is recommended to disable it whenever possible.
     */
    publicNetworkAccess?: string;
    /**
     * Search Subnet ID for search resources.
     */
    searchSubnetId?: string;
    /**
     * User assigned identity IDs to be used by knowledgebase workloads. The key value must be the resource ID of the identity resource.
     */
    workloadIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Defines a deployment binding a specific model family to a user-defined deployment name for chat inference.
 */
export interface ChatModelDeploymentPropertiesResponse {
    /**
     * Model format as published by the provider. Verify supported formats per region using the Model Catalog API.
     */
    modelFormat: string;
    /**
     * Canonical provider model name available in the selected region. Verify supported values per region using the Model Catalog API.
     */
    modelName: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

/**
 * For user assigned identity resource property.
 */
export interface IdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The resource ID of the user assigned identity.
     */
    id: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * For Key Vault Key references
 */
export interface KeyVaultPropertiesResponse {
    /**
     * The Key Name in Key Vault
     */
    keyName: string;
    /**
     * The Key Vault URI
     */
    keyVaultUri: string;
    /**
     * The Key Version in Key Vault
     */
    keyVersion?: string;
}

/**
 * Managed-On-Behalf-Of broker resource. This resource is created by the Resource Provider to manage some resources on behalf of the user.
 */
export interface MoboBrokerResourceResponse {
    /**
     * Resource identifier of a Managed-On-Behalf-Of broker resource
     */
    id?: string;
}

/**
 * NodePool properties
 */
export interface NodePoolPropertiesResponse {
    /**
     * The maximum number of nodes.
     */
    maxNodeCount: number;
    /**
     * The minimum number of nodes.
     */
    minNodeCount?: number;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
     */
    scaleSetPriority?: string;
    /**
     * The node pool subnet.
     */
    subnetId: string;
    /**
     * The size of the underlying Azure VM.
     */
    vmSize: string;
}
/**
 * nodePoolPropertiesResponseProvideDefaults sets the appropriate defaults for NodePoolPropertiesResponse
 */
export function nodePoolPropertiesResponseProvideDefaults(val: NodePoolPropertiesResponse): NodePoolPropertiesResponse {
    return {
        ...val,
        minNodeCount: (val.minNodeCount) ?? 0,
        scaleSetPriority: (val.scaleSetPriority) ?? "Regular",
    };
}

/**
 * Properties of the private endpoint connection.
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * The private endpoint resource.
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
}

/**
 * The private endpoint connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The private endpoint resource.
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for private endpoint.
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
 * Project properties
 */
export interface ProjectPropertiesResponse {
    /**
     * Foundry project endpoint URI.
     */
    foundryProjectEndpoint: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Settings for the project.
     */
    settings?: ProjectSettingsResponse;
    /**
     * Allowed StorageContainers (Control plane resource references).
     */
    storageContainerIds?: string[];
}

/**
 * Settings schema for the project
 */
export interface ProjectSettingsResponse {
    /**
     * Default preferences to guide AI behaviors in this project.
     */
    behaviorPreferences?: string;
}

/**
 * Storage Asset properties
 */
export interface StorageAssetPropertiesResponse {
    /**
     * The description
     */
    description: string;
    /**
     * The path to the data within its parent container. This should be relative to the root of the parent container.
     */
    path?: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

/**
 * Storage Container properties
 */
export interface StorageContainerPropertiesResponse {
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Storage store properties
     */
    storageStore: AzureNetAppFilesStoreResponse | AzureStorageBlobStoreResponse;
}

/**
 * Dictionary of identity properties for the Supercomputer.
 */
export interface SupercomputerIdentitiesResponse {
    /**
     * Cluster identity ID.
     */
    clusterIdentity: IdentityResponse;
    /**
     * Kubelet identity ID used by the supercomputer.
     *       This identity is used by the supercomputer at node level to access Azure resources.
     *       This identity must have ManagedIdentityOperator role on the clusterIdentity.
     */
    kubeletIdentity: IdentityResponse;
    /**
     * User assigned identity IDs to be used by workloads as federated credentials running on supercomputer. The key value must be the resource ID of the identity resource.
     */
    workloadIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Supercomputer properties
 */
export interface SupercomputerPropertiesResponse {
    /**
     * Whether or not to use a customer managed key when encrypting data at rest
     */
    customerManagedKeys?: string;
    /**
     * Disk Encryption Set ID to use for Customer Managed Keys encryption. Required if Customer Managed Keys is enabled.
     */
    diskEncryptionSetId?: string;
    /**
     * Dictionary of identity properties.
     */
    identities: SupercomputerIdentitiesResponse;
    /**
     * The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
     */
    logAnalyticsClusterId?: string;
    /**
     * Managed-On-Behalf-Of configuration properties. This configuration exists for the resources where a resource provider manages those resources on behalf of the resource owner.
     */
    managedOnBehalfOfConfiguration: WithMoboBrokerResourcesResponse;
    /**
     * The resource group for resources managed on behalf of customer.
     */
    managedResourceGroup: string;
    /**
     * System Subnet ID associated with AKS apiserver. Must be delegated to Microsoft.ContainerService/managedClusters.
     *     It should have connectivity to the system subnet and nodepool subnets.
     */
    managementSubnetId?: string;
    /**
     * Network egress type provisioned for the supercomputer workloads.
     *     Defaults to LoadBalancer if not specified.
     *     If None is specified, the customer is responsible for providing outbound connectivity for Supercomputer functionality.
     */
    outboundType?: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * System Subnet ID associated with managed NodePool for system resources.
     *     It should have connectivity to the child NodePool subnets.
     */
    subnetId: string;
    /**
     * The SKU to use for the system node pool.
     */
    systemSku?: string;
}
/**
 * supercomputerPropertiesResponseProvideDefaults sets the appropriate defaults for SupercomputerPropertiesResponse
 */
export function supercomputerPropertiesResponseProvideDefaults(val: SupercomputerPropertiesResponse): SupercomputerPropertiesResponse {
    return {
        ...val,
        outboundType: (val.outboundType) ?? "LoadBalancer",
    };
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
 * Discovery Tool list item properties
 */
export interface ToolPropertiesResponse {
    /**
     * The JSON content for defining a resource
     */
    definitionContent: any;
    /**
     * Environment variables to make available
     */
    environmentVariables?: {[key: string]: string};
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * The version of a resource definition
     */
    version: string;
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
 * For tracking mobo resources
 */
export interface WithMoboBrokerResourcesResponse {
    /**
     * Managed-On-Behalf-Of broker resources
     */
    moboBrokerResources: MoboBrokerResourceResponse[];
}

/**
 * Workspace properties
 */
export interface WorkspacePropertiesResponse {
    /**
     * Agent Subnet ID for agent resources.
     */
    agentSubnetId?: string;
    /**
     * Whether or not to use a customer managed key when encrypting data at rest
     */
    customerManagedKeys?: string;
    /**
     * The key to use for encrypting data at rest when customer managed keys are enabled.
     */
    keyVaultProperties?: KeyVaultPropertiesResponse;
    /**
     * The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
     */
    logAnalyticsClusterId?: string;
    /**
     * Managed-On-Behalf-Of configuration properties. This configuration exists for the resources where a resource provider manages those resources on behalf of the resource owner.
     */
    managedOnBehalfOfConfiguration: WithMoboBrokerResourcesResponse;
    /**
     * The resource group for resources managed on behalf of customer.
     */
    managedResourceGroup: string;
    /**
     * List of private endpoint connections.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * Private Endpoint Subnet ID for private endpoint connections.
     */
    privateEndpointSubnetId?: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Whether or not public network access is allowed for this resource. For security reasons, it is recommended to disable it whenever possible.
     */
    publicNetworkAccess?: string;
    /**
     * List of linked SuperComputers.
     */
    supercomputerIds?: string[];
    /**
     * workspace API endpoint Uri.
     */
    workspaceApiUri: string;
    /**
     * Identity IDs used for leveraging Workspace resources.
     */
    workspaceIdentity: IdentityResponse;
    /**
     * Function Subnet ID for workspace resources.
     */
    workspaceSubnetId?: string;
    /**
     * workspace User Interface Uri.
     */
    workspaceUiUri: string;
}
