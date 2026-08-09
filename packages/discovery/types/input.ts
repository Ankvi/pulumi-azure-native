import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Azure NetApp Files properties.
 */
export interface AzureNetAppFilesStoreArgs {
    /**
     * The kind of the backing storage store.
     * Expected value is 'AzureNetAppFiles'.
     */
    kind: pulumi.Input<"AzureNetAppFiles">;
    /**
     * The associated Azure NetApp Files volume ID.
     */
    netAppVolumeId: pulumi.Input<string>;
}

/**
 * The Azure storage blob properties.
 */
export interface AzureStorageBlobStoreArgs {
    /**
     * The kind of the backing storage store.
     * Expected value is 'AzureStorageBlob'.
     */
    kind: pulumi.Input<"AzureStorageBlob">;
    /**
     * The associated Azure Storage Account ID.
     */
    storageAccountId: pulumi.Input<string>;
}

/**
 * Key Vault Properties with clientId selection
 */
export interface BookshelfKeyVaultPropertiesArgs {
    /**
     * The client ID of the identity to use for accessing the Key Vault. Must be a workload identity assigned to the Bookshelf resource.
     */
    identityClientId: pulumi.Input<string>;
    /**
     * The Key Name in Key Vault
     */
    keyName: pulumi.Input<string>;
    /**
     * The Key Vault URI
     */
    keyVaultUri: pulumi.Input<string>;
    /**
     * The Key Version in Key Vault
     */
    keyVersion?: pulumi.Input<string | undefined>;
}

/**
 * Bookshelf properties
 */
export interface BookshelfPropertiesArgs {
    /**
     * Whether or not to use a customer managed key when encrypting data at rest
     */
    customerManagedKeys?: pulumi.Input<string | enums.CustomerManagedKeys | undefined>;
    /**
     * The key to use for encrypting data at rest when customer managed keys are enabled. Required if Customer Managed Keys is enabled.
     */
    keyVaultProperties?: pulumi.Input<BookshelfKeyVaultPropertiesArgs | undefined>;
    /**
     * The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
     */
    logAnalyticsClusterId?: pulumi.Input<string | undefined>;
    /**
     * Private Endpoint Subnet ID for private endpoint connections.
     */
    privateEndpointSubnetId?: pulumi.Input<string | undefined>;
    /**
     * Whether or not public network access is allowed for this resource. For security reasons, it is recommended to disable it whenever possible.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess | undefined>;
    /**
     * Search Subnet ID for search resources.
     */
    searchSubnetId?: pulumi.Input<string | undefined>;
    /**
     * User assigned identity IDs to be used by knowledgebase workloads. The key value must be the resource ID of the identity resource.
     */
    workloadIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Defines a deployment binding a specific model family to a user-defined deployment name for chat inference.
 */
export interface ChatModelDeploymentPropertiesArgs {
    /**
     * Model format as published by the provider. Verify supported formats per region using the Model Catalog API.
     */
    modelFormat: pulumi.Input<string>;
    /**
     * Canonical provider model name available in the selected region. Verify supported values per region using the Model Catalog API.
     */
    modelName: pulumi.Input<string>;
}

/**
 * For user assigned identity resource property.
 */
export interface IdentityArgs {
    /**
     * The resource ID of the user assigned identity.
     */
    id: pulumi.Input<string>;
}

/**
 * For Key Vault Key references
 */
export interface KeyVaultPropertiesArgs {
    /**
     * The Key Name in Key Vault
     */
    keyName: pulumi.Input<string>;
    /**
     * The Key Vault URI
     */
    keyVaultUri: pulumi.Input<string>;
    /**
     * The Key Version in Key Vault
     */
    keyVersion?: pulumi.Input<string | undefined>;
}

/**
 * NodePool properties
 */
export interface NodePoolPropertiesArgs {
    /**
     * The maximum number of nodes.
     */
    maxNodeCount: pulumi.Input<number>;
    /**
     * The minimum number of nodes.
     */
    minNodeCount?: pulumi.Input<number | undefined>;
    /**
     * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
     */
    scaleSetPriority?: pulumi.Input<string | enums.ScaleSetPriority | undefined>;
    /**
     * The node pool subnet.
     */
    subnetId: pulumi.Input<string>;
    /**
     * The size of the underlying Azure VM.
     */
    vmSize: pulumi.Input<string | enums.VmSize>;
}
/**
 * nodePoolPropertiesArgsProvideDefaults sets the appropriate defaults for NodePoolPropertiesArgs
 */
export function nodePoolPropertiesArgsProvideDefaults(val: NodePoolPropertiesArgs): NodePoolPropertiesArgs {
    return {
        ...val,
        minNodeCount: (val.minNodeCount) ?? 0,
        scaleSetPriority: (val.scaleSetPriority) ?? "Regular",
    };
}

/**
 * Properties of the private endpoint connection.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
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
 * Project properties
 */
export interface ProjectPropertiesArgs {
    /**
     * Settings for the project.
     */
    settings?: pulumi.Input<ProjectSettingsArgs | undefined>;
    /**
     * Allowed StorageContainers (Control plane resource references).
     */
    storageContainerIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Settings schema for the project
 */
export interface ProjectSettingsArgs {
    /**
     * Default preferences to guide AI behaviors in this project.
     */
    behaviorPreferences?: pulumi.Input<string | undefined>;
}

/**
 * Storage Asset properties
 */
export interface StorageAssetPropertiesArgs {
    /**
     * The description
     */
    description: pulumi.Input<string>;
    /**
     * The path to the data within its parent container. This should be relative to the root of the parent container.
     */
    path?: pulumi.Input<string | undefined>;
}

/**
 * Storage Container properties
 */
export interface StorageContainerPropertiesArgs {
    /**
     * Storage store properties
     */
    storageStore: pulumi.Input<AzureNetAppFilesStoreArgs | AzureStorageBlobStoreArgs>;
}

/**
 * Dictionary of identity properties for the Supercomputer.
 */
export interface SupercomputerIdentitiesArgs {
    /**
     * Cluster identity ID.
     */
    clusterIdentity: pulumi.Input<IdentityArgs>;
    /**
     * Kubelet identity ID used by the supercomputer.
     *       This identity is used by the supercomputer at node level to access Azure resources.
     *       This identity must have ManagedIdentityOperator role on the clusterIdentity.
     */
    kubeletIdentity: pulumi.Input<IdentityArgs>;
    /**
     * User assigned identity IDs to be used by workloads as federated credentials running on supercomputer. The key value must be the resource ID of the identity resource.
     */
    workloadIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Supercomputer properties
 */
export interface SupercomputerPropertiesArgs {
    /**
     * Whether or not to use a customer managed key when encrypting data at rest
     */
    customerManagedKeys?: pulumi.Input<string | enums.CustomerManagedKeys | undefined>;
    /**
     * Disk Encryption Set ID to use for Customer Managed Keys encryption. Required if Customer Managed Keys is enabled.
     */
    diskEncryptionSetId?: pulumi.Input<string | undefined>;
    /**
     * Dictionary of identity properties.
     */
    identities: pulumi.Input<SupercomputerIdentitiesArgs>;
    /**
     * The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
     */
    logAnalyticsClusterId?: pulumi.Input<string | undefined>;
    /**
     * System Subnet ID associated with AKS apiserver. Must be delegated to Microsoft.ContainerService/managedClusters.
     *     It should have connectivity to the system subnet and nodepool subnets.
     */
    managementSubnetId?: pulumi.Input<string | undefined>;
    /**
     * Network egress type provisioned for the supercomputer workloads.
     *     Defaults to LoadBalancer if not specified.
     *     If None is specified, the customer is responsible for providing outbound connectivity for Supercomputer functionality.
     */
    outboundType?: pulumi.Input<string | enums.NetworkEgressType | undefined>;
    /**
     * System Subnet ID associated with managed NodePool for system resources.
     *     It should have connectivity to the child NodePool subnets.
     */
    subnetId: pulumi.Input<string>;
    /**
     * The SKU to use for the system node pool.
     */
    systemSku?: pulumi.Input<string | enums.SystemSku | undefined>;
}
/**
 * supercomputerPropertiesArgsProvideDefaults sets the appropriate defaults for SupercomputerPropertiesArgs
 */
export function supercomputerPropertiesArgsProvideDefaults(val: SupercomputerPropertiesArgs): SupercomputerPropertiesArgs {
    return {
        ...val,
        outboundType: (val.outboundType) ?? "LoadBalancer",
    };
}

/**
 * Discovery Tool list item properties
 */
export interface ToolPropertiesArgs {
    /**
     * The JSON content for defining a resource
     */
    definitionContent: any;
    /**
     * Environment variables to make available
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The version of a resource definition
     */
    version: pulumi.Input<string>;
}

/**
 * Workspace properties
 */
export interface WorkspacePropertiesArgs {
    /**
     * Agent Subnet ID for agent resources.
     */
    agentSubnetId?: pulumi.Input<string | undefined>;
    /**
     * Whether or not to use a customer managed key when encrypting data at rest
     */
    customerManagedKeys?: pulumi.Input<string | enums.CustomerManagedKeys | undefined>;
    /**
     * The key to use for encrypting data at rest when customer managed keys are enabled.
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs | undefined>;
    /**
     * The Log Analytics Cluster to use for debug logs. This is required when Customer Managed Keys are enabled.
     */
    logAnalyticsClusterId?: pulumi.Input<string | undefined>;
    /**
     * Private Endpoint Subnet ID for private endpoint connections.
     */
    privateEndpointSubnetId?: pulumi.Input<string | undefined>;
    /**
     * Whether or not public network access is allowed for this resource. For security reasons, it is recommended to disable it whenever possible.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess | undefined>;
    /**
     * List of linked SuperComputers.
     */
    supercomputerIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Identity IDs used for leveraging Workspace resources.
     */
    workspaceIdentity: pulumi.Input<IdentityArgs>;
    /**
     * Function Subnet ID for workspace resources.
     */
    workspaceSubnetId?: pulumi.Input<string | undefined>;
}
