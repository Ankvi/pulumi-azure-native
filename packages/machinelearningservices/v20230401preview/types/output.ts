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
        properties?: AKSSchemaResponseProperties;
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
            properties: (val.properties ? aksschemaResponsePropertiesProvideDefaults(val.properties) : undefined),
        };
    }

    /**
     * AKS properties
     */
    export interface AKSSchemaResponseProperties {
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
     * aksschemaResponsePropertiesProvideDefaults sets the appropriate defaults for AKSSchemaResponseProperties
     */
    export function aksschemaResponsePropertiesProvideDefaults(val: AKSSchemaResponseProperties): AKSSchemaResponseProperties {
        return {
            ...val,
            clusterPurpose: (val.clusterPurpose) ?? "FastProd",
            loadBalancerType: (val.loadBalancerType) ?? "PublicIp",
        };
    }

    export interface AccessKeyAuthTypeWorkspaceConnectionPropertiesResponse {
        /**
         * Authentication type of the connection target
         * Expected value is 'AccessKey'.
         */
        authType: "AccessKey";
        /**
         * Category of the connection
         */
        category?: string;
        credentials?: WorkspaceConnectionAccessKeyResponse;
        expiryTime?: string;
        target?: string;
        /**
         * Value details of the workspace connection.
         */
        value?: string;
        /**
         * format for the workspace connection value
         */
        valueFormat?: string;
    }

    /**
     * Account key datastore credentials configuration.
     */
    export interface AccountKeyDatastoreCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'AccountKey'.
         */
        credentialsType: "AccountKey";
    }

    /**
     * Details of ACR account to be used for the Registry
     */
    export interface AcrDetailsResponse {
        /**
         * Details of system created ACR account to be used for the Registry
         */
        systemCreatedAcrAccount?: SystemCreatedAcrAccountResponse;
        /**
         * Details of user created ACR account to be used for the Registry
         */
        userCreatedAcrAccount?: UserCreatedAcrAccountResponse;
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

    export interface AllFeaturesResponse {
        /**
         *
         * Expected value is 'AllFeatures'.
         */
        filterType: "AllFeatures";
    }

    /**
     * All nodes means the service will be running on all of the nodes of the job
     */
    export interface AllNodesResponse {
        /**
         * The enumerated types for the nodes value
         * Expected value is 'All'.
         */
        nodesValueType: "All";
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
         * A property bag containing additional properties.
         */
        propertyBag?: any;
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
     * AML Token identity configuration.
     */
    export interface AmlTokenResponse {
        /**
         * Enum to determine identity framework.
         * Expected value is 'AMLToken'.
         */
        identityType: "AMLToken";
    }

    /**
     * ARM ResourceId of a resource
     */
    export interface ArmResourceIdResponse {
        /**
         * Arm ResourceId is in the format "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Storage/storageAccounts/{StorageAccountName}"
         * or "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{AcrName}"
         */
        resourceId?: string;
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

    export interface AutoDeleteSettingResponse {
        /**
         * When to check if an asset is expired
         */
        condition?: string;
        /**
         * Expiration condition value.
         */
        value?: string;
    }
    /**
     * autoDeleteSettingResponseProvideDefaults sets the appropriate defaults for AutoDeleteSettingResponse
     */
    export function autoDeleteSettingResponseProvideDefaults(val: AutoDeleteSettingResponse): AutoDeleteSettingResponse {
        return {
            ...val,
            condition: (val.condition) ?? "CreatedGreaterThan",
        };
    }

    /**
     * Forecast horizon determined automatically by system.
     */
    export interface AutoForecastHorizonResponse {
        /**
         * Enum to determine forecast horizon selection mode.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    /**
     * AutoMLJob class.
     * Use this class for executing AutoML tasks like Classification/Regression etc.
     * See TaskType enum for all the tasks supported.
     */
    export interface AutoMLJobResponse {
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: string;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * The ARM resource ID of the Environment specification for the job.
         * This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job.
         */
        environmentId?: string;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Enum to determine the type of job.
         * Expected value is 'AutoML'.
         */
        jobType: "AutoML";
        /**
         * Notification setting for the job
         */
        notificationSetting?: NotificationSettingResponse;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Queue settings for the job
         */
        queueSettings?: QueueSettingsResponse;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: JobResourceConfigurationResponse;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: {[key: string]: SecretConfigurationResponse};
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
        /**
         * [Required] This represents scenario which can be one of Tables/NLP/Image
         */
        taskDetails: ClassificationResponse | ForecastingResponse | ImageClassificationResponse | ImageClassificationMultilabelResponse | ImageInstanceSegmentationResponse | ImageObjectDetectionResponse | RegressionResponse | TextClassificationResponse | TextClassificationMultilabelResponse | TextNerResponse;
    }
    /**
     * autoMLJobResponseProvideDefaults sets the appropriate defaults for AutoMLJobResponse
     */
    export function autoMLJobResponseProvideDefaults(val: AutoMLJobResponse): AutoMLJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            queueSettings: (val.queueSettings ? queueSettingsResponseProvideDefaults(val.queueSettings) : undefined),
            resources: (val.resources ? jobResourceConfigurationResponseProvideDefaults(val.resources) : undefined),
        };
    }

    /**
     * N-Cross validations determined automatically.
     */
    export interface AutoNCrossValidationsResponse {
        /**
         * Determines how N-Cross validations value is determined.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
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

    export interface AutoSeasonalityResponse {
        /**
         * Forecasting seasonality mode.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    export interface AutoTargetLagsResponse {
        /**
         * Target lags selection modes.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    /**
     * Target lags rolling window determined automatically.
     */
    export interface AutoTargetRollingWindowSizeResponse {
        /**
         * Target rolling windows size mode.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    /**
     * Settings for Autologger.
     */
    export interface AutologgerSettingsResponse {
        /**
         * [Required] Indicates whether mlflow autologger is enabled.
         */
        mlflowAutologger: string;
    }

    export interface AzMonMonitoringAlertNotificationSettingsResponse {
        /**
         *
         * Expected value is 'AzureMonitor'.
         */
        alertNotificationType: "AzureMonitor";
    }

    /**
     * Azure Blob datastore configuration.
     */
    export interface AzureBlobDatastoreResponse {
        /**
         * Storage account name.
         */
        accountName?: string;
        /**
         * Storage account container name.
         */
        containerName?: string;
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureBlob'.
         */
        datastoreType: "AzureBlob";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: string;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: string;
        /**
         * Azure Resource Group name
         */
        resourceGroup?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Azure Subscription Id
         */
        subscriptionId?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * azureBlobDatastoreResponseProvideDefaults sets the appropriate defaults for AzureBlobDatastoreResponse
     */
    export function azureBlobDatastoreResponseProvideDefaults(val: AzureBlobDatastoreResponse): AzureBlobDatastoreResponse {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure Data Lake Gen1 datastore configuration.
     */
    export interface AzureDataLakeGen1DatastoreResponse {
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen1'.
         */
        datastoreType: "AzureDataLakeGen1";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Azure Resource Group name
         */
        resourceGroup?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * [Required] Azure Data Lake store name.
         */
        storeName: string;
        /**
         * Azure Subscription Id
         */
        subscriptionId?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * azureDataLakeGen1DatastoreResponseProvideDefaults sets the appropriate defaults for AzureDataLakeGen1DatastoreResponse
     */
    export function azureDataLakeGen1DatastoreResponseProvideDefaults(val: AzureDataLakeGen1DatastoreResponse): AzureDataLakeGen1DatastoreResponse {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure Data Lake Gen2 datastore configuration.
     */
    export interface AzureDataLakeGen2DatastoreResponse {
        /**
         * [Required] Storage account name.
         */
        accountName: string;
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen2'.
         */
        datastoreType: "AzureDataLakeGen2";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: string;
        /**
         * [Required] The name of the Data Lake Gen2 filesystem.
         */
        filesystem: string;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: string;
        /**
         * Azure Resource Group name
         */
        resourceGroup?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Azure Subscription Id
         */
        subscriptionId?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * azureDataLakeGen2DatastoreResponseProvideDefaults sets the appropriate defaults for AzureDataLakeGen2DatastoreResponse
     */
    export function azureDataLakeGen2DatastoreResponseProvideDefaults(val: AzureDataLakeGen2DatastoreResponse): AzureDataLakeGen2DatastoreResponse {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Webhook details specific for Azure DevOps
     */
    export interface AzureDevOpsWebhookResponse {
        /**
         * Send callback on a specified notification event
         */
        eventType?: string;
        /**
         * Enum to determine the webhook callback service type.
         * Expected value is 'AzureDevOps'.
         */
        webhookType: "AzureDevOps";
    }

    /**
     * Azure File datastore configuration.
     */
    export interface AzureFileDatastoreResponse {
        /**
         * [Required] Storage account name.
         */
        accountName: string;
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureFile'.
         */
        datastoreType: "AzureFile";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: string;
        /**
         * [Required] The name of the Azure file share that the datastore points to.
         */
        fileShareName: string;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: string;
        /**
         * Azure Resource Group name
         */
        resourceGroup?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Azure Subscription Id
         */
        subscriptionId?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * azureFileDatastoreResponseProvideDefaults sets the appropriate defaults for AzureFileDatastoreResponse
     */
    export function azureFileDatastoreResponseProvideDefaults(val: AzureFileDatastoreResponse): AzureFileDatastoreResponse {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Defines an early termination policy based on slack criteria, and a frequency and delay interval for evaluation
     */
    export interface BanditPolicyResponse {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: number;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: number;
        /**
         *
         * Expected value is 'Bandit'.
         */
        policyType: "Bandit";
        /**
         * Absolute distance allowed from the best performing run.
         */
        slackAmount?: number;
        /**
         * Ratio of the allowed distance from the best performing run.
         */
        slackFactor?: number;
    }
    /**
     * banditPolicyResponseProvideDefaults sets the appropriate defaults for BanditPolicyResponse
     */
    export function banditPolicyResponseProvideDefaults(val: BanditPolicyResponse): BanditPolicyResponse {
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
    export interface BatchDeploymentResponse {
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: CodeConfigurationResponse;
        /**
         * Compute target for batch inference operation.
         */
        compute?: string;
        /**
         * Properties relevant to different deployment types.
         */
        deploymentConfiguration?: BatchPipelineComponentDeploymentConfigurationResponse;
        /**
         * Description of the endpoint deployment.
         */
        description?: string;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: string;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Error threshold, if the error count for the entire input goes above this value,
         * the batch inference will be aborted. Range is [-1, int.MaxValue].
         * For FileDataset, this value is the count of file failures.
         * For TabularDataset, this value is the count of record failures.
         * If set to -1 (the lower bound), all failures during batch inference will be ignored.
         */
        errorThreshold?: number;
        /**
         * Logging level for batch inference operation.
         */
        loggingLevel?: string;
        /**
         * Indicates maximum number of parallelism per instance.
         */
        maxConcurrencyPerInstance?: number;
        /**
         * Size of the mini-batch passed to each batch invocation.
         * For FileDataset, this is the number of files per mini-batch.
         * For TabularDataset, this is the size of the records in bytes, per mini-batch.
         */
        miniBatchSize?: number;
        /**
         * Reference to the model asset for the endpoint deployment.
         */
        model?: DataPathAssetReferenceResponse | IdAssetReferenceResponse | OutputPathAssetReferenceResponse;
        /**
         * Indicates how the output will be organized.
         */
        outputAction?: string;
        /**
         * Customized output file name for append_row output action.
         */
        outputFileName?: string;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint deployment.
         */
        provisioningState: string;
        /**
         * Indicates compute configuration for the job.
         * If not provided, will default to the defaults defined in ResourceConfiguration.
         */
        resources?: DeploymentResourceConfigurationResponse;
        /**
         * Retry Settings for the batch inference operation.
         * If not provided, will default to the defaults defined in BatchRetrySettings.
         */
        retrySettings?: BatchRetrySettingsResponse;
    }
    /**
     * batchDeploymentResponseProvideDefaults sets the appropriate defaults for BatchDeploymentResponse
     */
    export function batchDeploymentResponseProvideDefaults(val: BatchDeploymentResponse): BatchDeploymentResponse {
        return {
            ...val,
            errorThreshold: (val.errorThreshold) ?? -1,
            loggingLevel: (val.loggingLevel) ?? "Info",
            maxConcurrencyPerInstance: (val.maxConcurrencyPerInstance) ?? 1,
            miniBatchSize: (val.miniBatchSize) ?? 10,
            outputAction: (val.outputAction) ?? "AppendRow",
            outputFileName: (val.outputFileName) ?? "predictions.csv",
            resources: (val.resources ? deploymentResourceConfigurationResponseProvideDefaults(val.resources) : undefined),
            retrySettings: (val.retrySettings ? batchRetrySettingsResponseProvideDefaults(val.retrySettings) : undefined),
        };
    }

    /**
     * Batch endpoint default values
     */
    export interface BatchEndpointDefaultsResponse {
        /**
         * Name of the deployment that will be default for the endpoint.
         * This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked.
         */
        deploymentName?: string;
    }

    /**
     * Batch endpoint configuration.
     */
    export interface BatchEndpointResponse {
        /**
         * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
         */
        authMode: string;
        /**
         * Default values for Batch Endpoint.
         */
        defaults?: BatchEndpointDefaultsResponse;
        /**
         * Description of the inference endpoint.
         */
        description?: string;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint.
         */
        provisioningState: string;
        /**
         * Endpoint URI.
         */
        scoringUri: string;
        /**
         * Endpoint Swagger URI.
         */
        swaggerUri: string;
    }

    /**
     * Properties for a Batch Pipeline Component Deployment.
     */
    export interface BatchPipelineComponentDeploymentConfigurationResponse {
        /**
         * The ARM id of the component to be run.
         */
        componentId?: IdAssetReferenceResponse;
        /**
         * The enumerated property types for batch deployments.
         * Expected value is 'PipelineComponent'.
         */
        deploymentConfigurationType: "PipelineComponent";
        /**
         * The description which will be applied to the job.
         */
        description?: string;
        /**
         * Run-time settings for the pipeline job.
         */
        settings?: {[key: string]: string};
        /**
         * The tags which will be applied to the job.
         */
        tags?: {[key: string]: string};
    }

    /**
     * Retry settings for a batch inference operation.
     */
    export interface BatchRetrySettingsResponse {
        /**
         * Maximum retry count for a mini-batch
         */
        maxRetries?: number;
        /**
         * Invocation timeout for a mini-batch, in ISO 8601 format.
         */
        timeout?: string;
    }
    /**
     * batchRetrySettingsResponseProvideDefaults sets the appropriate defaults for BatchRetrySettingsResponse
     */
    export function batchRetrySettingsResponseProvideDefaults(val: BatchRetrySettingsResponse): BatchRetrySettingsResponse {
        return {
            ...val,
            maxRetries: (val.maxRetries) ?? 3,
            timeout: (val.timeout) ?? "PT30S",
        };
    }

    /**
     * Defines a Sampling Algorithm that generates values based on previous values
     */
    export interface BayesianSamplingAlgorithmResponse {
        /**
         *
         * Expected value is 'Bayesian'.
         */
        samplingAlgorithmType: "Bayesian";
    }

    export interface BindOptionsResponse {
        /**
         * Indicate whether to create host path.
         */
        createHostPath?: boolean;
        /**
         * Type of Bind Option
         */
        propagation?: string;
        /**
         * Mention the selinux options.
         */
        selinux?: string;
    }

    /**
     * Configuration settings for Docker build context
     */
    export interface BuildContextResponse {
        /**
         * [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.
         * <seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" />
         */
        contextUri: string;
        /**
         * Path to the Dockerfile in the build context.
         * <seealso href="https://docs.docker.com/engine/reference/builder/" />
         */
        dockerfilePath?: string;
    }
    /**
     * buildContextResponseProvideDefaults sets the appropriate defaults for BuildContextResponse
     */
    export function buildContextResponseProvideDefaults(val: BuildContextResponse): BuildContextResponse {
        return {
            ...val,
            dockerfilePath: (val.dockerfilePath) ?? "Dockerfile",
        };
    }

    export interface CategoricalDataDriftMetricThresholdResponse {
        /**
         *
         * Expected value is 'Categorical'.
         */
        dataType: "Categorical";
        /**
         * [Required] The categorical data drift metric to calculate.
         */
        metric: string;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    export interface CategoricalDataQualityMetricThresholdResponse {
        /**
         *
         * Expected value is 'Categorical'.
         */
        dataType: "Categorical";
        /**
         * [Required] The categorical data quality metric to calculate.
         */
        metric: string;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    export interface CategoricalPredictionDriftMetricThresholdResponse {
        /**
         *
         * Expected value is 'Categorical'.
         */
        dataType: "Categorical";
        /**
         * [Required] The categorical prediction drift metric to calculate.
         */
        metric: string;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    /**
     * Certificate datastore credentials configuration.
     */
    export interface CertificateDatastoreCredentialsResponse {
        /**
         * Authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * [Required] Service principal client ID.
         */
        clientId: string;
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'Certificate'.
         */
        credentialsType: "Certificate";
        /**
         * Resource the service principal has access to.
         */
        resourceUrl?: string;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: string;
        /**
         * [Required] Thumbprint of the certificate used for authentication.
         */
        thumbprint: string;
    }

    export interface ClassificationModelPerformanceMetricThresholdResponse {
        /**
         * [Required] The classification model performance to calculate.
         */
        metric: string;
        /**
         *
         * Expected value is 'Classification'.
         */
        modelType: "Classification";
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    /**
     * Classification task in AutoML Table vertical.
     */
    export interface ClassificationResponse {
        /**
         * Columns to use for CVSplit data.
         */
        cvSplitColumnNames?: string[];
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: TableVerticalFeaturizationSettingsResponse;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: TableFixedParametersResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: TableVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Number of cross validation folds to be applied on training dataset
         * when validation dataset is not provided.
         */
        nCrossValidations?: AutoNCrossValidationsResponse | CustomNCrossValidationsResponse;
        /**
         * Positive label for binary metrics calculation.
         */
        positiveLabel?: string;
        /**
         * Primary metric for the task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: TableParameterSubspaceResponse[];
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: TableSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Classification'.
         */
        taskType: "Classification";
        /**
         * Test data input.
         */
        testData?: MLTableJobInputResponse;
        /**
         * The fraction of test dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        testDataSize?: number;
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: ClassificationTrainingSettingsResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
        /**
         * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
         */
        weightColumnName?: string;
    }
    /**
     * classificationResponseProvideDefaults sets the appropriate defaults for ClassificationResponse
     */
    export function classificationResponseProvideDefaults(val: ClassificationResponse): ClassificationResponse {
        return {
            ...val,
            featurizationSettings: (val.featurizationSettings ? tableVerticalFeaturizationSettingsResponseProvideDefaults(val.featurizationSettings) : undefined),
            fixedParameters: (val.fixedParameters ? tableFixedParametersResponseProvideDefaults(val.fixedParameters) : undefined),
            limitSettings: (val.limitSettings ? tableVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "AUCWeighted",
            testData: (val.testData ? mltableJobInputResponseProvideDefaults(val.testData) : undefined),
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            trainingSettings: (val.trainingSettings ? classificationTrainingSettingsResponseProvideDefaults(val.trainingSettings) : undefined),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Classification Training related configuration.
     */
    export interface ClassificationTrainingSettingsResponse {
        /**
         * Allowed models for classification task.
         */
        allowedTrainingAlgorithms?: string[];
        /**
         * Blocked models for classification task.
         */
        blockedTrainingAlgorithms?: string[];
        /**
         * Enable recommendation of DNN models.
         */
        enableDnnTraining?: boolean;
        /**
         * Flag to turn on explainability on best model.
         */
        enableModelExplainability?: boolean;
        /**
         * Flag for enabling onnx compatible models.
         */
        enableOnnxCompatibleModels?: boolean;
        /**
         * Enable stack ensemble run.
         */
        enableStackEnsemble?: boolean;
        /**
         * Enable voting ensemble run.
         */
        enableVoteEnsemble?: boolean;
        /**
         * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
         * Configure this parameter with a higher value than 300 secs, if more time is needed.
         */
        ensembleModelDownloadTimeout?: string;
        /**
         * Stack ensemble settings for stack ensemble run.
         */
        stackEnsembleSettings?: StackEnsembleSettingsResponse;
        /**
         * TrainingMode mode - Setting to 'auto' is same as setting it to 'non-distributed' for now, however in the future may result in mixed mode or heuristics based mode selection. Default is 'auto'.
         * If 'Distributed' then only distributed featurization is used and distributed algorithms are chosen.
         * If 'NonDistributed' then only non distributed algorithms are chosen.
         */
        trainingMode?: string;
    }
    /**
     * classificationTrainingSettingsResponseProvideDefaults sets the appropriate defaults for ClassificationTrainingSettingsResponse
     */
    export function classificationTrainingSettingsResponseProvideDefaults(val: ClassificationTrainingSettingsResponse): ClassificationTrainingSettingsResponse {
        return {
            ...val,
            enableDnnTraining: (val.enableDnnTraining) ?? false,
            enableModelExplainability: (val.enableModelExplainability) ?? true,
            enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
            enableStackEnsemble: (val.enableStackEnsemble) ?? true,
            enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
            ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
            stackEnsembleSettings: (val.stackEnsembleSettings ? stackEnsembleSettingsResponseProvideDefaults(val.stackEnsembleSettings) : undefined),
            trainingMode: (val.trainingMode) ?? "Auto",
        };
    }

    /**
     * Configuration for a scoring code asset.
     */
    export interface CodeConfigurationResponse {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: string;
        /**
         * [Required] The script to execute on startup. eg. "score.py"
         */
        scoringScript: string;
    }

    /**
     * Container for code asset versions.
     */
    export interface CodeContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the code container.
         */
        provisioningState: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * codeContainerResponseProvideDefaults sets the appropriate defaults for CodeContainerResponse
     */
    export function codeContainerResponseProvideDefaults(val: CodeContainerResponse): CodeContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Code asset version details.
     */
    export interface CodeVersionResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Uri where code is located
         */
        codeUri?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the code version.
         */
        provisioningState: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * codeVersionResponseProvideDefaults sets the appropriate defaults for CodeVersionResponse
     */
    export function codeVersionResponseProvideDefaults(val: CodeVersionResponse): CodeVersionResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface CollectionResponse {
        /**
         * The msi client id used to collect logging to blob storage. If it's null,backend will pick a registered endpoint identity to auth.
         */
        clientId?: string;
        /**
         * Enable or disable data collection.
         */
        dataCollectionMode?: string;
        /**
         * The data asset arm resource id. Client side will ensure data asset is pointing to the blob storage, and backend will collect data to the blob storage.
         */
        dataId?: string;
        /**
         * The sampling rate for collection. Sampling rate 1.0 means we collect 100% of data by default.
         */
        samplingRate?: number;
    }
    /**
     * collectionResponseProvideDefaults sets the appropriate defaults for CollectionResponse
     */
    export function collectionResponseProvideDefaults(val: CollectionResponse): CollectionResponse {
        return {
            ...val,
            dataCollectionMode: (val.dataCollectionMode) ?? "Disabled",
            samplingRate: (val.samplingRate) ?? 1,
        };
    }

    /**
     * Column transformer parameters.
     */
    export interface ColumnTransformerResponse {
        /**
         * Fields to apply transformer logic on.
         */
        fields?: string[];
        /**
         * Different properties to be passed to transformer.
         * Input expected is dictionary of key,value pairs in JSON format.
         */
        parameters?: any;
    }

    /**
     * Command Job limit class.
     */
    export interface CommandJobLimitsResponse {
        /**
         *
         * Expected value is 'Command'.
         */
        jobLimitsType: "Command";
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: string;
    }

    /**
     * Command job definition.
     */
    export interface CommandJobResponse {
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        autologgerSettings?: AutologgerSettingsResponse;
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: string;
        /**
         * [Required] The command to execute on startup of the job. eg. "python train.py"
         */
        command: string;
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: string;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, Ray, or null.
         */
        distribution?: MpiResponse | PyTorchResponse | RayResponse | TensorFlowResponse;
        /**
         * [Required] The ARM resource ID of the Environment specification for the job.
         */
        environmentId: string;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: {[key: string]: CustomModelJobInputResponse | LiteralJobInputResponse | MLFlowModelJobInputResponse | MLTableJobInputResponse | TritonModelJobInputResponse | UriFileJobInputResponse | UriFolderJobInputResponse};
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Command'.
         */
        jobType: "Command";
        /**
         * Command Job limit.
         */
        limits?: CommandJobLimitsResponse;
        /**
         * Notification setting for the job
         */
        notificationSetting?: NotificationSettingResponse;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * Input parameters.
         */
        parameters: any;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Queue settings for the job
         */
        queueSettings?: QueueSettingsResponse;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: JobResourceConfigurationResponse;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: {[key: string]: SecretConfigurationResponse};
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * commandJobResponseProvideDefaults sets the appropriate defaults for CommandJobResponse
     */
    export function commandJobResponseProvideDefaults(val: CommandJobResponse): CommandJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            queueSettings: (val.queueSettings ? queueSettingsResponseProvideDefaults(val.queueSettings) : undefined),
            resources: (val.resources ? jobResourceConfigurationResponseProvideDefaults(val.resources) : undefined),
        };
    }

    /**
     * Component container definition.
     * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
     */
    export interface ComponentContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the component container.
         */
        provisioningState: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * componentContainerResponseProvideDefaults sets the appropriate defaults for ComponentContainerResponse
     */
    export function componentContainerResponseProvideDefaults(val: ComponentContainerResponse): ComponentContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Definition of a component version: defines resources that span component types.
     */
    export interface ComponentVersionResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Defines Component definition details.
         * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
         */
        componentSpec?: any;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the component version.
         */
        provisioningState: string;
        /**
         * Stage in the component lifecycle
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * componentVersionResponseProvideDefaults sets the appropriate defaults for ComponentVersionResponse
     */
    export function componentVersionResponseProvideDefaults(val: ComponentVersionResponse): ComponentVersionResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
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
     * Specifies settings for autologger.
     */
    export interface ComputeInstanceAutologgerSettingsResponse {
        /**
         * Indicates whether mlflow autologger is enabled for notebooks.
         */
        mlflowAutologger?: string;
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
     * Defines an Aml Instance container.
     */
    export interface ComputeInstanceContainerResponse {
        /**
         * Auto save settings.
         */
        autosave?: string;
        /**
         * Environment information of this container.
         */
        environment?: ComputeInstanceEnvironmentInfoResponse;
        /**
         * Information of GPU.
         */
        gpu?: string;
        /**
         * Name of the ComputeInstance container.
         */
        name?: string;
        /**
         * network of this container.
         */
        network?: string;
        /**
         * services of this containers.
         */
        services: any[];
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
     * Defines an Aml Instance DataDisk.
     */
    export interface ComputeInstanceDataDiskResponse {
        /**
         * Caching type of Data Disk.
         */
        caching?: string;
        /**
         * The initial disk size in gigabytes.
         */
        diskSizeGB?: number;
        /**
         * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
         */
        lun?: number;
        /**
         * type of this storage account.
         */
        storageAccountType?: string;
    }
    /**
     * computeInstanceDataDiskResponseProvideDefaults sets the appropriate defaults for ComputeInstanceDataDiskResponse
     */
    export function computeInstanceDataDiskResponseProvideDefaults(val: ComputeInstanceDataDiskResponse): ComputeInstanceDataDiskResponse {
        return {
            ...val,
            storageAccountType: (val.storageAccountType) ?? "Standard_LRS",
        };
    }

    /**
     * Defines an Aml Instance DataMount.
     */
    export interface ComputeInstanceDataMountResponse {
        /**
         * who this data mount created by.
         */
        createdBy?: string;
        /**
         * Error of this data mount.
         */
        error?: string;
        /**
         * Mount Action.
         */
        mountAction?: string;
        /**
         * name of the ComputeInstance data mount.
         */
        mountName?: string;
        /**
         * Path of this data mount.
         */
        mountPath?: string;
        /**
         * Mount state.
         */
        mountState?: string;
        /**
         * The time when the disk mounted.
         */
        mountedOn?: string;
        /**
         * Source of the ComputeInstance data mount.
         */
        source?: string;
        /**
         * Data source type.
         */
        sourceType?: string;
    }

    /**
     * Environment information
     */
    export interface ComputeInstanceEnvironmentInfoResponse {
        /**
         * name of environment.
         */
        name?: string;
        /**
         * version of environment.
         */
        version?: string;
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
        /**
         * Trigger of operation.
         */
        operationTrigger?: string;
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
         * Specifies settings for autologger.
         */
        autologgerSettings?: ComputeInstanceAutologgerSettingsResponse;
        /**
         * The Compute Instance Authorization type. Available values are personal (default).
         */
        computeInstanceAuthorizationType?: string;
        /**
         * Describes all connectivity endpoints available for this ComputeInstance.
         */
        connectivityEndpoints: ComputeInstanceConnectivityEndpointsResponse;
        /**
         * Describes informations of containers on this ComputeInstance.
         */
        containers: ComputeInstanceContainerResponse[];
        /**
         * Describes information on user who created this ComputeInstance.
         */
        createdBy: ComputeInstanceCreatedByResponse;
        /**
         * List of Custom Services added to the compute.
         */
        customServices?: CustomServiceResponse[];
        /**
         * Describes informations of dataDisks on this ComputeInstance.
         */
        dataDisks: ComputeInstanceDataDiskResponse[];
        /**
         * Describes informations of dataMounts on this ComputeInstance.
         */
        dataMounts: ComputeInstanceDataMountResponse[];
        /**
         * Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
         */
        enableNodePublicIp?: boolean;
        /**
         * Collection of errors encountered on this ComputeInstance.
         */
        errors: ErrorResponseResponse[];
        /**
         * Stops compute instance after user defined period of inactivity. Time is defined in ISO8601 format. Minimum is 15 min, maximum is 3 days.
         */
        idleTimeBeforeShutdown?: string;
        /**
         * The last operation on ComputeInstance.
         */
        lastOperation: ComputeInstanceLastOperationResponse;
        /**
         * Returns metadata about the operating system image for this compute instance.
         */
        osImageMetadata: ImageMetadataResponse;
        /**
         * Settings for a personal compute instance.
         */
        personalComputeInstanceSettings?: PersonalComputeInstanceSettingsResponse;
        /**
         * The list of schedules to be applied on the computes.
         */
        schedules?: ComputeSchedulesResponse;
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
         * ComputeInstance version.
         */
        versions: ComputeInstanceVersionResponse;
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

    /**
     * Version of computeInstance.
     */
    export interface ComputeInstanceVersionResponse {
        /**
         * Runtime of compute instance.
         */
        runtime?: string;
    }

    export interface ComputeRuntimeDtoResponse {
        sparkRuntimeVersion?: string;
    }

    /**
     * The list of schedules to be applied on the computes
     */
    export interface ComputeSchedulesResponse {
        /**
         * The list of compute start stop schedules to be applied.
         */
        computeStartStop?: ComputeStartStopScheduleResponse[];
    }

    /**
     * Compute start stop schedule properties
     */
    export interface ComputeStartStopScheduleResponse {
        /**
         * [Required] The compute power action.
         */
        action?: string;
        /**
         * Required if triggerType is Cron.
         */
        cron?: CronResponse;
        /**
         * A system assigned id for the schedule.
         */
        id: string;
        /**
         * The current deployment state of schedule.
         */
        provisioningStatus: string;
        /**
         * Required if triggerType is Recurrence.
         */
        recurrence?: RecurrenceResponse;
        /**
         * [Deprecated] Not used any more.
         */
        schedule?: ScheduleBaseResponse;
        /**
         * Is the schedule enabled or disabled?
         */
        status?: string;
        /**
         * [Required] The schedule trigger type.
         */
        triggerType?: string;
    }
    /**
     * computeStartStopScheduleResponseProvideDefaults sets the appropriate defaults for ComputeStartStopScheduleResponse
     */
    export function computeStartStopScheduleResponseProvideDefaults(val: ComputeStartStopScheduleResponse): ComputeStartStopScheduleResponse {
        return {
            ...val,
            cron: (val.cron ? cronResponseProvideDefaults(val.cron) : undefined),
            recurrence: (val.recurrence ? recurrenceResponseProvideDefaults(val.recurrence) : undefined),
        };
    }

    /**
     * Resource requirements for each container instance within an online deployment.
     */
    export interface ContainerResourceRequirementsResponse {
        /**
         * Container resource limit info:
         */
        containerResourceLimits?: ContainerResourceSettingsResponse;
        /**
         * Container resource request info:
         */
        containerResourceRequests?: ContainerResourceSettingsResponse;
    }

    export interface ContainerResourceSettingsResponse {
        /**
         * Number of vCPUs request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpu?: string;
        /**
         * Number of Nvidia GPU cards request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        gpu?: string;
        /**
         * Memory size request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memory?: string;
    }

    export interface CosmosDbSettingsResponse {
        /**
         * The throughput of the collections in cosmosdb database
         */
        collectionsThroughput?: number;
    }

    export interface CreateMonitorActionResponse {
        /**
         *
         * Expected value is 'CreateMonitor'.
         */
        actionType: "CreateMonitor";
        /**
         * [Required] Defines the monitor.
         */
        monitorDefinition: MonitorDefinitionResponse;
    }

    /**
     * The workflow trigger cron for ComputeStartStop schedule type.
     */
    export interface CronResponse {
        /**
         * [Required] Specifies cron expression of schedule.
         * The expression should follow NCronTab format.
         */
        expression?: string;
        /**
         * The start time in yyyy-MM-ddTHH:mm:ss format.
         */
        startTime?: string;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
         */
        timeZone?: string;
    }
    /**
     * cronResponseProvideDefaults sets the appropriate defaults for CronResponse
     */
    export function cronResponseProvideDefaults(val: CronResponse): CronResponse {
        return {
            ...val,
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    export interface CronTriggerResponse {
        /**
         * Specifies end time of schedule in ISO 8601, but without a UTC offset. Refer https://en.wikipedia.org/wiki/ISO_8601.
         * Recommented format would be "2022-06-01T00:00:01"
         * If not present, the schedule will run indefinitely
         */
        endTime?: string;
        /**
         * [Required] Specifies cron expression of schedule.
         * The expression should follow NCronTab format.
         */
        expression: string;
        /**
         * Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
         */
        startTime?: string;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
         */
        timeZone?: string;
        /**
         *
         * Expected value is 'Cron'.
         */
        triggerType: "Cron";
    }
    /**
     * cronTriggerResponseProvideDefaults sets the appropriate defaults for CronTriggerResponse
     */
    export function cronTriggerResponseProvideDefaults(val: CronTriggerResponse): CronTriggerResponse {
        return {
            ...val,
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    /**
     * The desired maximum forecast horizon in units of time-series frequency.
     */
    export interface CustomForecastHorizonResponse {
        /**
         * Enum to determine forecast horizon selection mode.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] Forecast horizon value.
         */
        value: number;
    }

    export interface CustomMetricThresholdResponse {
        /**
         * [Required] The user-defined metric to calculate.
         */
        metric: string;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    export interface CustomModelJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'custom_model'.
         */
        jobInputType: "custom_model";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * customModelJobInputResponseProvideDefaults sets the appropriate defaults for CustomModelJobInputResponse
     */
    export function customModelJobInputResponseProvideDefaults(val: CustomModelJobInputResponse): CustomModelJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface CustomModelJobOutputResponse {
        /**
         * Output Asset Name.
         */
        assetName?: string;
        /**
         * Output Asset Version.
         */
        assetVersion?: string;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'custom_model'.
         */
        jobOutputType: "custom_model";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * customModelJobOutputResponseProvideDefaults sets the appropriate defaults for CustomModelJobOutputResponse
     */
    export function customModelJobOutputResponseProvideDefaults(val: CustomModelJobOutputResponse): CustomModelJobOutputResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    export interface CustomMonitoringSignalResponse {
        /**
         * [Required] ARM resource ID of the component resource used to calculate the custom metrics.
         */
        componentId: string;
        /**
         * Monitoring assets to take as input. Key is the component input port name, value is the data asset.
         */
        inputAssets?: {[key: string]: MonitoringInputDataResponse};
        /**
         * The amount of time a single monitor should look back over the target data on a given run.
         */
        lookbackPeriod?: string;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThresholds: CustomMetricThresholdResponse[];
        /**
         * The current notification mode for this signal.
         */
        mode?: string;
        /**
         *
         * Expected value is 'Custom'.
         */
        signalType: "Custom";
    }
    /**
     * customMonitoringSignalResponseProvideDefaults sets the appropriate defaults for CustomMonitoringSignalResponse
     */
    export function customMonitoringSignalResponseProvideDefaults(val: CustomMonitoringSignalResponse): CustomMonitoringSignalResponse {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    /**
     * N-Cross validations are specified by user.
     */
    export interface CustomNCrossValidationsResponse {
        /**
         * Determines how N-Cross validations value is determined.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] N-Cross validations value.
         */
        value: number;
    }

    export interface CustomSeasonalityResponse {
        /**
         * Forecasting seasonality mode.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] Seasonality value.
         */
        value: number;
    }

    /**
     * Specifies the custom service configuration
     */
    export interface CustomServiceResponse {
        /**
         * Describes the docker settings for the image
         */
        docker?: DockerResponse;
        /**
         * Configuring the endpoints for the container
         */
        endpoints?: EndpointResponse[];
        /**
         * Environment Variable for the container
         */
        environmentVariables?: {[key: string]: EnvironmentVariableResponse};
        /**
         * Describes the Image Specifications
         */
        image?: ImageResponse;
        /**
         * Name of the Custom Service
         */
        name?: string;
        /**
         * Configuring the volumes for the container
         */
        volumes?: VolumeDefinitionResponse[];
    }
    /**
     * customServiceResponseProvideDefaults sets the appropriate defaults for CustomServiceResponse
     */
    export function customServiceResponseProvideDefaults(val: CustomServiceResponse): CustomServiceResponse {
        return {
            ...val,
            image: (val.image ? imageResponseProvideDefaults(val.image) : undefined),
        };
    }

    export interface CustomTargetLagsResponse {
        /**
         * Target lags selection modes.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] Set target lags values.
         */
        values: number[];
    }

    export interface CustomTargetRollingWindowSizeResponse {
        /**
         * Target rolling windows size mode.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] TargetRollingWindowSize value.
         */
        value: number;
    }

    export interface DataCollectorResponse {
        /**
         * [Required] The collection configuration. Each collection has it own configuration to collect model data and the name of collection can be arbitrary string.
         * Model data collector can be used for either payload logging or custom logging or both of them. Collection request and response are reserved for payload logging, others are for custom logging.
         */
        collections: {[key: string]: CollectionResponse};
        /**
         * The request logging configuration for mdc, it includes advanced logging settings for all collections. It's optional.
         */
        requestLogging?: RequestLoggingResponse;
        /**
         * When model data is collected to blob storage, we need to roll the data to different path to avoid logging all of them in a single blob file.
         * If the rolling rate is hour, all data will be collected in the blob path /yyyy/MM/dd/HH/.
         * If it's day, all data will be collected in blob path /yyyy/MM/dd/.
         * The other benefit of rolling path is that model monitoring ui is able to select a time range of data very quickly.
         */
        rollingRate?: string;
    }
    /**
     * dataCollectorResponseProvideDefaults sets the appropriate defaults for DataCollectorResponse
     */
    export function dataCollectorResponseProvideDefaults(val: DataCollectorResponse): DataCollectorResponse {
        return {
            ...val,
            rollingRate: (val.rollingRate) ?? "Hour",
        };
    }

    /**
     * Container for data asset versions.
     */
    export interface DataContainerResponse {
        /**
         * [Required] Specifies the type of data.
         */
        dataType: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * dataContainerResponseProvideDefaults sets the appropriate defaults for DataContainerResponse
     */
    export function dataContainerResponseProvideDefaults(val: DataContainerResponse): DataContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface DataDriftMonitoringSignalResponse {
        /**
         * [Required] The data to calculate drift against.
         */
        baselineData: MonitoringInputDataResponse;
        /**
         * The data segment used for scoping on a subset of the data population.
         */
        dataSegment?: MonitoringDataSegmentResponse;
        /**
         * The feature filter which identifies which feature to calculate drift over.
         */
        features?: AllFeaturesResponse | FeatureSubsetResponse | TopNFeaturesByAttributionResponse;
        /**
         * The amount of time a single monitor should look back over the target data on a given run.
         */
        lookbackPeriod?: string;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThresholds: (CategoricalDataDriftMetricThresholdResponse | NumericalDataDriftMetricThresholdResponse)[];
        /**
         * The current notification mode for this signal.
         */
        mode?: string;
        /**
         *
         * Expected value is 'DataDrift'.
         */
        signalType: "DataDrift";
        /**
         * [Required] The data which drift will be calculated for.
         */
        targetData: MonitoringInputDataResponse;
    }
    /**
     * dataDriftMonitoringSignalResponseProvideDefaults sets the appropriate defaults for DataDriftMonitoringSignalResponse
     */
    export function dataDriftMonitoringSignalResponseProvideDefaults(val: DataDriftMonitoringSignalResponse): DataDriftMonitoringSignalResponse {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
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

    export interface DataImportResponse {
        /**
         * Name of the asset for data import job to create
         */
        assetName?: string;
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Enum to determine the type of data.
         * Expected value is 'uri_folder'.
         */
        dataType: "uri_folder";
        /**
         * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
         */
        dataUri: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Intellectual Property details. Used if data is an Intellectual Property.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Source data of the asset to import from
         */
        source?: DatabaseSourceResponse | FileSystemSourceResponse;
        /**
         * Stage in the data lifecycle assigned to this data asset
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * dataImportResponseProvideDefaults sets the appropriate defaults for DataImportResponse
     */
    export function dataImportResponseProvideDefaults(val: DataImportResponse): DataImportResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
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
        properties?: DataLakeAnalyticsSchemaResponseProperties;
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

    export interface DataLakeAnalyticsSchemaResponseProperties {
        /**
         * DataLake Store Account Name
         */
        dataLakeStoreAccountName?: string;
    }

    /**
     * Reference to an asset via its path in a datastore.
     */
    export interface DataPathAssetReferenceResponse {
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: string;
        /**
         * The path of the file/directory in the datastore.
         */
        path?: string;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'DataPath'.
         */
        referenceType: "DataPath";
    }

    export interface DataQualityMonitoringSignalResponse {
        /**
         * [Required] The data to calculate drift against.
         */
        baselineData: MonitoringInputDataResponse;
        /**
         * The features to calculate drift over.
         */
        features?: AllFeaturesResponse | FeatureSubsetResponse | TopNFeaturesByAttributionResponse;
        /**
         * The amount of time a single monitor should look back over the target data on a given run.
         */
        lookbackPeriod?: string;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThresholds: (CategoricalDataQualityMetricThresholdResponse | NumericalDataQualityMetricThresholdResponse)[];
        /**
         * The current notification mode for this signal.
         */
        mode?: string;
        /**
         *
         * Expected value is 'DataQuality'.
         */
        signalType: "DataQuality";
        /**
         * [Required] The data produced by the production service which drift will be calculated for.
         */
        targetData: MonitoringInputDataResponse;
    }
    /**
     * dataQualityMonitoringSignalResponseProvideDefaults sets the appropriate defaults for DataQualityMonitoringSignalResponse
     */
    export function dataQualityMonitoringSignalResponseProvideDefaults(val: DataQualityMonitoringSignalResponse): DataQualityMonitoringSignalResponse {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    export interface DatabaseSourceResponse {
        /**
         * Workspace connection for data import source storage
         */
        connection?: string;
        /**
         * SQL Query statement for data import Database source
         */
        query?: string;
        /**
         * Enum to determine the type of data.
         * Expected value is 'database'.
         */
        sourceType: "database";
        /**
         * SQL StoredProcedure on data import Database source
         */
        storedProcedure?: string;
        /**
         * SQL StoredProcedure parameters
         */
        storedProcedureParams?: {[key: string]: string}[];
        /**
         * Name of the table on data import Database source
         */
        tableName?: string;
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

    export interface DefaultScaleSettingsResponse {
        /**
         *
         * Expected value is 'Default'.
         */
        scaleType: "Default";
    }

    export interface DeploymentResourceConfigurationResponse {
        /**
         * Optional number of instances or nodes used by the compute target.
         */
        instanceCount?: number;
        /**
         * Optional type of VM used as supported by the compute target.
         */
        instanceType?: string;
        /**
         * Locations where the job can run.
         */
        locations?: string[];
        /**
         * Optional max allowed number of instances or nodes to be used by the compute target.
         * For use with elastic training, currently supported by PyTorch distribution type only.
         */
        maxInstanceCount?: number;
        /**
         * Additional properties bag.
         */
        properties?: {[key: string]: any};
    }
    /**
     * deploymentResourceConfigurationResponseProvideDefaults sets the appropriate defaults for DeploymentResourceConfigurationResponse
     */
    export function deploymentResourceConfigurationResponseProvideDefaults(val: DeploymentResourceConfigurationResponse): DeploymentResourceConfigurationResponse {
        return {
            ...val,
            instanceCount: (val.instanceCount) ?? 1,
        };
    }

    export interface DockerResponse {
        /**
         * Indicate whether container shall run in privileged or non-privileged mode.
         */
        privileged?: boolean;
    }

    export interface EmailMonitoringAlertNotificationSettingsResponse {
        /**
         *
         * Expected value is 'Email'.
         */
        alertNotificationType: "Email";
        /**
         * Configuration for notification.
         */
        emailNotificationSetting?: NotificationSettingResponse;
    }

    export interface EncryptionKeyVaultPropertiesResponse {
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

    export interface EncryptionPropertyResponse {
        /**
         * The identity that will be used to access the key vault for encryption at rest.
         */
        identity?: IdentityForCmkResponse;
        /**
         * Customer Key vault properties.
         */
        keyVaultProperties: EncryptionKeyVaultPropertiesResponse;
        /**
         * Indicates whether or not the encryption is enabled for the workspace.
         */
        status: string;
    }

    export interface EndpointResponse {
        /**
         * Host IP over which the application is exposed from the container
         */
        hostIp?: string;
        /**
         * Name of the Endpoint
         */
        name?: string;
        /**
         * Protocol over which communication will happen over this endpoint
         */
        protocol?: string;
        /**
         * Port over which the application is exposed from container.
         */
        published?: number;
        /**
         * Application port inside the container.
         */
        target?: number;
    }
    /**
     * endpointResponseProvideDefaults sets the appropriate defaults for EndpointResponse
     */
    export function endpointResponseProvideDefaults(val: EndpointResponse): EndpointResponse {
        return {
            ...val,
            protocol: (val.protocol) ?? "tcp",
        };
    }

    export interface EndpointScheduleActionResponse {
        /**
         *
         * Expected value is 'InvokeBatchEndpoint'.
         */
        actionType: "InvokeBatchEndpoint";
        /**
         * [Required] Defines Schedule action definition details.
         * <see href="TBD" />
         */
        endpointInvocationDefinition: any;
    }

    /**
     * Container for environment specification versions.
     */
    export interface EnvironmentContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the environment container.
         */
        provisioningState: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * environmentContainerResponseProvideDefaults sets the appropriate defaults for EnvironmentContainerResponse
     */
    export function environmentContainerResponseProvideDefaults(val: EnvironmentContainerResponse): EnvironmentContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface EnvironmentVariableResponse {
        /**
         * Type of the Environment Variable. Possible values are: local - For local variable
         */
        type?: string;
        /**
         * Value of the Environment variable
         */
        value?: string;
    }
    /**
     * environmentVariableResponseProvideDefaults sets the appropriate defaults for EnvironmentVariableResponse
     */
    export function environmentVariableResponseProvideDefaults(val: EnvironmentVariableResponse): EnvironmentVariableResponse {
        return {
            ...val,
            type: (val.type) ?? "local",
        };
    }

    /**
     * Environment version details.
     */
    export interface EnvironmentVersionResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Defines if image needs to be rebuilt based on base image changes.
         */
        autoRebuild?: string;
        /**
         * Configuration settings for Docker build context.
         */
        build?: BuildContextResponse;
        /**
         * Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.
         * <see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" />
         */
        condaFile?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Environment type is either user managed or curated by the Azure ML service
         * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/resource-curated-environments" />
         */
        environmentType: string;
        /**
         * Name of the image that will be used for the environment.
         * <seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
         */
        image?: string;
        /**
         * Defines configuration specific to inference.
         */
        inferenceConfig?: InferenceContainerPropertiesResponse;
        /**
         * Intellectual Property details. Used if environment is an Intellectual Property.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * The OS type of the environment.
         */
        osType?: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the environment version.
         */
        provisioningState: string;
        /**
         * Stage in the environment lifecycle assigned to this environment
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * environmentVersionResponseProvideDefaults sets the appropriate defaults for EnvironmentVersionResponse
     */
    export function environmentVersionResponseProvideDefaults(val: EnvironmentVersionResponse): EnvironmentVersionResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            autoRebuild: (val.autoRebuild) ?? "Disabled",
            build: (val.build ? buildContextResponseProvideDefaults(val.build) : undefined),
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
            osType: (val.osType) ?? "Linux",
        };
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

    export interface FeatureAttributionDriftMonitoringSignalResponse {
        /**
         * [Required] The data to calculate drift against.
         */
        baselineData: MonitoringInputDataResponse;
        /**
         * The amount of time a single monitor should look back over the target data on a given run.
         */
        lookbackPeriod?: string;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThreshold: FeatureAttributionMetricThresholdResponse;
        /**
         * The current notification mode for this signal.
         */
        mode?: string;
        /**
         * [Required] The type of task the model performs.
         */
        modelType: string;
        /**
         *
         * Expected value is 'FeatureAttributionDrift'.
         */
        signalType: "FeatureAttributionDrift";
        /**
         * [Required] The data which drift will be calculated for.
         */
        targetData: MonitoringInputDataResponse;
    }
    /**
     * featureAttributionDriftMonitoringSignalResponseProvideDefaults sets the appropriate defaults for FeatureAttributionDriftMonitoringSignalResponse
     */
    export function featureAttributionDriftMonitoringSignalResponseProvideDefaults(val: FeatureAttributionDriftMonitoringSignalResponse): FeatureAttributionDriftMonitoringSignalResponse {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    export interface FeatureAttributionMetricThresholdResponse {
        /**
         * [Required] The feature attribution metric to calculate.
         */
        metric: string;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    export interface FeatureStoreSettingsResponse {
        computeRuntime?: ComputeRuntimeDtoResponse;
        offlineStoreConnectionName?: string;
        onlineStoreConnectionName?: string;
    }

    export interface FeatureSubsetResponse {
        /**
         * [Required] The list of features to include.
         */
        features: string[];
        /**
         *
         * Expected value is 'FeatureSubset'.
         */
        filterType: "FeatureSubset";
    }

    /**
     * Specifies the feature window
     */
    export interface FeatureWindowResponse {
        /**
         * Specifies the feature window end time
         */
        featureWindowEnd?: string;
        /**
         * Specifies the feature window start time
         */
        featureWindowStart?: string;
    }

    /**
     * Dto object representing feature set
     */
    export interface FeaturesetContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the featureset container.
         */
        provisioningState: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * featuresetContainerResponseProvideDefaults sets the appropriate defaults for FeaturesetContainerResponse
     */
    export function featuresetContainerResponseProvideDefaults(val: FeaturesetContainerResponse): FeaturesetContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Dto object representing the feature set job
     */
    export interface FeaturesetJobResponse {
        /**
         * Specifies the created date
         */
        createdDate?: string;
        /**
         * Specifies the display name
         */
        displayName?: string;
        /**
         * Specifies the duration
         */
        duration?: string;
        /**
         * Specifies the experiment id
         */
        experimentId?: string;
        /**
         * Specifies the backfill feature window to be materialized
         */
        featureWindow?: FeatureWindowResponse;
        /**
         * Specifies the job id
         */
        jobId?: string;
        /**
         * Specifies the job status
         */
        status?: string;
        /**
         * Specifies the tags if any
         */
        tags?: {[key: string]: string};
        /**
         * Specifies the feature store job type
         */
        type?: string;
    }
    /**
     * featuresetJobResponseProvideDefaults sets the appropriate defaults for FeaturesetJobResponse
     */
    export function featuresetJobResponseProvideDefaults(val: FeaturesetJobResponse): FeaturesetJobResponse {
        return {
            ...val,
            status: (val.status) ?? "Unknown",
            type: (val.type) ?? "RecurrentMaterialization",
        };
    }

    /**
     * Dto object representing specification
     */
    export interface FeaturesetSpecificationResponse {
        /**
         * Specifies the spec path
         */
        path?: string;
    }

    /**
     * Dto object representing feature set version
     */
    export interface FeaturesetVersionResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Specifies list of entities
         */
        entities?: string[];
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * Specifies the materialization settings
         */
        materializationSettings?: MaterializationSettingsResponse;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the featureset version container.
         */
        provisioningState: string;
        /**
         * Specifies the feature spec details
         */
        specification?: FeaturesetSpecificationResponse;
        /**
         * Specifies the asset stage
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * featuresetVersionResponseProvideDefaults sets the appropriate defaults for FeaturesetVersionResponse
     */
    export function featuresetVersionResponseProvideDefaults(val: FeaturesetVersionResponse): FeaturesetVersionResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
            materializationSettings: (val.materializationSettings ? materializationSettingsResponseProvideDefaults(val.materializationSettings) : undefined),
        };
    }

    /**
     * Dto object representing feature entity
     */
    export interface FeaturestoreEntityContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the featurestore entity container.
         */
        provisioningState: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * featurestoreEntityContainerResponseProvideDefaults sets the appropriate defaults for FeaturestoreEntityContainerResponse
     */
    export function featurestoreEntityContainerResponseProvideDefaults(val: FeaturestoreEntityContainerResponse): FeaturestoreEntityContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Dto object representing feature entity version
     */
    export interface FeaturestoreEntityVersionResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Specifies index columns
         */
        indexColumns?: IndexColumnResponse[];
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the featurestore entity version.
         */
        provisioningState: string;
        /**
         * Specifies the asset stage
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * featurestoreEntityVersionResponseProvideDefaults sets the appropriate defaults for FeaturestoreEntityVersionResponse
     */
    export function featurestoreEntityVersionResponseProvideDefaults(val: FeaturestoreEntityVersionResponse): FeaturestoreEntityVersionResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface FileSystemSourceResponse {
        /**
         * Workspace connection for data import source storage
         */
        connection?: string;
        /**
         * Path on data import FileSystem source
         */
        path?: string;
        /**
         * Enum to determine the type of data.
         * Expected value is 'file_system'.
         */
        sourceType: "file_system";
    }

    export interface FlavorDataResponse {
        /**
         * Model flavor-specific data.
         */
        data?: {[key: string]: string};
    }

    /**
     * Forecasting task in AutoML Table vertical.
     */
    export interface ForecastingResponse {
        /**
         * Columns to use for CVSplit data.
         */
        cvSplitColumnNames?: string[];
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: TableVerticalFeaturizationSettingsResponse;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: TableFixedParametersResponse;
        /**
         * Forecasting task specific inputs.
         */
        forecastingSettings?: ForecastingSettingsResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: TableVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Number of cross validation folds to be applied on training dataset
         * when validation dataset is not provided.
         */
        nCrossValidations?: AutoNCrossValidationsResponse | CustomNCrossValidationsResponse;
        /**
         * Primary metric for forecasting task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: TableParameterSubspaceResponse[];
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: TableSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Forecasting'.
         */
        taskType: "Forecasting";
        /**
         * Test data input.
         */
        testData?: MLTableJobInputResponse;
        /**
         * The fraction of test dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        testDataSize?: number;
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: ForecastingTrainingSettingsResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
        /**
         * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
         */
        weightColumnName?: string;
    }
    /**
     * forecastingResponseProvideDefaults sets the appropriate defaults for ForecastingResponse
     */
    export function forecastingResponseProvideDefaults(val: ForecastingResponse): ForecastingResponse {
        return {
            ...val,
            featurizationSettings: (val.featurizationSettings ? tableVerticalFeaturizationSettingsResponseProvideDefaults(val.featurizationSettings) : undefined),
            fixedParameters: (val.fixedParameters ? tableFixedParametersResponseProvideDefaults(val.fixedParameters) : undefined),
            forecastingSettings: (val.forecastingSettings ? forecastingSettingsResponseProvideDefaults(val.forecastingSettings) : undefined),
            limitSettings: (val.limitSettings ? tableVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
            testData: (val.testData ? mltableJobInputResponseProvideDefaults(val.testData) : undefined),
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            trainingSettings: (val.trainingSettings ? forecastingTrainingSettingsResponseProvideDefaults(val.trainingSettings) : undefined),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Forecasting specific parameters.
     */
    export interface ForecastingSettingsResponse {
        /**
         * Country or region for holidays for forecasting tasks.
         * These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'.
         */
        countryOrRegionForHolidays?: string;
        /**
         * Number of periods between the origin time of one CV fold and the next fold. For
         * example, if `CVStepSize` = 3 for daily data, the origin time for each fold will be
         * three days apart.
         */
        cvStepSize?: number;
        /**
         * Flag for generating lags for the numeric features with 'auto' or null.
         */
        featureLags?: string;
        /**
         * The feature columns that are available for training but unknown at the time of forecast/inference.
         * If features_unknown_at_forecast_time is not set, it is assumed that all the feature columns in the dataset are known at inference time.
         */
        featuresUnknownAtForecastTime?: string[];
        /**
         * The desired maximum forecast horizon in units of time-series frequency.
         */
        forecastHorizon?: AutoForecastHorizonResponse | CustomForecastHorizonResponse;
        /**
         * When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default.
         */
        frequency?: string;
        /**
         * Set time series seasonality as an integer multiple of the series frequency.
         * If seasonality is set to 'auto', it will be inferred.
         */
        seasonality?: AutoSeasonalityResponse | CustomSeasonalityResponse;
        /**
         * The parameter defining how if AutoML should handle short time series.
         */
        shortSeriesHandlingConfig?: string;
        /**
         * The function to be used to aggregate the time series target column to conform to a user specified frequency.
         * If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean".
         */
        targetAggregateFunction?: string;
        /**
         * The number of past periods to lag from the target column.
         */
        targetLags?: AutoTargetLagsResponse | CustomTargetLagsResponse;
        /**
         * The number of past periods used to create a rolling window average of the target column.
         */
        targetRollingWindowSize?: AutoTargetRollingWindowSizeResponse | CustomTargetRollingWindowSizeResponse;
        /**
         * The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency.
         */
        timeColumnName?: string;
        /**
         * The names of columns used to group a timeseries. It can be used to create multiple series.
         * If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting.
         */
        timeSeriesIdColumnNames?: string[];
        /**
         * Configure STL Decomposition of the time-series target column.
         */
        useStl?: string;
    }
    /**
     * forecastingSettingsResponseProvideDefaults sets the appropriate defaults for ForecastingSettingsResponse
     */
    export function forecastingSettingsResponseProvideDefaults(val: ForecastingSettingsResponse): ForecastingSettingsResponse {
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
    export interface ForecastingTrainingSettingsResponse {
        /**
         * Allowed models for forecasting task.
         */
        allowedTrainingAlgorithms?: string[];
        /**
         * Blocked models for forecasting task.
         */
        blockedTrainingAlgorithms?: string[];
        /**
         * Enable recommendation of DNN models.
         */
        enableDnnTraining?: boolean;
        /**
         * Flag to turn on explainability on best model.
         */
        enableModelExplainability?: boolean;
        /**
         * Flag for enabling onnx compatible models.
         */
        enableOnnxCompatibleModels?: boolean;
        /**
         * Enable stack ensemble run.
         */
        enableStackEnsemble?: boolean;
        /**
         * Enable voting ensemble run.
         */
        enableVoteEnsemble?: boolean;
        /**
         * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
         * Configure this parameter with a higher value than 300 secs, if more time is needed.
         */
        ensembleModelDownloadTimeout?: string;
        /**
         * Stack ensemble settings for stack ensemble run.
         */
        stackEnsembleSettings?: StackEnsembleSettingsResponse;
        /**
         * TrainingMode mode - Setting to 'auto' is same as setting it to 'non-distributed' for now, however in the future may result in mixed mode or heuristics based mode selection. Default is 'auto'.
         * If 'Distributed' then only distributed featurization is used and distributed algorithms are chosen.
         * If 'NonDistributed' then only non distributed algorithms are chosen.
         */
        trainingMode?: string;
    }
    /**
     * forecastingTrainingSettingsResponseProvideDefaults sets the appropriate defaults for ForecastingTrainingSettingsResponse
     */
    export function forecastingTrainingSettingsResponseProvideDefaults(val: ForecastingTrainingSettingsResponse): ForecastingTrainingSettingsResponse {
        return {
            ...val,
            enableDnnTraining: (val.enableDnnTraining) ?? false,
            enableModelExplainability: (val.enableModelExplainability) ?? true,
            enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
            enableStackEnsemble: (val.enableStackEnsemble) ?? true,
            enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
            ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
            stackEnsembleSettings: (val.stackEnsembleSettings ? stackEnsembleSettingsResponseProvideDefaults(val.stackEnsembleSettings) : undefined),
            trainingMode: (val.trainingMode) ?? "Auto",
        };
    }

    /**
     * FQDN Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface FqdnOutboundRuleResponse {
        /**
         * Category of a managed network Outbound Rule of a machine learning workspace.
         */
        category?: string;
        destination?: string;
        /**
         * Status of a managed network Outbound Rule of a machine learning workspace.
         */
        status?: string;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         * Expected value is 'FQDN'.
         */
        type: "FQDN";
    }

    /**
     * Defines a Sampling Algorithm that exhaustively generates every value combination in the space
     */
    export interface GridSamplingAlgorithmResponse {
        /**
         *
         * Expected value is 'Grid'.
         */
        samplingAlgorithmType: "Grid";
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

    export interface HdfsDatastoreResponse {
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'Hdfs'.
         */
        datastoreType: "Hdfs";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * The TLS cert of the HDFS server. Needs to be a base64 encoded string. Required if "Https" protocol is selected.
         */
        hdfsServerCertificate?: string;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * [Required] IP Address or DNS HostName.
         */
        nameNodeAddress: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Protocol used to communicate with the storage account (Https/Http).
         */
        protocol?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * hdfsDatastoreResponseProvideDefaults sets the appropriate defaults for HdfsDatastoreResponse
     */
    export function hdfsDatastoreResponseProvideDefaults(val: HdfsDatastoreResponse): HdfsDatastoreResponse {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            protocol: (val.protocol) ?? "http",
        };
    }

    /**
     * Reference to an asset via its ARM resource ID.
     */
    export interface IdAssetReferenceResponse {
        /**
         * [Required] ARM resource ID of the asset.
         */
        assetId: string;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'Id'.
         */
        referenceType: "Id";
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
     * Image Classification Multilabel. Multi-label image classification is used when an image could have one or more labels
     * from a set of labels - e.g. an image could be labeled with both 'cat' and 'dog'.
     */
    export interface ImageClassificationMultilabelResponse {
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: ImageLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Settings used for training the model.
         */
        modelSettings?: ImageModelSettingsClassificationResponse;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: ImageModelDistributionSettingsClassificationResponse[];
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: ImageSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageClassificationMultilabel'.
         */
        taskType: "ImageClassificationMultilabel";
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
    }
    /**
     * imageClassificationMultilabelResponseProvideDefaults sets the appropriate defaults for ImageClassificationMultilabelResponse
     */
    export function imageClassificationMultilabelResponseProvideDefaults(val: ImageClassificationMultilabelResponse): ImageClassificationMultilabelResponse {
        return {
            ...val,
            limitSettings: imageLimitSettingsResponseProvideDefaults(val.limitSettings),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? imageModelSettingsClassificationResponseProvideDefaults(val.modelSettings) : undefined),
            primaryMetric: (val.primaryMetric) ?? "IOU",
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Image Classification. Multi-class image classification is used when an image is classified with only a single label
     * from a set of classes - e.g. each image is classified as either an image of a 'cat' or a 'dog' or a 'duck'.
     */
    export interface ImageClassificationResponse {
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: ImageLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Settings used for training the model.
         */
        modelSettings?: ImageModelSettingsClassificationResponse;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: ImageModelDistributionSettingsClassificationResponse[];
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: ImageSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageClassification'.
         */
        taskType: "ImageClassification";
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
    }
    /**
     * imageClassificationResponseProvideDefaults sets the appropriate defaults for ImageClassificationResponse
     */
    export function imageClassificationResponseProvideDefaults(val: ImageClassificationResponse): ImageClassificationResponse {
        return {
            ...val,
            limitSettings: imageLimitSettingsResponseProvideDefaults(val.limitSettings),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? imageModelSettingsClassificationResponseProvideDefaults(val.modelSettings) : undefined),
            primaryMetric: (val.primaryMetric) ?? "Accuracy",
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Image Instance Segmentation. Instance segmentation is used to identify objects in an image at the pixel level,
     * drawing a polygon around each object in the image.
     */
    export interface ImageInstanceSegmentationResponse {
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: ImageLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Settings used for training the model.
         */
        modelSettings?: ImageModelSettingsObjectDetectionResponse;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: ImageModelDistributionSettingsObjectDetectionResponse[];
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: ImageSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageInstanceSegmentation'.
         */
        taskType: "ImageInstanceSegmentation";
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
    }
    /**
     * imageInstanceSegmentationResponseProvideDefaults sets the appropriate defaults for ImageInstanceSegmentationResponse
     */
    export function imageInstanceSegmentationResponseProvideDefaults(val: ImageInstanceSegmentationResponse): ImageInstanceSegmentationResponse {
        return {
            ...val,
            limitSettings: imageLimitSettingsResponseProvideDefaults(val.limitSettings),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? imageModelSettingsObjectDetectionResponseProvideDefaults(val.modelSettings) : undefined),
            primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Limit settings for the AutoML job.
     */
    export interface ImageLimitSettingsResponse {
        /**
         * Maximum number of concurrent AutoML iterations.
         */
        maxConcurrentTrials?: number;
        /**
         * Maximum number of AutoML iterations.
         */
        maxTrials?: number;
        /**
         * AutoML job timeout.
         */
        timeout?: string;
    }
    /**
     * imageLimitSettingsResponseProvideDefaults sets the appropriate defaults for ImageLimitSettingsResponse
     */
    export function imageLimitSettingsResponseProvideDefaults(val: ImageLimitSettingsResponse): ImageLimitSettingsResponse {
        return {
            ...val,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxTrials: (val.maxTrials) ?? 1,
            timeout: (val.timeout) ?? "P7D",
        };
    }

    /**
     * Returns metadata about the operating system image for this compute instance.
     */
    export interface ImageMetadataResponse {
        /**
         * Specifies the current operating system image version this compute instance is running on.
         */
        currentImageVersion?: string;
        /**
         * Specifies whether this compute instance is running on the latest operating system image.
         */
        isLatestOsImageVersion?: boolean;
        /**
         * Specifies the latest available operating system image version.
         */
        latestImageVersion?: string;
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
    export interface ImageModelDistributionSettingsClassificationResponse {
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: string;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: string;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: string;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: string;
        /**
         * Whether to use distributer training.
         */
        distributed?: string;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: string;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: string;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: string;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: string;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: string;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: string;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: string;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: string;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: string;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: string;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: string;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: string;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: string;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: string;
        /**
         * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
         */
        optimizer?: string;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: string;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: string;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: string;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: string;
        /**
         * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
         */
        trainingCropSize?: string;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: string;
        /**
         * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
         */
        validationCropSize?: string;
        /**
         * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
         */
        validationResizeSize?: string;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: string;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: string;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: string;
        /**
         * Weighted loss. The accepted values are 0 for no weighted loss.
         * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
         */
        weightedLoss?: string;
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
    export interface ImageModelDistributionSettingsObjectDetectionResponse {
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: string;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: string;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: string;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: string;
        /**
         * Maximum number of detections per image, for all classes. Must be a positive integer.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        boxDetectionsPerImage?: string;
        /**
         * During inference, only return proposals with a classification score greater than
         * BoxScoreThreshold. Must be a float in the range[0, 1].
         */
        boxScoreThreshold?: string;
        /**
         * Whether to use distributer training.
         */
        distributed?: string;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: string;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: string;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: string;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: string;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: string;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: string;
        /**
         * Image size for train and validation. Must be a positive integer.
         * Note: The training run may get into CUDA OOM if the size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        imageSize?: string;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: string;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: string;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: string;
        /**
         * Maximum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        maxSize?: string;
        /**
         * Minimum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        minSize?: string;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: string;
        /**
         * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
         * Note: training run may get into CUDA OOM if the model size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        modelSize?: string;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: string;
        /**
         * Enable multi-scale image by varying image size by +/- 50%.
         * Note: training run may get into CUDA OOM if no sufficient GPU memory.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        multiScale?: string;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: string;
        /**
         * IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1].
         */
        nmsIouThreshold?: string;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: string;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: string;
        /**
         * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
         */
        optimizer?: string;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: string;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: string;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: string;
        /**
         * The grid size to use for tiling each image. Note: TileGridSize must not be
         * None to enable small object detection logic. A string containing two integers in mxn format.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileGridSize?: string;
        /**
         * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileOverlapRatio?: string;
        /**
         * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
         * Used in validation/ inference. Must be float in the range [0, 1].
         * Note: This settings is not supported for the 'yolov5' algorithm.
         * NMS: Non-maximum suppression
         */
        tilePredictionsNmsThreshold?: string;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: string;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: string;
        /**
         * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
         */
        validationIouThreshold?: string;
        /**
         * Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'.
         */
        validationMetricType?: string;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: string;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: string;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: string;
    }

    /**
     * Settings used for training the model.
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelSettingsClassificationResponse {
        /**
         * Settings for advanced scenarios.
         */
        advancedSettings?: string;
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: boolean;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: string;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: number;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: number;
        /**
         * Frequency to store model checkpoints. Must be a positive integer.
         */
        checkpointFrequency?: number;
        /**
         * The pretrained checkpoint model for incremental training.
         */
        checkpointModel?: MLFlowModelJobInputResponse;
        /**
         * The id of a previous run that has a pretrained checkpoint for incremental training.
         */
        checkpointRunId?: string;
        /**
         * Whether to use distributed training.
         */
        distributed?: boolean;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: boolean;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: number;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: number;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: boolean;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: number;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: number;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: number;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: number;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: string;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: string;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: number;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: boolean;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: number;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: number;
        /**
         * Type of optimizer.
         */
        optimizer?: string;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: number;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: number;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: number;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: number;
        /**
         * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
         */
        trainingCropSize?: number;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: number;
        /**
         * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
         */
        validationCropSize?: number;
        /**
         * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
         */
        validationResizeSize?: number;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: number;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: number;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: number;
        /**
         * Weighted loss. The accepted values are 0 for no weighted loss.
         * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
         */
        weightedLoss?: number;
    }
    /**
     * imageModelSettingsClassificationResponseProvideDefaults sets the appropriate defaults for ImageModelSettingsClassificationResponse
     */
    export function imageModelSettingsClassificationResponseProvideDefaults(val: ImageModelSettingsClassificationResponse): ImageModelSettingsClassificationResponse {
        return {
            ...val,
            checkpointModel: (val.checkpointModel ? mlflowModelJobInputResponseProvideDefaults(val.checkpointModel) : undefined),
            learningRateScheduler: (val.learningRateScheduler) ?? "None",
            optimizer: (val.optimizer) ?? "None",
        };
    }

    /**
     * Settings used for training the model.
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelSettingsObjectDetectionResponse {
        /**
         * Settings for advanced scenarios.
         */
        advancedSettings?: string;
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: boolean;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: string;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: number;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: number;
        /**
         * Maximum number of detections per image, for all classes. Must be a positive integer.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        boxDetectionsPerImage?: number;
        /**
         * During inference, only return proposals with a classification score greater than
         * BoxScoreThreshold. Must be a float in the range[0, 1].
         */
        boxScoreThreshold?: number;
        /**
         * Frequency to store model checkpoints. Must be a positive integer.
         */
        checkpointFrequency?: number;
        /**
         * The pretrained checkpoint model for incremental training.
         */
        checkpointModel?: MLFlowModelJobInputResponse;
        /**
         * The id of a previous run that has a pretrained checkpoint for incremental training.
         */
        checkpointRunId?: string;
        /**
         * Whether to use distributed training.
         */
        distributed?: boolean;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: boolean;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: number;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: number;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: boolean;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: number;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: number;
        /**
         * Image size for train and validation. Must be a positive integer.
         * Note: The training run may get into CUDA OOM if the size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        imageSize?: number;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: number;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: number;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: string;
        /**
         * Enable computing and logging training metrics.
         */
        logTrainingMetrics?: string;
        /**
         * Enable computing and logging validation loss.
         */
        logValidationLoss?: string;
        /**
         * Maximum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        maxSize?: number;
        /**
         * Minimum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        minSize?: number;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: string;
        /**
         * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
         * Note: training run may get into CUDA OOM if the model size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        modelSize?: string;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: number;
        /**
         * Enable multi-scale image by varying image size by +/- 50%.
         * Note: training run may get into CUDA OOM if no sufficient GPU memory.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        multiScale?: boolean;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: boolean;
        /**
         * IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1].
         */
        nmsIouThreshold?: number;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: number;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: number;
        /**
         * Type of optimizer.
         */
        optimizer?: string;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: number;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: number;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: number;
        /**
         * The grid size to use for tiling each image. Note: TileGridSize must not be
         * None to enable small object detection logic. A string containing two integers in mxn format.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileGridSize?: string;
        /**
         * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileOverlapRatio?: number;
        /**
         * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
         * Used in validation/ inference. Must be float in the range [0, 1].
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tilePredictionsNmsThreshold?: number;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: number;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: number;
        /**
         * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
         */
        validationIouThreshold?: number;
        /**
         * Metric computation method to use for validation metrics.
         */
        validationMetricType?: string;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: number;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: number;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: number;
    }
    /**
     * imageModelSettingsObjectDetectionResponseProvideDefaults sets the appropriate defaults for ImageModelSettingsObjectDetectionResponse
     */
    export function imageModelSettingsObjectDetectionResponseProvideDefaults(val: ImageModelSettingsObjectDetectionResponse): ImageModelSettingsObjectDetectionResponse {
        return {
            ...val,
            checkpointModel: (val.checkpointModel ? mlflowModelJobInputResponseProvideDefaults(val.checkpointModel) : undefined),
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
    export interface ImageObjectDetectionResponse {
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: ImageLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Settings used for training the model.
         */
        modelSettings?: ImageModelSettingsObjectDetectionResponse;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: ImageModelDistributionSettingsObjectDetectionResponse[];
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: ImageSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageObjectDetection'.
         */
        taskType: "ImageObjectDetection";
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
    }
    /**
     * imageObjectDetectionResponseProvideDefaults sets the appropriate defaults for ImageObjectDetectionResponse
     */
    export function imageObjectDetectionResponseProvideDefaults(val: ImageObjectDetectionResponse): ImageObjectDetectionResponse {
        return {
            ...val,
            limitSettings: imageLimitSettingsResponseProvideDefaults(val.limitSettings),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? imageModelSettingsObjectDetectionResponseProvideDefaults(val.modelSettings) : undefined),
            primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    export interface ImageResponse {
        /**
         * Image reference URL
         */
        reference?: string;
        /**
         * Type of the image. Possible values are: docker - For docker images. azureml - For AzureML images
         */
        type?: string;
    }
    /**
     * imageResponseProvideDefaults sets the appropriate defaults for ImageResponse
     */
    export function imageResponseProvideDefaults(val: ImageResponse): ImageResponse {
        return {
            ...val,
            type: (val.type) ?? "docker",
        };
    }

    /**
     * Model sweeping and hyperparameter sweeping related settings.
     */
    export interface ImageSweepSettingsResponse {
        /**
         * Type of early termination policy.
         */
        earlyTermination?: BanditPolicyResponse | MedianStoppingPolicyResponse | TruncationSelectionPolicyResponse;
        /**
         * [Required] Type of the hyperparameter sampling algorithms.
         */
        samplingAlgorithm: string;
    }

    export interface ImportDataActionResponse {
        /**
         *
         * Expected value is 'ImportData'.
         */
        actionType: "ImportData";
        /**
         * [Required] Defines Schedule action definition details.
         */
        dataImportDefinition: DataImportResponse;
    }
    /**
     * importDataActionResponseProvideDefaults sets the appropriate defaults for ImportDataActionResponse
     */
    export function importDataActionResponseProvideDefaults(val: ImportDataActionResponse): ImportDataActionResponse {
        return {
            ...val,
            dataImportDefinition: dataImportResponseProvideDefaults(val.dataImportDefinition),
        };
    }

    /**
     * Dto object representing index column
     */
    export interface IndexColumnResponse {
        /**
         * Specifies the column name
         */
        columnName?: string;
        /**
         * Specifies the data type
         */
        dataType?: string;
    }
    /**
     * indexColumnResponseProvideDefaults sets the appropriate defaults for IndexColumnResponse
     */
    export function indexColumnResponseProvideDefaults(val: IndexColumnResponse): IndexColumnResponse {
        return {
            ...val,
            dataType: (val.dataType) ?? "String",
        };
    }

    export interface InferenceContainerPropertiesResponse {
        /**
         * The route to check the liveness of the inference server container.
         */
        livenessRoute?: RouteResponse;
        /**
         * The route to check the readiness of the inference server container.
         */
        readinessRoute?: RouteResponse;
        /**
         * The port to send the scoring requests to, within the inference server container.
         */
        scoringRoute?: RouteResponse;
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

    /**
     * Intellectual Property details for a resource.
     */
    export interface IntellectualPropertyResponse {
        /**
         * Protection level of the Intellectual Property.
         */
        protectionLevel?: string;
        /**
         * [Required] Publisher of the Intellectual Property. Must be the same as Registry publisher name.
         */
        publisher: string;
    }
    /**
     * intellectualPropertyResponseProvideDefaults sets the appropriate defaults for IntellectualPropertyResponse
     */
    export function intellectualPropertyResponseProvideDefaults(val: IntellectualPropertyResponse): IntellectualPropertyResponse {
        return {
            ...val,
            protectionLevel: (val.protectionLevel) ?? "All",
        };
    }

    export interface JobResourceConfigurationResponse {
        /**
         * Extra arguments to pass to the Docker run command. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types.
         */
        dockerArgs?: string;
        /**
         * Optional number of instances or nodes used by the compute target.
         */
        instanceCount?: number;
        /**
         * Optional type of VM used as supported by the compute target.
         */
        instanceType?: string;
        /**
         * Locations where the job can run.
         */
        locations?: string[];
        /**
         * Optional max allowed number of instances or nodes to be used by the compute target.
         * For use with elastic training, currently supported by PyTorch distribution type only.
         */
        maxInstanceCount?: number;
        /**
         * Additional properties bag.
         */
        properties?: {[key: string]: any};
        /**
         * Size of the docker container's shared memory block. This should be in the format of (number)(unit) where number as to be greater than 0 and the unit can be one of b(bytes), k(kilobytes), m(megabytes), or g(gigabytes).
         */
        shmSize?: string;
    }
    /**
     * jobResourceConfigurationResponseProvideDefaults sets the appropriate defaults for JobResourceConfigurationResponse
     */
    export function jobResourceConfigurationResponseProvideDefaults(val: JobResourceConfigurationResponse): JobResourceConfigurationResponse {
        return {
            ...val,
            instanceCount: (val.instanceCount) ?? 1,
            shmSize: (val.shmSize) ?? "2g",
        };
    }

    export interface JobScheduleActionResponse {
        /**
         *
         * Expected value is 'CreateJob'.
         */
        actionType: "CreateJob";
        /**
         * [Required] Defines Schedule action definition details.
         */
        jobBaseProperties: AutoMLJobResponse | CommandJobResponse | LabelingJobResponse | PipelineJobResponse | SparkJobResponse | SweepJobResponse;
    }

    /**
     * Job endpoint definition
     */
    export interface JobServiceResponse {
        /**
         * Url for endpoint.
         */
        endpoint?: string;
        /**
         * Any error in the service.
         */
        errorMessage: string;
        /**
         * Endpoint type.
         */
        jobServiceType?: string;
        /**
         * Nodes that user would like to start the service on.
         * If Nodes is not set or set to null, the service will only be started on leader node.
         */
        nodes?: AllNodesResponse;
        /**
         * Port for endpoint set by user.
         */
        port?: number;
        /**
         * Additional properties to set on the endpoint.
         */
        properties?: {[key: string]: string};
        /**
         * Status of endpoint.
         */
        status: string;
    }

    export interface KerberosKeytabCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'KerberosKeytab'.
         */
        credentialsType: "KerberosKeytab";
        /**
         * [Required] IP Address or DNS HostName.
         */
        kerberosKdcAddress: string;
        /**
         * [Required] Kerberos Username
         */
        kerberosPrincipal: string;
        /**
         * [Required] Domain over which a Kerberos authentication server has the authority to authenticate a user, host or service.
         */
        kerberosRealm: string;
    }

    export interface KerberosPasswordCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'KerberosPassword'.
         */
        credentialsType: "KerberosPassword";
        /**
         * [Required] IP Address or DNS HostName.
         */
        kerberosKdcAddress: string;
        /**
         * [Required] Kerberos Username
         */
        kerberosPrincipal: string;
        /**
         * [Required] Domain over which a Kerberos authentication server has the authority to authenticate a user, host or service.
         */
        kerberosRealm: string;
    }

    /**
     * Properties specific to a KubernetesOnlineDeployment.
     */
    export interface KubernetesOnlineDeploymentResponse {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: boolean;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: CodeConfigurationResponse;
        /**
         * The resource requirements for the container (cpu and memory).
         */
        containerResourceRequirements?: ContainerResourceRequirementsResponse;
        /**
         * The mdc configuration, we disable mdc when it's null.
         */
        dataCollector?: DataCollectorResponse;
        /**
         * Description of the endpoint deployment.
         */
        description?: string;
        /**
         * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
         */
        egressPublicNetworkAccess?: string;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'Kubernetes'.
         */
        endpointComputeType: "Kubernetes";
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: string;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Compute instance type.
         */
        instanceType?: string;
        /**
         * Liveness probe monitors the health of the container regularly.
         */
        livenessProbe?: ProbeSettingsResponse;
        /**
         * The URI path to the model.
         */
        model?: string;
        /**
         * The path to mount the model in custom container.
         */
        modelMountPath?: string;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint deployment.
         */
        provisioningState: string;
        /**
         * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
         */
        readinessProbe?: ProbeSettingsResponse;
        /**
         * Request settings for the deployment.
         */
        requestSettings?: OnlineRequestSettingsResponse;
        /**
         * Scale settings for the deployment.
         * If it is null or not provided,
         * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
         * and to DefaultScaleSettings for ManagedOnlineDeployment.
         */
        scaleSettings?: DefaultScaleSettingsResponse | TargetUtilizationScaleSettingsResponse;
    }
    /**
     * kubernetesOnlineDeploymentResponseProvideDefaults sets the appropriate defaults for KubernetesOnlineDeploymentResponse
     */
    export function kubernetesOnlineDeploymentResponseProvideDefaults(val: KubernetesOnlineDeploymentResponse): KubernetesOnlineDeploymentResponse {
        return {
            ...val,
            appInsightsEnabled: (val.appInsightsEnabled) ?? false,
            dataCollector: (val.dataCollector ? dataCollectorResponseProvideDefaults(val.dataCollector) : undefined),
            egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
            livenessProbe: (val.livenessProbe ? probeSettingsResponseProvideDefaults(val.livenessProbe) : undefined),
            readinessProbe: (val.readinessProbe ? probeSettingsResponseProvideDefaults(val.readinessProbe) : undefined),
            requestSettings: (val.requestSettings ? onlineRequestSettingsResponseProvideDefaults(val.requestSettings) : undefined),
        };
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

    /**
     * Label category definition
     */
    export interface LabelCategoryResponse {
        /**
         * Dictionary of label classes in this category.
         */
        classes?: {[key: string]: LabelClassResponse};
        /**
         * Display name of the label category.
         */
        displayName?: string;
        /**
         * Indicates whether it is allowed to select multiple classes in this category.
         */
        multiSelect?: string;
    }
    /**
     * labelCategoryResponseProvideDefaults sets the appropriate defaults for LabelCategoryResponse
     */
    export function labelCategoryResponseProvideDefaults(val: LabelCategoryResponse): LabelCategoryResponse {
        return {
            ...val,
            multiSelect: (val.multiSelect) ?? "Disabled",
        };
    }

    /**
     * Label class definition
     */
    export interface LabelClassResponse {
        /**
         * Display name of the label class.
         */
        displayName?: string;
        /**
         * Dictionary of subclasses of the label class.
         */
        subclasses?: {[key: string]: LabelClassResponse};
    }

    /**
     * Labeling data configuration definition
     */
    export interface LabelingDataConfigurationResponse {
        /**
         * Resource Id of the data asset to perform labeling.
         */
        dataId?: string;
        /**
         * Indicates whether to enable incremental data refresh.
         */
        incrementalDataRefresh?: string;
    }
    /**
     * labelingDataConfigurationResponseProvideDefaults sets the appropriate defaults for LabelingDataConfigurationResponse
     */
    export function labelingDataConfigurationResponseProvideDefaults(val: LabelingDataConfigurationResponse): LabelingDataConfigurationResponse {
        return {
            ...val,
            incrementalDataRefresh: (val.incrementalDataRefresh) ?? "Disabled",
        };
    }

    /**
     * Properties of a labeling job for image data
     */
    export interface LabelingJobImagePropertiesResponse {
        /**
         * Annotation type of image labeling job.
         */
        annotationType?: string;
        /**
         * Media type of data asset.
         * Expected value is 'Image'.
         */
        mediaType: "Image";
    }
    /**
     * labelingJobImagePropertiesResponseProvideDefaults sets the appropriate defaults for LabelingJobImagePropertiesResponse
     */
    export function labelingJobImagePropertiesResponseProvideDefaults(val: LabelingJobImagePropertiesResponse): LabelingJobImagePropertiesResponse {
        return {
            ...val,
            annotationType: (val.annotationType) ?? "Classification",
        };
    }

    /**
     * Instructions for labeling job
     */
    export interface LabelingJobInstructionsResponse {
        /**
         * The link to a page with detailed labeling instructions for labelers.
         */
        uri?: string;
    }

    /**
     * Labeling job definition
     */
    export interface LabelingJobResponse {
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: string;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * Created time of the job in UTC timezone.
         */
        createdDateTime: string;
        /**
         * Configuration of data used in the job.
         */
        dataConfiguration?: LabelingDataConfigurationResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Labeling instructions of the job.
         */
        jobInstructions?: LabelingJobInstructionsResponse;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Labeling'.
         */
        jobType: "Labeling";
        /**
         * Label categories of the job.
         */
        labelCategories?: {[key: string]: LabelCategoryResponse};
        /**
         * Media type specific properties in the job.
         */
        labelingJobMediaProperties?: LabelingJobImagePropertiesResponse | LabelingJobTextPropertiesResponse;
        /**
         * Configuration of MLAssist feature in the job.
         */
        mlAssistConfiguration?: MLAssistConfigurationDisabledResponse | MLAssistConfigurationEnabledResponse;
        /**
         * Notification setting for the job
         */
        notificationSetting?: NotificationSettingResponse;
        /**
         * Progress metrics of the job.
         */
        progressMetrics: ProgressMetricsResponse;
        /**
         * Internal id of the job(Previously called project).
         */
        projectId: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Specifies the labeling job provisioning state.
         */
        provisioningState: string;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: {[key: string]: SecretConfigurationResponse};
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Status messages of the job.
         */
        statusMessages: StatusMessageResponse[];
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * labelingJobResponseProvideDefaults sets the appropriate defaults for LabelingJobResponse
     */
    export function labelingJobResponseProvideDefaults(val: LabelingJobResponse): LabelingJobResponse {
        return {
            ...val,
            dataConfiguration: (val.dataConfiguration ? labelingDataConfigurationResponseProvideDefaults(val.dataConfiguration) : undefined),
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Properties of a labeling job for text data
     */
    export interface LabelingJobTextPropertiesResponse {
        /**
         * Annotation type of text labeling job.
         */
        annotationType?: string;
        /**
         * Media type of data asset.
         * Expected value is 'Text'.
         */
        mediaType: "Text";
    }
    /**
     * labelingJobTextPropertiesResponseProvideDefaults sets the appropriate defaults for LabelingJobTextPropertiesResponse
     */
    export function labelingJobTextPropertiesResponseProvideDefaults(val: LabelingJobTextPropertiesResponse): LabelingJobTextPropertiesResponse {
        return {
            ...val,
            annotationType: (val.annotationType) ?? "Classification",
        };
    }

    export interface LakeHouseArtifactResponse {
        /**
         * [Required] OneLake artifact name
         */
        artifactName: string;
        /**
         * Enum to determine OneLake artifact type.
         * Expected value is 'LakeHouse'.
         */
        artifactType: "LakeHouse";
    }

    export interface ListNotebookKeysResultResponse {
        primaryAccessKey: string;
        secondaryAccessKey: string;
    }

    /**
     * Literal input type.
     */
    export interface LiteralJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'literal'.
         */
        jobInputType: "literal";
        /**
         * [Required] Literal value for the input.
         */
        value: string;
    }

    /**
     * Labeling MLAssist configuration definition when MLAssist is disabled
     */
    export interface MLAssistConfigurationDisabledResponse {
        /**
         *
         * Expected value is 'Disabled'.
         */
        mlAssist: "Disabled";
    }

    /**
     * Labeling MLAssist configuration definition when MLAssist is enabled
     */
    export interface MLAssistConfigurationEnabledResponse {
        /**
         * [Required] AML compute binding used in inferencing.
         */
        inferencingComputeBinding: string;
        /**
         *
         * Expected value is 'Enabled'.
         */
        mlAssist: "Enabled";
        /**
         * [Required] AML compute binding used in training.
         */
        trainingComputeBinding: string;
    }

    export interface MLFlowModelJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'mlflow_model'.
         */
        jobInputType: "mlflow_model";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * mlflowModelJobInputResponseProvideDefaults sets the appropriate defaults for MLFlowModelJobInputResponse
     */
    export function mlflowModelJobInputResponseProvideDefaults(val: MLFlowModelJobInputResponse): MLFlowModelJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface MLFlowModelJobOutputResponse {
        /**
         * Output Asset Name.
         */
        assetName?: string;
        /**
         * Output Asset Version.
         */
        assetVersion?: string;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'mlflow_model'.
         */
        jobOutputType: "mlflow_model";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * mlflowModelJobOutputResponseProvideDefaults sets the appropriate defaults for MLFlowModelJobOutputResponse
     */
    export function mlflowModelJobOutputResponseProvideDefaults(val: MLFlowModelJobOutputResponse): MLFlowModelJobOutputResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * MLTable data definition
     */
    export interface MLTableDataResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Enum to determine the type of data.
         * Expected value is 'mltable'.
         */
        dataType: "mltable";
        /**
         * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
         */
        dataUri: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Intellectual Property details. Used if data is an Intellectual Property.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Uris referenced in the MLTable definition (required for lineage)
         */
        referencedUris?: string[];
        /**
         * Stage in the data lifecycle assigned to this data asset
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * mltableDataResponseProvideDefaults sets the appropriate defaults for MLTableDataResponse
     */
    export function mltableDataResponseProvideDefaults(val: MLTableDataResponse): MLTableDataResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface MLTableJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'mltable'.
         */
        jobInputType: "mltable";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * mltableJobInputResponseProvideDefaults sets the appropriate defaults for MLTableJobInputResponse
     */
    export function mltableJobInputResponseProvideDefaults(val: MLTableJobInputResponse): MLTableJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface MLTableJobOutputResponse {
        /**
         * Output Asset Name.
         */
        assetName?: string;
        /**
         * Output Asset Version.
         */
        assetVersion?: string;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'mltable'.
         */
        jobOutputType: "mltable";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * mltableJobOutputResponseProvideDefaults sets the appropriate defaults for MLTableJobOutputResponse
     */
    export function mltableJobOutputResponseProvideDefaults(val: MLTableJobOutputResponse): MLTableJobOutputResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    export interface ManagedIdentityAuthTypeWorkspaceConnectionPropertiesResponse {
        /**
         * Authentication type of the connection target
         * Expected value is 'ManagedIdentity'.
         */
        authType: "ManagedIdentity";
        /**
         * Category of the connection
         */
        category?: string;
        credentials?: WorkspaceConnectionManagedIdentityResponse;
        expiryTime?: string;
        target?: string;
        /**
         * Value details of the workspace connection.
         */
        value?: string;
        /**
         * format for the workspace connection value
         */
        valueFormat?: string;
    }

    /**
     * Managed identity configuration.
     */
    export interface ManagedIdentityResponse {
        /**
         * Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
         */
        clientId?: string;
        /**
         * Enum to determine identity framework.
         * Expected value is 'Managed'.
         */
        identityType: "Managed";
        /**
         * Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
         */
        objectId?: string;
        /**
         * Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.
         */
        resourceId?: string;
    }

    /**
     * Status of the Provisioning for the managed network of a machine learning workspace.
     */
    export interface ManagedNetworkProvisionStatusResponse {
        sparkReady?: boolean;
        /**
         * Status for the managed network of a machine learning workspace.
         */
        status?: string;
    }

    /**
     * Managed Network settings for a machine learning workspace.
     */
    export interface ManagedNetworkSettingsResponse {
        /**
         * Isolation mode for the managed network of a machine learning workspace.
         */
        isolationMode?: string;
        networkId: string;
        outboundRules?: {[key: string]: FqdnOutboundRuleResponse | PrivateEndpointOutboundRuleResponse | ServiceTagOutboundRuleResponse};
        /**
         * Status of the Provisioning for the managed network of a machine learning workspace.
         */
        status?: ManagedNetworkProvisionStatusResponse;
    }

    /**
     * Properties specific to a ManagedOnlineDeployment.
     */
    export interface ManagedOnlineDeploymentResponse {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: boolean;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: CodeConfigurationResponse;
        /**
         * The mdc configuration, we disable mdc when it's null.
         */
        dataCollector?: DataCollectorResponse;
        /**
         * Description of the endpoint deployment.
         */
        description?: string;
        /**
         * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
         */
        egressPublicNetworkAccess?: string;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'Managed'.
         */
        endpointComputeType: "Managed";
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: string;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Compute instance type.
         */
        instanceType?: string;
        /**
         * Liveness probe monitors the health of the container regularly.
         */
        livenessProbe?: ProbeSettingsResponse;
        /**
         * The URI path to the model.
         */
        model?: string;
        /**
         * The path to mount the model in custom container.
         */
        modelMountPath?: string;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint deployment.
         */
        provisioningState: string;
        /**
         * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
         */
        readinessProbe?: ProbeSettingsResponse;
        /**
         * Request settings for the deployment.
         */
        requestSettings?: OnlineRequestSettingsResponse;
        /**
         * Scale settings for the deployment.
         * If it is null or not provided,
         * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
         * and to DefaultScaleSettings for ManagedOnlineDeployment.
         */
        scaleSettings?: DefaultScaleSettingsResponse | TargetUtilizationScaleSettingsResponse;
    }
    /**
     * managedOnlineDeploymentResponseProvideDefaults sets the appropriate defaults for ManagedOnlineDeploymentResponse
     */
    export function managedOnlineDeploymentResponseProvideDefaults(val: ManagedOnlineDeploymentResponse): ManagedOnlineDeploymentResponse {
        return {
            ...val,
            appInsightsEnabled: (val.appInsightsEnabled) ?? false,
            dataCollector: (val.dataCollector ? dataCollectorResponseProvideDefaults(val.dataCollector) : undefined),
            egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
            livenessProbe: (val.livenessProbe ? probeSettingsResponseProvideDefaults(val.livenessProbe) : undefined),
            readinessProbe: (val.readinessProbe ? probeSettingsResponseProvideDefaults(val.readinessProbe) : undefined),
            requestSettings: (val.requestSettings ? onlineRequestSettingsResponseProvideDefaults(val.requestSettings) : undefined),
        };
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
     * Dto object representing compute resource
     */
    export interface MaterializationComputeResourceResponse {
        /**
         * Specifies the instance type
         */
        instanceType?: string;
    }

    export interface MaterializationSettingsResponse {
        /**
         * Specifies the notification details
         */
        notification?: NotificationSettingResponse;
        /**
         * Specifies the compute resource settings
         */
        resource?: MaterializationComputeResourceResponse;
        /**
         * Specifies the schedule details
         */
        schedule?: RecurrenceTriggerResponse;
        /**
         * Specifies the spark compute settings
         */
        sparkConfiguration?: {[key: string]: string};
        /**
         * Specifies the stores to which materialization should happen
         */
        storeType?: string;
    }
    /**
     * materializationSettingsResponseProvideDefaults sets the appropriate defaults for MaterializationSettingsResponse
     */
    export function materializationSettingsResponseProvideDefaults(val: MaterializationSettingsResponse): MaterializationSettingsResponse {
        return {
            ...val,
            schedule: (val.schedule ? recurrenceTriggerResponseProvideDefaults(val.schedule) : undefined),
            storeType: (val.storeType) ?? "None",
        };
    }

    /**
     * Defines an early termination policy based on running averages of the primary metric of all runs
     */
    export interface MedianStoppingPolicyResponse {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: number;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: number;
        /**
         *
         * Expected value is 'MedianStopping'.
         */
        policyType: "MedianStopping";
    }
    /**
     * medianStoppingPolicyResponseProvideDefaults sets the appropriate defaults for MedianStoppingPolicyResponse
     */
    export function medianStoppingPolicyResponseProvideDefaults(val: MedianStoppingPolicyResponse): MedianStoppingPolicyResponse {
        return {
            ...val,
            delayEvaluation: (val.delayEvaluation) ?? 0,
            evaluationInterval: (val.evaluationInterval) ?? 0,
        };
    }

    export interface ModelContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the model container.
         */
        provisioningState: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * modelContainerResponseProvideDefaults sets the appropriate defaults for ModelContainerResponse
     */
    export function modelContainerResponseProvideDefaults(val: ModelContainerResponse): ModelContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface ModelPerformanceSignalBaseResponse {
        /**
         * [Required] The data to calculate drift against.
         */
        baselineData: MonitoringInputDataResponse;
        /**
         * The data segment.
         */
        dataSegment?: MonitoringDataSegmentResponse;
        /**
         * The amount of time a single monitor should look back over the target data on a given run.
         */
        lookbackPeriod?: string;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThreshold: ClassificationModelPerformanceMetricThresholdResponse | RegressionModelPerformanceMetricThresholdResponse;
        /**
         * The current notification mode for this signal.
         */
        mode?: string;
        /**
         *
         * Expected value is 'ModelPerformance'.
         */
        signalType: "ModelPerformance";
        /**
         * [Required] The data produced by the production service which drift will be calculated for.
         */
        targetData: MonitoringInputDataResponse;
    }
    /**
     * modelPerformanceSignalBaseResponseProvideDefaults sets the appropriate defaults for ModelPerformanceSignalBaseResponse
     */
    export function modelPerformanceSignalBaseResponseProvideDefaults(val: ModelPerformanceSignalBaseResponse): ModelPerformanceSignalBaseResponse {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
    }

    /**
     * Model asset version details.
     */
    export interface ModelVersionResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Mapping of model flavors to their properties.
         */
        flavors?: {[key: string]: FlavorDataResponse};
        /**
         * Intellectual Property details. Used if model is an Intellectual Property.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * Name of the training job which produced this model
         */
        jobName?: string;
        /**
         * The storage format for this entity. Used for NCD.
         */
        modelType?: string;
        /**
         * The URI path to the model contents.
         */
        modelUri?: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the model version.
         */
        provisioningState: string;
        /**
         * Stage in the model lifecycle assigned to this model
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * modelVersionResponseProvideDefaults sets the appropriate defaults for ModelVersionResponse
     */
    export function modelVersionResponseProvideDefaults(val: ModelVersionResponse): ModelVersionResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface MonitorDefinitionResponse {
        /**
         * The monitor's notification settings.
         */
        alertNotificationSetting?: AzMonMonitoringAlertNotificationSettingsResponse | EmailMonitoringAlertNotificationSettingsResponse;
        /**
         * [Required] The ARM resource ID of the compute resource to run the monitoring job on.
         */
        computeId: string;
        /**
         * The ARM resource ID of either the model or deployment targeted by this monitor.
         */
        monitoringTarget?: string;
        /**
         * [Required] The signals to monitor.
         */
        signals: {[key: string]: CustomMonitoringSignalResponse | DataDriftMonitoringSignalResponse | DataQualityMonitoringSignalResponse | FeatureAttributionDriftMonitoringSignalResponse | ModelPerformanceSignalBaseResponse | PredictionDriftMonitoringSignalResponse};
    }

    export interface MonitoringDataSegmentResponse {
        /**
         * The feature to segment the data on.
         */
        feature?: string;
        /**
         * Filters for only the specified values of the given segmented feature.
         */
        values?: string[];
    }

    export interface MonitoringInputDataResponse {
        /**
         * The data asset input to be leveraged by the monitoring job..
         */
        asset?: any;
        /**
         * [Required] The context of the data source.
         */
        dataContext: string;
        /**
         * The ARM resource ID of the component resource used to preprocess the data.
         */
        preprocessingComponentId?: string;
        /**
         * The target column in the given data asset to leverage.
         */
        targetColumnName?: string;
    }

    export interface MonitoringThresholdResponse {
        /**
         * The threshold value. If null, the set default is dependent on the metric type.
         */
        value?: number;
    }

    /**
     * MPI distribution configuration.
     */
    export interface MpiResponse {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'Mpi'.
         */
        distributionType: "Mpi";
        /**
         * Number of processes per MPI node.
         */
        processCountPerInstance?: number;
    }

    /**
     * Fixed training parameters that won't be swept over during AutoML NLP training.
     */
    export interface NlpFixedParametersResponse {
        /**
         * Number of steps to accumulate gradients over before running a backward pass.
         */
        gradientAccumulationSteps?: number;
        /**
         * The learning rate for the training procedure.
         */
        learningRate?: number;
        /**
         * The type of learning rate schedule to use during the training procedure.
         */
        learningRateScheduler?: string;
        /**
         * The name of the model to train.
         */
        modelName?: string;
        /**
         * Number of training epochs.
         */
        numberOfEpochs?: number;
        /**
         * The batch size for the training procedure.
         */
        trainingBatchSize?: number;
        /**
         * The batch size to be used during evaluation.
         */
        validationBatchSize?: number;
        /**
         * The warmup ratio, used alongside LrSchedulerType.
         */
        warmupRatio?: number;
        /**
         * The weight decay for the training procedure.
         */
        weightDecay?: number;
    }
    /**
     * nlpFixedParametersResponseProvideDefaults sets the appropriate defaults for NlpFixedParametersResponse
     */
    export function nlpFixedParametersResponseProvideDefaults(val: NlpFixedParametersResponse): NlpFixedParametersResponse {
        return {
            ...val,
            learningRateScheduler: (val.learningRateScheduler) ?? "None",
        };
    }

    /**
     * Stringified search spaces for each parameter. See below examples.
     */
    export interface NlpParameterSubspaceResponse {
        /**
         * Number of steps to accumulate gradients over before running a backward pass.
         */
        gradientAccumulationSteps?: string;
        /**
         * The learning rate for the training procedure.
         */
        learningRate?: string;
        /**
         * The type of learning rate schedule to use during the training procedure.
         */
        learningRateScheduler?: string;
        /**
         * The name of the model to train.
         */
        modelName?: string;
        /**
         * Number of training epochs.
         */
        numberOfEpochs?: string;
        /**
         * The batch size for the training procedure.
         */
        trainingBatchSize?: string;
        /**
         * The batch size to be used during evaluation.
         */
        validationBatchSize?: string;
        /**
         * The warmup ratio, used alongside LrSchedulerType.
         */
        warmupRatio?: string;
        /**
         * The weight decay for the training procedure.
         */
        weightDecay?: string;
    }

    /**
     * Model sweeping and hyperparameter tuning related settings.
     */
    export interface NlpSweepSettingsResponse {
        /**
         * Type of early termination policy for the sweeping job.
         */
        earlyTermination?: BanditPolicyResponse | MedianStoppingPolicyResponse | TruncationSelectionPolicyResponse;
        /**
         * [Required] Type of sampling algorithm.
         */
        samplingAlgorithm: string;
    }

    export interface NlpVerticalFeaturizationSettingsResponse {
        /**
         * Dataset language, useful for the text data.
         */
        datasetLanguage?: string;
    }

    /**
     * Job execution constraints.
     */
    export interface NlpVerticalLimitSettingsResponse {
        /**
         * Maximum Concurrent AutoML iterations.
         */
        maxConcurrentTrials?: number;
        /**
         * Maximum nodes to use for the experiment.
         */
        maxNodes?: number;
        /**
         * Number of AutoML iterations.
         */
        maxTrials?: number;
        /**
         * AutoML job timeout.
         */
        timeout?: string;
        /**
         * Timeout for individual HD trials.
         */
        trialTimeout?: string;
    }
    /**
     * nlpVerticalLimitSettingsResponseProvideDefaults sets the appropriate defaults for NlpVerticalLimitSettingsResponse
     */
    export function nlpVerticalLimitSettingsResponseProvideDefaults(val: NlpVerticalLimitSettingsResponse): NlpVerticalLimitSettingsResponse {
        return {
            ...val,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxNodes: (val.maxNodes) ?? 1,
            maxTrials: (val.maxTrials) ?? 1,
            timeout: (val.timeout) ?? "P7D",
        };
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

    export interface NoneAuthTypeWorkspaceConnectionPropertiesResponse {
        /**
         * Authentication type of the connection target
         * Expected value is 'None'.
         */
        authType: "None";
        /**
         * Category of the connection
         */
        category?: string;
        expiryTime?: string;
        target?: string;
        /**
         * Value details of the workspace connection.
         */
        value?: string;
        /**
         * format for the workspace connection value
         */
        valueFormat?: string;
    }

    /**
     * Empty/none datastore credentials.
     */
    export interface NoneDatastoreCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'None'.
         */
        credentialsType: "None";
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

    /**
     * Configuration for notification.
     */
    export interface NotificationSettingResponse {
        /**
         * Send email notification to user on specified notification type
         */
        emailOn?: string[];
        /**
         * This is the email recipient list which has a limitation of 499 characters in total concat with comma separator
         */
        emails?: string[];
        /**
         * Send webhook callback to a service. Key is a user-provided name for the webhook.
         */
        webhooks?: {[key: string]: AzureDevOpsWebhookResponse};
    }

    export interface NumericalDataDriftMetricThresholdResponse {
        /**
         *
         * Expected value is 'Numerical'.
         */
        dataType: "Numerical";
        /**
         * [Required] The numerical data drift metric to calculate.
         */
        metric: string;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    export interface NumericalDataQualityMetricThresholdResponse {
        /**
         *
         * Expected value is 'Numerical'.
         */
        dataType: "Numerical";
        /**
         * [Required] The numerical data quality metric to calculate.
         */
        metric: string;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    export interface NumericalPredictionDriftMetricThresholdResponse {
        /**
         *
         * Expected value is 'Numerical'.
         */
        dataType: "Numerical";
        /**
         * [Required] The numerical prediction drift metric to calculate.
         */
        metric: string;
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    /**
     * Optimization objective.
     */
    export interface ObjectiveResponse {
        /**
         * [Required] Defines supported metric goals for hyperparameter tuning
         */
        goal: string;
        /**
         * [Required] Name of the metric to optimize.
         */
        primaryMetric: string;
    }

    /**
     * OneLake (Trident) datastore configuration.
     */
    export interface OneLakeDatastoreResponse {
        /**
         * [Required] OneLake artifact backing the datastore.
         */
        artifact: LakeHouseArtifactResponse;
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'OneLake'.
         */
        datastoreType: "OneLake";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * OneLake endpoint to use for the datastore.
         */
        endpoint?: string;
        /**
         * Intellectual Property details.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * [Required] OneLake workspace name.
         */
        oneLakeWorkspaceName: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * oneLakeDatastoreResponseProvideDefaults sets the appropriate defaults for OneLakeDatastoreResponse
     */
    export function oneLakeDatastoreResponseProvideDefaults(val: OneLakeDatastoreResponse): OneLakeDatastoreResponse {
        return {
            ...val,
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Online endpoint configuration
     */
    export interface OnlineEndpointResponse {
        /**
         * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
         */
        authMode: string;
        /**
         * ARM resource ID of the compute if it exists.
         * optional
         */
        compute?: string;
        /**
         * Description of the inference endpoint.
         */
        description?: string;
        /**
         * Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50.
         */
        mirrorTraffic?: {[key: string]: number};
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint.
         */
        provisioningState: string;
        /**
         * Set to "Enabled" for endpoints that should allow public access when Private Link is enabled.
         */
        publicNetworkAccess?: string;
        /**
         * Endpoint URI.
         */
        scoringUri: string;
        /**
         * Endpoint Swagger URI.
         */
        swaggerUri: string;
        /**
         * Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100.
         */
        traffic?: {[key: string]: number};
    }
    /**
     * onlineEndpointResponseProvideDefaults sets the appropriate defaults for OnlineEndpointResponse
     */
    export function onlineEndpointResponseProvideDefaults(val: OnlineEndpointResponse): OnlineEndpointResponse {
        return {
            ...val,
            publicNetworkAccess: (val.publicNetworkAccess) ?? "Enabled",
        };
    }

    /**
     * Online deployment scoring requests configuration.
     */
    export interface OnlineRequestSettingsResponse {
        /**
         * The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
         */
        maxConcurrentRequestsPerInstance?: number;
        /**
         * The maximum amount of time a request will stay in the queue in ISO 8601 format.
         * Defaults to 500ms.
         */
        maxQueueWait?: string;
        /**
         * The scoring timeout in ISO 8601 format.
         * Defaults to 5000ms.
         */
        requestTimeout?: string;
    }
    /**
     * onlineRequestSettingsResponseProvideDefaults sets the appropriate defaults for OnlineRequestSettingsResponse
     */
    export function onlineRequestSettingsResponseProvideDefaults(val: OnlineRequestSettingsResponse): OnlineRequestSettingsResponse {
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
    export interface OutputPathAssetReferenceResponse {
        /**
         * ARM resource ID of the job.
         */
        jobId?: string;
        /**
         * The path of the file/directory in the job output.
         */
        path?: string;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'OutputPath'.
         */
        referenceType: "OutputPath";
    }

    export interface PATAuthTypeWorkspaceConnectionPropertiesResponse {
        /**
         * Authentication type of the connection target
         * Expected value is 'PAT'.
         */
        authType: "PAT";
        /**
         * Category of the connection
         */
        category?: string;
        credentials?: WorkspaceConnectionPersonalAccessTokenResponse;
        expiryTime?: string;
        target?: string;
        /**
         * Value details of the workspace connection.
         */
        value?: string;
        /**
         * format for the workspace connection value
         */
        valueFormat?: string;
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
     * Pipeline Job definition: defines generic to MFE attributes.
     */
    export interface PipelineJobResponse {
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: string;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Inputs for the pipeline job.
         */
        inputs?: {[key: string]: CustomModelJobInputResponse | LiteralJobInputResponse | MLFlowModelJobInputResponse | MLTableJobInputResponse | TritonModelJobInputResponse | UriFileJobInputResponse | UriFolderJobInputResponse};
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Pipeline'.
         */
        jobType: "Pipeline";
        /**
         * Jobs construct the Pipeline Job.
         */
        jobs?: {[key: string]: any};
        /**
         * Notification setting for the job
         */
        notificationSetting?: NotificationSettingResponse;
        /**
         * Outputs for the pipeline job
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: {[key: string]: SecretConfigurationResponse};
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Pipeline settings, for things like ContinueRunOnStepFailure etc.
         */
        settings?: any;
        /**
         * ARM resource ID of source job.
         */
        sourceJobId?: string;
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * pipelineJobResponseProvideDefaults sets the appropriate defaults for PipelineJobResponse
     */
    export function pipelineJobResponseProvideDefaults(val: PipelineJobResponse): PipelineJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface PredictionDriftMonitoringSignalResponse {
        /**
         * [Required] The data to calculate drift against.
         */
        baselineData: MonitoringInputDataResponse;
        /**
         * The amount of time a single monitor should look back over the target data on a given run.
         */
        lookbackPeriod?: string;
        /**
         * [Required] A list of metrics to calculate and their associated thresholds.
         */
        metricThresholds: (CategoricalPredictionDriftMetricThresholdResponse | NumericalPredictionDriftMetricThresholdResponse)[];
        /**
         * The current notification mode for this signal.
         */
        mode?: string;
        /**
         * [Required] The type of the model monitored.
         */
        modelType: string;
        /**
         *
         * Expected value is 'PredictionDrift'.
         */
        signalType: "PredictionDrift";
        /**
         * [Required] The data which drift will be calculated for.
         */
        targetData: MonitoringInputDataResponse;
    }
    /**
     * predictionDriftMonitoringSignalResponseProvideDefaults sets the appropriate defaults for PredictionDriftMonitoringSignalResponse
     */
    export function predictionDriftMonitoringSignalResponseProvideDefaults(val: PredictionDriftMonitoringSignalResponse): PredictionDriftMonitoringSignalResponse {
        return {
            ...val,
            mode: (val.mode) ?? "Disabled",
        };
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
        identity?: ManagedServiceIdentityResponse;
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
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
     * Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface PrivateEndpointDestinationResponse {
        serviceResourceId?: string;
        sparkEnabled?: boolean;
        /**
         * Status of a managed network Outbound Rule of a machine learning workspace.
         */
        sparkStatus?: string;
        subresourceTarget?: string;
    }

    /**
     * Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface PrivateEndpointOutboundRuleResponse {
        /**
         * Category of a managed network Outbound Rule of a machine learning workspace.
         */
        category?: string;
        /**
         * Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
         */
        destination?: PrivateEndpointDestinationResponse;
        /**
         * Status of a managed network Outbound Rule of a machine learning workspace.
         */
        status?: string;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         * Expected value is 'PrivateEndpoint'.
         */
        type: "PrivateEndpoint";
    }

    /**
     * The PE network resource that is linked to this PE connection.
     */
    export interface PrivateEndpointResourceResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
        /**
         * The subnetId that the private endpoint is connected to.
         */
        subnetArmId?: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
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
     * Deployment container liveness/readiness probe configuration.
     */
    export interface ProbeSettingsResponse {
        /**
         * The number of failures to allow before returning an unhealthy status.
         */
        failureThreshold?: number;
        /**
         * The delay before the first probe in ISO 8601 format.
         */
        initialDelay?: string;
        /**
         * The length of time between probes in ISO 8601 format.
         */
        period?: string;
        /**
         * The number of successful probes before returning a healthy status.
         */
        successThreshold?: number;
        /**
         * The probe timeout in ISO 8601 format.
         */
        timeout?: string;
    }
    /**
     * probeSettingsResponseProvideDefaults sets the appropriate defaults for ProbeSettingsResponse
     */
    export function probeSettingsResponseProvideDefaults(val: ProbeSettingsResponse): ProbeSettingsResponse {
        return {
            ...val,
            failureThreshold: (val.failureThreshold) ?? 30,
            period: (val.period) ?? "PT10S",
            successThreshold: (val.successThreshold) ?? 1,
            timeout: (val.timeout) ?? "PT2S",
        };
    }

    /**
     * Progress metrics definition
     */
    export interface ProgressMetricsResponse {
        /**
         * The completed datapoint count.
         */
        completedDatapointCount: number;
        /**
         * The time of last successful incremental data refresh in UTC.
         */
        incrementalDataLastRefreshDateTime: string;
        /**
         * The skipped datapoint count.
         */
        skippedDatapointCount: number;
        /**
         * The total datapoint count.
         */
        totalDatapointCount: number;
    }

    /**
     * PyTorch distribution configuration.
     */
    export interface PyTorchResponse {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'PyTorch'.
         */
        distributionType: "PyTorch";
        /**
         * Number of processes per node.
         */
        processCountPerInstance?: number;
    }

    export interface QueueSettingsResponse {
        /**
         * Enum to determine the job tier.
         */
        jobTier?: string;
        /**
         * Controls the priority of the job on a compute.
         */
        priority?: number;
    }
    /**
     * queueSettingsResponseProvideDefaults sets the appropriate defaults for QueueSettingsResponse
     */
    export function queueSettingsResponseProvideDefaults(val: QueueSettingsResponse): QueueSettingsResponse {
        return {
            ...val,
            jobTier: (val.jobTier) ?? "Standard",
        };
    }

    /**
     * Defines a Sampling Algorithm that generates values randomly
     */
    export interface RandomSamplingAlgorithmResponse {
        /**
         * An optional positive number or e in string format to be used as base for log based random sampling
         */
        logbase?: string;
        /**
         * The specific type of random algorithm
         */
        rule?: string;
        /**
         *
         * Expected value is 'Random'.
         */
        samplingAlgorithmType: "Random";
        /**
         * An optional integer to use as the seed for random number generation
         */
        seed?: number;
    }
    /**
     * randomSamplingAlgorithmResponseProvideDefaults sets the appropriate defaults for RandomSamplingAlgorithmResponse
     */
    export function randomSamplingAlgorithmResponseProvideDefaults(val: RandomSamplingAlgorithmResponse): RandomSamplingAlgorithmResponse {
        return {
            ...val,
            rule: (val.rule) ?? "Random",
        };
    }

    /**
     * Ray distribution configuration.
     */
    export interface RayResponse {
        /**
         * The address of Ray head node.
         */
        address?: string;
        /**
         * The port to bind the dashboard server to.
         */
        dashboardPort?: number;
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'Ray'.
         */
        distributionType: "Ray";
        /**
         * Additional arguments passed to ray start in head node.
         */
        headNodeAdditionalArgs?: string;
        /**
         * Provide this argument to start the Ray dashboard GUI.
         */
        includeDashboard?: boolean;
        /**
         * The port of the head ray process.
         */
        port?: number;
        /**
         * Additional arguments passed to ray start in worker node.
         */
        workerNodeAdditionalArgs?: string;
    }

    /**
     * The workflow trigger recurrence for ComputeStartStop schedule type.
     */
    export interface RecurrenceResponse {
        /**
         * [Required] The frequency to trigger schedule.
         */
        frequency?: string;
        /**
         * [Required] Specifies schedule interval in conjunction with frequency
         */
        interval?: number;
        /**
         * [Required] The recurrence schedule.
         */
        schedule?: RecurrenceScheduleResponse;
        /**
         * The start time in yyyy-MM-ddTHH:mm:ss format.
         */
        startTime?: string;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
         */
        timeZone?: string;
    }
    /**
     * recurrenceResponseProvideDefaults sets the appropriate defaults for RecurrenceResponse
     */
    export function recurrenceResponseProvideDefaults(val: RecurrenceResponse): RecurrenceResponse {
        return {
            ...val,
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    export interface RecurrenceScheduleResponse {
        /**
         * [Required] List of hours for the schedule.
         */
        hours: number[];
        /**
         * [Required] List of minutes for the schedule.
         */
        minutes: number[];
        /**
         * List of month days for the schedule
         */
        monthDays?: number[];
        /**
         * List of days for the schedule.
         */
        weekDays?: string[];
    }

    export interface RecurrenceTriggerResponse {
        /**
         * Specifies end time of schedule in ISO 8601, but without a UTC offset. Refer https://en.wikipedia.org/wiki/ISO_8601.
         * Recommented format would be "2022-06-01T00:00:01"
         * If not present, the schedule will run indefinitely
         */
        endTime?: string;
        /**
         * [Required] The frequency to trigger schedule.
         */
        frequency: string;
        /**
         * [Required] Specifies schedule interval in conjunction with frequency
         */
        interval: number;
        /**
         * The recurrence schedule.
         */
        schedule?: RecurrenceScheduleResponse;
        /**
         * Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
         */
        startTime?: string;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
         */
        timeZone?: string;
        /**
         *
         * Expected value is 'Recurrence'.
         */
        triggerType: "Recurrence";
    }
    /**
     * recurrenceTriggerResponseProvideDefaults sets the appropriate defaults for RecurrenceTriggerResponse
     */
    export function recurrenceTriggerResponseProvideDefaults(val: RecurrenceTriggerResponse): RecurrenceTriggerResponse {
        return {
            ...val,
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    export interface RegistryListCredentialsResultResponse {
        location: string;
        passwords?: PasswordResponse[];
        username: string;
    }

    /**
     * Properties of the Private Endpoint Connection
     */
    export interface RegistryPrivateEndpointConnectionPropertiesResponse {
        /**
         * The group ids
         */
        groupIds?: string[];
        /**
         * The PE network resource that is linked to this PE connection.
         */
        privateEndpoint?: PrivateEndpointResourceResponse;
        /**
         * The connection state.
         */
        privateLinkServiceConnectionState?: RegistryPrivateLinkServiceConnectionStateResponse;
        /**
         * One of null, "Succeeded", "Provisioning", "Failed". While not approved, it's null.
         */
        provisioningState?: string;
    }

    /**
     * Private endpoint connection definition.
     */
    export interface RegistryPrivateEndpointConnectionResponse {
        /**
         * This is the private endpoint connection name created on SRP
         * Full resource id: /subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.MachineLearningServices/{resourceType}/{resourceName}/privateEndpointConnections/{peConnectionName}
         */
        id?: string;
        /**
         * Same as workspace location.
         */
        location?: string;
        /**
         * Properties of the Private Endpoint Connection
         */
        properties?: RegistryPrivateEndpointConnectionPropertiesResponse;
    }

    /**
     * The connection state.
     */
    export interface RegistryPrivateLinkServiceConnectionStateResponse {
        /**
         * Some RP chose "None". Other RPs use this for region expansion.
         */
        actionsRequired?: string;
        /**
         * User-defined message that, per NRP doc, may be used for approval-related message.
         */
        description?: string;
        /**
         * Connection status of the service consumer with the service provider
         */
        status?: string;
    }

    /**
     * Details for each region the registry is in
     */
    export interface RegistryRegionArmDetailsResponse {
        /**
         * List of ACR accounts
         */
        acrDetails?: AcrDetailsResponse[];
        /**
         * The location where the registry exists
         */
        location?: string;
        /**
         * List of storage accounts
         */
        storageAccountDetails?: StorageAccountDetailsResponse[];
    }

    /**
     * Details of the Registry
     */
    export interface RegistryResponse {
        /**
         * Discovery URL for the Registry
         */
        discoveryUrl?: string;
        /**
         * IntellectualPropertyPublisher for the registry
         */
        intellectualPropertyPublisher?: string;
        /**
         * ResourceId of the managed RG if the registry has system created resources
         */
        managedResourceGroup?: ArmResourceIdResponse;
        /**
         * MLFlow Registry URI for the Registry
         */
        mlFlowRegistryUri?: string;
        /**
         * Private endpoint connections info used for pending connections in private link portal
         */
        privateEndpointConnections?: RegistryPrivateEndpointConnectionResponse[];
        /**
         * Is the Registry accessible from the internet?
         * Possible values: "Enabled" or "Disabled"
         */
        publicNetworkAccess?: string;
        /**
         * Details of each region the registry is in
         */
        regionDetails?: RegistryRegionArmDetailsResponse[];
    }

    export interface RegressionModelPerformanceMetricThresholdResponse {
        /**
         * [Required] The regression model performance metric to calculate.
         */
        metric: string;
        /**
         *
         * Expected value is 'Regression'.
         */
        modelType: "Regression";
        /**
         * The threshold value. If null, a default value will be set depending on the selected metric.
         */
        threshold?: MonitoringThresholdResponse;
    }

    /**
     * Regression task in AutoML Table vertical.
     */
    export interface RegressionResponse {
        /**
         * Columns to use for CVSplit data.
         */
        cvSplitColumnNames?: string[];
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: TableVerticalFeaturizationSettingsResponse;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: TableFixedParametersResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: TableVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Number of cross validation folds to be applied on training dataset
         * when validation dataset is not provided.
         */
        nCrossValidations?: AutoNCrossValidationsResponse | CustomNCrossValidationsResponse;
        /**
         * Primary metric for regression task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: TableParameterSubspaceResponse[];
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: TableSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Regression'.
         */
        taskType: "Regression";
        /**
         * Test data input.
         */
        testData?: MLTableJobInputResponse;
        /**
         * The fraction of test dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        testDataSize?: number;
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: RegressionTrainingSettingsResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
        /**
         * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
         */
        weightColumnName?: string;
    }
    /**
     * regressionResponseProvideDefaults sets the appropriate defaults for RegressionResponse
     */
    export function regressionResponseProvideDefaults(val: RegressionResponse): RegressionResponse {
        return {
            ...val,
            featurizationSettings: (val.featurizationSettings ? tableVerticalFeaturizationSettingsResponseProvideDefaults(val.featurizationSettings) : undefined),
            fixedParameters: (val.fixedParameters ? tableFixedParametersResponseProvideDefaults(val.fixedParameters) : undefined),
            limitSettings: (val.limitSettings ? tableVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
            testData: (val.testData ? mltableJobInputResponseProvideDefaults(val.testData) : undefined),
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            trainingSettings: (val.trainingSettings ? regressionTrainingSettingsResponseProvideDefaults(val.trainingSettings) : undefined),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Regression Training related configuration.
     */
    export interface RegressionTrainingSettingsResponse {
        /**
         * Allowed models for regression task.
         */
        allowedTrainingAlgorithms?: string[];
        /**
         * Blocked models for regression task.
         */
        blockedTrainingAlgorithms?: string[];
        /**
         * Enable recommendation of DNN models.
         */
        enableDnnTraining?: boolean;
        /**
         * Flag to turn on explainability on best model.
         */
        enableModelExplainability?: boolean;
        /**
         * Flag for enabling onnx compatible models.
         */
        enableOnnxCompatibleModels?: boolean;
        /**
         * Enable stack ensemble run.
         */
        enableStackEnsemble?: boolean;
        /**
         * Enable voting ensemble run.
         */
        enableVoteEnsemble?: boolean;
        /**
         * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
         * Configure this parameter with a higher value than 300 secs, if more time is needed.
         */
        ensembleModelDownloadTimeout?: string;
        /**
         * Stack ensemble settings for stack ensemble run.
         */
        stackEnsembleSettings?: StackEnsembleSettingsResponse;
        /**
         * TrainingMode mode - Setting to 'auto' is same as setting it to 'non-distributed' for now, however in the future may result in mixed mode or heuristics based mode selection. Default is 'auto'.
         * If 'Distributed' then only distributed featurization is used and distributed algorithms are chosen.
         * If 'NonDistributed' then only non distributed algorithms are chosen.
         */
        trainingMode?: string;
    }
    /**
     * regressionTrainingSettingsResponseProvideDefaults sets the appropriate defaults for RegressionTrainingSettingsResponse
     */
    export function regressionTrainingSettingsResponseProvideDefaults(val: RegressionTrainingSettingsResponse): RegressionTrainingSettingsResponse {
        return {
            ...val,
            enableDnnTraining: (val.enableDnnTraining) ?? false,
            enableModelExplainability: (val.enableModelExplainability) ?? true,
            enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
            enableStackEnsemble: (val.enableStackEnsemble) ?? true,
            enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
            ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
            stackEnsembleSettings: (val.stackEnsembleSettings ? stackEnsembleSettingsResponseProvideDefaults(val.stackEnsembleSettings) : undefined),
            trainingMode: (val.trainingMode) ?? "Auto",
        };
    }

    export interface RequestLoggingResponse {
        /**
         * For payload logging, we only collect payload by default. If customers also want to collect the specified headers, they can set them in captureHeaders so that backend will collect those headers along with payload.
         */
        captureHeaders?: string[];
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

    export interface RouteResponse {
        /**
         * [Required] The path for the route.
         */
        path: string;
        /**
         * [Required] The port for the route.
         */
        port: number;
    }

    export interface SASAuthTypeWorkspaceConnectionPropertiesResponse {
        /**
         * Authentication type of the connection target
         * Expected value is 'SAS'.
         */
        authType: "SAS";
        /**
         * Category of the connection
         */
        category?: string;
        credentials?: WorkspaceConnectionSharedAccessSignatureResponse;
        expiryTime?: string;
        target?: string;
        /**
         * Value details of the workspace connection.
         */
        value?: string;
        /**
         * format for the workspace connection value
         */
        valueFormat?: string;
    }

    /**
     * SAS datastore credentials configuration.
     */
    export interface SasDatastoreCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'Sas'.
         */
        credentialsType: "Sas";
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

    export interface ScheduleBaseResponse {
        /**
         * A system assigned id for the schedule.
         */
        id?: string;
        /**
         * The current deployment state of schedule.
         */
        provisioningStatus?: string;
        /**
         * Is the schedule enabled or disabled?
         */
        status?: string;
    }

    /**
     * Base definition of a schedule
     */
    export interface ScheduleResponse {
        /**
         * [Required] Specifies the action of the schedule
         */
        action: CreateMonitorActionResponse | EndpointScheduleActionResponse | ImportDataActionResponse | JobScheduleActionResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of schedule.
         */
        displayName?: string;
        /**
         * Is the schedule enabled?
         */
        isEnabled?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the schedule.
         */
        provisioningState: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
        /**
         * [Required] Specifies the trigger details
         */
        trigger: CronTriggerResponse | RecurrenceTriggerResponse;
    }
    /**
     * scheduleResponseProvideDefaults sets the appropriate defaults for ScheduleResponse
     */
    export function scheduleResponseProvideDefaults(val: ScheduleResponse): ScheduleResponse {
        return {
            ...val,
            isEnabled: (val.isEnabled) ?? true,
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

    /**
     * Secret Configuration definition.
     */
    export interface SecretConfigurationResponse {
        /**
         * Secret Uri.
         * Sample Uri : https://myvault.vault.azure.net/secrets/mysecretname/secretversion
         */
        uri?: string;
        /**
         * Name of secret in workspace key vault.
         */
        workspaceSecretName?: string;
    }

    export interface ServiceManagedResourcesSettingsResponse {
        /**
         * The settings for the service managed cosmosdb account.
         */
        cosmosDb?: CosmosDbSettingsResponse;
    }

    export interface ServicePrincipalAuthTypeWorkspaceConnectionPropertiesResponse {
        /**
         * Authentication type of the connection target
         * Expected value is 'ServicePrincipal'.
         */
        authType: "ServicePrincipal";
        /**
         * Category of the connection
         */
        category?: string;
        credentials?: WorkspaceConnectionServicePrincipalResponse;
        expiryTime?: string;
        target?: string;
        /**
         * Value details of the workspace connection.
         */
        value?: string;
        /**
         * format for the workspace connection value
         */
        valueFormat?: string;
    }

    /**
     * Service Principal datastore credentials configuration.
     */
    export interface ServicePrincipalDatastoreCredentialsResponse {
        /**
         * Authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * [Required] Service principal client ID.
         */
        clientId: string;
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'ServicePrincipal'.
         */
        credentialsType: "ServicePrincipal";
        /**
         * Resource the service principal has access to.
         */
        resourceUrl?: string;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: string;
    }

    /**
     * Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface ServiceTagDestinationResponse {
        portRanges?: string;
        protocol?: string;
        serviceTag?: string;
    }

    /**
     * Service Tag Outbound Rule for the managed network of a machine learning workspace.
     */
    export interface ServiceTagOutboundRuleResponse {
        /**
         * Category of a managed network Outbound Rule of a machine learning workspace.
         */
        category?: string;
        /**
         * Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
         */
        destination?: ServiceTagDestinationResponse;
        /**
         * Status of a managed network Outbound Rule of a machine learning workspace.
         */
        status?: string;
        /**
         * Type of a managed network Outbound Rule of a machine learning workspace.
         * Expected value is 'ServiceTag'.
         */
        type: "ServiceTag";
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
         * The name of the SKU. Ex - P3. It is typically a letter+number code
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

    export interface SparkJobPythonEntryResponse {
        /**
         * [Required] Relative python file path for job entry point.
         */
        file: string;
        /**
         *
         * Expected value is 'SparkJobPythonEntry'.
         */
        sparkJobEntryType: "SparkJobPythonEntry";
    }

    /**
     * Spark job definition.
     */
    export interface SparkJobResponse {
        /**
         * Archive files used in the job.
         */
        archives?: string[];
        /**
         * Arguments for the job.
         */
        args?: string;
        /**
         * [Required] ARM resource ID of the code asset.
         */
        codeId: string;
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: string;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * Spark configured properties.
         */
        conf?: {[key: string]: string};
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * [Required] The entry to execute on startup of the job.
         */
        entry: SparkJobPythonEntryResponse | SparkJobScalaEntryResponse;
        /**
         * The ARM resource ID of the Environment specification for the job.
         */
        environmentId?: string;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Files used in the job.
         */
        files?: string[];
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: {[key: string]: CustomModelJobInputResponse | LiteralJobInputResponse | MLFlowModelJobInputResponse | MLTableJobInputResponse | TritonModelJobInputResponse | UriFileJobInputResponse | UriFolderJobInputResponse};
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Jar files used in the job.
         */
        jars?: string[];
        /**
         * Enum to determine the type of job.
         * Expected value is 'Spark'.
         */
        jobType: "Spark";
        /**
         * Notification setting for the job
         */
        notificationSetting?: NotificationSettingResponse;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Python files used in the job.
         */
        pyFiles?: string[];
        /**
         * Queue settings for the job
         */
        queueSettings?: QueueSettingsResponse;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: SparkResourceConfigurationResponse;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: {[key: string]: SecretConfigurationResponse};
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * sparkJobResponseProvideDefaults sets the appropriate defaults for SparkJobResponse
     */
    export function sparkJobResponseProvideDefaults(val: SparkJobResponse): SparkJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            queueSettings: (val.queueSettings ? queueSettingsResponseProvideDefaults(val.queueSettings) : undefined),
            resources: (val.resources ? sparkResourceConfigurationResponseProvideDefaults(val.resources) : undefined),
        };
    }

    export interface SparkJobScalaEntryResponse {
        /**
         * [Required] Scala class name used as entry point.
         */
        className: string;
        /**
         *
         * Expected value is 'SparkJobScalaEntry'.
         */
        sparkJobEntryType: "SparkJobScalaEntry";
    }

    export interface SparkResourceConfigurationResponse {
        /**
         * Optional type of VM used as supported by the compute target.
         */
        instanceType?: string;
        /**
         * Version of spark runtime used for the job.
         */
        runtimeVersion?: string;
    }
    /**
     * sparkResourceConfigurationResponseProvideDefaults sets the appropriate defaults for SparkResourceConfigurationResponse
     */
    export function sparkResourceConfigurationResponseProvideDefaults(val: SparkResourceConfigurationResponse): SparkResourceConfigurationResponse {
        return {
            ...val,
            runtimeVersion: (val.runtimeVersion) ?? "3.1",
        };
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
     * Advances setting to customize StackEnsemble run.
     */
    export interface StackEnsembleSettingsResponse {
        /**
         * Optional parameters to pass to the initializer of the meta-learner.
         */
        stackMetaLearnerKWargs?: any;
        /**
         * Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2.
         */
        stackMetaLearnerTrainPercentage?: number;
        /**
         * The meta-learner is a model trained on the output of the individual heterogeneous models.
         */
        stackMetaLearnerType?: string;
    }
    /**
     * stackEnsembleSettingsResponseProvideDefaults sets the appropriate defaults for StackEnsembleSettingsResponse
     */
    export function stackEnsembleSettingsResponseProvideDefaults(val: StackEnsembleSettingsResponse): StackEnsembleSettingsResponse {
        return {
            ...val,
            stackMetaLearnerTrainPercentage: (val.stackMetaLearnerTrainPercentage) ?? 0.2,
            stackMetaLearnerType: (val.stackMetaLearnerType) ?? "None",
        };
    }

    /**
     * Active message associated with project
     */
    export interface StatusMessageResponse {
        /**
         * Service-defined message code.
         */
        code: string;
        /**
         * Time in UTC at which the message was created.
         */
        createdDateTime: string;
        /**
         * Severity level of message.
         */
        level: string;
        /**
         * A human-readable representation of the message code.
         */
        message: string;
    }

    /**
     * Details of storage account to be used for the Registry
     */
    export interface StorageAccountDetailsResponse {
        /**
         * Details of system created storage account to be used for the registry
         */
        systemCreatedStorageAccount?: SystemCreatedStorageAccountResponse;
        /**
         * Details of user created storage account to be used for the registry
         */
        userCreatedStorageAccount?: UserCreatedStorageAccountResponse;
    }

    /**
     * Sweep Job limit class.
     */
    export interface SweepJobLimitsResponse {
        /**
         *
         * Expected value is 'Sweep'.
         */
        jobLimitsType: "Sweep";
        /**
         * Sweep Job max concurrent trials.
         */
        maxConcurrentTrials?: number;
        /**
         * Sweep Job max total trials.
         */
        maxTotalTrials?: number;
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: string;
        /**
         * Sweep Job Trial timeout value.
         */
        trialTimeout?: string;
    }

    /**
     * Sweep job definition.
     */
    export interface SweepJobResponse {
        /**
         * ARM resource ID of the component resource.
         */
        componentId?: string;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * Early termination policies enable canceling poor-performing runs before they complete
         */
        earlyTermination?: BanditPolicyResponse | MedianStoppingPolicyResponse | TruncationSelectionPolicyResponse;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: {[key: string]: CustomModelJobInputResponse | LiteralJobInputResponse | MLFlowModelJobInputResponse | MLTableJobInputResponse | TritonModelJobInputResponse | UriFileJobInputResponse | UriFolderJobInputResponse};
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Sweep'.
         */
        jobType: "Sweep";
        /**
         * Sweep Job limit.
         */
        limits?: SweepJobLimitsResponse;
        /**
         * Notification setting for the job
         */
        notificationSetting?: NotificationSettingResponse;
        /**
         * [Required] Optimization objective.
         */
        objective: ObjectiveResponse;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Queue settings for the job
         */
        queueSettings?: QueueSettingsResponse;
        /**
         * [Required] The hyperparameter sampling algorithm
         */
        samplingAlgorithm: BayesianSamplingAlgorithmResponse | GridSamplingAlgorithmResponse | RandomSamplingAlgorithmResponse;
        /**
         * [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
         */
        searchSpace: any;
        /**
         * Configuration for secrets to be made available during runtime.
         */
        secretsConfiguration?: {[key: string]: SecretConfigurationResponse};
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
        /**
         * [Required] Trial component definition.
         */
        trial: TrialComponentResponse;
    }
    /**
     * sweepJobResponseProvideDefaults sets the appropriate defaults for SweepJobResponse
     */
    export function sweepJobResponseProvideDefaults(val: SweepJobResponse): SweepJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            queueSettings: (val.queueSettings ? queueSettingsResponseProvideDefaults(val.queueSettings) : undefined),
            trial: trialComponentResponseProvideDefaults(val.trial),
        };
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

    export interface SystemCreatedAcrAccountResponse {
        /**
         * Name of the ACR account
         */
        acrAccountName?: string;
        /**
         * SKU of the ACR account
         */
        acrAccountSku?: string;
        /**
         * This is populated once the ACR account is created.
         */
        armResourceId?: ArmResourceIdResponse;
    }

    export interface SystemCreatedStorageAccountResponse {
        /**
         * Public blob access allowed
         */
        allowBlobPublicAccess?: boolean;
        /**
         * This is populated once the storage account is created.
         */
        armResourceId?: ArmResourceIdResponse;
        /**
         * HNS enabled for storage account
         */
        storageAccountHnsEnabled?: boolean;
        /**
         * Name of the storage account
         */
        storageAccountName?: string;
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
        storageAccountType?: string;
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
     * Fixed training parameters that won't be swept over during AutoML Table training.
     */
    export interface TableFixedParametersResponse {
        /**
         * Specify the boosting type, e.g gbdt for XGBoost.
         */
        booster?: string;
        /**
         * Specify the boosting type, e.g gbdt for LightGBM.
         */
        boostingType?: string;
        /**
         * Specify the grow policy, which controls the way new nodes are added to the tree.
         */
        growPolicy?: string;
        /**
         * The learning rate for the training procedure.
         */
        learningRate?: number;
        /**
         * Specify the Maximum number of discrete bins to bucket continuous features .
         */
        maxBin?: number;
        /**
         * Specify the max depth to limit the tree depth explicitly.
         */
        maxDepth?: number;
        /**
         * Specify the max leaves to limit the tree leaves explicitly.
         */
        maxLeaves?: number;
        /**
         * The minimum number of data per leaf.
         */
        minDataInLeaf?: number;
        /**
         * Minimum loss reduction required to make a further partition on a leaf node of the tree.
         */
        minSplitGain?: number;
        /**
         * The name of the model to train.
         */
        modelName?: string;
        /**
         * Specify the number of trees (or rounds) in an model.
         */
        nEstimators?: number;
        /**
         * Specify the number of leaves.
         */
        numLeaves?: number;
        /**
         * The name of the preprocessor to use.
         */
        preprocessorName?: string;
        /**
         * L1 regularization term on weights.
         */
        regAlpha?: number;
        /**
         * L2 regularization term on weights.
         */
        regLambda?: number;
        /**
         * Subsample ratio of the training instance.
         */
        subsample?: number;
        /**
         * Frequency of subsample.
         */
        subsampleFreq?: number;
        /**
         * Specify the tree method.
         */
        treeMethod?: string;
        /**
         * If true, center before scaling the data with StandardScalar.
         */
        withMean?: boolean;
        /**
         * If true, scaling the data with Unit Variance with StandardScalar.
         */
        withStd?: boolean;
    }
    /**
     * tableFixedParametersResponseProvideDefaults sets the appropriate defaults for TableFixedParametersResponse
     */
    export function tableFixedParametersResponseProvideDefaults(val: TableFixedParametersResponse): TableFixedParametersResponse {
        return {
            ...val,
            withMean: (val.withMean) ?? false,
            withStd: (val.withStd) ?? false,
        };
    }

    export interface TableParameterSubspaceResponse {
        /**
         * Specify the boosting type, e.g gbdt for XGBoost.
         */
        booster?: string;
        /**
         * Specify the boosting type, e.g gbdt for LightGBM.
         */
        boostingType?: string;
        /**
         * Specify the grow policy, which controls the way new nodes are added to the tree.
         */
        growPolicy?: string;
        /**
         * The learning rate for the training procedure.
         */
        learningRate?: string;
        /**
         * Specify the Maximum number of discrete bins to bucket continuous features .
         */
        maxBin?: string;
        /**
         * Specify the max depth to limit the tree depth explicitly.
         */
        maxDepth?: string;
        /**
         * Specify the max leaves to limit the tree leaves explicitly.
         */
        maxLeaves?: string;
        /**
         * The minimum number of data per leaf.
         */
        minDataInLeaf?: string;
        /**
         * Minimum loss reduction required to make a further partition on a leaf node of the tree.
         */
        minSplitGain?: string;
        /**
         * The name of the model to train.
         */
        modelName?: string;
        /**
         * Specify the number of trees (or rounds) in an model.
         */
        nEstimators?: string;
        /**
         * Specify the number of leaves.
         */
        numLeaves?: string;
        /**
         * The name of the preprocessor to use.
         */
        preprocessorName?: string;
        /**
         * L1 regularization term on weights.
         */
        regAlpha?: string;
        /**
         * L2 regularization term on weights.
         */
        regLambda?: string;
        /**
         * Subsample ratio of the training instance.
         */
        subsample?: string;
        /**
         * Frequency of subsample
         */
        subsampleFreq?: string;
        /**
         * Specify the tree method.
         */
        treeMethod?: string;
        /**
         * If true, center before scaling the data with StandardScalar.
         */
        withMean?: string;
        /**
         * If true, scaling the data with Unit Variance with StandardScalar.
         */
        withStd?: string;
    }

    export interface TableSweepSettingsResponse {
        /**
         * Type of early termination policy for the sweeping job.
         */
        earlyTermination?: BanditPolicyResponse | MedianStoppingPolicyResponse | TruncationSelectionPolicyResponse;
        /**
         * [Required] Type of sampling algorithm.
         */
        samplingAlgorithm: string;
    }

    /**
     * Featurization Configuration.
     */
    export interface TableVerticalFeaturizationSettingsResponse {
        /**
         * These transformers shall not be used in featurization.
         */
        blockedTransformers?: string[];
        /**
         * Dictionary of column name and its type (int, float, string, datetime etc).
         */
        columnNameAndTypes?: {[key: string]: string};
        /**
         * Dataset language, useful for the text data.
         */
        datasetLanguage?: string;
        /**
         * Determines whether to use Dnn based featurizers for data featurization.
         */
        enableDnnFeaturization?: boolean;
        /**
         * Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.
         * If 'Off' is selected then no featurization is done.
         * If 'Custom' is selected then user can specify additional inputs to customize how featurization is done.
         */
        mode?: string;
        /**
         * User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor.
         */
        transformerParams?: {[key: string]: ColumnTransformerResponse[]};
    }
    /**
     * tableVerticalFeaturizationSettingsResponseProvideDefaults sets the appropriate defaults for TableVerticalFeaturizationSettingsResponse
     */
    export function tableVerticalFeaturizationSettingsResponseProvideDefaults(val: TableVerticalFeaturizationSettingsResponse): TableVerticalFeaturizationSettingsResponse {
        return {
            ...val,
            enableDnnFeaturization: (val.enableDnnFeaturization) ?? false,
            mode: (val.mode) ?? "Auto",
        };
    }

    /**
     * Job execution constraints.
     */
    export interface TableVerticalLimitSettingsResponse {
        /**
         * Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations.
         */
        enableEarlyTermination?: boolean;
        /**
         * Exit score for the AutoML job.
         */
        exitScore?: number;
        /**
         * Maximum Concurrent iterations.
         */
        maxConcurrentTrials?: number;
        /**
         * Max cores per iteration.
         */
        maxCoresPerTrial?: number;
        /**
         * Maximum nodes to use for the experiment.
         */
        maxNodes?: number;
        /**
         * Number of iterations.
         */
        maxTrials?: number;
        /**
         * Number of concurrent sweeping runs that user wants to trigger.
         */
        sweepConcurrentTrials?: number;
        /**
         * Number of sweeping runs that user wants to trigger.
         */
        sweepTrials?: number;
        /**
         * AutoML job timeout.
         */
        timeout?: string;
        /**
         * Iteration timeout.
         */
        trialTimeout?: string;
    }
    /**
     * tableVerticalLimitSettingsResponseProvideDefaults sets the appropriate defaults for TableVerticalLimitSettingsResponse
     */
    export function tableVerticalLimitSettingsResponseProvideDefaults(val: TableVerticalLimitSettingsResponse): TableVerticalLimitSettingsResponse {
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

    export interface TargetUtilizationScaleSettingsResponse {
        /**
         * The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances.
         */
        maxInstances?: number;
        /**
         * The minimum number of instances to always be present.
         */
        minInstances?: number;
        /**
         * The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
         */
        pollingInterval?: string;
        /**
         *
         * Expected value is 'TargetUtilization'.
         */
        scaleType: "TargetUtilization";
        /**
         * Target CPU usage for the autoscaler.
         */
        targetUtilizationPercentage?: number;
    }
    /**
     * targetUtilizationScaleSettingsResponseProvideDefaults sets the appropriate defaults for TargetUtilizationScaleSettingsResponse
     */
    export function targetUtilizationScaleSettingsResponseProvideDefaults(val: TargetUtilizationScaleSettingsResponse): TargetUtilizationScaleSettingsResponse {
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
    export interface TensorFlowResponse {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'TensorFlow'.
         */
        distributionType: "TensorFlow";
        /**
         * Number of parameter server tasks.
         */
        parameterServerCount?: number;
        /**
         * Number of workers. If not specified, will default to the instance count.
         */
        workerCount?: number;
    }
    /**
     * tensorFlowResponseProvideDefaults sets the appropriate defaults for TensorFlowResponse
     */
    export function tensorFlowResponseProvideDefaults(val: TensorFlowResponse): TensorFlowResponse {
        return {
            ...val,
            parameterServerCount: (val.parameterServerCount) ?? 0,
        };
    }

    /**
     * Text Classification Multilabel task in AutoML NLP vertical.
     * NLP - Natural Language Processing.
     */
    export interface TextClassificationMultilabelResponse {
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: NlpVerticalFeaturizationSettingsResponse;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: NlpFixedParametersResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: NlpVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for Text-Classification-Multilabel task.
         * Currently only Accuracy is supported as primary metric, hence user need not set it explicitly.
         */
        primaryMetric: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: NlpParameterSubspaceResponse[];
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: NlpSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextClassificationMultilabel'.
         */
        taskType: "TextClassificationMultilabel";
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
    }
    /**
     * textClassificationMultilabelResponseProvideDefaults sets the appropriate defaults for TextClassificationMultilabelResponse
     */
    export function textClassificationMultilabelResponseProvideDefaults(val: TextClassificationMultilabelResponse): TextClassificationMultilabelResponse {
        return {
            ...val,
            fixedParameters: (val.fixedParameters ? nlpFixedParametersResponseProvideDefaults(val.fixedParameters) : undefined),
            limitSettings: (val.limitSettings ? nlpVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Text Classification task in AutoML NLP vertical.
     * NLP - Natural Language Processing.
     */
    export interface TextClassificationResponse {
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: NlpVerticalFeaturizationSettingsResponse;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: NlpFixedParametersResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: NlpVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for Text-Classification task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: NlpParameterSubspaceResponse[];
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: NlpSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextClassification'.
         */
        taskType: "TextClassification";
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
    }
    /**
     * textClassificationResponseProvideDefaults sets the appropriate defaults for TextClassificationResponse
     */
    export function textClassificationResponseProvideDefaults(val: TextClassificationResponse): TextClassificationResponse {
        return {
            ...val,
            fixedParameters: (val.fixedParameters ? nlpFixedParametersResponseProvideDefaults(val.fixedParameters) : undefined),
            limitSettings: (val.limitSettings ? nlpVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "Accuracy",
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Text-NER task in AutoML NLP vertical.
     * NER - Named Entity Recognition.
     * NLP - Natural Language Processing.
     */
    export interface TextNerResponse {
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: NlpVerticalFeaturizationSettingsResponse;
        /**
         * Model/training parameters that will remain constant throughout training.
         */
        fixedParameters?: NlpFixedParametersResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: NlpVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for Text-NER task.
         * Only 'Accuracy' is supported for Text-NER, so user need not set this explicitly.
         */
        primaryMetric: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: NlpParameterSubspaceResponse[];
        /**
         * Settings for model sweeping and hyperparameter tuning.
         */
        sweepSettings?: NlpSweepSettingsResponse;
        /**
         * Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextNER'.
         */
        taskType: "TextNER";
        /**
         * [Required] Training data input.
         */
        trainingData: MLTableJobInputResponse;
        /**
         * Validation data inputs.
         */
        validationData?: MLTableJobInputResponse;
    }
    /**
     * textNerResponseProvideDefaults sets the appropriate defaults for TextNerResponse
     */
    export function textNerResponseProvideDefaults(val: TextNerResponse): TextNerResponse {
        return {
            ...val,
            fixedParameters: (val.fixedParameters ? nlpFixedParametersResponseProvideDefaults(val.fixedParameters) : undefined),
            limitSettings: (val.limitSettings ? nlpVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            trainingData: mltableJobInputResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? mltableJobInputResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    export interface TmpfsOptionsResponse {
        /**
         * Mention the Tmpfs size
         */
        size?: number;
    }

    export interface TopNFeaturesByAttributionResponse {
        /**
         *
         * Expected value is 'TopNByAttribution'.
         */
        filterType: "TopNByAttribution";
        /**
         * The number of top features to include.
         */
        top?: number;
    }
    /**
     * topNFeaturesByAttributionResponseProvideDefaults sets the appropriate defaults for TopNFeaturesByAttributionResponse
     */
    export function topNFeaturesByAttributionResponseProvideDefaults(val: TopNFeaturesByAttributionResponse): TopNFeaturesByAttributionResponse {
        return {
            ...val,
            top: (val.top) ?? 10,
        };
    }

    /**
     * Trial component definition.
     */
    export interface TrialComponentResponse {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: string;
        /**
         * [Required] The command to execute on startup of the job. eg. "python train.py"
         */
        command: string;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        distribution?: MpiResponse | PyTorchResponse | RayResponse | TensorFlowResponse;
        /**
         * [Required] The ARM resource ID of the Environment specification for the job.
         */
        environmentId: string;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Compute Resource configuration for the job.
         */
        resources?: JobResourceConfigurationResponse;
    }
    /**
     * trialComponentResponseProvideDefaults sets the appropriate defaults for TrialComponentResponse
     */
    export function trialComponentResponseProvideDefaults(val: TrialComponentResponse): TrialComponentResponse {
        return {
            ...val,
            resources: (val.resources ? jobResourceConfigurationResponseProvideDefaults(val.resources) : undefined),
        };
    }

    export interface TritonModelJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'triton_model'.
         */
        jobInputType: "triton_model";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * tritonModelJobInputResponseProvideDefaults sets the appropriate defaults for TritonModelJobInputResponse
     */
    export function tritonModelJobInputResponseProvideDefaults(val: TritonModelJobInputResponse): TritonModelJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface TritonModelJobOutputResponse {
        /**
         * Output Asset Name.
         */
        assetName?: string;
        /**
         * Output Asset Version.
         */
        assetVersion?: string;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'triton_model'.
         */
        jobOutputType: "triton_model";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * tritonModelJobOutputResponseProvideDefaults sets the appropriate defaults for TritonModelJobOutputResponse
     */
    export function tritonModelJobOutputResponseProvideDefaults(val: TritonModelJobOutputResponse): TritonModelJobOutputResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * Defines an early termination policy that cancels a given percentage of runs at each evaluation interval.
     */
    export interface TruncationSelectionPolicyResponse {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: number;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: number;
        /**
         *
         * Expected value is 'TruncationSelection'.
         */
        policyType: "TruncationSelection";
        /**
         * The percentage of runs to cancel at each evaluation interval.
         */
        truncationPercentage?: number;
    }
    /**
     * truncationSelectionPolicyResponseProvideDefaults sets the appropriate defaults for TruncationSelectionPolicyResponse
     */
    export function truncationSelectionPolicyResponseProvideDefaults(val: TruncationSelectionPolicyResponse): TruncationSelectionPolicyResponse {
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
    export interface UriFileDataVersionResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Enum to determine the type of data.
         * Expected value is 'uri_file'.
         */
        dataType: "uri_file";
        /**
         * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
         */
        dataUri: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Intellectual Property details. Used if data is an Intellectual Property.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Stage in the data lifecycle assigned to this data asset
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * uriFileDataVersionResponseProvideDefaults sets the appropriate defaults for UriFileDataVersionResponse
     */
    export function uriFileDataVersionResponseProvideDefaults(val: UriFileDataVersionResponse): UriFileDataVersionResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface UriFileJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'uri_file'.
         */
        jobInputType: "uri_file";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * uriFileJobInputResponseProvideDefaults sets the appropriate defaults for UriFileJobInputResponse
     */
    export function uriFileJobInputResponseProvideDefaults(val: UriFileJobInputResponse): UriFileJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface UriFileJobOutputResponse {
        /**
         * Output Asset Name.
         */
        assetName?: string;
        /**
         * Output Asset Version.
         */
        assetVersion?: string;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'uri_file'.
         */
        jobOutputType: "uri_file";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * uriFileJobOutputResponseProvideDefaults sets the appropriate defaults for UriFileJobOutputResponse
     */
    export function uriFileJobOutputResponseProvideDefaults(val: UriFileJobOutputResponse): UriFileJobOutputResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * uri-folder data version entity
     */
    export interface UriFolderDataVersionResponse {
        /**
         * Specifies the lifecycle setting of managed data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Enum to determine the type of data.
         * Expected value is 'uri_folder'.
         */
        dataType: "uri_folder";
        /**
         * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
         */
        dataUri: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Intellectual Property details. Used if data is an Intellectual Property.
         */
        intellectualProperty?: IntellectualPropertyResponse;
        /**
         * If the name version are system generated (anonymous registration). For types where Stage is defined, when Stage is provided it will be used to populate IsAnonymous
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived? For types where Stage is defined, when Stage is provided it will be used to populate IsArchived
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Stage in the data lifecycle assigned to this data asset
         */
        stage?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * uriFolderDataVersionResponseProvideDefaults sets the appropriate defaults for UriFolderDataVersionResponse
     */
    export function uriFolderDataVersionResponseProvideDefaults(val: UriFolderDataVersionResponse): UriFolderDataVersionResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            intellectualProperty: (val.intellectualProperty ? intellectualPropertyResponseProvideDefaults(val.intellectualProperty) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface UriFolderJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'uri_folder'.
         */
        jobInputType: "uri_folder";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * uriFolderJobInputResponseProvideDefaults sets the appropriate defaults for UriFolderJobInputResponse
     */
    export function uriFolderJobInputResponseProvideDefaults(val: UriFolderJobInputResponse): UriFolderJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface UriFolderJobOutputResponse {
        /**
         * Output Asset Name.
         */
        assetName?: string;
        /**
         * Output Asset Version.
         */
        assetVersion?: string;
        /**
         * Auto delete setting of output data asset.
         */
        autoDeleteSetting?: AutoDeleteSettingResponse;
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'uri_folder'.
         */
        jobOutputType: "uri_folder";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * uriFolderJobOutputResponseProvideDefaults sets the appropriate defaults for UriFolderJobOutputResponse
     */
    export function uriFolderJobOutputResponseProvideDefaults(val: UriFolderJobOutputResponse): UriFolderJobOutputResponse {
        return {
            ...val,
            autoDeleteSetting: (val.autoDeleteSetting ? autoDeleteSettingResponseProvideDefaults(val.autoDeleteSetting) : undefined),
            mode: (val.mode) ?? "ReadWriteMount",
        };
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

    export interface UserCreatedAcrAccountResponse {
        /**
         * ARM ResourceId of a resource
         */
        armResourceId?: ArmResourceIdResponse;
    }

    export interface UserCreatedStorageAccountResponse {
        /**
         * ARM ResourceId of a resource
         */
        armResourceId?: ArmResourceIdResponse;
    }

    /**
     * User identity configuration.
     */
    export interface UserIdentityResponse {
        /**
         * Enum to determine identity framework.
         * Expected value is 'UserIdentity'.
         */
        identityType: "UserIdentity";
    }

    export interface UsernamePasswordAuthTypeWorkspaceConnectionPropertiesResponse {
        /**
         * Authentication type of the connection target
         * Expected value is 'UsernamePassword'.
         */
        authType: "UsernamePassword";
        /**
         * Category of the connection
         */
        category?: string;
        credentials?: WorkspaceConnectionUsernamePasswordResponse;
        expiryTime?: string;
        target?: string;
        /**
         * Value details of the workspace connection.
         */
        value?: string;
        /**
         * format for the workspace connection value
         */
        valueFormat?: string;
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
        properties?: VirtualMachineSchemaResponseProperties;
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

    export interface VirtualMachineSchemaResponseProperties {
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
         * Notebook server port open for ssh connections.
         */
        notebookServerPort?: number;
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

    export interface VolumeDefinitionResponse {
        /**
         * Bind Options of the mount
         */
        bind?: BindOptionsResponse;
        /**
         * Consistency of the volume
         */
        consistency?: string;
        /**
         * Indicate whether to mount volume as readOnly. Default value for this is false.
         */
        readOnly?: boolean;
        /**
         * Source of the mount. For bind mounts this is the host path.
         */
        source?: string;
        /**
         * Target of the mount. For bind mounts this is the path in the container.
         */
        target?: string;
        /**
         * tmpfs option of the mount
         */
        tmpfs?: TmpfsOptionsResponse;
        /**
         * Type of Volume Definition. Possible Values: bind,volume,tmpfs,npipe
         */
        type?: string;
        /**
         * Volume Options of the mount
         */
        volume?: VolumeOptionsResponse;
    }
    /**
     * volumeDefinitionResponseProvideDefaults sets the appropriate defaults for VolumeDefinitionResponse
     */
    export function volumeDefinitionResponseProvideDefaults(val: VolumeDefinitionResponse): VolumeDefinitionResponse {
        return {
            ...val,
            type: (val.type) ?? "bind",
        };
    }

    export interface VolumeOptionsResponse {
        /**
         * Indicate whether volume is nocopy
         */
        nocopy?: boolean;
    }

    export interface WorkspaceConnectionAccessKeyResponse {
        accessKeyId?: string;
        secretAccessKey?: string;
    }

    export interface WorkspaceConnectionManagedIdentityResponse {
        clientId?: string;
        resourceId?: string;
    }

    export interface WorkspaceConnectionPersonalAccessTokenResponse {
        pat?: string;
    }

    export interface WorkspaceConnectionServicePrincipalResponse {
        clientId?: string;
        clientSecret?: string;
        tenantId?: string;
    }

    export interface WorkspaceConnectionSharedAccessSignatureResponse {
        sas?: string;
    }

    export interface WorkspaceConnectionUsernamePasswordResponse {
        password?: string;
        username?: string;
    }
