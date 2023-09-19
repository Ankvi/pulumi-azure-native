import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A Machine Learning compute based on AKS.
     */
    export interface AKSResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'AKS'.
         */
        computeType: "AKS";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        /**
         * AKS properties
         */
        properties?: AKSResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }
    /**
     * aksresponseProvideDefaults sets the appropriate defaults for AKSResponse
     */
    export function aksresponseProvideDefaults(val: AKSResponse): AKSResponse {
        return {
            ...val,
            properties: (val.properties ? aksresponsePropertiesProvideDefaults(val.properties) : undefined),
        };
    }

    /**
     * AKS properties
     */
    export interface AKSResponseProperties {
        /**
         * Number of agents
         */
        agentCount?: number;
        /**
         * Agent virtual machine size
         */
        agentVmSize?: string;
        /**
         * AKS networking configuration for vnet
         */
        aksNetworkingConfiguration?: AksNetworkingConfigurationResponse;
        /**
         * Cluster full qualified domain name
         */
        clusterFqdn?: string;
        /**
         * Intended usage of the cluster
         */
        clusterPurpose?: string;
        /**
         * Load Balancer Subnet
         */
        loadBalancerSubnet?: string;
        /**
         * Load Balancer Type
         */
        loadBalancerType?: string;
        /**
         * SSL configuration
         */
        sslConfiguration?: SslConfigurationResponse;
        /**
         * System services
         */
        systemServices: SystemServiceResponse[];
    }
    /**
     * aksresponsePropertiesProvideDefaults sets the appropriate defaults for AKSResponseProperties
     */
    export function aksresponsePropertiesProvideDefaults(val: AKSResponseProperties): AKSResponseProperties {
        return {
            ...val,
            clusterPurpose: (val.clusterPurpose) ?? "FastProd",
            loadBalancerType: (val.loadBalancerType) ?? "PublicIp",
        };
    }

    /**
     * Advance configuration for AKS networking
     */
    export interface AksNetworkingConfigurationResponse {
        /**
         * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
         */
        dnsServiceIP?: string;
        /**
         * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
         */
        dockerBridgeCidr?: string;
        /**
         * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: string;
        /**
         * Virtual network subnet resource ID the compute nodes belong to
         */
        subnetId?: string;
    }

    /**
     * Compute node information related to a AmlCompute.
     */
    export interface AmlComputeNodeInformationResponse {
        /**
         * ID of the compute node.
         */
        nodeId: string;
        /**
         * State of the compute node. Values are idle, running, preparing, unusable, leaving and preempted.
         */
        nodeState: string;
        /**
         * SSH port number of the node.
         */
        port: number;
        /**
         * Private IP address of the compute node.
         */
        privateIpAddress: string;
        /**
         * Public IP address of the compute node.
         */
        publicIpAddress: string;
        /**
         * ID of the Experiment running on the node, if any else null.
         */
        runId: string;
    }

    /**
     * AML Compute properties
     */
    export interface AmlComputePropertiesResponse {
        /**
         * Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute.
         */
        allocationState: string;
        /**
         * The time at which the compute entered its current allocation state.
         */
        allocationStateTransitionTime: string;
        /**
         * The number of compute nodes currently assigned to the compute.
         */
        currentNodeCount: number;
        /**
         * Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
         */
        enableNodePublicIp?: boolean;
        /**
         * Collection of errors encountered by various compute nodes during node setup.
         */
        errors: ErrorResponseResponse[];
        /**
         * Network is isolated or not
         */
        isolatedNetwork?: boolean;
        /**
         * Counts of various node states on the compute.
         */
        nodeStateCounts: NodeStateCountsResponse;
        /**
         * Compute OS Type
         */
        osType?: string;
        /**
         * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
         */
        remoteLoginPortPublicAccess?: string;
        /**
         * Scale settings for AML Compute
         */
        scaleSettings?: ScaleSettingsResponse;
        /**
         * Virtual network subnet resource ID the compute nodes belong to.
         */
        subnet?: ResourceIdResponse;
        /**
         * The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
         */
        targetNodeCount: number;
        /**
         * Credentials for an administrator user account that will be created on each compute node.
         */
        userAccountCredentials?: UserAccountCredentialsResponse;
        /**
         * Virtual Machine image for AML Compute - windows only
         */
        virtualMachineImage?: VirtualMachineImageResponse;
        /**
         * Virtual Machine priority
         */
        vmPriority?: string;
        /**
         * Virtual Machine Size
         */
        vmSize?: string;
    }
    /**
     * amlComputePropertiesResponseProvideDefaults sets the appropriate defaults for AmlComputePropertiesResponse
     */
    export function amlComputePropertiesResponseProvideDefaults(val: AmlComputePropertiesResponse): AmlComputePropertiesResponse {
        return {
            ...val,
            enableNodePublicIp: (val.enableNodePublicIp) ?? true,
            osType: (val.osType) ?? "Linux",
            remoteLoginPortPublicAccess: (val.remoteLoginPortPublicAccess) ?? "NotSpecified",
            scaleSettings: (val.scaleSettings ? scaleSettingsResponseProvideDefaults(val.scaleSettings) : undefined),
        };
    }

    /**
     * An Azure Machine Learning compute.
     */
    export interface AmlComputeResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'AmlCompute'.
         */
        computeType: "AmlCompute";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        /**
         * Properties of AmlCompute
         */
        properties?: AmlComputePropertiesResponse;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }
    /**
     * amlComputeResponseProvideDefaults sets the appropriate defaults for AmlComputeResponse
     */
    export function amlComputeResponseProvideDefaults(val: AmlComputeResponse): AmlComputeResponse {
        return {
            ...val,
            properties: (val.properties ? amlComputePropertiesResponseProvideDefaults(val.properties) : undefined),
        };
    }

    /**
     * A user that can be assigned to a compute instance.
     */
    export interface AssignedUserResponse {
        /**
         * User’s AAD Object Id.
         */
        objectId: string;
        /**
         * User’s AAD Tenant Id.
         */
        tenantId: string;
    }

    /**
     * Auto pause properties
     */
    export interface AutoPausePropertiesResponse {
        delayInMinutes?: number;
        enabled?: boolean;
    }

    /**
     * Auto scale properties
     */
    export interface AutoScalePropertiesResponse {
        enabled?: boolean;
        maxNodeCount?: number;
        minNodeCount?: number;
    }

    /**
     * Defines an Aml Instance application and its connectivity endpoint URI.
     */
    export interface ComputeInstanceApplicationResponse {
        /**
         * Name of the ComputeInstance application.
         */
        displayName?: string;
        /**
         * Application' endpoint URI.
         */
        endpointUri?: string;
    }

    /**
     * Defines all connectivity endpoints and properties for an ComputeInstance.
     */
    export interface ComputeInstanceConnectivityEndpointsResponse {
        /**
         * Private IP Address of this ComputeInstance (local to the VNET in which the compute instance is deployed).
         */
        privateIpAddress: string;
        /**
         * Public IP Address of this ComputeInstance.
         */
        publicIpAddress: string;
    }

    /**
     * Describes information on user who created this ComputeInstance.
     */
    export interface ComputeInstanceCreatedByResponse {
        /**
         * Uniquely identifies the user within his/her organization.
         */
        userId: string;
        /**
         * Name of the user.
         */
        userName: string;
        /**
         * Uniquely identifies user' Azure Active Directory organization.
         */
        userOrgId: string;
    }

    /**
     * The last operation on ComputeInstance.
     */
    export interface ComputeInstanceLastOperationResponse {
        /**
         * Name of the last operation.
         */
        operationName?: string;
        /**
         * Operation status.
         */
        operationStatus?: string;
        /**
         * Time of the last operation.
         */
        operationTime?: string;
    }

    /**
     * Compute Instance properties
     */
    export interface ComputeInstancePropertiesResponse {
        /**
         * Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role.
         */
        applicationSharingPolicy?: string;
        /**
         * Describes available applications and their endpoints on this ComputeInstance.
         */
        applications: ComputeInstanceApplicationResponse[];
        /**
         * The Compute Instance Authorization type. Available values are personal (default).
         */
        computeInstanceAuthorizationType?: string;
        /**
         * Describes all connectivity endpoints available for this ComputeInstance.
         */
        connectivityEndpoints: ComputeInstanceConnectivityEndpointsResponse;
        /**
         * Describes information on user who created this ComputeInstance.
         */
        createdBy: ComputeInstanceCreatedByResponse;
        /**
         * Collection of errors encountered on this ComputeInstance.
         */
        errors: ErrorResponseResponse[];
        /**
         * The last operation on ComputeInstance.
         */
        lastOperation: ComputeInstanceLastOperationResponse;
        /**
         * Settings for a personal compute instance.
         */
        personalComputeInstanceSettings?: PersonalComputeInstanceSettingsResponse;
        /**
         * Details of customized scripts to execute for setting up the cluster.
         */
        setupScripts?: SetupScriptsResponse;
        /**
         * Specifies policy and settings for SSH access.
         */
        sshSettings?: ComputeInstanceSshSettingsResponse;
        /**
         * The current state of this ComputeInstance.
         */
        state: string;
        /**
         * Virtual network subnet resource ID the compute nodes belong to.
         */
        subnet?: ResourceIdResponse;
        /**
         * Virtual Machine Size
         */
        vmSize?: string;
    }
    /**
     * computeInstancePropertiesResponseProvideDefaults sets the appropriate defaults for ComputeInstancePropertiesResponse
     */
    export function computeInstancePropertiesResponseProvideDefaults(val: ComputeInstancePropertiesResponse): ComputeInstancePropertiesResponse {
        return {
            ...val,
            applicationSharingPolicy: (val.applicationSharingPolicy) ?? "Shared",
            computeInstanceAuthorizationType: (val.computeInstanceAuthorizationType) ?? "personal",
            sshSettings: (val.sshSettings ? computeInstanceSshSettingsResponseProvideDefaults(val.sshSettings) : undefined),
        };
    }

    /**
     * An Azure Machine Learning compute instance.
     */
    export interface ComputeInstanceResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'ComputeInstance'.
         */
        computeType: "ComputeInstance";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        /**
         * Properties of ComputeInstance
         */
        properties?: ComputeInstancePropertiesResponse;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }
    /**
     * computeInstanceResponseProvideDefaults sets the appropriate defaults for ComputeInstanceResponse
     */
    export function computeInstanceResponseProvideDefaults(val: ComputeInstanceResponse): ComputeInstanceResponse {
        return {
            ...val,
            properties: (val.properties ? computeInstancePropertiesResponseProvideDefaults(val.properties) : undefined),
        };
    }

    /**
     * Specifies policy and settings for SSH access.
     */
    export interface ComputeInstanceSshSettingsResponse {
        /**
         * Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs.
         */
        adminPublicKey?: string;
        /**
         * Describes the admin user name.
         */
        adminUserName: string;
        /**
         * Describes the port for connecting through SSH.
         */
        sshPort: number;
        /**
         * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable.
         */
        sshPublicAccess?: string;
    }
    /**
     * computeInstanceSshSettingsResponseProvideDefaults sets the appropriate defaults for ComputeInstanceSshSettingsResponse
     */
    export function computeInstanceSshSettingsResponseProvideDefaults(val: ComputeInstanceSshSettingsResponse): ComputeInstanceSshSettingsResponse {
        return {
            ...val,
            sshPublicAccess: (val.sshPublicAccess) ?? "Disabled",
        };
    }

    export interface CosmosDbSettingsResponse {
        /**
         * The throughput of the collections in cosmosdb database
         */
        collectionsThroughput?: number;
    }

    /**
     * A DataFactory compute.
     */
    export interface DataFactoryResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'DataFactory'.
         */
        computeType: "DataFactory";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }

    /**
     * A DataLakeAnalytics compute.
     */
    export interface DataLakeAnalyticsResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'DataLakeAnalytics'.
         */
        computeType: "DataLakeAnalytics";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        properties?: DataLakeAnalyticsResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }

    export interface DataLakeAnalyticsResponseProperties {
        /**
         * DataLake Store Account Name
         */
        dataLakeStoreAccountName?: string;
    }

    /**
     * Properties of Databricks
     */
    export interface DatabricksPropertiesResponse {
        /**
         * Databricks access token
         */
        databricksAccessToken?: string;
        /**
         * Workspace Url
         */
        workspaceUrl?: string;
    }

    /**
     * A DataFactory compute.
     */
    export interface DatabricksResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'Databricks'.
         */
        computeType: "Databricks";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        /**
         * Properties of Databricks
         */
        properties?: DatabricksPropertiesResponse;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }

    export interface EncryptionPropertyResponse {
        /**
         * The Bring-Your-Own cosmosdb account that customer brings to store data
         */
        cosmosDbResourceId?: string;
        /**
         * The identity that will be used to access the key vault for encryption at rest.
         */
        identity?: IdentityForCmkResponse;
        /**
         * Customer Key vault properties.
         */
        keyVaultProperties: KeyVaultPropertiesResponse;
        /**
         * The Bring-Your-Own search account that customer brings to store index
         */
        searchAccountResourceId?: string;
        /**
         * Indicates whether or not the encryption is enabled for the workspace.
         */
        status: string;
        /**
         * The Bring-Your-Own storage account that customer brings to store data
         */
        storageAccountResourceId?: string;
    }

    /**
     * The resource management error additional info.
     */
    export interface ErrorAdditionalInfoResponse {
        /**
         * The additional info.
         */
        info: any;
        /**
         * The additional info type.
         */
        type: string;
    }

    /**
     * The error detail.
     */
    export interface ErrorDetailResponse {
        /**
         * The error additional info.
         */
        additionalInfo: ErrorAdditionalInfoResponse[];
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details: ErrorDetailResponse[];
        /**
         * The error message.
         */
        message: string;
        /**
         * The error target.
         */
        target: string;
    }

    /**
     * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
     */
    export interface ErrorResponseResponse {
        /**
         * The error object.
         */
        error?: ErrorDetailResponse;
    }

    /**
     * HDInsight compute properties
     */
    export interface HDInsightPropertiesResponse {
        /**
         * Public IP address of the master node of the cluster.
         */
        address?: string;
        /**
         * Admin credentials for master node of the cluster
         */
        administratorAccount?: VirtualMachineSshCredentialsResponse;
        /**
         * Port open for ssh connections on the master node of the cluster.
         */
        sshPort?: number;
    }

    /**
     * A HDInsight compute.
     */
    export interface HDInsightResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'HDInsight'.
         */
        computeType: "HDInsight";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        /**
         * HDInsight compute properties
         */
        properties?: HDInsightPropertiesResponse;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }

    /**
     * Identity that will be used to access key vault for encryption at rest
     */
    export interface IdentityForCmkResponse {
        /**
         * The ArmId of the user assigned identity that will be used to access the customer managed key vault
         */
        userAssignedIdentity?: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
        /**
         * The user assigned identities associated with the resource.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Instance type schema.
     */
    export interface InstanceTypeSchemaResponse {
        /**
         * Node Selector
         */
        nodeSelector?: {[key: string]: string};
        /**
         * Resource requests/limits for this instance type
         */
        resources?: InstanceTypeSchemaResponseResources;
    }

    /**
     * Resource requests/limits for this instance type
     */
    export interface InstanceTypeSchemaResponseResources {
        /**
         * Resource limits for this instance type
         */
        limits?: {[key: string]: string};
        /**
         * Resource requests for this instance type
         */
        requests?: {[key: string]: string};
    }

    export interface KeyVaultPropertiesResponse {
        /**
         * For future use - The client id of the identity which will be used to access key vault.
         */
        identityClientId?: string;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier: string;
        /**
         * The ArmId of the keyVault where the customer owned encryption key is present.
         */
        keyVaultArmId: string;
    }

    /**
     * Kubernetes properties
     */
    export interface KubernetesPropertiesResponse {
        /**
         * Default instance type
         */
        defaultInstanceType?: string;
        /**
         * Extension instance release train.
         */
        extensionInstanceReleaseTrain?: string;
        /**
         * Extension principal-id.
         */
        extensionPrincipalId?: string;
        /**
         * Instance Type Schema
         */
        instanceTypes?: {[key: string]: InstanceTypeSchemaResponse};
        /**
         * Compute namespace
         */
        namespace?: string;
        /**
         * Relay connection string.
         */
        relayConnectionString?: string;
        /**
         * ServiceBus connection string.
         */
        serviceBusConnectionString?: string;
        /**
         * VC name.
         */
        vcName?: string;
    }
    /**
     * kubernetesPropertiesResponseProvideDefaults sets the appropriate defaults for KubernetesPropertiesResponse
     */
    export function kubernetesPropertiesResponseProvideDefaults(val: KubernetesPropertiesResponse): KubernetesPropertiesResponse {
        return {
            ...val,
            namespace: (val.namespace) ?? "default",
        };
    }

    /**
     * A Machine Learning compute based on Kubernetes Compute.
     */
    export interface KubernetesResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'Kubernetes'.
         */
        computeType: "Kubernetes";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        /**
         * Properties of Kubernetes
         */
        properties?: KubernetesPropertiesResponse;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }
    /**
     * kubernetesResponseProvideDefaults sets the appropriate defaults for KubernetesResponse
     */
    export function kubernetesResponseProvideDefaults(val: KubernetesResponse): KubernetesResponse {
        return {
            ...val,
            properties: (val.properties ? kubernetesPropertiesResponseProvideDefaults(val.properties) : undefined),
        };
    }

    export interface ListNotebookKeysResultResponse {
        primaryAccessKey: string;
        secondaryAccessKey: string;
    }

    /**
     * Counts of various compute node states on the amlCompute.
     */
    export interface NodeStateCountsResponse {
        /**
         * Number of compute nodes in idle state.
         */
        idleNodeCount: number;
        /**
         * Number of compute nodes which are leaving the amlCompute.
         */
        leavingNodeCount: number;
        /**
         * Number of compute nodes which are in preempted state.
         */
        preemptedNodeCount: number;
        /**
         * Number of compute nodes which are being prepared.
         */
        preparingNodeCount: number;
        /**
         * Number of compute nodes which are running jobs.
         */
        runningNodeCount: number;
        /**
         * Number of compute nodes which are in unusable state.
         */
        unusableNodeCount: number;
    }

    export interface NotebookPreparationErrorResponse {
        errorMessage?: string;
        statusCode?: number;
    }

    export interface NotebookResourceInfoResponse {
        fqdn?: string;
        /**
         * The error that occurs when preparing notebook.
         */
        notebookPreparationError?: NotebookPreparationErrorResponse;
        /**
         * the data plane resourceId that used to initialize notebook component
         */
        resourceId?: string;
    }

    export interface PasswordResponse {
        name: string;
        value: string;
    }

    /**
     * Settings for a personal compute instance.
     */
    export interface PersonalComputeInstanceSettingsResponse {
        /**
         * A user explicitly assigned to a personal compute instance.
         */
        assignedUser?: AssignedUserResponse;
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
         * The identity of the resource.
         */
        identity?: IdentityResponse;
        /**
         * Specifies the location of the resource.
         */
        location?: string;
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
         * The sku of the workspace.
         */
        sku?: SkuResponse;
        /**
         * System data
         */
        systemData: SystemDataResponse;
        /**
         * Contains resource tags defined as key/value pairs.
         */
        tags?: {[key: string]: string};
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
        /**
         * The ARM identifier for Subnet resource that private endpoint links to
         */
        subnetArmId: string;
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

    export interface RegistryListCredentialsResultResponse {
        location: string;
        passwords?: PasswordResponse[];
        username: string;
    }

    /**
     * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
     */
    export interface ResourceIdResponse {
        /**
         * The ID of the resource
         */
        id: string;
    }

    /**
     * scale settings for AML Compute
     */
    export interface ScaleSettingsResponse {
        /**
         * Max number of nodes to use
         */
        maxNodeCount: number;
        /**
         * Min number of nodes to use
         */
        minNodeCount?: number;
        /**
         * Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.
         */
        nodeIdleTimeBeforeScaleDown?: string;
    }
    /**
     * scaleSettingsResponseProvideDefaults sets the appropriate defaults for ScaleSettingsResponse
     */
    export function scaleSettingsResponseProvideDefaults(val: ScaleSettingsResponse): ScaleSettingsResponse {
        return {
            ...val,
            minNodeCount: (val.minNodeCount) ?? 0,
        };
    }

    /**
     * Script reference
     */
    export interface ScriptReferenceResponse {
        /**
         * Optional command line arguments passed to the script to run.
         */
        scriptArguments?: string;
        /**
         * The location of scripts in the mounted volume.
         */
        scriptData?: string;
        /**
         * The storage source of the script: inline, workspace.
         */
        scriptSource?: string;
        /**
         * Optional time period passed to timeout command.
         */
        timeout?: string;
    }

    /**
     * Customized setup scripts
     */
    export interface ScriptsToExecuteResponse {
        /**
         * Script that's run only once during provision of the compute.
         */
        creationScript?: ScriptReferenceResponse;
        /**
         * Script that's run every time the machine starts.
         */
        startupScript?: ScriptReferenceResponse;
    }

    export interface ServiceManagedResourcesSettingsResponse {
        /**
         * The settings for the service managed cosmosdb account.
         */
        cosmosDb?: CosmosDbSettingsResponse;
    }

    /**
     * Details of customized scripts to execute for setting up the cluster.
     */
    export interface SetupScriptsResponse {
        /**
         * Customized setup scripts
         */
        scripts?: ScriptsToExecuteResponse;
    }

    export interface SharedPrivateLinkResourceResponse {
        /**
         * The private link resource group id.
         */
        groupId?: string;
        /**
         * Unique name of the private link.
         */
        name?: string;
        /**
         * The resource id that private link links to.
         */
        privateLinkResourceId?: string;
        /**
         * Request message.
         */
        requestMessage?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Sku of the resource
     */
    export interface SkuResponse {
        /**
         * Name of the sku
         */
        name?: string;
        /**
         * Tier of the sku like Basic or Enterprise
         */
        tier?: string;
    }

    /**
     * The ssl configuration for scoring
     */
    export interface SslConfigurationResponse {
        /**
         * Cert data
         */
        cert?: string;
        /**
         * CNAME of the cert
         */
        cname?: string;
        /**
         * Key data
         */
        key?: string;
        /**
         * Leaf domain label of public endpoint
         */
        leafDomainLabel?: string;
        /**
         * Indicates whether to overwrite existing domain label.
         */
        overwriteExistingDomain?: boolean;
        /**
         * Enable or disable ssl for scoring
         */
        status?: string;
    }

    /**
     * A SynapseSpark compute.
     */
    export interface SynapseSparkResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'SynapseSpark'.
         */
        computeType: "SynapseSpark";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        properties?: SynapseSparkResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }

    export interface SynapseSparkResponseProperties {
        /**
         * Auto pause properties.
         */
        autoPauseProperties?: AutoPausePropertiesResponse;
        /**
         * Auto scale properties.
         */
        autoScaleProperties?: AutoScalePropertiesResponse;
        /**
         * The number of compute nodes currently assigned to the compute.
         */
        nodeCount?: number;
        /**
         * Node size.
         */
        nodeSize?: string;
        /**
         * Node size family.
         */
        nodeSizeFamily?: string;
        /**
         * Pool name.
         */
        poolName?: string;
        /**
         * Name of the resource group in which workspace is located.
         */
        resourceGroup?: string;
        /**
         * Spark version.
         */
        sparkVersion?: string;
        /**
         * Azure subscription identifier.
         */
        subscriptionId?: string;
        /**
         * Name of Azure Machine Learning workspace.
         */
        workspaceName?: string;
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
     * A system service running on a compute.
     */
    export interface SystemServiceResponse {
        /**
         * Public IP address
         */
        publicIpAddress: string;
        /**
         * The type of this system service.
         */
        systemServiceType: string;
        /**
         * The version for this type.
         */
        version: string;
    }

    /**
     * Settings for user account that gets created on each on the nodes of a compute.
     */
    export interface UserAccountCredentialsResponse {
        /**
         * Name of the administrator user account which can be used to SSH to nodes.
         */
        adminUserName: string;
        /**
         * Password of the administrator user account.
         */
        adminUserPassword?: string;
        /**
         * SSH public key of the administrator user account.
         */
        adminUserSshPublicKey?: string;
    }

    /**
     * User Assigned Identity
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The clientId(aka appId) of the user assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the user assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the user assigned identity.
         */
        tenantId: string;
    }

    /**
     * Virtual Machine image for Windows AML Compute
     */
    export interface VirtualMachineImageResponse {
        /**
         * Virtual Machine image path
         */
        id: string;
    }

    /**
     * A Machine Learning compute based on Azure Virtual Machines.
     */
    export interface VirtualMachineResponse {
        /**
         * Location for the underlying compute
         */
        computeLocation?: string;
        /**
         * The type of compute
         * Expected value is 'VirtualMachine'.
         */
        computeType: "VirtualMachine";
        /**
         * The time at which the compute was created.
         */
        createdOn: string;
        /**
         * The description of the Machine Learning compute.
         */
        description?: string;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: boolean;
        /**
         * Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
         */
        isAttachedCompute: boolean;
        /**
         * The time at which the compute was last modified.
         */
        modifiedOn: string;
        properties?: VirtualMachineResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: ErrorResponseResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }

    export interface VirtualMachineResponseProperties {
        /**
         * Public IP address of the virtual machine.
         */
        address?: string;
        /**
         * Admin credentials for virtual machine
         */
        administratorAccount?: VirtualMachineSshCredentialsResponse;
        /**
         * Indicates whether this compute will be used for running notebooks.
         */
        isNotebookInstanceCompute?: boolean;
        /**
         * Port open for ssh connections.
         */
        sshPort?: number;
        /**
         * Virtual Machine size
         */
        virtualMachineSize?: string;
    }

    /**
     * Admin credentials for virtual machine
     */
    export interface VirtualMachineSshCredentialsResponse {
        /**
         * Password of admin account
         */
        password?: string;
        /**
         * Private key data
         */
        privateKeyData?: string;
        /**
         * Public key data
         */
        publicKeyData?: string;
        /**
         * Username of admin account
         */
        username?: string;
    }
