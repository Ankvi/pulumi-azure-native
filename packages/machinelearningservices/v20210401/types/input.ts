import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of the data collection options specified.
     */
    export interface ACIServiceCreateRequestDataCollectionArgs {
        /**
         * Option for enabling/disabling Event Hub.
         */
        eventHubEnabled?: pulumi.Input<boolean>;
        /**
         * Option for enabling/disabling storage.
         */
        storageEnabled?: pulumi.Input<boolean>;
    }

    /**
     * The encryption properties.
     */
    export interface ACIServiceCreateRequestEncryptionPropertiesArgs {
        /**
         * Encryption Key name
         */
        keyName: pulumi.Input<string>;
        /**
         * Encryption Key Version
         */
        keyVersion: pulumi.Input<string>;
        /**
         * vault base Url
         */
        vaultBaseUrl: pulumi.Input<string>;
    }

    /**
     * The virtual network configuration.
     */
    export interface ACIServiceCreateRequestVnetConfigurationArgs {
        /**
         * The name of the virtual network subnet.
         */
        subnetName?: pulumi.Input<string>;
        /**
         * The name of the virtual network.
         */
        vnetName?: pulumi.Input<string>;
    }

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
     * The auto scaler properties.
     */
    export interface AKSServiceCreateRequestAutoScalerArgs {
        /**
         * Option to enable/disable auto scaling.
         */
        autoscaleEnabled?: pulumi.Input<boolean>;
        /**
         * The maximum number of replicas in the cluster.
         */
        maxReplicas?: pulumi.Input<number>;
        /**
         * The minimum number of replicas to scale down to.
         */
        minReplicas?: pulumi.Input<number>;
        /**
         * The amount of seconds to wait between auto scale updates.
         */
        refreshPeriodInSeconds?: pulumi.Input<number>;
        /**
         * The target utilization percentage to use for determining whether to scale the cluster.
         */
        targetUtilization?: pulumi.Input<number>;
    }

    /**
     * Details of the data collection options specified.
     */
    export interface AKSServiceCreateRequestDataCollectionArgs {
        /**
         * Option for enabling/disabling Event Hub.
         */
        eventHubEnabled?: pulumi.Input<boolean>;
        /**
         * Option for enabling/disabling storage.
         */
        storageEnabled?: pulumi.Input<boolean>;
    }

    /**
     * The liveness probe requirements.
     */
    export interface AKSServiceCreateRequestLivenessProbeRequirementsArgs {
        /**
         * The number of failures to allow before returning an unhealthy status.
         */
        failureThreshold?: pulumi.Input<number>;
        /**
         * The delay before the first probe in seconds.
         */
        initialDelaySeconds?: pulumi.Input<number>;
        /**
         * The length of time between probes in seconds.
         */
        periodSeconds?: pulumi.Input<number>;
        /**
         * The number of successful probes before returning a healthy status.
         */
        successThreshold?: pulumi.Input<number>;
        /**
         * The probe timeout in seconds.
         */
        timeoutSeconds?: pulumi.Input<number>;
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
         * AML Compute properties
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
         * Compute Instance properties
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

    /**
     * The resource requirements for the container (cpu and memory).
     */
    export interface ContainerResourceRequirementsArgs {
        /**
         * The minimum amount of CPU cores to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpu?: pulumi.Input<number>;
        /**
         * The maximum amount of CPU cores allowed to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpuLimit?: pulumi.Input<number>;
        /**
         * The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
         */
        fpga?: pulumi.Input<number>;
        /**
         * The number of GPU cores in the container.
         */
        gpu?: pulumi.Input<number>;
        /**
         * The minimum amount of memory (in GB) to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memoryInGB?: pulumi.Input<number>;
        /**
         * The maximum amount of memory (in GB) allowed to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memoryInGBLimit?: pulumi.Input<number>;
    }

    /**
     * The Environment, models and assets needed for inferencing.
     */
    export interface CreateServiceRequestEnvironmentImageRequestArgs {
        /**
         * The list of assets.
         */
        assets?: pulumi.Input<pulumi.Input<ImageAssetArgs>[]>;
        /**
         * The name of the driver file.
         */
        driverProgram?: pulumi.Input<string>;
        /**
         * The details of the AZURE ML environment.
         */
        environment?: pulumi.Input<EnvironmentImageRequestEnvironmentArgs>;
        /**
         * The unique identifying details of the AZURE ML environment.
         */
        environmentReference?: pulumi.Input<EnvironmentImageRequestEnvironmentReferenceArgs>;
        /**
         * The list of model Ids.
         */
        modelIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The list of models.
         */
        models?: pulumi.Input<pulumi.Input<ModelArgs>[]>;
    }

    /**
     * The authentication keys.
     */
    export interface CreateServiceRequestKeysArgs {
        /**
         * The primary key.
         */
        primaryKey?: pulumi.Input<string>;
        /**
         * The secondary key.
         */
        secondaryKey?: pulumi.Input<string>;
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
        properties?: pulumi.Input<DatabricksPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

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

    /**
     * The dataset reference object.
     */
    export interface DatasetReferenceArgs {
        /**
         * The id of the dataset reference.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the dataset reference.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The details of the AZURE ML environment.
     */
    export interface EnvironmentImageRequestEnvironmentArgs {
        /**
         * The definition of a Docker container.
         */
        docker?: pulumi.Input<ModelEnvironmentDefinitionDockerArgs>;
        /**
         * Definition of environment variables to be defined in the environment.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest".
         */
        inferencingStackVersion?: pulumi.Input<string>;
        /**
         * The name of the environment.
         */
        name?: pulumi.Input<string>;
        /**
         * Settings for a Python environment.
         */
        python?: pulumi.Input<ModelEnvironmentDefinitionPythonArgs>;
        /**
         * Settings for a R environment.
         */
        r?: pulumi.Input<ModelEnvironmentDefinitionRArgs>;
        /**
         * The configuration for a Spark environment.
         */
        spark?: pulumi.Input<ModelEnvironmentDefinitionSparkArgs>;
        /**
         * The environment version.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * The unique identifying details of the AZURE ML environment.
     */
    export interface EnvironmentImageRequestEnvironmentReferenceArgs {
        /**
         * Name of the environment.
         */
        name?: pulumi.Input<string>;
        /**
         * Version of the environment.
         */
        version?: pulumi.Input<string>;
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
        properties?: pulumi.Input<HDInsightPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

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
     * An Image asset.
     */
    export interface ImageAssetArgs {
        /**
         * The Asset Id.
         */
        id?: pulumi.Input<string>;
        /**
         * The mime type.
         */
        mimeType?: pulumi.Input<string>;
        /**
         * Whether the Asset is unpacked.
         */
        unpack?: pulumi.Input<boolean>;
        /**
         * The Url of the Asset.
         */
        url?: pulumi.Input<string>;
    }

    /**
     * An Azure Machine Learning Model.
     */
    export interface ModelArgs {
        /**
         * The Model creation time (UTC).
         */
        createdTime?: pulumi.Input<string>;
        /**
         * The list of datasets associated with the model.
         */
        datasets?: pulumi.Input<pulumi.Input<DatasetReferenceArgs>[]>;
        /**
         * Models derived from this model
         */
        derivedModelIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The Model description text.
         */
        description?: pulumi.Input<string>;
        /**
         * The name of the experiment where this model was created.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * The Model framework.
         */
        framework?: pulumi.Input<string>;
        /**
         * The Model framework version.
         */
        frameworkVersion?: pulumi.Input<string>;
        /**
         * The Model Id.
         */
        id?: pulumi.Input<string>;
        /**
         * The Model tag dictionary. Items are mutable.
         */
        kvTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
         */
        mimeType: pulumi.Input<string>;
        /**
         * The Model last modified time (UTC).
         */
        modifiedTime?: pulumi.Input<string>;
        /**
         * The Model name.
         */
        name: pulumi.Input<string>;
        /**
         * The Parent Model Id.
         */
        parentModelId?: pulumi.Input<string>;
        /**
         * The Model property dictionary. Properties are immutable.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource requirements for the model
         */
        resourceRequirements?: pulumi.Input<ContainerResourceRequirementsArgs>;
        /**
         * The RunId that created this model.
         */
        runId?: pulumi.Input<string>;
        /**
         * Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
         */
        sampleInputData?: pulumi.Input<string>;
        /**
         * Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
         */
        sampleOutputData?: pulumi.Input<string>;
        /**
         * Indicates whether we need to unpack the Model during docker Image creation.
         */
        unpack?: pulumi.Input<boolean>;
        /**
         * The URL of the Model. Usually a SAS URL.
         */
        url: pulumi.Input<string>;
        /**
         * The Model version assigned by Model Management Service.
         */
        version?: pulumi.Input<number>;
    }

    /**
     * Image registry that contains the base image.
     */
    export interface ModelDockerSectionBaseImageRegistryArgs {
        address?: pulumi.Input<string>;
        password?: pulumi.Input<string>;
        username?: pulumi.Input<string>;
    }

    /**
     * The definition of a Docker container.
     */
    export interface ModelEnvironmentDefinitionDockerArgs {
        /**
         * Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
         */
        baseDockerfile?: pulumi.Input<string>;
        /**
         * Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
         */
        baseImage?: pulumi.Input<string>;
        /**
         * Image registry that contains the base image.
         */
        baseImageRegistry?: pulumi.Input<ModelDockerSectionBaseImageRegistryArgs>;
    }

    /**
     * Settings for a Python environment.
     */
    export interface ModelEnvironmentDefinitionPythonArgs {
        baseCondaEnvironment?: pulumi.Input<string>;
        /**
         * A JObject containing Conda dependencies.
         */
        condaDependencies?: any;
        /**
         * The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script.
         */
        interpreterPath?: pulumi.Input<string>;
        /**
         * True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.
         */
        userManagedDependencies?: pulumi.Input<boolean>;
    }

    /**
     * Settings for a R environment.
     */
    export interface ModelEnvironmentDefinitionRArgs {
        /**
         * The packages from Bioconductor.
         */
        bioConductorPackages?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The CRAN packages to use.
         */
        cranPackages?: pulumi.Input<pulumi.Input<RCranPackageArgs>[]>;
        /**
         * The packages from custom urls.
         */
        customUrlPackages?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The packages directly from GitHub.
         */
        gitHubPackages?: pulumi.Input<pulumi.Input<RGitHubPackageArgs>[]>;
        /**
         * The version of R to be installed
         */
        rVersion?: pulumi.Input<string>;
        /**
         * The Rscript path to use if an environment build is not required.
         * The path specified gets used to call the user script.
         */
        rscriptPath?: pulumi.Input<string>;
        /**
         * Date of MRAN snapshot to use in YYYY-MM-DD format, e.g. "2019-04-17"
         */
        snapshotDate?: pulumi.Input<string>;
        /**
         * Indicates whether the environment is managed by user or by AzureML.
         */
        userManaged?: pulumi.Input<boolean>;
    }

    /**
     * The configuration for a Spark environment.
     */
    export interface ModelEnvironmentDefinitionSparkArgs {
        /**
         * The Spark packages to use.
         */
        packages?: pulumi.Input<pulumi.Input<SparkMavenPackageArgs>[]>;
        /**
         * Whether to precache the packages.
         */
        precachePackages?: pulumi.Input<boolean>;
        /**
         * The list of spark repositories.
         */
        repositories?: pulumi.Input<pulumi.Input<string>[]>;
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

    export interface RCranPackageArgs {
        /**
         * The package name.
         */
        name?: pulumi.Input<string>;
        /**
         * The repository name.
         */
        repository?: pulumi.Input<string>;
    }

    export interface RGitHubPackageArgs {
        /**
         * Personal access token to install from a private repo
         */
        authToken?: pulumi.Input<string>;
        /**
         * Repository address in the format username/repo[/subdir][@ref|#pull].
         */
        repository?: pulumi.Input<string>;
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

    /**
     * Details of customized scripts to execute for setting up the cluster.
     */
    export interface SetupScriptsArgs {
        /**
         * Customized setup scripts
         */
        scripts?: pulumi.Input<ScriptsToExecuteArgs>;
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

    export interface SparkMavenPackageArgs {
        artifact?: pulumi.Input<string>;
        group?: pulumi.Input<string>;
        version?: pulumi.Input<string>;
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
        /**
         * AKS properties
         */
        properties?: pulumi.Input<SynapseSparkPoolPropertiesPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * AKS properties
     */
    export interface SynapseSparkPoolPropertiesPropertiesArgs {
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
