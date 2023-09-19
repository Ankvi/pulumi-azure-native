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
        properties?: pulumi.Input<AKSSchemaPropertiesArgs>;
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
            properties: (val.properties ? pulumi.output(val.properties).apply(aksschemaPropertiesArgsProvideDefaults) : undefined),
        };
    }

    /**
     * AKS properties
     */
    export interface AKSSchemaPropertiesArgs {
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
     * aksschemaPropertiesArgsProvideDefaults sets the appropriate defaults for AKSSchemaPropertiesArgs
     */
    export function aksschemaPropertiesArgsProvideDefaults(val: AKSSchemaPropertiesArgs): AKSSchemaPropertiesArgs {
        return {
            ...val,
            clusterPurpose: (val.clusterPurpose) ?? "FastProd",
            loadBalancerType: (val.loadBalancerType) ?? "PublicIp",
        };
    }

    export interface AccessKeyAuthTypeWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'AccessKey'.
         */
        authType: pulumi.Input<"AccessKey">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        credentials?: pulumi.Input<WorkspaceConnectionAccessKeyArgs>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
    }

    /**
     * Account key datastore credentials configuration.
     */
    export interface AccountKeyDatastoreCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'AccountKey'.
         */
        credentialsType: pulumi.Input<"AccountKey">;
        /**
         * [Required] Storage account secrets.
         */
        secrets: pulumi.Input<AccountKeyDatastoreSecretsArgs>;
    }

    /**
     * Datastore account key secrets.
     */
    export interface AccountKeyDatastoreSecretsArgs {
        /**
         * Storage account key.
         */
        key?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'AccountKey'.
         */
        secretsType: pulumi.Input<"AccountKey">;
    }

    /**
     * Details of ACR account to be used for the Registry
     */
    export interface AcrDetailsArgs {
        /**
         * Details of system created ACR account to be used for the Registry
         */
        systemCreatedAcrAccount?: pulumi.Input<SystemCreatedAcrAccountArgs>;
        /**
         * Details of user created ACR account to be used for the Registry
         */
        userCreatedAcrAccount?: pulumi.Input<UserCreatedAcrAccountArgs>;
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

    export interface AllFeaturesArgs {
        /**
         *
         * Expected value is 'AllFeatures'.
         */
        filterType: pulumi.Input<"AllFeatures">;
    }

    /**
     * All nodes means the service will be running on all of the nodes of the job
     */
    export interface AllNodesArgs {
        /**
         * The enumerated types for the nodes value
         * Expected value is 'All'.
         */
        nodesValueType: pulumi.Input<"All">;
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
         * A property bag containing additional properties.
         */
        propertyBag?: any;
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
     * AML Token identity configuration.
     */
    export interface AmlTokenArgs {
        /**
         * Enum to determine identity framework.
         * Expected value is 'AMLToken'.
         */
        identityType: pulumi.Input<"AMLToken">;
    }

    /**
     * AML token compute identity definition.
     */
    export interface AmlTokenComputeIdentityArgs {
        /**
         * Monitor compute identity type enum.
         * Expected value is 'AmlToken'.
         */
        computeIdentityType: pulumi.Input<"AmlToken">;
    }

    /**
     * This connection type covers the generic ApiKey auth connection categories, for examples:
     * AzureOpenAI:
     *     Category:= AzureOpenAI
     *     AuthType:= ApiKey (as type discriminator)
     *     Credentials:= {ApiKey} as Microsoft.MachineLearning.AccountRP.Contracts.WorkspaceConnection.ApiKey
     *     Target:= {ApiBase}
     *             
     * CognitiveService:
     *     Category:= CognitiveService
     *     AuthType:= ApiKey (as type discriminator)
     *     Credentials:= {SubscriptionKey} as Microsoft.MachineLearning.AccountRP.Contracts.WorkspaceConnection.ApiKey
     *     Target:= ServiceRegion={serviceRegion}
     *             
     * CognitiveSearch:
     *     Category:= CognitiveSearch
     *     AuthType:= ApiKey (as type discriminator)
     *     Credentials:= {Key} as Microsoft.MachineLearning.AccountRP.Contracts.WorkspaceConnection.ApiKey
     *     Target:= {Endpoint}
     *             
     * Use Metadata property bag for ApiType, ApiVersion, Kind and other metadata fields
     */
    export interface ApiKeyAuthWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'ApiKey'.
         */
        authType: pulumi.Input<"ApiKey">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        /**
         * Api key object for workspace connection credential.
         */
        credentials?: pulumi.Input<WorkspaceConnectionApiKeyArgs>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
    }

    /**
     * ARM ResourceId of a resource
     */
    export interface ArmResourceIdArgs {
        /**
         * Arm ResourceId is in the format "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Storage/storageAccounts/{StorageAccountName}"
         * or "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{AcrName}"
         */
        resourceId?: pulumi.Input<string>;
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

    export interface AutoDeleteSettingArgs {
        /**
         * When to check if an asset is expired
         */
        condition?: pulumi.Input<string | enums.AutoDeleteCondition>;
        /**
         * Expiration condition value.
         */
        value?: pulumi.Input<string>;
    }
    /**
     * autoDeleteSettingArgsProvideDefaults sets the appropriate defaults for AutoDeleteSettingArgs
     */
    export function autoDeleteSettingArgsProvideDefaults(val: AutoDeleteSettingArgs): AutoDeleteSettingArgs {
        return {
            ...val,
            condition: (val.condition) ?? "CreatedGreaterThan",
        };
    }

    /**
     * Forecast horizon determined automatically by system.
     */
    export interface AutoForecastHorizonArgs {
        /**
         * Enum to determine forecast horizon selection mode.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    /**
     * AutoMLJob class.
     * Use this class for executing AutoML tasks like Classification/Regression etc.
     * See TaskType enum for all the tasks supported.
     */
    export interface AutoMLJobArgs {
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: pulumi.Input<string>;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * The ARM resource ID of the Environment specification for the job.
         * This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'AutoML'.
         */
        jobType: pulumi.Input<"AutoML">;
        /**
         * Notification setting for the job
         */
        notificationSetting?: pulumi.Input<NotificationSettingArgs>;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Queue settings for the job
         */
        queueSettings?: pulumi.Input<QueueSettingsArgs>;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: pulumi.Input<JobResourceConfigurationArgs>;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<SecretConfigurationArgs>}>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] This represents scenario which can be one of Tables/NLP/Image
         */
        taskDetails: pulumi.Input<ClassificationArgs | ForecastingArgs | ImageClassificationArgs | ImageClassificationMultilabelArgs | ImageInstanceSegmentationArgs | ImageObjectDetectionArgs | RegressionArgs | TextClassificationArgs | TextClassificationMultilabelArgs | TextNerArgs>;
    }
    /**
     * autoMLJobArgsProvideDefaults sets the appropriate defaults for AutoMLJobArgs
     */
    export function autoMLJobArgsProvideDefaults(val: AutoMLJobArgs): AutoMLJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            queueSettings: (val.queueSettings ? pulumi.output(val.queueSettings).apply(queueSettingsArgsProvideDefaults) : undefined),
            resources: (val.resources ? pulumi.output(val.resources).apply(jobResourceConfigurationArgsProvideDefaults) : undefined),
        };
    }

    /**
     * N-Cross validations determined automatically.
     */
    export interface AutoNCrossValidationsArgs {
        /**
         * Determines how N-Cross validations value is determined.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
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

    export interface AutoSeasonalityArgs {
        /**
         * Forecasting seasonality mode.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    export interface AutoTargetLagsArgs {
        /**
         * Target lags selection modes.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    /**
     * Target lags rolling window determined automatically.
     */
    export interface AutoTargetRollingWindowSizeArgs {
        /**
         * Target rolling windows size mode.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    /**
     * Settings for Autologger.
     */
    export interface AutologgerSettingsArgs {
        /**
         * [Required] Indicates whether mlflow autologger is enabled.
         */
        mlflowAutologger: pulumi.Input<string | enums.MLFlowAutologgerState>;
    }

    export interface AzMonMonitoringAlertNotificationSettingsArgs {
        /**
         *
         * Expected value is 'AzureMonitor'.
         */
        alertNotificationType: pulumi.Input<"AzureMonitor">;
    }

    /**
     * Azure Blob datastore configuration.
     */
    export interface AzureBlobDatastoreArgs {
        /**
         * Storage account name.
         */
        accountName?: pulumi.Input<string>;
        /**
         * Storage account container name.
         */
        containerName?: pulumi.Input<string>;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureBlob'.
         */
        datastoreType: pulumi.Input<"AzureBlob">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: pulumi.Input<string>;
        /**
         * Azure Resource Group name
         */
        resourceGroup?: pulumi.Input<string>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * Azure Subscription Id
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * azureBlobDatastoreArgsProvideDefaults sets the appropriate defaults for AzureBlobDatastoreArgs
     */
    export function azureBlobDatastoreArgsProvideDefaults(val: AzureBlobDatastoreArgs): AzureBlobDatastoreArgs {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure Data Lake Gen1 datastore configuration.
     */
    export interface AzureDataLakeGen1DatastoreArgs {
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen1'.
         */
        datastoreType: pulumi.Input<"AzureDataLakeGen1">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Azure Resource Group name
         */
        resourceGroup?: pulumi.Input<string>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * [Required] Azure Data Lake store name.
         */
        storeName: pulumi.Input<string>;
        /**
         * Azure Subscription Id
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * azureDataLakeGen1DatastoreArgsProvideDefaults sets the appropriate defaults for AzureDataLakeGen1DatastoreArgs
     */
    export function azureDataLakeGen1DatastoreArgsProvideDefaults(val: AzureDataLakeGen1DatastoreArgs): AzureDataLakeGen1DatastoreArgs {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure Data Lake Gen2 datastore configuration.
     */
    export interface AzureDataLakeGen2DatastoreArgs {
        /**
         * [Required] Storage account name.
         */
        accountName: pulumi.Input<string>;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen2'.
         */
        datastoreType: pulumi.Input<"AzureDataLakeGen2">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * [Required] The name of the Data Lake Gen2 filesystem.
         */
        filesystem: pulumi.Input<string>;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: pulumi.Input<string>;
        /**
         * Azure Resource Group name
         */
        resourceGroup?: pulumi.Input<string>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * Azure Subscription Id
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * azureDataLakeGen2DatastoreArgsProvideDefaults sets the appropriate defaults for AzureDataLakeGen2DatastoreArgs
     */
    export function azureDataLakeGen2DatastoreArgsProvideDefaults(val: AzureDataLakeGen2DatastoreArgs): AzureDataLakeGen2DatastoreArgs {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Webhook details specific for Azure DevOps
     */
    export interface AzureDevOpsWebhookArgs {
        /**
         * Send callback on a specified notification event
         */
        eventType?: pulumi.Input<string>;
        /**
         * Enum to determine the webhook callback service type.
         * Expected value is 'AzureDevOps'.
         */
        webhookType: pulumi.Input<"AzureDevOps">;
    }

    /**
     * Azure File datastore configuration.
     */
    export interface AzureFileDatastoreArgs {
        /**
         * [Required] Storage account name.
         */
        accountName: pulumi.Input<string>;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureFile'.
         */
        datastoreType: pulumi.Input<"AzureFile">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * [Required] The name of the Azure file share that the datastore points to.
         */
        fileShareName: pulumi.Input<string>;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: pulumi.Input<string>;
        /**
         * Azure Resource Group name
         */
        resourceGroup?: pulumi.Input<string>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * Azure Subscription Id
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * azureFileDatastoreArgsProvideDefaults sets the appropriate defaults for AzureFileDatastoreArgs
     */
    export function azureFileDatastoreArgsProvideDefaults(val: AzureFileDatastoreArgs): AzureFileDatastoreArgs {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Defines an early termination policy based on slack criteria, and a frequency and delay interval for evaluation
     */
    export interface BanditPolicyArgs {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: pulumi.Input<number>;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: pulumi.Input<number>;
        /**
         *
         * Expected value is 'Bandit'.
         */
        policyType: pulumi.Input<"Bandit">;
        /**
         * Absolute distance allowed from the best performing run.
         */
        slackAmount?: pulumi.Input<number>;
        /**
         * Ratio of the allowed distance from the best performing run.
         */
        slackFactor?: pulumi.Input<number>;
    }
    /**
     * banditPolicyArgsProvideDefaults sets the appropriate defaults for BanditPolicyArgs
     */
    export function banditPolicyArgsProvideDefaults(val: BanditPolicyArgs): BanditPolicyArgs {
        return {
            ...val,
            delayEvaluation: (val.delayEvaluation) ?? 0,
            evaluationInterval: (val.evaluationInterval) ?? 0,
            slackAmount: (val.slackAmount) ?? 0,
            slackFactor: (val.slackFactor) ?? 0,
        };
    }

    /**
     * Batch inference settings per deployment.
     */
    export interface BatchDeploymentArgs {
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: pulumi.Input<CodeConfigurationArgs>;
        /**
         * Compute target for batch inference operation.
         */
        compute?: pulumi.Input<string>;
        /**
         * Properties relevant to different deployment types.
         */
        deploymentConfiguration?: pulumi.Input<BatchPipelineComponentDeploymentConfigurationArgs>;
        /**
         * Description of the endpoint deployment.
         */
        description?: pulumi.Input<string>;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Error threshold, if the error count for the entire input goes above this value,
         * the batch inference will be aborted. Range is [-1, int.MaxValue].
         * For FileDataset, this value is the count of file failures.
         * For TabularDataset, this value is the count of record failures.
         * If set to -1 (the lower bound), all failures during batch inference will be ignored.
         */
        errorThreshold?: pulumi.Input<number>;
        /**
         * Logging level for batch inference operation.
         */
        loggingLevel?: pulumi.Input<string | enums.BatchLoggingLevel>;
        /**
         * Indicates maximum number of parallelism per instance.
         */
        maxConcurrencyPerInstance?: pulumi.Input<number>;
        /**
         * Size of the mini-batch passed to each batch invocation.
         * For FileDataset, this is the number of files per mini-batch.
         * For TabularDataset, this is the size of the records in bytes, per mini-batch.
         */
        miniBatchSize?: pulumi.Input<number>;
        /**
         * Reference to the model asset for the endpoint deployment.
         */
        model?: pulumi.Input<DataPathAssetReferenceArgs | IdAssetReferenceArgs | OutputPathAssetReferenceArgs>;
        /**
         * Indicates how the output will be organized.
         */
        outputAction?: pulumi.Input<string | enums.BatchOutputAction>;
        /**
         * Customized output file name for append_row output action.
         */
        outputFileName?: pulumi.Input<string>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Indicates compute configuration for the job.
         * If not provided, will default to the defaults defined in ResourceConfiguration.
         */
        resources?: pulumi.Input<DeploymentResourceConfigurationArgs>;
        /**
         * Retry Settings for the batch inference operation.
         * If not provided, will default to the defaults defined in BatchRetrySettings.
         */
        retrySettings?: pulumi.Input<BatchRetrySettingsArgs>;
    }
    /**
     * batchDeploymentArgsProvideDefaults sets the appropriate defaults for BatchDeploymentArgs
     */
    export function batchDeploymentArgsProvideDefaults(val: BatchDeploymentArgs): BatchDeploymentArgs {
        return {
            ...val,
            errorThreshold: (val.errorThreshold) ?? -1,
            loggingLevel: (val.loggingLevel) ?? "Info",
            maxConcurrencyPerInstance: (val.maxConcurrencyPerInstance) ?? 1,
            miniBatchSize: (val.miniBatchSize) ?? 10,
            outputAction: (val.outputAction) ?? "AppendRow",
            outputFileName: (val.outputFileName) ?? "predictions.csv",
            resources: (val.resources ? pulumi.output(val.resources).apply(deploymentResourceConfigurationArgsProvideDefaults) : undefined),
            retrySettings: (val.retrySettings ? pulumi.output(val.retrySettings).apply(batchRetrySettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Batch endpoint configuration.
     */
    export interface BatchEndpointArgs {
        /**
         * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
         */
        authMode: pulumi.Input<string | enums.EndpointAuthMode>;
        /**
         * Default values for Batch Endpoint.
         */
        defaults?: pulumi.Input<BatchEndpointDefaultsArgs>;
        /**
         * Description of the inference endpoint.
         */
        description?: pulumi.Input<string>;
        /**
         * EndpointAuthKeys to set initially on an Endpoint.
         * This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
         */
        keys?: pulumi.Input<EndpointAuthKeysArgs>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Batch endpoint default values
     */
    export interface BatchEndpointDefaultsArgs {
        /**
         * Name of the deployment that will be default for the endpoint.
         * This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked.
         */
        deploymentName?: pulumi.Input<string>;
    }

    /**
     * Properties for a Batch Pipeline Component Deployment.
     */
    export interface BatchPipelineComponentDeploymentConfigurationArgs {
        /**
         * The ARM id of the component to be run.
         */
        componentId?: pulumi.Input<IdAssetReferenceArgs>;
        /**
         * The enumerated property types for batch deployments.
         * Expected value is 'PipelineComponent'.
         */
        deploymentConfigurationType: pulumi.Input<"PipelineComponent">;
        /**
         * The description which will be applied to the job.
         */
        description?: pulumi.Input<string>;
        /**
         * Run-time settings for the pipeline job.
         */
        settings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The tags which will be applied to the job.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Retry settings for a batch inference operation.
     */
    export interface BatchRetrySettingsArgs {
        /**
         * Maximum retry count for a mini-batch
         */
        maxRetries?: pulumi.Input<number>;
        /**
         * Invocation timeout for a mini-batch, in ISO 8601 format.
         */
        timeout?: pulumi.Input<string>;
    }
    /**
     * batchRetrySettingsArgsProvideDefaults sets the appropriate defaults for BatchRetrySettingsArgs
     */
    export function batchRetrySettingsArgsProvideDefaults(val: BatchRetrySettingsArgs): BatchRetrySettingsArgs {
        return {
            ...val,
            maxRetries: (val.maxRetries) ?? 3,
            timeout: (val.timeout) ?? "PT30S",
        };
    }

    /**
     * Defines a Sampling Algorithm that generates values based on previous values
     */
    export interface BayesianSamplingAlgorithmArgs {
        /**
         *
         * Expected value is 'Bayesian'.
         */
        samplingAlgorithmType: pulumi.Input<"Bayesian">;
    }

    export interface BindOptionsArgs {
        /**
         * Indicate whether to create host path.
         */
        createHostPath?: pulumi.Input<boolean>;
        /**
         * Type of Bind Option
         */
        propagation?: pulumi.Input<string>;
        /**
         * Mention the selinux options.
         */
        selinux?: pulumi.Input<string>;
    }

    /**
     * Configuration settings for Docker build context
     */
    export interface BuildContextArgs {
        /**
         * [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.
         * <seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" />
         */
        contextUri: pulumi.Input<string>;
        /**
         * Path to the Dockerfile in the build context.
         * <seealso href="https://docs.docker.com/engine/reference/builder/" />
         */
        dockerfilePath?: pulumi.Input<string>;
    }
    /**
     * buildContextArgsProvideDefaults sets the appropriate defaults for BuildContextArgs
     */
    export function buildContextArgsProvideDefaults(val: BuildContextArgs): BuildContextArgs {
        return {
            ...val,
            dockerfilePath: (val.dockerfilePath) ?? "Dockerfile",
        };
    }

    export interface CategoricalDataDriftMetricThresholdArgs {
        /**
         *
         * Expected value is 'Categorical'.
         */
        dataType: pulumi.Input<"Categorical">;
        /**
         * [Required] The categorical data drift metric to calculate.
         */
        metric: pulumi.Input<string | enums.CategoricalDataDriftMetric>;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    export interface CategoricalDataQualityMetricThresholdArgs {
        /**
         *
         * Expected value is 'Categorical'.
         */
        dataType: pulumi.Input<"Categorical">;
        /**
         * [Required] The categorical data quality metric to calculate.
         */
        metric: pulumi.Input<string | enums.CategoricalDataQualityMetric>;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    export interface CategoricalPredictionDriftMetricThresholdArgs {
        /**
         *
         * Expected value is 'Categorical'.
         */
        dataType: pulumi.Input<"Categorical">;
        /**
         * [Required] The categorical prediction drift metric to calculate.
         */
        metric: pulumi.Input<string | enums.CategoricalPredictionDriftMetric>;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    /**
     * Certificate datastore credentials configuration.
     */
    export interface CertificateDatastoreCredentialsArgs {
        /**
         * Authority URL used for authentication.
         */
        authorityUrl?: pulumi.Input<string>;
        /**
         * [Required] Service principal client ID.
         */
        clientId: pulumi.Input<string>;
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'Certificate'.
         */
        credentialsType: pulumi.Input<"Certificate">;
        /**
         * Resource the service principal has access to.
         */
        resourceUrl?: pulumi.Input<string>;
        /**
         * [Required] Service principal secrets.
         */
        secrets: pulumi.Input<CertificateDatastoreSecretsArgs>;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: pulumi.Input<string>;
        /**
         * [Required] Thumbprint of the certificate used for authentication.
         */
        thumbprint: pulumi.Input<string>;
    }

    /**
     * Datastore certificate secrets.
     */
    export interface CertificateDatastoreSecretsArgs {
        /**
         * Service principal certificate.
         */
        certificate?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'Certificate'.
         */
        secretsType: pulumi.Input<"Certificate">;
    }

    /**
     * Classification task in AutoML Table vertical.
     */
    export interface ClassificationArgs {
        /**
         * Columns to use for CVSplit data.
         */
        cvSplitColumnNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs>;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: pulumi.Input<TableFixedParametersArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Number of cross validation folds to be applied on training dataset
         * when validation dataset is not provided.
         */
        nCrossValidations?: pulumi.Input<AutoNCrossValidationsArgs | CustomNCrossValidationsArgs>;
        /**
         * Positive label for binary metrics calculation.
         */
        positiveLabel?: pulumi.Input<string>;
        /**
         * Primary metric for the task.
         */
        primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<TableParameterSubspaceArgs>[]>;
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: pulumi.Input<TableSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Classification'.
         */
        taskType: pulumi.Input<"Classification">;
        /**
         * Test data input.
         */
        testData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of test dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        testDataSize?: pulumi.Input<number>;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: pulumi.Input<ClassificationTrainingSettingsArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
        /**
         * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
         */
        weightColumnName?: pulumi.Input<string>;
    }
    /**
     * classificationArgsProvideDefaults sets the appropriate defaults for ClassificationArgs
     */
    export function classificationArgsProvideDefaults(val: ClassificationArgs): ClassificationArgs {
        return {
            ...val,
            featurizationSettings: (val.featurizationSettings ? pulumi.output(val.featurizationSettings).apply(tableVerticalFeaturizationSettingsArgsProvideDefaults) : undefined),
            fixedParameters: (val.fixedParameters ? pulumi.output(val.fixedParameters).apply(tableFixedParametersArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(tableVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "AUCWeighted",
            testData: (val.testData ? pulumi.output(val.testData).apply(mltableJobInputArgsProvideDefaults) : undefined),
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            trainingSettings: (val.trainingSettings ? pulumi.output(val.trainingSettings).apply(classificationTrainingSettingsArgsProvideDefaults) : undefined),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    export interface ClassificationModelPerformanceMetricThresholdArgs {
        /**
         * [Required] The classification model performance to calculate.
         */
        metric: pulumi.Input<string | enums.ClassificationModelPerformanceMetric>;
        /**
         *
         * Expected value is 'Classification'.
         */
        modelType: pulumi.Input<"Classification">;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    /**
     * Classification Training related configuration.
     */
    export interface ClassificationTrainingSettingsArgs {
        /**
         * Allowed models for classification task.
         */
        allowedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.ClassificationModels>[]>;
        /**
         * Blocked models for classification task.
         */
        blockedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.ClassificationModels>[]>;
        /**
         * Enable recommendation of DNN models.
         */
        enableDnnTraining?: pulumi.Input<boolean>;
        /**
         * Flag to turn on explainability on best model.
         */
        enableModelExplainability?: pulumi.Input<boolean>;
        /**
         * Flag for enabling onnx compatible models.
         */
        enableOnnxCompatibleModels?: pulumi.Input<boolean>;
        /**
         * Enable stack ensemble run.
         */
        enableStackEnsemble?: pulumi.Input<boolean>;
        /**
         * Enable voting ensemble run.
         */
        enableVoteEnsemble?: pulumi.Input<boolean>;
        /**
         * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
         * Configure this parameter with a higher value than 300 secs, if more time is needed.
         */
        ensembleModelDownloadTimeout?: pulumi.Input<string>;
        /**
         * Stack ensemble settings for stack ensemble run.
         */
        stackEnsembleSettings?: pulumi.Input<StackEnsembleSettingsArgs>;
        /**
         * TrainingMode mode - Setting to 'auto' is same as setting it to 'non-distributed' for now, however in the future may result in mixed mode or heuristics based mode selection. Default is 'auto'.
         * If 'Distributed' then only distributed featurization is used and distributed algorithms are chosen.
         * If 'NonDistributed' then only non distributed algorithms are chosen.
         */
        trainingMode?: pulumi.Input<string | enums.TrainingMode>;
    }
    /**
     * classificationTrainingSettingsArgsProvideDefaults sets the appropriate defaults for ClassificationTrainingSettingsArgs
     */
    export function classificationTrainingSettingsArgsProvideDefaults(val: ClassificationTrainingSettingsArgs): ClassificationTrainingSettingsArgs {
        return {
            ...val,
            enableDnnTraining: (val.enableDnnTraining) ?? false,
            enableModelExplainability: (val.enableModelExplainability) ?? true,
            enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
            enableStackEnsemble: (val.enableStackEnsemble) ?? true,
            enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
            ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
            stackEnsembleSettings: (val.stackEnsembleSettings ? pulumi.output(val.stackEnsembleSettings).apply(stackEnsembleSettingsArgsProvideDefaults) : undefined),
            trainingMode: (val.trainingMode) ?? "Auto",
        };
    }

    /**
     * Configuration for a scoring code asset.
     */
    export interface CodeConfigurationArgs {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: pulumi.Input<string>;
        /**
         * [Required] The script to execute on startup. eg. "score.py"
         */
        scoringScript: pulumi.Input<string>;
    }

    /**
     * Container for code asset versions.
     */
    export interface CodeContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * codeContainerArgsProvideDefaults sets the appropriate defaults for CodeContainerArgs
     */
    export function codeContainerArgsProvideDefaults(val: CodeContainerArgs): CodeContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Code asset version details.
     */
    export interface CodeVersionArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Uri where code is located
         */
        codeUri?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * codeVersionArgsProvideDefaults sets the appropriate defaults for CodeVersionArgs
     */
    export function codeVersionArgsProvideDefaults(val: CodeVersionArgs): CodeVersionArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface CollectionArgs {
        /**
         * The msi client id used to collect logging to blob storage. If it's null,backend will pick a registered endpoint identity to auth.
         */
        clientId?: pulumi.Input<string>;
        /**
         * Enable or disable data collection.
         */
        dataCollectionMode?: pulumi.Input<string | enums.DataCollectionMode>;
        /**
         * The data asset arm resource id. Client side will ensure data asset is pointing to the blob storage, and backend will collect data to the blob storage.
         */
        dataId?: pulumi.Input<string>;
        /**
         * The sampling rate for collection. Sampling rate 1.0 means we collect 100% of data by default.
         */
        samplingRate?: pulumi.Input<number>;
    }
    /**
     * collectionArgsProvideDefaults sets the appropriate defaults for CollectionArgs
     */
    export function collectionArgsProvideDefaults(val: CollectionArgs): CollectionArgs {
        return {
            ...val,
            dataCollectionMode: (val.dataCollectionMode) ?? "Disabled",
            samplingRate: (val.samplingRate) ?? 1,
        };
    }

    /**
     * Column transformer parameters.
     */
    export interface ColumnTransformerArgs {
        /**
         * Fields to apply transformer logic on.
         */
        fields?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Different properties to be passed to transformer.
         * Input expected is dictionary of key,value pairs in JSON format.
         */
        parameters?: any;
    }

    /**
     * Command job definition.
     */
    export interface CommandJobArgs {
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        autologgerSettings?: pulumi.Input<AutologgerSettingsArgs>;
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: pulumi.Input<string>;
        /**
         * [Required] The command to execute on startup of the job. eg. "python train.py"
         */
        command: pulumi.Input<string>;
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: pulumi.Input<string>;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, Ray, or null.
         */
        distribution?: pulumi.Input<MpiArgs | PyTorchArgs | RayArgs | TensorFlowArgs>;
        /**
         * [Required] The ARM resource ID of the Environment specification for the job.
         */
        environmentId: pulumi.Input<string>;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>}>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Command'.
         */
        jobType: pulumi.Input<"Command">;
        /**
         * Command Job limit.
         */
        limits?: pulumi.Input<CommandJobLimitsArgs>;
        /**
         * Notification setting for the job
         */
        notificationSetting?: pulumi.Input<NotificationSettingArgs>;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Queue settings for the job
         */
        queueSettings?: pulumi.Input<QueueSettingsArgs>;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: pulumi.Input<JobResourceConfigurationArgs>;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<SecretConfigurationArgs>}>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * commandJobArgsProvideDefaults sets the appropriate defaults for CommandJobArgs
     */
    export function commandJobArgsProvideDefaults(val: CommandJobArgs): CommandJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            queueSettings: (val.queueSettings ? pulumi.output(val.queueSettings).apply(queueSettingsArgsProvideDefaults) : undefined),
            resources: (val.resources ? pulumi.output(val.resources).apply(jobResourceConfigurationArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Command Job limit class.
     */
    export interface CommandJobLimitsArgs {
        /**
         *
         * Expected value is 'Command'.
         */
        jobLimitsType: pulumi.Input<"Command">;
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: pulumi.Input<string>;
    }

    /**
     * Component container definition.
     * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
     */
    export interface ComponentContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * componentContainerArgsProvideDefaults sets the appropriate defaults for ComponentContainerArgs
     */
    export function componentContainerArgsProvideDefaults(val: ComponentContainerArgs): ComponentContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Definition of a component version: defines resources that span component types.
     */
    export interface ComponentVersionArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Defines Component definition details.
         * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
         */
        componentSpec?: any;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Stage in the component lifecycle
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * componentVersionArgsProvideDefaults sets the appropriate defaults for ComponentVersionArgs
     */
    export function componentVersionArgsProvideDefaults(val: ComponentVersionArgs): ComponentVersionArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
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
     * Specifies settings for autologger.
     */
    export interface ComputeInstanceAutologgerSettingsArgs {
        /**
         * Indicates whether mlflow autologger is enabled for notebooks.
         */
        mlflowAutologger?: pulumi.Input<string | enums.MlflowAutologger>;
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
         * Specifies settings for autologger.
         */
        autologgerSettings?: pulumi.Input<ComputeInstanceAutologgerSettingsArgs>;
        /**
         * The Compute Instance Authorization type. Available values are personal (default).
         */
        computeInstanceAuthorizationType?: pulumi.Input<string | enums.ComputeInstanceAuthorizationType>;
        /**
         * List of Custom Services added to the compute.
         */
        customServices?: pulumi.Input<pulumi.Input<CustomServiceArgs>[]>;
        /**
         * Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
         */
        enableNodePublicIp?: pulumi.Input<boolean>;
        /**
         * Stops compute instance after user defined period of inactivity. Time is defined in ISO8601 format. Minimum is 15 min, maximum is 3 days.
         */
        idleTimeBeforeShutdown?: pulumi.Input<string>;
        /**
         * Settings for a personal compute instance.
         */
        personalComputeInstanceSettings?: pulumi.Input<PersonalComputeInstanceSettingsArgs>;
        /**
         * The list of schedules to be applied on the computes.
         */
        schedules?: pulumi.Input<ComputeSchedulesArgs>;
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
            enableNodePublicIp: (val.enableNodePublicIp) ?? true,
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

    export interface ComputeRuntimeDtoArgs {
        sparkRuntimeVersion?: pulumi.Input<string>;
    }

    /**
     * The list of schedules to be applied on the computes
     */
    export interface ComputeSchedulesArgs {
        /**
         * The list of compute start stop schedules to be applied.
         */
        computeStartStop?: pulumi.Input<pulumi.Input<ComputeStartStopScheduleArgs>[]>;
    }

    /**
     * Compute start stop schedule properties
     */
    export interface ComputeStartStopScheduleArgs {
        /**
         * [Required] The compute power action.
         */
        action?: pulumi.Input<string | enums.ComputePowerAction>;
        /**
         * Required if triggerType is Cron.
         */
        cron?: pulumi.Input<CronArgs>;
        /**
         * Required if triggerType is Recurrence.
         */
        recurrence?: pulumi.Input<RecurrenceArgs>;
        /**
         * [Deprecated] Not used any more.
         */
        schedule?: pulumi.Input<ScheduleBaseArgs>;
        /**
         * Is the schedule enabled or disabled?
         */
        status?: pulumi.Input<string | enums.ScheduleStatus>;
        /**
         * [Required] The schedule trigger type.
         */
        triggerType?: pulumi.Input<string | enums.TriggerType>;
    }
    /**
     * computeStartStopScheduleArgsProvideDefaults sets the appropriate defaults for ComputeStartStopScheduleArgs
     */
    export function computeStartStopScheduleArgsProvideDefaults(val: ComputeStartStopScheduleArgs): ComputeStartStopScheduleArgs {
        return {
            ...val,
            cron: (val.cron ? pulumi.output(val.cron).apply(cronArgsProvideDefaults) : undefined),
            recurrence: (val.recurrence ? pulumi.output(val.recurrence).apply(recurrenceArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Resource requirements for each container instance within an online deployment.
     */
    export interface ContainerResourceRequirementsArgs {
        /**
         * Container resource limit info:
         */
        containerResourceLimits?: pulumi.Input<ContainerResourceSettingsArgs>;
        /**
         * Container resource request info:
         */
        containerResourceRequests?: pulumi.Input<ContainerResourceSettingsArgs>;
    }

    export interface ContainerResourceSettingsArgs {
        /**
         * Number of vCPUs request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpu?: pulumi.Input<string>;
        /**
         * Number of Nvidia GPU cards request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        gpu?: pulumi.Input<string>;
        /**
         * Memory size request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memory?: pulumi.Input<string>;
    }

    export interface CosmosDbSettingsArgs {
        collectionsThroughput?: pulumi.Input<number>;
    }

    export interface CreateMonitorActionArgs {
        /**
         *
         * Expected value is 'CreateMonitor'.
         */
        actionType: pulumi.Input<"CreateMonitor">;
        /**
         * [Required] Defines the monitor.
         */
        monitorDefinition: pulumi.Input<MonitorDefinitionArgs>;
    }

    /**
     * The workflow trigger cron for ComputeStartStop schedule type.
     */
    export interface CronArgs {
        /**
         * [Required] Specifies cron expression of schedule.
         * The expression should follow NCronTab format.
         */
        expression?: pulumi.Input<string>;
        /**
         * The start time in yyyy-MM-ddTHH:mm:ss format.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
         */
        timeZone?: pulumi.Input<string>;
    }
    /**
     * cronArgsProvideDefaults sets the appropriate defaults for CronArgs
     */
    export function cronArgsProvideDefaults(val: CronArgs): CronArgs {
        return {
            ...val,
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    export interface CronTriggerArgs {
        /**
         * Specifies end time of schedule in ISO 8601, but without a UTC offset. Refer https://en.wikipedia.org/wiki/ISO_8601.
         * Recommented format would be "2022-06-01T00:00:01"
         * If not present, the schedule will run indefinitely
         */
        endTime?: pulumi.Input<string>;
        /**
         * [Required] Specifies cron expression of schedule.
         * The expression should follow NCronTab format.
         */
        expression: pulumi.Input<string>;
        /**
         * Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
         */
        timeZone?: pulumi.Input<string>;
        /**
         *
         * Expected value is 'Cron'.
         */
        triggerType: pulumi.Input<"Cron">;
    }
    /**
     * cronTriggerArgsProvideDefaults sets the appropriate defaults for CronTriggerArgs
     */
    export function cronTriggerArgsProvideDefaults(val: CronTriggerArgs): CronTriggerArgs {
        return {
            ...val,
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    /**
     * The desired maximum forecast horizon in units of time-series frequency.
     */
    export interface CustomForecastHorizonArgs {
        /**
         * Enum to determine forecast horizon selection mode.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] Forecast horizon value.
         */
        value: pulumi.Input<number>;
    }

    /**
     * Custom Keys credential object
     */
    export interface CustomKeysArgs {
        keys?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Category:= CustomKeys
     * AuthType:= CustomKeys (as type discriminator)
     * Credentials:= {CustomKeys} as Microsoft.MachineLearning.AccountRP.Contracts.WorkspaceConnection.CustomKeys
     * Target:= {any value}
     * Use Metadata property bag for ApiVersion and other metadata fields
     */
    export interface CustomKeysWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'CustomKeys'.
         */
        authType: pulumi.Input<"CustomKeys">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        /**
         * Custom Keys credential object
         */
        credentials?: pulumi.Input<CustomKeysArgs>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
    }

    export interface CustomMetricThresholdArgs {
        /**
         * [Required] The user-defined metric to calculate.
         */
        metric: pulumi.Input<string>;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    export interface CustomModelJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'custom_model'.
         */
        jobInputType: pulumi.Input<"custom_model">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * customModelJobInputArgsProvideDefaults sets the appropriate defaults for CustomModelJobInputArgs
     */
    export function customModelJobInputArgsProvideDefaults(val: CustomModelJobInputArgs): CustomModelJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface CustomModelJobOutputArgs {
        /**
         * Output Asset Name.
         */
        assetName?: pulumi.Input<string>;
        /**
         * Output Asset Version.
         */
        assetVersion?: pulumi.Input<string>;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'custom_model'.
         */
        jobOutputType: pulumi.Input<"custom_model">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * customModelJobOutputArgsProvideDefaults sets the appropriate defaults for CustomModelJobOutputArgs
     */
    export function customModelJobOutputArgsProvideDefaults(val: CustomModelJobOutputArgs): CustomModelJobOutputArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    export interface CustomMonitoringSignalArgs {
        /**
         * [Required] ARM resource ID of the component resource used to calculate the custom metrics.
         */
        componentId: pulumi.Input<string>;
        /**
         * Monitoring assets to take as input. Key is the component input port name, value is the data asset.
         */
        inputAssets?: pulumi.Input<{[key: string]: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>}>;
        /**
         * Extra component parameters to take as input. Key is the component literal input port name, value is the parameter value.
         */
        inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>}>;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThresholds: pulumi.Input<pulumi.Input<CustomMetricThresholdArgs>[]>;
        /**
         * The current notification mode for this signal.
         */
        mode?: pulumi.Input<string | enums.MonitoringNotificationMode>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         *
         * Expected value is 'Custom'.
         */
        signalType: pulumi.Input<"Custom">;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        workspaceConnection: pulumi.Input<MonitoringWorkspaceConnectionArgs>;
    }
    /**
     * customMonitoringSignalArgsProvideDefaults sets the appropriate defaults for CustomMonitoringSignalArgs
     */
    export function customMonitoringSignalArgsProvideDefaults(val: CustomMonitoringSignalArgs): CustomMonitoringSignalArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    /**
     * N-Cross validations are specified by user.
     */
    export interface CustomNCrossValidationsArgs {
        /**
         * Determines how N-Cross validations value is determined.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] N-Cross validations value.
         */
        value: pulumi.Input<number>;
    }

    export interface CustomSeasonalityArgs {
        /**
         * Forecasting seasonality mode.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] Seasonality value.
         */
        value: pulumi.Input<number>;
    }

    /**
     * Specifies the custom service configuration
     */
    export interface CustomServiceArgs {
        /**
         * Describes the docker settings for the image
         */
        docker?: pulumi.Input<DockerArgs>;
        /**
         * Configuring the endpoints for the container
         */
        endpoints?: pulumi.Input<pulumi.Input<EndpointArgs>[]>;
        /**
         * Environment Variable for the container
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<EnvironmentVariableArgs>}>;
        /**
         * Describes the Image Specifications
         */
        image?: pulumi.Input<ImageArgs>;
        /**
         * Name of the Custom Service
         */
        name?: pulumi.Input<string>;
        /**
         * Configuring the volumes for the container
         */
        volumes?: pulumi.Input<pulumi.Input<VolumeDefinitionArgs>[]>;
    }
    /**
     * customServiceArgsProvideDefaults sets the appropriate defaults for CustomServiceArgs
     */
    export function customServiceArgsProvideDefaults(val: CustomServiceArgs): CustomServiceArgs {
        return {
            ...val,
            image: (val.image ? pulumi.output(val.image).apply(imageArgsProvideDefaults) : undefined),
        };
    }

    export interface CustomTargetLagsArgs {
        /**
         * Target lags selection modes.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] Set target lags values.
         */
        values: pulumi.Input<pulumi.Input<number>[]>;
    }

    export interface CustomTargetRollingWindowSizeArgs {
        /**
         * Target rolling windows size mode.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] TargetRollingWindowSize value.
         */
        value: pulumi.Input<number>;
    }

    export interface DataCollectorArgs {
        /**
         * [Required] The collection configuration. Each collection has it own configuration to collect model data and the name of collection can be arbitrary string.
         * Model data collector can be used for either payload logging or custom logging or both of them. Collection request and response are reserved for payload logging, others are for custom logging.
         */
        collections: pulumi.Input<{[key: string]: pulumi.Input<CollectionArgs>}>;
        /**
         * The request logging configuration for mdc, it includes advanced logging settings for all collections. It's optional.
         */
        requestLogging?: pulumi.Input<RequestLoggingArgs>;
        /**
         * When model data is collected to blob storage, we need to roll the data to different path to avoid logging all of them in a single blob file.
         * If the rolling rate is hour, all data will be collected in the blob path /yyyy/MM/dd/HH/.
         * If it's day, all data will be collected in blob path /yyyy/MM/dd/.
         * The other benefit of rolling path is that model monitoring ui is able to select a time range of data very quickly.
         */
        rollingRate?: pulumi.Input<string | enums.RollingRateType>;
    }
    /**
     * dataCollectorArgsProvideDefaults sets the appropriate defaults for DataCollectorArgs
     */
    export function dataCollectorArgsProvideDefaults(val: DataCollectorArgs): DataCollectorArgs {
        return {
            ...val,
            rollingRate: (val.rollingRate) ?? "Hour",
        };
    }

    /**
     * Container for data asset versions.
     */
    export interface DataContainerArgs {
        /**
         * [Required] Specifies the type of data.
         */
        dataType: pulumi.Input<string | enums.DataType>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * dataContainerArgsProvideDefaults sets the appropriate defaults for DataContainerArgs
     */
    export function dataContainerArgsProvideDefaults(val: DataContainerArgs): DataContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface DataDriftMonitoringSignalArgs {
        /**
         * The data segment used for scoping on a subset of the data population.
         */
        dataSegment?: pulumi.Input<MonitoringDataSegmentArgs>;
        /**
         * A dictionary that maps feature names to their respective data types.
         */
        featureDataTypeOverride?: pulumi.Input<{[key: string]: pulumi.Input<string | enums.MonitoringFeatureDataType>}>;
        /**
         * The feature filter which identifies which feature to calculate drift over.
         */
        features?: pulumi.Input<AllFeaturesArgs | FeatureSubsetArgs | TopNFeaturesByAttributionArgs>;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThresholds: pulumi.Input<pulumi.Input<CategoricalDataDriftMetricThresholdArgs | NumericalDataDriftMetricThresholdArgs>[]>;
        /**
         * The current notification mode for this signal.
         */
        mode?: pulumi.Input<string | enums.MonitoringNotificationMode>;
        /**
         * [Required] The data which drift will be calculated for.
         */
        productionData: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] The data to calculate drift against.
         */
        referenceData: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         *
         * Expected value is 'DataDrift'.
         */
        signalType: pulumi.Input<"DataDrift">;
    }
    /**
     * dataDriftMonitoringSignalArgsProvideDefaults sets the appropriate defaults for DataDriftMonitoringSignalArgs
     */
    export function dataDriftMonitoringSignalArgsProvideDefaults(val: DataDriftMonitoringSignalArgs): DataDriftMonitoringSignalArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
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

    export interface DataImportArgs {
        /**
         * Name of the asset for data import job to create
         */
        assetName?: pulumi.Input<string>;
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Enum to determine the type of data.
         * Expected value is 'uri_folder'.
         */
        dataType: pulumi.Input<"uri_folder">;
        /**
         * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
         */
        dataUri: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Intellectual Property details. Used if data is an Intellectual Property.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Source data of the asset to import from
         */
        source?: pulumi.Input<DatabaseSourceArgs | FileSystemSourceArgs>;
        /**
         * Stage in the data lifecycle assigned to this data asset
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * dataImportArgsProvideDefaults sets the appropriate defaults for DataImportArgs
     */
    export function dataImportArgsProvideDefaults(val: DataImportArgs): DataImportArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
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
        properties?: pulumi.Input<DataLakeAnalyticsSchemaPropertiesArgs>;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: pulumi.Input<string>;
    }

    export interface DataLakeAnalyticsSchemaPropertiesArgs {
        /**
         * DataLake Store Account Name
         */
        dataLakeStoreAccountName?: pulumi.Input<string>;
    }

    /**
     * Reference to an asset via its path in a datastore.
     */
    export interface DataPathAssetReferenceArgs {
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: pulumi.Input<string>;
        /**
         * The path of the file/directory in the datastore.
         */
        path?: pulumi.Input<string>;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'DataPath'.
         */
        referenceType: pulumi.Input<"DataPath">;
    }

    export interface DataQualityMonitoringSignalArgs {
        /**
         * A dictionary that maps feature names to their respective data types.
         */
        featureDataTypeOverride?: pulumi.Input<{[key: string]: pulumi.Input<string | enums.MonitoringFeatureDataType>}>;
        /**
         * The features to calculate drift over.
         */
        features?: pulumi.Input<AllFeaturesArgs | FeatureSubsetArgs | TopNFeaturesByAttributionArgs>;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThresholds: pulumi.Input<pulumi.Input<CategoricalDataQualityMetricThresholdArgs | NumericalDataQualityMetricThresholdArgs>[]>;
        /**
         * The current notification mode for this signal.
         */
        mode?: pulumi.Input<string | enums.MonitoringNotificationMode>;
        /**
         * [Required] The data produced by the production service which drift will be calculated for.
         */
        productionData: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] The data to calculate drift against.
         */
        referenceData: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         *
         * Expected value is 'DataQuality'.
         */
        signalType: pulumi.Input<"DataQuality">;
    }
    /**
     * dataQualityMonitoringSignalArgsProvideDefaults sets the appropriate defaults for DataQualityMonitoringSignalArgs
     */
    export function dataQualityMonitoringSignalArgsProvideDefaults(val: DataQualityMonitoringSignalArgs): DataQualityMonitoringSignalArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    export interface DatabaseSourceArgs {
        /**
         * Workspace connection for data import source storage
         */
        connection?: pulumi.Input<string>;
        /**
         * SQL Query statement for data import Database source
         */
        query?: pulumi.Input<string>;
        /**
         * Enum to determine the type of data.
         * Expected value is 'database'.
         */
        sourceType: pulumi.Input<"database">;
        /**
         * SQL StoredProcedure on data import Database source
         */
        storedProcedure?: pulumi.Input<string>;
        /**
         * SQL StoredProcedure parameters
         */
        storedProcedureParams?: pulumi.Input<pulumi.Input<{[key: string]: pulumi.Input<string>}>[]>;
        /**
         * Name of the table on data import Database source
         */
        tableName?: pulumi.Input<string>;
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

    export interface DefaultScaleSettingsArgs {
        /**
         *
         * Expected value is 'Default'.
         */
        scaleType: pulumi.Input<"Default">;
    }

    export interface DeploymentResourceConfigurationArgs {
        /**
         * Optional number of instances or nodes used by the compute target.
         */
        instanceCount?: pulumi.Input<number>;
        /**
         * Optional type of VM used as supported by the compute target.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Locations where the job can run.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Optional max allowed number of instances or nodes to be used by the compute target.
         * For use with elastic training, currently supported by PyTorch distribution type only.
         */
        maxInstanceCount?: pulumi.Input<number>;
        /**
         * Additional properties bag.
         */
        properties?: pulumi.Input<{[key: string]: any}>;
    }
    /**
     * deploymentResourceConfigurationArgsProvideDefaults sets the appropriate defaults for DeploymentResourceConfigurationArgs
     */
    export function deploymentResourceConfigurationArgsProvideDefaults(val: DeploymentResourceConfigurationArgs): DeploymentResourceConfigurationArgs {
        return {
            ...val,
            instanceCount: (val.instanceCount) ?? 1,
        };
    }

    export interface DockerArgs {
        /**
         * Indicate whether container shall run in privileged or non-privileged mode.
         */
        privileged?: pulumi.Input<boolean>;
    }

    export interface EmailMonitoringAlertNotificationSettingsArgs {
        /**
         *
         * Expected value is 'Email'.
         */
        alertNotificationType: pulumi.Input<"Email">;
        /**
         * Configuration for notification.
         */
        emailNotificationSetting?: pulumi.Input<NotificationSettingArgs>;
    }

    export interface EncryptionPropertyArgs {
        /**
         * The byok cosmosdb account that customer brings to store customer's data
         * with encryption
         */
        cosmosDbResourceId?: pulumi.Input<string>;
        /**
         * Identity to be used with the keyVault
         */
        identity?: pulumi.Input<IdentityForCmkArgs>;
        /**
         * KeyVault details to do the encryption
         */
        keyVaultProperties: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * The byok search account that customer brings to store customer's data
         * with encryption
         */
        searchAccountResourceId?: pulumi.Input<string>;
        /**
         * Indicates whether or not the encryption is enabled for the workspace.
         */
        status: pulumi.Input<string | enums.EncryptionStatus>;
        /**
         * The byok storage account that customer brings to store customer's data
         * with encryption
         */
        storageAccountResourceId?: pulumi.Input<string>;
    }

    export interface EndpointArgs {
        /**
         * Host IP over which the application is exposed from the container
         */
        hostIp?: pulumi.Input<string>;
        /**
         * Name of the Endpoint
         */
        name?: pulumi.Input<string>;
        /**
         * Protocol over which communication will happen over this endpoint
         */
        protocol?: pulumi.Input<string | enums.Protocol>;
        /**
         * Port over which the application is exposed from container.
         */
        published?: pulumi.Input<number>;
        /**
         * Application port inside the container.
         */
        target?: pulumi.Input<number>;
    }
    /**
     * endpointArgsProvideDefaults sets the appropriate defaults for EndpointArgs
     */
    export function endpointArgsProvideDefaults(val: EndpointArgs): EndpointArgs {
        return {
            ...val,
            protocol: (val.protocol) ?? "tcp",
        };
    }

    /**
     * Keys for endpoint authentication.
     */
    export interface EndpointAuthKeysArgs {
        /**
         * The primary key.
         */
        primaryKey?: pulumi.Input<string>;
        /**
         * The secondary key.
         */
        secondaryKey?: pulumi.Input<string>;
    }

    export interface EndpointScheduleActionArgs {
        /**
         *
         * Expected value is 'InvokeBatchEndpoint'.
         */
        actionType: pulumi.Input<"InvokeBatchEndpoint">;
        /**
         * [Required] Defines Schedule action definition details.
         * <see href="TBD" />
         */
        endpointInvocationDefinition: any;
    }

    /**
     * Container for environment specification versions.
     */
    export interface EnvironmentContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * environmentContainerArgsProvideDefaults sets the appropriate defaults for EnvironmentContainerArgs
     */
    export function environmentContainerArgsProvideDefaults(val: EnvironmentContainerArgs): EnvironmentContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface EnvironmentVariableArgs {
        /**
         * Type of the Environment Variable. Possible values are: local - For local variable
         */
        type?: pulumi.Input<string | enums.EnvironmentVariableType>;
        /**
         * Value of the Environment variable
         */
        value?: pulumi.Input<string>;
    }
    /**
     * environmentVariableArgsProvideDefaults sets the appropriate defaults for EnvironmentVariableArgs
     */
    export function environmentVariableArgsProvideDefaults(val: EnvironmentVariableArgs): EnvironmentVariableArgs {
        return {
            ...val,
            type: (val.type) ?? "local",
        };
    }

    /**
     * Environment version details.
     */
    export interface EnvironmentVersionArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Defines if image needs to be rebuilt based on base image changes.
         */
        autoRebuild?: pulumi.Input<string | enums.AutoRebuildSetting>;
        /**
         * Configuration settings for Docker build context.
         */
        build?: pulumi.Input<BuildContextArgs>;
        /**
         * Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.
         * <see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" />
         */
        condaFile?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Name of the image that will be used for the environment.
         * <seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
         */
        image?: pulumi.Input<string>;
        /**
         * Defines configuration specific to inference.
         */
        inferenceConfig?: pulumi.Input<InferenceContainerPropertiesArgs>;
        /**
         * Intellectual Property details. Used if environment is an Intellectual Property.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The OS type of the environment.
         */
        osType?: pulumi.Input<string | enums.OperatingSystemType>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Stage in the environment lifecycle assigned to this environment
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * environmentVersionArgsProvideDefaults sets the appropriate defaults for EnvironmentVersionArgs
     */
    export function environmentVersionArgsProvideDefaults(val: EnvironmentVersionArgs): EnvironmentVersionArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            autoRebuild: (val.autoRebuild) ?? "Disabled",
            build: (val.build ? pulumi.output(val.build).apply(buildContextArgsProvideDefaults) : undefined),
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
            osType: (val.osType) ?? "Linux",
        };
    }

    export interface FeatureAttributionDriftMonitoringSignalArgs {
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThreshold: pulumi.Input<FeatureAttributionMetricThresholdArgs>;
        /**
         * The current notification mode for this signal.
         */
        mode?: pulumi.Input<string | enums.MonitoringNotificationMode>;
        /**
         * [Required] The data which drift will be calculated for.
         */
        productionData: pulumi.Input<pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>[]>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] The data to calculate drift against.
         */
        referenceData: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         *
         * Expected value is 'FeatureAttributionDrift'.
         */
        signalType: pulumi.Input<"FeatureAttributionDrift">;
    }
    /**
     * featureAttributionDriftMonitoringSignalArgsProvideDefaults sets the appropriate defaults for FeatureAttributionDriftMonitoringSignalArgs
     */
    export function featureAttributionDriftMonitoringSignalArgsProvideDefaults(val: FeatureAttributionDriftMonitoringSignalArgs): FeatureAttributionDriftMonitoringSignalArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    export interface FeatureAttributionMetricThresholdArgs {
        /**
         * [Required] The feature attribution metric to calculate.
         */
        metric: pulumi.Input<string | enums.FeatureAttributionMetric>;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    export interface FeatureStoreSettingsArgs {
        computeRuntime?: pulumi.Input<ComputeRuntimeDtoArgs>;
        offlineStoreConnectionName?: pulumi.Input<string>;
        onlineStoreConnectionName?: pulumi.Input<string>;
    }

    export interface FeatureSubsetArgs {
        /**
         * [Required] The list of features to include.
         */
        features: pulumi.Input<pulumi.Input<string>[]>;
        /**
         *
         * Expected value is 'FeatureSubset'.
         */
        filterType: pulumi.Input<"FeatureSubset">;
    }

    /**
     * Dto object representing feature set
     */
    export interface FeaturesetContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * featuresetContainerArgsProvideDefaults sets the appropriate defaults for FeaturesetContainerArgs
     */
    export function featuresetContainerArgsProvideDefaults(val: FeaturesetContainerArgs): FeaturesetContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Dto object representing specification
     */
    export interface FeaturesetSpecificationArgs {
        /**
         * Specifies the spec path
         */
        path?: pulumi.Input<string>;
    }

    /**
     * Dto object representing feature set version
     */
    export interface FeaturesetVersionArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Specifies list of entities
         */
        entities?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Specifies the materialization settings
         */
        materializationSettings?: pulumi.Input<MaterializationSettingsArgs>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Specifies the feature spec details
         */
        specification?: pulumi.Input<FeaturesetSpecificationArgs>;
        /**
         * Specifies the asset stage
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * featuresetVersionArgsProvideDefaults sets the appropriate defaults for FeaturesetVersionArgs
     */
    export function featuresetVersionArgsProvideDefaults(val: FeaturesetVersionArgs): FeaturesetVersionArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
            materializationSettings: (val.materializationSettings ? pulumi.output(val.materializationSettings).apply(materializationSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Dto object representing feature entity
     */
    export interface FeaturestoreEntityContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * featurestoreEntityContainerArgsProvideDefaults sets the appropriate defaults for FeaturestoreEntityContainerArgs
     */
    export function featurestoreEntityContainerArgsProvideDefaults(val: FeaturestoreEntityContainerArgs): FeaturestoreEntityContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Dto object representing feature entity version
     */
    export interface FeaturestoreEntityVersionArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Specifies index columns
         */
        indexColumns?: pulumi.Input<pulumi.Input<IndexColumnArgs>[]>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Specifies the asset stage
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * featurestoreEntityVersionArgsProvideDefaults sets the appropriate defaults for FeaturestoreEntityVersionArgs
     */
    export function featurestoreEntityVersionArgsProvideDefaults(val: FeaturestoreEntityVersionArgs): FeaturestoreEntityVersionArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface FileSystemSourceArgs {
        /**
         * Workspace connection for data import source storage
         */
        connection?: pulumi.Input<string>;
        /**
         * Path on data import FileSystem source
         */
        path?: pulumi.Input<string>;
        /**
         * Enum to determine the type of data.
         * Expected value is 'file_system'.
         */
        sourceType: pulumi.Input<"file_system">;
    }

    /**
     * Fixed input data definition.
     */
    export interface FixedInputDataArgs {
        /**
         * Mapping of column names to special uses.
         */
        columns?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The context metadata of the data source.
         */
        dataContext?: pulumi.Input<string>;
        /**
         * Monitoring input data type enum.
         * Expected value is 'Fixed'.
         */
        inputDataType: pulumi.Input<"Fixed">;
        /**
         * [Required] Specifies the type of job.
         */
        jobInputType: pulumi.Input<string | enums.JobInputType>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }

    export interface FlavorDataArgs {
        /**
         * Model flavor-specific data.
         */
        data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Forecasting task in AutoML Table vertical.
     */
    export interface ForecastingArgs {
        /**
         * Columns to use for CVSplit data.
         */
        cvSplitColumnNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs>;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: pulumi.Input<TableFixedParametersArgs>;
        /**
         * Forecasting task specific inputs.
         */
        forecastingSettings?: pulumi.Input<ForecastingSettingsArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Number of cross validation folds to be applied on training dataset
         * when validation dataset is not provided.
         */
        nCrossValidations?: pulumi.Input<AutoNCrossValidationsArgs | CustomNCrossValidationsArgs>;
        /**
         * Primary metric for forecasting task.
         */
        primaryMetric?: pulumi.Input<string | enums.ForecastingPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<TableParameterSubspaceArgs>[]>;
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: pulumi.Input<TableSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Forecasting'.
         */
        taskType: pulumi.Input<"Forecasting">;
        /**
         * Test data input.
         */
        testData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of test dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        testDataSize?: pulumi.Input<number>;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: pulumi.Input<ForecastingTrainingSettingsArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
        /**
         * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
         */
        weightColumnName?: pulumi.Input<string>;
    }
    /**
     * forecastingArgsProvideDefaults sets the appropriate defaults for ForecastingArgs
     */
    export function forecastingArgsProvideDefaults(val: ForecastingArgs): ForecastingArgs {
        return {
            ...val,
            featurizationSettings: (val.featurizationSettings ? pulumi.output(val.featurizationSettings).apply(tableVerticalFeaturizationSettingsArgsProvideDefaults) : undefined),
            fixedParameters: (val.fixedParameters ? pulumi.output(val.fixedParameters).apply(tableFixedParametersArgsProvideDefaults) : undefined),
            forecastingSettings: (val.forecastingSettings ? pulumi.output(val.forecastingSettings).apply(forecastingSettingsArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(tableVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
            testData: (val.testData ? pulumi.output(val.testData).apply(mltableJobInputArgsProvideDefaults) : undefined),
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            trainingSettings: (val.trainingSettings ? pulumi.output(val.trainingSettings).apply(forecastingTrainingSettingsArgsProvideDefaults) : undefined),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Forecasting specific parameters.
     */
    export interface ForecastingSettingsArgs {
        /**
         * Country or region for holidays for forecasting tasks.
         * These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'.
         */
        countryOrRegionForHolidays?: pulumi.Input<string>;
        /**
         * Number of periods between the origin time of one CV fold and the next fold. For
         * example, if `CVStepSize` = 3 for daily data, the origin time for each fold will be
         * three days apart.
         */
        cvStepSize?: pulumi.Input<number>;
        /**
         * Flag for generating lags for the numeric features with 'auto' or null.
         */
        featureLags?: pulumi.Input<string | enums.FeatureLags>;
        /**
         * The feature columns that are available for training but unknown at the time of forecast/inference.
         * If features_unknown_at_forecast_time is not set, it is assumed that all the feature columns in the dataset are known at inference time.
         */
        featuresUnknownAtForecastTime?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The desired maximum forecast horizon in units of time-series frequency.
         */
        forecastHorizon?: pulumi.Input<AutoForecastHorizonArgs | CustomForecastHorizonArgs>;
        /**
         * When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default.
         */
        frequency?: pulumi.Input<string>;
        /**
         * Set time series seasonality as an integer multiple of the series frequency.
         * If seasonality is set to 'auto', it will be inferred.
         */
        seasonality?: pulumi.Input<AutoSeasonalityArgs | CustomSeasonalityArgs>;
        /**
         * The parameter defining how if AutoML should handle short time series.
         */
        shortSeriesHandlingConfig?: pulumi.Input<string | enums.ShortSeriesHandlingConfiguration>;
        /**
         * The function to be used to aggregate the time series target column to conform to a user specified frequency.
         * If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean".
         */
        targetAggregateFunction?: pulumi.Input<string | enums.TargetAggregationFunction>;
        /**
         * The number of past periods to lag from the target column.
         */
        targetLags?: pulumi.Input<AutoTargetLagsArgs | CustomTargetLagsArgs>;
        /**
         * The number of past periods used to create a rolling window average of the target column.
         */
        targetRollingWindowSize?: pulumi.Input<AutoTargetRollingWindowSizeArgs | CustomTargetRollingWindowSizeArgs>;
        /**
         * The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency.
         */
        timeColumnName?: pulumi.Input<string>;
        /**
         * The names of columns used to group a timeseries. It can be used to create multiple series.
         * If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting.
         */
        timeSeriesIdColumnNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Configure STL Decomposition of the time-series target column.
         */
        useStl?: pulumi.Input<string | enums.UseStl>;
    }
    /**
     * forecastingSettingsArgsProvideDefaults sets the appropriate defaults for ForecastingSettingsArgs
     */
    export function forecastingSettingsArgsProvideDefaults(val: ForecastingSettingsArgs): ForecastingSettingsArgs {
        return {
            ...val,
            featureLags: (val.featureLags) ?? "None",
            shortSeriesHandlingConfig: (val.shortSeriesHandlingConfig) ?? "Auto",
            targetAggregateFunction: (val.targetAggregateFunction) ?? "None",
            useStl: (val.useStl) ?? "None",
        };
    }

    /**
     * Forecasting Training related configuration.
     */
    export interface ForecastingTrainingSettingsArgs {
        /**
         * Allowed models for forecasting task.
         */
        allowedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.ForecastingModels>[]>;
        /**
         * Blocked models for forecasting task.
         */
        blockedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.ForecastingModels>[]>;
        /**
         * Enable recommendation of DNN models.
         */
        enableDnnTraining?: pulumi.Input<boolean>;
        /**
         * Flag to turn on explainability on best model.
         */
        enableModelExplainability?: pulumi.Input<boolean>;
        /**
         * Flag for enabling onnx compatible models.
         */
        enableOnnxCompatibleModels?: pulumi.Input<boolean>;
        /**
         * Enable stack ensemble run.
         */
        enableStackEnsemble?: pulumi.Input<boolean>;
        /**
         * Enable voting ensemble run.
         */
        enableVoteEnsemble?: pulumi.Input<boolean>;
        /**
         * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
         * Configure this parameter with a higher value than 300 secs, if more time is needed.
         */
        ensembleModelDownloadTimeout?: pulumi.Input<string>;
        /**
         * Stack ensemble settings for stack ensemble run.
         */
        stackEnsembleSettings?: pulumi.Input<StackEnsembleSettingsArgs>;
        /**
         * TrainingMode mode - Setting to 'auto' is same as setting it to 'non-distributed' for now, however in the future may result in mixed mode or heuristics based mode selection. Default is 'auto'.
         * If 'Distributed' then only distributed featurization is used and distributed algorithms are chosen.
         * If 'NonDistributed' then only non distributed algorithms are chosen.
         */
        trainingMode?: pulumi.Input<string | enums.TrainingMode>;
    }
    /**
     * forecastingTrainingSettingsArgsProvideDefaults sets the appropriate defaults for ForecastingTrainingSettingsArgs
     */
    export function forecastingTrainingSettingsArgsProvideDefaults(val: ForecastingTrainingSettingsArgs): ForecastingTrainingSettingsArgs {
        return {
            ...val,
            enableDnnTraining: (val.enableDnnTraining) ?? false,
            enableModelExplainability: (val.enableModelExplainability) ?? true,
            enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
            enableStackEnsemble: (val.enableStackEnsemble) ?? true,
            enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
            ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
            stackEnsembleSettings: (val.stackEnsembleSettings ? pulumi.output(val.stackEnsembleSettings).apply(stackEnsembleSettingsArgsProvideDefaults) : undefined),
            trainingMode: (val.trainingMode) ?? "Auto",
        };
    }

    /**
     * FQDN Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface FqdnOutboundRuleArgs {
        /**
         * Category of a managed network Outbound Rule of a machine learning workspace.
         */
        category?: pulumi.Input<string | enums.RuleCategory>;
        destination?: pulumi.Input<string>;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         */
        status?: pulumi.Input<string | enums.RuleStatus>;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         * Expected value is 'FQDN'.
         */
        type: pulumi.Input<"FQDN">;
    }

    /**
     * Generation safety quality metric threshold definition.
     */
    export interface GenerationSafetyQualityMetricThresholdArgs {
        /**
         * [Required] Gets or sets the feature attribution metric to calculate.
         */
        metric: pulumi.Input<string | enums.GenerationSafetyQualityMetric>;
        /**
         * Gets or sets the threshold value.
         * If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    /**
     * Generation safety quality monitoring signal definition.
     */
    export interface GenerationSafetyQualityMonitoringSignalArgs {
        /**
         * [Required] Gets or sets the metrics to calculate and the corresponding thresholds.
         */
        metricThresholds: pulumi.Input<pulumi.Input<GenerationSafetyQualityMetricThresholdArgs>[]>;
        /**
         * The current notification mode for this signal.
         */
        mode?: pulumi.Input<string | enums.MonitoringNotificationMode>;
        /**
         * Gets or sets the target data for computing metrics.
         */
        productionData?: pulumi.Input<pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>[]>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] The sample rate of the target data, should be greater than 0 and at most 1.
         */
        samplingRate: pulumi.Input<number>;
        /**
         *
         * Expected value is 'GenerationSafetyQuality'.
         */
        signalType: pulumi.Input<"GenerationSafetyQuality">;
        /**
         * Gets or sets the workspace connection ID used to connect to the content generation endpoint.
         */
        workspaceConnectionId?: pulumi.Input<string>;
    }
    /**
     * generationSafetyQualityMonitoringSignalArgsProvideDefaults sets the appropriate defaults for GenerationSafetyQualityMonitoringSignalArgs
     */
    export function generationSafetyQualityMonitoringSignalArgsProvideDefaults(val: GenerationSafetyQualityMonitoringSignalArgs): GenerationSafetyQualityMonitoringSignalArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    /**
     * Generation token statistics metric threshold definition.
     */
    export interface GenerationTokenStatisticsMetricThresholdArgs {
        /**
         * [Required] Gets or sets the feature attribution metric to calculate.
         */
        metric: pulumi.Input<string | enums.GenerationTokenStatisticsMetric>;
        /**
         * Gets or sets the threshold value.
         * If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    /**
     * Generation token statistics signal definition.
     */
    export interface GenerationTokenStatisticsSignalArgs {
        /**
         * [Required] Gets or sets the metrics to calculate and the corresponding thresholds.
         */
        metricThresholds: pulumi.Input<pulumi.Input<GenerationTokenStatisticsMetricThresholdArgs>[]>;
        /**
         * The current notification mode for this signal.
         */
        mode?: pulumi.Input<string | enums.MonitoringNotificationMode>;
        /**
         * Gets or sets the target data for computing metrics.
         */
        productionData?: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] The sample rate of the target data, should be greater than 0 and at most 1.
         */
        samplingRate: pulumi.Input<number>;
        /**
         *
         * Expected value is 'GenerationTokenStatistics'.
         */
        signalType: pulumi.Input<"GenerationTokenStatistics">;
    }
    /**
     * generationTokenStatisticsSignalArgsProvideDefaults sets the appropriate defaults for GenerationTokenStatisticsSignalArgs
     */
    export function generationTokenStatisticsSignalArgsProvideDefaults(val: GenerationTokenStatisticsSignalArgs): GenerationTokenStatisticsSignalArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    /**
     * Defines a Sampling Algorithm that exhaustively generates every value combination in the space
     */
    export interface GridSamplingAlgorithmArgs {
        /**
         *
         * Expected value is 'Grid'.
         */
        samplingAlgorithmType: pulumi.Input<"Grid">;
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

    export interface HdfsDatastoreArgs {
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'Hdfs'.
         */
        datastoreType: pulumi.Input<"Hdfs">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * The TLS cert of the HDFS server. Needs to be a base64 encoded string. Required if "Https" protocol is selected.
         */
        hdfsServerCertificate?: pulumi.Input<string>;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * [Required] IP Address or DNS HostName.
         */
        nameNodeAddress: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Protocol used to communicate with the storage account (Https/Http).
         */
        protocol?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * hdfsDatastoreArgsProvideDefaults sets the appropriate defaults for HdfsDatastoreArgs
     */
    export function hdfsDatastoreArgsProvideDefaults(val: HdfsDatastoreArgs): HdfsDatastoreArgs {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            protocol: (val.protocol) ?? "http",
        };
    }

    /**
     * Reference to an asset via its ARM resource ID.
     */
    export interface IdAssetReferenceArgs {
        /**
         * [Required] ARM resource ID of the asset.
         */
        assetId: pulumi.Input<string>;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'Id'.
         */
        referenceType: pulumi.Input<"Id">;
    }

    /**
     * Identity object used for encryption.
     */
    export interface IdentityForCmkArgs {
        /**
         * UserAssignedIdentity to be used to fetch the encryption key from keyVault
         */
        userAssignedIdentity?: pulumi.Input<string>;
    }

    export interface ImageArgs {
        /**
         * Image reference URL
         */
        reference?: pulumi.Input<string>;
        /**
         * Type of the image. Possible values are: docker - For docker images. azureml - For AzureML images
         */
        type?: pulumi.Input<string | enums.ImageType>;
    }
    /**
     * imageArgsProvideDefaults sets the appropriate defaults for ImageArgs
     */
    export function imageArgsProvideDefaults(val: ImageArgs): ImageArgs {
        return {
            ...val,
            type: (val.type) ?? "docker",
        };
    }

    /**
     * Image Classification. Multi-class image classification is used when an image is classified with only a single label
     * from a set of classes - e.g. each image is classified as either an image of a 'cat' or a 'dog' or a 'duck'.
     */
    export interface ImageClassificationArgs {
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Settings used for training the model.
         */
        modelSettings?: pulumi.Input<ImageModelSettingsClassificationArgs>;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsClassificationArgs>[]>;
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: pulumi.Input<ImageSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageClassification'.
         */
        taskType: pulumi.Input<"ImageClassification">;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
    }
    /**
     * imageClassificationArgsProvideDefaults sets the appropriate defaults for ImageClassificationArgs
     */
    export function imageClassificationArgsProvideDefaults(val: ImageClassificationArgs): ImageClassificationArgs {
        return {
            ...val,
            limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? pulumi.output(val.modelSettings).apply(imageModelSettingsClassificationArgsProvideDefaults) : undefined),
            primaryMetric: (val.primaryMetric) ?? "Accuracy",
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Image Classification Multilabel. Multi-label image classification is used when an image could have one or more labels
     * from a set of labels - e.g. an image could be labeled with both 'cat' and 'dog'.
     */
    export interface ImageClassificationMultilabelArgs {
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Settings used for training the model.
         */
        modelSettings?: pulumi.Input<ImageModelSettingsClassificationArgs>;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: pulumi.Input<string | enums.ClassificationMultilabelPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsClassificationArgs>[]>;
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: pulumi.Input<ImageSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageClassificationMultilabel'.
         */
        taskType: pulumi.Input<"ImageClassificationMultilabel">;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
    }
    /**
     * imageClassificationMultilabelArgsProvideDefaults sets the appropriate defaults for ImageClassificationMultilabelArgs
     */
    export function imageClassificationMultilabelArgsProvideDefaults(val: ImageClassificationMultilabelArgs): ImageClassificationMultilabelArgs {
        return {
            ...val,
            limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? pulumi.output(val.modelSettings).apply(imageModelSettingsClassificationArgsProvideDefaults) : undefined),
            primaryMetric: (val.primaryMetric) ?? "IOU",
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Image Instance Segmentation. Instance segmentation is used to identify objects in an image at the pixel level,
     * drawing a polygon around each object in the image.
     */
    export interface ImageInstanceSegmentationArgs {
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Settings used for training the model.
         */
        modelSettings?: pulumi.Input<ImageModelSettingsObjectDetectionArgs>;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: pulumi.Input<string | enums.InstanceSegmentationPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsObjectDetectionArgs>[]>;
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: pulumi.Input<ImageSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageInstanceSegmentation'.
         */
        taskType: pulumi.Input<"ImageInstanceSegmentation">;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
    }
    /**
     * imageInstanceSegmentationArgsProvideDefaults sets the appropriate defaults for ImageInstanceSegmentationArgs
     */
    export function imageInstanceSegmentationArgsProvideDefaults(val: ImageInstanceSegmentationArgs): ImageInstanceSegmentationArgs {
        return {
            ...val,
            limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? pulumi.output(val.modelSettings).apply(imageModelSettingsObjectDetectionArgsProvideDefaults) : undefined),
            primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Limit settings for the AutoML job.
     */
    export interface ImageLimitSettingsArgs {
        /**
         * Maximum number of concurrent AutoML iterations.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Maximum number of AutoML iterations.
         */
        maxTrials?: pulumi.Input<number>;
        /**
         * AutoML job timeout.
         */
        timeout?: pulumi.Input<string>;
    }
    /**
     * imageLimitSettingsArgsProvideDefaults sets the appropriate defaults for ImageLimitSettingsArgs
     */
    export function imageLimitSettingsArgsProvideDefaults(val: ImageLimitSettingsArgs): ImageLimitSettingsArgs {
        return {
            ...val,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxTrials: (val.maxTrials) ?? 1,
            timeout: (val.timeout) ?? "P7D",
        };
    }

    /**
     * Distribution expressions to sweep over values of model settings.
     * <example>
     * Some examples are:
     * ```
     * ModelName = "choice('seresnext', 'resnest50')";
     * LearningRate = "uniform(0.001, 0.01)";
     * LayersToFreeze = "choice(0, 2)";
     * ```</example>
     * For more details on how to compose distribution expressions please check the documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-tune-hyperparameters
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelDistributionSettingsClassificationArgs {
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: pulumi.Input<string>;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: pulumi.Input<string>;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: pulumi.Input<string>;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: pulumi.Input<string>;
        /**
         * Whether to use distributer training.
         */
        distributed?: pulumi.Input<string>;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: pulumi.Input<string>;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: pulumi.Input<string>;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: pulumi.Input<string>;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: pulumi.Input<string>;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: pulumi.Input<string>;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: pulumi.Input<string>;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: pulumi.Input<string>;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: pulumi.Input<string>;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: pulumi.Input<string>;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: pulumi.Input<string>;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: pulumi.Input<string>;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: pulumi.Input<string>;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: pulumi.Input<string>;
        /**
         * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
         */
        optimizer?: pulumi.Input<string>;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: pulumi.Input<string>;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: pulumi.Input<string>;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: pulumi.Input<string>;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: pulumi.Input<string>;
        /**
         * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
         */
        trainingCropSize?: pulumi.Input<string>;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: pulumi.Input<string>;
        /**
         * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
         */
        validationCropSize?: pulumi.Input<string>;
        /**
         * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
         */
        validationResizeSize?: pulumi.Input<string>;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: pulumi.Input<string>;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: pulumi.Input<string>;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: pulumi.Input<string>;
        /**
         * Weighted loss. The accepted values are 0 for no weighted loss.
         * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
         */
        weightedLoss?: pulumi.Input<string>;
    }

    /**
     * Distribution expressions to sweep over values of model settings.
     * <example>
     * Some examples are:
     * ```
     * ModelName = "choice('seresnext', 'resnest50')";
     * LearningRate = "uniform(0.001, 0.01)";
     * LayersToFreeze = "choice(0, 2)";
     * ```</example>
     * For more details on how to compose distribution expressions please check the documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-tune-hyperparameters
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelDistributionSettingsObjectDetectionArgs {
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: pulumi.Input<string>;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: pulumi.Input<string>;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: pulumi.Input<string>;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: pulumi.Input<string>;
        /**
         * Maximum number of detections per image, for all classes. Must be a positive integer.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        boxDetectionsPerImage?: pulumi.Input<string>;
        /**
         * During inference, only return proposals with a classification score greater than
         * BoxScoreThreshold. Must be a float in the range[0, 1].
         */
        boxScoreThreshold?: pulumi.Input<string>;
        /**
         * Whether to use distributer training.
         */
        distributed?: pulumi.Input<string>;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: pulumi.Input<string>;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: pulumi.Input<string>;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: pulumi.Input<string>;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: pulumi.Input<string>;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: pulumi.Input<string>;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: pulumi.Input<string>;
        /**
         * Image size for train and validation. Must be a positive integer.
         * Note: The training run may get into CUDA OOM if the size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        imageSize?: pulumi.Input<string>;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: pulumi.Input<string>;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: pulumi.Input<string>;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: pulumi.Input<string>;
        /**
         * Maximum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        maxSize?: pulumi.Input<string>;
        /**
         * Minimum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        minSize?: pulumi.Input<string>;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
         * Note: training run may get into CUDA OOM if the model size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        modelSize?: pulumi.Input<string>;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: pulumi.Input<string>;
        /**
         * Enable multi-scale image by varying image size by +/- 50%.
         * Note: training run may get into CUDA OOM if no sufficient GPU memory.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        multiScale?: pulumi.Input<string>;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: pulumi.Input<string>;
        /**
         * IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1].
         */
        nmsIouThreshold?: pulumi.Input<string>;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: pulumi.Input<string>;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: pulumi.Input<string>;
        /**
         * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
         */
        optimizer?: pulumi.Input<string>;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: pulumi.Input<string>;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: pulumi.Input<string>;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: pulumi.Input<string>;
        /**
         * The grid size to use for tiling each image. Note: TileGridSize must not be
         * None to enable small object detection logic. A string containing two integers in mxn format.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileGridSize?: pulumi.Input<string>;
        /**
         * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileOverlapRatio?: pulumi.Input<string>;
        /**
         * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
         * Used in validation/ inference. Must be float in the range [0, 1].
         * Note: This settings is not supported for the 'yolov5' algorithm.
         * NMS: Non-maximum suppression
         */
        tilePredictionsNmsThreshold?: pulumi.Input<string>;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: pulumi.Input<string>;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: pulumi.Input<string>;
        /**
         * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
         */
        validationIouThreshold?: pulumi.Input<string>;
        /**
         * Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'.
         */
        validationMetricType?: pulumi.Input<string>;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: pulumi.Input<string>;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: pulumi.Input<string>;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: pulumi.Input<string>;
    }

    /**
     * Settings used for training the model.
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelSettingsClassificationArgs {
        /**
         * Settings for advanced scenarios.
         */
        advancedSettings?: pulumi.Input<string>;
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: pulumi.Input<boolean>;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: pulumi.Input<string>;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: pulumi.Input<number>;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: pulumi.Input<number>;
        /**
         * Frequency to store model checkpoints. Must be a positive integer.
         */
        checkpointFrequency?: pulumi.Input<number>;
        /**
         * The pretrained checkpoint model for incremental training.
         */
        checkpointModel?: pulumi.Input<MLFlowModelJobInputArgs>;
        /**
         * The id of a previous run that has a pretrained checkpoint for incremental training.
         */
        checkpointRunId?: pulumi.Input<string>;
        /**
         * Whether to use distributed training.
         */
        distributed?: pulumi.Input<boolean>;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: pulumi.Input<boolean>;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: pulumi.Input<number>;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: pulumi.Input<number>;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: pulumi.Input<boolean>;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: pulumi.Input<number>;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: pulumi.Input<number>;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: pulumi.Input<number>;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: pulumi.Input<number>;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: pulumi.Input<string | enums.LearningRateScheduler>;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: pulumi.Input<number>;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: pulumi.Input<boolean>;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: pulumi.Input<number>;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: pulumi.Input<number>;
        /**
         * Type of optimizer.
         */
        optimizer?: pulumi.Input<string | enums.StochasticOptimizer>;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: pulumi.Input<number>;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: pulumi.Input<number>;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: pulumi.Input<number>;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: pulumi.Input<number>;
        /**
         * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
         */
        trainingCropSize?: pulumi.Input<number>;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: pulumi.Input<number>;
        /**
         * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
         */
        validationCropSize?: pulumi.Input<number>;
        /**
         * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
         */
        validationResizeSize?: pulumi.Input<number>;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: pulumi.Input<number>;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: pulumi.Input<number>;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: pulumi.Input<number>;
        /**
         * Weighted loss. The accepted values are 0 for no weighted loss.
         * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
         */
        weightedLoss?: pulumi.Input<number>;
    }
    /**
     * imageModelSettingsClassificationArgsProvideDefaults sets the appropriate defaults for ImageModelSettingsClassificationArgs
     */
    export function imageModelSettingsClassificationArgsProvideDefaults(val: ImageModelSettingsClassificationArgs): ImageModelSettingsClassificationArgs {
        return {
            ...val,
            checkpointModel: (val.checkpointModel ? pulumi.output(val.checkpointModel).apply(mlflowModelJobInputArgsProvideDefaults) : undefined),
            learningRateScheduler: (val.learningRateScheduler) ?? "None",
            optimizer: (val.optimizer) ?? "None",
        };
    }

    /**
     * Settings used for training the model.
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelSettingsObjectDetectionArgs {
        /**
         * Settings for advanced scenarios.
         */
        advancedSettings?: pulumi.Input<string>;
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: pulumi.Input<boolean>;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: pulumi.Input<string>;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: pulumi.Input<number>;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: pulumi.Input<number>;
        /**
         * Maximum number of detections per image, for all classes. Must be a positive integer.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        boxDetectionsPerImage?: pulumi.Input<number>;
        /**
         * During inference, only return proposals with a classification score greater than
         * BoxScoreThreshold. Must be a float in the range[0, 1].
         */
        boxScoreThreshold?: pulumi.Input<number>;
        /**
         * Frequency to store model checkpoints. Must be a positive integer.
         */
        checkpointFrequency?: pulumi.Input<number>;
        /**
         * The pretrained checkpoint model for incremental training.
         */
        checkpointModel?: pulumi.Input<MLFlowModelJobInputArgs>;
        /**
         * The id of a previous run that has a pretrained checkpoint for incremental training.
         */
        checkpointRunId?: pulumi.Input<string>;
        /**
         * Whether to use distributed training.
         */
        distributed?: pulumi.Input<boolean>;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: pulumi.Input<boolean>;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: pulumi.Input<number>;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: pulumi.Input<number>;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: pulumi.Input<boolean>;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: pulumi.Input<number>;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: pulumi.Input<number>;
        /**
         * Image size for train and validation. Must be a positive integer.
         * Note: The training run may get into CUDA OOM if the size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        imageSize?: pulumi.Input<number>;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: pulumi.Input<number>;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: pulumi.Input<number>;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: pulumi.Input<string | enums.LearningRateScheduler>;
        /**
         * Enable computing and logging training metrics.
         */
        logTrainingMetrics?: pulumi.Input<string | enums.LogTrainingMetrics>;
        /**
         * Enable computing and logging validation loss.
         */
        logValidationLoss?: pulumi.Input<string | enums.LogValidationLoss>;
        /**
         * Maximum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        maxSize?: pulumi.Input<number>;
        /**
         * Minimum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        minSize?: pulumi.Input<number>;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
         * Note: training run may get into CUDA OOM if the model size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        modelSize?: pulumi.Input<string | enums.ModelSize>;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: pulumi.Input<number>;
        /**
         * Enable multi-scale image by varying image size by +/- 50%.
         * Note: training run may get into CUDA OOM if no sufficient GPU memory.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        multiScale?: pulumi.Input<boolean>;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: pulumi.Input<boolean>;
        /**
         * IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1].
         */
        nmsIouThreshold?: pulumi.Input<number>;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: pulumi.Input<number>;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: pulumi.Input<number>;
        /**
         * Type of optimizer.
         */
        optimizer?: pulumi.Input<string | enums.StochasticOptimizer>;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: pulumi.Input<number>;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: pulumi.Input<number>;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: pulumi.Input<number>;
        /**
         * The grid size to use for tiling each image. Note: TileGridSize must not be
         * None to enable small object detection logic. A string containing two integers in mxn format.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileGridSize?: pulumi.Input<string>;
        /**
         * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileOverlapRatio?: pulumi.Input<number>;
        /**
         * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
         * Used in validation/ inference. Must be float in the range [0, 1].
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tilePredictionsNmsThreshold?: pulumi.Input<number>;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: pulumi.Input<number>;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: pulumi.Input<number>;
        /**
         * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
         */
        validationIouThreshold?: pulumi.Input<number>;
        /**
         * Metric computation method to use for validation metrics.
         */
        validationMetricType?: pulumi.Input<string | enums.ValidationMetricType>;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: pulumi.Input<number>;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: pulumi.Input<number>;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: pulumi.Input<number>;
    }
    /**
     * imageModelSettingsObjectDetectionArgsProvideDefaults sets the appropriate defaults for ImageModelSettingsObjectDetectionArgs
     */
    export function imageModelSettingsObjectDetectionArgsProvideDefaults(val: ImageModelSettingsObjectDetectionArgs): ImageModelSettingsObjectDetectionArgs {
        return {
            ...val,
            checkpointModel: (val.checkpointModel ? pulumi.output(val.checkpointModel).apply(mlflowModelJobInputArgsProvideDefaults) : undefined),
            learningRateScheduler: (val.learningRateScheduler) ?? "None",
            logTrainingMetrics: (val.logTrainingMetrics) ?? "Enable",
            logValidationLoss: (val.logValidationLoss) ?? "Disable",
            modelSize: (val.modelSize) ?? "None",
            optimizer: (val.optimizer) ?? "None",
            validationMetricType: (val.validationMetricType) ?? "None",
        };
    }

    /**
     * Image Object Detection. Object detection is used to identify objects in an image and locate each object with a
     * bounding box e.g. locate all dogs and cats in an image and draw a bounding box around each.
     */
    export interface ImageObjectDetectionArgs {
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Settings used for training the model.
         */
        modelSettings?: pulumi.Input<ImageModelSettingsObjectDetectionArgs>;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: pulumi.Input<string | enums.ObjectDetectionPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsObjectDetectionArgs>[]>;
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: pulumi.Input<ImageSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageObjectDetection'.
         */
        taskType: pulumi.Input<"ImageObjectDetection">;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
    }
    /**
     * imageObjectDetectionArgsProvideDefaults sets the appropriate defaults for ImageObjectDetectionArgs
     */
    export function imageObjectDetectionArgsProvideDefaults(val: ImageObjectDetectionArgs): ImageObjectDetectionArgs {
        return {
            ...val,
            limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? pulumi.output(val.modelSettings).apply(imageModelSettingsObjectDetectionArgsProvideDefaults) : undefined),
            primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Model sweeping and hyperparameter sweeping related settings.
     */
    export interface ImageSweepSettingsArgs {
        /**
         * Type of early termination policy.
         */
        earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs>;
        /**
         * [Required] Type of the hyperparameter sampling algorithms.
         */
        samplingAlgorithm: pulumi.Input<string | enums.SamplingAlgorithmType>;
    }

    export interface ImportDataActionArgs {
        /**
         *
         * Expected value is 'ImportData'.
         */
        actionType: pulumi.Input<"ImportData">;
        /**
         * [Required] Defines Schedule action definition details.
         */
        dataImportDefinition: pulumi.Input<DataImportArgs>;
    }
    /**
     * importDataActionArgsProvideDefaults sets the appropriate defaults for ImportDataActionArgs
     */
    export function importDataActionArgsProvideDefaults(val: ImportDataActionArgs): ImportDataActionArgs {
        return {
            ...val,
            dataImportDefinition: pulumi.output(val.dataImportDefinition).apply(dataImportArgsProvideDefaults),
        };
    }

    /**
     * Dto object representing index column
     */
    export interface IndexColumnArgs {
        /**
         * Specifies the column name
         */
        columnName?: pulumi.Input<string>;
        /**
         * Specifies the data type
         */
        dataType?: pulumi.Input<string | enums.FeatureDataType>;
    }
    /**
     * indexColumnArgsProvideDefaults sets the appropriate defaults for IndexColumnArgs
     */
    export function indexColumnArgsProvideDefaults(val: IndexColumnArgs): IndexColumnArgs {
        return {
            ...val,
            dataType: (val.dataType) ?? "String",
        };
    }

    export interface InferenceContainerPropertiesArgs {
        /**
         * The route to check the liveness of the inference server container.
         */
        livenessRoute?: pulumi.Input<RouteArgs>;
        /**
         * The route to check the readiness of the inference server container.
         */
        readinessRoute?: pulumi.Input<RouteArgs>;
        /**
         * The port to send the scoring requests to, within the inference server container.
         */
        scoringRoute?: pulumi.Input<RouteArgs>;
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

    /**
     * Intellectual Property details for a resource.
     */
    export interface IntellectualPropertyArgs {
        /**
         * Protection level of the Intellectual Property.
         */
        protectionLevel?: pulumi.Input<string | enums.ProtectionLevel>;
        /**
         * [Required] Publisher of the Intellectual Property. Must be the same as Registry publisher name.
         */
        publisher: pulumi.Input<string>;
    }
    /**
     * intellectualPropertyArgsProvideDefaults sets the appropriate defaults for IntellectualPropertyArgs
     */
    export function intellectualPropertyArgsProvideDefaults(val: IntellectualPropertyArgs): IntellectualPropertyArgs {
        return {
            ...val,
            protectionLevel: (val.protectionLevel) ?? "All",
        };
    }

    export interface JobResourceConfigurationArgs {
        /**
         * Extra arguments to pass to the Docker run command. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types.
         */
        dockerArgs?: pulumi.Input<string>;
        /**
         * Optional number of instances or nodes used by the compute target.
         */
        instanceCount?: pulumi.Input<number>;
        /**
         * Optional type of VM used as supported by the compute target.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Locations where the job can run.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Optional max allowed number of instances or nodes to be used by the compute target.
         * For use with elastic training, currently supported by PyTorch distribution type only.
         */
        maxInstanceCount?: pulumi.Input<number>;
        /**
         * Additional properties bag.
         */
        properties?: pulumi.Input<{[key: string]: any}>;
        /**
         * Size of the docker container's shared memory block. This should be in the format of (number)(unit) where number as to be greater than 0 and the unit can be one of b(bytes), k(kilobytes), m(megabytes), or g(gigabytes).
         */
        shmSize?: pulumi.Input<string>;
    }
    /**
     * jobResourceConfigurationArgsProvideDefaults sets the appropriate defaults for JobResourceConfigurationArgs
     */
    export function jobResourceConfigurationArgsProvideDefaults(val: JobResourceConfigurationArgs): JobResourceConfigurationArgs {
        return {
            ...val,
            instanceCount: (val.instanceCount) ?? 1,
            shmSize: (val.shmSize) ?? "2g",
        };
    }

    export interface JobScheduleActionArgs {
        /**
         *
         * Expected value is 'CreateJob'.
         */
        actionType: pulumi.Input<"CreateJob">;
        /**
         * [Required] Defines Schedule action definition details.
         */
        jobBaseProperties: pulumi.Input<AutoMLJobArgs | CommandJobArgs | LabelingJobArgs | PipelineJobArgs | SparkJobArgs | SweepJobArgs>;
    }

    /**
     * Job endpoint definition
     */
    export interface JobServiceArgs {
        /**
         * Url for endpoint.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * Endpoint type.
         */
        jobServiceType?: pulumi.Input<string>;
        /**
         * Nodes that user would like to start the service on.
         * If Nodes is not set or set to null, the service will only be started on leader node.
         */
        nodes?: pulumi.Input<AllNodesArgs>;
        /**
         * Port for endpoint set by user.
         */
        port?: pulumi.Input<number>;
        /**
         * Additional properties to set on the endpoint.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    export interface KerberosKeytabCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'KerberosKeytab'.
         */
        credentialsType: pulumi.Input<"KerberosKeytab">;
        /**
         * [Required] IP Address or DNS HostName.
         */
        kerberosKdcAddress: pulumi.Input<string>;
        /**
         * [Required] Kerberos Username
         */
        kerberosPrincipal: pulumi.Input<string>;
        /**
         * [Required] Domain over which a Kerberos authentication server has the authority to authenticate a user, host or service.
         */
        kerberosRealm: pulumi.Input<string>;
        /**
         * [Required] Keytab secrets.
         */
        secrets: pulumi.Input<KerberosKeytabSecretsArgs>;
    }

    export interface KerberosKeytabSecretsArgs {
        /**
         * Kerberos keytab secret.
         */
        kerberosKeytab?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'KerberosKeytab'.
         */
        secretsType: pulumi.Input<"KerberosKeytab">;
    }

    export interface KerberosPasswordCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'KerberosPassword'.
         */
        credentialsType: pulumi.Input<"KerberosPassword">;
        /**
         * [Required] IP Address or DNS HostName.
         */
        kerberosKdcAddress: pulumi.Input<string>;
        /**
         * [Required] Kerberos Username
         */
        kerberosPrincipal: pulumi.Input<string>;
        /**
         * [Required] Domain over which a Kerberos authentication server has the authority to authenticate a user, host or service.
         */
        kerberosRealm: pulumi.Input<string>;
        /**
         * [Required] Kerberos password secrets.
         */
        secrets: pulumi.Input<KerberosPasswordSecretsArgs>;
    }

    export interface KerberosPasswordSecretsArgs {
        /**
         * Kerberos password secret.
         */
        kerberosPassword?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'KerberosPassword'.
         */
        secretsType: pulumi.Input<"KerberosPassword">;
    }

    /**
     * Customer Key vault properties.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * Currently, we support only SystemAssigned MSI.
         * We need this when we support UserAssignedIdentities
         */
        identityClientId?: pulumi.Input<string>;
        /**
         * KeyVault key identifier to encrypt the data
         */
        keyIdentifier: pulumi.Input<string>;
        /**
         * KeyVault Arm Id that contains the data encryption key
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
     * Properties specific to a KubernetesOnlineDeployment.
     */
    export interface KubernetesOnlineDeploymentArgs {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: pulumi.Input<boolean>;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: pulumi.Input<CodeConfigurationArgs>;
        /**
         * The resource requirements for the container (cpu and memory).
         */
        containerResourceRequirements?: pulumi.Input<ContainerResourceRequirementsArgs>;
        /**
         * The mdc configuration, we disable mdc when it's null.
         */
        dataCollector?: pulumi.Input<DataCollectorArgs>;
        /**
         * Description of the endpoint deployment.
         */
        description?: pulumi.Input<string>;
        /**
         * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
         */
        egressPublicNetworkAccess?: pulumi.Input<string | enums.EgressPublicNetworkAccessType>;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'Kubernetes'.
         */
        endpointComputeType: pulumi.Input<"Kubernetes">;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Compute instance type.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Liveness probe monitors the health of the container regularly.
         */
        livenessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * The URI path to the model.
         */
        model?: pulumi.Input<string>;
        /**
         * The path to mount the model in custom container.
         */
        modelMountPath?: pulumi.Input<string>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
         */
        readinessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * Request settings for the deployment.
         */
        requestSettings?: pulumi.Input<OnlineRequestSettingsArgs>;
        /**
         * Scale settings for the deployment.
         * If it is null or not provided,
         * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
         * and to DefaultScaleSettings for ManagedOnlineDeployment.
         */
        scaleSettings?: pulumi.Input<DefaultScaleSettingsArgs | TargetUtilizationScaleSettingsArgs>;
    }
    /**
     * kubernetesOnlineDeploymentArgsProvideDefaults sets the appropriate defaults for KubernetesOnlineDeploymentArgs
     */
    export function kubernetesOnlineDeploymentArgsProvideDefaults(val: KubernetesOnlineDeploymentArgs): KubernetesOnlineDeploymentArgs {
        return {
            ...val,
            appInsightsEnabled: (val.appInsightsEnabled) ?? false,
            dataCollector: (val.dataCollector ? pulumi.output(val.dataCollector).apply(dataCollectorArgsProvideDefaults) : undefined),
            egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
            livenessProbe: (val.livenessProbe ? pulumi.output(val.livenessProbe).apply(probeSettingsArgsProvideDefaults) : undefined),
            readinessProbe: (val.readinessProbe ? pulumi.output(val.readinessProbe).apply(probeSettingsArgsProvideDefaults) : undefined),
            requestSettings: (val.requestSettings ? pulumi.output(val.requestSettings).apply(onlineRequestSettingsArgsProvideDefaults) : undefined),
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
     * Label category definition
     */
    export interface LabelCategoryArgs {
        /**
         * Dictionary of label classes in this category.
         */
        classes?: pulumi.Input<{[key: string]: pulumi.Input<LabelClassArgs>}>;
        /**
         * Display name of the label category.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Indicates whether it is allowed to select multiple classes in this category.
         */
        multiSelect?: pulumi.Input<string | enums.MultiSelect>;
    }
    /**
     * labelCategoryArgsProvideDefaults sets the appropriate defaults for LabelCategoryArgs
     */
    export function labelCategoryArgsProvideDefaults(val: LabelCategoryArgs): LabelCategoryArgs {
        return {
            ...val,
            multiSelect: (val.multiSelect) ?? "Disabled",
        };
    }

    /**
     * Label class definition
     */
    export interface LabelClassArgs {
        /**
         * Display name of the label class.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Dictionary of subclasses of the label class.
         */
        subclasses?: pulumi.Input<{[key: string]: pulumi.Input<LabelClassArgs>}>;
    }

    /**
     * Labeling data configuration definition
     */
    export interface LabelingDataConfigurationArgs {
        /**
         * Resource Id of the data asset to perform labeling.
         */
        dataId?: pulumi.Input<string>;
        /**
         * Indicates whether to enable incremental data refresh.
         */
        incrementalDataRefresh?: pulumi.Input<string | enums.IncrementalDataRefresh>;
    }
    /**
     * labelingDataConfigurationArgsProvideDefaults sets the appropriate defaults for LabelingDataConfigurationArgs
     */
    export function labelingDataConfigurationArgsProvideDefaults(val: LabelingDataConfigurationArgs): LabelingDataConfigurationArgs {
        return {
            ...val,
            incrementalDataRefresh: (val.incrementalDataRefresh) ?? "Disabled",
        };
    }

    /**
     * Labeling job definition
     */
    export interface LabelingJobArgs {
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: pulumi.Input<string>;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * Configuration of data used in the job.
         */
        dataConfiguration?: pulumi.Input<LabelingDataConfigurationArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Labeling instructions of the job.
         */
        jobInstructions?: pulumi.Input<LabelingJobInstructionsArgs>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Labeling'.
         */
        jobType: pulumi.Input<"Labeling">;
        /**
         * Label categories of the job.
         */
        labelCategories?: pulumi.Input<{[key: string]: pulumi.Input<LabelCategoryArgs>}>;
        /**
         * Media type specific properties in the job.
         */
        labelingJobMediaProperties?: pulumi.Input<LabelingJobImagePropertiesArgs | LabelingJobTextPropertiesArgs>;
        /**
         * Configuration of MLAssist feature in the job.
         */
        mlAssistConfiguration?: pulumi.Input<MLAssistConfigurationDisabledArgs | MLAssistConfigurationEnabledArgs>;
        /**
         * Notification setting for the job
         */
        notificationSetting?: pulumi.Input<NotificationSettingArgs>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<SecretConfigurationArgs>}>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * labelingJobArgsProvideDefaults sets the appropriate defaults for LabelingJobArgs
     */
    export function labelingJobArgsProvideDefaults(val: LabelingJobArgs): LabelingJobArgs {
        return {
            ...val,
            dataConfiguration: (val.dataConfiguration ? pulumi.output(val.dataConfiguration).apply(labelingDataConfigurationArgsProvideDefaults) : undefined),
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Properties of a labeling job for image data
     */
    export interface LabelingJobImagePropertiesArgs {
        /**
         * Annotation type of image labeling job.
         */
        annotationType?: pulumi.Input<string | enums.ImageAnnotationType>;
        /**
         * Media type of data asset.
         * Expected value is 'Image'.
         */
        mediaType: pulumi.Input<"Image">;
    }
    /**
     * labelingJobImagePropertiesArgsProvideDefaults sets the appropriate defaults for LabelingJobImagePropertiesArgs
     */
    export function labelingJobImagePropertiesArgsProvideDefaults(val: LabelingJobImagePropertiesArgs): LabelingJobImagePropertiesArgs {
        return {
            ...val,
            annotationType: (val.annotationType) ?? "Classification",
        };
    }

    /**
     * Instructions for labeling job
     */
    export interface LabelingJobInstructionsArgs {
        /**
         * The link to a page with detailed labeling instructions for labelers.
         */
        uri?: pulumi.Input<string>;
    }

    /**
     * Properties of a labeling job for text data
     */
    export interface LabelingJobTextPropertiesArgs {
        /**
         * Annotation type of text labeling job.
         */
        annotationType?: pulumi.Input<string | enums.TextAnnotationType>;
        /**
         * Media type of data asset.
         * Expected value is 'Text'.
         */
        mediaType: pulumi.Input<"Text">;
    }
    /**
     * labelingJobTextPropertiesArgsProvideDefaults sets the appropriate defaults for LabelingJobTextPropertiesArgs
     */
    export function labelingJobTextPropertiesArgsProvideDefaults(val: LabelingJobTextPropertiesArgs): LabelingJobTextPropertiesArgs {
        return {
            ...val,
            annotationType: (val.annotationType) ?? "Classification",
        };
    }

    export interface LakeHouseArtifactArgs {
        /**
         * [Required] OneLake artifact name
         */
        artifactName: pulumi.Input<string>;
        /**
         * Enum to determine OneLake artifact type.
         * Expected value is 'LakeHouse'.
         */
        artifactType: pulumi.Input<"LakeHouse">;
    }

    /**
     * Literal input type.
     */
    export interface LiteralJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'literal'.
         */
        jobInputType: pulumi.Input<"literal">;
        /**
         * [Required] Literal value for the input.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Labeling MLAssist configuration definition when MLAssist is disabled
     */
    export interface MLAssistConfigurationDisabledArgs {
        /**
         *
         * Expected value is 'Disabled'.
         */
        mlAssist: pulumi.Input<"Disabled">;
    }

    /**
     * Labeling MLAssist configuration definition when MLAssist is enabled
     */
    export interface MLAssistConfigurationEnabledArgs {
        /**
         * [Required] AML compute binding used in inferencing.
         */
        inferencingComputeBinding: pulumi.Input<string>;
        /**
         *
         * Expected value is 'Enabled'.
         */
        mlAssist: pulumi.Input<"Enabled">;
        /**
         * [Required] AML compute binding used in training.
         */
        trainingComputeBinding: pulumi.Input<string>;
    }

    export interface MLFlowModelJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'mlflow_model'.
         */
        jobInputType: pulumi.Input<"mlflow_model">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * mlflowModelJobInputArgsProvideDefaults sets the appropriate defaults for MLFlowModelJobInputArgs
     */
    export function mlflowModelJobInputArgsProvideDefaults(val: MLFlowModelJobInputArgs): MLFlowModelJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface MLFlowModelJobOutputArgs {
        /**
         * Output Asset Name.
         */
        assetName?: pulumi.Input<string>;
        /**
         * Output Asset Version.
         */
        assetVersion?: pulumi.Input<string>;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'mlflow_model'.
         */
        jobOutputType: pulumi.Input<"mlflow_model">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * mlflowModelJobOutputArgsProvideDefaults sets the appropriate defaults for MLFlowModelJobOutputArgs
     */
    export function mlflowModelJobOutputArgsProvideDefaults(val: MLFlowModelJobOutputArgs): MLFlowModelJobOutputArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * MLTable data definition
     */
    export interface MLTableDataArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Enum to determine the type of data.
         * Expected value is 'mltable'.
         */
        dataType: pulumi.Input<"mltable">;
        /**
         * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
         */
        dataUri: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Intellectual Property details. Used if data is an Intellectual Property.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Uris referenced in the MLTable definition (required for lineage)
         */
        referencedUris?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Stage in the data lifecycle assigned to this data asset
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * mltableDataArgsProvideDefaults sets the appropriate defaults for MLTableDataArgs
     */
    export function mltableDataArgsProvideDefaults(val: MLTableDataArgs): MLTableDataArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface MLTableJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'mltable'.
         */
        jobInputType: pulumi.Input<"mltable">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * mltableJobInputArgsProvideDefaults sets the appropriate defaults for MLTableJobInputArgs
     */
    export function mltableJobInputArgsProvideDefaults(val: MLTableJobInputArgs): MLTableJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface MLTableJobOutputArgs {
        /**
         * Output Asset Name.
         */
        assetName?: pulumi.Input<string>;
        /**
         * Output Asset Version.
         */
        assetVersion?: pulumi.Input<string>;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'mltable'.
         */
        jobOutputType: pulumi.Input<"mltable">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * mltableJobOutputArgsProvideDefaults sets the appropriate defaults for MLTableJobOutputArgs
     */
    export function mltableJobOutputArgsProvideDefaults(val: MLTableJobOutputArgs): MLTableJobOutputArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * Managed compute identity definition.
     */
    export interface ManagedComputeIdentityArgs {
        /**
         * Monitor compute identity type enum.
         * Expected value is 'ManagedIdentity'.
         */
        computeIdentityType: pulumi.Input<"ManagedIdentity">;
        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        identity?: pulumi.Input<ManagedServiceIdentityArgs>;
    }

    /**
     * Managed identity configuration.
     */
    export interface ManagedIdentityArgs {
        /**
         * Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
         */
        clientId?: pulumi.Input<string>;
        /**
         * Enum to determine identity framework.
         * Expected value is 'Managed'.
         */
        identityType: pulumi.Input<"Managed">;
        /**
         * Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
         */
        objectId?: pulumi.Input<string>;
        /**
         * Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.
         */
        resourceId?: pulumi.Input<string>;
    }

    export interface ManagedIdentityAuthTypeWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'ManagedIdentity'.
         */
        authType: pulumi.Input<"ManagedIdentity">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        credentials?: pulumi.Input<WorkspaceConnectionManagedIdentityArgs>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
    }

    /**
     * Status of the Provisioning for the managed network of a machine learning workspace.
     */
    export interface ManagedNetworkProvisionStatusArgs {
        sparkReady?: pulumi.Input<boolean>;
        /**
         * Status for the managed network of a machine learning workspace.
         */
        status?: pulumi.Input<string | enums.ManagedNetworkStatus>;
    }

    /**
     * Managed Network settings for a machine learning workspace.
     */
    export interface ManagedNetworkSettingsArgs {
        /**
         * Isolation mode for the managed network of a machine learning workspace.
         */
        isolationMode?: pulumi.Input<string | enums.IsolationMode>;
        outboundRules?: pulumi.Input<{[key: string]: pulumi.Input<FqdnOutboundRuleArgs | PrivateEndpointOutboundRuleArgs | ServiceTagOutboundRuleArgs>}>;
        /**
         * Status of the Provisioning for the managed network of a machine learning workspace.
         */
        status?: pulumi.Input<ManagedNetworkProvisionStatusArgs>;
    }

    /**
     * Properties specific to a ManagedOnlineDeployment.
     */
    export interface ManagedOnlineDeploymentArgs {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: pulumi.Input<boolean>;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: pulumi.Input<CodeConfigurationArgs>;
        /**
         * The mdc configuration, we disable mdc when it's null.
         */
        dataCollector?: pulumi.Input<DataCollectorArgs>;
        /**
         * Description of the endpoint deployment.
         */
        description?: pulumi.Input<string>;
        /**
         * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
         */
        egressPublicNetworkAccess?: pulumi.Input<string | enums.EgressPublicNetworkAccessType>;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'Managed'.
         */
        endpointComputeType: pulumi.Input<"Managed">;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Compute instance type.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Liveness probe monitors the health of the container regularly.
         */
        livenessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * The URI path to the model.
         */
        model?: pulumi.Input<string>;
        /**
         * The path to mount the model in custom container.
         */
        modelMountPath?: pulumi.Input<string>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
         */
        readinessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * Request settings for the deployment.
         */
        requestSettings?: pulumi.Input<OnlineRequestSettingsArgs>;
        /**
         * Scale settings for the deployment.
         * If it is null or not provided,
         * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
         * and to DefaultScaleSettings for ManagedOnlineDeployment.
         */
        scaleSettings?: pulumi.Input<DefaultScaleSettingsArgs | TargetUtilizationScaleSettingsArgs>;
    }
    /**
     * managedOnlineDeploymentArgsProvideDefaults sets the appropriate defaults for ManagedOnlineDeploymentArgs
     */
    export function managedOnlineDeploymentArgsProvideDefaults(val: ManagedOnlineDeploymentArgs): ManagedOnlineDeploymentArgs {
        return {
            ...val,
            appInsightsEnabled: (val.appInsightsEnabled) ?? false,
            dataCollector: (val.dataCollector ? pulumi.output(val.dataCollector).apply(dataCollectorArgsProvideDefaults) : undefined),
            egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
            livenessProbe: (val.livenessProbe ? pulumi.output(val.livenessProbe).apply(probeSettingsArgsProvideDefaults) : undefined),
            readinessProbe: (val.readinessProbe ? pulumi.output(val.readinessProbe).apply(probeSettingsArgsProvideDefaults) : undefined),
            requestSettings: (val.requestSettings ? pulumi.output(val.requestSettings).apply(onlineRequestSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Dto object representing compute resource
     */
    export interface MaterializationComputeResourceArgs {
        /**
         * Specifies the instance type
         */
        instanceType?: pulumi.Input<string>;
    }

    export interface MaterializationSettingsArgs {
        /**
         * Specifies the notification details
         */
        notification?: pulumi.Input<NotificationSettingArgs>;
        /**
         * Specifies the compute resource settings
         */
        resource?: pulumi.Input<MaterializationComputeResourceArgs>;
        /**
         * Specifies the schedule details
         */
        schedule?: pulumi.Input<RecurrenceTriggerArgs>;
        /**
         * Specifies the spark compute settings
         */
        sparkConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Specifies the stores to which materialization should happen
         */
        storeType?: pulumi.Input<string | enums.MaterializationStoreType>;
    }
    /**
     * materializationSettingsArgsProvideDefaults sets the appropriate defaults for MaterializationSettingsArgs
     */
    export function materializationSettingsArgsProvideDefaults(val: MaterializationSettingsArgs): MaterializationSettingsArgs {
        return {
            ...val,
            schedule: (val.schedule ? pulumi.output(val.schedule).apply(recurrenceTriggerArgsProvideDefaults) : undefined),
            storeType: (val.storeType) ?? "None",
        };
    }

    /**
     * Defines an early termination policy based on running averages of the primary metric of all runs
     */
    export interface MedianStoppingPolicyArgs {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: pulumi.Input<number>;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: pulumi.Input<number>;
        /**
         *
         * Expected value is 'MedianStopping'.
         */
        policyType: pulumi.Input<"MedianStopping">;
    }
    /**
     * medianStoppingPolicyArgsProvideDefaults sets the appropriate defaults for MedianStoppingPolicyArgs
     */
    export function medianStoppingPolicyArgsProvideDefaults(val: MedianStoppingPolicyArgs): MedianStoppingPolicyArgs {
        return {
            ...val,
            delayEvaluation: (val.delayEvaluation) ?? 0,
            evaluationInterval: (val.evaluationInterval) ?? 0,
        };
    }

    export interface ModelContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * modelContainerArgsProvideDefaults sets the appropriate defaults for ModelContainerArgs
     */
    export function modelContainerArgsProvideDefaults(val: ModelContainerArgs): ModelContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Model performance signal definition.
     */
    export interface ModelPerformanceSignalArgs {
        /**
         * The data segment.
         */
        dataSegment?: pulumi.Input<MonitoringDataSegmentArgs>;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThreshold: pulumi.Input<ClassificationModelPerformanceMetricThresholdArgs | RegressionModelPerformanceMetricThresholdArgs>;
        /**
         * The current notification mode for this signal.
         */
        mode?: pulumi.Input<string | enums.MonitoringNotificationMode>;
        /**
         * [Required] The data produced by the production service which drift will be calculated for.
         */
        productionData: pulumi.Input<pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>[]>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] The data to calculate drift against.
         */
        referenceData: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         *
         * Expected value is 'ModelPerformance'.
         */
        signalType: pulumi.Input<"ModelPerformance">;
    }
    /**
     * modelPerformanceSignalArgsProvideDefaults sets the appropriate defaults for ModelPerformanceSignalArgs
     */
    export function modelPerformanceSignalArgsProvideDefaults(val: ModelPerformanceSignalArgs): ModelPerformanceSignalArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    /**
     * Model asset version details.
     */
    export interface ModelVersionArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Mapping of model flavors to their properties.
         */
        flavors?: pulumi.Input<{[key: string]: pulumi.Input<FlavorDataArgs>}>;
        /**
         * Intellectual Property details. Used if model is an Intellectual Property.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Name of the training job which produced this model
         */
        jobName?: pulumi.Input<string>;
        /**
         * The storage format for this entity. Used for NCD.
         */
        modelType?: pulumi.Input<string>;
        /**
         * The URI path to the model contents.
         */
        modelUri?: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Stage in the model lifecycle assigned to this model
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * modelVersionArgsProvideDefaults sets the appropriate defaults for ModelVersionArgs
     */
    export function modelVersionArgsProvideDefaults(val: ModelVersionArgs): ModelVersionArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface MonitorDefinitionArgs {
        /**
         * The monitor's notification settings.
         */
        alertNotificationSetting?: pulumi.Input<AzMonMonitoringAlertNotificationSettingsArgs | EmailMonitoringAlertNotificationSettingsArgs>;
        /**
         * [Required] The ARM resource ID of the compute resource to run the monitoring job on.
         */
        computeConfiguration: pulumi.Input<MonitorServerlessSparkComputeArgs>;
        /**
         * The ARM resource ID of either the model or deployment targeted by this monitor.
         */
        monitoringTarget?: pulumi.Input<MonitoringTargetArgs>;
        /**
         * [Required] The signals to monitor.
         */
        signals: pulumi.Input<{[key: string]: pulumi.Input<CustomMonitoringSignalArgs | DataDriftMonitoringSignalArgs | DataQualityMonitoringSignalArgs | FeatureAttributionDriftMonitoringSignalArgs | GenerationSafetyQualityMonitoringSignalArgs | GenerationTokenStatisticsSignalArgs | ModelPerformanceSignalArgs | PredictionDriftMonitoringSignalArgs>}>;
    }

    /**
     * Monitor serverless spark compute definition.
     */
    export interface MonitorServerlessSparkComputeArgs {
        /**
         * [Required] The identity scheme leveraged to by the spark jobs running on serverless Spark.
         */
        computeIdentity: pulumi.Input<AmlTokenComputeIdentityArgs | ManagedComputeIdentityArgs>;
        /**
         * Monitor compute type enum.
         * Expected value is 'ServerlessSpark'.
         */
        computeType: pulumi.Input<"ServerlessSpark">;
        /**
         * [Required] The instance type running the Spark job.
         */
        instanceType: pulumi.Input<string>;
        /**
         * [Required] The Spark runtime version.
         */
        runtimeVersion: pulumi.Input<string>;
    }

    export interface MonitoringDataSegmentArgs {
        /**
         * The feature to segment the data on.
         */
        feature?: pulumi.Input<string>;
        /**
         * Filters for only the specified values of the given segmented feature.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Monitoring target definition.
     */
    export interface MonitoringTargetArgs {
        /**
         * The ARM resource ID of either the deployment targeted by this monitor.
         */
        deploymentId?: pulumi.Input<string>;
        /**
         * The ARM resource ID of either the model targeted by this monitor.
         */
        modelId?: pulumi.Input<string>;
        /**
         * [Required] The machine learning task type of the model.
         */
        taskType: pulumi.Input<string | enums.ModelTaskType>;
    }

    export interface MonitoringThresholdArgs {
        /**
         * The threshold value. If null, the set default is dependent on the metric type.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * Monitoring workspace connection definition.
     */
    export interface MonitoringWorkspaceConnectionArgs {
        /**
         * The properties of a workspace service connection to store as environment variables in the submitted jobs.
         * Key is workspace connection property path, name is environment variable key.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The properties of a workspace service connection to store as secrets in the submitted jobs.
         * Key is workspace connection property path, name is secret key.
         */
        secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * MPI distribution configuration.
     */
    export interface MpiArgs {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'Mpi'.
         */
        distributionType: pulumi.Input<"Mpi">;
        /**
         * Number of processes per MPI node.
         */
        processCountPerInstance?: pulumi.Input<number>;
    }

    /**
     * Fixed training parameters that won't be swept over during AutoML NLP training.
     */
    export interface NlpFixedParametersArgs {
        /**
         * Number of steps to accumulate gradients over before running a backward pass.
         */
        gradientAccumulationSteps?: pulumi.Input<number>;
        /**
         * The learning rate for the training procedure.
         */
        learningRate?: pulumi.Input<number>;
        /**
         * The type of learning rate schedule to use during the training procedure.
         */
        learningRateScheduler?: pulumi.Input<string | enums.NlpLearningRateScheduler>;
        /**
         * The name of the model to train.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Number of training epochs.
         */
        numberOfEpochs?: pulumi.Input<number>;
        /**
         * The batch size for the training procedure.
         */
        trainingBatchSize?: pulumi.Input<number>;
        /**
         * The batch size to be used during evaluation.
         */
        validationBatchSize?: pulumi.Input<number>;
        /**
         * The warmup ratio, used alongside LrSchedulerType.
         */
        warmupRatio?: pulumi.Input<number>;
        /**
         * The weight decay for the training procedure.
         */
        weightDecay?: pulumi.Input<number>;
    }
    /**
     * nlpFixedParametersArgsProvideDefaults sets the appropriate defaults for NlpFixedParametersArgs
     */
    export function nlpFixedParametersArgsProvideDefaults(val: NlpFixedParametersArgs): NlpFixedParametersArgs {
        return {
            ...val,
            learningRateScheduler: (val.learningRateScheduler) ?? "None",
        };
    }

    /**
     * Stringified search spaces for each parameter. See below examples.
     */
    export interface NlpParameterSubspaceArgs {
        /**
         * Number of steps to accumulate gradients over before running a backward pass.
         */
        gradientAccumulationSteps?: pulumi.Input<string>;
        /**
         * The learning rate for the training procedure.
         */
        learningRate?: pulumi.Input<string>;
        /**
         * The type of learning rate schedule to use during the training procedure.
         */
        learningRateScheduler?: pulumi.Input<string>;
        /**
         * The name of the model to train.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Number of training epochs.
         */
        numberOfEpochs?: pulumi.Input<string>;
        /**
         * The batch size for the training procedure.
         */
        trainingBatchSize?: pulumi.Input<string>;
        /**
         * The batch size to be used during evaluation.
         */
        validationBatchSize?: pulumi.Input<string>;
        /**
         * The warmup ratio, used alongside LrSchedulerType.
         */
        warmupRatio?: pulumi.Input<string>;
        /**
         * The weight decay for the training procedure.
         */
        weightDecay?: pulumi.Input<string>;
    }

    /**
     * Model sweeping and hyperparameter tuning related settings.
     */
    export interface NlpSweepSettingsArgs {
        /**
         * Type of early termination policy for the sweeping job.
         */
        earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs>;
        /**
         * [Required] Type of sampling algorithm.
         */
        samplingAlgorithm: pulumi.Input<string | enums.SamplingAlgorithmType>;
    }

    export interface NlpVerticalFeaturizationSettingsArgs {
        /**
         * Dataset language, useful for the text data.
         */
        datasetLanguage?: pulumi.Input<string>;
    }

    /**
     * Job execution constraints.
     */
    export interface NlpVerticalLimitSettingsArgs {
        /**
         * Maximum Concurrent AutoML iterations.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Maximum nodes to use for the experiment.
         */
        maxNodes?: pulumi.Input<number>;
        /**
         * Number of AutoML iterations.
         */
        maxTrials?: pulumi.Input<number>;
        /**
         * AutoML job timeout.
         */
        timeout?: pulumi.Input<string>;
        /**
         * Timeout for individual HD trials.
         */
        trialTimeout?: pulumi.Input<string>;
    }
    /**
     * nlpVerticalLimitSettingsArgsProvideDefaults sets the appropriate defaults for NlpVerticalLimitSettingsArgs
     */
    export function nlpVerticalLimitSettingsArgsProvideDefaults(val: NlpVerticalLimitSettingsArgs): NlpVerticalLimitSettingsArgs {
        return {
            ...val,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxNodes: (val.maxNodes) ?? 1,
            maxTrials: (val.maxTrials) ?? 1,
            timeout: (val.timeout) ?? "P7D",
        };
    }

    export interface NoneAuthTypeWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'None'.
         */
        authType: pulumi.Input<"None">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
    }

    /**
     * Empty/none datastore credentials.
     */
    export interface NoneDatastoreCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'None'.
         */
        credentialsType: pulumi.Input<"None">;
    }

    /**
     * Configuration for notification.
     */
    export interface NotificationSettingArgs {
        /**
         * Send email notification to user on specified notification type
         */
        emailOn?: pulumi.Input<pulumi.Input<string | enums.EmailNotificationEnableType>[]>;
        /**
         * This is the email recipient list which has a limitation of 499 characters in total concat with comma separator
         */
        emails?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Send webhook callback to a service. Key is a user-provided name for the webhook.
         */
        webhooks?: pulumi.Input<{[key: string]: pulumi.Input<AzureDevOpsWebhookArgs>}>;
    }

    export interface NumericalDataDriftMetricThresholdArgs {
        /**
         *
         * Expected value is 'Numerical'.
         */
        dataType: pulumi.Input<"Numerical">;
        /**
         * [Required] The numerical data drift metric to calculate.
         */
        metric: pulumi.Input<string | enums.NumericalDataDriftMetric>;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    export interface NumericalDataQualityMetricThresholdArgs {
        /**
         *
         * Expected value is 'Numerical'.
         */
        dataType: pulumi.Input<"Numerical">;
        /**
         * [Required] The numerical data quality metric to calculate.
         */
        metric: pulumi.Input<string | enums.NumericalDataQualityMetric>;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    export interface NumericalPredictionDriftMetricThresholdArgs {
        /**
         *
         * Expected value is 'Numerical'.
         */
        dataType: pulumi.Input<"Numerical">;
        /**
         * [Required] The numerical prediction drift metric to calculate.
         */
        metric: pulumi.Input<string | enums.NumericalPredictionDriftMetric>;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    /**
     * Optimization objective.
     */
    export interface ObjectiveArgs {
        /**
         * [Required] Defines supported metric goals for hyperparameter tuning
         */
        goal: pulumi.Input<string | enums.Goal>;
        /**
         * [Required] Name of the metric to optimize.
         */
        primaryMetric: pulumi.Input<string>;
    }

    /**
     * OneLake (Trident) datastore configuration.
     */
    export interface OneLakeDatastoreArgs {
        /**
         * [Required] OneLake artifact backing the datastore.
         */
        artifact: pulumi.Input<LakeHouseArtifactArgs>;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'OneLake'.
         */
        datastoreType: pulumi.Input<"OneLake">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * OneLake endpoint to use for the datastore.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * [Required] OneLake workspace name.
         */
        oneLakeWorkspaceName: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * oneLakeDatastoreArgsProvideDefaults sets the appropriate defaults for OneLakeDatastoreArgs
     */
    export function oneLakeDatastoreArgsProvideDefaults(val: OneLakeDatastoreArgs): OneLakeDatastoreArgs {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Online endpoint configuration
     */
    export interface OnlineEndpointArgs {
        /**
         * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
         */
        authMode: pulumi.Input<string | enums.EndpointAuthMode>;
        /**
         * ARM resource ID of the compute if it exists.
         * optional
         */
        compute?: pulumi.Input<string>;
        /**
         * Description of the inference endpoint.
         */
        description?: pulumi.Input<string>;
        /**
         * EndpointAuthKeys to set initially on an Endpoint.
         * This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
         */
        keys?: pulumi.Input<EndpointAuthKeysArgs>;
        /**
         * Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50.
         */
        mirrorTraffic?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Set to "Enabled" for endpoints that should allow public access when Private Link is enabled.
         */
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessType>;
        /**
         * Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100.
         */
        traffic?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
    }
    /**
     * onlineEndpointArgsProvideDefaults sets the appropriate defaults for OnlineEndpointArgs
     */
    export function onlineEndpointArgsProvideDefaults(val: OnlineEndpointArgs): OnlineEndpointArgs {
        return {
            ...val,
            publicNetworkAccess: (val.publicNetworkAccess) ?? "Enabled",
        };
    }

    /**
     * Online deployment scoring requests configuration.
     */
    export interface OnlineRequestSettingsArgs {
        /**
         * The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
         */
        maxConcurrentRequestsPerInstance?: pulumi.Input<number>;
        /**
         * The maximum amount of time a request will stay in the queue in ISO 8601 format.
         * Defaults to 500ms.
         */
        maxQueueWait?: pulumi.Input<string>;
        /**
         * The scoring timeout in ISO 8601 format.
         * Defaults to 5000ms.
         */
        requestTimeout?: pulumi.Input<string>;
    }
    /**
     * onlineRequestSettingsArgsProvideDefaults sets the appropriate defaults for OnlineRequestSettingsArgs
     */
    export function onlineRequestSettingsArgsProvideDefaults(val: OnlineRequestSettingsArgs): OnlineRequestSettingsArgs {
        return {
            ...val,
            maxConcurrentRequestsPerInstance: (val.maxConcurrentRequestsPerInstance) ?? 1,
            maxQueueWait: (val.maxQueueWait) ?? "PT0.5S",
            requestTimeout: (val.requestTimeout) ?? "PT5S",
        };
    }

    /**
     * Reference to an asset via its path in a job output.
     */
    export interface OutputPathAssetReferenceArgs {
        /**
         * ARM resource ID of the job.
         */
        jobId?: pulumi.Input<string>;
        /**
         * The path of the file/directory in the job output.
         */
        path?: pulumi.Input<string>;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'OutputPath'.
         */
        referenceType: pulumi.Input<"OutputPath">;
    }

    export interface PATAuthTypeWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'PAT'.
         */
        authType: pulumi.Input<"PAT">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        credentials?: pulumi.Input<WorkspaceConnectionPersonalAccessTokenArgs>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
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
     * Pipeline Job definition: defines generic to MFE attributes.
     */
    export interface PipelineJobArgs {
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: pulumi.Input<string>;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Inputs for the pipeline job.
         */
        inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>}>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Pipeline'.
         */
        jobType: pulumi.Input<"Pipeline">;
        /**
         * Jobs construct the Pipeline Job.
         */
        jobs?: pulumi.Input<{[key: string]: any}>;
        /**
         * Notification setting for the job
         */
        notificationSetting?: pulumi.Input<NotificationSettingArgs>;
        /**
         * Outputs for the pipeline job
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<SecretConfigurationArgs>}>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Pipeline settings, for things like ContinueRunOnStepFailure etc.
         */
        settings?: any;
        /**
         * ARM resource ID of source job.
         */
        sourceJobId?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * pipelineJobArgsProvideDefaults sets the appropriate defaults for PipelineJobArgs
     */
    export function pipelineJobArgsProvideDefaults(val: PipelineJobArgs): PipelineJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface PredictionDriftMonitoringSignalArgs {
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThresholds: pulumi.Input<pulumi.Input<CategoricalPredictionDriftMetricThresholdArgs | NumericalPredictionDriftMetricThresholdArgs>[]>;
        /**
         * The current notification mode for this signal.
         */
        mode?: pulumi.Input<string | enums.MonitoringNotificationMode>;
        /**
         * [Required] The type of the model monitored.
         */
        modelType: pulumi.Input<string | enums.MonitoringModelType>;
        /**
         * [Required] The data which drift will be calculated for.
         */
        productionData: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] The data to calculate drift against.
         */
        referenceData: pulumi.Input<FixedInputDataArgs | StaticInputDataArgs | TrailingInputDataArgs>;
        /**
         *
         * Expected value is 'PredictionDrift'.
         */
        signalType: pulumi.Input<"PredictionDrift">;
    }
    /**
     * predictionDriftMonitoringSignalArgsProvideDefaults sets the appropriate defaults for PredictionDriftMonitoringSignalArgs
     */
    export function predictionDriftMonitoringSignalArgsProvideDefaults(val: PredictionDriftMonitoringSignalArgs): PredictionDriftMonitoringSignalArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    /**
     * Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface PrivateEndpointDestinationArgs {
        serviceResourceId?: pulumi.Input<string>;
        sparkEnabled?: pulumi.Input<boolean>;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         */
        sparkStatus?: pulumi.Input<string | enums.RuleStatus>;
        subresourceTarget?: pulumi.Input<string>;
    }

    /**
     * Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface PrivateEndpointOutboundRuleArgs {
        /**
         * Category of a managed network Outbound Rule of a machine learning workspace.
         */
        category?: pulumi.Input<string | enums.RuleCategory>;
        /**
         * Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
         */
        destination?: pulumi.Input<PrivateEndpointDestinationArgs>;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         */
        status?: pulumi.Input<string | enums.RuleStatus>;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         * Expected value is 'PrivateEndpoint'.
         */
        type: pulumi.Input<"PrivateEndpoint">;
    }

    /**
     * The PE network resource that is linked to this PE connection.
     */
    export interface PrivateEndpointResourceArgs {
        /**
         * The subnetId that the private endpoint is connected to.
         */
        subnetArmId?: pulumi.Input<string>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * Some RP chose "None". Other RPs use this for region expansion.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * User-defined message that, per NRP doc, may be used for approval-related message.
         */
        description?: pulumi.Input<string>;
        /**
         * Connection status of the service consumer with the service provider
         * Possible state transitions
         * Pending -> Approved (Service provider approves the connection request)
         * Pending -> Rejected (Service provider rejects the connection request)
         * Pending -> Disconnected (Service provider deletes the connection)
         * Approved -> Rejected (Service provider rejects the approved connection)
         * Approved -> Disconnected (Service provider deletes the connection)
         * Rejected -> Pending (Service consumer re-initiates the connection request that was rejected)
         * Rejected -> Disconnected (Service provider deletes the connection)
         */
        status?: pulumi.Input<string | enums.EndpointServiceConnectionStatus>;
    }

    /**
     * Deployment container liveness/readiness probe configuration.
     */
    export interface ProbeSettingsArgs {
        /**
         * The number of failures to allow before returning an unhealthy status.
         */
        failureThreshold?: pulumi.Input<number>;
        /**
         * The delay before the first probe in ISO 8601 format.
         */
        initialDelay?: pulumi.Input<string>;
        /**
         * The length of time between probes in ISO 8601 format.
         */
        period?: pulumi.Input<string>;
        /**
         * The number of successful probes before returning a healthy status.
         */
        successThreshold?: pulumi.Input<number>;
        /**
         * The probe timeout in ISO 8601 format.
         */
        timeout?: pulumi.Input<string>;
    }
    /**
     * probeSettingsArgsProvideDefaults sets the appropriate defaults for ProbeSettingsArgs
     */
    export function probeSettingsArgsProvideDefaults(val: ProbeSettingsArgs): ProbeSettingsArgs {
        return {
            ...val,
            failureThreshold: (val.failureThreshold) ?? 30,
            period: (val.period) ?? "PT10S",
            successThreshold: (val.successThreshold) ?? 1,
            timeout: (val.timeout) ?? "PT2S",
        };
    }

    /**
     * PyTorch distribution configuration.
     */
    export interface PyTorchArgs {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'PyTorch'.
         */
        distributionType: pulumi.Input<"PyTorch">;
        /**
         * Number of processes per node.
         */
        processCountPerInstance?: pulumi.Input<number>;
    }

    export interface QueueSettingsArgs {
        /**
         * Controls the compute job tier
         */
        jobTier?: pulumi.Input<string | enums.JobTier>;
        /**
         * Controls the priority of the job on a compute.
         */
        priority?: pulumi.Input<number>;
    }
    /**
     * queueSettingsArgsProvideDefaults sets the appropriate defaults for QueueSettingsArgs
     */
    export function queueSettingsArgsProvideDefaults(val: QueueSettingsArgs): QueueSettingsArgs {
        return {
            ...val,
            jobTier: (val.jobTier) ?? "Null",
        };
    }

    /**
     * Defines a Sampling Algorithm that generates values randomly
     */
    export interface RandomSamplingAlgorithmArgs {
        /**
         * An optional positive number or e in string format to be used as base for log based random sampling
         */
        logbase?: pulumi.Input<string>;
        /**
         * The specific type of random algorithm
         */
        rule?: pulumi.Input<string | enums.RandomSamplingAlgorithmRule>;
        /**
         *
         * Expected value is 'Random'.
         */
        samplingAlgorithmType: pulumi.Input<"Random">;
        /**
         * An optional integer to use as the seed for random number generation
         */
        seed?: pulumi.Input<number>;
    }
    /**
     * randomSamplingAlgorithmArgsProvideDefaults sets the appropriate defaults for RandomSamplingAlgorithmArgs
     */
    export function randomSamplingAlgorithmArgsProvideDefaults(val: RandomSamplingAlgorithmArgs): RandomSamplingAlgorithmArgs {
        return {
            ...val,
            rule: (val.rule) ?? "Random",
        };
    }

    /**
     * Ray distribution configuration.
     */
    export interface RayArgs {
        /**
         * The address of Ray head node.
         */
        address?: pulumi.Input<string>;
        /**
         * The port to bind the dashboard server to.
         */
        dashboardPort?: pulumi.Input<number>;
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'Ray'.
         */
        distributionType: pulumi.Input<"Ray">;
        /**
         * Additional arguments passed to ray start in head node.
         */
        headNodeAdditionalArgs?: pulumi.Input<string>;
        /**
         * Provide this argument to start the Ray dashboard GUI.
         */
        includeDashboard?: pulumi.Input<boolean>;
        /**
         * The port of the head ray process.
         */
        port?: pulumi.Input<number>;
        /**
         * Additional arguments passed to ray start in worker node.
         */
        workerNodeAdditionalArgs?: pulumi.Input<string>;
    }

    /**
     * The workflow trigger recurrence for ComputeStartStop schedule type.
     */
    export interface RecurrenceArgs {
        /**
         * [Required] The frequency to trigger schedule.
         */
        frequency?: pulumi.Input<string | enums.RecurrenceFrequency>;
        /**
         * [Required] Specifies schedule interval in conjunction with frequency
         */
        interval?: pulumi.Input<number>;
        /**
         * [Required] The recurrence schedule.
         */
        schedule?: pulumi.Input<RecurrenceScheduleArgs>;
        /**
         * The start time in yyyy-MM-ddTHH:mm:ss format.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
         */
        timeZone?: pulumi.Input<string>;
    }
    /**
     * recurrenceArgsProvideDefaults sets the appropriate defaults for RecurrenceArgs
     */
    export function recurrenceArgsProvideDefaults(val: RecurrenceArgs): RecurrenceArgs {
        return {
            ...val,
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    export interface RecurrenceScheduleArgs {
        /**
         * [Required] List of hours for the schedule.
         */
        hours: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * [Required] List of minutes for the schedule.
         */
        minutes: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * List of month days for the schedule
         */
        monthDays?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * List of days for the schedule.
         */
        weekDays?: pulumi.Input<pulumi.Input<string | enums.WeekDay>[]>;
    }

    export interface RecurrenceTriggerArgs {
        /**
         * Specifies end time of schedule in ISO 8601, but without a UTC offset. Refer https://en.wikipedia.org/wiki/ISO_8601.
         * Recommented format would be "2022-06-01T00:00:01"
         * If not present, the schedule will run indefinitely
         */
        endTime?: pulumi.Input<string>;
        /**
         * [Required] The frequency to trigger schedule.
         */
        frequency: pulumi.Input<string | enums.RecurrenceFrequency>;
        /**
         * [Required] Specifies schedule interval in conjunction with frequency
         */
        interval: pulumi.Input<number>;
        /**
         * The recurrence schedule.
         */
        schedule?: pulumi.Input<RecurrenceScheduleArgs>;
        /**
         * Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
         */
        timeZone?: pulumi.Input<string>;
        /**
         *
         * Expected value is 'Recurrence'.
         */
        triggerType: pulumi.Input<"Recurrence">;
    }
    /**
     * recurrenceTriggerArgsProvideDefaults sets the appropriate defaults for RecurrenceTriggerArgs
     */
    export function recurrenceTriggerArgsProvideDefaults(val: RecurrenceTriggerArgs): RecurrenceTriggerArgs {
        return {
            ...val,
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    /**
     * Details of the Registry
     */
    export interface RegistryArgs {
        /**
         * Discovery URL for the Registry
         */
        discoveryUrl?: pulumi.Input<string>;
        /**
         * IntellectualPropertyPublisher for the registry
         */
        intellectualPropertyPublisher?: pulumi.Input<string>;
        /**
         * ResourceId of the managed RG if the registry has system created resources
         */
        managedResourceGroup?: pulumi.Input<ArmResourceIdArgs>;
        /**
         * MLFlow Registry URI for the Registry
         */
        mlFlowRegistryUri?: pulumi.Input<string>;
        /**
         * Private endpoint connections info used for pending connections in private link portal
         */
        privateEndpointConnections?: pulumi.Input<pulumi.Input<RegistryPrivateEndpointConnectionArgs>[]>;
        /**
         * Is the Registry accessible from the internet?
         * Possible values: "Enabled" or "Disabled"
         */
        publicNetworkAccess?: pulumi.Input<string>;
        /**
         * Details of each region the registry is in
         */
        regionDetails?: pulumi.Input<pulumi.Input<RegistryRegionArmDetailsArgs>[]>;
    }

    /**
     * Private endpoint connection definition.
     */
    export interface RegistryPrivateEndpointConnectionArgs {
        /**
         * This is the private endpoint connection name created on SRP
         * Full resource id: /subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.MachineLearningServices/{resourceType}/{resourceName}/privateEndpointConnections/{peConnectionName}
         */
        id?: pulumi.Input<string>;
        /**
         * Same as workspace location.
         */
        location?: pulumi.Input<string>;
        /**
         * Properties of the Private Endpoint Connection
         */
        properties?: pulumi.Input<RegistryPrivateEndpointConnectionPropertiesArgs>;
    }

    /**
     * Properties of the Private Endpoint Connection
     */
    export interface RegistryPrivateEndpointConnectionPropertiesArgs {
        /**
         * The group ids
         */
        groupIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The PE network resource that is linked to this PE connection.
         */
        privateEndpoint?: pulumi.Input<PrivateEndpointResourceArgs>;
        /**
         * The connection state.
         */
        privateLinkServiceConnectionState?: pulumi.Input<RegistryPrivateLinkServiceConnectionStateArgs>;
        /**
         * One of null, "Succeeded", "Provisioning", "Failed". While not approved, it's null.
         */
        provisioningState?: pulumi.Input<string>;
    }

    /**
     * The connection state.
     */
    export interface RegistryPrivateLinkServiceConnectionStateArgs {
        /**
         * Some RP chose "None". Other RPs use this for region expansion.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * User-defined message that, per NRP doc, may be used for approval-related message.
         */
        description?: pulumi.Input<string>;
        /**
         * Connection status of the service consumer with the service provider
         */
        status?: pulumi.Input<string | enums.EndpointServiceConnectionStatus>;
    }

    /**
     * Details for each region the registry is in
     */
    export interface RegistryRegionArmDetailsArgs {
        /**
         * List of ACR accounts
         */
        acrDetails?: pulumi.Input<pulumi.Input<AcrDetailsArgs>[]>;
        /**
         * The location where the registry exists
         */
        location?: pulumi.Input<string>;
        /**
         * List of storage accounts
         */
        storageAccountDetails?: pulumi.Input<pulumi.Input<StorageAccountDetailsArgs>[]>;
    }

    /**
     * Regression task in AutoML Table vertical.
     */
    export interface RegressionArgs {
        /**
         * Columns to use for CVSplit data.
         */
        cvSplitColumnNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs>;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: pulumi.Input<TableFixedParametersArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Number of cross validation folds to be applied on training dataset
         * when validation dataset is not provided.
         */
        nCrossValidations?: pulumi.Input<AutoNCrossValidationsArgs | CustomNCrossValidationsArgs>;
        /**
         * Primary metric for regression task.
         */
        primaryMetric?: pulumi.Input<string | enums.RegressionPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<TableParameterSubspaceArgs>[]>;
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: pulumi.Input<TableSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Regression'.
         */
        taskType: pulumi.Input<"Regression">;
        /**
         * Test data input.
         */
        testData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of test dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        testDataSize?: pulumi.Input<number>;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: pulumi.Input<RegressionTrainingSettingsArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
        /**
         * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
         */
        weightColumnName?: pulumi.Input<string>;
    }
    /**
     * regressionArgsProvideDefaults sets the appropriate defaults for RegressionArgs
     */
    export function regressionArgsProvideDefaults(val: RegressionArgs): RegressionArgs {
        return {
            ...val,
            featurizationSettings: (val.featurizationSettings ? pulumi.output(val.featurizationSettings).apply(tableVerticalFeaturizationSettingsArgsProvideDefaults) : undefined),
            fixedParameters: (val.fixedParameters ? pulumi.output(val.fixedParameters).apply(tableFixedParametersArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(tableVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
            testData: (val.testData ? pulumi.output(val.testData).apply(mltableJobInputArgsProvideDefaults) : undefined),
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            trainingSettings: (val.trainingSettings ? pulumi.output(val.trainingSettings).apply(regressionTrainingSettingsArgsProvideDefaults) : undefined),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    export interface RegressionModelPerformanceMetricThresholdArgs {
        /**
         * [Required] The regression model performance metric to calculate.
         */
        metric: pulumi.Input<string | enums.RegressionModelPerformanceMetric>;
        /**
         *
         * Expected value is 'Regression'.
         */
        modelType: pulumi.Input<"Regression">;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: pulumi.Input<MonitoringThresholdArgs>;
    }

    /**
     * Regression Training related configuration.
     */
    export interface RegressionTrainingSettingsArgs {
        /**
         * Allowed models for regression task.
         */
        allowedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.RegressionModels>[]>;
        /**
         * Blocked models for regression task.
         */
        blockedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.RegressionModels>[]>;
        /**
         * Enable recommendation of DNN models.
         */
        enableDnnTraining?: pulumi.Input<boolean>;
        /**
         * Flag to turn on explainability on best model.
         */
        enableModelExplainability?: pulumi.Input<boolean>;
        /**
         * Flag for enabling onnx compatible models.
         */
        enableOnnxCompatibleModels?: pulumi.Input<boolean>;
        /**
         * Enable stack ensemble run.
         */
        enableStackEnsemble?: pulumi.Input<boolean>;
        /**
         * Enable voting ensemble run.
         */
        enableVoteEnsemble?: pulumi.Input<boolean>;
        /**
         * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
         * Configure this parameter with a higher value than 300 secs, if more time is needed.
         */
        ensembleModelDownloadTimeout?: pulumi.Input<string>;
        /**
         * Stack ensemble settings for stack ensemble run.
         */
        stackEnsembleSettings?: pulumi.Input<StackEnsembleSettingsArgs>;
        /**
         * TrainingMode mode - Setting to 'auto' is same as setting it to 'non-distributed' for now, however in the future may result in mixed mode or heuristics based mode selection. Default is 'auto'.
         * If 'Distributed' then only distributed featurization is used and distributed algorithms are chosen.
         * If 'NonDistributed' then only non distributed algorithms are chosen.
         */
        trainingMode?: pulumi.Input<string | enums.TrainingMode>;
    }
    /**
     * regressionTrainingSettingsArgsProvideDefaults sets the appropriate defaults for RegressionTrainingSettingsArgs
     */
    export function regressionTrainingSettingsArgsProvideDefaults(val: RegressionTrainingSettingsArgs): RegressionTrainingSettingsArgs {
        return {
            ...val,
            enableDnnTraining: (val.enableDnnTraining) ?? false,
            enableModelExplainability: (val.enableModelExplainability) ?? true,
            enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
            enableStackEnsemble: (val.enableStackEnsemble) ?? true,
            enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
            ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
            stackEnsembleSettings: (val.stackEnsembleSettings ? pulumi.output(val.stackEnsembleSettings).apply(stackEnsembleSettingsArgsProvideDefaults) : undefined),
            trainingMode: (val.trainingMode) ?? "Auto",
        };
    }

    export interface RequestLoggingArgs {
        /**
         * For payload logging, we only collect payload by default. If customers also want to collect the specified headers, they can set them in captureHeaders so that backend will collect those headers along with payload.
         */
        captureHeaders?: pulumi.Input<pulumi.Input<string>[]>;
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

    export interface RouteArgs {
        /**
         * [Required] The path for the route.
         */
        path: pulumi.Input<string>;
        /**
         * [Required] The port for the route.
         */
        port: pulumi.Input<number>;
    }

    export interface SASAuthTypeWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'SAS'.
         */
        authType: pulumi.Input<"SAS">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        credentials?: pulumi.Input<WorkspaceConnectionSharedAccessSignatureArgs>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
    }

    /**
     * SAS datastore credentials configuration.
     */
    export interface SasDatastoreCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'Sas'.
         */
        credentialsType: pulumi.Input<"Sas">;
        /**
         * [Required] Storage container secrets.
         */
        secrets: pulumi.Input<SasDatastoreSecretsArgs>;
    }

    /**
     * Datastore SAS secrets.
     */
    export interface SasDatastoreSecretsArgs {
        /**
         * Storage container SAS token.
         */
        sasToken?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'Sas'.
         */
        secretsType: pulumi.Input<"Sas">;
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
     * Base definition of a schedule
     */
    export interface ScheduleArgs {
        /**
         * [Required] Specifies the action of the schedule
         */
        action: pulumi.Input<CreateMonitorActionArgs | EndpointScheduleActionArgs | ImportDataActionArgs | JobScheduleActionArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of schedule.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Is the schedule enabled?
         */
        isEnabled?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] Specifies the trigger details
         */
        trigger: pulumi.Input<CronTriggerArgs | RecurrenceTriggerArgs>;
    }
    /**
     * scheduleArgsProvideDefaults sets the appropriate defaults for ScheduleArgs
     */
    export function scheduleArgsProvideDefaults(val: ScheduleArgs): ScheduleArgs {
        return {
            ...val,
            isEnabled: (val.isEnabled) ?? true,
        };
    }

    export interface ScheduleBaseArgs {
        /**
         * A system assigned id for the schedule.
         */
        id?: pulumi.Input<string>;
        /**
         * The current deployment state of schedule.
         */
        provisioningStatus?: pulumi.Input<string | enums.ScheduleProvisioningState>;
        /**
         * Is the schedule enabled or disabled?
         */
        status?: pulumi.Input<string | enums.ScheduleStatus>;
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
     * Secret Configuration definition.
     */
    export interface SecretConfigurationArgs {
        /**
         * Secret Uri.
         * Sample Uri : https://myvault.vault.azure.net/secrets/mysecretname/secretversion
         */
        uri?: pulumi.Input<string>;
        /**
         * Name of secret in workspace key vault.
         */
        workspaceSecretName?: pulumi.Input<string>;
    }

    export interface ServiceManagedResourcesSettingsArgs {
        cosmosDb?: pulumi.Input<CosmosDbSettingsArgs>;
    }

    export interface ServicePrincipalAuthTypeWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'ServicePrincipal'.
         */
        authType: pulumi.Input<"ServicePrincipal">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        credentials?: pulumi.Input<WorkspaceConnectionServicePrincipalArgs>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
    }

    /**
     * Service Principal datastore credentials configuration.
     */
    export interface ServicePrincipalDatastoreCredentialsArgs {
        /**
         * Authority URL used for authentication.
         */
        authorityUrl?: pulumi.Input<string>;
        /**
         * [Required] Service principal client ID.
         */
        clientId: pulumi.Input<string>;
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'ServicePrincipal'.
         */
        credentialsType: pulumi.Input<"ServicePrincipal">;
        /**
         * Resource the service principal has access to.
         */
        resourceUrl?: pulumi.Input<string>;
        /**
         * [Required] Service principal secrets.
         */
        secrets: pulumi.Input<ServicePrincipalDatastoreSecretsArgs>;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: pulumi.Input<string>;
    }

    /**
     * Datastore Service Principal secrets.
     */
    export interface ServicePrincipalDatastoreSecretsArgs {
        /**
         * Service principal secret.
         */
        clientSecret?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'ServicePrincipal'.
         */
        secretsType: pulumi.Input<"ServicePrincipal">;
    }

    /**
     * Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface ServiceTagDestinationArgs {
        /**
         * The action enum for networking rule.
         */
        action?: pulumi.Input<string | enums.RuleAction>;
        portRanges?: pulumi.Input<string>;
        protocol?: pulumi.Input<string>;
        serviceTag?: pulumi.Input<string>;
    }

    /**
     * Service Tag Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface ServiceTagOutboundRuleArgs {
        /**
         * Category of a managed network Outbound Rule of a machine learning workspace.
         */
        category?: pulumi.Input<string | enums.RuleCategory>;
        /**
         * Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
         */
        destination?: pulumi.Input<ServiceTagDestinationArgs>;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         */
        status?: pulumi.Input<string | enums.RuleStatus>;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         * Expected value is 'ServiceTag'.
         */
        type: pulumi.Input<"ServiceTag">;
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
         * group id of the private link
         */
        groupId?: pulumi.Input<string>;
        /**
         * Unique name of the private link
         */
        name?: pulumi.Input<string>;
        /**
         * the resource id that private link links to
         */
        privateLinkResourceId?: pulumi.Input<string>;
        /**
         * Request message
         */
        requestMessage?: pulumi.Input<string>;
        /**
         * Connection status of the service consumer with the service provider
         * Possible state transitions
         * Pending -> Approved (Service provider approves the connection request)
         * Pending -> Rejected (Service provider rejects the connection request)
         * Pending -> Disconnected (Service provider deletes the connection)
         * Approved -> Rejected (Service provider rejects the approved connection)
         * Approved -> Disconnected (Service provider deletes the connection)
         * Rejected -> Pending (Service consumer re-initiates the connection request that was rejected)
         * Rejected -> Disconnected (Service provider deletes the connection)
         */
        status?: pulumi.Input<string | enums.EndpointServiceConnectionStatus>;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuArgs {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: pulumi.Input<number>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: pulumi.Input<string>;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: pulumi.Input<string>;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: pulumi.Input<enums.SkuTier>;
    }

    /**
     * Spark job definition.
     */
    export interface SparkJobArgs {
        /**
         * Archive files used in the job.
         */
        archives?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Arguments for the job.
         */
        args?: pulumi.Input<string>;
        /**
         * [Required] ARM resource ID of the code asset.
         */
        codeId: pulumi.Input<string>;
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: pulumi.Input<string>;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * Spark configured properties.
         */
        conf?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * [Required] The entry to execute on startup of the job.
         */
        entry: pulumi.Input<SparkJobPythonEntryArgs | SparkJobScalaEntryArgs>;
        /**
         * The ARM resource ID of the Environment specification for the job.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Files used in the job.
         */
        files?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>}>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Jar files used in the job.
         */
        jars?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Spark'.
         */
        jobType: pulumi.Input<"Spark">;
        /**
         * Notification setting for the job
         */
        notificationSetting?: pulumi.Input<NotificationSettingArgs>;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Python files used in the job.
         */
        pyFiles?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Queue settings for the job
         */
        queueSettings?: pulumi.Input<QueueSettingsArgs>;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: pulumi.Input<SparkResourceConfigurationArgs>;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<SecretConfigurationArgs>}>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * sparkJobArgsProvideDefaults sets the appropriate defaults for SparkJobArgs
     */
    export function sparkJobArgsProvideDefaults(val: SparkJobArgs): SparkJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            queueSettings: (val.queueSettings ? pulumi.output(val.queueSettings).apply(queueSettingsArgsProvideDefaults) : undefined),
            resources: (val.resources ? pulumi.output(val.resources).apply(sparkResourceConfigurationArgsProvideDefaults) : undefined),
        };
    }

    export interface SparkJobPythonEntryArgs {
        /**
         * [Required] Relative python file path for job entry point.
         */
        file: pulumi.Input<string>;
        /**
         *
         * Expected value is 'SparkJobPythonEntry'.
         */
        sparkJobEntryType: pulumi.Input<"SparkJobPythonEntry">;
    }

    export interface SparkJobScalaEntryArgs {
        /**
         * [Required] Scala class name used as entry point.
         */
        className: pulumi.Input<string>;
        /**
         *
         * Expected value is 'SparkJobScalaEntry'.
         */
        sparkJobEntryType: pulumi.Input<"SparkJobScalaEntry">;
    }

    export interface SparkResourceConfigurationArgs {
        /**
         * Optional type of VM used as supported by the compute target.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Version of spark runtime used for the job.
         */
        runtimeVersion?: pulumi.Input<string>;
    }
    /**
     * sparkResourceConfigurationArgsProvideDefaults sets the appropriate defaults for SparkResourceConfigurationArgs
     */
    export function sparkResourceConfigurationArgsProvideDefaults(val: SparkResourceConfigurationArgs): SparkResourceConfigurationArgs {
        return {
            ...val,
            runtimeVersion: (val.runtimeVersion) ?? "3.1",
        };
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
        status?: pulumi.Input<string | enums.SslConfigStatus>;
    }

    /**
     * Advances setting to customize StackEnsemble run.
     */
    export interface StackEnsembleSettingsArgs {
        /**
         * Optional parameters to pass to the initializer of the meta-learner.
         */
        stackMetaLearnerKWargs?: any;
        /**
         * Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2.
         */
        stackMetaLearnerTrainPercentage?: pulumi.Input<number>;
        /**
         * The meta-learner is a model trained on the output of the individual heterogeneous models.
         */
        stackMetaLearnerType?: pulumi.Input<string | enums.StackMetaLearnerType>;
    }
    /**
     * stackEnsembleSettingsArgsProvideDefaults sets the appropriate defaults for StackEnsembleSettingsArgs
     */
    export function stackEnsembleSettingsArgsProvideDefaults(val: StackEnsembleSettingsArgs): StackEnsembleSettingsArgs {
        return {
            ...val,
            stackMetaLearnerTrainPercentage: (val.stackMetaLearnerTrainPercentage) ?? 0.2,
            stackMetaLearnerType: (val.stackMetaLearnerType) ?? "None",
        };
    }

    /**
     * Static input data definition.
     */
    export interface StaticInputDataArgs {
        /**
         * Mapping of column names to special uses.
         */
        columns?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The context metadata of the data source.
         */
        dataContext?: pulumi.Input<string>;
        /**
         * Monitoring input data type enum.
         * Expected value is 'Static'.
         */
        inputDataType: pulumi.Input<"Static">;
        /**
         * [Required] Specifies the type of job.
         */
        jobInputType: pulumi.Input<string | enums.JobInputType>;
        /**
         * The ARM resource ID of the component resource used to preprocess the data.
         */
        preprocessingComponentId?: pulumi.Input<string>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
        /**
         * [Required] The end date of the data window.
         */
        windowEnd: pulumi.Input<string>;
        /**
         * [Required] The start date of the data window.
         */
        windowStart: pulumi.Input<string>;
    }

    /**
     * Details of storage account to be used for the Registry
     */
    export interface StorageAccountDetailsArgs {
        /**
         * Details of system created storage account to be used for the registry
         */
        systemCreatedStorageAccount?: pulumi.Input<SystemCreatedStorageAccountArgs>;
        /**
         * Details of user created storage account to be used for the registry
         */
        userCreatedStorageAccount?: pulumi.Input<UserCreatedStorageAccountArgs>;
    }

    /**
     * Sweep job definition.
     */
    export interface SweepJobArgs {
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: pulumi.Input<string>;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Early termination policies enable canceling poor-performing runs before they complete
         */
        earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>}>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Sweep'.
         */
        jobType: pulumi.Input<"Sweep">;
        /**
         * Sweep Job limit.
         */
        limits?: pulumi.Input<SweepJobLimitsArgs>;
        /**
         * Notification setting for the job
         */
        notificationSetting?: pulumi.Input<NotificationSettingArgs>;
        /**
         * [Required] Optimization objective.
         */
        objective: pulumi.Input<ObjectiveArgs>;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Queue settings for the job
         */
        queueSettings?: pulumi.Input<QueueSettingsArgs>;
        /**
         * [Required] The hyperparameter sampling algorithm
         */
        samplingAlgorithm: pulumi.Input<BayesianSamplingAlgorithmArgs | GridSamplingAlgorithmArgs | RandomSamplingAlgorithmArgs>;
        /**
         * [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
         */
        searchSpace: any;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<SecretConfigurationArgs>}>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] Trial component definition.
         */
        trial: pulumi.Input<TrialComponentArgs>;
    }
    /**
     * sweepJobArgsProvideDefaults sets the appropriate defaults for SweepJobArgs
     */
    export function sweepJobArgsProvideDefaults(val: SweepJobArgs): SweepJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            queueSettings: (val.queueSettings ? pulumi.output(val.queueSettings).apply(queueSettingsArgsProvideDefaults) : undefined),
            trial: pulumi.output(val.trial).apply(trialComponentArgsProvideDefaults),
        };
    }

    /**
     * Sweep Job limit class.
     */
    export interface SweepJobLimitsArgs {
        /**
         *
         * Expected value is 'Sweep'.
         */
        jobLimitsType: pulumi.Input<"Sweep">;
        /**
         * Sweep Job max concurrent trials.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Sweep Job max total trials.
         */
        maxTotalTrials?: pulumi.Input<number>;
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: pulumi.Input<string>;
        /**
         * Sweep Job Trial timeout value.
         */
        trialTimeout?: pulumi.Input<string>;
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

    export interface SystemCreatedAcrAccountArgs {
        /**
         * Name of the ACR account
         */
        acrAccountName?: pulumi.Input<string>;
        /**
         * SKU of the ACR account
         */
        acrAccountSku?: pulumi.Input<string>;
        /**
         * This is populated once the ACR account is created.
         */
        armResourceId?: pulumi.Input<ArmResourceIdArgs>;
    }

    export interface SystemCreatedStorageAccountArgs {
        /**
         * Public blob access allowed
         */
        allowBlobPublicAccess?: pulumi.Input<boolean>;
        /**
         * This is populated once the storage account is created.
         */
        armResourceId?: pulumi.Input<ArmResourceIdArgs>;
        /**
         * HNS enabled for storage account
         */
        storageAccountHnsEnabled?: pulumi.Input<boolean>;
        /**
         * Name of the storage account
         */
        storageAccountName?: pulumi.Input<string>;
        /**
         * Allowed values:
         * "Standard_LRS",
         * "Standard_GRS",
         * "Standard_RAGRS",
         * "Standard_ZRS",
         * "Standard_GZRS",
         * "Standard_RAGZRS",
         * "Premium_LRS",
         * "Premium_ZRS"
         */
        storageAccountType?: pulumi.Input<string>;
    }

    /**
     * Fixed training parameters that won't be swept over during AutoML Table training.
     */
    export interface TableFixedParametersArgs {
        /**
         * Specify the boosting type, e.g gbdt for XGBoost.
         */
        booster?: pulumi.Input<string>;
        /**
         * Specify the boosting type, e.g gbdt for LightGBM.
         */
        boostingType?: pulumi.Input<string>;
        /**
         * Specify the grow policy, which controls the way new nodes are added to the tree.
         */
        growPolicy?: pulumi.Input<string>;
        /**
         * The learning rate for the training procedure.
         */
        learningRate?: pulumi.Input<number>;
        /**
         * Specify the Maximum number of discrete bins to bucket continuous features .
         */
        maxBin?: pulumi.Input<number>;
        /**
         * Specify the max depth to limit the tree depth explicitly.
         */
        maxDepth?: pulumi.Input<number>;
        /**
         * Specify the max leaves to limit the tree leaves explicitly.
         */
        maxLeaves?: pulumi.Input<number>;
        /**
         * The minimum number of data per leaf.
         */
        minDataInLeaf?: pulumi.Input<number>;
        /**
         * Minimum loss reduction required to make a further partition on a leaf node of the tree.
         */
        minSplitGain?: pulumi.Input<number>;
        /**
         * The name of the model to train.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Specify the number of trees (or rounds) in an model.
         */
        nEstimators?: pulumi.Input<number>;
        /**
         * Specify the number of leaves.
         */
        numLeaves?: pulumi.Input<number>;
        /**
         * The name of the preprocessor to use.
         */
        preprocessorName?: pulumi.Input<string>;
        /**
         * L1 regularization term on weights.
         */
        regAlpha?: pulumi.Input<number>;
        /**
         * L2 regularization term on weights.
         */
        regLambda?: pulumi.Input<number>;
        /**
         * Subsample ratio of the training instance.
         */
        subsample?: pulumi.Input<number>;
        /**
         * Frequency of subsample.
         */
        subsampleFreq?: pulumi.Input<number>;
        /**
         * Specify the tree method.
         */
        treeMethod?: pulumi.Input<string>;
        /**
         * If true, center before scaling the data with StandardScalar.
         */
        withMean?: pulumi.Input<boolean>;
        /**
         * If true, scaling the data with Unit Variance with StandardScalar.
         */
        withStd?: pulumi.Input<boolean>;
    }
    /**
     * tableFixedParametersArgsProvideDefaults sets the appropriate defaults for TableFixedParametersArgs
     */
    export function tableFixedParametersArgsProvideDefaults(val: TableFixedParametersArgs): TableFixedParametersArgs {
        return {
            ...val,
            withMean: (val.withMean) ?? false,
            withStd: (val.withStd) ?? false,
        };
    }

    export interface TableParameterSubspaceArgs {
        /**
         * Specify the boosting type, e.g gbdt for XGBoost.
         */
        booster?: pulumi.Input<string>;
        /**
         * Specify the boosting type, e.g gbdt for LightGBM.
         */
        boostingType?: pulumi.Input<string>;
        /**
         * Specify the grow policy, which controls the way new nodes are added to the tree.
         */
        growPolicy?: pulumi.Input<string>;
        /**
         * The learning rate for the training procedure.
         */
        learningRate?: pulumi.Input<string>;
        /**
         * Specify the Maximum number of discrete bins to bucket continuous features .
         */
        maxBin?: pulumi.Input<string>;
        /**
         * Specify the max depth to limit the tree depth explicitly.
         */
        maxDepth?: pulumi.Input<string>;
        /**
         * Specify the max leaves to limit the tree leaves explicitly.
         */
        maxLeaves?: pulumi.Input<string>;
        /**
         * The minimum number of data per leaf.
         */
        minDataInLeaf?: pulumi.Input<string>;
        /**
         * Minimum loss reduction required to make a further partition on a leaf node of the tree.
         */
        minSplitGain?: pulumi.Input<string>;
        /**
         * The name of the model to train.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Specify the number of trees (or rounds) in an model.
         */
        nEstimators?: pulumi.Input<string>;
        /**
         * Specify the number of leaves.
         */
        numLeaves?: pulumi.Input<string>;
        /**
         * The name of the preprocessor to use.
         */
        preprocessorName?: pulumi.Input<string>;
        /**
         * L1 regularization term on weights.
         */
        regAlpha?: pulumi.Input<string>;
        /**
         * L2 regularization term on weights.
         */
        regLambda?: pulumi.Input<string>;
        /**
         * Subsample ratio of the training instance.
         */
        subsample?: pulumi.Input<string>;
        /**
         * Frequency of subsample
         */
        subsampleFreq?: pulumi.Input<string>;
        /**
         * Specify the tree method.
         */
        treeMethod?: pulumi.Input<string>;
        /**
         * If true, center before scaling the data with StandardScalar.
         */
        withMean?: pulumi.Input<string>;
        /**
         * If true, scaling the data with Unit Variance with StandardScalar.
         */
        withStd?: pulumi.Input<string>;
    }

    export interface TableSweepSettingsArgs {
        /**
         * Type of early termination policy for the sweeping job.
         */
        earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs>;
        /**
         * [Required] Type of sampling algorithm.
         */
        samplingAlgorithm: pulumi.Input<string | enums.SamplingAlgorithmType>;
    }

    /**
     * Featurization Configuration.
     */
    export interface TableVerticalFeaturizationSettingsArgs {
        /**
         * These transformers shall not be used in featurization.
         */
        blockedTransformers?: pulumi.Input<pulumi.Input<string | enums.BlockedTransformers>[]>;
        /**
         * Dictionary of column name and its type (int, float, string, datetime etc).
         */
        columnNameAndTypes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Dataset language, useful for the text data.
         */
        datasetLanguage?: pulumi.Input<string>;
        /**
         * Determines whether to use Dnn based featurizers for data featurization.
         */
        enableDnnFeaturization?: pulumi.Input<boolean>;
        /**
         * Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.
         * If 'Off' is selected then no featurization is done.
         * If 'Custom' is selected then user can specify additional inputs to customize how featurization is done.
         */
        mode?: pulumi.Input<string | enums.FeaturizationMode>;
        /**
         * User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor.
         */
        transformerParams?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<ColumnTransformerArgs>[]>}>;
    }
    /**
     * tableVerticalFeaturizationSettingsArgsProvideDefaults sets the appropriate defaults for TableVerticalFeaturizationSettingsArgs
     */
    export function tableVerticalFeaturizationSettingsArgsProvideDefaults(val: TableVerticalFeaturizationSettingsArgs): TableVerticalFeaturizationSettingsArgs {
        return {
            ...val,
            enableDnnFeaturization: (val.enableDnnFeaturization) ?? false,
            mode: (val.mode) ?? "Auto",
        };
    }

    /**
     * Job execution constraints.
     */
    export interface TableVerticalLimitSettingsArgs {
        /**
         * Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations.
         */
        enableEarlyTermination?: pulumi.Input<boolean>;
        /**
         * Exit score for the AutoML job.
         */
        exitScore?: pulumi.Input<number>;
        /**
         * Maximum Concurrent iterations.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Max cores per iteration.
         */
        maxCoresPerTrial?: pulumi.Input<number>;
        /**
         * Maximum nodes to use for the experiment.
         */
        maxNodes?: pulumi.Input<number>;
        /**
         * Number of iterations.
         */
        maxTrials?: pulumi.Input<number>;
        /**
         * Number of concurrent sweeping runs that user wants to trigger.
         */
        sweepConcurrentTrials?: pulumi.Input<number>;
        /**
         * Number of sweeping runs that user wants to trigger.
         */
        sweepTrials?: pulumi.Input<number>;
        /**
         * AutoML job timeout.
         */
        timeout?: pulumi.Input<string>;
        /**
         * Iteration timeout.
         */
        trialTimeout?: pulumi.Input<string>;
    }
    /**
     * tableVerticalLimitSettingsArgsProvideDefaults sets the appropriate defaults for TableVerticalLimitSettingsArgs
     */
    export function tableVerticalLimitSettingsArgsProvideDefaults(val: TableVerticalLimitSettingsArgs): TableVerticalLimitSettingsArgs {
        return {
            ...val,
            enableEarlyTermination: (val.enableEarlyTermination) ?? true,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxCoresPerTrial: (val.maxCoresPerTrial) ?? -1,
            maxNodes: (val.maxNodes) ?? 1,
            maxTrials: (val.maxTrials) ?? 1000,
            sweepConcurrentTrials: (val.sweepConcurrentTrials) ?? 0,
            sweepTrials: (val.sweepTrials) ?? 0,
            timeout: (val.timeout) ?? "PT6H",
            trialTimeout: (val.trialTimeout) ?? "PT30M",
        };
    }

    export interface TargetUtilizationScaleSettingsArgs {
        /**
         * The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances.
         */
        maxInstances?: pulumi.Input<number>;
        /**
         * The minimum number of instances to always be present.
         */
        minInstances?: pulumi.Input<number>;
        /**
         * The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
         */
        pollingInterval?: pulumi.Input<string>;
        /**
         *
         * Expected value is 'TargetUtilization'.
         */
        scaleType: pulumi.Input<"TargetUtilization">;
        /**
         * Target CPU usage for the autoscaler.
         */
        targetUtilizationPercentage?: pulumi.Input<number>;
    }
    /**
     * targetUtilizationScaleSettingsArgsProvideDefaults sets the appropriate defaults for TargetUtilizationScaleSettingsArgs
     */
    export function targetUtilizationScaleSettingsArgsProvideDefaults(val: TargetUtilizationScaleSettingsArgs): TargetUtilizationScaleSettingsArgs {
        return {
            ...val,
            maxInstances: (val.maxInstances) ?? 1,
            minInstances: (val.minInstances) ?? 1,
            pollingInterval: (val.pollingInterval) ?? "PT1S",
            targetUtilizationPercentage: (val.targetUtilizationPercentage) ?? 70,
        };
    }

    /**
     * TensorFlow distribution configuration.
     */
    export interface TensorFlowArgs {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'TensorFlow'.
         */
        distributionType: pulumi.Input<"TensorFlow">;
        /**
         * Number of parameter server tasks.
         */
        parameterServerCount?: pulumi.Input<number>;
        /**
         * Number of workers. If not specified, will default to the instance count.
         */
        workerCount?: pulumi.Input<number>;
    }
    /**
     * tensorFlowArgsProvideDefaults sets the appropriate defaults for TensorFlowArgs
     */
    export function tensorFlowArgsProvideDefaults(val: TensorFlowArgs): TensorFlowArgs {
        return {
            ...val,
            parameterServerCount: (val.parameterServerCount) ?? 0,
        };
    }

    /**
     * Text Classification task in AutoML NLP vertical.
     * NLP - Natural Language Processing.
     */
    export interface TextClassificationArgs {
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs>;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: pulumi.Input<NlpFixedParametersArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Primary metric for Text-Classification task.
         */
        primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<NlpParameterSubspaceArgs>[]>;
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: pulumi.Input<NlpSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextClassification'.
         */
        taskType: pulumi.Input<"TextClassification">;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
    }
    /**
     * textClassificationArgsProvideDefaults sets the appropriate defaults for TextClassificationArgs
     */
    export function textClassificationArgsProvideDefaults(val: TextClassificationArgs): TextClassificationArgs {
        return {
            ...val,
            fixedParameters: (val.fixedParameters ? pulumi.output(val.fixedParameters).apply(nlpFixedParametersArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(nlpVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "Accuracy",
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Text Classification Multilabel task in AutoML NLP vertical.
     * NLP - Natural Language Processing.
     */
    export interface TextClassificationMultilabelArgs {
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs>;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: pulumi.Input<NlpFixedParametersArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<NlpParameterSubspaceArgs>[]>;
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: pulumi.Input<NlpSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextClassificationMultilabel'.
         */
        taskType: pulumi.Input<"TextClassificationMultilabel">;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
    }
    /**
     * textClassificationMultilabelArgsProvideDefaults sets the appropriate defaults for TextClassificationMultilabelArgs
     */
    export function textClassificationMultilabelArgsProvideDefaults(val: TextClassificationMultilabelArgs): TextClassificationMultilabelArgs {
        return {
            ...val,
            fixedParameters: (val.fixedParameters ? pulumi.output(val.fixedParameters).apply(nlpFixedParametersArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(nlpVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Text-NER task in AutoML NLP vertical.
     * NER - Named Entity Recognition.
     * NLP - Natural Language Processing.
     */
    export interface TextNerArgs {
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs>;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: pulumi.Input<NlpFixedParametersArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<NlpParameterSubspaceArgs>[]>;
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: pulumi.Input<NlpSweepSettingsArgs>;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: pulumi.Input<string>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextNER'.
         */
        taskType: pulumi.Input<"TextNER">;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<MLTableJobInputArgs>;
    }
    /**
     * textNerArgsProvideDefaults sets the appropriate defaults for TextNerArgs
     */
    export function textNerArgsProvideDefaults(val: TextNerArgs): TextNerArgs {
        return {
            ...val,
            fixedParameters: (val.fixedParameters ? pulumi.output(val.fixedParameters).apply(nlpFixedParametersArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(nlpVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    export interface TmpfsOptionsArgs {
        /**
         * Mention the Tmpfs size
         */
        size?: pulumi.Input<number>;
    }

    export interface TopNFeaturesByAttributionArgs {
        /**
         *
         * Expected value is 'TopNByAttribution'.
         */
        filterType: pulumi.Input<"TopNByAttribution">;
        /**
         * The number of top features to include.
         */
        top?: pulumi.Input<number>;
    }
    /**
     * topNFeaturesByAttributionArgsProvideDefaults sets the appropriate defaults for TopNFeaturesByAttributionArgs
     */
    export function topNFeaturesByAttributionArgsProvideDefaults(val: TopNFeaturesByAttributionArgs): TopNFeaturesByAttributionArgs {
        return {
            ...val,
            top: (val.top) ?? 10,
        };
    }

    /**
     * Trailing input data definition.
     */
    export interface TrailingInputDataArgs {
        /**
         * Mapping of column names to special uses.
         */
        columns?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The context metadata of the data source.
         */
        dataContext?: pulumi.Input<string>;
        /**
         * Monitoring input data type enum.
         * Expected value is 'Trailing'.
         */
        inputDataType: pulumi.Input<"Trailing">;
        /**
         * [Required] Specifies the type of job.
         */
        jobInputType: pulumi.Input<string | enums.JobInputType>;
        /**
         * The ARM resource ID of the component resource used to preprocess the data.
         */
        preprocessingComponentId?: pulumi.Input<string>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
        /**
         * [Required] The time offset between the end of the data window and the monitor's current run time.
         */
        windowOffset: pulumi.Input<string>;
        /**
         * [Required] The size of the trailing data window.
         */
        windowSize: pulumi.Input<string>;
    }

    /**
     * Trial component definition.
     */
    export interface TrialComponentArgs {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: pulumi.Input<string>;
        /**
         * [Required] The command to execute on startup of the job. eg. "python train.py"
         */
        command: pulumi.Input<string>;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        distribution?: pulumi.Input<MpiArgs | PyTorchArgs | RayArgs | TensorFlowArgs>;
        /**
         * [Required] The ARM resource ID of the Environment specification for the job.
         */
        environmentId: pulumi.Input<string>;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: pulumi.Input<JobResourceConfigurationArgs>;
    }
    /**
     * trialComponentArgsProvideDefaults sets the appropriate defaults for TrialComponentArgs
     */
    export function trialComponentArgsProvideDefaults(val: TrialComponentArgs): TrialComponentArgs {
        return {
            ...val,
            resources: (val.resources ? pulumi.output(val.resources).apply(jobResourceConfigurationArgsProvideDefaults) : undefined),
        };
    }

    export interface TritonModelJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'triton_model'.
         */
        jobInputType: pulumi.Input<"triton_model">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * tritonModelJobInputArgsProvideDefaults sets the appropriate defaults for TritonModelJobInputArgs
     */
    export function tritonModelJobInputArgsProvideDefaults(val: TritonModelJobInputArgs): TritonModelJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface TritonModelJobOutputArgs {
        /**
         * Output Asset Name.
         */
        assetName?: pulumi.Input<string>;
        /**
         * Output Asset Version.
         */
        assetVersion?: pulumi.Input<string>;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'triton_model'.
         */
        jobOutputType: pulumi.Input<"triton_model">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * tritonModelJobOutputArgsProvideDefaults sets the appropriate defaults for TritonModelJobOutputArgs
     */
    export function tritonModelJobOutputArgsProvideDefaults(val: TritonModelJobOutputArgs): TritonModelJobOutputArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * Defines an early termination policy that cancels a given percentage of runs at each evaluation interval.
     */
    export interface TruncationSelectionPolicyArgs {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: pulumi.Input<number>;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: pulumi.Input<number>;
        /**
         *
         * Expected value is 'TruncationSelection'.
         */
        policyType: pulumi.Input<"TruncationSelection">;
        /**
         * The percentage of runs to cancel at each evaluation interval.
         */
        truncationPercentage?: pulumi.Input<number>;
    }
    /**
     * truncationSelectionPolicyArgsProvideDefaults sets the appropriate defaults for TruncationSelectionPolicyArgs
     */
    export function truncationSelectionPolicyArgsProvideDefaults(val: TruncationSelectionPolicyArgs): TruncationSelectionPolicyArgs {
        return {
            ...val,
            delayEvaluation: (val.delayEvaluation) ?? 0,
            evaluationInterval: (val.evaluationInterval) ?? 0,
            truncationPercentage: (val.truncationPercentage) ?? 0,
        };
    }

    /**
     * uri-file data version entity
     */
    export interface UriFileDataVersionArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Enum to determine the type of data.
         * Expected value is 'uri_file'.
         */
        dataType: pulumi.Input<"uri_file">;
        /**
         * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
         */
        dataUri: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Intellectual Property details. Used if data is an Intellectual Property.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Stage in the data lifecycle assigned to this data asset
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * uriFileDataVersionArgsProvideDefaults sets the appropriate defaults for UriFileDataVersionArgs
     */
    export function uriFileDataVersionArgsProvideDefaults(val: UriFileDataVersionArgs): UriFileDataVersionArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface UriFileJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'uri_file'.
         */
        jobInputType: pulumi.Input<"uri_file">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * uriFileJobInputArgsProvideDefaults sets the appropriate defaults for UriFileJobInputArgs
     */
    export function uriFileJobInputArgsProvideDefaults(val: UriFileJobInputArgs): UriFileJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface UriFileJobOutputArgs {
        /**
         * Output Asset Name.
         */
        assetName?: pulumi.Input<string>;
        /**
         * Output Asset Version.
         */
        assetVersion?: pulumi.Input<string>;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'uri_file'.
         */
        jobOutputType: pulumi.Input<"uri_file">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * uriFileJobOutputArgsProvideDefaults sets the appropriate defaults for UriFileJobOutputArgs
     */
    export function uriFileJobOutputArgsProvideDefaults(val: UriFileJobOutputArgs): UriFileJobOutputArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * uri-folder data version entity
     */
    export interface UriFolderDataVersionArgs {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Enum to determine the type of data.
         * Expected value is 'uri_folder'.
         */
        dataType: pulumi.Input<"uri_folder">;
        /**
         * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
         */
        dataUri: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Intellectual Property details. Used if data is an Intellectual Property.
         */
        intellectualProperty?: pulumi.Input<IntellectualPropertyArgs>;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Stage in the data lifecycle assigned to this data asset
         */
        stage?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * uriFolderDataVersionArgsProvideDefaults sets the appropriate defaults for UriFolderDataVersionArgs
     */
    export function uriFolderDataVersionArgsProvideDefaults(val: UriFolderDataVersionArgs): UriFolderDataVersionArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            intellectualProperty: (val.intellectualProperty ? pulumi.output(val.intellectualProperty).apply(intellectualPropertyArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface UriFolderJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'uri_folder'.
         */
        jobInputType: pulumi.Input<"uri_folder">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * uriFolderJobInputArgsProvideDefaults sets the appropriate defaults for UriFolderJobInputArgs
     */
    export function uriFolderJobInputArgsProvideDefaults(val: UriFolderJobInputArgs): UriFolderJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface UriFolderJobOutputArgs {
        /**
         * Output Asset Name.
         */
        assetName?: pulumi.Input<string>;
        /**
         * Output Asset Version.
         */
        assetVersion?: pulumi.Input<string>;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: pulumi.Input<AutoDeleteSettingArgs>;
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'uri_folder'.
         */
        jobOutputType: pulumi.Input<"uri_folder">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * uriFolderJobOutputArgsProvideDefaults sets the appropriate defaults for UriFolderJobOutputArgs
     */
    export function uriFolderJobOutputArgsProvideDefaults(val: UriFolderJobOutputArgs): UriFolderJobOutputArgs {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? pulumi.output(val.autoDeleteSetting).apply(autoDeleteSettingArgsProvideDefaults) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
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

    export interface UserCreatedAcrAccountArgs {
        /**
         * ARM ResourceId of a resource
         */
        armResourceId?: pulumi.Input<ArmResourceIdArgs>;
    }

    export interface UserCreatedStorageAccountArgs {
        /**
         * ARM ResourceId of a resource
         */
        armResourceId?: pulumi.Input<ArmResourceIdArgs>;
    }

    /**
     * User identity configuration.
     */
    export interface UserIdentityArgs {
        /**
         * Enum to determine identity framework.
         * Expected value is 'UserIdentity'.
         */
        identityType: pulumi.Input<"UserIdentity">;
    }

    export interface UsernamePasswordAuthTypeWorkspaceConnectionPropertiesArgs {
        /**
         * Authentication type of the connection target
         * Expected value is 'UsernamePassword'.
         */
        authType: pulumi.Input<"UsernamePassword">;
        /**
         * Category of the connection
         */
        category?: pulumi.Input<string | enums.ConnectionCategory>;
        credentials?: pulumi.Input<WorkspaceConnectionUsernamePasswordArgs>;
        expiryTime?: pulumi.Input<string>;
        metadata?: any;
        target?: pulumi.Input<string>;
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
        properties?: pulumi.Input<VirtualMachineSchemaPropertiesArgs>;
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

    export interface VirtualMachineSchemaPropertiesArgs {
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
         * Notebook server port open for ssh connections.
         */
        notebookServerPort?: pulumi.Input<number>;
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

    export interface VolumeDefinitionArgs {
        /**
         * Bind Options of the mount
         */
        bind?: pulumi.Input<BindOptionsArgs>;
        /**
         * Consistency of the volume
         */
        consistency?: pulumi.Input<string>;
        /**
         * Indicate whether to mount volume as readOnly. Default value for this is false.
         */
        readOnly?: pulumi.Input<boolean>;
        /**
         * Source of the mount. For bind mounts this is the host path.
         */
        source?: pulumi.Input<string>;
        /**
         * Target of the mount. For bind mounts this is the path in the container.
         */
        target?: pulumi.Input<string>;
        /**
         * tmpfs option of the mount
         */
        tmpfs?: pulumi.Input<TmpfsOptionsArgs>;
        /**
         * Type of Volume Definition. Possible Values: bind,volume,tmpfs,npipe
         */
        type?: pulumi.Input<string | enums.VolumeDefinitionType>;
        /**
         * Volume Options of the mount
         */
        volume?: pulumi.Input<VolumeOptionsArgs>;
    }
    /**
     * volumeDefinitionArgsProvideDefaults sets the appropriate defaults for VolumeDefinitionArgs
     */
    export function volumeDefinitionArgsProvideDefaults(val: VolumeDefinitionArgs): VolumeDefinitionArgs {
        return {
            ...val,
            type: (val.type) ?? "bind",
        };
    }

    export interface VolumeOptionsArgs {
        /**
         * Indicate whether volume is nocopy
         */
        nocopy?: pulumi.Input<boolean>;
    }

    export interface WorkspaceConnectionAccessKeyArgs {
        accessKeyId?: pulumi.Input<string>;
        secretAccessKey?: pulumi.Input<string>;
    }

    /**
     * Api key object for workspace connection credential.
     */
    export interface WorkspaceConnectionApiKeyArgs {
        key?: pulumi.Input<string>;
    }

    export interface WorkspaceConnectionManagedIdentityArgs {
        clientId?: pulumi.Input<string>;
        resourceId?: pulumi.Input<string>;
    }

    export interface WorkspaceConnectionPersonalAccessTokenArgs {
        pat?: pulumi.Input<string>;
    }

    export interface WorkspaceConnectionServicePrincipalArgs {
        clientId?: pulumi.Input<string>;
        clientSecret?: pulumi.Input<string>;
        tenantId?: pulumi.Input<string>;
    }

    export interface WorkspaceConnectionSharedAccessSignatureArgs {
        sas?: pulumi.Input<string>;
    }

    export interface WorkspaceConnectionUsernamePasswordArgs {
        password?: pulumi.Input<string>;
        username?: pulumi.Input<string>;
    }

    /**
     * WorkspaceHub's configuration object.
     */
    export interface WorkspaceHubConfigArgs {
        additionalWorkspaceStorageAccounts?: pulumi.Input<pulumi.Input<string>[]>;
        defaultWorkspaceResourceGroup?: pulumi.Input<string>;
    }
