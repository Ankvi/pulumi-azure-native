import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Auto-pausing properties of a Big Data pool powered by Apache Spark
     */
    export interface AutoPausePropertiesResponse {
        /**
         * Number of minutes of idle time before the Big Data pool is automatically paused.
         */
        delayInMinutes?: number;
        /**
         * Whether auto-pausing is enabled for the Big Data pool.
         */
        enabled?: boolean;
    }

    /**
     * Auto-scaling properties of a Big Data pool powered by Apache Spark
     */
    export interface AutoScalePropertiesResponse {
        /**
         * Whether automatic scaling is enabled for the Big Data pool.
         */
        enabled?: boolean;
        /**
         * The maximum number of nodes the Big Data pool can support.
         */
        maxNodeCount?: number;
        /**
         * The minimum number of nodes the Big Data pool can support.
         */
        minNodeCount?: number;
    }

    /**
     * Initial workspace AAD admin properties for a CSP subscription
     */
    export interface CspWorkspaceAdminPropertiesResponse {
        /**
         * AAD object ID of initial workspace admin
         */
        initialWorkspaceAdminObjectId?: string;
    }

    /**
     * Details of the customer managed key associated with the workspace
     */
    export interface CustomerManagedKeyDetailsResponse {
        /**
         * Key encryption key
         */
        kekIdentity?: KekIdentityPropertiesResponse;
        /**
         * The key object of the workspace
         */
        key?: WorkspaceKeyDetailsResponse;
        /**
         * The customer managed key status on the workspace
         */
        status: string;
    }

    /**
     * Details of the data lake storage account associated with the workspace
     */
    export interface DataLakeStorageAccountDetailsResponse {
        /**
         * Account URL
         */
        accountUrl?: string;
        /**
         * Filesystem name
         */
        filesystem?: string;
    }

    /**
     * Dynamic Executor Allocation Properties
     */
    export interface DynamicExecutorAllocationResponse {
        /**
         * Indicates whether Dynamic Executor Allocation is enabled or not.
         */
        enabled?: boolean;
    }

    /**
     * Details of the encryption associated with the workspace
     */
    export interface EncryptionDetailsResponse {
        /**
         * Customer Managed Key Details
         */
        cmk?: CustomerManagedKeyDetailsResponse;
        /**
         * Double Encryption enabled
         */
        doubleEncryptionEnabled: boolean;
    }

    /**
     * Key encryption key properties
     */
    export interface KekIdentityPropertiesResponse {
        /**
         * Boolean specifying whether to use system assigned identity or not
         */
        useSystemAssignedIdentity?: any;
        /**
         * User assigned identity resource Id
         */
        userAssignedIdentity?: string;
    }

    /**
     * Library/package information of a Big Data pool powered by Apache Spark
     */
    export interface LibraryInfoResponse {
        /**
         * Storage blob container name.
         */
        containerName?: string;
        /**
         * Creator Id of the library/package.
         */
        creatorId: string;
        /**
         * Name of the library.
         */
        name?: string;
        /**
         * Storage blob path of library.
         */
        path?: string;
        /**
         * Provisioning status of the library/package.
         */
        provisioningStatus: string;
        /**
         * Type of the library.
         */
        type?: string;
        /**
         * The last update time of the library.
         */
        uploadedTimestamp: string;
    }

    /**
     * Library requirements for a Big Data pool powered by Apache Spark
     */
    export interface LibraryRequirementsResponse {
        /**
         * The library requirements.
         */
        content?: string;
        /**
         * The filename of the library requirements file.
         */
        filename?: string;
        /**
         * The last update time of the library requirements file.
         */
        time: string;
    }

    /**
     * The workspace managed identity
     */
    export interface ManagedIdentityResponse {
        /**
         * The principal ID of the workspace managed identity
         */
        principalId: string;
        /**
         * The tenant ID of the workspace managed identity
         */
        tenantId: string;
        /**
         * The type of managed identity for the workspace
         */
        type?: string;
        /**
         * The user assigned managed identities.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedManagedIdentityResponse};
    }

    /**
     * Managed Virtual Network Settings
     */
    export interface ManagedVirtualNetworkSettingsResponse {
        /**
         * Allowed Aad Tenant Ids For Linking
         */
        allowedAadTenantIdsForLinking?: string[];
        /**
         * Linked Access Check On Target Resource
         */
        linkedAccessCheckOnTargetResource?: boolean;
        /**
         * Prevent Data Exfiltration
         */
        preventDataExfiltration?: boolean;
    }

    /**
     * A private endpoint connection
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
         * The private endpoint which the connection belongs to.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * Connection state of the private endpoint connection.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * Provisioning state of the private endpoint connection.
         */
        provisioningState: string;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Private endpoint details
     */
    export interface PrivateEndpointResponse {
        /**
         * Resource id of the private endpoint.
         */
        id: string;
    }

    /**
     * Connection state details of the private endpoint
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * The actions required for private link service connection.
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    /**
     * Purview Configuration
     */
    export interface PurviewConfigurationResponse {
        /**
         * Purview Resource ID
         */
        purviewResourceId?: string;
    }

    /**
     * SQL pool SKU
     */
    export interface SkuResponse {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: number;
        /**
         * The SKU name
         */
        name?: string;
        /**
         * The service tier
         */
        tier?: string;
    }

    /**
     * User Assigned Managed Identity
     */
    export interface UserAssignedManagedIdentityResponse {
        /**
         * The client ID.
         */
        clientId: string;
        /**
         * The principal ID.
         */
        principalId: string;
    }

    /**
     * Virtual Network Profile
     */
    export interface VirtualNetworkProfileResponse {
        /**
         * Subnet ID used for computes in workspace
         */
        computeSubnetId?: string;
    }

    /**
     * Details of the customer managed key associated with the workspace
     */
    export interface WorkspaceKeyDetailsResponse {
        /**
         * Workspace Key sub-resource key vault url
         */
        keyVaultUrl?: string;
        /**
         * Workspace Key sub-resource name
         */
        name?: string;
    }

    /**
     * Git integration settings
     */
    export interface WorkspaceRepositoryConfigurationResponse {
        /**
         * Account name
         */
        accountName?: string;
        /**
         * Collaboration branch
         */
        collaborationBranch?: string;
        /**
         * GitHub Enterprise host name. For example: `https://github.mydomain.com`
         */
        hostName?: string;
        /**
         * The last commit ID
         */
        lastCommitId?: string;
        /**
         * VSTS project name
         */
        projectName?: string;
        /**
         * Repository name
         */
        repositoryName?: string;
        /**
         * Root folder to use in the repository
         */
        rootFolder?: string;
        /**
         * The VSTS tenant ID
         */
        tenantId?: string;
        /**
         * Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration
         */
        type?: string;
    }
