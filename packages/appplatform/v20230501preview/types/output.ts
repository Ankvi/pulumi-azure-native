import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Auth setting for basic auth.
     */
    export interface AcceleratorBasicAuthSettingResponse {
        /**
         * The type of the auth setting.
         * Expected value is 'BasicAuth'.
         */
        authType: "BasicAuth";
        /**
         * Resource Id of CA certificate for https URL of Git repository.
         */
        caCertResourceId?: string;
        /**
         * Username of git repository basic auth.
         */
        username: string;
    }

    export interface AcceleratorGitRepositoryResponse {
        /**
         * Properties of the auth setting payload.
         */
        authSetting: AcceleratorBasicAuthSettingResponse | AcceleratorPublicSettingResponse | AcceleratorSshSettingResponse;
        /**
         * Git repository branch to be used.
         */
        branch?: string;
        /**
         * Git repository commit to be used.
         */
        commit?: string;
        /**
         * Git repository tag to be used.
         */
        gitTag?: string;
        /**
         * Interval for checking for updates to Git or image repository.
         */
        intervalInSeconds?: number;
        /**
         * Git repository URL for the accelerator.
         */
        url: string;
    }

    /**
     * Auth setting for public url.
     */
    export interface AcceleratorPublicSettingResponse {
        /**
         * The type of the auth setting.
         * Expected value is 'Public'.
         */
        authType: "Public";
        /**
         * Resource Id of CA certificate for https URL of Git repository.
         */
        caCertResourceId?: string;
    }

    /**
     * Auth setting for SSH auth.
     */
    export interface AcceleratorSshSettingResponse {
        /**
         * The type of the auth setting.
         * Expected value is 'SSH'.
         */
        authType: "SSH";
    }

    /**
     * The properties of custom domain for API portal
     */
    export interface ApiPortalCustomDomainPropertiesResponse {
        /**
         * The thumbprint of bound certificate.
         */
        thumbprint?: string;
    }

    /**
     * Collection of instances belong to the API portal
     */
    export interface ApiPortalInstanceResponse {
        /**
         * Name of the API portal instance
         */
        name: string;
        /**
         * Status of the API portal instance
         */
        status: string;
    }

    /**
     * API portal properties payload
     */
    export interface ApiPortalPropertiesResponse {
        /**
         * The array of resource Ids of gateway to integrate with API portal.
         */
        gatewayIds?: string[];
        /**
         * Indicate if only https is allowed.
         */
        httpsOnly?: boolean;
        /**
         * Collection of instances belong to API portal.
         */
        instances: ApiPortalInstanceResponse[];
        /**
         * State of the API portal.
         */
        provisioningState: string;
        /**
         * Indicates whether the API portal exposes endpoint.
         */
        public?: boolean;
        /**
         * The requested resource quantity for required CPU and Memory.
         */
        resourceRequests: ApiPortalResourceRequestsResponse;
        /**
         * Collection of OpenAPI source URL locations.
         */
        sourceUrls?: string[];
        /**
         * Single sign-on related configuration
         */
        ssoProperties?: SsoPropertiesResponse;
        /**
         * URL of the API portal, exposed when 'public' is true.
         */
        url: string;
    }
    /**
     * apiPortalPropertiesResponseProvideDefaults sets the appropriate defaults for ApiPortalPropertiesResponse
     */
    export function apiPortalPropertiesResponseProvideDefaults(val: ApiPortalPropertiesResponse): ApiPortalPropertiesResponse {
        return {
            ...val,
            httpsOnly: (val.httpsOnly) ?? false,
            public: (val.public) ?? false,
        };
    }

    /**
     * Resource requests of the API portal
     */
    export interface ApiPortalResourceRequestsResponse {
        /**
         * Cpu allocated to each API portal instance
         */
        cpu: string;
        /**
         * Memory allocated to each API portal instance
         */
        memory: string;
    }

    /**
     * Properties of an APM
     */
    export interface ApmPropertiesResponse {
        /**
         * Non-sensitive properties for the APM
         */
        properties?: {[key: string]: string};
        /**
         * State of the APM.
         */
        provisioningState: string;
        /**
         * APM Type
         */
        type: string;
    }

    /**
     * A reference to the APM
     */
    export interface ApmReferenceResponse {
        /**
         * Resource Id of the APM
         */
        resourceId: string;
    }

    /**
     * App resource properties payload
     */
    export interface AppResourcePropertiesResponse {
        /**
         * Collection of addons
         */
        addonConfigs?: {[key: string]: any};
        /**
         * List of custom persistent disks
         */
        customPersistentDisks?: CustomPersistentDiskResourceResponse[];
        /**
         * Indicate if end to end TLS is enabled.
         */
        enableEndToEndTLS?: boolean;
        /**
         * Fully qualified dns Name.
         */
        fqdn: string;
        /**
         * Indicate if only https is allowed.
         */
        httpsOnly?: boolean;
        /**
         * App ingress settings payload.
         */
        ingressSettings?: IngressSettingsResponse;
        /**
         * Collection of loaded certificates
         */
        loadedCertificates?: LoadedCertificateResponse[];
        /**
         * Persistent disk settings
         */
        persistentDisk?: PersistentDiskResponse;
        /**
         * Provisioning state of the App
         */
        provisioningState: string;
        /**
         * Indicates whether the App exposes public endpoint
         */
        public?: boolean;
        /**
         * Collection of auth secrets
         */
        secrets?: SecretResponse[];
        /**
         * Temporary disk settings
         */
        temporaryDisk?: TemporaryDiskResponse;
        /**
         * URL of the App
         */
        url: string;
        /**
         * Additional App settings in vnet injection instance
         */
        vnetAddons?: AppVNetAddonsResponse;
        /**
         * The workload profile used for this app. Supported for Consumption + Dedicated plan.
         */
        workloadProfileName?: string;
    }
    /**
     * appResourcePropertiesResponseProvideDefaults sets the appropriate defaults for AppResourcePropertiesResponse
     */
    export function appResourcePropertiesResponseProvideDefaults(val: AppResourcePropertiesResponse): AppResourcePropertiesResponse {
        return {
            ...val,
            enableEndToEndTLS: (val.enableEndToEndTLS) ?? false,
            httpsOnly: (val.httpsOnly) ?? false,
            temporaryDisk: (val.temporaryDisk ? temporaryDiskResponseProvideDefaults(val.temporaryDisk) : undefined),
            vnetAddons: (val.vnetAddons ? appVNetAddonsResponseProvideDefaults(val.vnetAddons) : undefined),
        };
    }

    /**
     * Additional App settings in vnet injection instance
     */
    export interface AppVNetAddonsResponse {
        /**
         * Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet.
         */
        publicEndpoint?: boolean;
        /**
         * URL of the App in vnet injection instance which could be accessed from internet
         */
        publicEndpointUrl: string;
    }
    /**
     * appVNetAddonsResponseProvideDefaults sets the appropriate defaults for AppVNetAddonsResponse
     */
    export function appVNetAddonsResponseProvideDefaults(val: AppVNetAddonsResponse): AppVNetAddonsResponse {
        return {
            ...val,
            publicEndpoint: (val.publicEndpoint) ?? false,
        };
    }

    export interface ApplicationAcceleratorComponentResponse {
        instances: ApplicationAcceleratorInstanceResponse[];
        name: string;
        resourceRequests?: ApplicationAcceleratorResourceRequestsResponse;
    }

    export interface ApplicationAcceleratorInstanceResponse {
        /**
         * Name of the Application Accelerator instance.
         */
        name: string;
        /**
         * Status of the Application Accelerator instance. It can be Pending, Running, Succeeded, Failed, Unknown.
         */
        status: string;
    }

    /**
     * Application accelerator properties payload
     */
    export interface ApplicationAcceleratorPropertiesResponse {
        /**
         * Collection of components belong to application accelerator.
         */
        components: ApplicationAcceleratorComponentResponse[];
        /**
         * State of the application accelerator.
         */
        provisioningState: string;
    }

    export interface ApplicationAcceleratorResourceRequestsResponse {
        /**
         * Cpu allocated to each application accelerator component. 1 core can be represented by 1 or 1000m
         */
        cpu: string;
        /**
         * Instance count of the application accelerator component.
         */
        instanceCount: number;
        /**
         * Memory allocated to each application accelerator component. 1 GB can be represented by 1Gi or 1024Mi.
         */
        memory: string;
    }

    /**
     * Application Insights agent versions properties payload
     */
    export interface ApplicationInsightsAgentVersionsResponse {
        /**
         * Indicates the version of application insight java agent
         */
        java: string;
    }

    /**
     * Application Live View properties payload
     */
    export interface ApplicationLiveViewComponentResponse {
        /**
         * Collection of instances belong to Application Live View.
         */
        instances: ApplicationLiveViewInstanceResponse[];
        /**
         * Name of the component.
         */
        name: any;
        /**
         * The requested resource quantity for required CPU and Memory.
         */
        resourceRequests: ApplicationLiveViewResourceRequestsResponse;
    }

    /**
     * Collection of instances belong to the Application Live View
     */
    export interface ApplicationLiveViewInstanceResponse {
        /**
         * Name of the Application Live View instance.
         */
        name: string;
        /**
         * Status of the Application Live View instance. It can be Pending, Running, Succeeded, Failed, Unknown.
         */
        status: string;
    }

    /**
     * Application Live View properties payload
     */
    export interface ApplicationLiveViewPropertiesResponse {
        /**
         * Component details of Application Live View
         */
        components: ApplicationLiveViewComponentResponse[];
        /**
         * State of the Application Live View.
         */
        provisioningState: string;
    }

    /**
     * The resource quantity for required CPU and Memory of Application Live View component
     */
    export interface ApplicationLiveViewResourceRequestsResponse {
        /**
         * Cpu quantity allocated to each Application Live View component instance. 1 core can be represented by 1 or 1000m.
         */
        cpu: string;
        /**
         * Desired instance count of Application Live View component instance.
         */
        instanceCount: number;
        /**
         * Memory quantity allocated to each Application Live View component instance. 1 GB can be represented by 1Gi or 1024Mi.
         */
        memory: string;
    }

    /**
     * The properties of the Azure File volume. Azure File shares are mounted as volumes.
     */
    export interface AzureFileVolumeResponse {
        /**
         * If set to true, it will create and mount a dedicated directory for every individual app instance.
         */
        enableSubPath?: boolean;
        /**
         * These are the mount options for a persistent disk.
         */
        mountOptions?: string[];
        /**
         * The mount path of the persistent disk.
         */
        mountPath: string;
        /**
         * Indicates whether the persistent disk is a readOnly one.
         */
        readOnly?: boolean;
        /**
         * The share name of the Azure File share.
         */
        shareName?: string;
        /**
         * The type of the underlying resource to mount as a persistent disk.
         * Expected value is 'AzureFileVolume'.
         */
        type: "AzureFileVolume";
    }
    /**
     * azureFileVolumeResponseProvideDefaults sets the appropriate defaults for AzureFileVolumeResponse
     */
    export function azureFileVolumeResponseProvideDefaults(val: AzureFileVolumeResponse): AzureFileVolumeResponse {
        return {
            ...val,
            enableSubPath: (val.enableSubPath) ?? false,
        };
    }

    /**
     * Binding resource properties payload
     */
    export interface BindingResourcePropertiesResponse {
        /**
         * Binding parameters of the Binding resource
         */
        bindingParameters?: {[key: string]: string};
        /**
         * Creation time of the Binding resource
         */
        createdAt: string;
        /**
         * The generated Spring Boot property file for this binding. The secret will be deducted.
         */
        generatedProperties: string;
        /**
         * The key of the bound resource
         */
        key?: string;
        /**
         * The Azure resource id of the bound resource
         */
        resourceId?: string;
        /**
         * The name of the bound resource
         */
        resourceName: string;
        /**
         * The standard Azure resource type of the bound resource
         */
        resourceType: string;
        /**
         * Update time of the Binding resource
         */
        updatedAt: string;
    }

    /**
     * Build resource properties payload
     */
    export interface BuildPropertiesResponse {
        /**
         * The resource id of agent pool
         */
        agentPool?: string;
        /**
         * The APMs for this build
         */
        apms?: ApmReferenceResponse[];
        /**
         * The resource id of builder to build the source code
         */
        builder?: string;
        /**
         * The CA Certificates for this build
         */
        certificates?: CertificateReferenceResponse[];
        /**
         * The environment variables for this build
         */
        env?: {[key: string]: string};
        /**
         * Provisioning state of the KPack build result
         */
        provisioningState: string;
        /**
         * The relative path of source code
         */
        relativePath?: string;
        /**
         * The customized build resource for this build
         */
        resourceRequests?: BuildResourceRequestsResponse;
        /**
         *  The build result triggered by this build
         */
        triggeredBuildResult: TriggeredBuildResultResponse;
    }
    /**
     * buildPropertiesResponseProvideDefaults sets the appropriate defaults for BuildPropertiesResponse
     */
    export function buildPropertiesResponseProvideDefaults(val: BuildPropertiesResponse): BuildPropertiesResponse {
        return {
            ...val,
            resourceRequests: (val.resourceRequests ? buildResourceRequestsResponseProvideDefaults(val.resourceRequests) : undefined),
        };
    }

    /**
     * Resource request payload of Build Resource.
     */
    export interface BuildResourceRequestsResponse {
        /**
         * Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m. 
         * The default value is 1, this should not exceed build service agent pool cpu size.
         */
        cpu?: string;
        /**
         * Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi. 
         * The default value is 2Gi, this should not exceed build service agent pool memory size.
         */
        memory?: string;
    }
    /**
     * buildResourceRequestsResponseProvideDefaults sets the appropriate defaults for BuildResourceRequestsResponse
     */
    export function buildResourceRequestsResponseProvideDefaults(val: BuildResourceRequestsResponse): BuildResourceRequestsResponse {
        return {
            ...val,
            cpu: (val.cpu) ?? "1",
            memory: (val.memory) ?? "2Gi",
        };
    }

    /**
     * Reference to a build result
     */
    export interface BuildResultUserSourceInfoResponse {
        /**
         * Resource id of an existing succeeded build result under the same Spring instance.
         */
        buildResultId?: string;
        /**
         * Type of the source uploaded
         * Expected value is 'BuildResult'.
         */
        type: "BuildResult";
        /**
         * Version of the source
         */
        version?: string;
    }

    /**
     * Build service agent pool properties
     */
    export interface BuildServiceAgentPoolPropertiesResponse {
        /**
         * build service agent pool size properties
         */
        poolSize?: BuildServiceAgentPoolSizePropertiesResponse;
        /**
         * Provisioning state of the build service agent pool
         */
        provisioningState: string;
    }

    /**
     * Build service agent pool size properties
     */
    export interface BuildServiceAgentPoolSizePropertiesResponse {
        /**
         * The cpu property of build service agent pool size
         */
        cpu: string;
        /**
         * The memory property of build service agent pool size
         */
        memory: string;
        /**
         * The name of build service agent pool size
         */
        name?: string;
    }

    /**
     * KPack Builder properties payload
     */
    export interface BuilderPropertiesResponse {
        /**
         * Builder buildpack groups.
         */
        buildpackGroups?: BuildpacksGroupPropertiesResponse[];
        /**
         * Builder provision status.
         */
        provisioningState: string;
        /**
         * Builder cluster stack property.
         */
        stack?: StackPropertiesResponse;
    }

    /**
     * Buildpack Binding Launch Properties
     */
    export interface BuildpackBindingLaunchPropertiesResponse {
        /**
         * Non-sensitive properties for launchProperties
         */
        properties?: {[key: string]: string};
        /**
         * Sensitive properties for launchProperties
         */
        secrets?: {[key: string]: string};
    }

    /**
     * Properties of a buildpack binding
     */
    export interface BuildpackBindingPropertiesResponse {
        /**
         * Buildpack Binding Type
         */
        bindingType?: string;
        /**
         * The object describes the buildpack binding launch properties
         */
        launchProperties?: BuildpackBindingLaunchPropertiesResponse;
        /**
         * State of the Buildpack Binding.
         */
        provisioningState: string;
    }

    /**
     * Buildpack properties payload
     */
    export interface BuildpackPropertiesResponse {
        /**
         * Id of the buildpack
         */
        id?: string;
    }

    /**
     * Buildpack group properties of the Builder
     */
    export interface BuildpacksGroupPropertiesResponse {
        /**
         * Buildpacks in the buildpack group
         */
        buildpacks?: BuildpackPropertiesResponse[];
        /**
         * Buildpack group name
         */
        name?: string;
    }

    /**
     * A reference to the certificate
     */
    export interface CertificateReferenceResponse {
        /**
         * Resource Id of the certificate
         */
        resourceId: string;
    }

    /**
     * Service properties payload
     */
    export interface ClusterResourcePropertiesResponse {
        /**
         * Fully qualified dns name of the service instance
         */
        fqdn: string;
        /**
         * The name of the resource group that contains the infrastructure resources
         */
        infraResourceGroup?: string;
        /**
         * The resource Id of the Managed Environment that the Spring Apps instance builds on
         */
        managedEnvironmentId?: string;
        /**
         * Purchasing 3rd party product of the Service resource.
         */
        marketplaceResource?: MarketplaceResourceResponse;
        /**
         * Network profile of the Service
         */
        networkProfile?: NetworkProfileResponse;
        /**
         * Power state of the Service
         */
        powerState: string;
        /**
         * Provisioning state of the Service
         */
        provisioningState: string;
        /**
         * ServiceInstanceEntity Id which uniquely identifies a created resource
         */
        serviceId: string;
        /**
         * Version of the Service
         */
        version: number;
        /**
         * Additional Service settings in vnet injection instance
         */
        vnetAddons?: ServiceVNetAddonsResponse;
        zoneRedundant?: boolean;
    }
    /**
     * clusterResourcePropertiesResponseProvideDefaults sets the appropriate defaults for ClusterResourcePropertiesResponse
     */
    export function clusterResourcePropertiesResponseProvideDefaults(val: ClusterResourcePropertiesResponse): ClusterResourcePropertiesResponse {
        return {
            ...val,
            vnetAddons: (val.vnetAddons ? serviceVNetAddonsResponseProvideDefaults(val.vnetAddons) : undefined),
            zoneRedundant: (val.zoneRedundant) ?? false,
        };
    }

    /**
     * Property of git.
     */
    export interface ConfigServerGitPropertyResponse {
        /**
         * Public sshKey of git repository.
         */
        hostKey?: string;
        /**
         * SshKey algorithm of git repository.
         */
        hostKeyAlgorithm?: string;
        /**
         * Label of the repository
         */
        label?: string;
        /**
         * Password of git repository basic auth.
         */
        password?: string;
        /**
         * Private sshKey algorithm of git repository.
         */
        privateKey?: string;
        /**
         * Repositories of git.
         */
        repositories?: GitPatternRepositoryResponse[];
        /**
         * Searching path of the repository
         */
        searchPaths?: string[];
        /**
         * Strict host key checking or not.
         */
        strictHostKeyChecking?: boolean;
        /**
         * URI of the repository
         */
        uri: string;
        /**
         * Username of git repository basic auth.
         */
        username?: string;
    }

    /**
     * Config server git properties payload
     */
    export interface ConfigServerPropertiesResponse {
        /**
         * Settings of config server.
         */
        configServer?: ConfigServerSettingsResponse;
        /**
         * Enabled state of the config server. This is only used in Consumption tier.
         */
        enabledState?: string;
        /**
         * Error when apply config server settings.
         */
        error?: ErrorResponse;
        /**
         * State of the config server.
         */
        provisioningState: string;
    }

    /**
     * The settings of config server.
     */
    export interface ConfigServerSettingsResponse {
        /**
         * Property of git environment.
         */
        gitProperty?: ConfigServerGitPropertyResponse;
    }

    /**
     * Property of git environment.
     */
    export interface ConfigurationServiceGitPropertyResponse {
        /**
         * Repositories of Application Configuration Service git property.
         */
        repositories?: ConfigurationServiceGitRepositoryResponse[];
    }

    /**
     * Git repository property payload for Application Configuration Service
     */
    export interface ConfigurationServiceGitRepositoryResponse {
        /**
         * Resource Id of CA certificate for https URL of Git repository.
         */
        caCertResourceId?: string;
        /**
         * Git libraries used to support various repository providers
         */
        gitImplementation?: string;
        /**
         * Public sshKey of git repository.
         */
        hostKey?: string;
        /**
         * SshKey algorithm of git repository.
         */
        hostKeyAlgorithm?: string;
        /**
         * Label of the repository
         */
        label: string;
        /**
         * Name of the repository
         */
        name: string;
        /**
         * Password of git repository basic auth.
         */
        password?: string;
        /**
         * Collection of patterns of the repository
         */
        patterns: string[];
        /**
         * Private sshKey algorithm of git repository.
         */
        privateKey?: string;
        /**
         * Searching path of the repository
         */
        searchPaths?: string[];
        /**
         * Strict host key checking or not.
         */
        strictHostKeyChecking?: boolean;
        /**
         * URI of the repository
         */
        uri: string;
        /**
         * Username of git repository basic auth.
         */
        username?: string;
    }

    /**
     * Collection of instances belong to the Application Configuration Service
     */
    export interface ConfigurationServiceInstanceResponse {
        /**
         * Name of the Application Configuration Service instance
         */
        name: string;
        /**
         * Status of the Application Configuration Service instance
         */
        status: string;
    }

    /**
     * Application Configuration Service properties payload
     */
    export interface ConfigurationServicePropertiesResponse {
        /**
         * The generation of the Application Configuration Service.
         */
        generation?: string;
        /**
         * Collection of instances belong to Application Configuration Service.
         */
        instances: ConfigurationServiceInstanceResponse[];
        /**
         * State of the Application Configuration Service.
         */
        provisioningState: string;
        /**
         * The requested resource quantity for required CPU and Memory.
         */
        resourceRequests: ConfigurationServiceResourceRequestsResponse;
        /**
         * The settings of Application Configuration Service.
         */
        settings?: ConfigurationServiceSettingsResponse;
    }
    /**
     * configurationServicePropertiesResponseProvideDefaults sets the appropriate defaults for ConfigurationServicePropertiesResponse
     */
    export function configurationServicePropertiesResponseProvideDefaults(val: ConfigurationServicePropertiesResponse): ConfigurationServicePropertiesResponse {
        return {
            ...val,
            generation: (val.generation) ?? "Gen1",
        };
    }

    /**
     * Resource request payload of Application Configuration Service
     */
    export interface ConfigurationServiceResourceRequestsResponse {
        /**
         * Cpu allocated to each Application Configuration Service instance
         */
        cpu: string;
        /**
         * Instance count of the Application Configuration Service
         */
        instanceCount: number;
        /**
         * Memory allocated to each Application Configuration Service instance
         */
        memory: string;
    }

    /**
     * The settings of Application Configuration Service.
     */
    export interface ConfigurationServiceSettingsResponse {
        /**
         * Property of git environment.
         */
        gitProperty?: ConfigurationServiceGitPropertyResponse;
    }

    /**
     * Container liveness and readiness probe settings
     */
    export interface ContainerProbeSettingsResponse {
        /**
         * Indicates whether disable the liveness and readiness probe
         */
        disableProbe?: boolean;
    }

    /**
     * The basic authentication properties for the container registry resource.
     */
    export interface ContainerRegistryBasicCredentialsResponse {
        /**
         * The login server of the Container Registry.
         */
        server: string;
        /**
         * The credential type of the container registry credentials.
         * Expected value is 'BasicAuth'.
         */
        type: "BasicAuth";
        /**
         * The username of the Container Registry.
         */
        username: string;
    }

    /**
     * Container registry resource payload.
     */
    export interface ContainerRegistryPropertiesResponse {
        /**
         * The credentials of the container registry resource.
         */
        credentials: ContainerRegistryBasicCredentialsResponse;
        /**
         * State of the Container Registry.
         */
        provisioningState: string;
    }

    /**
     * Properties of certificate imported from key vault.
     */
    export interface ContentCertificatePropertiesResponse {
        /**
         * The activate date of certificate.
         */
        activateDate: string;
        /**
         * The domain list of certificate.
         */
        dnsNames: string[];
        /**
         * The expiration date of certificate.
         */
        expirationDate: string;
        /**
         * The issue date of certificate.
         */
        issuedDate: string;
        /**
         * The issuer of certificate.
         */
        issuer: string;
        /**
         * Provisioning state of the Certificate
         */
        provisioningState: string;
        /**
         * The subject name of certificate.
         */
        subjectName: string;
        /**
         * The thumbprint of certificate.
         */
        thumbprint: string;
        /**
         * The type of the certificate source.
         * Expected value is 'ContentCertificate'.
         */
        type: "ContentCertificate";
    }

    /**
     * Custom container payload
     */
    export interface CustomContainerResponse {
        /**
         * Arguments to the entrypoint. The docker image's CMD is used if this is not provided.
         */
        args?: string[];
        /**
         * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.
         */
        command?: string[];
        /**
         * Container image of the custom container. This should be in the form of <repository>:<tag> without the server name of the registry
         */
        containerImage?: string;
        /**
         * Credential of the image registry
         */
        imageRegistryCredential?: ImageRegistryCredentialResponse;
        /**
         * Language framework of the container image uploaded
         */
        languageFramework?: string;
        /**
         * The name of the registry that contains the container image
         */
        server?: string;
    }

    /**
     * Custom container user source info
     */
    export interface CustomContainerUserSourceInfoResponse {
        /**
         * Custom container payload
         */
        customContainer?: CustomContainerResponse;
        /**
         * Type of the source uploaded
         * Expected value is 'Container'.
         */
        type: "Container";
        /**
         * Version of the source
         */
        version?: string;
    }

    /**
     * Custom domain of app resource payload.
     */
    export interface CustomDomainPropertiesResponse {
        /**
         * The app name of domain.
         */
        appName: string;
        /**
         * The bound certificate name of domain.
         */
        certName?: string;
        /**
         * Provisioning state of the Domain
         */
        provisioningState: string;
        /**
         * The thumbprint of bound certificate.
         */
        thumbprint?: string;
    }

    /**
     * Custom persistent disk resource payload.
     */
    export interface CustomPersistentDiskResourceResponse {
        /**
         * Properties of the custom persistent disk resource payload.
         */
        customPersistentDiskProperties?: AzureFileVolumeResponse;
        /**
         * The resource id of Azure Spring Apps Storage resource.
         */
        storageId: string;
    }
    /**
     * customPersistentDiskResourceResponseProvideDefaults sets the appropriate defaults for CustomPersistentDiskResourceResponse
     */
    export function customPersistentDiskResourceResponseProvideDefaults(val: CustomPersistentDiskResourceResponse): CustomPersistentDiskResourceResponse {
        return {
            ...val,
            customPersistentDiskProperties: (val.customPersistentDiskProperties ? azureFileVolumeResponseProvideDefaults(val.customPersistentDiskProperties) : undefined),
        };
    }

    /**
     * Azure Spring Apps App Instance Custom scaling rule.
     */
    export interface CustomScaleRuleResponse {
        /**
         * Authentication secrets for the custom scale rule.
         */
        auth?: ScaleRuleAuthResponse[];
        /**
         * Metadata properties to describe custom scale rule.
         */
        metadata?: {[key: string]: string};
        /**
         * Type of the custom scale rule
         * eg: azure-servicebus, redis etc.
         */
        type?: string;
    }

    /**
     * Customized accelerator properties payload
     */
    export interface CustomizedAcceleratorPropertiesResponse {
        acceleratorTags?: string[];
        description?: string;
        displayName?: string;
        gitRepository: AcceleratorGitRepositoryResponse;
        iconUrl?: string;
        /**
         * State of the customized accelerator.
         */
        provisioningState: string;
    }

    /**
     * Deployment instance payload
     */
    export interface DeploymentInstanceResponse {
        /**
         * Discovery status of the deployment instance
         */
        discoveryStatus: string;
        /**
         * Name of the deployment instance
         */
        name: string;
        /**
         * Failed reason of the deployment instance
         */
        reason: string;
        /**
         * Start time of the deployment instance
         */
        startTime: string;
        /**
         * Status of the deployment instance
         */
        status: string;
        /**
         * Availability zone information of the deployment instance
         */
        zone: string;
    }

    /**
     * Deployment resource properties payload
     */
    export interface DeploymentResourcePropertiesResponse {
        /**
         * Indicates whether the Deployment is active
         */
        active?: boolean;
        /**
         * Deployment settings of the Deployment
         */
        deploymentSettings?: DeploymentSettingsResponse;
        /**
         * Collection of instances belong to the Deployment
         */
        instances: DeploymentInstanceResponse[];
        /**
         * Provisioning state of the Deployment
         */
        provisioningState: string;
        /**
         * Uploaded source information of the deployment.
         */
        source?: BuildResultUserSourceInfoResponse | CustomContainerUserSourceInfoResponse | JarUploadedUserSourceInfoResponse | NetCoreZipUploadedUserSourceInfoResponse | SourceUploadedUserSourceInfoResponse | UploadedUserSourceInfoResponse;
        /**
         * Status of the Deployment
         */
        status: string;
    }
    /**
     * deploymentResourcePropertiesResponseProvideDefaults sets the appropriate defaults for DeploymentResourcePropertiesResponse
     */
    export function deploymentResourcePropertiesResponseProvideDefaults(val: DeploymentResourcePropertiesResponse): DeploymentResourcePropertiesResponse {
        return {
            ...val,
            deploymentSettings: (val.deploymentSettings ? deploymentSettingsResponseProvideDefaults(val.deploymentSettings) : undefined),
        };
    }

    /**
     * Deployment settings payload
     */
    export interface DeploymentSettingsResponse {
        /**
         * Collection of addons
         */
        addonConfigs?: {[key: string]: any};
        /**
         * Collection of ApmReferences
         */
        apms?: ApmReferenceResponse[];
        /**
         * Container liveness and readiness probe settings
         */
        containerProbeSettings?: ContainerProbeSettingsResponse;
        /**
         * Collection of environment variables
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Periodic probe of App Instance liveness. App Instance will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        livenessProbe?: ProbeResponse;
        /**
         * Periodic probe of App Instance service readiness. App Instance will be removed from service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        readinessProbe?: ProbeResponse;
        /**
         * The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later.
         */
        resourceRequests?: ResourceRequestsResponse;
        /**
         * Scaling properties for the Azure Spring Apps App Instance.
         */
        scale?: ScaleResponse;
        /**
         * StartupProbe indicates that the App Instance has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a App Instance's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        startupProbe?: ProbeResponse;
        /**
         * Optional duration in seconds the App Instance needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the App Instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 90 seconds.
         */
        terminationGracePeriodSeconds?: number;
    }
    /**
     * deploymentSettingsResponseProvideDefaults sets the appropriate defaults for DeploymentSettingsResponse
     */
    export function deploymentSettingsResponseProvideDefaults(val: DeploymentSettingsResponse): DeploymentSettingsResponse {
        return {
            ...val,
            livenessProbe: (val.livenessProbe ? probeResponseProvideDefaults(val.livenessProbe) : undefined),
            readinessProbe: (val.readinessProbe ? probeResponseProvideDefaults(val.readinessProbe) : undefined),
            scale: (val.scale ? scaleResponseProvideDefaults(val.scale) : undefined),
            startupProbe: (val.startupProbe ? probeResponseProvideDefaults(val.startupProbe) : undefined),
            terminationGracePeriodSeconds: (val.terminationGracePeriodSeconds) ?? 90,
        };
    }

    export interface DevToolPortalComponentResponse {
        /**
         * Collection of instances belong to Dev Tool Portal.
         */
        instances: DevToolPortalInstanceResponse[];
        name: string;
        /**
         * The requested resource quantity for required CPU and Memory.
         */
        resourceRequests: DevToolPortalResourceRequestsResponse;
    }

    /**
     * Detail settings for Dev Tool Portal feature
     */
    export interface DevToolPortalFeatureDetailResponse {
        /**
         * Route path to visit the plugin
         */
        route: string;
        /**
         * State of the plugin
         */
        state?: string;
    }
    /**
     * devToolPortalFeatureDetailResponseProvideDefaults sets the appropriate defaults for DevToolPortalFeatureDetailResponse
     */
    export function devToolPortalFeatureDetailResponseProvideDefaults(val: DevToolPortalFeatureDetailResponse): DevToolPortalFeatureDetailResponse {
        return {
            ...val,
            state: (val.state) ?? "Enabled",
        };
    }

    /**
     * Settings for Dev Tool Portal
     */
    export interface DevToolPortalFeatureSettingsResponse {
        /**
         * Detail of Accelerator plugin
         */
        applicationAccelerator?: DevToolPortalFeatureDetailResponse;
        /**
         * Detail of App Live View plugin
         */
        applicationLiveView?: DevToolPortalFeatureDetailResponse;
    }
    /**
     * devToolPortalFeatureSettingsResponseProvideDefaults sets the appropriate defaults for DevToolPortalFeatureSettingsResponse
     */
    export function devToolPortalFeatureSettingsResponseProvideDefaults(val: DevToolPortalFeatureSettingsResponse): DevToolPortalFeatureSettingsResponse {
        return {
            ...val,
            applicationAccelerator: (val.applicationAccelerator ? devToolPortalFeatureDetailResponseProvideDefaults(val.applicationAccelerator) : undefined),
            applicationLiveView: (val.applicationLiveView ? devToolPortalFeatureDetailResponseProvideDefaults(val.applicationLiveView) : undefined),
        };
    }

    /**
     * Collection of instances belong to the Dev Tool Portal.
     */
    export interface DevToolPortalInstanceResponse {
        /**
         * Name of the Dev Tool Portal instance.
         */
        name: string;
        /**
         * Status of the Dev Tool Portal instance. It can be Pending, Running, Succeeded, Failed, Unknown.
         */
        status: string;
    }

    /**
     * Dev Tool Portal properties payload
     */
    export interface DevToolPortalPropertiesResponse {
        /**
         * Collection of components belong to Dev Tool Portal.
         */
        components: DevToolPortalComponentResponse[];
        /**
         * Settings for Dev Tool Portal
         */
        features?: DevToolPortalFeatureSettingsResponse;
        /**
         * State of the Dev Tool Portal.
         */
        provisioningState: string;
        /**
         * Indicates whether the resource exposes public endpoint
         */
        public?: boolean;
        /**
         * Single sign-on related configuration
         */
        ssoProperties?: DevToolPortalSsoPropertiesResponse;
        /**
         * URL of the resource, exposed when 'public' is true.
         */
        url: string;
    }
    /**
     * devToolPortalPropertiesResponseProvideDefaults sets the appropriate defaults for DevToolPortalPropertiesResponse
     */
    export function devToolPortalPropertiesResponseProvideDefaults(val: DevToolPortalPropertiesResponse): DevToolPortalPropertiesResponse {
        return {
            ...val,
            features: (val.features ? devToolPortalFeatureSettingsResponseProvideDefaults(val.features) : undefined),
            public: (val.public) ?? false,
        };
    }

    /**
     * The resource quantity for required CPU and Memory of Dev Tool Portal
     */
    export interface DevToolPortalResourceRequestsResponse {
        /**
         * Cpu quantity allocated to each Dev Tool Portal instance. 1 core can be represented by 1 or 1000m
         */
        cpu: string;
        /**
         * Desired instance count of Dev Tool Portal.
         */
        instanceCount: number;
        /**
         * Memory quantity allocated to each Dev Tool Portal instance. 1 GB can be represented by 1Gi or 1024Mi.
         */
        memory: string;
    }

    /**
     * Single sign-on related configuration
     */
    export interface DevToolPortalSsoPropertiesResponse {
        /**
         * The public identifier for the application
         */
        clientId?: string;
        /**
         * The secret known only to the application and the authorization server
         */
        clientSecret?: string;
        /**
         * The URI of a JSON file with generic OIDC provider configuration.
         */
        metadataUrl?: string;
        /**
         * It defines the specific actions applications can be allowed to do on a user's behalf
         */
        scopes?: string[];
    }

    /**
     * The error code compose of code and message.
     */
    export interface ErrorResponse {
        /**
         * The code of error.
         */
        code?: string;
        /**
         * The message of error.
         */
        message?: string;
    }

    /**
     * ExecAction describes a "run in container" action.
     */
    export interface ExecActionResponse {
        /**
         * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
         */
        command?: string[];
        /**
         * The type of the action to take to perform the health check.
         * Expected value is 'ExecAction'.
         */
        type: "ExecAction";
    }

    /**
     * API metadata property for Spring Cloud Gateway
     */
    export interface GatewayApiMetadataPropertiesResponse {
        /**
         * Detailed description of the APIs available on the Gateway instance (default: `Generated OpenAPI 3 document that describes the API routes configured.`)
         */
        description?: string;
        /**
         * Location of additional documentation for the APIs available on the Gateway instance
         */
        documentation?: string;
        /**
         * Base URL that API consumers will use to access APIs on the Gateway instance.
         */
        serverUrl?: string;
        /**
         * Title describing the context of the APIs available on the Gateway instance (default: `Spring Cloud Gateway for K8S`)
         */
        title?: string;
        /**
         * Version of APIs available on this Gateway instance (default: `unspecified`).
         */
        version?: string;
    }

    /**
     * API route config of the Spring Cloud Gateway
     */
    export interface GatewayApiRouteResponse {
        /**
         * A description, will be applied to methods in the generated OpenAPI documentation.
         */
        description?: string;
        /**
         * To modify the request before sending it to the target endpoint, or the received response.
         */
        filters?: string[];
        /**
         * Route processing order.
         */
        order?: number;
        /**
         * A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
         */
        predicates?: string[];
        /**
         * Enable sso validation.
         */
        ssoEnabled?: boolean;
        /**
         * Classification tags, will be applied to methods in the generated OpenAPI documentation.
         */
        tags?: string[];
        /**
         * A title, will be applied to methods in the generated OpenAPI documentation.
         */
        title?: string;
        /**
         * Pass currently-authenticated user's identity token to application service, default is 'false'
         */
        tokenRelay?: boolean;
        /**
         * Full uri, will override `appName`.
         */
        uri?: string;
    }

    /**
     * Cross-Origin Resource Sharing property
     */
    export interface GatewayCorsPropertiesResponse {
        /**
         * Whether user credentials are supported on cross-site requests. Valid values: `true`, `false`.
         */
        allowCredentials?: boolean;
        /**
         * Allowed headers in cross-site requests. The special value `*` allows actual requests to send any header.
         */
        allowedHeaders?: string[];
        /**
         * Allowed HTTP methods on cross-site requests. The special value `*` allows all methods. If not set, `GET` and `HEAD` are allowed by default.
         */
        allowedMethods?: string[];
        /**
         * Allowed origin patterns to make cross-site requests.
         */
        allowedOriginPatterns?: string[];
        /**
         * Allowed origins to make cross-site requests. The special value `*` allows all domains.
         */
        allowedOrigins?: string[];
        /**
         * HTTP response headers to expose for cross-site requests.
         */
        exposedHeaders?: string[];
        /**
         * How long, in seconds, the response from a pre-flight request can be cached by clients.
         */
        maxAge?: number;
    }

    /**
     * The properties of custom domain for Spring Cloud Gateway
     */
    export interface GatewayCustomDomainPropertiesResponse {
        /**
         * The thumbprint of bound certificate.
         */
        thumbprint?: string;
    }

    /**
     * Collection of instances belong to the Spring Cloud Gateway
     */
    export interface GatewayInstanceResponse {
        /**
         * Name of the Spring Cloud Gateway instance
         */
        name: string;
        /**
         * Status of the Spring Cloud Gateway instance
         */
        status: string;
    }

    /**
     * Properties of the Spring Cloud Gateway Operator.
     */
    export interface GatewayOperatorPropertiesResponse {
        /**
         * Collection of instances belong to Spring Cloud Gateway operator.
         */
        instances: GatewayInstanceResponse[];
        /**
         * The requested resource quantity for required CPU and Memory.
         */
        resourceRequests: GatewayOperatorResourceRequestsResponse;
    }

    /**
     * Properties of the Spring Cloud Gateway Operator.
     */
    export interface GatewayOperatorResourceRequestsResponse {
        /**
         * Cpu allocated to each Spring Cloud Gateway Operator instance.
         */
        cpu: string;
        /**
         * Instance count of the Spring Cloud Gateway Operator.
         */
        instanceCount: number;
        /**
         * Memory allocated to each Spring Cloud Gateway Operator instance.
         */
        memory: string;
    }

    /**
     * Spring Cloud Gateway properties payload
     */
    export interface GatewayPropertiesResponse {
        /**
         * Collection of addons for Spring Cloud Gateway
         */
        addonConfigs?: {[key: string]: any};
        /**
         * API metadata property for Spring Cloud Gateway
         */
        apiMetadataProperties?: GatewayApiMetadataPropertiesResponse;
        /**
         * Collection of APM type used in Spring Cloud Gateway
         */
        apmTypes?: string[];
        /**
         * Client-Certification Authentication.
         */
        clientAuth?: GatewayPropertiesResponseClientAuth;
        /**
         * Cross-Origin Resource Sharing property
         */
        corsProperties?: GatewayCorsPropertiesResponse;
        /**
         * Environment variables of Spring Cloud Gateway
         */
        environmentVariables?: GatewayPropertiesResponseEnvironmentVariables;
        /**
         * Indicate if only https is allowed.
         */
        httpsOnly?: boolean;
        /**
         * Collection of instances belong to Spring Cloud Gateway.
         */
        instances: GatewayInstanceResponse[];
        /**
         * Properties of the Spring Cloud Gateway Operator.
         */
        operatorProperties: GatewayOperatorPropertiesResponse;
        /**
         * State of the Spring Cloud Gateway.
         */
        provisioningState: string;
        /**
         * Indicates whether the Spring Cloud Gateway exposes endpoint.
         */
        public?: boolean;
        /**
         * The requested resource quantity for required CPU and Memory.
         */
        resourceRequests?: GatewayResourceRequestsResponse;
        /**
         * Single sign-on related configuration
         */
        ssoProperties?: SsoPropertiesResponse;
        /**
         * URL of the Spring Cloud Gateway, exposed when 'public' is true.
         */
        url: string;
    }
    /**
     * gatewayPropertiesResponseProvideDefaults sets the appropriate defaults for GatewayPropertiesResponse
     */
    export function gatewayPropertiesResponseProvideDefaults(val: GatewayPropertiesResponse): GatewayPropertiesResponse {
        return {
            ...val,
            clientAuth: (val.clientAuth ? gatewayPropertiesResponseClientAuthProvideDefaults(val.clientAuth) : undefined),
            httpsOnly: (val.httpsOnly) ?? false,
            public: (val.public) ?? false,
            resourceRequests: (val.resourceRequests ? gatewayResourceRequestsResponseProvideDefaults(val.resourceRequests) : undefined),
        };
    }

    /**
     * Client-Certification Authentication.
     */
    export interface GatewayPropertiesResponseClientAuth {
        /**
         * Whether to enable certificate verification or not
         */
        certificateVerification?: string;
        /**
         * Collection of certificate resource Ids in Azure Spring Apps.
         */
        certificates?: string[];
    }
    /**
     * gatewayPropertiesResponseClientAuthProvideDefaults sets the appropriate defaults for GatewayPropertiesResponseClientAuth
     */
    export function gatewayPropertiesResponseClientAuthProvideDefaults(val: GatewayPropertiesResponseClientAuth): GatewayPropertiesResponseClientAuth {
        return {
            ...val,
            certificateVerification: (val.certificateVerification) ?? "Disabled",
        };
    }

    /**
     * Environment variables of Spring Cloud Gateway
     */
    export interface GatewayPropertiesResponseEnvironmentVariables {
        /**
         * Non-sensitive properties
         */
        properties?: {[key: string]: string};
        /**
         * Sensitive properties
         */
        secrets?: {[key: string]: string};
    }

    /**
     * Resource request payload of Spring Cloud Gateway.
     */
    export interface GatewayResourceRequestsResponse {
        /**
         * Cpu allocated to each Spring Cloud Gateway instance.
         */
        cpu?: string;
        /**
         * Memory allocated to each Spring Cloud Gateway instance.
         */
        memory?: string;
    }
    /**
     * gatewayResourceRequestsResponseProvideDefaults sets the appropriate defaults for GatewayResourceRequestsResponse
     */
    export function gatewayResourceRequestsResponseProvideDefaults(val: GatewayResourceRequestsResponse): GatewayResourceRequestsResponse {
        return {
            ...val,
            cpu: (val.cpu) ?? "1",
            memory: (val.memory) ?? "2Gi",
        };
    }

    /**
     * OpenAPI properties of Spring Cloud Gateway route config.
     */
    export interface GatewayRouteConfigOpenApiPropertiesResponse {
        /**
         * The URI of OpenAPI specification.
         */
        uri?: string;
    }

    /**
     * API route config of the Spring Cloud Gateway
     */
    export interface GatewayRouteConfigPropertiesResponse {
        /**
         * The resource Id of the Azure Spring Apps app, required unless route defines `uri`.
         */
        appResourceId?: string;
        /**
         * To modify the request before sending it to the target endpoint, or the received response in app level.
         */
        filters?: string[];
        /**
         * OpenAPI properties of Spring Cloud Gateway route config.
         */
        openApi?: GatewayRouteConfigOpenApiPropertiesResponse;
        /**
         * A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
         */
        predicates?: string[];
        /**
         * Protocol of routed Azure Spring Apps applications.
         */
        protocol?: string;
        /**
         * State of the Spring Cloud Gateway route config.
         */
        provisioningState: string;
        /**
         * Array of API routes, each route contains properties such as `title`, `uri`, `ssoEnabled`, `predicates`, `filters`.
         */
        routes?: GatewayApiRouteResponse[];
        /**
         * Enable Single Sign-On in app level.
         */
        ssoEnabled?: boolean;
    }
    /**
     * gatewayRouteConfigPropertiesResponseProvideDefaults sets the appropriate defaults for GatewayRouteConfigPropertiesResponse
     */
    export function gatewayRouteConfigPropertiesResponseProvideDefaults(val: GatewayRouteConfigPropertiesResponse): GatewayRouteConfigPropertiesResponse {
        return {
            ...val,
            protocol: (val.protocol) ?? "HTTP",
        };
    }

    /**
     * Git repository property payload for config server
     */
    export interface GitPatternRepositoryResponse {
        /**
         * Public sshKey of git repository.
         */
        hostKey?: string;
        /**
         * SshKey algorithm of git repository.
         */
        hostKeyAlgorithm?: string;
        /**
         * Label of the repository
         */
        label?: string;
        /**
         * Name of the repository
         */
        name: string;
        /**
         * Password of git repository basic auth.
         */
        password?: string;
        /**
         * Collection of pattern of the repository
         */
        pattern?: string[];
        /**
         * Private sshKey algorithm of git repository.
         */
        privateKey?: string;
        /**
         * Searching path of the repository
         */
        searchPaths?: string[];
        /**
         * Strict host key checking or not.
         */
        strictHostKeyChecking?: boolean;
        /**
         * URI of the repository
         */
        uri: string;
        /**
         * Username of git repository basic auth.
         */
        username?: string;
    }

    /**
     * HTTPGetAction describes an action based on HTTP Get requests.
     */
    export interface HTTPGetActionResponse {
        /**
         * Path to access on the HTTP server.
         */
        path?: string;
        /**
         * Scheme to use for connecting to the host. Defaults to HTTP.
         *
         * Possible enum values:
         *  - `"HTTP"` means that the scheme used will be http://
         *  - `"HTTPS"` means that the scheme used will be https://
         */
        scheme?: string;
        /**
         * The type of the action to take to perform the health check.
         * Expected value is 'HTTPGetAction'.
         */
        type: "HTTPGetAction";
    }

    /**
     * Azure Spring Apps App Instance Http scaling rule.
     */
    export interface HttpScaleRuleResponse {
        /**
         * Authentication secrets for the custom scale rule.
         */
        auth?: ScaleRuleAuthResponse[];
        /**
         * Metadata properties to describe http scale rule.
         */
        metadata?: {[key: string]: string};
    }

    /**
     * Credential of the image registry
     */
    export interface ImageRegistryCredentialResponse {
        /**
         * The password of the image registry credential
         */
        password?: string;
        /**
         * The username of the image registry credential
         */
        username?: string;
    }

    /**
     * Ingress configuration payload for Azure Spring Apps resource.
     */
    export interface IngressConfigResponse {
        /**
         * Ingress read time out in seconds.
         */
        readTimeoutInSeconds?: number;
    }

    /**
     * App ingress settings payload.
     */
    export interface IngressSettingsResponse {
        /**
         * How ingress should communicate with this app backend service.
         */
        backendProtocol?: string;
        /**
         * Client-Certification Authentication.
         */
        clientAuth?: IngressSettingsResponseClientAuth;
        /**
         * Ingress read time out in seconds.
         */
        readTimeoutInSeconds?: number;
        /**
         * Ingress send time out in seconds.
         */
        sendTimeoutInSeconds?: number;
        /**
         * Type of the affinity, set this to Cookie to enable session affinity.
         */
        sessionAffinity?: string;
        /**
         * Time in seconds until the cookie expires.
         */
        sessionCookieMaxAge?: number;
    }

    /**
     * Client-Certification Authentication.
     */
    export interface IngressSettingsResponseClientAuth {
        /**
         * Collection of certificate resource id.
         */
        certificates?: string[];
    }

    /**
     * Uploaded Jar binary for a deployment
     */
    export interface JarUploadedUserSourceInfoResponse {
        /**
         * JVM parameter
         */
        jvmOptions?: string;
        /**
         * Relative path of the storage which stores the source
         */
        relativePath?: string;
        /**
         * Runtime version of the Jar file
         */
        runtimeVersion?: string;
        /**
         * Type of the source uploaded
         * Expected value is 'Jar'.
         */
        type: "Jar";
        /**
         * Version of the source
         */
        version?: string;
    }

    /**
     * Properties of certificate imported from key vault.
     */
    export interface KeyVaultCertificatePropertiesResponse {
        /**
         * The activate date of certificate.
         */
        activateDate: string;
        /**
         * The certificate version of key vault.
         */
        certVersion?: string;
        /**
         * The domain list of certificate.
         */
        dnsNames: string[];
        /**
         * Optional. If set to true, it will not import private key from key vault.
         */
        excludePrivateKey?: boolean;
        /**
         * The expiration date of certificate.
         */
        expirationDate: string;
        /**
         * The issue date of certificate.
         */
        issuedDate: string;
        /**
         * The issuer of certificate.
         */
        issuer: string;
        /**
         * The certificate name of key vault.
         */
        keyVaultCertName: string;
        /**
         * Provisioning state of the Certificate
         */
        provisioningState: string;
        /**
         * The subject name of certificate.
         */
        subjectName: string;
        /**
         * The thumbprint of certificate.
         */
        thumbprint: string;
        /**
         * The type of the certificate source.
         * Expected value is 'KeyVaultCertificate'.
         */
        type: "KeyVaultCertificate";
        /**
         * The vault uri of user key vault.
         */
        vaultUri: string;
    }
    /**
     * keyVaultCertificatePropertiesResponseProvideDefaults sets the appropriate defaults for KeyVaultCertificatePropertiesResponse
     */
    export function keyVaultCertificatePropertiesResponseProvideDefaults(val: KeyVaultCertificatePropertiesResponse): KeyVaultCertificatePropertiesResponse {
        return {
            ...val,
            excludePrivateKey: (val.excludePrivateKey) ?? false,
        };
    }

    /**
     * Loaded certificate payload
     */
    export interface LoadedCertificateResponse {
        /**
         * Indicate whether the certificate will be loaded into default trust store, only work for Java runtime.
         */
        loadTrustStore?: boolean;
        /**
         * Resource Id of loaded certificate
         */
        resourceId: string;
    }
    /**
     * loadedCertificateResponseProvideDefaults sets the appropriate defaults for LoadedCertificateResponse
     */
    export function loadedCertificateResponseProvideDefaults(val: LoadedCertificateResponse): LoadedCertificateResponse {
        return {
            ...val,
            loadTrustStore: (val.loadTrustStore) ?? false,
        };
    }

    /**
     * Managed identity properties retrieved from ARM request headers.
     */
    export interface ManagedIdentityPropertiesResponse {
        /**
         * Principal Id of system-assigned managed identity.
         */
        principalId?: string;
        /**
         * Tenant Id of system-assigned managed identity.
         */
        tenantId?: string;
        /**
         * Type of the managed identity
         */
        type?: string;
        /**
         * Properties of user-assigned managed identities
         */
        userAssignedIdentities?: {[key: string]: UserAssignedManagedIdentityResponse};
    }

    /**
     * Purchasing 3rd Party product for one Azure Spring Apps instance
     */
    export interface MarketplaceResourceResponse {
        /**
         * The plan id of the 3rd Party Artifact that is being procured.
         */
        plan?: string;
        /**
         * The 3rd Party artifact that is being procured.
         */
        product?: string;
        /**
         * The publisher id of the 3rd Party Artifact that is being bought.
         */
        publisher?: string;
    }

    /**
     * Monitoring Setting properties payload
     */
    export interface MonitoringSettingPropertiesResponse {
        /**
         * Indicates the versions of application insight agent
         */
        appInsightsAgentVersions?: ApplicationInsightsAgentVersionsResponse;
        /**
         * Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings
         */
        appInsightsInstrumentationKey?: string;
        /**
         * Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0]
         */
        appInsightsSamplingRate?: number;
        /**
         * Error when apply Monitoring Setting changes.
         */
        error?: ErrorResponse;
        /**
         * State of the Monitoring Setting.
         */
        provisioningState: string;
        /**
         * Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not
         */
        traceEnabled?: boolean;
    }

    /**
     * Uploaded Jar binary for a deployment
     */
    export interface NetCoreZipUploadedUserSourceInfoResponse {
        /**
         * The path to the .NET executable relative to zip root
         */
        netCoreMainEntryPath?: string;
        /**
         * Relative path of the storage which stores the source
         */
        relativePath?: string;
        /**
         * Runtime version of the .Net file
         */
        runtimeVersion?: string;
        /**
         * Type of the source uploaded
         * Expected value is 'NetCoreZip'.
         */
        type: "NetCoreZip";
        /**
         * Version of the source
         */
        version?: string;
    }

    /**
     * Service network profile payload
     */
    export interface NetworkProfileResponse {
        /**
         * Name of the resource group containing network resources for customer apps in Azure Spring Apps
         */
        appNetworkResourceGroup?: string;
        /**
         * Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps
         */
        appSubnetId?: string;
        /**
         * Ingress configuration payload for Azure Spring Apps resource.
         */
        ingressConfig?: IngressConfigResponse;
        /**
         * Desired outbound IP resources for Azure Spring Apps resource.
         */
        outboundIPs: NetworkProfileResponseOutboundIPs;
        /**
         * The egress traffic type of Azure Spring Apps VNet instances.
         */
        outboundType?: string;
        /**
         * Required inbound or outbound traffics for Azure Spring Apps resource.
         */
        requiredTraffics: RequiredTrafficResponse[];
        /**
         * Azure Spring Apps service reserved CIDR
         */
        serviceCidr?: string;
        /**
         * Name of the resource group containing network resources of Azure Spring Apps Service Runtime
         */
        serviceRuntimeNetworkResourceGroup?: string;
        /**
         * Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime
         */
        serviceRuntimeSubnetId?: string;
    }

    /**
     * Desired outbound IP resources for Azure Spring Apps resource.
     */
    export interface NetworkProfileResponseOutboundIPs {
        /**
         * A list of public IP addresses.
         */
        publicIPs: string[];
    }

    /**
     * Persistent disk payload
     */
    export interface PersistentDiskResponse {
        /**
         * Mount path of the persistent disk
         */
        mountPath?: string;
        /**
         * Size of the persistent disk in GB
         */
        sizeInGB?: number;
        /**
         * Size of the used persistent disk in GB
         */
        usedInGB: number;
    }

    /**
     * Probe describes a health check to be performed against an App Instance to determine whether it is alive or ready to receive traffic.
     */
    export interface ProbeResponse {
        /**
         * Indicate whether the probe is disabled.
         */
        disableProbe: boolean;
        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Minimum value is 1.
         */
        failureThreshold?: number;
        /**
         * Number of seconds after the App Instance has started before probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        initialDelaySeconds?: number;
        /**
         * How often (in seconds) to perform the probe. Minimum value is 1.
         */
        periodSeconds?: number;
        /**
         * The action of the probe.
         */
        probeAction?: ExecActionResponse | HTTPGetActionResponse | TCPSocketActionResponse;
        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 for liveness and startup. Minimum value is 1.
         */
        successThreshold?: number;
        /**
         * Number of seconds after which the probe times out. Minimum value is 1.
         */
        timeoutSeconds?: number;
    }
    /**
     * probeResponseProvideDefaults sets the appropriate defaults for ProbeResponse
     */
    export function probeResponseProvideDefaults(val: ProbeResponse): ProbeResponse {
        return {
            ...val,
            disableProbe: (val.disableProbe) ?? false,
        };
    }

    /**
     * Azure Spring Apps App Instance Azure Queue based scaling rule.
     */
    export interface QueueScaleRuleResponse {
        /**
         * Authentication secrets for the queue scale rule.
         */
        auth?: ScaleRuleAuthResponse[];
        /**
         * Queue length.
         */
        queueLength?: number;
        /**
         * Queue name.
         */
        queueName?: string;
    }

    /**
     * Required inbound or outbound traffic for Azure Spring Apps resource.
     */
    export interface RequiredTrafficResponse {
        /**
         * The direction of required traffic
         */
        direction: string;
        /**
         * The FQDN list of required traffic
         */
        fqdns: string[];
        /**
         * The ip list of required traffic
         */
        ips: string[];
        /**
         * The port of required traffic
         */
        port: number;
        /**
         * The protocol of required traffic
         */
        protocol: string;
    }

    /**
     * Deployment resource request payload
     */
    export interface ResourceRequestsResponse {
        /**
         * Required CPU. 1 core can be represented by 1 or 1000m. This should be 500m or 1 for Basic tier, and {500m, 1, 2, 3, 4} for Standard tier.
         */
        cpu?: string;
        /**
         * Required memory. 1 GB can be represented by 1Gi or 1024Mi. This should be {512Mi, 1Gi, 2Gi} for Basic tier, and {512Mi, 1Gi, 2Gi, ..., 8Gi} for Standard tier.
         */
        memory?: string;
    }

    /**
     * Azure Spring Apps scaling configurations.
     */
    export interface ScaleResponse {
        /**
         * Optional. Maximum number of container replicas. Defaults to 10 if not set.
         */
        maxReplicas?: number;
        /**
         * Optional. Minimum number of container replicas.
         */
        minReplicas?: number;
        /**
         * Scaling rules.
         */
        rules?: ScaleRuleResponse[];
    }
    /**
     * scaleResponseProvideDefaults sets the appropriate defaults for ScaleResponse
     */
    export function scaleResponseProvideDefaults(val: ScaleResponse): ScaleResponse {
        return {
            ...val,
            maxReplicas: (val.maxReplicas) ?? 10,
        };
    }

    /**
     * Auth Secrets for Azure Spring Apps App Instance Scale Rule
     */
    export interface ScaleRuleAuthResponse {
        /**
         * Name of the Azure Spring Apps App Instance secret from which to pull the auth params.
         */
        secretRef?: string;
        /**
         * Trigger Parameter that uses the secret
         */
        triggerParameter?: string;
    }

    /**
     * Azure Spring Apps App Instance scaling rule.
     */
    export interface ScaleRuleResponse {
        /**
         * Azure Queue based scaling.
         */
        azureQueue?: QueueScaleRuleResponse;
        /**
         * Custom scale rule.
         */
        custom?: CustomScaleRuleResponse;
        /**
         * HTTP requests based scaling.
         */
        http?: HttpScaleRuleResponse;
        /**
         * Scale Rule Name
         */
        name?: string;
        /**
         * Tcp requests based scaling.
         */
        tcp?: TcpScaleRuleResponse;
    }

    /**
     * Secret definition.
     */
    export interface SecretResponse {
        /**
         * Secret Name.
         */
        name?: string;
    }

    /**
     * Collection of instances belong to the Service Registry
     */
    export interface ServiceRegistryInstanceResponse {
        /**
         * Name of the Service Registry instance
         */
        name: string;
        /**
         * Status of the Service Registry instance
         */
        status: string;
    }

    /**
     * Service Registry properties payload
     */
    export interface ServiceRegistryPropertiesResponse {
        /**
         * Collection of instances belong to Service Registry.
         */
        instances: ServiceRegistryInstanceResponse[];
        /**
         * State of the Service Registry.
         */
        provisioningState: string;
        /**
         * The requested resource quantity for required CPU and Memory.
         */
        resourceRequests: ServiceRegistryResourceRequestsResponse;
    }

    /**
     * Resource request payload of Service Registry
     */
    export interface ServiceRegistryResourceRequestsResponse {
        /**
         * Cpu allocated to each Service Registry instance
         */
        cpu: string;
        /**
         * Instance count of the Service Registry
         */
        instanceCount: number;
        /**
         * Memory allocated to each Service Registry instance
         */
        memory: string;
    }

    /**
     * Additional Service settings in vnet injection instance
     */
    export interface ServiceVNetAddonsResponse {
        /**
         * Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet.
         */
        dataPlanePublicEndpoint?: boolean;
        /**
         * Indicates whether the log stream in vnet injection instance could be accessed from internet.
         */
        logStreamPublicEndpoint?: boolean;
    }
    /**
     * serviceVNetAddonsResponseProvideDefaults sets the appropriate defaults for ServiceVNetAddonsResponse
     */
    export function serviceVNetAddonsResponseProvideDefaults(val: ServiceVNetAddonsResponse): ServiceVNetAddonsResponse {
        return {
            ...val,
            dataPlanePublicEndpoint: (val.dataPlanePublicEndpoint) ?? false,
            logStreamPublicEndpoint: (val.logStreamPublicEndpoint) ?? false,
        };
    }

    /**
     * Sku of Azure Spring Apps
     */
    export interface SkuResponse {
        /**
         * Current capacity of the target resource
         */
        capacity?: number;
        /**
         * Name of the Sku
         */
        name?: string;
        /**
         * Tier of the Sku
         */
        tier?: string;
    }
    /**
     * skuResponseProvideDefaults sets the appropriate defaults for SkuResponse
     */
    export function skuResponseProvideDefaults(val: SkuResponse): SkuResponse {
        return {
            ...val,
            name: (val.name) ?? "S0",
            tier: (val.tier) ?? "Standard",
        };
    }

    /**
     * Uploaded Java source code binary for a deployment
     */
    export interface SourceUploadedUserSourceInfoResponse {
        /**
         * Selector for the artifact to be used for the deployment for multi-module projects. This should be
         * the relative path to the target module/project.
         */
        artifactSelector?: string;
        /**
         * Relative path of the storage which stores the source
         */
        relativePath?: string;
        /**
         * Runtime version of the source file
         */
        runtimeVersion?: string;
        /**
         * Type of the source uploaded
         * Expected value is 'Source'.
         */
        type: "Source";
        /**
         * Version of the source
         */
        version?: string;
    }

    /**
     * Single sign-on related configuration
     */
    export interface SsoPropertiesResponse {
        /**
         * The public identifier for the application
         */
        clientId?: string;
        /**
         * The secret known only to the application and the authorization server
         */
        clientSecret?: string;
        /**
         * The URI of Issuer Identifier
         */
        issuerUri?: string;
        /**
         * It defines the specific actions applications can be allowed to do on a user's behalf
         */
        scope?: string[];
    }

    /**
     * KPack ClusterStack properties payload
     */
    export interface StackPropertiesResponse {
        /**
         * Id of the ClusterStack.
         */
        id?: string;
        /**
         * Version of the ClusterStack
         */
        version?: string;
    }

    /**
     * storage resource of type Azure Storage Account.
     */
    export interface StorageAccountResponse {
        /**
         * The account name of the Azure Storage Account.
         */
        accountName: string;
        /**
         * The type of the storage.
         * Expected value is 'StorageAccount'.
         */
        storageType: "StorageAccount";
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
         * The timestamp of resource modification (UTC).
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
     * TCPSocketAction describes an action based on opening a socket
     */
    export interface TCPSocketActionResponse {
        /**
         * The type of the action to take to perform the health check.
         * Expected value is 'TCPSocketAction'.
         */
        type: "TCPSocketAction";
    }

    /**
     * Azure Spring Apps App Instance Tcp scaling rule.
     */
    export interface TcpScaleRuleResponse {
        /**
         * Authentication secrets for the tcp scale rule.
         */
        auth?: ScaleRuleAuthResponse[];
        /**
         * Metadata properties to describe tcp scale rule.
         */
        metadata?: {[key: string]: string};
    }

    /**
     * Temporary disk payload
     */
    export interface TemporaryDiskResponse {
        /**
         * Mount path of the temporary disk
         */
        mountPath?: string;
        /**
         * Size of the temporary disk in GB
         */
        sizeInGB?: number;
    }
    /**
     * temporaryDiskResponseProvideDefaults sets the appropriate defaults for TemporaryDiskResponse
     */
    export function temporaryDiskResponseProvideDefaults(val: TemporaryDiskResponse): TemporaryDiskResponse {
        return {
            ...val,
            mountPath: (val.mountPath) ?? "/tmp",
        };
    }

    /**
     * The build result triggered by a build
     */
    export interface TriggeredBuildResultResponse {
        /**
         * The unique build id of this build result
         */
        id?: string;
    }

    /**
     * Source with uploaded location
     */
    export interface UploadedUserSourceInfoResponse {
        /**
         * Relative path of the storage which stores the source
         */
        relativePath?: string;
        /**
         * Type of the source uploaded
         * Expected value is 'UploadedUserSourceInfo'.
         */
        type: "UploadedUserSourceInfo";
        /**
         * Version of the source
         */
        version?: string;
    }

    /**
     * The details of the user-assigned managed identity assigned to an App.
     */
    export interface UserAssignedManagedIdentityResponse {
        /**
         * Client Id of user-assigned managed identity.
         */
        clientId: string;
        /**
         * Principal Id of user-assigned managed identity.
         */
        principalId: string;
    }
