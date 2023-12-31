import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A Machine Learning compute based on AKS.
     */
    export interface AKSArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'AKS'.
         */
        computeType: pulumi.Input<"AKS">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * AKS properties
         */
        properties?: pulumi.Input<AKSPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }
    /**
     * aksargsProvideDefaults sets the appropriate defaults for AKSArgs
     */
    export function aksargsProvideDefaults(val: AKSArgs): AKSArgs {
        return {
            ...val,
            properties: (val.properties ? pulumi.output(val.properties).apply(akspropertiesArgsProvideDefaults) : undefined),
        };
    }

    /**
     * AKS properties
     */
    export interface AKSPropertiesArgs {
        /**
         * Number of agents
         */
        agentCount?: pulumi.Input<number>;
        /**
         * Agent virtual machine size
         */
        agentVmSize?: pulumi.Input<string>;
        /**
         * AKS networking configuration for vnet
         */
        aksNetworkingConfiguration?: pulumi.Input<AksNetworkingConfigurationArgs>;
        /**
         * Cluster full qualified domain name
         */
        clusterFqdn?: pulumi.Input<string>;
        /**
         * Intended usage of the cluster
         */
        clusterPurpose?: pulumi.Input<string | enums.ClusterPurpose>;
        /**
         * Load Balancer Subnet
         */
        loadBalancerSubnet?: pulumi.Input<string>;
        /**
         * Load Balancer Type
         */
        loadBalancerType?: pulumi.Input<string | enums.LoadBalancerType>;
        /**
         * SSL configuration
         */
        sslConfiguration?: pulumi.Input<SslConfigurationArgs>;
    }
    /**
     * akspropertiesArgsProvideDefaults sets the appropriate defaults for AKSPropertiesArgs
     */
    export function akspropertiesArgsProvideDefaults(val: AKSPropertiesArgs): AKSPropertiesArgs {
        return {
            ...val,
            clusterPurpose: (val.clusterPurpose) ?? "FastProd",
            loadBalancerType: (val.loadBalancerType) ?? "PublicIp",
        };
    }

    /**
     * Advance configuration for AKS networking
     */
    export interface AksNetworkingConfigurationArgs {
        /**
         * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
         */
        dnsServiceIP?: pulumi.Input<string>;
        /**
         * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
         */
        dockerBridgeCidr?: pulumi.Input<string>;
        /**
         * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: pulumi.Input<string>;
        /**
         * Virtual network subnet resource ID the compute nodes belong to
         */
        subnetId?: pulumi.Input<string>;
    }

    /**
     * An Azure Machine Learning compute.
     */
    export interface AmlComputeArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'AmlCompute'.
         */
        computeType: pulumi.Input<"AmlCompute">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * Properties of AmlCompute
         */
        properties?: pulumi.Input<AmlComputePropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }
    /**
     * amlComputeArgsProvideDefaults sets the appropriate defaults for AmlComputeArgs
     */
    export function amlComputeArgsProvideDefaults(val: AmlComputeArgs): AmlComputeArgs {
        return {
            ...val,
            properties: (val.properties ? pulumi.output(val.properties).apply(amlComputePropertiesArgsProvideDefaults) : undefined),
        };
    }

    /**
     * AML Compute properties
     */
    export interface AmlComputePropertiesArgs {
        /**
         * Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
         */
        enableNodePublicIp?: pulumi.Input<boolean>;
        /**
         * Network is isolated or not
         */
        isolatedNetwork?: pulumi.Input<boolean>;
        /**
         * Compute OS Type
         */
        osType?: pulumi.Input<string | enums.OsType>;
        /**
         * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
         */
        remoteLoginPortPublicAccess?: pulumi.Input<string | enums.RemoteLoginPortPublicAccess>;
        /**
         * Scale settings for AML Compute
         */
        scaleSettings?: pulumi.Input<ScaleSettingsArgs>;
        /**
         * Virtual network subnet resource ID the compute nodes belong to.
         */
        subnet?: pulumi.Input<ResourceIdArgs>;
        /**
         * Credentials for an administrator user account that will be created on each compute node.
         */
        userAccountCredentials?: pulumi.Input<UserAccountCredentialsArgs>;
        /**
         * Virtual Machine image for AML Compute - windows only
         */
        virtualMachineImage?: pulumi.Input<VirtualMachineImageArgs>;
        /**
         * Virtual Machine priority
         */
        vmPriority?: pulumi.Input<string | enums.VmPriority>;
        /**
         * Virtual Machine Size
         */
        vmSize?: pulumi.Input<string>;
    }
    /**
     * amlComputePropertiesArgsProvideDefaults sets the appropriate defaults for AmlComputePropertiesArgs
     */
    export function amlComputePropertiesArgsProvideDefaults(val: AmlComputePropertiesArgs): AmlComputePropertiesArgs {
        return {
            ...val,
            enableNodePublicIp: (val.enableNodePublicIp) ?? true,
            osType: (val.osType) ?? "Linux",
            remoteLoginPortPublicAccess: (val.remoteLoginPortPublicAccess) ?? "NotSpecified",
            scaleSettings: (val.scaleSettings ? pulumi.output(val.scaleSettings).apply(scaleSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * A user that can be assigned to a compute instance.
     */
    export interface AssignedUserArgs {
        /**
         * User’s AAD Object Id.
         */
        objectId: pulumi.Input<string>;
        /**
         * User’s AAD Tenant Id.
         */
        tenantId: pulumi.Input<string>;
    }

    /**
     * Auto pause properties
     */
    export interface AutoPausePropertiesArgs {
        delayInMinutes?: pulumi.Input<number>;
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Auto scale properties
     */
    export interface AutoScalePropertiesArgs {
        enabled?: pulumi.Input<boolean>;
        maxNodeCount?: pulumi.Input<number>;
        minNodeCount?: pulumi.Input<number>;
    }

    /**
     * An Azure Machine Learning compute instance.
     */
    export interface ComputeInstanceArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'ComputeInstance'.
         */
        computeType: pulumi.Input<"ComputeInstance">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * Properties of ComputeInstance
         */
        properties?: pulumi.Input<ComputeInstancePropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }
    /**
     * computeInstanceArgsProvideDefaults sets the appropriate defaults for ComputeInstanceArgs
     */
    export function computeInstanceArgsProvideDefaults(val: ComputeInstanceArgs): ComputeInstanceArgs {
        return {
            ...val,
            properties: (val.properties ? pulumi.output(val.properties).apply(computeInstancePropertiesArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Compute Instance properties
     */
    export interface ComputeInstancePropertiesArgs {
        /**
         * Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role.
         */
        applicationSharingPolicy?: pulumi.Input<string | enums.ApplicationSharingPolicy>;
        /**
         * The Compute Instance Authorization type. Available values are personal (default).
         */
        computeInstanceAuthorizationType?: pulumi.Input<string | enums.ComputeInstanceAuthorizationType>;
        /**
         * Settings for a personal compute instance.
         */
        personalComputeInstanceSettings?: pulumi.Input<PersonalComputeInstanceSettingsArgs>;
        /**
         * Details of customized scripts to execute for setting up the cluster.
         */
        setupScripts?: pulumi.Input<SetupScriptsArgs>;
        /**
         * Specifies policy and settings for SSH access.
         */
        sshSettings?: pulumi.Input<ComputeInstanceSshSettingsArgs>;
        /**
         * Virtual network subnet resource ID the compute nodes belong to.
         */
        subnet?: pulumi.Input<ResourceIdArgs>;
        /**
         * Virtual Machine Size
         */
        vmSize?: pulumi.Input<string>;
    }
    /**
     * computeInstancePropertiesArgsProvideDefaults sets the appropriate defaults for ComputeInstancePropertiesArgs
     */
    export function computeInstancePropertiesArgsProvideDefaults(val: ComputeInstancePropertiesArgs): ComputeInstancePropertiesArgs {
        return {
            ...val,
            applicationSharingPolicy: (val.applicationSharingPolicy) ?? "Shared",
            computeInstanceAuthorizationType: (val.computeInstanceAuthorizationType) ?? "personal",
            sshSettings: (val.sshSettings ? pulumi.output(val.sshSettings).apply(computeInstanceSshSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Specifies policy and settings for SSH access.
     */
    export interface ComputeInstanceSshSettingsArgs {
        /**
         * Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs.
         */
        adminPublicKey?: pulumi.Input<string>;
        /**
         * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable.
         */
        sshPublicAccess?: pulumi.Input<string | enums.SshPublicAccess>;
    }
    /**
     * computeInstanceSshSettingsArgsProvideDefaults sets the appropriate defaults for ComputeInstanceSshSettingsArgs
     */
    export function computeInstanceSshSettingsArgsProvideDefaults(val: ComputeInstanceSshSettingsArgs): ComputeInstanceSshSettingsArgs {
        return {
            ...val,
            sshPublicAccess: (val.sshPublicAccess) ?? "Disabled",
        };
    }

    export interface CosmosDbSettingsArgs {
        /**
         * The throughput of the collections in cosmosdb database
         */
        collectionsThroughput?: pulumi.Input<number>;
    }

    /**
     * A DataFactory compute.
     */
    export interface DataFactoryArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'DataFactory'.
         */
        computeType: pulumi.Input<"DataFactory">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * A DataLakeAnalytics compute.
     */
    export interface DataLakeAnalyticsArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'DataLakeAnalytics'.
         */
        computeType: pulumi.Input<"DataLakeAnalytics">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        properties?: pulumi.Input<DataLakeAnalyticsPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

    export interface DataLakeAnalyticsPropertiesArgs {
        /**
         * DataLake Store Account Name
         */
        dataLakeStoreAccountName?: pulumi.Input<string>;
    }

    /**
     * A DataFactory compute.
     */
    export interface DatabricksArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'Databricks'.
         */
        computeType: pulumi.Input<"Databricks">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * Properties of Databricks
         */
        properties?: pulumi.Input<DatabricksPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Properties of Databricks
     */
    export interface DatabricksPropertiesArgs {
        /**
         * Databricks access token
         */
        databricksAccessToken?: pulumi.Input<string>;
        /**
         * Workspace Url
         */
        workspaceUrl?: pulumi.Input<string>;
    }

    export interface EncryptionPropertyArgs {
        /**
         * The Bring-Your-Own cosmosdb account that customer brings to store data
         */
        cosmosDbResourceId?: pulumi.Input<string>;
        /**
         * The identity that will be used to access the key vault for encryption at rest.
         */
        identity?: pulumi.Input<IdentityForCmkArgs>;
        /**
         * Customer Key vault properties.
         */
        keyVaultProperties: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * The Bring-Your-Own search account that customer brings to store index
         */
        searchAccountResourceId?: pulumi.Input<string>;
        /**
         * Indicates whether or not the encryption is enabled for the workspace.
         */
        status: pulumi.Input<string | enums.EncryptionStatus>;
        /**
         * The Bring-Your-Own storage account that customer brings to store data
         */
        storageAccountResourceId?: pulumi.Input<string>;
    }

    /**
     * A HDInsight compute.
     */
    export interface HDInsightArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'HDInsight'.
         */
        computeType: pulumi.Input<"HDInsight">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * HDInsight compute properties
         */
        properties?: pulumi.Input<HDInsightPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * HDInsight compute properties
     */
    export interface HDInsightPropertiesArgs {
        /**
         * Public IP address of the master node of the cluster.
         */
        address?: pulumi.Input<string>;
        /**
         * Admin credentials for master node of the cluster
         */
        administratorAccount?: pulumi.Input<VirtualMachineSshCredentialsArgs>;
        /**
         * Port open for ssh connections on the master node of the cluster.
         */
        sshPort?: pulumi.Input<number>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The user assigned identities associated with the resource.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Identity that will be used to access key vault for encryption at rest
     */
    export interface IdentityForCmkArgs {
        /**
         * The ArmId of the user assigned identity that will be used to access the customer managed key vault
         */
        userAssignedIdentity?: pulumi.Input<string>;
    }

    /**
     * Instance type schema.
     */
    export interface InstanceTypeSchemaArgs {
        /**
         * Node Selector
         */
        nodeSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource requests/limits for this instance type
         */
        resources?: pulumi.Input<InstanceTypeSchemaResourcesArgs>;
    }

    /**
     * Resource requests/limits for this instance type
     */
    export interface InstanceTypeSchemaResourcesArgs {
        /**
         * Resource limits for this instance type
         */
        limits?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource requests for this instance type
         */
        requests?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    export interface KeyVaultPropertiesArgs {
        /**
         * For future use - The client id of the identity which will be used to access key vault.
         */
        identityClientId?: pulumi.Input<string>;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier: pulumi.Input<string>;
        /**
         * The ArmId of the keyVault where the customer owned encryption key is present.
         */
        keyVaultArmId: pulumi.Input<string>;
    }

    /**
     * A Machine Learning compute based on Kubernetes Compute.
     */
    export interface KubernetesArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'Kubernetes'.
         */
        computeType: pulumi.Input<"Kubernetes">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * Properties of Kubernetes
         */
        properties?: pulumi.Input<KubernetesPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }
    /**
     * kubernetesArgsProvideDefaults sets the appropriate defaults for KubernetesArgs
     */
    export function kubernetesArgsProvideDefaults(val: KubernetesArgs): KubernetesArgs {
        return {
            ...val,
            properties: (val.properties ? pulumi.output(val.properties).apply(kubernetesPropertiesArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Kubernetes properties
     */
    export interface KubernetesPropertiesArgs {
        /**
         * Default instance type
         */
        defaultInstanceType?: pulumi.Input<string>;
        /**
         * Extension instance release train.
         */
        extensionInstanceReleaseTrain?: pulumi.Input<string>;
        /**
         * Extension principal-id.
         */
        extensionPrincipalId?: pulumi.Input<string>;
        /**
         * Instance Type Schema
         */
        instanceTypes?: pulumi.Input<{[key: string]: pulumi.Input<InstanceTypeSchemaArgs>}>;
        /**
         * Compute namespace
         */
        namespace?: pulumi.Input<string>;
        /**
         * Relay connection string.
         */
        relayConnectionString?: pulumi.Input<string>;
        /**
         * ServiceBus connection string.
         */
        serviceBusConnectionString?: pulumi.Input<string>;
        /**
         * VC name.
         */
        vcName?: pulumi.Input<string>;
    }
    /**
     * kubernetesPropertiesArgsProvideDefaults sets the appropriate defaults for KubernetesPropertiesArgs
     */
    export function kubernetesPropertiesArgsProvideDefaults(val: KubernetesPropertiesArgs): KubernetesPropertiesArgs {
        return {
            ...val,
            namespace: (val.namespace) ?? "default",
        };
    }

    /**
     * Settings for a personal compute instance.
     */
    export interface PersonalComputeInstanceSettingsArgs {
        /**
         * A user explicitly assigned to a personal compute instance.
         */
        assignedUser?: pulumi.Input<AssignedUserArgs>;
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
     * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
     */
    export interface ResourceIdArgs {
        /**
         * The ID of the resource
         */
        id: pulumi.Input<string>;
    }

    /**
     * scale settings for AML Compute
     */
    export interface ScaleSettingsArgs {
        /**
         * Max number of nodes to use
         */
        maxNodeCount: pulumi.Input<number>;
        /**
         * Min number of nodes to use
         */
        minNodeCount?: pulumi.Input<number>;
        /**
         * Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.
         */
        nodeIdleTimeBeforeScaleDown?: pulumi.Input<string>;
    }
    /**
     * scaleSettingsArgsProvideDefaults sets the appropriate defaults for ScaleSettingsArgs
     */
    export function scaleSettingsArgsProvideDefaults(val: ScaleSettingsArgs): ScaleSettingsArgs {
        return {
            ...val,
            minNodeCount: (val.minNodeCount) ?? 0,
        };
    }

    /**
     * Script reference
     */
    export interface ScriptReferenceArgs {
        /**
         * Optional command line arguments passed to the script to run.
         */
        scriptArguments?: pulumi.Input<string>;
        /**
         * The location of scripts in the mounted volume.
         */
        scriptData?: pulumi.Input<string>;
        /**
         * The storage source of the script: inline, workspace.
         */
        scriptSource?: pulumi.Input<string>;
        /**
         * Optional time period passed to timeout command.
         */
        timeout?: pulumi.Input<string>;
    }

    /**
     * Customized setup scripts
     */
    export interface ScriptsToExecuteArgs {
        /**
         * Script that's run only once during provision of the compute.
         */
        creationScript?: pulumi.Input<ScriptReferenceArgs>;
        /**
         * Script that's run every time the machine starts.
         */
        startupScript?: pulumi.Input<ScriptReferenceArgs>;
    }

    export interface ServiceManagedResourcesSettingsArgs {
        /**
         * The settings for the service managed cosmosdb account.
         */
        cosmosDb?: pulumi.Input<CosmosDbSettingsArgs>;
    }

    /**
     * Details of customized scripts to execute for setting up the cluster.
     */
    export interface SetupScriptsArgs {
        /**
         * Customized setup scripts
         */
        scripts?: pulumi.Input<ScriptsToExecuteArgs>;
    }

    export interface SharedPrivateLinkResourceArgs {
        /**
         * The private link resource group id.
         */
        groupId?: pulumi.Input<string>;
        /**
         * Unique name of the private link.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource id that private link links to.
         */
        privateLinkResourceId?: pulumi.Input<string>;
        /**
         * Request message.
         */
        requestMessage?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * Sku of the resource
     */
    export interface SkuArgs {
        /**
         * Name of the sku
         */
        name?: pulumi.Input<string>;
        /**
         * Tier of the sku like Basic or Enterprise
         */
        tier?: pulumi.Input<string>;
    }

    /**
     * The ssl configuration for scoring
     */
    export interface SslConfigurationArgs {
        /**
         * Cert data
         */
        cert?: pulumi.Input<string>;
        /**
         * CNAME of the cert
         */
        cname?: pulumi.Input<string>;
        /**
         * Key data
         */
        key?: pulumi.Input<string>;
        /**
         * Leaf domain label of public endpoint
         */
        leafDomainLabel?: pulumi.Input<string>;
        /**
         * Indicates whether to overwrite existing domain label.
         */
        overwriteExistingDomain?: pulumi.Input<boolean>;
        /**
         * Enable or disable ssl for scoring
         */
        status?: pulumi.Input<string>;
    }

    /**
     * A SynapseSpark compute.
     */
    export interface SynapseSparkArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'SynapseSpark'.
         */
        computeType: pulumi.Input<"SynapseSpark">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        properties?: pulumi.Input<SynapseSparkPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

    export interface SynapseSparkPropertiesArgs {
        /**
         * Auto pause properties.
         */
        autoPauseProperties?: pulumi.Input<AutoPausePropertiesArgs>;
        /**
         * Auto scale properties.
         */
        autoScaleProperties?: pulumi.Input<AutoScalePropertiesArgs>;
        /**
         * The number of compute nodes currently assigned to the compute.
         */
        nodeCount?: pulumi.Input<number>;
        /**
         * Node size.
         */
        nodeSize?: pulumi.Input<string>;
        /**
         * Node size family.
         */
        nodeSizeFamily?: pulumi.Input<string>;
        /**
         * Pool name.
         */
        poolName?: pulumi.Input<string>;
        /**
         * Name of the resource group in which workspace is located.
         */
        resourceGroup?: pulumi.Input<string>;
        /**
         * Spark version.
         */
        sparkVersion?: pulumi.Input<string>;
        /**
         * Azure subscription identifier.
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * Name of Azure Machine Learning workspace.
         */
        workspaceName?: pulumi.Input<string>;
    }

    /**
     * Settings for user account that gets created on each on the nodes of a compute.
     */
    export interface UserAccountCredentialsArgs {
        /**
         * Name of the administrator user account which can be used to SSH to nodes.
         */
        adminUserName: pulumi.Input<string>;
        /**
         * Password of the administrator user account.
         */
        adminUserPassword?: pulumi.Input<string>;
        /**
         * SSH public key of the administrator user account.
         */
        adminUserSshPublicKey?: pulumi.Input<string>;
    }

    /**
     * A Machine Learning compute based on Azure Virtual Machines.
     */
    export interface VirtualMachineArgs {
        /**
         * Location for the underlying compute
         */
        computeLocation?: pulumi.Input<string>;
        /**
         * The type of compute
         * Expected value is 'VirtualMachine'.
         */
        computeType: pulumi.Input<"VirtualMachine">;
        /**
         * The description of the Machine Learning compute.
         */
        description?: pulumi.Input<string>;
        /**
         * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        properties?: pulumi.Input<VirtualMachinePropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Virtual Machine image for Windows AML Compute
     */
    export interface VirtualMachineImageArgs {
        /**
         * Virtual Machine image path
         */
        id: pulumi.Input<string>;
    }

    export interface VirtualMachinePropertiesArgs {
        /**
         * Public IP address of the virtual machine.
         */
        address?: pulumi.Input<string>;
        /**
         * Admin credentials for virtual machine
         */
        administratorAccount?: pulumi.Input<VirtualMachineSshCredentialsArgs>;
        /**
         * Indicates whether this compute will be used for running notebooks.
         */
        isNotebookInstanceCompute?: pulumi.Input<boolean>;
        /**
         * Port open for ssh connections.
         */
        sshPort?: pulumi.Input<number>;
        /**
         * Virtual Machine size
         */
        virtualMachineSize?: pulumi.Input<string>;
    }

    /**
     * Admin credentials for virtual machine
     */
    export interface VirtualMachineSshCredentialsArgs {
        /**
         * Password of admin account
         */
        password?: pulumi.Input<string>;
        /**
         * Private key data
         */
        privateKeyData?: pulumi.Input<string>;
        /**
         * Public key data
         */
        publicKeyData?: pulumi.Input<string>;
        /**
         * Username of admin account
         */
        username?: pulumi.Input<string>;
    }
