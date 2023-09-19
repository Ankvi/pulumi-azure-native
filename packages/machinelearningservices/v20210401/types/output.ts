import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The response for an ACI service.
     */
    export interface ACIServiceResponseResponse {
        /**
         * Whether or not Application Insights is enabled.
         */
        appInsightsEnabled?: boolean;
        /**
         * Whether or not authentication is enabled on the service.
         */
        authEnabled?: boolean;
        /**
         * The CName for the service.
         */
        cname?: string;
        /**
         * The compute environment type for the service.
         * Expected value is 'ACI'.
         */
        computeType: "ACI";
        /**
         * The container resource requirements.
         */
        containerResourceRequirements?: ContainerResourceRequirementsResponse;
        /**
         * Details of the data collection options specified.
         */
        dataCollection?: ACIServiceResponseResponseDataCollection;
        /**
         * The deployment type for the service.
         */
        deploymentType?: string;
        /**
         * The service description.
         */
        description?: string;
        /**
         * The encryption properties.
         */
        encryptionProperties?: ACIServiceResponseResponseEncryptionProperties;
        /**
         * The Environment, models and assets used for inferencing.
         */
        environmentImageRequest?: ACIServiceResponseResponseEnvironmentImageRequest;
        /**
         * The error details.
         */
        error: ServiceResponseBaseResponseError;
        /**
         * The service tag dictionary. Tags are mutable.
         */
        kvTags?: {[key: string]: string};
        /**
         * The name of the Azure location/region.
         */
        location?: string;
        /**
         * Details on the models and configurations.
         */
        modelConfigMap: {[key: string]: any};
        /**
         * The list of models.
         */
        models?: ModelResponse[];
        /**
         * The service property dictionary. Properties are immutable.
         */
        properties?: {[key: string]: string};
        /**
         * The public Fqdn for the service.
         */
        publicFqdn?: string;
        /**
         * The public IP address for the service.
         */
        publicIp?: string;
        /**
         * The Uri for sending scoring requests.
         */
        scoringUri: string;
        /**
         * The public SSL certificate in PEM format to use if SSL is enabled.
         */
        sslCertificate?: string;
        /**
         * Whether or not SSL is enabled.
         */
        sslEnabled?: boolean;
        /**
         * The public SSL key in PEM format for the certificate.
         */
        sslKey?: string;
        /**
         * The current state of the service.
         */
        state: string;
        /**
         * The Uri for sending swagger requests.
         */
        swaggerUri: string;
        /**
         * The virtual network configuration.
         */
        vnetConfiguration?: ACIServiceResponseResponseVnetConfiguration;
    }

    /**
     * Details of the data collection options specified.
     */
    export interface ACIServiceResponseResponseDataCollection {
        /**
         * Option for enabling/disabling Event Hub.
         */
        eventHubEnabled?: boolean;
        /**
         * Option for enabling/disabling storage.
         */
        storageEnabled?: boolean;
    }

    /**
     * The encryption properties.
     */
    export interface ACIServiceResponseResponseEncryptionProperties {
        /**
         * Encryption Key name
         */
        keyName: string;
        /**
         * Encryption Key Version
         */
        keyVersion: string;
        /**
         * vault base Url
         */
        vaultBaseUrl: string;
    }

    /**
     * The Environment, models and assets used for inferencing.
     */
    export interface ACIServiceResponseResponseEnvironmentImageRequest {
        /**
         * The list of assets.
         */
        assets?: ImageAssetResponse[];
        /**
         * The name of the driver file.
         */
        driverProgram?: string;
        /**
         * The details of the AZURE ML environment.
         */
        environment?: EnvironmentImageResponseResponseEnvironment;
        /**
         * The unique identifying details of the AZURE ML environment.
         */
        environmentReference?: EnvironmentImageResponseResponseEnvironmentReference;
        /**
         * The list of model Ids.
         */
        modelIds?: string[];
        /**
         * The list of models.
         */
        models?: ModelResponse[];
    }

    /**
     * The virtual network configuration.
     */
    export interface ACIServiceResponseResponseVnetConfiguration {
        /**
         * The name of the virtual network subnet.
         */
        subnetName?: string;
        /**
         * The name of the virtual network.
         */
        vnetName?: string;
    }

    /**
     * The error details.
     */
    export interface AKSReplicaStatusResponseError {
        /**
         * The error response.
         */
        error: ErrorResponseResponse;
    }

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
        provisioningErrors: MachineLearningServiceErrorResponse[];
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
     * The response for an AKS service.
     */
    export interface AKSServiceResponseResponse {
        /**
         * Whether or not AAD authentication is enabled.
         */
        aadAuthEnabled?: boolean;
        /**
         * Whether or not Application Insights is enabled.
         */
        appInsightsEnabled?: boolean;
        /**
         * Whether or not authentication is enabled.
         */
        authEnabled?: boolean;
        /**
         * The auto scaler properties.
         */
        autoScaler?: AKSServiceResponseResponseAutoScaler;
        /**
         * The name of the compute resource.
         */
        computeName?: string;
        /**
         * The compute environment type for the service.
         * Expected value is 'AKS'.
         */
        computeType: "AKS";
        /**
         * The container resource requirements.
         */
        containerResourceRequirements?: ContainerResourceRequirementsResponse;
        /**
         * Details of the data collection options specified.
         */
        dataCollection?: AKSServiceResponseResponseDataCollection;
        /**
         * The deployment status.
         */
        deploymentStatus: AKSServiceResponseResponseDeploymentStatus;
        /**
         * The deployment type for the service.
         */
        deploymentType?: string;
        /**
         * The service description.
         */
        description?: string;
        /**
         * The Environment, models and assets used for inferencing.
         */
        environmentImageRequest?: AKSServiceResponseResponseEnvironmentImageRequest;
        /**
         * The error details.
         */
        error: ServiceResponseBaseResponseError;
        /**
         * Is this the default variant.
         */
        isDefault?: boolean;
        /**
         * The service tag dictionary. Tags are mutable.
         */
        kvTags?: {[key: string]: string};
        /**
         * The liveness probe requirements.
         */
        livenessProbeRequirements?: AKSServiceResponseResponseLivenessProbeRequirements;
        /**
         * The maximum number of concurrent requests per container.
         */
        maxConcurrentRequestsPerContainer?: number;
        /**
         * Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable)
         */
        maxQueueWaitMs?: number;
        /**
         * Details on the models and configurations.
         */
        modelConfigMap: {[key: string]: any};
        /**
         * The list of models.
         */
        models?: ModelResponse[];
        /**
         * The Kubernetes namespace of the deployment.
         */
        namespace?: string;
        /**
         * The number of replicas on the cluster.
         */
        numReplicas?: number;
        /**
         * The service property dictionary. Properties are immutable.
         */
        properties?: {[key: string]: string};
        /**
         * The scoring timeout in milliseconds.
         */
        scoringTimeoutMs?: number;
        /**
         * The Uri for sending scoring requests.
         */
        scoringUri: string;
        /**
         * The current state of the service.
         */
        state: string;
        /**
         * The Uri for sending swagger requests.
         */
        swaggerUri: string;
        /**
         * The amount of traffic variant receives.
         */
        trafficPercentile?: number;
        /**
         * The type of the variant.
         */
        type?: string;
    }

    /**
     * The auto scaler properties.
     */
    export interface AKSServiceResponseResponseAutoScaler {
        /**
         * Option to enable/disable auto scaling.
         */
        autoscaleEnabled?: boolean;
        /**
         * The maximum number of replicas in the cluster.
         */
        maxReplicas?: number;
        /**
         * The minimum number of replicas to scale down to.
         */
        minReplicas?: number;
        /**
         * The amount of seconds to wait between auto scale updates.
         */
        refreshPeriodInSeconds?: number;
        /**
         * The target utilization percentage to use for determining whether to scale the cluster.
         */
        targetUtilization?: number;
    }

    /**
     * Details of the data collection options specified.
     */
    export interface AKSServiceResponseResponseDataCollection {
        /**
         * Option for enabling/disabling Event Hub.
         */
        eventHubEnabled?: boolean;
        /**
         * Option for enabling/disabling storage.
         */
        storageEnabled?: boolean;
    }

    /**
     * The deployment status.
     */
    export interface AKSServiceResponseResponseDeploymentStatus {
        /**
         * The number of available replicas.
         */
        availableReplicas?: number;
        /**
         * The desired number of replicas.
         */
        desiredReplicas?: number;
        /**
         * The error details.
         */
        error?: AKSReplicaStatusResponseError;
        /**
         * The number of updated replicas.
         */
        updatedReplicas?: number;
    }

    /**
     * The Environment, models and assets used for inferencing.
     */
    export interface AKSServiceResponseResponseEnvironmentImageRequest {
        /**
         * The list of assets.
         */
        assets?: ImageAssetResponse[];
        /**
         * The name of the driver file.
         */
        driverProgram?: string;
        /**
         * The details of the AZURE ML environment.
         */
        environment?: EnvironmentImageResponseResponseEnvironment;
        /**
         * The unique identifying details of the AZURE ML environment.
         */
        environmentReference?: EnvironmentImageResponseResponseEnvironmentReference;
        /**
         * The list of model Ids.
         */
        modelIds?: string[];
        /**
         * The list of models.
         */
        models?: ModelResponse[];
    }

    /**
     * The liveness probe requirements.
     */
    export interface AKSServiceResponseResponseLivenessProbeRequirements {
        /**
         * The number of failures to allow before returning an unhealthy status.
         */
        failureThreshold?: number;
        /**
         * The delay before the first probe in seconds.
         */
        initialDelaySeconds?: number;
        /**
         * The length of time between probes in seconds.
         */
        periodSeconds?: number;
        /**
         * The number of successful probes before returning a healthy status.
         */
        successThreshold?: number;
        /**
         * The probe timeout in seconds.
         */
        timeoutSeconds?: number;
    }

    /**
     * The response for an AKS variant.
     */
    export interface AKSVariantResponseResponse {
        /**
         * The compute environment type for the service.
         * Expected value is 'Custom'.
         */
        computeType: "Custom";
        /**
         * The deployment type for the service.
         */
        deploymentType?: string;
        /**
         * The service description.
         */
        description?: string;
        /**
         * The error details.
         */
        error: ServiceResponseBaseResponseError;
        /**
         * Is this the default variant.
         */
        isDefault?: boolean;
        /**
         * The service tag dictionary. Tags are mutable.
         */
        kvTags?: {[key: string]: string};
        /**
         * The service property dictionary. Properties are immutable.
         */
        properties?: {[key: string]: string};
        /**
         * The current state of the service.
         */
        state: string;
        /**
         * The amount of traffic variant receives.
         */
        trafficPercentile?: number;
        /**
         * The type of the variant.
         */
        type?: string;
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
         * AML Compute properties
         */
        properties?: AmlComputeResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: MachineLearningServiceErrorResponse[];
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
            properties: (val.properties ? amlComputeResponsePropertiesProvideDefaults(val.properties) : undefined),
        };
    }

    /**
     * AML Compute properties
     */
    export interface AmlComputeResponseProperties {
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
        errors: MachineLearningServiceErrorResponse[];
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
     * amlComputeResponsePropertiesProvideDefaults sets the appropriate defaults for AmlComputeResponseProperties
     */
    export function amlComputeResponsePropertiesProvideDefaults(val: AmlComputeResponseProperties): AmlComputeResponseProperties {
        return {
            ...val,
            enableNodePublicIp: (val.enableNodePublicIp) ?? true,
            osType: (val.osType) ?? "Linux",
            remoteLoginPortPublicAccess: (val.remoteLoginPortPublicAccess) ?? "NotSpecified",
            scaleSettings: (val.scaleSettings ? scaleSettingsResponseProvideDefaults(val.scaleSettings) : undefined),
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
         * Compute Instance properties
         */
        properties?: ComputeInstanceResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: MachineLearningServiceErrorResponse[];
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
            properties: (val.properties ? computeInstanceResponsePropertiesProvideDefaults(val.properties) : undefined),
        };
    }

    /**
     * Compute Instance properties
     */
    export interface ComputeInstanceResponseProperties {
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
        errors: MachineLearningServiceErrorResponse[];
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
     * computeInstanceResponsePropertiesProvideDefaults sets the appropriate defaults for ComputeInstanceResponseProperties
     */
    export function computeInstanceResponsePropertiesProvideDefaults(val: ComputeInstanceResponseProperties): ComputeInstanceResponseProperties {
        return {
            ...val,
            applicationSharingPolicy: (val.applicationSharingPolicy) ?? "Shared",
            computeInstanceAuthorizationType: (val.computeInstanceAuthorizationType) ?? "personal",
            sshSettings: (val.sshSettings ? computeInstanceSshSettingsResponseProvideDefaults(val.sshSettings) : undefined),
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
     * The resource requirements for the container (cpu and memory).
     */
    export interface ContainerResourceRequirementsResponse {
        /**
         * The minimum amount of CPU cores to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpu?: number;
        /**
         * The maximum amount of CPU cores allowed to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpuLimit?: number;
        /**
         * The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
         */
        fpga?: number;
        /**
         * The number of GPU cores in the container.
         */
        gpu?: number;
        /**
         * The minimum amount of memory (in GB) to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memoryInGB?: number;
        /**
         * The maximum amount of memory (in GB) allowed to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memoryInGBLimit?: number;
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
        provisioningErrors: MachineLearningServiceErrorResponse[];
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
        provisioningErrors: MachineLearningServiceErrorResponse[];
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
        properties?: DatabricksResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: MachineLearningServiceErrorResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }

    export interface DatabricksResponseProperties {
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
     * The dataset reference object.
     */
    export interface DatasetReferenceResponse {
        /**
         * The id of the dataset reference.
         */
        id?: string;
        /**
         * The name of the dataset reference.
         */
        name?: string;
    }

    /**
     * The details of the AZURE ML environment.
     */
    export interface EnvironmentImageResponseResponseEnvironment {
        /**
         * The definition of a Docker container.
         */
        docker?: ModelEnvironmentDefinitionResponseResponseDocker;
        /**
         * Definition of environment variables to be defined in the environment.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest".
         */
        inferencingStackVersion?: string;
        /**
         * The name of the environment.
         */
        name?: string;
        /**
         * Settings for a Python environment.
         */
        python?: ModelEnvironmentDefinitionResponseResponsePython;
        /**
         * Settings for a R environment.
         */
        r?: ModelEnvironmentDefinitionResponseResponseR;
        /**
         * The configuration for a Spark environment.
         */
        spark?: ModelEnvironmentDefinitionResponseResponseSpark;
        /**
         * The environment version.
         */
        version?: string;
    }

    /**
     * The unique identifying details of the AZURE ML environment.
     */
    export interface EnvironmentImageResponseResponseEnvironmentReference {
        /**
         * Name of the environment.
         */
        name?: string;
        /**
         * Version of the environment.
         */
        version?: string;
    }

    /**
     * Error detail information.
     */
    export interface ErrorDetailResponse {
        /**
         * Error code.
         */
        code: string;
        /**
         * Error message.
         */
        message: string;
    }

    /**
     * Error response information.
     */
    export interface ErrorResponseResponse {
        /**
         * Error code.
         */
        code: string;
        /**
         * An array of error detail objects.
         */
        details: ErrorDetailResponse[];
        /**
         * Error message.
         */
        message: string;
        /**
         * The target of the particular error
         */
        target: string;
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
        properties?: HDInsightResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: MachineLearningServiceErrorResponse[];
        /**
         * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * ARM resource id of the underlying compute
         */
        resourceId?: string;
    }

    export interface HDInsightResponseProperties {
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
     * An Image asset.
     */
    export interface ImageAssetResponse {
        /**
         * The Asset Id.
         */
        id?: string;
        /**
         * The mime type.
         */
        mimeType?: string;
        /**
         * Whether the Asset is unpacked.
         */
        unpack?: boolean;
        /**
         * The Url of the Asset.
         */
        url?: string;
    }

    /**
     * Wrapper for error response to follow ARM guidelines.
     */
    export interface MachineLearningServiceErrorResponse {
        /**
         * The error response.
         */
        error: ErrorResponseResponse;
    }

    /**
     * Image registry that contains the base image.
     */
    export interface ModelDockerSectionResponseResponseBaseImageRegistry {
        address?: string;
    }

    /**
     * The definition of a Docker container.
     */
    export interface ModelEnvironmentDefinitionResponseResponseDocker {
        /**
         * Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
         */
        baseDockerfile?: string;
        /**
         * Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
         */
        baseImage?: string;
        /**
         * Image registry that contains the base image.
         */
        baseImageRegistry?: ModelDockerSectionResponseResponseBaseImageRegistry;
    }

    /**
     * Settings for a Python environment.
     */
    export interface ModelEnvironmentDefinitionResponseResponsePython {
        baseCondaEnvironment?: string;
        /**
         * A JObject containing Conda dependencies.
         */
        condaDependencies?: any;
        /**
         * The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script.
         */
        interpreterPath?: string;
        /**
         * True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.
         */
        userManagedDependencies?: boolean;
    }

    /**
     * Settings for a R environment.
     */
    export interface ModelEnvironmentDefinitionResponseResponseR {
        /**
         * The packages from Bioconductor.
         */
        bioConductorPackages?: string[];
        /**
         * The CRAN packages to use.
         */
        cranPackages?: RCranPackageResponse[];
        /**
         * The packages from custom urls.
         */
        customUrlPackages?: string[];
        /**
         * The packages directly from GitHub.
         */
        gitHubPackages?: RGitHubPackageResponseResponse[];
        /**
         * The version of R to be installed
         */
        rVersion?: string;
        /**
         * The Rscript path to use if an environment build is not required.
         * The path specified gets used to call the user script.
         */
        rscriptPath?: string;
        /**
         * Date of MRAN snapshot to use in YYYY-MM-DD format, e.g. "2019-04-17"
         */
        snapshotDate?: string;
        /**
         * Indicates whether the environment is managed by user or by AzureML.
         */
        userManaged?: boolean;
    }

    /**
     * The configuration for a Spark environment.
     */
    export interface ModelEnvironmentDefinitionResponseResponseSpark {
        /**
         * The Spark packages to use.
         */
        packages?: SparkMavenPackageResponse[];
        /**
         * Whether to precache the packages.
         */
        precachePackages?: boolean;
        /**
         * The list of spark repositories.
         */
        repositories?: string[];
    }

    /**
     * An Azure Machine Learning Model.
     */
    export interface ModelResponse {
        /**
         * The Model creation time (UTC).
         */
        createdTime?: string;
        /**
         * The list of datasets associated with the model.
         */
        datasets?: DatasetReferenceResponse[];
        /**
         * Models derived from this model
         */
        derivedModelIds?: string[];
        /**
         * The Model description text.
         */
        description?: string;
        /**
         * The name of the experiment where this model was created.
         */
        experimentName?: string;
        /**
         * The Model framework.
         */
        framework?: string;
        /**
         * The Model framework version.
         */
        frameworkVersion?: string;
        /**
         * The Model Id.
         */
        id?: string;
        /**
         * The Model tag dictionary. Items are mutable.
         */
        kvTags?: {[key: string]: string};
        /**
         * The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
         */
        mimeType: string;
        /**
         * The Model last modified time (UTC).
         */
        modifiedTime?: string;
        /**
         * The Model name.
         */
        name: string;
        /**
         * The Parent Model Id.
         */
        parentModelId?: string;
        /**
         * The Model property dictionary. Properties are immutable.
         */
        properties?: {[key: string]: string};
        /**
         * Resource requirements for the model
         */
        resourceRequirements?: ContainerResourceRequirementsResponse;
        /**
         * The RunId that created this model.
         */
        runId?: string;
        /**
         * Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
         */
        sampleInputData?: string;
        /**
         * Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
         */
        sampleOutputData?: string;
        /**
         * Indicates whether we need to unpack the Model during docker Image creation.
         */
        unpack?: boolean;
        /**
         * The URL of the Model. Usually a SAS URL.
         */
        url: string;
        /**
         * The Model version assigned by Model Management Service.
         */
        version?: number;
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

    /**
     * Settings for a personal compute instance.
     */
    export interface PersonalComputeInstanceSettingsResponse {
        /**
         * A user explicitly assigned to a personal compute instance.
         */
        assignedUser?: AssignedUserResponse;
    }

    export interface RCranPackageResponse {
        /**
         * The package name.
         */
        name?: string;
        /**
         * The repository name.
         */
        repository?: string;
    }

    export interface RGitHubPackageResponseResponse {
        /**
         * Repository address in the format username/repo[/subdir][@ref|#pull].
         */
        repository?: string;
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

    /**
     * The error details.
     */
    export interface ServiceResponseBaseResponseError {
        /**
         * The error response.
         */
        error: ErrorResponseResponse;
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

    export interface SparkMavenPackageResponse {
        artifact?: string;
        group?: string;
        version?: string;
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
     * AKS properties
     */
    export interface SynapseSparkPoolPropertiesResponseProperties {
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
        /**
         * AKS properties
         */
        properties?: SynapseSparkPoolPropertiesResponseProperties;
        /**
         * Errors during provisioning
         */
        provisioningErrors: MachineLearningServiceErrorResponse[];
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
     * Read only system data
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC)
         */
        createdAt?: string;
        /**
         * An identifier for the identity that created the resource
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * An identifier for the identity that last modified the resource
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource
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
        provisioningErrors: MachineLearningServiceErrorResponse[];
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
