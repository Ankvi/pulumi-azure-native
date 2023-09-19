import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Auto-pausing properties of a Big Data pool powered by Apache Spark
     */
    export interface AutoPausePropertiesArgs {
        /**
         * Number of minutes of idle time before the Big Data pool is automatically paused.
         */
        delayInMinutes?: pulumi.Input<number>;
        /**
         * Whether auto-pausing is enabled for the Big Data pool.
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Auto-scaling properties of a Big Data pool powered by Apache Spark
     */
    export interface AutoScalePropertiesArgs {
        /**
         * Whether automatic scaling is enabled for the Big Data pool.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The maximum number of nodes the Big Data pool can support.
         */
        maxNodeCount?: pulumi.Input<number>;
        /**
         * The minimum number of nodes the Big Data pool can support.
         */
        minNodeCount?: pulumi.Input<number>;
    }

    /**
     * Initial workspace AAD admin properties for a CSP subscription
     */
    export interface CspWorkspaceAdminPropertiesArgs {
        /**
         * AAD object ID of initial workspace admin
         */
        initialWorkspaceAdminObjectId?: pulumi.Input<string>;
    }

    /**
     * Details of the customer managed key associated with the workspace
     */
    export interface CustomerManagedKeyDetailsArgs {
        /**
         * Key encryption key
         */
        kekIdentity?: pulumi.Input<KekIdentityPropertiesArgs>;
        /**
         * The key object of the workspace
         */
        key?: pulumi.Input<WorkspaceKeyDetailsArgs>;
    }

    /**
     * Details of the data lake storage account associated with the workspace
     */
    export interface DataLakeStorageAccountDetailsArgs {
        /**
         * Account URL
         */
        accountUrl?: pulumi.Input<string>;
        /**
         * Filesystem name
         */
        filesystem?: pulumi.Input<string>;
    }

    /**
     * Dynamic Executor Allocation Properties
     */
    export interface DynamicExecutorAllocationArgs {
        /**
         * Indicates whether Dynamic Executor Allocation is enabled or not.
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Details of the encryption associated with the workspace
     */
    export interface EncryptionDetailsArgs {
        /**
         * Customer Managed Key Details
         */
        cmk?: pulumi.Input<CustomerManagedKeyDetailsArgs>;
    }

    /**
     * Key encryption key properties
     */
    export interface KekIdentityPropertiesArgs {
        /**
         * Boolean specifying whether to use system assigned identity or not
         */
        useSystemAssignedIdentity?: any;
        /**
         * User assigned identity resource Id
         */
        userAssignedIdentity?: pulumi.Input<string>;
    }

    /**
     * Library/package information of a Big Data pool powered by Apache Spark
     */
    export interface LibraryInfoArgs {
        /**
         * Storage blob container name.
         */
        containerName?: pulumi.Input<string>;
        /**
         * Name of the library.
         */
        name?: pulumi.Input<string>;
        /**
         * Storage blob path of library.
         */
        path?: pulumi.Input<string>;
        /**
         * Type of the library.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Library requirements for a Big Data pool powered by Apache Spark
     */
    export interface LibraryRequirementsArgs {
        /**
         * The library requirements.
         */
        content?: pulumi.Input<string>;
        /**
         * The filename of the library requirements file.
         */
        filename?: pulumi.Input<string>;
    }

    /**
     * The workspace managed identity
     */
    export interface ManagedIdentityArgs {
        /**
         * The type of managed identity for the workspace
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The user assigned managed identities.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Managed Virtual Network Settings
     */
    export interface ManagedVirtualNetworkSettingsArgs {
        /**
         * Allowed Aad Tenant Ids For Linking
         */
        allowedAadTenantIdsForLinking?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Linked Access Check On Target Resource
         */
        linkedAccessCheckOnTargetResource?: pulumi.Input<boolean>;
        /**
         * Prevent Data Exfiltration
         */
        preventDataExfiltration?: pulumi.Input<boolean>;
    }

    /**
     * A private endpoint connection
     */
    export interface PrivateEndpointConnectionArgs {
        /**
         * Connection state of the private endpoint connection.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    }

    /**
     * Connection state details of the private endpoint
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * The private link service connection description.
         */
        description?: pulumi.Input<string>;
        /**
         * The private link service connection status.
         */
        status?: pulumi.Input<string>;
    }

    /**
     * Purview Configuration
     */
    export interface PurviewConfigurationArgs {
        /**
         * Purview Resource ID
         */
        purviewResourceId?: pulumi.Input<string>;
    }

    /**
     * SQL pool SKU
     */
    export interface SkuArgs {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: pulumi.Input<number>;
        /**
         * The SKU name
         */
        name?: pulumi.Input<string>;
        /**
         * The service tier
         */
        tier?: pulumi.Input<string>;
    }

    /**
     * Virtual Network Profile
     */
    export interface VirtualNetworkProfileArgs {
        /**
         * Subnet ID used for computes in workspace
         */
        computeSubnetId?: pulumi.Input<string>;
    }

    /**
     * Details of the customer managed key associated with the workspace
     */
    export interface WorkspaceKeyDetailsArgs {
        /**
         * Workspace Key sub-resource key vault url
         */
        keyVaultUrl?: pulumi.Input<string>;
        /**
         * Workspace Key sub-resource name
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Git integration settings
     */
    export interface WorkspaceRepositoryConfigurationArgs {
        /**
         * Account name
         */
        accountName?: pulumi.Input<string>;
        /**
         * Collaboration branch
         */
        collaborationBranch?: pulumi.Input<string>;
        /**
         * GitHub Enterprise host name. For example: https://github.mydomain.com
         */
        hostName?: pulumi.Input<string>;
        /**
         * The last commit ID
         */
        lastCommitId?: pulumi.Input<string>;
        /**
         * VSTS project name
         */
        projectName?: pulumi.Input<string>;
        /**
         * Repository name
         */
        repositoryName?: pulumi.Input<string>;
        /**
         * Root folder to use in the repository
         */
        rootFolder?: pulumi.Input<string>;
        /**
         * The VSTS tenant ID
         */
        tenantId?: pulumi.Input<string>;
        /**
         * Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration
         */
        type?: pulumi.Input<string>;
    }
