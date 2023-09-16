import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace appplatform {
    /**
     * Auth setting for basic auth.
     */
    export interface AcceleratorBasicAuthSettingArgs {
        /**
         * The type of the auth setting.
         * Expected value is 'BasicAuth'.
         */
        authType: pulumi.Input<"BasicAuth">;
        /**
         * Resource Id of CA certificate for https URL of Git repository.
         */
        caCertResourceId?: pulumi.Input<string>;
        /**
         * Password of git repository basic auth.
         */
        password?: pulumi.Input<string>;
        /**
         * Username of git repository basic auth.
         */
        username: pulumi.Input<string>;
    }

    export interface AcceleratorGitRepositoryArgs {
        /**
         * Properties of the auth setting payload.
         */
        authSetting: pulumi.Input<AcceleratorBasicAuthSettingArgs | AcceleratorPublicSettingArgs | AcceleratorSshSettingArgs>;
        /**
         * Git repository branch to be used.
         */
        branch?: pulumi.Input<string>;
        /**
         * Git repository commit to be used.
         */
        commit?: pulumi.Input<string>;
        /**
         * Git repository tag to be used.
         */
        gitTag?: pulumi.Input<string>;
        /**
         * Interval for checking for updates to Git or image repository.
         */
        intervalInSeconds?: pulumi.Input<number>;
        /**
         * Git repository URL for the accelerator.
         */
        url: pulumi.Input<string>;
    }

    /**
     * Auth setting for public url.
     */
    export interface AcceleratorPublicSettingArgs {
        /**
         * The type of the auth setting.
         * Expected value is 'Public'.
         */
        authType: pulumi.Input<"Public">;
        /**
         * Resource Id of CA certificate for https URL of Git repository.
         */
        caCertResourceId?: pulumi.Input<string>;
    }

    /**
     * Auth setting for SSH auth.
     */
    export interface AcceleratorSshSettingArgs {
        /**
         * The type of the auth setting.
         * Expected value is 'SSH'.
         */
        authType: pulumi.Input<"SSH">;
        /**
         * Public SSH Key of git repository.
         */
        hostKey?: pulumi.Input<string>;
        /**
         * SSH Key algorithm of git repository.
         */
        hostKeyAlgorithm?: pulumi.Input<string>;
        /**
         * Private SSH Key algorithm of git repository.
         */
        privateKey?: pulumi.Input<string>;
    }

    /**
     * The properties of custom domain for API portal
     */
    export interface ApiPortalCustomDomainPropertiesArgs {
        /**
         * The thumbprint of bound certificate.
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * API portal properties payload
     */
    export interface ApiPortalPropertiesArgs {
        /**
         * The array of resource Ids of gateway to integrate with API portal.
         */
        gatewayIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Indicate if only https is allowed.
         */
        httpsOnly?: pulumi.Input<boolean>;
        /**
         * Indicates whether the API portal exposes endpoint.
         */
        public?: pulumi.Input<boolean>;
        /**
         * Collection of OpenAPI source URL locations.
         */
        sourceUrls?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Single sign-on related configuration
         */
        ssoProperties?: pulumi.Input<SsoPropertiesArgs>;
    }
    /**
     * apiPortalPropertiesArgsProvideDefaults sets the appropriate defaults for ApiPortalPropertiesArgs
     */
    export function apiPortalPropertiesArgsProvideDefaults(val: ApiPortalPropertiesArgs): ApiPortalPropertiesArgs {
        return {
            ...val,
            httpsOnly: (val.httpsOnly) ?? false,
            public: (val.public) ?? false,
        };
    }

    /**
     * Properties of an APM
     */
    export interface ApmPropertiesArgs {
        /**
         * Non-sensitive properties for the APM
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Sensitive properties for the APM
         */
        secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * APM Type
         */
        type: pulumi.Input<string>;
    }

    /**
     * A reference to the APM
     */
    export interface ApmReferenceArgs {
        /**
         * Resource Id of the APM
         */
        resourceId: pulumi.Input<string>;
    }

    /**
     * App resource properties payload
     */
    export interface AppResourcePropertiesArgs {
        /**
         * Collection of addons
         */
        addonConfigs?: pulumi.Input<{[key: string]: any}>;
        /**
         * List of custom persistent disks
         */
        customPersistentDisks?: pulumi.Input<pulumi.Input<CustomPersistentDiskResourceArgs>[]>;
        /**
         * Indicate if end to end TLS is enabled.
         */
        enableEndToEndTLS?: pulumi.Input<boolean>;
        /**
         * Indicate if only https is allowed.
         */
        httpsOnly?: pulumi.Input<boolean>;
        /**
         * App ingress settings payload.
         */
        ingressSettings?: pulumi.Input<IngressSettingsArgs>;
        /**
         * Collection of loaded certificates
         */
        loadedCertificates?: pulumi.Input<pulumi.Input<LoadedCertificateArgs>[]>;
        /**
         * Persistent disk settings
         */
        persistentDisk?: pulumi.Input<PersistentDiskArgs>;
        /**
         * Indicates whether the App exposes public endpoint
         */
        public?: pulumi.Input<boolean>;
        /**
         * Collection of auth secrets
         */
        secrets?: pulumi.Input<pulumi.Input<SecretArgs>[]>;
        /**
         * Temporary disk settings
         */
        temporaryDisk?: pulumi.Input<TemporaryDiskArgs>;
        /**
         * Additional App settings in vnet injection instance
         */
        vnetAddons?: pulumi.Input<AppVNetAddonsArgs>;
        /**
         * The workload profile used for this app. Supported for Consumption + Dedicated plan.
         */
        workloadProfileName?: pulumi.Input<string>;
    }
    /**
     * appResourcePropertiesArgsProvideDefaults sets the appropriate defaults for AppResourcePropertiesArgs
     */
    export function appResourcePropertiesArgsProvideDefaults(val: AppResourcePropertiesArgs): AppResourcePropertiesArgs {
        return {
            ...val,
            enableEndToEndTLS: (val.enableEndToEndTLS) ?? false,
            httpsOnly: (val.httpsOnly) ?? false,
            temporaryDisk: (val.temporaryDisk ? pulumi.output(val.temporaryDisk).apply(temporaryDiskArgsProvideDefaults) : undefined),
            vnetAddons: (val.vnetAddons ? pulumi.output(val.vnetAddons).apply(appVNetAddonsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Additional App settings in vnet injection instance
     */
    export interface AppVNetAddonsArgs {
        /**
         * Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet.
         */
        publicEndpoint?: pulumi.Input<boolean>;
    }
    /**
     * appVNetAddonsArgsProvideDefaults sets the appropriate defaults for AppVNetAddonsArgs
     */
    export function appVNetAddonsArgsProvideDefaults(val: AppVNetAddonsArgs): AppVNetAddonsArgs {
        return {
            ...val,
            publicEndpoint: (val.publicEndpoint) ?? false,
        };
    }

    /**
     * The properties of the Azure File volume. Azure File shares are mounted as volumes.
     */
    export interface AzureFileVolumeArgs {
        /**
         * If set to true, it will create and mount a dedicated directory for every individual app instance.
         */
        enableSubPath?: pulumi.Input<boolean>;
        /**
         * These are the mount options for a persistent disk.
         */
        mountOptions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The mount path of the persistent disk.
         */
        mountPath: pulumi.Input<string>;
        /**
         * Indicates whether the persistent disk is a readOnly one.
         */
        readOnly?: pulumi.Input<boolean>;
        /**
         * The share name of the Azure File share.
         */
        shareName?: pulumi.Input<string>;
        /**
         * The type of the underlying resource to mount as a persistent disk.
         * Expected value is 'AzureFileVolume'.
         */
        type: pulumi.Input<"AzureFileVolume">;
    }
    /**
     * azureFileVolumeArgsProvideDefaults sets the appropriate defaults for AzureFileVolumeArgs
     */
    export function azureFileVolumeArgsProvideDefaults(val: AzureFileVolumeArgs): AzureFileVolumeArgs {
        return {
            ...val,
            enableSubPath: (val.enableSubPath) ?? false,
        };
    }

    /**
     * Binding resource properties payload
     */
    export interface BindingResourcePropertiesArgs {
        /**
         * Binding parameters of the Binding resource
         */
        bindingParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The key of the bound resource
         */
        key?: pulumi.Input<string>;
        /**
         * The Azure resource id of the bound resource
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Build resource properties payload
     */
    export interface BuildPropertiesArgs {
        /**
         * The resource id of agent pool
         */
        agentPool?: pulumi.Input<string>;
        /**
         * The APMs for this build
         */
        apms?: pulumi.Input<pulumi.Input<ApmReferenceArgs>[]>;
        /**
         * The resource id of builder to build the source code
         */
        builder?: pulumi.Input<string>;
        /**
         * The CA Certificates for this build
         */
        certificates?: pulumi.Input<pulumi.Input<CertificateReferenceArgs>[]>;
        /**
         * The environment variables for this build
         */
        env?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The relative path of source code
         */
        relativePath?: pulumi.Input<string>;
        /**
         * The customized build resource for this build
         */
        resourceRequests?: pulumi.Input<BuildResourceRequestsArgs>;
    }
    /**
     * buildPropertiesArgsProvideDefaults sets the appropriate defaults for BuildPropertiesArgs
     */
    export function buildPropertiesArgsProvideDefaults(val: BuildPropertiesArgs): BuildPropertiesArgs {
        return {
            ...val,
            resourceRequests: (val.resourceRequests ? pulumi.output(val.resourceRequests).apply(buildResourceRequestsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Resource request payload of Build Resource.
     */
    export interface BuildResourceRequestsArgs {
        /**
         * Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m. 
         * The default value is 1, this should not exceed build service agent pool cpu size.
         */
        cpu?: pulumi.Input<string>;
        /**
         * Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi. 
         * The default value is 2Gi, this should not exceed build service agent pool memory size.
         */
        memory?: pulumi.Input<string>;
    }
    /**
     * buildResourceRequestsArgsProvideDefaults sets the appropriate defaults for BuildResourceRequestsArgs
     */
    export function buildResourceRequestsArgsProvideDefaults(val: BuildResourceRequestsArgs): BuildResourceRequestsArgs {
        return {
            ...val,
            cpu: (val.cpu) ?? "1",
            memory: (val.memory) ?? "2Gi",
        };
    }

    /**
     * Reference to a build result
     */
    export interface BuildResultUserSourceInfoArgs {
        /**
         * Resource id of an existing succeeded build result under the same Spring instance.
         */
        buildResultId?: pulumi.Input<string>;
        /**
         * Type of the source uploaded
         * Expected value is 'BuildResult'.
         */
        type: pulumi.Input<"BuildResult">;
        /**
         * Version of the source
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Build service agent pool properties
     */
    export interface BuildServiceAgentPoolPropertiesArgs {
        /**
         * build service agent pool size properties
         */
        poolSize?: pulumi.Input<BuildServiceAgentPoolSizePropertiesArgs>;
    }

    /**
     * Build service agent pool size properties
     */
    export interface BuildServiceAgentPoolSizePropertiesArgs {
        /**
         * The name of build service agent pool size
         */
        name?: pulumi.Input<string>;
    }

    /**
     * KPack Builder properties payload
     */
    export interface BuilderPropertiesArgs {
        /**
         * Builder buildpack groups.
         */
        buildpackGroups?: pulumi.Input<pulumi.Input<BuildpacksGroupPropertiesArgs>[]>;
        /**
         * Builder cluster stack property.
         */
        stack?: pulumi.Input<StackPropertiesArgs>;
    }

    /**
     * Buildpack Binding Launch Properties
     */
    export interface BuildpackBindingLaunchPropertiesArgs {
        /**
         * Non-sensitive properties for launchProperties
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Sensitive properties for launchProperties
         */
        secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Properties of a buildpack binding
     */
    export interface BuildpackBindingPropertiesArgs {
        /**
         * Buildpack Binding Type
         */
        bindingType?: pulumi.Input<string | enums.BindingType>;
        /**
         * The object describes the buildpack binding launch properties
         */
        launchProperties?: pulumi.Input<BuildpackBindingLaunchPropertiesArgs>;
    }

    /**
     * Buildpack properties payload
     */
    export interface BuildpackPropertiesArgs {
        /**
         * Id of the buildpack
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Buildpack group properties of the Builder
     */
    export interface BuildpacksGroupPropertiesArgs {
        /**
         * Buildpacks in the buildpack group
         */
        buildpacks?: pulumi.Input<pulumi.Input<BuildpackPropertiesArgs>[]>;
        /**
         * Buildpack group name
         */
        name?: pulumi.Input<string>;
    }

    /**
     * A reference to the certificate
     */
    export interface CertificateReferenceArgs {
        /**
         * Resource Id of the certificate
         */
        resourceId: pulumi.Input<string>;
    }

    /**
     * Service properties payload
     */
    export interface ClusterResourcePropertiesArgs {
        /**
         * The name of the resource group that contains the infrastructure resources
         */
        infraResourceGroup?: pulumi.Input<string>;
        /**
         * The resource Id of the Managed Environment that the Spring Apps instance builds on
         */
        managedEnvironmentId?: pulumi.Input<string>;
        /**
         * Purchasing 3rd party product of the Service resource.
         */
        marketplaceResource?: pulumi.Input<MarketplaceResourceArgs>;
        /**
         * Network profile of the Service
         */
        networkProfile?: pulumi.Input<NetworkProfileArgs>;
        /**
         * Additional Service settings in vnet injection instance
         */
        vnetAddons?: pulumi.Input<ServiceVNetAddonsArgs>;
        zoneRedundant?: pulumi.Input<boolean>;
    }
    /**
     * clusterResourcePropertiesArgsProvideDefaults sets the appropriate defaults for ClusterResourcePropertiesArgs
     */
    export function clusterResourcePropertiesArgsProvideDefaults(val: ClusterResourcePropertiesArgs): ClusterResourcePropertiesArgs {
        return {
            ...val,
            vnetAddons: (val.vnetAddons ? pulumi.output(val.vnetAddons).apply(serviceVNetAddonsArgsProvideDefaults) : undefined),
            zoneRedundant: (val.zoneRedundant) ?? false,
        };
    }

    /**
     * Property of git.
     */
    export interface ConfigServerGitPropertyArgs {
        /**
         * Public sshKey of git repository.
         */
        hostKey?: pulumi.Input<string>;
        /**
         * SshKey algorithm of git repository.
         */
        hostKeyAlgorithm?: pulumi.Input<string>;
        /**
         * Label of the repository
         */
        label?: pulumi.Input<string>;
        /**
         * Password of git repository basic auth.
         */
        password?: pulumi.Input<string>;
        /**
         * Private sshKey algorithm of git repository.
         */
        privateKey?: pulumi.Input<string>;
        /**
         * Repositories of git.
         */
        repositories?: pulumi.Input<pulumi.Input<GitPatternRepositoryArgs>[]>;
        /**
         * Searching path of the repository
         */
        searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Strict host key checking or not.
         */
        strictHostKeyChecking?: pulumi.Input<boolean>;
        /**
         * URI of the repository
         */
        uri: pulumi.Input<string>;
        /**
         * Username of git repository basic auth.
         */
        username?: pulumi.Input<string>;
    }

    /**
     * Config server git properties payload
     */
    export interface ConfigServerPropertiesArgs {
        /**
         * Settings of config server.
         */
        configServer?: pulumi.Input<ConfigServerSettingsArgs>;
        /**
         * Enabled state of the config server. This is only used in Consumption tier.
         */
        enabledState?: pulumi.Input<string | enums.ConfigServerEnabledState>;
        /**
         * Error when apply config server settings.
         */
        error?: pulumi.Input<ErrorArgs>;
    }

    /**
     * The settings of config server.
     */
    export interface ConfigServerSettingsArgs {
        /**
         * Property of git environment.
         */
        gitProperty?: pulumi.Input<ConfigServerGitPropertyArgs>;
    }

    /**
     * Property of git environment.
     */
    export interface ConfigurationServiceGitPropertyArgs {
        /**
         * Repositories of Application Configuration Service git property.
         */
        repositories?: pulumi.Input<pulumi.Input<ConfigurationServiceGitRepositoryArgs>[]>;
    }

    /**
     * Git repository property payload for Application Configuration Service
     */
    export interface ConfigurationServiceGitRepositoryArgs {
        /**
         * Resource Id of CA certificate for https URL of Git repository.
         */
        caCertResourceId?: pulumi.Input<string>;
        /**
         * Git libraries used to support various repository providers
         */
        gitImplementation?: pulumi.Input<string | enums.GitImplementation>;
        /**
         * Public sshKey of git repository.
         */
        hostKey?: pulumi.Input<string>;
        /**
         * SshKey algorithm of git repository.
         */
        hostKeyAlgorithm?: pulumi.Input<string>;
        /**
         * Label of the repository
         */
        label: pulumi.Input<string>;
        /**
         * Name of the repository
         */
        name: pulumi.Input<string>;
        /**
         * Password of git repository basic auth.
         */
        password?: pulumi.Input<string>;
        /**
         * Collection of patterns of the repository
         */
        patterns: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Private sshKey algorithm of git repository.
         */
        privateKey?: pulumi.Input<string>;
        /**
         * Searching path of the repository
         */
        searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Strict host key checking or not.
         */
        strictHostKeyChecking?: pulumi.Input<boolean>;
        /**
         * URI of the repository
         */
        uri: pulumi.Input<string>;
        /**
         * Username of git repository basic auth.
         */
        username?: pulumi.Input<string>;
    }

    /**
     * Application Configuration Service properties payload
     */
    export interface ConfigurationServicePropertiesArgs {
        /**
         * The generation of the Application Configuration Service.
         */
        generation?: pulumi.Input<string | enums.ConfigurationServiceGeneration>;
        /**
         * The settings of Application Configuration Service.
         */
        settings?: pulumi.Input<ConfigurationServiceSettingsArgs>;
    }
    /**
     * configurationServicePropertiesArgsProvideDefaults sets the appropriate defaults for ConfigurationServicePropertiesArgs
     */
    export function configurationServicePropertiesArgsProvideDefaults(val: ConfigurationServicePropertiesArgs): ConfigurationServicePropertiesArgs {
        return {
            ...val,
            generation: (val.generation) ?? "Gen1",
        };
    }

    /**
     * The settings of Application Configuration Service.
     */
    export interface ConfigurationServiceSettingsArgs {
        /**
         * Property of git environment.
         */
        gitProperty?: pulumi.Input<ConfigurationServiceGitPropertyArgs>;
    }

    /**
     * Container liveness and readiness probe settings
     */
    export interface ContainerProbeSettingsArgs {
        /**
         * Indicates whether disable the liveness and readiness probe
         */
        disableProbe?: pulumi.Input<boolean>;
    }

    /**
     * The basic authentication properties for the container registry resource.
     */
    export interface ContainerRegistryBasicCredentialsArgs {
        /**
         * The password of the Container Registry.
         */
        password: pulumi.Input<string>;
        /**
         * The login server of the Container Registry.
         */
        server: pulumi.Input<string>;
        /**
         * The credential type of the container registry credentials.
         * Expected value is 'BasicAuth'.
         */
        type: pulumi.Input<"BasicAuth">;
        /**
         * The username of the Container Registry.
         */
        username: pulumi.Input<string>;
    }

    /**
     * Container registry resource payload.
     */
    export interface ContainerRegistryPropertiesArgs {
        /**
         * The credentials of the container registry resource.
         */
        credentials: pulumi.Input<ContainerRegistryBasicCredentialsArgs>;
    }

    /**
     * Properties of certificate imported from key vault.
     */
    export interface ContentCertificatePropertiesArgs {
        /**
         * The content of uploaded certificate.
         */
        content?: pulumi.Input<string>;
        /**
         * The type of the certificate source.
         * Expected value is 'ContentCertificate'.
         */
        type: pulumi.Input<"ContentCertificate">;
    }

    /**
     * Custom container payload
     */
    export interface CustomContainerArgs {
        /**
         * Arguments to the entrypoint. The docker image's CMD is used if this is not provided.
         */
        args?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.
         */
        command?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Container image of the custom container. This should be in the form of <repository>:<tag> without the server name of the registry
         */
        containerImage?: pulumi.Input<string>;
        /**
         * Credential of the image registry
         */
        imageRegistryCredential?: pulumi.Input<ImageRegistryCredentialArgs>;
        /**
         * Language framework of the container image uploaded
         */
        languageFramework?: pulumi.Input<string>;
        /**
         * The name of the registry that contains the container image
         */
        server?: pulumi.Input<string>;
    }

    /**
     * Custom container user source info
     */
    export interface CustomContainerUserSourceInfoArgs {
        /**
         * Custom container payload
         */
        customContainer?: pulumi.Input<CustomContainerArgs>;
        /**
         * Type of the source uploaded
         * Expected value is 'Container'.
         */
        type: pulumi.Input<"Container">;
        /**
         * Version of the source
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Custom domain of app resource payload.
     */
    export interface CustomDomainPropertiesArgs {
        /**
         * The bound certificate name of domain.
         */
        certName?: pulumi.Input<string>;
        /**
         * The thumbprint of bound certificate.
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * Custom persistent disk resource payload.
     */
    export interface CustomPersistentDiskResourceArgs {
        /**
         * Properties of the custom persistent disk resource payload.
         */
        customPersistentDiskProperties?: pulumi.Input<AzureFileVolumeArgs>;
        /**
         * The resource id of Azure Spring Apps Storage resource.
         */
        storageId: pulumi.Input<string>;
    }
    /**
     * customPersistentDiskResourceArgsProvideDefaults sets the appropriate defaults for CustomPersistentDiskResourceArgs
     */
    export function customPersistentDiskResourceArgsProvideDefaults(val: CustomPersistentDiskResourceArgs): CustomPersistentDiskResourceArgs {
        return {
            ...val,
            customPersistentDiskProperties: (val.customPersistentDiskProperties ? pulumi.output(val.customPersistentDiskProperties).apply(azureFileVolumeArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Azure Spring Apps App Instance Custom scaling rule.
     */
    export interface CustomScaleRuleArgs {
        /**
         * Authentication secrets for the custom scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe custom scale rule.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Type of the custom scale rule
         * eg: azure-servicebus, redis etc.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Customized accelerator properties payload
     */
    export interface CustomizedAcceleratorPropertiesArgs {
        acceleratorTags?: pulumi.Input<pulumi.Input<string>[]>;
        description?: pulumi.Input<string>;
        displayName?: pulumi.Input<string>;
        gitRepository: pulumi.Input<AcceleratorGitRepositoryArgs>;
        iconUrl?: pulumi.Input<string>;
    }

    /**
     * Deployment resource properties payload
     */
    export interface DeploymentResourcePropertiesArgs {
        /**
         * Indicates whether the Deployment is active
         */
        active?: pulumi.Input<boolean>;
        /**
         * Deployment settings of the Deployment
         */
        deploymentSettings?: pulumi.Input<DeploymentSettingsArgs>;
        /**
         * Uploaded source information of the deployment.
         */
        source?: pulumi.Input<BuildResultUserSourceInfoArgs | CustomContainerUserSourceInfoArgs | JarUploadedUserSourceInfoArgs | NetCoreZipUploadedUserSourceInfoArgs | SourceUploadedUserSourceInfoArgs | UploadedUserSourceInfoArgs>;
    }
    /**
     * deploymentResourcePropertiesArgsProvideDefaults sets the appropriate defaults for DeploymentResourcePropertiesArgs
     */
    export function deploymentResourcePropertiesArgsProvideDefaults(val: DeploymentResourcePropertiesArgs): DeploymentResourcePropertiesArgs {
        return {
            ...val,
            deploymentSettings: (val.deploymentSettings ? pulumi.output(val.deploymentSettings).apply(deploymentSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Deployment settings payload
     */
    export interface DeploymentSettingsArgs {
        /**
         * Collection of addons
         */
        addonConfigs?: pulumi.Input<{[key: string]: any}>;
        /**
         * Collection of ApmReferences
         */
        apms?: pulumi.Input<pulumi.Input<ApmReferenceArgs>[]>;
        /**
         * Container liveness and readiness probe settings
         */
        containerProbeSettings?: pulumi.Input<ContainerProbeSettingsArgs>;
        /**
         * Collection of environment variables
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Periodic probe of App Instance liveness. App Instance will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        livenessProbe?: pulumi.Input<ProbeArgs>;
        /**
         * Periodic probe of App Instance service readiness. App Instance will be removed from service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        readinessProbe?: pulumi.Input<ProbeArgs>;
        /**
         * The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later.
         */
        resourceRequests?: pulumi.Input<ResourceRequestsArgs>;
        /**
         * Scaling properties for the Azure Spring Apps App Instance.
         */
        scale?: pulumi.Input<ScaleArgs>;
        /**
         * StartupProbe indicates that the App Instance has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a App Instance's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        startupProbe?: pulumi.Input<ProbeArgs>;
        /**
         * Optional duration in seconds the App Instance needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the App Instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 90 seconds.
         */
        terminationGracePeriodSeconds?: pulumi.Input<number>;
    }
    /**
     * deploymentSettingsArgsProvideDefaults sets the appropriate defaults for DeploymentSettingsArgs
     */
    export function deploymentSettingsArgsProvideDefaults(val: DeploymentSettingsArgs): DeploymentSettingsArgs {
        return {
            ...val,
            livenessProbe: (val.livenessProbe ? pulumi.output(val.livenessProbe).apply(probeArgsProvideDefaults) : undefined),
            readinessProbe: (val.readinessProbe ? pulumi.output(val.readinessProbe).apply(probeArgsProvideDefaults) : undefined),
            scale: (val.scale ? pulumi.output(val.scale).apply(scaleArgsProvideDefaults) : undefined),
            startupProbe: (val.startupProbe ? pulumi.output(val.startupProbe).apply(probeArgsProvideDefaults) : undefined),
            terminationGracePeriodSeconds: (val.terminationGracePeriodSeconds) ?? 90,
        };
    }

    /**
     * Detail settings for Dev Tool Portal feature
     */
    export interface DevToolPortalFeatureDetailArgs {
        /**
         * State of the plugin
         */
        state?: pulumi.Input<string | enums.DevToolPortalFeatureState>;
    }
    /**
     * devToolPortalFeatureDetailArgsProvideDefaults sets the appropriate defaults for DevToolPortalFeatureDetailArgs
     */
    export function devToolPortalFeatureDetailArgsProvideDefaults(val: DevToolPortalFeatureDetailArgs): DevToolPortalFeatureDetailArgs {
        return {
            ...val,
            state: (val.state) ?? "Enabled",
        };
    }

    /**
     * Settings for Dev Tool Portal
     */
    export interface DevToolPortalFeatureSettingsArgs {
        /**
         * Detail of Accelerator plugin
         */
        applicationAccelerator?: pulumi.Input<DevToolPortalFeatureDetailArgs>;
        /**
         * Detail of App Live View plugin
         */
        applicationLiveView?: pulumi.Input<DevToolPortalFeatureDetailArgs>;
    }
    /**
     * devToolPortalFeatureSettingsArgsProvideDefaults sets the appropriate defaults for DevToolPortalFeatureSettingsArgs
     */
    export function devToolPortalFeatureSettingsArgsProvideDefaults(val: DevToolPortalFeatureSettingsArgs): DevToolPortalFeatureSettingsArgs {
        return {
            ...val,
            applicationAccelerator: (val.applicationAccelerator ? pulumi.output(val.applicationAccelerator).apply(devToolPortalFeatureDetailArgsProvideDefaults) : undefined),
            applicationLiveView: (val.applicationLiveView ? pulumi.output(val.applicationLiveView).apply(devToolPortalFeatureDetailArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Dev Tool Portal properties payload
     */
    export interface DevToolPortalPropertiesArgs {
        /**
         * Settings for Dev Tool Portal
         */
        features?: pulumi.Input<DevToolPortalFeatureSettingsArgs>;
        /**
         * Indicates whether the resource exposes public endpoint
         */
        public?: pulumi.Input<boolean>;
        /**
         * Single sign-on related configuration
         */
        ssoProperties?: pulumi.Input<DevToolPortalSsoPropertiesArgs>;
    }
    /**
     * devToolPortalPropertiesArgsProvideDefaults sets the appropriate defaults for DevToolPortalPropertiesArgs
     */
    export function devToolPortalPropertiesArgsProvideDefaults(val: DevToolPortalPropertiesArgs): DevToolPortalPropertiesArgs {
        return {
            ...val,
            features: (val.features ? pulumi.output(val.features).apply(devToolPortalFeatureSettingsArgsProvideDefaults) : undefined),
            public: (val.public) ?? false,
        };
    }

    /**
     * Single sign-on related configuration
     */
    export interface DevToolPortalSsoPropertiesArgs {
        /**
         * The public identifier for the application
         */
        clientId?: pulumi.Input<string>;
        /**
         * The secret known only to the application and the authorization server
         */
        clientSecret?: pulumi.Input<string>;
        /**
         * The URI of a JSON file with generic OIDC provider configuration.
         */
        metadataUrl?: pulumi.Input<string>;
        /**
         * It defines the specific actions applications can be allowed to do on a user's behalf
         */
        scopes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The error code compose of code and message.
     */
    export interface ErrorArgs {
        /**
         * The code of error.
         */
        code?: pulumi.Input<string>;
        /**
         * The message of error.
         */
        message?: pulumi.Input<string>;
    }

    /**
     * ExecAction describes a "run in container" action.
     */
    export interface ExecActionArgs {
        /**
         * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
         */
        command?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The type of the action to take to perform the health check.
         * Expected value is 'ExecAction'.
         */
        type: pulumi.Input<"ExecAction">;
    }

    /**
     * API metadata property for Spring Cloud Gateway
     */
    export interface GatewayApiMetadataPropertiesArgs {
        /**
         * Detailed description of the APIs available on the Gateway instance (default: `Generated OpenAPI 3 document that describes the API routes configured.`)
         */
        description?: pulumi.Input<string>;
        /**
         * Location of additional documentation for the APIs available on the Gateway instance
         */
        documentation?: pulumi.Input<string>;
        /**
         * Base URL that API consumers will use to access APIs on the Gateway instance.
         */
        serverUrl?: pulumi.Input<string>;
        /**
         * Title describing the context of the APIs available on the Gateway instance (default: `Spring Cloud Gateway for K8S`)
         */
        title?: pulumi.Input<string>;
        /**
         * Version of APIs available on this Gateway instance (default: `unspecified`).
         */
        version?: pulumi.Input<string>;
    }

    /**
     * API route config of the Spring Cloud Gateway
     */
    export interface GatewayApiRouteArgs {
        /**
         * A description, will be applied to methods in the generated OpenAPI documentation.
         */
        description?: pulumi.Input<string>;
        /**
         * To modify the request before sending it to the target endpoint, or the received response.
         */
        filters?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Route processing order.
         */
        order?: pulumi.Input<number>;
        /**
         * A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
         */
        predicates?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Enable sso validation.
         */
        ssoEnabled?: pulumi.Input<boolean>;
        /**
         * Classification tags, will be applied to methods in the generated OpenAPI documentation.
         */
        tags?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A title, will be applied to methods in the generated OpenAPI documentation.
         */
        title?: pulumi.Input<string>;
        /**
         * Pass currently-authenticated user's identity token to application service, default is 'false'
         */
        tokenRelay?: pulumi.Input<boolean>;
        /**
         * Full uri, will override `appName`.
         */
        uri?: pulumi.Input<string>;
    }

    /**
     * Cross-Origin Resource Sharing property
     */
    export interface GatewayCorsPropertiesArgs {
        /**
         * Whether user credentials are supported on cross-site requests. Valid values: `true`, `false`.
         */
        allowCredentials?: pulumi.Input<boolean>;
        /**
         * Allowed headers in cross-site requests. The special value `*` allows actual requests to send any header.
         */
        allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Allowed HTTP methods on cross-site requests. The special value `*` allows all methods. If not set, `GET` and `HEAD` are allowed by default.
         */
        allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Allowed origin patterns to make cross-site requests.
         */
        allowedOriginPatterns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Allowed origins to make cross-site requests. The special value `*` allows all domains.
         */
        allowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * HTTP response headers to expose for cross-site requests.
         */
        exposedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * How long, in seconds, the response from a pre-flight request can be cached by clients.
         */
        maxAge?: pulumi.Input<number>;
    }

    /**
     * The properties of custom domain for Spring Cloud Gateway
     */
    export interface GatewayCustomDomainPropertiesArgs {
        /**
         * The thumbprint of bound certificate.
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * Spring Cloud Gateway properties payload
     */
    export interface GatewayPropertiesArgs {
        /**
         * Collection of addons for Spring Cloud Gateway
         */
        addonConfigs?: pulumi.Input<{[key: string]: any}>;
        /**
         * API metadata property for Spring Cloud Gateway
         */
        apiMetadataProperties?: pulumi.Input<GatewayApiMetadataPropertiesArgs>;
        /**
         * Collection of APM type used in Spring Cloud Gateway
         */
        apmTypes?: pulumi.Input<pulumi.Input<string | enums.ApmType>[]>;
        /**
         * Client-Certification Authentication.
         */
        clientAuth?: pulumi.Input<GatewayPropertiesClientAuthArgs>;
        /**
         * Cross-Origin Resource Sharing property
         */
        corsProperties?: pulumi.Input<GatewayCorsPropertiesArgs>;
        /**
         * Environment variables of Spring Cloud Gateway
         */
        environmentVariables?: pulumi.Input<GatewayPropertiesEnvironmentVariablesArgs>;
        /**
         * Indicate if only https is allowed.
         */
        httpsOnly?: pulumi.Input<boolean>;
        /**
         * Indicates whether the Spring Cloud Gateway exposes endpoint.
         */
        public?: pulumi.Input<boolean>;
        /**
         * The requested resource quantity for required CPU and Memory.
         */
        resourceRequests?: pulumi.Input<GatewayResourceRequestsArgs>;
        /**
         * Single sign-on related configuration
         */
        ssoProperties?: pulumi.Input<SsoPropertiesArgs>;
    }
    /**
     * gatewayPropertiesArgsProvideDefaults sets the appropriate defaults for GatewayPropertiesArgs
     */
    export function gatewayPropertiesArgsProvideDefaults(val: GatewayPropertiesArgs): GatewayPropertiesArgs {
        return {
            ...val,
            clientAuth: (val.clientAuth ? pulumi.output(val.clientAuth).apply(gatewayPropertiesClientAuthArgsProvideDefaults) : undefined),
            httpsOnly: (val.httpsOnly) ?? false,
            public: (val.public) ?? false,
            resourceRequests: (val.resourceRequests ? pulumi.output(val.resourceRequests).apply(gatewayResourceRequestsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Client-Certification Authentication.
     */
    export interface GatewayPropertiesClientAuthArgs {
        /**
         * Whether to enable certificate verification or not
         */
        certificateVerification?: pulumi.Input<string | enums.GatewayCertificateVerification>;
        /**
         * Collection of certificate resource Ids in Azure Spring Apps.
         */
        certificates?: pulumi.Input<pulumi.Input<string>[]>;
    }
    /**
     * gatewayPropertiesClientAuthArgsProvideDefaults sets the appropriate defaults for GatewayPropertiesClientAuthArgs
     */
    export function gatewayPropertiesClientAuthArgsProvideDefaults(val: GatewayPropertiesClientAuthArgs): GatewayPropertiesClientAuthArgs {
        return {
            ...val,
            certificateVerification: (val.certificateVerification) ?? "Disabled",
        };
    }

    /**
     * Environment variables of Spring Cloud Gateway
     */
    export interface GatewayPropertiesEnvironmentVariablesArgs {
        /**
         * Non-sensitive properties
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Sensitive properties
         */
        secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Resource request payload of Spring Cloud Gateway.
     */
    export interface GatewayResourceRequestsArgs {
        /**
         * Cpu allocated to each Spring Cloud Gateway instance.
         */
        cpu?: pulumi.Input<string>;
        /**
         * Memory allocated to each Spring Cloud Gateway instance.
         */
        memory?: pulumi.Input<string>;
    }
    /**
     * gatewayResourceRequestsArgsProvideDefaults sets the appropriate defaults for GatewayResourceRequestsArgs
     */
    export function gatewayResourceRequestsArgsProvideDefaults(val: GatewayResourceRequestsArgs): GatewayResourceRequestsArgs {
        return {
            ...val,
            cpu: (val.cpu) ?? "1",
            memory: (val.memory) ?? "2Gi",
        };
    }

    /**
     * OpenAPI properties of Spring Cloud Gateway route config.
     */
    export interface GatewayRouteConfigOpenApiPropertiesArgs {
        /**
         * The URI of OpenAPI specification.
         */
        uri?: pulumi.Input<string>;
    }

    /**
     * API route config of the Spring Cloud Gateway
     */
    export interface GatewayRouteConfigPropertiesArgs {
        /**
         * The resource Id of the Azure Spring Apps app, required unless route defines `uri`.
         */
        appResourceId?: pulumi.Input<string>;
        /**
         * To modify the request before sending it to the target endpoint, or the received response in app level.
         */
        filters?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * OpenAPI properties of Spring Cloud Gateway route config.
         */
        openApi?: pulumi.Input<GatewayRouteConfigOpenApiPropertiesArgs>;
        /**
         * A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
         */
        predicates?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Protocol of routed Azure Spring Apps applications.
         */
        protocol?: pulumi.Input<string | enums.GatewayRouteConfigProtocol>;
        /**
         * Array of API routes, each route contains properties such as `title`, `uri`, `ssoEnabled`, `predicates`, `filters`.
         */
        routes?: pulumi.Input<pulumi.Input<GatewayApiRouteArgs>[]>;
        /**
         * Enable Single Sign-On in app level.
         */
        ssoEnabled?: pulumi.Input<boolean>;
    }
    /**
     * gatewayRouteConfigPropertiesArgsProvideDefaults sets the appropriate defaults for GatewayRouteConfigPropertiesArgs
     */
    export function gatewayRouteConfigPropertiesArgsProvideDefaults(val: GatewayRouteConfigPropertiesArgs): GatewayRouteConfigPropertiesArgs {
        return {
            ...val,
            protocol: (val.protocol) ?? "HTTP",
        };
    }

    /**
     * Git repository property payload for config server
     */
    export interface GitPatternRepositoryArgs {
        /**
         * Public sshKey of git repository.
         */
        hostKey?: pulumi.Input<string>;
        /**
         * SshKey algorithm of git repository.
         */
        hostKeyAlgorithm?: pulumi.Input<string>;
        /**
         * Label of the repository
         */
        label?: pulumi.Input<string>;
        /**
         * Name of the repository
         */
        name: pulumi.Input<string>;
        /**
         * Password of git repository basic auth.
         */
        password?: pulumi.Input<string>;
        /**
         * Collection of pattern of the repository
         */
        pattern?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Private sshKey algorithm of git repository.
         */
        privateKey?: pulumi.Input<string>;
        /**
         * Searching path of the repository
         */
        searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Strict host key checking or not.
         */
        strictHostKeyChecking?: pulumi.Input<boolean>;
        /**
         * URI of the repository
         */
        uri: pulumi.Input<string>;
        /**
         * Username of git repository basic auth.
         */
        username?: pulumi.Input<string>;
    }

    /**
     * HTTPGetAction describes an action based on HTTP Get requests.
     */
    export interface HTTPGetActionArgs {
        /**
         * Path to access on the HTTP server.
         */
        path?: pulumi.Input<string>;
        /**
         * Scheme to use for connecting to the host. Defaults to HTTP.
         *
         * Possible enum values:
         *  - `"HTTP"` means that the scheme used will be http://
         *  - `"HTTPS"` means that the scheme used will be https://
         */
        scheme?: pulumi.Input<string | enums.HTTPSchemeType>;
        /**
         * The type of the action to take to perform the health check.
         * Expected value is 'HTTPGetAction'.
         */
        type: pulumi.Input<"HTTPGetAction">;
    }

    /**
     * Azure Spring Apps App Instance Http scaling rule.
     */
    export interface HttpScaleRuleArgs {
        /**
         * Authentication secrets for the custom scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe http scale rule.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Credential of the image registry
     */
    export interface ImageRegistryCredentialArgs {
        /**
         * The password of the image registry credential
         */
        password?: pulumi.Input<string>;
        /**
         * The username of the image registry credential
         */
        username?: pulumi.Input<string>;
    }

    /**
     * Ingress configuration payload for Azure Spring Apps resource.
     */
    export interface IngressConfigArgs {
        /**
         * Ingress read time out in seconds.
         */
        readTimeoutInSeconds?: pulumi.Input<number>;
    }

    /**
     * App ingress settings payload.
     */
    export interface IngressSettingsArgs {
        /**
         * How ingress should communicate with this app backend service.
         */
        backendProtocol?: pulumi.Input<string | enums.BackendProtocol>;
        /**
         * Client-Certification Authentication.
         */
        clientAuth?: pulumi.Input<IngressSettingsClientAuthArgs>;
        /**
         * Ingress read time out in seconds.
         */
        readTimeoutInSeconds?: pulumi.Input<number>;
        /**
         * Ingress send time out in seconds.
         */
        sendTimeoutInSeconds?: pulumi.Input<number>;
        /**
         * Type of the affinity, set this to Cookie to enable session affinity.
         */
        sessionAffinity?: pulumi.Input<string | enums.SessionAffinity>;
        /**
         * Time in seconds until the cookie expires.
         */
        sessionCookieMaxAge?: pulumi.Input<number>;
    }

    /**
     * Client-Certification Authentication.
     */
    export interface IngressSettingsClientAuthArgs {
        /**
         * Collection of certificate resource id.
         */
        certificates?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Uploaded Jar binary for a deployment
     */
    export interface JarUploadedUserSourceInfoArgs {
        /**
         * JVM parameter
         */
        jvmOptions?: pulumi.Input<string>;
        /**
         * Relative path of the storage which stores the source
         */
        relativePath?: pulumi.Input<string>;
        /**
         * Runtime version of the Jar file
         */
        runtimeVersion?: pulumi.Input<string>;
        /**
         * Type of the source uploaded
         * Expected value is 'Jar'.
         */
        type: pulumi.Input<"Jar">;
        /**
         * Version of the source
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Properties of certificate imported from key vault.
     */
    export interface KeyVaultCertificatePropertiesArgs {
        /**
         * The certificate version of key vault.
         */
        certVersion?: pulumi.Input<string>;
        /**
         * Optional. If set to true, it will not import private key from key vault.
         */
        excludePrivateKey?: pulumi.Input<boolean>;
        /**
         * The certificate name of key vault.
         */
        keyVaultCertName: pulumi.Input<string>;
        /**
         * The type of the certificate source.
         * Expected value is 'KeyVaultCertificate'.
         */
        type: pulumi.Input<"KeyVaultCertificate">;
        /**
         * The vault uri of user key vault.
         */
        vaultUri: pulumi.Input<string>;
    }
    /**
     * keyVaultCertificatePropertiesArgsProvideDefaults sets the appropriate defaults for KeyVaultCertificatePropertiesArgs
     */
    export function keyVaultCertificatePropertiesArgsProvideDefaults(val: KeyVaultCertificatePropertiesArgs): KeyVaultCertificatePropertiesArgs {
        return {
            ...val,
            excludePrivateKey: (val.excludePrivateKey) ?? false,
        };
    }

    /**
     * Loaded certificate payload
     */
    export interface LoadedCertificateArgs {
        /**
         * Indicate whether the certificate will be loaded into default trust store, only work for Java runtime.
         */
        loadTrustStore?: pulumi.Input<boolean>;
        /**
         * Resource Id of loaded certificate
         */
        resourceId: pulumi.Input<string>;
    }
    /**
     * loadedCertificateArgsProvideDefaults sets the appropriate defaults for LoadedCertificateArgs
     */
    export function loadedCertificateArgsProvideDefaults(val: LoadedCertificateArgs): LoadedCertificateArgs {
        return {
            ...val,
            loadTrustStore: (val.loadTrustStore) ?? false,
        };
    }

    /**
     * Managed identity properties retrieved from ARM request headers.
     */
    export interface ManagedIdentityPropertiesArgs {
        /**
         * Principal Id of system-assigned managed identity.
         */
        principalId?: pulumi.Input<string>;
        /**
         * Tenant Id of system-assigned managed identity.
         */
        tenantId?: pulumi.Input<string>;
        /**
         * Type of the managed identity
         */
        type?: pulumi.Input<string | enums.ManagedIdentityType>;
        /**
         * Properties of user-assigned managed identities
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Purchasing 3rd Party product for one Azure Spring Apps instance
     */
    export interface MarketplaceResourceArgs {
        /**
         * The plan id of the 3rd Party Artifact that is being procured.
         */
        plan?: pulumi.Input<string>;
        /**
         * The 3rd Party artifact that is being procured.
         */
        product?: pulumi.Input<string>;
        /**
         * The publisher id of the 3rd Party Artifact that is being bought.
         */
        publisher?: pulumi.Input<string>;
    }

    /**
     * Monitoring Setting properties payload
     */
    export interface MonitoringSettingPropertiesArgs {
        /**
         * Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings
         */
        appInsightsInstrumentationKey?: pulumi.Input<string>;
        /**
         * Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0]
         */
        appInsightsSamplingRate?: pulumi.Input<number>;
        /**
         * Error when apply Monitoring Setting changes.
         */
        error?: pulumi.Input<ErrorArgs>;
        /**
         * Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not
         */
        traceEnabled?: pulumi.Input<boolean>;
    }

    /**
     * Uploaded Jar binary for a deployment
     */
    export interface NetCoreZipUploadedUserSourceInfoArgs {
        /**
         * The path to the .NET executable relative to zip root
         */
        netCoreMainEntryPath?: pulumi.Input<string>;
        /**
         * Relative path of the storage which stores the source
         */
        relativePath?: pulumi.Input<string>;
        /**
         * Runtime version of the .Net file
         */
        runtimeVersion?: pulumi.Input<string>;
        /**
         * Type of the source uploaded
         * Expected value is 'NetCoreZip'.
         */
        type: pulumi.Input<"NetCoreZip">;
        /**
         * Version of the source
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Service network profile payload
     */
    export interface NetworkProfileArgs {
        /**
         * Name of the resource group containing network resources for customer apps in Azure Spring Apps
         */
        appNetworkResourceGroup?: pulumi.Input<string>;
        /**
         * Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps
         */
        appSubnetId?: pulumi.Input<string>;
        /**
         * Ingress configuration payload for Azure Spring Apps resource.
         */
        ingressConfig?: pulumi.Input<IngressConfigArgs>;
        /**
         * The egress traffic type of Azure Spring Apps VNet instances.
         */
        outboundType?: pulumi.Input<string>;
        /**
         * Azure Spring Apps service reserved CIDR
         */
        serviceCidr?: pulumi.Input<string>;
        /**
         * Name of the resource group containing network resources of Azure Spring Apps Service Runtime
         */
        serviceRuntimeNetworkResourceGroup?: pulumi.Input<string>;
        /**
         * Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime
         */
        serviceRuntimeSubnetId?: pulumi.Input<string>;
    }

    /**
     * Persistent disk payload
     */
    export interface PersistentDiskArgs {
        /**
         * Mount path of the persistent disk
         */
        mountPath?: pulumi.Input<string>;
        /**
         * Size of the persistent disk in GB
         */
        sizeInGB?: pulumi.Input<number>;
    }

    /**
     * Probe describes a health check to be performed against an App Instance to determine whether it is alive or ready to receive traffic.
     */
    export interface ProbeArgs {
        /**
         * Indicate whether the probe is disabled.
         */
        disableProbe: pulumi.Input<boolean>;
        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Minimum value is 1.
         */
        failureThreshold?: pulumi.Input<number>;
        /**
         * Number of seconds after the App Instance has started before probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        initialDelaySeconds?: pulumi.Input<number>;
        /**
         * How often (in seconds) to perform the probe. Minimum value is 1.
         */
        periodSeconds?: pulumi.Input<number>;
        /**
         * The action of the probe.
         */
        probeAction?: pulumi.Input<ExecActionArgs | HTTPGetActionArgs | TCPSocketActionArgs>;
        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 for liveness and startup. Minimum value is 1.
         */
        successThreshold?: pulumi.Input<number>;
        /**
         * Number of seconds after which the probe times out. Minimum value is 1.
         */
        timeoutSeconds?: pulumi.Input<number>;
    }
    /**
     * probeArgsProvideDefaults sets the appropriate defaults for ProbeArgs
     */
    export function probeArgsProvideDefaults(val: ProbeArgs): ProbeArgs {
        return {
            ...val,
            disableProbe: (val.disableProbe) ?? false,
        };
    }

    /**
     * Azure Spring Apps App Instance Azure Queue based scaling rule.
     */
    export interface QueueScaleRuleArgs {
        /**
         * Authentication secrets for the queue scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Queue length.
         */
        queueLength?: pulumi.Input<number>;
        /**
         * Queue name.
         */
        queueName?: pulumi.Input<string>;
    }

    /**
     * Deployment resource request payload
     */
    export interface ResourceRequestsArgs {
        /**
         * Required CPU. 1 core can be represented by 1 or 1000m. This should be 500m or 1 for Basic tier, and {500m, 1, 2, 3, 4} for Standard tier.
         */
        cpu?: pulumi.Input<string>;
        /**
         * Required memory. 1 GB can be represented by 1Gi or 1024Mi. This should be {512Mi, 1Gi, 2Gi} for Basic tier, and {512Mi, 1Gi, 2Gi, ..., 8Gi} for Standard tier.
         */
        memory?: pulumi.Input<string>;
    }

    /**
     * Azure Spring Apps scaling configurations.
     */
    export interface ScaleArgs {
        /**
         * Optional. Maximum number of container replicas. Defaults to 10 if not set.
         */
        maxReplicas?: pulumi.Input<number>;
        /**
         * Optional. Minimum number of container replicas.
         */
        minReplicas?: pulumi.Input<number>;
        /**
         * Scaling rules.
         */
        rules?: pulumi.Input<pulumi.Input<ScaleRuleArgs>[]>;
    }
    /**
     * scaleArgsProvideDefaults sets the appropriate defaults for ScaleArgs
     */
    export function scaleArgsProvideDefaults(val: ScaleArgs): ScaleArgs {
        return {
            ...val,
            maxReplicas: (val.maxReplicas) ?? 10,
        };
    }

    /**
     * Azure Spring Apps App Instance scaling rule.
     */
    export interface ScaleRuleArgs {
        /**
         * Azure Queue based scaling.
         */
        azureQueue?: pulumi.Input<QueueScaleRuleArgs>;
        /**
         * Custom scale rule.
         */
        custom?: pulumi.Input<CustomScaleRuleArgs>;
        /**
         * HTTP requests based scaling.
         */
        http?: pulumi.Input<HttpScaleRuleArgs>;
        /**
         * Scale Rule Name
         */
        name?: pulumi.Input<string>;
        /**
         * Tcp requests based scaling.
         */
        tcp?: pulumi.Input<TcpScaleRuleArgs>;
    }

    /**
     * Auth Secrets for Azure Spring Apps App Instance Scale Rule
     */
    export interface ScaleRuleAuthArgs {
        /**
         * Name of the Azure Spring Apps App Instance secret from which to pull the auth params.
         */
        secretRef?: pulumi.Input<string>;
        /**
         * Trigger Parameter that uses the secret
         */
        triggerParameter?: pulumi.Input<string>;
    }

    /**
     * Secret definition.
     */
    export interface SecretArgs {
        /**
         * Secret Name.
         */
        name?: pulumi.Input<string>;
        /**
         * Secret Value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Additional Service settings in vnet injection instance
     */
    export interface ServiceVNetAddonsArgs {
        /**
         * Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet.
         */
        dataPlanePublicEndpoint?: pulumi.Input<boolean>;
        /**
         * Indicates whether the log stream in vnet injection instance could be accessed from internet.
         */
        logStreamPublicEndpoint?: pulumi.Input<boolean>;
    }
    /**
     * serviceVNetAddonsArgsProvideDefaults sets the appropriate defaults for ServiceVNetAddonsArgs
     */
    export function serviceVNetAddonsArgsProvideDefaults(val: ServiceVNetAddonsArgs): ServiceVNetAddonsArgs {
        return {
            ...val,
            dataPlanePublicEndpoint: (val.dataPlanePublicEndpoint) ?? false,
            logStreamPublicEndpoint: (val.logStreamPublicEndpoint) ?? false,
        };
    }

    /**
     * Sku of Azure Spring Apps
     */
    export interface SkuArgs {
        /**
         * Current capacity of the target resource
         */
        capacity?: pulumi.Input<number>;
        /**
         * Name of the Sku
         */
        name?: pulumi.Input<string>;
        /**
         * Tier of the Sku
         */
        tier?: pulumi.Input<string>;
    }
    /**
     * skuArgsProvideDefaults sets the appropriate defaults for SkuArgs
     */
    export function skuArgsProvideDefaults(val: SkuArgs): SkuArgs {
        return {
            ...val,
            name: (val.name) ?? "S0",
            tier: (val.tier) ?? "Standard",
        };
    }

    /**
     * Uploaded Java source code binary for a deployment
     */
    export interface SourceUploadedUserSourceInfoArgs {
        /**
         * Selector for the artifact to be used for the deployment for multi-module projects. This should be
         * the relative path to the target module/project.
         */
        artifactSelector?: pulumi.Input<string>;
        /**
         * Relative path of the storage which stores the source
         */
        relativePath?: pulumi.Input<string>;
        /**
         * Runtime version of the source file
         */
        runtimeVersion?: pulumi.Input<string>;
        /**
         * Type of the source uploaded
         * Expected value is 'Source'.
         */
        type: pulumi.Input<"Source">;
        /**
         * Version of the source
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Single sign-on related configuration
     */
    export interface SsoPropertiesArgs {
        /**
         * The public identifier for the application
         */
        clientId?: pulumi.Input<string>;
        /**
         * The secret known only to the application and the authorization server
         */
        clientSecret?: pulumi.Input<string>;
        /**
         * The URI of Issuer Identifier
         */
        issuerUri?: pulumi.Input<string>;
        /**
         * It defines the specific actions applications can be allowed to do on a user's behalf
         */
        scope?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * KPack ClusterStack properties payload
     */
    export interface StackPropertiesArgs {
        /**
         * Id of the ClusterStack.
         */
        id?: pulumi.Input<string>;
        /**
         * Version of the ClusterStack
         */
        version?: pulumi.Input<string>;
    }

    /**
     * storage resource of type Azure Storage Account.
     */
    export interface StorageAccountArgs {
        /**
         * The account key of the Azure Storage Account.
         */
        accountKey: pulumi.Input<string>;
        /**
         * The account name of the Azure Storage Account.
         */
        accountName: pulumi.Input<string>;
        /**
         * The type of the storage.
         * Expected value is 'StorageAccount'.
         */
        storageType: pulumi.Input<"StorageAccount">;
    }

    /**
     * TCPSocketAction describes an action based on opening a socket
     */
    export interface TCPSocketActionArgs {
        /**
         * The type of the action to take to perform the health check.
         * Expected value is 'TCPSocketAction'.
         */
        type: pulumi.Input<"TCPSocketAction">;
    }

    /**
     * Azure Spring Apps App Instance Tcp scaling rule.
     */
    export interface TcpScaleRuleArgs {
        /**
         * Authentication secrets for the tcp scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe tcp scale rule.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Temporary disk payload
     */
    export interface TemporaryDiskArgs {
        /**
         * Mount path of the temporary disk
         */
        mountPath?: pulumi.Input<string>;
        /**
         * Size of the temporary disk in GB
         */
        sizeInGB?: pulumi.Input<number>;
    }
    /**
     * temporaryDiskArgsProvideDefaults sets the appropriate defaults for TemporaryDiskArgs
     */
    export function temporaryDiskArgsProvideDefaults(val: TemporaryDiskArgs): TemporaryDiskArgs {
        return {
            ...val,
            mountPath: (val.mountPath) ?? "/tmp",
        };
    }

    /**
     * Source with uploaded location
     */
    export interface UploadedUserSourceInfoArgs {
        /**
         * Relative path of the storage which stores the source
         */
        relativePath?: pulumi.Input<string>;
        /**
         * Type of the source uploaded
         * Expected value is 'UploadedUserSourceInfo'.
         */
        type: pulumi.Input<"UploadedUserSourceInfo">;
        /**
         * Version of the source
         */
        version?: pulumi.Input<string>;
    }

    export namespace v20210601preview {
        /**
         * Certificate resource payload.
         */
        export interface CertificatePropertiesArgs {
            /**
             * The certificate version of key vault.
             */
            certVersion?: pulumi.Input<string>;
            /**
             * The certificate name of key vault.
             */
            keyVaultCertName: pulumi.Input<string>;
            /**
             * The vault uri of user key vault.
             */
            vaultUri: pulumi.Input<string>;
        }

    }

    export namespace v20230501preview {
        /**
         * Auth setting for basic auth.
         */
        export interface AcceleratorBasicAuthSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'BasicAuth'.
             */
            authType: pulumi.Input<"BasicAuth">;
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username: pulumi.Input<string>;
        }

        export interface AcceleratorGitRepositoryArgs {
            /**
             * Properties of the auth setting payload.
             */
            authSetting: pulumi.Input<v20230501preview.AcceleratorBasicAuthSettingArgs | v20230501preview.AcceleratorPublicSettingArgs | v20230501preview.AcceleratorSshSettingArgs>;
            /**
             * Git repository branch to be used.
             */
            branch?: pulumi.Input<string>;
            /**
             * Git repository commit to be used.
             */
            commit?: pulumi.Input<string>;
            /**
             * Git repository tag to be used.
             */
            gitTag?: pulumi.Input<string>;
            /**
             * Interval for checking for updates to Git or image repository.
             */
            intervalInSeconds?: pulumi.Input<number>;
            /**
             * Git repository URL for the accelerator.
             */
            url: pulumi.Input<string>;
        }

        /**
         * Auth setting for public url.
         */
        export interface AcceleratorPublicSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'Public'.
             */
            authType: pulumi.Input<"Public">;
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
        }

        /**
         * Auth setting for SSH auth.
         */
        export interface AcceleratorSshSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'SSH'.
             */
            authType: pulumi.Input<"SSH">;
            /**
             * Public SSH Key of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SSH Key algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Private SSH Key algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
        }

        /**
         * The properties of custom domain for API portal
         */
        export interface ApiPortalCustomDomainPropertiesArgs {
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * API portal properties payload
         */
        export interface ApiPortalPropertiesArgs {
            /**
             * The array of resource Ids of gateway to integrate with API portal.
             */
            gatewayIds?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * Indicates whether the API portal exposes endpoint.
             */
            public?: pulumi.Input<boolean>;
            /**
             * Collection of OpenAPI source URL locations.
             */
            sourceUrls?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230501preview.SsoPropertiesArgs>;
        }
        /**
         * apiPortalPropertiesArgsProvideDefaults sets the appropriate defaults for ApiPortalPropertiesArgs
         */
        export function apiPortalPropertiesArgsProvideDefaults(val: ApiPortalPropertiesArgs): ApiPortalPropertiesArgs {
            return {
                ...val,
                httpsOnly: (val.httpsOnly) ?? false,
                public: (val.public) ?? false,
            };
        }

        /**
         * Properties of an APM
         */
        export interface ApmPropertiesArgs {
            /**
             * Non-sensitive properties for the APM
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties for the APM
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * APM Type
             */
            type: pulumi.Input<string>;
        }

        /**
         * A reference to the APM
         */
        export interface ApmReferenceArgs {
            /**
             * Resource Id of the APM
             */
            resourceId: pulumi.Input<string>;
        }

        /**
         * App resource properties payload
         */
        export interface AppResourcePropertiesArgs {
            /**
             * Collection of addons
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * List of custom persistent disks
             */
            customPersistentDisks?: pulumi.Input<pulumi.Input<v20230501preview.CustomPersistentDiskResourceArgs>[]>;
            /**
             * Indicate if end to end TLS is enabled.
             */
            enableEndToEndTLS?: pulumi.Input<boolean>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * App ingress settings payload.
             */
            ingressSettings?: pulumi.Input<v20230501preview.IngressSettingsArgs>;
            /**
             * Collection of loaded certificates
             */
            loadedCertificates?: pulumi.Input<pulumi.Input<v20230501preview.LoadedCertificateArgs>[]>;
            /**
             * Persistent disk settings
             */
            persistentDisk?: pulumi.Input<v20230501preview.PersistentDiskArgs>;
            /**
             * Indicates whether the App exposes public endpoint
             */
            public?: pulumi.Input<boolean>;
            /**
             * Collection of auth secrets
             */
            secrets?: pulumi.Input<pulumi.Input<v20230501preview.SecretArgs>[]>;
            /**
             * Temporary disk settings
             */
            temporaryDisk?: pulumi.Input<v20230501preview.TemporaryDiskArgs>;
            /**
             * Additional App settings in vnet injection instance
             */
            vnetAddons?: pulumi.Input<v20230501preview.AppVNetAddonsArgs>;
            /**
             * The workload profile used for this app. Supported for Consumption + Dedicated plan.
             */
            workloadProfileName?: pulumi.Input<string>;
        }
        /**
         * appResourcePropertiesArgsProvideDefaults sets the appropriate defaults for AppResourcePropertiesArgs
         */
        export function appResourcePropertiesArgsProvideDefaults(val: AppResourcePropertiesArgs): AppResourcePropertiesArgs {
            return {
                ...val,
                enableEndToEndTLS: (val.enableEndToEndTLS) ?? false,
                httpsOnly: (val.httpsOnly) ?? false,
                temporaryDisk: (val.temporaryDisk ? pulumi.output(val.temporaryDisk).apply(v20230501preview.temporaryDiskArgsProvideDefaults) : undefined),
                vnetAddons: (val.vnetAddons ? pulumi.output(val.vnetAddons).apply(v20230501preview.appVNetAddonsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Additional App settings in vnet injection instance
         */
        export interface AppVNetAddonsArgs {
            /**
             * Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet.
             */
            publicEndpoint?: pulumi.Input<boolean>;
        }
        /**
         * appVNetAddonsArgsProvideDefaults sets the appropriate defaults for AppVNetAddonsArgs
         */
        export function appVNetAddonsArgsProvideDefaults(val: AppVNetAddonsArgs): AppVNetAddonsArgs {
            return {
                ...val,
                publicEndpoint: (val.publicEndpoint) ?? false,
            };
        }

        /**
         * The properties of the Azure File volume. Azure File shares are mounted as volumes.
         */
        export interface AzureFileVolumeArgs {
            /**
             * If set to true, it will create and mount a dedicated directory for every individual app instance.
             */
            enableSubPath?: pulumi.Input<boolean>;
            /**
             * These are the mount options for a persistent disk.
             */
            mountOptions?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The mount path of the persistent disk.
             */
            mountPath: pulumi.Input<string>;
            /**
             * Indicates whether the persistent disk is a readOnly one.
             */
            readOnly?: pulumi.Input<boolean>;
            /**
             * The share name of the Azure File share.
             */
            shareName?: pulumi.Input<string>;
            /**
             * The type of the underlying resource to mount as a persistent disk.
             * Expected value is 'AzureFileVolume'.
             */
            type: pulumi.Input<"AzureFileVolume">;
        }
        /**
         * azureFileVolumeArgsProvideDefaults sets the appropriate defaults for AzureFileVolumeArgs
         */
        export function azureFileVolumeArgsProvideDefaults(val: AzureFileVolumeArgs): AzureFileVolumeArgs {
            return {
                ...val,
                enableSubPath: (val.enableSubPath) ?? false,
            };
        }

        /**
         * Binding resource properties payload
         */
        export interface BindingResourcePropertiesArgs {
            /**
             * Binding parameters of the Binding resource
             */
            bindingParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * The key of the bound resource
             */
            key?: pulumi.Input<string>;
            /**
             * The Azure resource id of the bound resource
             */
            resourceId?: pulumi.Input<string>;
        }

        /**
         * Build resource properties payload
         */
        export interface BuildPropertiesArgs {
            /**
             * The resource id of agent pool
             */
            agentPool?: pulumi.Input<string>;
            /**
             * The APMs for this build
             */
            apms?: pulumi.Input<pulumi.Input<v20230501preview.ApmReferenceArgs>[]>;
            /**
             * The resource id of builder to build the source code
             */
            builder?: pulumi.Input<string>;
            /**
             * The CA Certificates for this build
             */
            certificates?: pulumi.Input<pulumi.Input<v20230501preview.CertificateReferenceArgs>[]>;
            /**
             * The environment variables for this build
             */
            env?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * The relative path of source code
             */
            relativePath?: pulumi.Input<string>;
            /**
             * The customized build resource for this build
             */
            resourceRequests?: pulumi.Input<v20230501preview.BuildResourceRequestsArgs>;
        }
        /**
         * buildPropertiesArgsProvideDefaults sets the appropriate defaults for BuildPropertiesArgs
         */
        export function buildPropertiesArgsProvideDefaults(val: BuildPropertiesArgs): BuildPropertiesArgs {
            return {
                ...val,
                resourceRequests: (val.resourceRequests ? pulumi.output(val.resourceRequests).apply(v20230501preview.buildResourceRequestsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Resource request payload of Build Resource.
         */
        export interface BuildResourceRequestsArgs {
            /**
             * Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m. 
             * The default value is 1, this should not exceed build service agent pool cpu size.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi. 
             * The default value is 2Gi, this should not exceed build service agent pool memory size.
             */
            memory?: pulumi.Input<string>;
        }
        /**
         * buildResourceRequestsArgsProvideDefaults sets the appropriate defaults for BuildResourceRequestsArgs
         */
        export function buildResourceRequestsArgsProvideDefaults(val: BuildResourceRequestsArgs): BuildResourceRequestsArgs {
            return {
                ...val,
                cpu: (val.cpu) ?? "1",
                memory: (val.memory) ?? "2Gi",
            };
        }

        /**
         * Reference to a build result
         */
        export interface BuildResultUserSourceInfoArgs {
            /**
             * Resource id of an existing succeeded build result under the same Spring instance.
             */
            buildResultId?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'BuildResult'.
             */
            type: pulumi.Input<"BuildResult">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Build service agent pool properties
         */
        export interface BuildServiceAgentPoolPropertiesArgs {
            /**
             * build service agent pool size properties
             */
            poolSize?: pulumi.Input<v20230501preview.BuildServiceAgentPoolSizePropertiesArgs>;
        }

        /**
         * Build service agent pool size properties
         */
        export interface BuildServiceAgentPoolSizePropertiesArgs {
            /**
             * The name of build service agent pool size
             */
            name?: pulumi.Input<string>;
        }

        /**
         * KPack Builder properties payload
         */
        export interface BuilderPropertiesArgs {
            /**
             * Builder buildpack groups.
             */
            buildpackGroups?: pulumi.Input<pulumi.Input<v20230501preview.BuildpacksGroupPropertiesArgs>[]>;
            /**
             * Builder cluster stack property.
             */
            stack?: pulumi.Input<v20230501preview.StackPropertiesArgs>;
        }

        /**
         * Buildpack Binding Launch Properties
         */
        export interface BuildpackBindingLaunchPropertiesArgs {
            /**
             * Non-sensitive properties for launchProperties
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties for launchProperties
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Properties of a buildpack binding
         */
        export interface BuildpackBindingPropertiesArgs {
            /**
             * Buildpack Binding Type
             */
            bindingType?: pulumi.Input<string | enums.v20230501preview.BindingType>;
            /**
             * The object describes the buildpack binding launch properties
             */
            launchProperties?: pulumi.Input<v20230501preview.BuildpackBindingLaunchPropertiesArgs>;
        }

        /**
         * Buildpack properties payload
         */
        export interface BuildpackPropertiesArgs {
            /**
             * Id of the buildpack
             */
            id?: pulumi.Input<string>;
        }

        /**
         * Buildpack group properties of the Builder
         */
        export interface BuildpacksGroupPropertiesArgs {
            /**
             * Buildpacks in the buildpack group
             */
            buildpacks?: pulumi.Input<pulumi.Input<v20230501preview.BuildpackPropertiesArgs>[]>;
            /**
             * Buildpack group name
             */
            name?: pulumi.Input<string>;
        }

        /**
         * A reference to the certificate
         */
        export interface CertificateReferenceArgs {
            /**
             * Resource Id of the certificate
             */
            resourceId: pulumi.Input<string>;
        }

        /**
         * Service properties payload
         */
        export interface ClusterResourcePropertiesArgs {
            /**
             * The name of the resource group that contains the infrastructure resources
             */
            infraResourceGroup?: pulumi.Input<string>;
            /**
             * The resource Id of the Managed Environment that the Spring Apps instance builds on
             */
            managedEnvironmentId?: pulumi.Input<string>;
            /**
             * Purchasing 3rd party product of the Service resource.
             */
            marketplaceResource?: pulumi.Input<v20230501preview.MarketplaceResourceArgs>;
            /**
             * Network profile of the Service
             */
            networkProfile?: pulumi.Input<v20230501preview.NetworkProfileArgs>;
            /**
             * Additional Service settings in vnet injection instance
             */
            vnetAddons?: pulumi.Input<v20230501preview.ServiceVNetAddonsArgs>;
            zoneRedundant?: pulumi.Input<boolean>;
        }
        /**
         * clusterResourcePropertiesArgsProvideDefaults sets the appropriate defaults for ClusterResourcePropertiesArgs
         */
        export function clusterResourcePropertiesArgsProvideDefaults(val: ClusterResourcePropertiesArgs): ClusterResourcePropertiesArgs {
            return {
                ...val,
                vnetAddons: (val.vnetAddons ? pulumi.output(val.vnetAddons).apply(v20230501preview.serviceVNetAddonsArgsProvideDefaults) : undefined),
                zoneRedundant: (val.zoneRedundant) ?? false,
            };
        }

        /**
         * Property of git.
         */
        export interface ConfigServerGitPropertyArgs {
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label?: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Repositories of git.
             */
            repositories?: pulumi.Input<pulumi.Input<v20230501preview.GitPatternRepositoryArgs>[]>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Config server git properties payload
         */
        export interface ConfigServerPropertiesArgs {
            /**
             * Settings of config server.
             */
            configServer?: pulumi.Input<v20230501preview.ConfigServerSettingsArgs>;
            /**
             * Enabled state of the config server. This is only used in Consumption tier.
             */
            enabledState?: pulumi.Input<string | enums.v20230501preview.ConfigServerEnabledState>;
            /**
             * Error when apply config server settings.
             */
            error?: pulumi.Input<v20230501preview.ErrorArgs>;
        }

        /**
         * The settings of config server.
         */
        export interface ConfigServerSettingsArgs {
            /**
             * Property of git environment.
             */
            gitProperty?: pulumi.Input<v20230501preview.ConfigServerGitPropertyArgs>;
        }

        /**
         * Property of git environment.
         */
        export interface ConfigurationServiceGitPropertyArgs {
            /**
             * Repositories of Application Configuration Service git property.
             */
            repositories?: pulumi.Input<pulumi.Input<v20230501preview.ConfigurationServiceGitRepositoryArgs>[]>;
        }

        /**
         * Git repository property payload for Application Configuration Service
         */
        export interface ConfigurationServiceGitRepositoryArgs {
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
            /**
             * Git libraries used to support various repository providers
             */
            gitImplementation?: pulumi.Input<string | enums.v20230501preview.GitImplementation>;
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label: pulumi.Input<string>;
            /**
             * Name of the repository
             */
            name: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Collection of patterns of the repository
             */
            patterns: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Application Configuration Service properties payload
         */
        export interface ConfigurationServicePropertiesArgs {
            /**
             * The generation of the Application Configuration Service.
             */
            generation?: pulumi.Input<string | enums.v20230501preview.ConfigurationServiceGeneration>;
            /**
             * The settings of Application Configuration Service.
             */
            settings?: pulumi.Input<v20230501preview.ConfigurationServiceSettingsArgs>;
        }
        /**
         * configurationServicePropertiesArgsProvideDefaults sets the appropriate defaults for ConfigurationServicePropertiesArgs
         */
        export function configurationServicePropertiesArgsProvideDefaults(val: ConfigurationServicePropertiesArgs): ConfigurationServicePropertiesArgs {
            return {
                ...val,
                generation: (val.generation) ?? "Gen1",
            };
        }

        /**
         * The settings of Application Configuration Service.
         */
        export interface ConfigurationServiceSettingsArgs {
            /**
             * Property of git environment.
             */
            gitProperty?: pulumi.Input<v20230501preview.ConfigurationServiceGitPropertyArgs>;
        }

        /**
         * Container liveness and readiness probe settings
         */
        export interface ContainerProbeSettingsArgs {
            /**
             * Indicates whether disable the liveness and readiness probe
             */
            disableProbe?: pulumi.Input<boolean>;
        }

        /**
         * The basic authentication properties for the container registry resource.
         */
        export interface ContainerRegistryBasicCredentialsArgs {
            /**
             * The password of the Container Registry.
             */
            password: pulumi.Input<string>;
            /**
             * The login server of the Container Registry.
             */
            server: pulumi.Input<string>;
            /**
             * The credential type of the container registry credentials.
             * Expected value is 'BasicAuth'.
             */
            type: pulumi.Input<"BasicAuth">;
            /**
             * The username of the Container Registry.
             */
            username: pulumi.Input<string>;
        }

        /**
         * Container registry resource payload.
         */
        export interface ContainerRegistryPropertiesArgs {
            /**
             * The credentials of the container registry resource.
             */
            credentials: pulumi.Input<v20230501preview.ContainerRegistryBasicCredentialsArgs>;
        }

        /**
         * Properties of certificate imported from key vault.
         */
        export interface ContentCertificatePropertiesArgs {
            /**
             * The content of uploaded certificate.
             */
            content?: pulumi.Input<string>;
            /**
             * The type of the certificate source.
             * Expected value is 'ContentCertificate'.
             */
            type: pulumi.Input<"ContentCertificate">;
        }

        /**
         * Custom container payload
         */
        export interface CustomContainerArgs {
            /**
             * Arguments to the entrypoint. The docker image's CMD is used if this is not provided.
             */
            args?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Container image of the custom container. This should be in the form of <repository>:<tag> without the server name of the registry
             */
            containerImage?: pulumi.Input<string>;
            /**
             * Credential of the image registry
             */
            imageRegistryCredential?: pulumi.Input<v20230501preview.ImageRegistryCredentialArgs>;
            /**
             * Language framework of the container image uploaded
             */
            languageFramework?: pulumi.Input<string>;
            /**
             * The name of the registry that contains the container image
             */
            server?: pulumi.Input<string>;
        }

        /**
         * Custom container user source info
         */
        export interface CustomContainerUserSourceInfoArgs {
            /**
             * Custom container payload
             */
            customContainer?: pulumi.Input<v20230501preview.CustomContainerArgs>;
            /**
             * Type of the source uploaded
             * Expected value is 'Container'.
             */
            type: pulumi.Input<"Container">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Custom domain of app resource payload.
         */
        export interface CustomDomainPropertiesArgs {
            /**
             * The bound certificate name of domain.
             */
            certName?: pulumi.Input<string>;
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * Custom persistent disk resource payload.
         */
        export interface CustomPersistentDiskResourceArgs {
            /**
             * Properties of the custom persistent disk resource payload.
             */
            customPersistentDiskProperties?: pulumi.Input<v20230501preview.AzureFileVolumeArgs>;
            /**
             * The resource id of Azure Spring Apps Storage resource.
             */
            storageId: pulumi.Input<string>;
        }
        /**
         * customPersistentDiskResourceArgsProvideDefaults sets the appropriate defaults for CustomPersistentDiskResourceArgs
         */
        export function customPersistentDiskResourceArgsProvideDefaults(val: CustomPersistentDiskResourceArgs): CustomPersistentDiskResourceArgs {
            return {
                ...val,
                customPersistentDiskProperties: (val.customPersistentDiskProperties ? pulumi.output(val.customPersistentDiskProperties).apply(v20230501preview.azureFileVolumeArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Azure Spring Apps App Instance Custom scaling rule.
         */
        export interface CustomScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe custom scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Type of the custom scale rule
             * eg: azure-servicebus, redis etc.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Customized accelerator properties payload
         */
        export interface CustomizedAcceleratorPropertiesArgs {
            acceleratorTags?: pulumi.Input<pulumi.Input<string>[]>;
            description?: pulumi.Input<string>;
            displayName?: pulumi.Input<string>;
            gitRepository: pulumi.Input<v20230501preview.AcceleratorGitRepositoryArgs>;
            iconUrl?: pulumi.Input<string>;
        }

        /**
         * Deployment resource properties payload
         */
        export interface DeploymentResourcePropertiesArgs {
            /**
             * Indicates whether the Deployment is active
             */
            active?: pulumi.Input<boolean>;
            /**
             * Deployment settings of the Deployment
             */
            deploymentSettings?: pulumi.Input<v20230501preview.DeploymentSettingsArgs>;
            /**
             * Uploaded source information of the deployment.
             */
            source?: pulumi.Input<v20230501preview.BuildResultUserSourceInfoArgs | v20230501preview.CustomContainerUserSourceInfoArgs | v20230501preview.JarUploadedUserSourceInfoArgs | v20230501preview.NetCoreZipUploadedUserSourceInfoArgs | v20230501preview.SourceUploadedUserSourceInfoArgs | v20230501preview.UploadedUserSourceInfoArgs>;
        }
        /**
         * deploymentResourcePropertiesArgsProvideDefaults sets the appropriate defaults for DeploymentResourcePropertiesArgs
         */
        export function deploymentResourcePropertiesArgsProvideDefaults(val: DeploymentResourcePropertiesArgs): DeploymentResourcePropertiesArgs {
            return {
                ...val,
                deploymentSettings: (val.deploymentSettings ? pulumi.output(val.deploymentSettings).apply(v20230501preview.deploymentSettingsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Deployment settings payload
         */
        export interface DeploymentSettingsArgs {
            /**
             * Collection of addons
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * Collection of ApmReferences
             */
            apms?: pulumi.Input<pulumi.Input<v20230501preview.ApmReferenceArgs>[]>;
            /**
             * Container liveness and readiness probe settings
             */
            containerProbeSettings?: pulumi.Input<v20230501preview.ContainerProbeSettingsArgs>;
            /**
             * Collection of environment variables
             */
            environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Periodic probe of App Instance liveness. App Instance will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            livenessProbe?: pulumi.Input<v20230501preview.ProbeArgs>;
            /**
             * Periodic probe of App Instance service readiness. App Instance will be removed from service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            readinessProbe?: pulumi.Input<v20230501preview.ProbeArgs>;
            /**
             * The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later.
             */
            resourceRequests?: pulumi.Input<v20230501preview.ResourceRequestsArgs>;
            /**
             * Scaling properties for the Azure Spring Apps App Instance.
             */
            scale?: pulumi.Input<v20230501preview.ScaleArgs>;
            /**
             * StartupProbe indicates that the App Instance has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a App Instance's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            startupProbe?: pulumi.Input<v20230501preview.ProbeArgs>;
            /**
             * Optional duration in seconds the App Instance needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the App Instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 90 seconds.
             */
            terminationGracePeriodSeconds?: pulumi.Input<number>;
        }
        /**
         * deploymentSettingsArgsProvideDefaults sets the appropriate defaults for DeploymentSettingsArgs
         */
        export function deploymentSettingsArgsProvideDefaults(val: DeploymentSettingsArgs): DeploymentSettingsArgs {
            return {
                ...val,
                livenessProbe: (val.livenessProbe ? pulumi.output(val.livenessProbe).apply(v20230501preview.probeArgsProvideDefaults) : undefined),
                readinessProbe: (val.readinessProbe ? pulumi.output(val.readinessProbe).apply(v20230501preview.probeArgsProvideDefaults) : undefined),
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230501preview.scaleArgsProvideDefaults) : undefined),
                startupProbe: (val.startupProbe ? pulumi.output(val.startupProbe).apply(v20230501preview.probeArgsProvideDefaults) : undefined),
                terminationGracePeriodSeconds: (val.terminationGracePeriodSeconds) ?? 90,
            };
        }

        /**
         * Detail settings for Dev Tool Portal feature
         */
        export interface DevToolPortalFeatureDetailArgs {
            /**
             * State of the plugin
             */
            state?: pulumi.Input<string | enums.v20230501preview.DevToolPortalFeatureState>;
        }
        /**
         * devToolPortalFeatureDetailArgsProvideDefaults sets the appropriate defaults for DevToolPortalFeatureDetailArgs
         */
        export function devToolPortalFeatureDetailArgsProvideDefaults(val: DevToolPortalFeatureDetailArgs): DevToolPortalFeatureDetailArgs {
            return {
                ...val,
                state: (val.state) ?? "Enabled",
            };
        }

        /**
         * Settings for Dev Tool Portal
         */
        export interface DevToolPortalFeatureSettingsArgs {
            /**
             * Detail of Accelerator plugin
             */
            applicationAccelerator?: pulumi.Input<v20230501preview.DevToolPortalFeatureDetailArgs>;
            /**
             * Detail of App Live View plugin
             */
            applicationLiveView?: pulumi.Input<v20230501preview.DevToolPortalFeatureDetailArgs>;
        }
        /**
         * devToolPortalFeatureSettingsArgsProvideDefaults sets the appropriate defaults for DevToolPortalFeatureSettingsArgs
         */
        export function devToolPortalFeatureSettingsArgsProvideDefaults(val: DevToolPortalFeatureSettingsArgs): DevToolPortalFeatureSettingsArgs {
            return {
                ...val,
                applicationAccelerator: (val.applicationAccelerator ? pulumi.output(val.applicationAccelerator).apply(v20230501preview.devToolPortalFeatureDetailArgsProvideDefaults) : undefined),
                applicationLiveView: (val.applicationLiveView ? pulumi.output(val.applicationLiveView).apply(v20230501preview.devToolPortalFeatureDetailArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Dev Tool Portal properties payload
         */
        export interface DevToolPortalPropertiesArgs {
            /**
             * Settings for Dev Tool Portal
             */
            features?: pulumi.Input<v20230501preview.DevToolPortalFeatureSettingsArgs>;
            /**
             * Indicates whether the resource exposes public endpoint
             */
            public?: pulumi.Input<boolean>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230501preview.DevToolPortalSsoPropertiesArgs>;
        }
        /**
         * devToolPortalPropertiesArgsProvideDefaults sets the appropriate defaults for DevToolPortalPropertiesArgs
         */
        export function devToolPortalPropertiesArgsProvideDefaults(val: DevToolPortalPropertiesArgs): DevToolPortalPropertiesArgs {
            return {
                ...val,
                features: (val.features ? pulumi.output(val.features).apply(v20230501preview.devToolPortalFeatureSettingsArgsProvideDefaults) : undefined),
                public: (val.public) ?? false,
            };
        }

        /**
         * Single sign-on related configuration
         */
        export interface DevToolPortalSsoPropertiesArgs {
            /**
             * The public identifier for the application
             */
            clientId?: pulumi.Input<string>;
            /**
             * The secret known only to the application and the authorization server
             */
            clientSecret?: pulumi.Input<string>;
            /**
             * The URI of a JSON file with generic OIDC provider configuration.
             */
            metadataUrl?: pulumi.Input<string>;
            /**
             * It defines the specific actions applications can be allowed to do on a user's behalf
             */
            scopes?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The error code compose of code and message.
         */
        export interface ErrorArgs {
            /**
             * The code of error.
             */
            code?: pulumi.Input<string>;
            /**
             * The message of error.
             */
            message?: pulumi.Input<string>;
        }

        /**
         * ExecAction describes a "run in container" action.
         */
        export interface ExecActionArgs {
            /**
             * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'ExecAction'.
             */
            type: pulumi.Input<"ExecAction">;
        }

        /**
         * API metadata property for Spring Cloud Gateway
         */
        export interface GatewayApiMetadataPropertiesArgs {
            /**
             * Detailed description of the APIs available on the Gateway instance (default: `Generated OpenAPI 3 document that describes the API routes configured.`)
             */
            description?: pulumi.Input<string>;
            /**
             * Location of additional documentation for the APIs available on the Gateway instance
             */
            documentation?: pulumi.Input<string>;
            /**
             * Base URL that API consumers will use to access APIs on the Gateway instance.
             */
            serverUrl?: pulumi.Input<string>;
            /**
             * Title describing the context of the APIs available on the Gateway instance (default: `Spring Cloud Gateway for K8S`)
             */
            title?: pulumi.Input<string>;
            /**
             * Version of APIs available on this Gateway instance (default: `unspecified`).
             */
            version?: pulumi.Input<string>;
        }

        /**
         * API route config of the Spring Cloud Gateway
         */
        export interface GatewayApiRouteArgs {
            /**
             * A description, will be applied to methods in the generated OpenAPI documentation.
             */
            description?: pulumi.Input<string>;
            /**
             * To modify the request before sending it to the target endpoint, or the received response.
             */
            filters?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Route processing order.
             */
            order?: pulumi.Input<number>;
            /**
             * A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
             */
            predicates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Enable sso validation.
             */
            ssoEnabled?: pulumi.Input<boolean>;
            /**
             * Classification tags, will be applied to methods in the generated OpenAPI documentation.
             */
            tags?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A title, will be applied to methods in the generated OpenAPI documentation.
             */
            title?: pulumi.Input<string>;
            /**
             * Pass currently-authenticated user's identity token to application service, default is 'false'
             */
            tokenRelay?: pulumi.Input<boolean>;
            /**
             * Full uri, will override `appName`.
             */
            uri?: pulumi.Input<string>;
        }

        /**
         * Cross-Origin Resource Sharing property
         */
        export interface GatewayCorsPropertiesArgs {
            /**
             * Whether user credentials are supported on cross-site requests. Valid values: `true`, `false`.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * Allowed headers in cross-site requests. The special value `*` allows actual requests to send any header.
             */
            allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed HTTP methods on cross-site requests. The special value `*` allows all methods. If not set, `GET` and `HEAD` are allowed by default.
             */
            allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed origin patterns to make cross-site requests.
             */
            allowedOriginPatterns?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed origins to make cross-site requests. The special value `*` allows all domains.
             */
            allowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * HTTP response headers to expose for cross-site requests.
             */
            exposedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * How long, in seconds, the response from a pre-flight request can be cached by clients.
             */
            maxAge?: pulumi.Input<number>;
        }

        /**
         * The properties of custom domain for Spring Cloud Gateway
         */
        export interface GatewayCustomDomainPropertiesArgs {
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * Spring Cloud Gateway properties payload
         */
        export interface GatewayPropertiesArgs {
            /**
             * Collection of addons for Spring Cloud Gateway
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * API metadata property for Spring Cloud Gateway
             */
            apiMetadataProperties?: pulumi.Input<v20230501preview.GatewayApiMetadataPropertiesArgs>;
            /**
             * Collection of APM type used in Spring Cloud Gateway
             */
            apmTypes?: pulumi.Input<pulumi.Input<string | enums.v20230501preview.ApmType>[]>;
            /**
             * Client-Certification Authentication.
             */
            clientAuth?: pulumi.Input<v20230501preview.GatewayPropertiesClientAuthArgs>;
            /**
             * Cross-Origin Resource Sharing property
             */
            corsProperties?: pulumi.Input<v20230501preview.GatewayCorsPropertiesArgs>;
            /**
             * Environment variables of Spring Cloud Gateway
             */
            environmentVariables?: pulumi.Input<v20230501preview.GatewayPropertiesEnvironmentVariablesArgs>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * Indicates whether the Spring Cloud Gateway exposes endpoint.
             */
            public?: pulumi.Input<boolean>;
            /**
             * The requested resource quantity for required CPU and Memory.
             */
            resourceRequests?: pulumi.Input<v20230501preview.GatewayResourceRequestsArgs>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230501preview.SsoPropertiesArgs>;
        }
        /**
         * gatewayPropertiesArgsProvideDefaults sets the appropriate defaults for GatewayPropertiesArgs
         */
        export function gatewayPropertiesArgsProvideDefaults(val: GatewayPropertiesArgs): GatewayPropertiesArgs {
            return {
                ...val,
                clientAuth: (val.clientAuth ? pulumi.output(val.clientAuth).apply(v20230501preview.gatewayPropertiesClientAuthArgsProvideDefaults) : undefined),
                httpsOnly: (val.httpsOnly) ?? false,
                public: (val.public) ?? false,
                resourceRequests: (val.resourceRequests ? pulumi.output(val.resourceRequests).apply(v20230501preview.gatewayResourceRequestsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Client-Certification Authentication.
         */
        export interface GatewayPropertiesClientAuthArgs {
            /**
             * Whether to enable certificate verification or not
             */
            certificateVerification?: pulumi.Input<string | enums.v20230501preview.GatewayCertificateVerification>;
            /**
             * Collection of certificate resource Ids in Azure Spring Apps.
             */
            certificates?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * gatewayPropertiesClientAuthArgsProvideDefaults sets the appropriate defaults for GatewayPropertiesClientAuthArgs
         */
        export function gatewayPropertiesClientAuthArgsProvideDefaults(val: GatewayPropertiesClientAuthArgs): GatewayPropertiesClientAuthArgs {
            return {
                ...val,
                certificateVerification: (val.certificateVerification) ?? "Disabled",
            };
        }

        /**
         * Environment variables of Spring Cloud Gateway
         */
        export interface GatewayPropertiesEnvironmentVariablesArgs {
            /**
             * Non-sensitive properties
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Resource request payload of Spring Cloud Gateway.
         */
        export interface GatewayResourceRequestsArgs {
            /**
             * Cpu allocated to each Spring Cloud Gateway instance.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Memory allocated to each Spring Cloud Gateway instance.
             */
            memory?: pulumi.Input<string>;
        }
        /**
         * gatewayResourceRequestsArgsProvideDefaults sets the appropriate defaults for GatewayResourceRequestsArgs
         */
        export function gatewayResourceRequestsArgsProvideDefaults(val: GatewayResourceRequestsArgs): GatewayResourceRequestsArgs {
            return {
                ...val,
                cpu: (val.cpu) ?? "1",
                memory: (val.memory) ?? "2Gi",
            };
        }

        /**
         * OpenAPI properties of Spring Cloud Gateway route config.
         */
        export interface GatewayRouteConfigOpenApiPropertiesArgs {
            /**
             * The URI of OpenAPI specification.
             */
            uri?: pulumi.Input<string>;
        }

        /**
         * API route config of the Spring Cloud Gateway
         */
        export interface GatewayRouteConfigPropertiesArgs {
            /**
             * The resource Id of the Azure Spring Apps app, required unless route defines `uri`.
             */
            appResourceId?: pulumi.Input<string>;
            /**
             * To modify the request before sending it to the target endpoint, or the received response in app level.
             */
            filters?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OpenAPI properties of Spring Cloud Gateway route config.
             */
            openApi?: pulumi.Input<v20230501preview.GatewayRouteConfigOpenApiPropertiesArgs>;
            /**
             * A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
             */
            predicates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Protocol of routed Azure Spring Apps applications.
             */
            protocol?: pulumi.Input<string | enums.v20230501preview.GatewayRouteConfigProtocol>;
            /**
             * Array of API routes, each route contains properties such as `title`, `uri`, `ssoEnabled`, `predicates`, `filters`.
             */
            routes?: pulumi.Input<pulumi.Input<v20230501preview.GatewayApiRouteArgs>[]>;
            /**
             * Enable Single Sign-On in app level.
             */
            ssoEnabled?: pulumi.Input<boolean>;
        }
        /**
         * gatewayRouteConfigPropertiesArgsProvideDefaults sets the appropriate defaults for GatewayRouteConfigPropertiesArgs
         */
        export function gatewayRouteConfigPropertiesArgsProvideDefaults(val: GatewayRouteConfigPropertiesArgs): GatewayRouteConfigPropertiesArgs {
            return {
                ...val,
                protocol: (val.protocol) ?? "HTTP",
            };
        }

        /**
         * Git repository property payload for config server
         */
        export interface GitPatternRepositoryArgs {
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label?: pulumi.Input<string>;
            /**
             * Name of the repository
             */
            name: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Collection of pattern of the repository
             */
            pattern?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * HTTPGetAction describes an action based on HTTP Get requests.
         */
        export interface HTTPGetActionArgs {
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Scheme to use for connecting to the host. Defaults to HTTP.
             *
             * Possible enum values:
             *  - `"HTTP"` means that the scheme used will be http://
             *  - `"HTTPS"` means that the scheme used will be https://
             */
            scheme?: pulumi.Input<string | enums.v20230501preview.HTTPSchemeType>;
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'HTTPGetAction'.
             */
            type: pulumi.Input<"HTTPGetAction">;
        }

        /**
         * Azure Spring Apps App Instance Http scaling rule.
         */
        export interface HttpScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe http scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Credential of the image registry
         */
        export interface ImageRegistryCredentialArgs {
            /**
             * The password of the image registry credential
             */
            password?: pulumi.Input<string>;
            /**
             * The username of the image registry credential
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Ingress configuration payload for Azure Spring Apps resource.
         */
        export interface IngressConfigArgs {
            /**
             * Ingress read time out in seconds.
             */
            readTimeoutInSeconds?: pulumi.Input<number>;
        }

        /**
         * App ingress settings payload.
         */
        export interface IngressSettingsArgs {
            /**
             * How ingress should communicate with this app backend service.
             */
            backendProtocol?: pulumi.Input<string | enums.v20230501preview.BackendProtocol>;
            /**
             * Client-Certification Authentication.
             */
            clientAuth?: pulumi.Input<v20230501preview.IngressSettingsClientAuthArgs>;
            /**
             * Ingress read time out in seconds.
             */
            readTimeoutInSeconds?: pulumi.Input<number>;
            /**
             * Ingress send time out in seconds.
             */
            sendTimeoutInSeconds?: pulumi.Input<number>;
            /**
             * Type of the affinity, set this to Cookie to enable session affinity.
             */
            sessionAffinity?: pulumi.Input<string | enums.v20230501preview.SessionAffinity>;
            /**
             * Time in seconds until the cookie expires.
             */
            sessionCookieMaxAge?: pulumi.Input<number>;
        }

        /**
         * Client-Certification Authentication.
         */
        export interface IngressSettingsClientAuthArgs {
            /**
             * Collection of certificate resource id.
             */
            certificates?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Uploaded Jar binary for a deployment
         */
        export interface JarUploadedUserSourceInfoArgs {
            /**
             * JVM parameter
             */
            jvmOptions?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the Jar file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'Jar'.
             */
            type: pulumi.Input<"Jar">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Properties of certificate imported from key vault.
         */
        export interface KeyVaultCertificatePropertiesArgs {
            /**
             * The certificate version of key vault.
             */
            certVersion?: pulumi.Input<string>;
            /**
             * Optional. If set to true, it will not import private key from key vault.
             */
            excludePrivateKey?: pulumi.Input<boolean>;
            /**
             * The certificate name of key vault.
             */
            keyVaultCertName: pulumi.Input<string>;
            /**
             * The type of the certificate source.
             * Expected value is 'KeyVaultCertificate'.
             */
            type: pulumi.Input<"KeyVaultCertificate">;
            /**
             * The vault uri of user key vault.
             */
            vaultUri: pulumi.Input<string>;
        }
        /**
         * keyVaultCertificatePropertiesArgsProvideDefaults sets the appropriate defaults for KeyVaultCertificatePropertiesArgs
         */
        export function keyVaultCertificatePropertiesArgsProvideDefaults(val: KeyVaultCertificatePropertiesArgs): KeyVaultCertificatePropertiesArgs {
            return {
                ...val,
                excludePrivateKey: (val.excludePrivateKey) ?? false,
            };
        }

        /**
         * Loaded certificate payload
         */
        export interface LoadedCertificateArgs {
            /**
             * Indicate whether the certificate will be loaded into default trust store, only work for Java runtime.
             */
            loadTrustStore?: pulumi.Input<boolean>;
            /**
             * Resource Id of loaded certificate
             */
            resourceId: pulumi.Input<string>;
        }
        /**
         * loadedCertificateArgsProvideDefaults sets the appropriate defaults for LoadedCertificateArgs
         */
        export function loadedCertificateArgsProvideDefaults(val: LoadedCertificateArgs): LoadedCertificateArgs {
            return {
                ...val,
                loadTrustStore: (val.loadTrustStore) ?? false,
            };
        }

        /**
         * Managed identity properties retrieved from ARM request headers.
         */
        export interface ManagedIdentityPropertiesArgs {
            /**
             * Principal Id of system-assigned managed identity.
             */
            principalId?: pulumi.Input<string>;
            /**
             * Tenant Id of system-assigned managed identity.
             */
            tenantId?: pulumi.Input<string>;
            /**
             * Type of the managed identity
             */
            type?: pulumi.Input<string | enums.v20230501preview.ManagedIdentityType>;
            /**
             * Properties of user-assigned managed identities
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Purchasing 3rd Party product for one Azure Spring Apps instance
         */
        export interface MarketplaceResourceArgs {
            /**
             * The plan id of the 3rd Party Artifact that is being procured.
             */
            plan?: pulumi.Input<string>;
            /**
             * The 3rd Party artifact that is being procured.
             */
            product?: pulumi.Input<string>;
            /**
             * The publisher id of the 3rd Party Artifact that is being bought.
             */
            publisher?: pulumi.Input<string>;
        }

        /**
         * Monitoring Setting properties payload
         */
        export interface MonitoringSettingPropertiesArgs {
            /**
             * Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings
             */
            appInsightsInstrumentationKey?: pulumi.Input<string>;
            /**
             * Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0]
             */
            appInsightsSamplingRate?: pulumi.Input<number>;
            /**
             * Error when apply Monitoring Setting changes.
             */
            error?: pulumi.Input<v20230501preview.ErrorArgs>;
            /**
             * Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not
             */
            traceEnabled?: pulumi.Input<boolean>;
        }

        /**
         * Uploaded Jar binary for a deployment
         */
        export interface NetCoreZipUploadedUserSourceInfoArgs {
            /**
             * The path to the .NET executable relative to zip root
             */
            netCoreMainEntryPath?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the .Net file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'NetCoreZip'.
             */
            type: pulumi.Input<"NetCoreZip">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Service network profile payload
         */
        export interface NetworkProfileArgs {
            /**
             * Name of the resource group containing network resources for customer apps in Azure Spring Apps
             */
            appNetworkResourceGroup?: pulumi.Input<string>;
            /**
             * Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps
             */
            appSubnetId?: pulumi.Input<string>;
            /**
             * Ingress configuration payload for Azure Spring Apps resource.
             */
            ingressConfig?: pulumi.Input<v20230501preview.IngressConfigArgs>;
            /**
             * The egress traffic type of Azure Spring Apps VNet instances.
             */
            outboundType?: pulumi.Input<string>;
            /**
             * Azure Spring Apps service reserved CIDR
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * Name of the resource group containing network resources of Azure Spring Apps Service Runtime
             */
            serviceRuntimeNetworkResourceGroup?: pulumi.Input<string>;
            /**
             * Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime
             */
            serviceRuntimeSubnetId?: pulumi.Input<string>;
        }

        /**
         * Persistent disk payload
         */
        export interface PersistentDiskArgs {
            /**
             * Mount path of the persistent disk
             */
            mountPath?: pulumi.Input<string>;
            /**
             * Size of the persistent disk in GB
             */
            sizeInGB?: pulumi.Input<number>;
        }

        /**
         * Probe describes a health check to be performed against an App Instance to determine whether it is alive or ready to receive traffic.
         */
        export interface ProbeArgs {
            /**
             * Indicate whether the probe is disabled.
             */
            disableProbe: pulumi.Input<boolean>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            /**
             * Number of seconds after the App Instance has started before probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * The action of the probe.
             */
            probeAction?: pulumi.Input<v20230501preview.ExecActionArgs | v20230501preview.HTTPGetActionArgs | v20230501preview.TCPSocketActionArgs>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out. Minimum value is 1.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * probeArgsProvideDefaults sets the appropriate defaults for ProbeArgs
         */
        export function probeArgsProvideDefaults(val: ProbeArgs): ProbeArgs {
            return {
                ...val,
                disableProbe: (val.disableProbe) ?? false,
            };
        }

        /**
         * Azure Spring Apps App Instance Azure Queue based scaling rule.
         */
        export interface QueueScaleRuleArgs {
            /**
             * Authentication secrets for the queue scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501preview.ScaleRuleAuthArgs>[]>;
            /**
             * Queue length.
             */
            queueLength?: pulumi.Input<number>;
            /**
             * Queue name.
             */
            queueName?: pulumi.Input<string>;
        }

        /**
         * Deployment resource request payload
         */
        export interface ResourceRequestsArgs {
            /**
             * Required CPU. 1 core can be represented by 1 or 1000m. This should be 500m or 1 for Basic tier, and {500m, 1, 2, 3, 4} for Standard tier.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Required memory. 1 GB can be represented by 1Gi or 1024Mi. This should be {512Mi, 1Gi, 2Gi} for Basic tier, and {512Mi, 1Gi, 2Gi, ..., 8Gi} for Standard tier.
             */
            memory?: pulumi.Input<string>;
        }

        /**
         * Azure Spring Apps scaling configurations.
         */
        export interface ScaleArgs {
            /**
             * Optional. Maximum number of container replicas. Defaults to 10 if not set.
             */
            maxReplicas?: pulumi.Input<number>;
            /**
             * Optional. Minimum number of container replicas.
             */
            minReplicas?: pulumi.Input<number>;
            /**
             * Scaling rules.
             */
            rules?: pulumi.Input<pulumi.Input<v20230501preview.ScaleRuleArgs>[]>;
        }
        /**
         * scaleArgsProvideDefaults sets the appropriate defaults for ScaleArgs
         */
        export function scaleArgsProvideDefaults(val: ScaleArgs): ScaleArgs {
            return {
                ...val,
                maxReplicas: (val.maxReplicas) ?? 10,
            };
        }

        /**
         * Azure Spring Apps App Instance scaling rule.
         */
        export interface ScaleRuleArgs {
            /**
             * Azure Queue based scaling.
             */
            azureQueue?: pulumi.Input<v20230501preview.QueueScaleRuleArgs>;
            /**
             * Custom scale rule.
             */
            custom?: pulumi.Input<v20230501preview.CustomScaleRuleArgs>;
            /**
             * HTTP requests based scaling.
             */
            http?: pulumi.Input<v20230501preview.HttpScaleRuleArgs>;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Tcp requests based scaling.
             */
            tcp?: pulumi.Input<v20230501preview.TcpScaleRuleArgs>;
        }

        /**
         * Auth Secrets for Azure Spring Apps App Instance Scale Rule
         */
        export interface ScaleRuleAuthArgs {
            /**
             * Name of the Azure Spring Apps App Instance secret from which to pull the auth params.
             */
            secretRef?: pulumi.Input<string>;
            /**
             * Trigger Parameter that uses the secret
             */
            triggerParameter?: pulumi.Input<string>;
        }

        /**
         * Secret definition.
         */
        export interface SecretArgs {
            /**
             * Secret Name.
             */
            name?: pulumi.Input<string>;
            /**
             * Secret Value.
             */
            value?: pulumi.Input<string>;
        }

        /**
         * Additional Service settings in vnet injection instance
         */
        export interface ServiceVNetAddonsArgs {
            /**
             * Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet.
             */
            dataPlanePublicEndpoint?: pulumi.Input<boolean>;
            /**
             * Indicates whether the log stream in vnet injection instance could be accessed from internet.
             */
            logStreamPublicEndpoint?: pulumi.Input<boolean>;
        }
        /**
         * serviceVNetAddonsArgsProvideDefaults sets the appropriate defaults for ServiceVNetAddonsArgs
         */
        export function serviceVNetAddonsArgsProvideDefaults(val: ServiceVNetAddonsArgs): ServiceVNetAddonsArgs {
            return {
                ...val,
                dataPlanePublicEndpoint: (val.dataPlanePublicEndpoint) ?? false,
                logStreamPublicEndpoint: (val.logStreamPublicEndpoint) ?? false,
            };
        }

        /**
         * Sku of Azure Spring Apps
         */
        export interface SkuArgs {
            /**
             * Current capacity of the target resource
             */
            capacity?: pulumi.Input<number>;
            /**
             * Name of the Sku
             */
            name?: pulumi.Input<string>;
            /**
             * Tier of the Sku
             */
            tier?: pulumi.Input<string>;
        }
        /**
         * skuArgsProvideDefaults sets the appropriate defaults for SkuArgs
         */
        export function skuArgsProvideDefaults(val: SkuArgs): SkuArgs {
            return {
                ...val,
                name: (val.name) ?? "S0",
                tier: (val.tier) ?? "Standard",
            };
        }

        /**
         * Uploaded Java source code binary for a deployment
         */
        export interface SourceUploadedUserSourceInfoArgs {
            /**
             * Selector for the artifact to be used for the deployment for multi-module projects. This should be
             * the relative path to the target module/project.
             */
            artifactSelector?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the source file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'Source'.
             */
            type: pulumi.Input<"Source">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Single sign-on related configuration
         */
        export interface SsoPropertiesArgs {
            /**
             * The public identifier for the application
             */
            clientId?: pulumi.Input<string>;
            /**
             * The secret known only to the application and the authorization server
             */
            clientSecret?: pulumi.Input<string>;
            /**
             * The URI of Issuer Identifier
             */
            issuerUri?: pulumi.Input<string>;
            /**
             * It defines the specific actions applications can be allowed to do on a user's behalf
             */
            scope?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * KPack ClusterStack properties payload
         */
        export interface StackPropertiesArgs {
            /**
             * Id of the ClusterStack.
             */
            id?: pulumi.Input<string>;
            /**
             * Version of the ClusterStack
             */
            version?: pulumi.Input<string>;
        }

        /**
         * storage resource of type Azure Storage Account.
         */
        export interface StorageAccountArgs {
            /**
             * The account key of the Azure Storage Account.
             */
            accountKey: pulumi.Input<string>;
            /**
             * The account name of the Azure Storage Account.
             */
            accountName: pulumi.Input<string>;
            /**
             * The type of the storage.
             * Expected value is 'StorageAccount'.
             */
            storageType: pulumi.Input<"StorageAccount">;
        }

        /**
         * TCPSocketAction describes an action based on opening a socket
         */
        export interface TCPSocketActionArgs {
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'TCPSocketAction'.
             */
            type: pulumi.Input<"TCPSocketAction">;
        }

        /**
         * Azure Spring Apps App Instance Tcp scaling rule.
         */
        export interface TcpScaleRuleArgs {
            /**
             * Authentication secrets for the tcp scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe tcp scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Temporary disk payload
         */
        export interface TemporaryDiskArgs {
            /**
             * Mount path of the temporary disk
             */
            mountPath?: pulumi.Input<string>;
            /**
             * Size of the temporary disk in GB
             */
            sizeInGB?: pulumi.Input<number>;
        }
        /**
         * temporaryDiskArgsProvideDefaults sets the appropriate defaults for TemporaryDiskArgs
         */
        export function temporaryDiskArgsProvideDefaults(val: TemporaryDiskArgs): TemporaryDiskArgs {
            return {
                ...val,
                mountPath: (val.mountPath) ?? "/tmp",
            };
        }

        /**
         * Source with uploaded location
         */
        export interface UploadedUserSourceInfoArgs {
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'UploadedUserSourceInfo'.
             */
            type: pulumi.Input<"UploadedUserSourceInfo">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

    }

    export namespace v20230701preview {
        /**
         * Auth setting for basic auth.
         */
        export interface AcceleratorBasicAuthSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'BasicAuth'.
             */
            authType: pulumi.Input<"BasicAuth">;
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username: pulumi.Input<string>;
        }

        export interface AcceleratorGitRepositoryArgs {
            /**
             * Properties of the auth setting payload.
             */
            authSetting: pulumi.Input<v20230701preview.AcceleratorBasicAuthSettingArgs | v20230701preview.AcceleratorPublicSettingArgs | v20230701preview.AcceleratorSshSettingArgs>;
            /**
             * Git repository branch to be used.
             */
            branch?: pulumi.Input<string>;
            /**
             * Git repository commit to be used.
             */
            commit?: pulumi.Input<string>;
            /**
             * Git repository tag to be used.
             */
            gitTag?: pulumi.Input<string>;
            /**
             * Interval for checking for updates to Git or image repository.
             */
            intervalInSeconds?: pulumi.Input<number>;
            /**
             * Git repository URL for the accelerator.
             */
            url: pulumi.Input<string>;
        }

        /**
         * Auth setting for public url.
         */
        export interface AcceleratorPublicSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'Public'.
             */
            authType: pulumi.Input<"Public">;
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
        }

        /**
         * Auth setting for SSH auth.
         */
        export interface AcceleratorSshSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'SSH'.
             */
            authType: pulumi.Input<"SSH">;
            /**
             * Public SSH Key of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SSH Key algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Private SSH Key algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
        }

        /**
         * The properties of custom domain for API portal
         */
        export interface ApiPortalCustomDomainPropertiesArgs {
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * API portal properties payload
         */
        export interface ApiPortalPropertiesArgs {
            /**
             * The array of resource Ids of gateway to integrate with API portal.
             */
            gatewayIds?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * Indicates whether the API portal exposes endpoint.
             */
            public?: pulumi.Input<boolean>;
            /**
             * Collection of OpenAPI source URL locations.
             */
            sourceUrls?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230701preview.SsoPropertiesArgs>;
        }
        /**
         * apiPortalPropertiesArgsProvideDefaults sets the appropriate defaults for ApiPortalPropertiesArgs
         */
        export function apiPortalPropertiesArgsProvideDefaults(val: ApiPortalPropertiesArgs): ApiPortalPropertiesArgs {
            return {
                ...val,
                httpsOnly: (val.httpsOnly) ?? false,
                public: (val.public) ?? false,
            };
        }

        /**
         * Properties of an APM
         */
        export interface ApmPropertiesArgs {
            /**
             * Non-sensitive properties for the APM
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties for the APM
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * APM Type
             */
            type: pulumi.Input<string>;
        }

        /**
         * A reference to the APM
         */
        export interface ApmReferenceArgs {
            /**
             * Resource Id of the APM
             */
            resourceId: pulumi.Input<string>;
        }

        /**
         * App resource properties payload
         */
        export interface AppResourcePropertiesArgs {
            /**
             * Collection of addons
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * List of custom persistent disks
             */
            customPersistentDisks?: pulumi.Input<pulumi.Input<v20230701preview.CustomPersistentDiskResourceArgs>[]>;
            /**
             * Indicate if end to end TLS is enabled.
             */
            enableEndToEndTLS?: pulumi.Input<boolean>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * App ingress settings payload.
             */
            ingressSettings?: pulumi.Input<v20230701preview.IngressSettingsArgs>;
            /**
             * Collection of loaded certificates
             */
            loadedCertificates?: pulumi.Input<pulumi.Input<v20230701preview.LoadedCertificateArgs>[]>;
            /**
             * Persistent disk settings
             */
            persistentDisk?: pulumi.Input<v20230701preview.PersistentDiskArgs>;
            /**
             * Indicates whether the App exposes public endpoint
             */
            public?: pulumi.Input<boolean>;
            /**
             * Collection of auth secrets
             */
            secrets?: pulumi.Input<pulumi.Input<v20230701preview.SecretArgs>[]>;
            /**
             * Temporary disk settings
             */
            temporaryDisk?: pulumi.Input<v20230701preview.TemporaryDiskArgs>;
            /**
             * Additional App settings in vnet injection instance
             */
            vnetAddons?: pulumi.Input<v20230701preview.AppVNetAddonsArgs>;
            /**
             * The workload profile used for this app. Supported for Consumption + Dedicated plan.
             */
            workloadProfileName?: pulumi.Input<string>;
        }
        /**
         * appResourcePropertiesArgsProvideDefaults sets the appropriate defaults for AppResourcePropertiesArgs
         */
        export function appResourcePropertiesArgsProvideDefaults(val: AppResourcePropertiesArgs): AppResourcePropertiesArgs {
            return {
                ...val,
                enableEndToEndTLS: (val.enableEndToEndTLS) ?? false,
                httpsOnly: (val.httpsOnly) ?? false,
                temporaryDisk: (val.temporaryDisk ? pulumi.output(val.temporaryDisk).apply(v20230701preview.temporaryDiskArgsProvideDefaults) : undefined),
                vnetAddons: (val.vnetAddons ? pulumi.output(val.vnetAddons).apply(v20230701preview.appVNetAddonsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Additional App settings in vnet injection instance
         */
        export interface AppVNetAddonsArgs {
            /**
             * Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet.
             */
            publicEndpoint?: pulumi.Input<boolean>;
        }
        /**
         * appVNetAddonsArgsProvideDefaults sets the appropriate defaults for AppVNetAddonsArgs
         */
        export function appVNetAddonsArgsProvideDefaults(val: AppVNetAddonsArgs): AppVNetAddonsArgs {
            return {
                ...val,
                publicEndpoint: (val.publicEndpoint) ?? false,
            };
        }

        /**
         * The properties of the Azure File volume. Azure File shares are mounted as volumes.
         */
        export interface AzureFileVolumeArgs {
            /**
             * If set to true, it will create and mount a dedicated directory for every individual app instance.
             */
            enableSubPath?: pulumi.Input<boolean>;
            /**
             * These are the mount options for a persistent disk.
             */
            mountOptions?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The mount path of the persistent disk.
             */
            mountPath: pulumi.Input<string>;
            /**
             * Indicates whether the persistent disk is a readOnly one.
             */
            readOnly?: pulumi.Input<boolean>;
            /**
             * The share name of the Azure File share.
             */
            shareName?: pulumi.Input<string>;
            /**
             * The type of the underlying resource to mount as a persistent disk.
             * Expected value is 'AzureFileVolume'.
             */
            type: pulumi.Input<"AzureFileVolume">;
        }
        /**
         * azureFileVolumeArgsProvideDefaults sets the appropriate defaults for AzureFileVolumeArgs
         */
        export function azureFileVolumeArgsProvideDefaults(val: AzureFileVolumeArgs): AzureFileVolumeArgs {
            return {
                ...val,
                enableSubPath: (val.enableSubPath) ?? false,
            };
        }

        /**
         * Binding resource properties payload
         */
        export interface BindingResourcePropertiesArgs {
            /**
             * Binding parameters of the Binding resource
             */
            bindingParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * The key of the bound resource
             */
            key?: pulumi.Input<string>;
            /**
             * The Azure resource id of the bound resource
             */
            resourceId?: pulumi.Input<string>;
        }

        /**
         * Build resource properties payload
         */
        export interface BuildPropertiesArgs {
            /**
             * The resource id of agent pool
             */
            agentPool?: pulumi.Input<string>;
            /**
             * The APMs for this build
             */
            apms?: pulumi.Input<pulumi.Input<v20230701preview.ApmReferenceArgs>[]>;
            /**
             * The resource id of builder to build the source code
             */
            builder?: pulumi.Input<string>;
            /**
             * The CA Certificates for this build
             */
            certificates?: pulumi.Input<pulumi.Input<v20230701preview.CertificateReferenceArgs>[]>;
            /**
             * The environment variables for this build
             */
            env?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * The relative path of source code
             */
            relativePath?: pulumi.Input<string>;
            /**
             * The customized build resource for this build
             */
            resourceRequests?: pulumi.Input<v20230701preview.BuildResourceRequestsArgs>;
        }
        /**
         * buildPropertiesArgsProvideDefaults sets the appropriate defaults for BuildPropertiesArgs
         */
        export function buildPropertiesArgsProvideDefaults(val: BuildPropertiesArgs): BuildPropertiesArgs {
            return {
                ...val,
                resourceRequests: (val.resourceRequests ? pulumi.output(val.resourceRequests).apply(v20230701preview.buildResourceRequestsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Resource request payload of Build Resource.
         */
        export interface BuildResourceRequestsArgs {
            /**
             * Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m. 
             * The default value is 1, this should not exceed build service agent pool cpu size.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi. 
             * The default value is 2Gi, this should not exceed build service agent pool memory size.
             */
            memory?: pulumi.Input<string>;
        }
        /**
         * buildResourceRequestsArgsProvideDefaults sets the appropriate defaults for BuildResourceRequestsArgs
         */
        export function buildResourceRequestsArgsProvideDefaults(val: BuildResourceRequestsArgs): BuildResourceRequestsArgs {
            return {
                ...val,
                cpu: (val.cpu) ?? "1",
                memory: (val.memory) ?? "2Gi",
            };
        }

        /**
         * Reference to a build result
         */
        export interface BuildResultUserSourceInfoArgs {
            /**
             * Resource id of an existing succeeded build result under the same Spring instance.
             */
            buildResultId?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'BuildResult'.
             */
            type: pulumi.Input<"BuildResult">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Build service agent pool properties
         */
        export interface BuildServiceAgentPoolPropertiesArgs {
            /**
             * build service agent pool size properties
             */
            poolSize?: pulumi.Input<v20230701preview.BuildServiceAgentPoolSizePropertiesArgs>;
        }

        /**
         * Build service agent pool size properties
         */
        export interface BuildServiceAgentPoolSizePropertiesArgs {
            /**
             * The name of build service agent pool size
             */
            name?: pulumi.Input<string>;
        }

        /**
         * KPack Builder properties payload
         */
        export interface BuilderPropertiesArgs {
            /**
             * Builder buildpack groups.
             */
            buildpackGroups?: pulumi.Input<pulumi.Input<v20230701preview.BuildpacksGroupPropertiesArgs>[]>;
            /**
             * Builder cluster stack property.
             */
            stack?: pulumi.Input<v20230701preview.StackPropertiesArgs>;
        }

        /**
         * Buildpack Binding Launch Properties
         */
        export interface BuildpackBindingLaunchPropertiesArgs {
            /**
             * Non-sensitive properties for launchProperties
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties for launchProperties
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Properties of a buildpack binding
         */
        export interface BuildpackBindingPropertiesArgs {
            /**
             * Buildpack Binding Type
             */
            bindingType?: pulumi.Input<string | enums.v20230701preview.BindingType>;
            /**
             * The object describes the buildpack binding launch properties
             */
            launchProperties?: pulumi.Input<v20230701preview.BuildpackBindingLaunchPropertiesArgs>;
        }

        /**
         * Buildpack properties payload
         */
        export interface BuildpackPropertiesArgs {
            /**
             * Id of the buildpack
             */
            id?: pulumi.Input<string>;
        }

        /**
         * Buildpack group properties of the Builder
         */
        export interface BuildpacksGroupPropertiesArgs {
            /**
             * Buildpacks in the buildpack group
             */
            buildpacks?: pulumi.Input<pulumi.Input<v20230701preview.BuildpackPropertiesArgs>[]>;
            /**
             * Buildpack group name
             */
            name?: pulumi.Input<string>;
        }

        /**
         * A reference to the certificate
         */
        export interface CertificateReferenceArgs {
            /**
             * Resource Id of the certificate
             */
            resourceId: pulumi.Input<string>;
        }

        /**
         * Service properties payload
         */
        export interface ClusterResourcePropertiesArgs {
            /**
             * The name of the resource group that contains the infrastructure resources
             */
            infraResourceGroup?: pulumi.Input<string>;
            /**
             * Additional Service settings for planned maintenance
             */
            maintenanceScheduleConfiguration?: pulumi.Input<v20230701preview.WeeklyMaintenanceScheduleConfigurationArgs>;
            /**
             * The resource Id of the Managed Environment that the Spring Apps instance builds on
             */
            managedEnvironmentId?: pulumi.Input<string>;
            /**
             * Purchasing 3rd party product of the Service resource.
             */
            marketplaceResource?: pulumi.Input<v20230701preview.MarketplaceResourceArgs>;
            /**
             * Network profile of the Service
             */
            networkProfile?: pulumi.Input<v20230701preview.NetworkProfileArgs>;
            /**
             * Additional Service settings in vnet injection instance
             */
            vnetAddons?: pulumi.Input<v20230701preview.ServiceVNetAddonsArgs>;
            zoneRedundant?: pulumi.Input<boolean>;
        }
        /**
         * clusterResourcePropertiesArgsProvideDefaults sets the appropriate defaults for ClusterResourcePropertiesArgs
         */
        export function clusterResourcePropertiesArgsProvideDefaults(val: ClusterResourcePropertiesArgs): ClusterResourcePropertiesArgs {
            return {
                ...val,
                vnetAddons: (val.vnetAddons ? pulumi.output(val.vnetAddons).apply(v20230701preview.serviceVNetAddonsArgsProvideDefaults) : undefined),
                zoneRedundant: (val.zoneRedundant) ?? false,
            };
        }

        /**
         * Property of git.
         */
        export interface ConfigServerGitPropertyArgs {
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label?: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Repositories of git.
             */
            repositories?: pulumi.Input<pulumi.Input<v20230701preview.GitPatternRepositoryArgs>[]>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Config server git properties payload
         */
        export interface ConfigServerPropertiesArgs {
            /**
             * Settings of config server.
             */
            configServer?: pulumi.Input<v20230701preview.ConfigServerSettingsArgs>;
            /**
             * Enabled state of the config server. This is only used in Consumption tier.
             */
            enabledState?: pulumi.Input<string | enums.v20230701preview.ConfigServerEnabledState>;
            /**
             * Error when apply config server settings.
             */
            error?: pulumi.Input<v20230701preview.ErrorArgs>;
        }

        /**
         * The settings of config server.
         */
        export interface ConfigServerSettingsArgs {
            /**
             * Property of git environment.
             */
            gitProperty?: pulumi.Input<v20230701preview.ConfigServerGitPropertyArgs>;
        }

        /**
         * Property of git environment.
         */
        export interface ConfigurationServiceGitPropertyArgs {
            /**
             * Repositories of Application Configuration Service git property.
             */
            repositories?: pulumi.Input<pulumi.Input<v20230701preview.ConfigurationServiceGitRepositoryArgs>[]>;
        }

        /**
         * Git repository property payload for Application Configuration Service
         */
        export interface ConfigurationServiceGitRepositoryArgs {
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
            /**
             * Git libraries used to support various repository providers
             */
            gitImplementation?: pulumi.Input<string | enums.v20230701preview.GitImplementation>;
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label: pulumi.Input<string>;
            /**
             * Name of the repository
             */
            name: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Collection of patterns of the repository
             */
            patterns: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Application Configuration Service properties payload
         */
        export interface ConfigurationServicePropertiesArgs {
            /**
             * The generation of the Application Configuration Service.
             */
            generation?: pulumi.Input<string | enums.v20230701preview.ConfigurationServiceGeneration>;
            /**
             * The settings of Application Configuration Service.
             */
            settings?: pulumi.Input<v20230701preview.ConfigurationServiceSettingsArgs>;
        }
        /**
         * configurationServicePropertiesArgsProvideDefaults sets the appropriate defaults for ConfigurationServicePropertiesArgs
         */
        export function configurationServicePropertiesArgsProvideDefaults(val: ConfigurationServicePropertiesArgs): ConfigurationServicePropertiesArgs {
            return {
                ...val,
                generation: (val.generation) ?? "Gen1",
            };
        }

        /**
         * The settings of Application Configuration Service.
         */
        export interface ConfigurationServiceSettingsArgs {
            /**
             * Property of git environment.
             */
            gitProperty?: pulumi.Input<v20230701preview.ConfigurationServiceGitPropertyArgs>;
        }

        /**
         * Container liveness and readiness probe settings
         */
        export interface ContainerProbeSettingsArgs {
            /**
             * Indicates whether disable the liveness and readiness probe
             */
            disableProbe?: pulumi.Input<boolean>;
        }

        /**
         * The basic authentication properties for the container registry resource.
         */
        export interface ContainerRegistryBasicCredentialsArgs {
            /**
             * The password of the Container Registry.
             */
            password: pulumi.Input<string>;
            /**
             * The login server of the Container Registry.
             */
            server: pulumi.Input<string>;
            /**
             * The credential type of the container registry credentials.
             * Expected value is 'BasicAuth'.
             */
            type: pulumi.Input<"BasicAuth">;
            /**
             * The username of the Container Registry.
             */
            username: pulumi.Input<string>;
        }

        /**
         * Container registry resource payload.
         */
        export interface ContainerRegistryPropertiesArgs {
            /**
             * The credentials of the container registry resource.
             */
            credentials: pulumi.Input<v20230701preview.ContainerRegistryBasicCredentialsArgs>;
        }

        /**
         * Properties of certificate imported from key vault.
         */
        export interface ContentCertificatePropertiesArgs {
            /**
             * The content of uploaded certificate.
             */
            content?: pulumi.Input<string>;
            /**
             * The type of the certificate source.
             * Expected value is 'ContentCertificate'.
             */
            type: pulumi.Input<"ContentCertificate">;
        }

        /**
         * Custom container payload
         */
        export interface CustomContainerArgs {
            /**
             * Arguments to the entrypoint. The docker image's CMD is used if this is not provided.
             */
            args?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Container image of the custom container. This should be in the form of <repository>:<tag> without the server name of the registry
             */
            containerImage?: pulumi.Input<string>;
            /**
             * Credential of the image registry
             */
            imageRegistryCredential?: pulumi.Input<v20230701preview.ImageRegistryCredentialArgs>;
            /**
             * Language framework of the container image uploaded. Supported values: "springboot", "", null.
             */
            languageFramework?: pulumi.Input<string>;
            /**
             * The name of the registry that contains the container image
             */
            server?: pulumi.Input<string>;
        }

        /**
         * Custom container user source info
         */
        export interface CustomContainerUserSourceInfoArgs {
            /**
             * Custom container payload
             */
            customContainer?: pulumi.Input<v20230701preview.CustomContainerArgs>;
            /**
             * Type of the source uploaded
             * Expected value is 'Container'.
             */
            type: pulumi.Input<"Container">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Custom domain of app resource payload.
         */
        export interface CustomDomainPropertiesArgs {
            /**
             * The bound certificate name of domain.
             */
            certName?: pulumi.Input<string>;
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * Custom persistent disk resource payload.
         */
        export interface CustomPersistentDiskResourceArgs {
            /**
             * Properties of the custom persistent disk resource payload.
             */
            customPersistentDiskProperties?: pulumi.Input<v20230701preview.AzureFileVolumeArgs>;
            /**
             * The resource id of Azure Spring Apps Storage resource.
             */
            storageId: pulumi.Input<string>;
        }
        /**
         * customPersistentDiskResourceArgsProvideDefaults sets the appropriate defaults for CustomPersistentDiskResourceArgs
         */
        export function customPersistentDiskResourceArgsProvideDefaults(val: CustomPersistentDiskResourceArgs): CustomPersistentDiskResourceArgs {
            return {
                ...val,
                customPersistentDiskProperties: (val.customPersistentDiskProperties ? pulumi.output(val.customPersistentDiskProperties).apply(v20230701preview.azureFileVolumeArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Azure Spring Apps App Instance Custom scaling rule.
         */
        export interface CustomScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230701preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe custom scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Type of the custom scale rule
             * eg: azure-servicebus, redis etc.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Customized accelerator properties payload
         */
        export interface CustomizedAcceleratorPropertiesArgs {
            acceleratorTags?: pulumi.Input<pulumi.Input<string>[]>;
            description?: pulumi.Input<string>;
            displayName?: pulumi.Input<string>;
            gitRepository: pulumi.Input<v20230701preview.AcceleratorGitRepositoryArgs>;
            iconUrl?: pulumi.Input<string>;
        }

        /**
         * Deployment resource properties payload
         */
        export interface DeploymentResourcePropertiesArgs {
            /**
             * Indicates whether the Deployment is active
             */
            active?: pulumi.Input<boolean>;
            /**
             * Deployment settings of the Deployment
             */
            deploymentSettings?: pulumi.Input<v20230701preview.DeploymentSettingsArgs>;
            /**
             * Uploaded source information of the deployment.
             */
            source?: pulumi.Input<v20230701preview.BuildResultUserSourceInfoArgs | v20230701preview.CustomContainerUserSourceInfoArgs | v20230701preview.JarUploadedUserSourceInfoArgs | v20230701preview.NetCoreZipUploadedUserSourceInfoArgs | v20230701preview.SourceUploadedUserSourceInfoArgs | v20230701preview.UploadedUserSourceInfoArgs>;
        }
        /**
         * deploymentResourcePropertiesArgsProvideDefaults sets the appropriate defaults for DeploymentResourcePropertiesArgs
         */
        export function deploymentResourcePropertiesArgsProvideDefaults(val: DeploymentResourcePropertiesArgs): DeploymentResourcePropertiesArgs {
            return {
                ...val,
                deploymentSettings: (val.deploymentSettings ? pulumi.output(val.deploymentSettings).apply(v20230701preview.deploymentSettingsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Deployment settings payload
         */
        export interface DeploymentSettingsArgs {
            /**
             * Collection of addons
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * Collection of ApmReferences
             */
            apms?: pulumi.Input<pulumi.Input<v20230701preview.ApmReferenceArgs>[]>;
            /**
             * Container liveness and readiness probe settings
             */
            containerProbeSettings?: pulumi.Input<v20230701preview.ContainerProbeSettingsArgs>;
            /**
             * Collection of environment variables
             */
            environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Periodic probe of App Instance liveness. App Instance will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            livenessProbe?: pulumi.Input<v20230701preview.ProbeArgs>;
            /**
             * Periodic probe of App Instance service readiness. App Instance will be removed from service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            readinessProbe?: pulumi.Input<v20230701preview.ProbeArgs>;
            /**
             * The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later.
             */
            resourceRequests?: pulumi.Input<v20230701preview.ResourceRequestsArgs>;
            /**
             * Scaling properties for the Azure Spring Apps App Instance.
             */
            scale?: pulumi.Input<v20230701preview.ScaleArgs>;
            /**
             * StartupProbe indicates that the App Instance has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a App Instance's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            startupProbe?: pulumi.Input<v20230701preview.ProbeArgs>;
            /**
             * Optional duration in seconds the App Instance needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the App Instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 90 seconds.
             */
            terminationGracePeriodSeconds?: pulumi.Input<number>;
        }
        /**
         * deploymentSettingsArgsProvideDefaults sets the appropriate defaults for DeploymentSettingsArgs
         */
        export function deploymentSettingsArgsProvideDefaults(val: DeploymentSettingsArgs): DeploymentSettingsArgs {
            return {
                ...val,
                livenessProbe: (val.livenessProbe ? pulumi.output(val.livenessProbe).apply(v20230701preview.probeArgsProvideDefaults) : undefined),
                readinessProbe: (val.readinessProbe ? pulumi.output(val.readinessProbe).apply(v20230701preview.probeArgsProvideDefaults) : undefined),
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230701preview.scaleArgsProvideDefaults) : undefined),
                startupProbe: (val.startupProbe ? pulumi.output(val.startupProbe).apply(v20230701preview.probeArgsProvideDefaults) : undefined),
                terminationGracePeriodSeconds: (val.terminationGracePeriodSeconds) ?? 90,
            };
        }

        /**
         * Detail settings for Dev Tool Portal feature
         */
        export interface DevToolPortalFeatureDetailArgs {
            /**
             * State of the plugin
             */
            state?: pulumi.Input<string | enums.v20230701preview.DevToolPortalFeatureState>;
        }
        /**
         * devToolPortalFeatureDetailArgsProvideDefaults sets the appropriate defaults for DevToolPortalFeatureDetailArgs
         */
        export function devToolPortalFeatureDetailArgsProvideDefaults(val: DevToolPortalFeatureDetailArgs): DevToolPortalFeatureDetailArgs {
            return {
                ...val,
                state: (val.state) ?? "Enabled",
            };
        }

        /**
         * Settings for Dev Tool Portal
         */
        export interface DevToolPortalFeatureSettingsArgs {
            /**
             * Detail of Accelerator plugin
             */
            applicationAccelerator?: pulumi.Input<v20230701preview.DevToolPortalFeatureDetailArgs>;
            /**
             * Detail of App Live View plugin
             */
            applicationLiveView?: pulumi.Input<v20230701preview.DevToolPortalFeatureDetailArgs>;
        }
        /**
         * devToolPortalFeatureSettingsArgsProvideDefaults sets the appropriate defaults for DevToolPortalFeatureSettingsArgs
         */
        export function devToolPortalFeatureSettingsArgsProvideDefaults(val: DevToolPortalFeatureSettingsArgs): DevToolPortalFeatureSettingsArgs {
            return {
                ...val,
                applicationAccelerator: (val.applicationAccelerator ? pulumi.output(val.applicationAccelerator).apply(v20230701preview.devToolPortalFeatureDetailArgsProvideDefaults) : undefined),
                applicationLiveView: (val.applicationLiveView ? pulumi.output(val.applicationLiveView).apply(v20230701preview.devToolPortalFeatureDetailArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Dev Tool Portal properties payload
         */
        export interface DevToolPortalPropertiesArgs {
            /**
             * Settings for Dev Tool Portal
             */
            features?: pulumi.Input<v20230701preview.DevToolPortalFeatureSettingsArgs>;
            /**
             * Indicates whether the resource exposes public endpoint
             */
            public?: pulumi.Input<boolean>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230701preview.DevToolPortalSsoPropertiesArgs>;
        }
        /**
         * devToolPortalPropertiesArgsProvideDefaults sets the appropriate defaults for DevToolPortalPropertiesArgs
         */
        export function devToolPortalPropertiesArgsProvideDefaults(val: DevToolPortalPropertiesArgs): DevToolPortalPropertiesArgs {
            return {
                ...val,
                features: (val.features ? pulumi.output(val.features).apply(v20230701preview.devToolPortalFeatureSettingsArgsProvideDefaults) : undefined),
                public: (val.public) ?? false,
            };
        }

        /**
         * Single sign-on related configuration
         */
        export interface DevToolPortalSsoPropertiesArgs {
            /**
             * The public identifier for the application
             */
            clientId?: pulumi.Input<string>;
            /**
             * The secret known only to the application and the authorization server
             */
            clientSecret?: pulumi.Input<string>;
            /**
             * The URI of a JSON file with generic OIDC provider configuration.
             */
            metadataUrl?: pulumi.Input<string>;
            /**
             * It defines the specific actions applications can be allowed to do on a user's behalf
             */
            scopes?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The error code compose of code and message.
         */
        export interface ErrorArgs {
            /**
             * The code of error.
             */
            code?: pulumi.Input<string>;
            /**
             * The message of error.
             */
            message?: pulumi.Input<string>;
        }

        /**
         * ExecAction describes a "run in container" action.
         */
        export interface ExecActionArgs {
            /**
             * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'ExecAction'.
             */
            type: pulumi.Input<"ExecAction">;
        }

        /**
         * API metadata property for Spring Cloud Gateway
         */
        export interface GatewayApiMetadataPropertiesArgs {
            /**
             * Detailed description of the APIs available on the Gateway instance (default: `Generated OpenAPI 3 document that describes the API routes configured.`)
             */
            description?: pulumi.Input<string>;
            /**
             * Location of additional documentation for the APIs available on the Gateway instance
             */
            documentation?: pulumi.Input<string>;
            /**
             * Base URL that API consumers will use to access APIs on the Gateway instance.
             */
            serverUrl?: pulumi.Input<string>;
            /**
             * Title describing the context of the APIs available on the Gateway instance (default: `Spring Cloud Gateway for K8S`)
             */
            title?: pulumi.Input<string>;
            /**
             * Version of APIs available on this Gateway instance (default: `unspecified`).
             */
            version?: pulumi.Input<string>;
        }

        /**
         * API route config of the Spring Cloud Gateway
         */
        export interface GatewayApiRouteArgs {
            /**
             * A description, will be applied to methods in the generated OpenAPI documentation.
             */
            description?: pulumi.Input<string>;
            /**
             * To modify the request before sending it to the target endpoint, or the received response.
             */
            filters?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Route processing order.
             */
            order?: pulumi.Input<number>;
            /**
             * A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
             */
            predicates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Enable sso validation.
             */
            ssoEnabled?: pulumi.Input<boolean>;
            /**
             * Classification tags, will be applied to methods in the generated OpenAPI documentation.
             */
            tags?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A title, will be applied to methods in the generated OpenAPI documentation.
             */
            title?: pulumi.Input<string>;
            /**
             * Pass currently-authenticated user's identity token to application service, default is 'false'
             */
            tokenRelay?: pulumi.Input<boolean>;
            /**
             * Full uri, will override `appName`.
             */
            uri?: pulumi.Input<string>;
        }

        /**
         * Cross-Origin Resource Sharing property
         */
        export interface GatewayCorsPropertiesArgs {
            /**
             * Whether user credentials are supported on cross-site requests. Valid values: `true`, `false`.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * Allowed headers in cross-site requests. The special value `*` allows actual requests to send any header.
             */
            allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed HTTP methods on cross-site requests. The special value `*` allows all methods. If not set, `GET` and `HEAD` are allowed by default.
             */
            allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed origin patterns to make cross-site requests.
             */
            allowedOriginPatterns?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed origins to make cross-site requests. The special value `*` allows all domains.
             */
            allowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * HTTP response headers to expose for cross-site requests.
             */
            exposedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * How long, in seconds, the response from a pre-flight request can be cached by clients.
             */
            maxAge?: pulumi.Input<number>;
        }

        /**
         * The properties of custom domain for Spring Cloud Gateway
         */
        export interface GatewayCustomDomainPropertiesArgs {
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * Spring Cloud Gateway properties payload
         */
        export interface GatewayPropertiesArgs {
            /**
             * Collection of addons for Spring Cloud Gateway
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * API metadata property for Spring Cloud Gateway
             */
            apiMetadataProperties?: pulumi.Input<v20230701preview.GatewayApiMetadataPropertiesArgs>;
            /**
             * Collection of APM type used in Spring Cloud Gateway
             */
            apmTypes?: pulumi.Input<pulumi.Input<string | enums.v20230701preview.ApmType>[]>;
            /**
             * Client-Certification Authentication.
             */
            clientAuth?: pulumi.Input<v20230701preview.GatewayPropertiesClientAuthArgs>;
            /**
             * Cross-Origin Resource Sharing property
             */
            corsProperties?: pulumi.Input<v20230701preview.GatewayCorsPropertiesArgs>;
            /**
             * Environment variables of Spring Cloud Gateway
             */
            environmentVariables?: pulumi.Input<v20230701preview.GatewayPropertiesEnvironmentVariablesArgs>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * Indicates whether the Spring Cloud Gateway exposes endpoint.
             */
            public?: pulumi.Input<boolean>;
            /**
             * The requested resource quantity for required CPU and Memory.
             */
            resourceRequests?: pulumi.Input<v20230701preview.GatewayResourceRequestsArgs>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230701preview.SsoPropertiesArgs>;
        }
        /**
         * gatewayPropertiesArgsProvideDefaults sets the appropriate defaults for GatewayPropertiesArgs
         */
        export function gatewayPropertiesArgsProvideDefaults(val: GatewayPropertiesArgs): GatewayPropertiesArgs {
            return {
                ...val,
                clientAuth: (val.clientAuth ? pulumi.output(val.clientAuth).apply(v20230701preview.gatewayPropertiesClientAuthArgsProvideDefaults) : undefined),
                httpsOnly: (val.httpsOnly) ?? false,
                public: (val.public) ?? false,
                resourceRequests: (val.resourceRequests ? pulumi.output(val.resourceRequests).apply(v20230701preview.gatewayResourceRequestsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Client-Certification Authentication.
         */
        export interface GatewayPropertiesClientAuthArgs {
            /**
             * Whether to enable certificate verification or not
             */
            certificateVerification?: pulumi.Input<string | enums.v20230701preview.GatewayCertificateVerification>;
            /**
             * Collection of certificate resource Ids in Azure Spring Apps.
             */
            certificates?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * gatewayPropertiesClientAuthArgsProvideDefaults sets the appropriate defaults for GatewayPropertiesClientAuthArgs
         */
        export function gatewayPropertiesClientAuthArgsProvideDefaults(val: GatewayPropertiesClientAuthArgs): GatewayPropertiesClientAuthArgs {
            return {
                ...val,
                certificateVerification: (val.certificateVerification) ?? "Disabled",
            };
        }

        /**
         * Environment variables of Spring Cloud Gateway
         */
        export interface GatewayPropertiesEnvironmentVariablesArgs {
            /**
             * Non-sensitive properties
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Resource request payload of Spring Cloud Gateway.
         */
        export interface GatewayResourceRequestsArgs {
            /**
             * Cpu allocated to each Spring Cloud Gateway instance.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Memory allocated to each Spring Cloud Gateway instance.
             */
            memory?: pulumi.Input<string>;
        }
        /**
         * gatewayResourceRequestsArgsProvideDefaults sets the appropriate defaults for GatewayResourceRequestsArgs
         */
        export function gatewayResourceRequestsArgsProvideDefaults(val: GatewayResourceRequestsArgs): GatewayResourceRequestsArgs {
            return {
                ...val,
                cpu: (val.cpu) ?? "1",
                memory: (val.memory) ?? "2Gi",
            };
        }

        /**
         * OpenAPI properties of Spring Cloud Gateway route config.
         */
        export interface GatewayRouteConfigOpenApiPropertiesArgs {
            /**
             * The URI of OpenAPI specification.
             */
            uri?: pulumi.Input<string>;
        }

        /**
         * API route config of the Spring Cloud Gateway
         */
        export interface GatewayRouteConfigPropertiesArgs {
            /**
             * The resource Id of the Azure Spring Apps app, required unless route defines `uri`.
             */
            appResourceId?: pulumi.Input<string>;
            /**
             * To modify the request before sending it to the target endpoint, or the received response in app level.
             */
            filters?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OpenAPI properties of Spring Cloud Gateway route config.
             */
            openApi?: pulumi.Input<v20230701preview.GatewayRouteConfigOpenApiPropertiesArgs>;
            /**
             * A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
             */
            predicates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Protocol of routed Azure Spring Apps applications.
             */
            protocol?: pulumi.Input<string | enums.v20230701preview.GatewayRouteConfigProtocol>;
            /**
             * Array of API routes, each route contains properties such as `title`, `uri`, `ssoEnabled`, `predicates`, `filters`.
             */
            routes?: pulumi.Input<pulumi.Input<v20230701preview.GatewayApiRouteArgs>[]>;
            /**
             * Enable Single Sign-On in app level.
             */
            ssoEnabled?: pulumi.Input<boolean>;
        }
        /**
         * gatewayRouteConfigPropertiesArgsProvideDefaults sets the appropriate defaults for GatewayRouteConfigPropertiesArgs
         */
        export function gatewayRouteConfigPropertiesArgsProvideDefaults(val: GatewayRouteConfigPropertiesArgs): GatewayRouteConfigPropertiesArgs {
            return {
                ...val,
                protocol: (val.protocol) ?? "HTTP",
            };
        }

        /**
         * Git repository property payload for config server
         */
        export interface GitPatternRepositoryArgs {
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label?: pulumi.Input<string>;
            /**
             * Name of the repository
             */
            name: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Collection of pattern of the repository
             */
            pattern?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * HTTPGetAction describes an action based on HTTP Get requests.
         */
        export interface HTTPGetActionArgs {
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Scheme to use for connecting to the host. Defaults to HTTP.
             *
             * Possible enum values:
             *  - `"HTTP"` means that the scheme used will be http://
             *  - `"HTTPS"` means that the scheme used will be https://
             */
            scheme?: pulumi.Input<string | enums.v20230701preview.HTTPSchemeType>;
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'HTTPGetAction'.
             */
            type: pulumi.Input<"HTTPGetAction">;
        }

        /**
         * Azure Spring Apps App Instance Http scaling rule.
         */
        export interface HttpScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230701preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe http scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Credential of the image registry
         */
        export interface ImageRegistryCredentialArgs {
            /**
             * The password of the image registry credential
             */
            password?: pulumi.Input<string>;
            /**
             * The username of the image registry credential
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Ingress configuration payload for Azure Spring Apps resource.
         */
        export interface IngressConfigArgs {
            /**
             * Ingress read time out in seconds.
             */
            readTimeoutInSeconds?: pulumi.Input<number>;
        }

        /**
         * App ingress settings payload.
         */
        export interface IngressSettingsArgs {
            /**
             * How ingress should communicate with this app backend service.
             */
            backendProtocol?: pulumi.Input<string | enums.v20230701preview.BackendProtocol>;
            /**
             * Client-Certification Authentication.
             */
            clientAuth?: pulumi.Input<v20230701preview.IngressSettingsClientAuthArgs>;
            /**
             * Ingress read time out in seconds.
             */
            readTimeoutInSeconds?: pulumi.Input<number>;
            /**
             * Ingress send time out in seconds.
             */
            sendTimeoutInSeconds?: pulumi.Input<number>;
            /**
             * Type of the affinity, set this to Cookie to enable session affinity.
             */
            sessionAffinity?: pulumi.Input<string | enums.v20230701preview.SessionAffinity>;
            /**
             * Time in seconds until the cookie expires.
             */
            sessionCookieMaxAge?: pulumi.Input<number>;
        }

        /**
         * Client-Certification Authentication.
         */
        export interface IngressSettingsClientAuthArgs {
            /**
             * Collection of certificate resource id.
             */
            certificates?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Uploaded Jar binary for a deployment
         */
        export interface JarUploadedUserSourceInfoArgs {
            /**
             * JVM parameter
             */
            jvmOptions?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the Jar file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'Jar'.
             */
            type: pulumi.Input<"Jar">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Properties of certificate imported from key vault.
         */
        export interface KeyVaultCertificatePropertiesArgs {
            /**
             * The certificate version of key vault.
             */
            certVersion?: pulumi.Input<string>;
            /**
             * Optional. If set to true, it will not import private key from key vault.
             */
            excludePrivateKey?: pulumi.Input<boolean>;
            /**
             * The certificate name of key vault.
             */
            keyVaultCertName: pulumi.Input<string>;
            /**
             * The type of the certificate source.
             * Expected value is 'KeyVaultCertificate'.
             */
            type: pulumi.Input<"KeyVaultCertificate">;
            /**
             * The vault uri of user key vault.
             */
            vaultUri: pulumi.Input<string>;
        }
        /**
         * keyVaultCertificatePropertiesArgsProvideDefaults sets the appropriate defaults for KeyVaultCertificatePropertiesArgs
         */
        export function keyVaultCertificatePropertiesArgsProvideDefaults(val: KeyVaultCertificatePropertiesArgs): KeyVaultCertificatePropertiesArgs {
            return {
                ...val,
                excludePrivateKey: (val.excludePrivateKey) ?? false,
            };
        }

        /**
         * Loaded certificate payload
         */
        export interface LoadedCertificateArgs {
            /**
             * Indicate whether the certificate will be loaded into default trust store, only work for Java runtime.
             */
            loadTrustStore?: pulumi.Input<boolean>;
            /**
             * Resource Id of loaded certificate
             */
            resourceId: pulumi.Input<string>;
        }
        /**
         * loadedCertificateArgsProvideDefaults sets the appropriate defaults for LoadedCertificateArgs
         */
        export function loadedCertificateArgsProvideDefaults(val: LoadedCertificateArgs): LoadedCertificateArgs {
            return {
                ...val,
                loadTrustStore: (val.loadTrustStore) ?? false,
            };
        }

        /**
         * Managed identity properties retrieved from ARM request headers.
         */
        export interface ManagedIdentityPropertiesArgs {
            /**
             * Principal Id of system-assigned managed identity.
             */
            principalId?: pulumi.Input<string>;
            /**
             * Tenant Id of system-assigned managed identity.
             */
            tenantId?: pulumi.Input<string>;
            /**
             * Type of the managed identity
             */
            type?: pulumi.Input<string | enums.v20230701preview.ManagedIdentityType>;
            /**
             * Properties of user-assigned managed identities
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Purchasing 3rd Party product for one Azure Spring Apps instance
         */
        export interface MarketplaceResourceArgs {
            /**
             * The plan id of the 3rd Party Artifact that is being procured.
             */
            plan?: pulumi.Input<string>;
            /**
             * The 3rd Party artifact that is being procured.
             */
            product?: pulumi.Input<string>;
            /**
             * The publisher id of the 3rd Party Artifact that is being bought.
             */
            publisher?: pulumi.Input<string>;
        }

        /**
         * Monitoring Setting properties payload
         */
        export interface MonitoringSettingPropertiesArgs {
            /**
             * Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings
             */
            appInsightsInstrumentationKey?: pulumi.Input<string>;
            /**
             * Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0]
             */
            appInsightsSamplingRate?: pulumi.Input<number>;
            /**
             * Error when apply Monitoring Setting changes.
             */
            error?: pulumi.Input<v20230701preview.ErrorArgs>;
            /**
             * Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not
             */
            traceEnabled?: pulumi.Input<boolean>;
        }

        /**
         * Uploaded Jar binary for a deployment
         */
        export interface NetCoreZipUploadedUserSourceInfoArgs {
            /**
             * The path to the .NET executable relative to zip root
             */
            netCoreMainEntryPath?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the .Net file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'NetCoreZip'.
             */
            type: pulumi.Input<"NetCoreZip">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Service network profile payload
         */
        export interface NetworkProfileArgs {
            /**
             * Name of the resource group containing network resources for customer apps in Azure Spring Apps
             */
            appNetworkResourceGroup?: pulumi.Input<string>;
            /**
             * Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps
             */
            appSubnetId?: pulumi.Input<string>;
            /**
             * Ingress configuration payload for Azure Spring Apps resource.
             */
            ingressConfig?: pulumi.Input<v20230701preview.IngressConfigArgs>;
            /**
             * The egress traffic type of Azure Spring Apps VNet instances.
             */
            outboundType?: pulumi.Input<string>;
            /**
             * Azure Spring Apps service reserved CIDR
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * Name of the resource group containing network resources of Azure Spring Apps Service Runtime
             */
            serviceRuntimeNetworkResourceGroup?: pulumi.Input<string>;
            /**
             * Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime
             */
            serviceRuntimeSubnetId?: pulumi.Input<string>;
        }

        /**
         * Persistent disk payload
         */
        export interface PersistentDiskArgs {
            /**
             * Mount path of the persistent disk
             */
            mountPath?: pulumi.Input<string>;
            /**
             * Size of the persistent disk in GB
             */
            sizeInGB?: pulumi.Input<number>;
        }

        /**
         * Probe describes a health check to be performed against an App Instance to determine whether it is alive or ready to receive traffic.
         */
        export interface ProbeArgs {
            /**
             * Indicate whether the probe is disabled.
             */
            disableProbe: pulumi.Input<boolean>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            /**
             * Number of seconds after the App Instance has started before probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * The action of the probe.
             */
            probeAction?: pulumi.Input<v20230701preview.ExecActionArgs | v20230701preview.HTTPGetActionArgs | v20230701preview.TCPSocketActionArgs>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out. Minimum value is 1.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * probeArgsProvideDefaults sets the appropriate defaults for ProbeArgs
         */
        export function probeArgsProvideDefaults(val: ProbeArgs): ProbeArgs {
            return {
                ...val,
                disableProbe: (val.disableProbe) ?? false,
            };
        }

        /**
         * Azure Spring Apps App Instance Azure Queue based scaling rule.
         */
        export interface QueueScaleRuleArgs {
            /**
             * Authentication secrets for the queue scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230701preview.ScaleRuleAuthArgs>[]>;
            /**
             * Queue length.
             */
            queueLength?: pulumi.Input<number>;
            /**
             * Queue name.
             */
            queueName?: pulumi.Input<string>;
        }

        /**
         * Deployment resource request payload
         */
        export interface ResourceRequestsArgs {
            /**
             * Required CPU. 1 core can be represented by 1 or 1000m. This should be 500m or 1 for Basic tier, and {500m, 1, 2, 3, 4} for Standard tier.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Required memory. 1 GB can be represented by 1Gi or 1024Mi. This should be {512Mi, 1Gi, 2Gi} for Basic tier, and {512Mi, 1Gi, 2Gi, ..., 8Gi} for Standard tier.
             */
            memory?: pulumi.Input<string>;
        }

        /**
         * Azure Spring Apps scaling configurations.
         */
        export interface ScaleArgs {
            /**
             * Optional. Maximum number of container replicas. Defaults to 10 if not set.
             */
            maxReplicas?: pulumi.Input<number>;
            /**
             * Optional. Minimum number of container replicas.
             */
            minReplicas?: pulumi.Input<number>;
            /**
             * Scaling rules.
             */
            rules?: pulumi.Input<pulumi.Input<v20230701preview.ScaleRuleArgs>[]>;
        }
        /**
         * scaleArgsProvideDefaults sets the appropriate defaults for ScaleArgs
         */
        export function scaleArgsProvideDefaults(val: ScaleArgs): ScaleArgs {
            return {
                ...val,
                maxReplicas: (val.maxReplicas) ?? 10,
            };
        }

        /**
         * Azure Spring Apps App Instance scaling rule.
         */
        export interface ScaleRuleArgs {
            /**
             * Azure Queue based scaling.
             */
            azureQueue?: pulumi.Input<v20230701preview.QueueScaleRuleArgs>;
            /**
             * Custom scale rule.
             */
            custom?: pulumi.Input<v20230701preview.CustomScaleRuleArgs>;
            /**
             * HTTP requests based scaling.
             */
            http?: pulumi.Input<v20230701preview.HttpScaleRuleArgs>;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Tcp requests based scaling.
             */
            tcp?: pulumi.Input<v20230701preview.TcpScaleRuleArgs>;
        }

        /**
         * Auth Secrets for Azure Spring Apps App Instance Scale Rule
         */
        export interface ScaleRuleAuthArgs {
            /**
             * Name of the Azure Spring Apps App Instance secret from which to pull the auth params.
             */
            secretRef?: pulumi.Input<string>;
            /**
             * Trigger Parameter that uses the secret
             */
            triggerParameter?: pulumi.Input<string>;
        }

        /**
         * Secret definition.
         */
        export interface SecretArgs {
            /**
             * Secret Name.
             */
            name?: pulumi.Input<string>;
            /**
             * Secret Value.
             */
            value?: pulumi.Input<string>;
        }

        /**
         * Additional Service settings in vnet injection instance
         */
        export interface ServiceVNetAddonsArgs {
            /**
             * Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet.
             */
            dataPlanePublicEndpoint?: pulumi.Input<boolean>;
            /**
             * Indicates whether the log stream in vnet injection instance could be accessed from internet.
             */
            logStreamPublicEndpoint?: pulumi.Input<boolean>;
        }
        /**
         * serviceVNetAddonsArgsProvideDefaults sets the appropriate defaults for ServiceVNetAddonsArgs
         */
        export function serviceVNetAddonsArgsProvideDefaults(val: ServiceVNetAddonsArgs): ServiceVNetAddonsArgs {
            return {
                ...val,
                dataPlanePublicEndpoint: (val.dataPlanePublicEndpoint) ?? false,
                logStreamPublicEndpoint: (val.logStreamPublicEndpoint) ?? false,
            };
        }

        /**
         * Sku of Azure Spring Apps
         */
        export interface SkuArgs {
            /**
             * Current capacity of the target resource
             */
            capacity?: pulumi.Input<number>;
            /**
             * Name of the Sku
             */
            name?: pulumi.Input<string>;
            /**
             * Tier of the Sku
             */
            tier?: pulumi.Input<string>;
        }
        /**
         * skuArgsProvideDefaults sets the appropriate defaults for SkuArgs
         */
        export function skuArgsProvideDefaults(val: SkuArgs): SkuArgs {
            return {
                ...val,
                name: (val.name) ?? "S0",
                tier: (val.tier) ?? "Standard",
            };
        }

        /**
         * Uploaded Java source code binary for a deployment
         */
        export interface SourceUploadedUserSourceInfoArgs {
            /**
             * Selector for the artifact to be used for the deployment for multi-module projects. This should be
             * the relative path to the target module/project.
             */
            artifactSelector?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the source file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'Source'.
             */
            type: pulumi.Input<"Source">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Single sign-on related configuration
         */
        export interface SsoPropertiesArgs {
            /**
             * The public identifier for the application
             */
            clientId?: pulumi.Input<string>;
            /**
             * The secret known only to the application and the authorization server
             */
            clientSecret?: pulumi.Input<string>;
            /**
             * The URI of Issuer Identifier
             */
            issuerUri?: pulumi.Input<string>;
            /**
             * It defines the specific actions applications can be allowed to do on a user's behalf
             */
            scope?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * KPack ClusterStack properties payload
         */
        export interface StackPropertiesArgs {
            /**
             * Id of the ClusterStack.
             */
            id?: pulumi.Input<string>;
            /**
             * Version of the ClusterStack
             */
            version?: pulumi.Input<string>;
        }

        /**
         * storage resource of type Azure Storage Account.
         */
        export interface StorageAccountArgs {
            /**
             * The account key of the Azure Storage Account.
             */
            accountKey: pulumi.Input<string>;
            /**
             * The account name of the Azure Storage Account.
             */
            accountName: pulumi.Input<string>;
            /**
             * The type of the storage.
             * Expected value is 'StorageAccount'.
             */
            storageType: pulumi.Input<"StorageAccount">;
        }

        /**
         * TCPSocketAction describes an action based on opening a socket
         */
        export interface TCPSocketActionArgs {
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'TCPSocketAction'.
             */
            type: pulumi.Input<"TCPSocketAction">;
        }

        /**
         * Azure Spring Apps App Instance Tcp scaling rule.
         */
        export interface TcpScaleRuleArgs {
            /**
             * Authentication secrets for the tcp scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230701preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe tcp scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Temporary disk payload
         */
        export interface TemporaryDiskArgs {
            /**
             * Mount path of the temporary disk
             */
            mountPath?: pulumi.Input<string>;
            /**
             * Size of the temporary disk in GB
             */
            sizeInGB?: pulumi.Input<number>;
        }
        /**
         * temporaryDiskArgsProvideDefaults sets the appropriate defaults for TemporaryDiskArgs
         */
        export function temporaryDiskArgsProvideDefaults(val: TemporaryDiskArgs): TemporaryDiskArgs {
            return {
                ...val,
                mountPath: (val.mountPath) ?? "/tmp",
            };
        }

        /**
         * Source with uploaded location
         */
        export interface UploadedUserSourceInfoArgs {
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'UploadedUserSourceInfo'.
             */
            type: pulumi.Input<"UploadedUserSourceInfo">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Weekly planned maintenance
         */
        export interface WeeklyMaintenanceScheduleConfigurationArgs {
            /**
             * The day to run the maintenance job
             */
            day: pulumi.Input<string | enums.v20230701preview.WeekDay>;
            /**
             * The frequency to run the maintenance job
             * Expected value is 'Weekly'.
             */
            frequency: pulumi.Input<"Weekly">;
            /**
             * The hour to run the maintenance job
             */
            hour: pulumi.Input<number>;
        }

    }

    export namespace v20230901preview {
        /**
         * Auth setting for basic auth.
         */
        export interface AcceleratorBasicAuthSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'BasicAuth'.
             */
            authType: pulumi.Input<"BasicAuth">;
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username: pulumi.Input<string>;
        }

        export interface AcceleratorGitRepositoryArgs {
            /**
             * Properties of the auth setting payload.
             */
            authSetting: pulumi.Input<v20230901preview.AcceleratorBasicAuthSettingArgs | v20230901preview.AcceleratorPublicSettingArgs | v20230901preview.AcceleratorSshSettingArgs>;
            /**
             * Git repository branch to be used.
             */
            branch?: pulumi.Input<string>;
            /**
             * Git repository commit to be used.
             */
            commit?: pulumi.Input<string>;
            /**
             * Git repository tag to be used.
             */
            gitTag?: pulumi.Input<string>;
            /**
             * Interval for checking for updates to Git or image repository.
             */
            intervalInSeconds?: pulumi.Input<number>;
            /**
             * Folder path inside the git repository to consider as the root of the accelerator or fragment.
             */
            subPath?: pulumi.Input<string>;
            /**
             * Git repository URL for the accelerator.
             */
            url: pulumi.Input<string>;
        }

        /**
         * Auth setting for public url.
         */
        export interface AcceleratorPublicSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'Public'.
             */
            authType: pulumi.Input<"Public">;
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
        }

        /**
         * Auth setting for SSH auth.
         */
        export interface AcceleratorSshSettingArgs {
            /**
             * The type of the auth setting.
             * Expected value is 'SSH'.
             */
            authType: pulumi.Input<"SSH">;
            /**
             * Public SSH Key of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SSH Key algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Private SSH Key algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
        }

        /**
         * The properties of custom domain for API portal
         */
        export interface ApiPortalCustomDomainPropertiesArgs {
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * API portal properties payload
         */
        export interface ApiPortalPropertiesArgs {
            /**
             * The array of resource Ids of gateway to integrate with API portal.
             */
            gatewayIds?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * Indicates whether the API portal exposes endpoint.
             */
            public?: pulumi.Input<boolean>;
            /**
             * Collection of OpenAPI source URL locations.
             */
            sourceUrls?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230901preview.SsoPropertiesArgs>;
        }
        /**
         * apiPortalPropertiesArgsProvideDefaults sets the appropriate defaults for ApiPortalPropertiesArgs
         */
        export function apiPortalPropertiesArgsProvideDefaults(val: ApiPortalPropertiesArgs): ApiPortalPropertiesArgs {
            return {
                ...val,
                httpsOnly: (val.httpsOnly) ?? false,
                public: (val.public) ?? false,
            };
        }

        /**
         * Properties of an APM
         */
        export interface ApmPropertiesArgs {
            /**
             * Non-sensitive properties for the APM
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties for the APM
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * APM Type
             */
            type: pulumi.Input<string>;
        }

        /**
         * A reference to the APM
         */
        export interface ApmReferenceArgs {
            /**
             * Resource Id of the APM
             */
            resourceId: pulumi.Input<string>;
        }

        /**
         * App resource properties payload
         */
        export interface AppResourcePropertiesArgs {
            /**
             * Collection of addons
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * List of custom persistent disks
             */
            customPersistentDisks?: pulumi.Input<pulumi.Input<v20230901preview.CustomPersistentDiskResourceArgs>[]>;
            /**
             * Indicate if end to end TLS is enabled.
             */
            enableEndToEndTLS?: pulumi.Input<boolean>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * App ingress settings payload.
             */
            ingressSettings?: pulumi.Input<v20230901preview.IngressSettingsArgs>;
            /**
             * Collection of loaded certificates
             */
            loadedCertificates?: pulumi.Input<pulumi.Input<v20230901preview.LoadedCertificateArgs>[]>;
            /**
             * Persistent disk settings
             */
            persistentDisk?: pulumi.Input<v20230901preview.PersistentDiskArgs>;
            /**
             * Indicates whether the App exposes public endpoint
             */
            public?: pulumi.Input<boolean>;
            /**
             * Collection of auth secrets
             */
            secrets?: pulumi.Input<pulumi.Input<v20230901preview.SecretArgs>[]>;
            /**
             * Temporary disk settings
             */
            temporaryDisk?: pulumi.Input<v20230901preview.TemporaryDiskArgs>;
            /**
             * Additional App settings in vnet injection instance
             */
            vnetAddons?: pulumi.Input<v20230901preview.AppVNetAddonsArgs>;
            /**
             * The workload profile used for this app. Supported for Consumption + Dedicated plan.
             */
            workloadProfileName?: pulumi.Input<string>;
        }
        /**
         * appResourcePropertiesArgsProvideDefaults sets the appropriate defaults for AppResourcePropertiesArgs
         */
        export function appResourcePropertiesArgsProvideDefaults(val: AppResourcePropertiesArgs): AppResourcePropertiesArgs {
            return {
                ...val,
                enableEndToEndTLS: (val.enableEndToEndTLS) ?? false,
                httpsOnly: (val.httpsOnly) ?? false,
                temporaryDisk: (val.temporaryDisk ? pulumi.output(val.temporaryDisk).apply(v20230901preview.temporaryDiskArgsProvideDefaults) : undefined),
                vnetAddons: (val.vnetAddons ? pulumi.output(val.vnetAddons).apply(v20230901preview.appVNetAddonsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Additional App settings in vnet injection instance
         */
        export interface AppVNetAddonsArgs {
            /**
             * Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet.
             */
            publicEndpoint?: pulumi.Input<boolean>;
        }
        /**
         * appVNetAddonsArgsProvideDefaults sets the appropriate defaults for AppVNetAddonsArgs
         */
        export function appVNetAddonsArgsProvideDefaults(val: AppVNetAddonsArgs): AppVNetAddonsArgs {
            return {
                ...val,
                publicEndpoint: (val.publicEndpoint) ?? false,
            };
        }

        /**
         * The properties of the Azure File volume. Azure File shares are mounted as volumes.
         */
        export interface AzureFileVolumeArgs {
            /**
             * If set to true, it will create and mount a dedicated directory for every individual app instance.
             */
            enableSubPath?: pulumi.Input<boolean>;
            /**
             * These are the mount options for a persistent disk.
             */
            mountOptions?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The mount path of the persistent disk.
             */
            mountPath: pulumi.Input<string>;
            /**
             * Indicates whether the persistent disk is a readOnly one.
             */
            readOnly?: pulumi.Input<boolean>;
            /**
             * The share name of the Azure File share.
             */
            shareName?: pulumi.Input<string>;
            /**
             * The type of the underlying resource to mount as a persistent disk.
             * Expected value is 'AzureFileVolume'.
             */
            type: pulumi.Input<"AzureFileVolume">;
        }
        /**
         * azureFileVolumeArgsProvideDefaults sets the appropriate defaults for AzureFileVolumeArgs
         */
        export function azureFileVolumeArgsProvideDefaults(val: AzureFileVolumeArgs): AzureFileVolumeArgs {
            return {
                ...val,
                enableSubPath: (val.enableSubPath) ?? false,
            };
        }

        /**
         * Binding resource properties payload
         */
        export interface BindingResourcePropertiesArgs {
            /**
             * Binding parameters of the Binding resource
             */
            bindingParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * The key of the bound resource
             */
            key?: pulumi.Input<string>;
            /**
             * The Azure resource id of the bound resource
             */
            resourceId?: pulumi.Input<string>;
        }

        /**
         * Build resource properties payload
         */
        export interface BuildPropertiesArgs {
            /**
             * The resource id of agent pool
             */
            agentPool?: pulumi.Input<string>;
            /**
             * The APMs for this build
             */
            apms?: pulumi.Input<pulumi.Input<v20230901preview.ApmReferenceArgs>[]>;
            /**
             * The resource id of builder to build the source code
             */
            builder?: pulumi.Input<string>;
            /**
             * The CA Certificates for this build
             */
            certificates?: pulumi.Input<pulumi.Input<v20230901preview.CertificateReferenceArgs>[]>;
            /**
             * The environment variables for this build
             */
            env?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * The relative path of source code
             */
            relativePath?: pulumi.Input<string>;
            /**
             * The customized build resource for this build
             */
            resourceRequests?: pulumi.Input<v20230901preview.BuildResourceRequestsArgs>;
        }
        /**
         * buildPropertiesArgsProvideDefaults sets the appropriate defaults for BuildPropertiesArgs
         */
        export function buildPropertiesArgsProvideDefaults(val: BuildPropertiesArgs): BuildPropertiesArgs {
            return {
                ...val,
                resourceRequests: (val.resourceRequests ? pulumi.output(val.resourceRequests).apply(v20230901preview.buildResourceRequestsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Resource request payload of Build Resource.
         */
        export interface BuildResourceRequestsArgs {
            /**
             * Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m. 
             * The default value is 1, this should not exceed build service agent pool cpu size.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi. 
             * The default value is 2Gi, this should not exceed build service agent pool memory size.
             */
            memory?: pulumi.Input<string>;
        }
        /**
         * buildResourceRequestsArgsProvideDefaults sets the appropriate defaults for BuildResourceRequestsArgs
         */
        export function buildResourceRequestsArgsProvideDefaults(val: BuildResourceRequestsArgs): BuildResourceRequestsArgs {
            return {
                ...val,
                cpu: (val.cpu) ?? "1",
                memory: (val.memory) ?? "2Gi",
            };
        }

        /**
         * Reference to a build result
         */
        export interface BuildResultUserSourceInfoArgs {
            /**
             * Resource id of an existing succeeded build result under the same Spring instance.
             */
            buildResultId?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'BuildResult'.
             */
            type: pulumi.Input<"BuildResult">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Build service agent pool properties
         */
        export interface BuildServiceAgentPoolPropertiesArgs {
            /**
             * build service agent pool size properties
             */
            poolSize?: pulumi.Input<v20230901preview.BuildServiceAgentPoolSizePropertiesArgs>;
        }

        /**
         * Build service agent pool size properties
         */
        export interface BuildServiceAgentPoolSizePropertiesArgs {
            /**
             * The name of build service agent pool size
             */
            name?: pulumi.Input<string>;
        }

        /**
         * KPack Builder properties payload
         */
        export interface BuilderPropertiesArgs {
            /**
             * Builder buildpack groups.
             */
            buildpackGroups?: pulumi.Input<pulumi.Input<v20230901preview.BuildpacksGroupPropertiesArgs>[]>;
            /**
             * Builder cluster stack property.
             */
            stack?: pulumi.Input<v20230901preview.StackPropertiesArgs>;
        }

        /**
         * Buildpack Binding Launch Properties
         */
        export interface BuildpackBindingLaunchPropertiesArgs {
            /**
             * Non-sensitive properties for launchProperties
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties for launchProperties
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Properties of a buildpack binding
         */
        export interface BuildpackBindingPropertiesArgs {
            /**
             * Buildpack Binding Type
             */
            bindingType?: pulumi.Input<string | enums.v20230901preview.BindingType>;
            /**
             * The object describes the buildpack binding launch properties
             */
            launchProperties?: pulumi.Input<v20230901preview.BuildpackBindingLaunchPropertiesArgs>;
        }

        /**
         * Buildpack properties payload
         */
        export interface BuildpackPropertiesArgs {
            /**
             * Id of the buildpack
             */
            id?: pulumi.Input<string>;
        }

        /**
         * Buildpack group properties of the Builder
         */
        export interface BuildpacksGroupPropertiesArgs {
            /**
             * Buildpacks in the buildpack group
             */
            buildpacks?: pulumi.Input<pulumi.Input<v20230901preview.BuildpackPropertiesArgs>[]>;
            /**
             * Buildpack group name
             */
            name?: pulumi.Input<string>;
        }

        /**
         * A reference to the certificate
         */
        export interface CertificateReferenceArgs {
            /**
             * Resource Id of the certificate
             */
            resourceId: pulumi.Input<string>;
        }

        /**
         * Service properties payload
         */
        export interface ClusterResourcePropertiesArgs {
            /**
             * The name of the resource group that contains the infrastructure resources
             */
            infraResourceGroup?: pulumi.Input<string>;
            /**
             * Additional Service settings for planned maintenance
             */
            maintenanceScheduleConfiguration?: pulumi.Input<v20230901preview.WeeklyMaintenanceScheduleConfigurationArgs>;
            /**
             * The resource Id of the Managed Environment that the Spring Apps instance builds on
             */
            managedEnvironmentId?: pulumi.Input<string>;
            /**
             * Purchasing 3rd party product of the Service resource.
             */
            marketplaceResource?: pulumi.Input<v20230901preview.MarketplaceResourceArgs>;
            /**
             * Network profile of the Service
             */
            networkProfile?: pulumi.Input<v20230901preview.NetworkProfileArgs>;
            /**
             * Additional Service settings in vnet injection instance
             */
            vnetAddons?: pulumi.Input<v20230901preview.ServiceVNetAddonsArgs>;
            zoneRedundant?: pulumi.Input<boolean>;
        }
        /**
         * clusterResourcePropertiesArgsProvideDefaults sets the appropriate defaults for ClusterResourcePropertiesArgs
         */
        export function clusterResourcePropertiesArgsProvideDefaults(val: ClusterResourcePropertiesArgs): ClusterResourcePropertiesArgs {
            return {
                ...val,
                vnetAddons: (val.vnetAddons ? pulumi.output(val.vnetAddons).apply(v20230901preview.serviceVNetAddonsArgsProvideDefaults) : undefined),
                zoneRedundant: (val.zoneRedundant) ?? false,
            };
        }

        /**
         * Property of git.
         */
        export interface ConfigServerGitPropertyArgs {
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label?: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Repositories of git.
             */
            repositories?: pulumi.Input<pulumi.Input<v20230901preview.GitPatternRepositoryArgs>[]>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Config server git properties payload
         */
        export interface ConfigServerPropertiesArgs {
            /**
             * Settings of config server.
             */
            configServer?: pulumi.Input<v20230901preview.ConfigServerSettingsArgs>;
            /**
             * Enabled state of the config server. This is only used in Consumption tier.
             */
            enabledState?: pulumi.Input<string | enums.v20230901preview.ConfigServerEnabledState>;
            /**
             * Error when apply config server settings.
             */
            error?: pulumi.Input<v20230901preview.ErrorArgs>;
        }

        /**
         * The settings of config server.
         */
        export interface ConfigServerSettingsArgs {
            /**
             * Property of git environment.
             */
            gitProperty?: pulumi.Input<v20230901preview.ConfigServerGitPropertyArgs>;
        }

        /**
         * Property of git environment.
         */
        export interface ConfigurationServiceGitPropertyArgs {
            /**
             * Repositories of Application Configuration Service git property.
             */
            repositories?: pulumi.Input<pulumi.Input<v20230901preview.ConfigurationServiceGitRepositoryArgs>[]>;
        }

        /**
         * Git repository property payload for Application Configuration Service
         */
        export interface ConfigurationServiceGitRepositoryArgs {
            /**
             * Resource Id of CA certificate for https URL of Git repository.
             */
            caCertResourceId?: pulumi.Input<string>;
            /**
             * Git libraries used to support various repository providers
             */
            gitImplementation?: pulumi.Input<string | enums.v20230901preview.GitImplementation>;
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label: pulumi.Input<string>;
            /**
             * Name of the repository
             */
            name: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Collection of patterns of the repository
             */
            patterns: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Application Configuration Service properties payload
         */
        export interface ConfigurationServicePropertiesArgs {
            /**
             * The generation of the Application Configuration Service.
             */
            generation?: pulumi.Input<string | enums.v20230901preview.ConfigurationServiceGeneration>;
            /**
             * The settings of Application Configuration Service.
             */
            settings?: pulumi.Input<v20230901preview.ConfigurationServiceSettingsArgs>;
        }
        /**
         * configurationServicePropertiesArgsProvideDefaults sets the appropriate defaults for ConfigurationServicePropertiesArgs
         */
        export function configurationServicePropertiesArgsProvideDefaults(val: ConfigurationServicePropertiesArgs): ConfigurationServicePropertiesArgs {
            return {
                ...val,
                generation: (val.generation) ?? "Gen1",
            };
        }

        /**
         * The settings of Application Configuration Service.
         */
        export interface ConfigurationServiceSettingsArgs {
            /**
             * Property of git environment.
             */
            gitProperty?: pulumi.Input<v20230901preview.ConfigurationServiceGitPropertyArgs>;
        }

        /**
         * Container liveness and readiness probe settings
         */
        export interface ContainerProbeSettingsArgs {
            /**
             * Indicates whether disable the liveness and readiness probe
             */
            disableProbe?: pulumi.Input<boolean>;
        }

        /**
         * The basic authentication properties for the container registry resource.
         */
        export interface ContainerRegistryBasicCredentialsArgs {
            /**
             * The password of the Container Registry.
             */
            password: pulumi.Input<string>;
            /**
             * The login server of the Container Registry.
             */
            server: pulumi.Input<string>;
            /**
             * The credential type of the container registry credentials.
             * Expected value is 'BasicAuth'.
             */
            type: pulumi.Input<"BasicAuth">;
            /**
             * The username of the Container Registry.
             */
            username: pulumi.Input<string>;
        }

        /**
         * Container registry resource payload.
         */
        export interface ContainerRegistryPropertiesArgs {
            /**
             * The credentials of the container registry resource.
             */
            credentials: pulumi.Input<v20230901preview.ContainerRegistryBasicCredentialsArgs>;
        }

        /**
         * Properties of certificate imported from key vault.
         */
        export interface ContentCertificatePropertiesArgs {
            /**
             * The content of uploaded certificate.
             */
            content?: pulumi.Input<string>;
            /**
             * The type of the certificate source.
             * Expected value is 'ContentCertificate'.
             */
            type: pulumi.Input<"ContentCertificate">;
        }

        /**
         * Custom container payload
         */
        export interface CustomContainerArgs {
            /**
             * Arguments to the entrypoint. The docker image's CMD is used if this is not provided.
             */
            args?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Container image of the custom container. This should be in the form of <repository>:<tag> without the server name of the registry
             */
            containerImage?: pulumi.Input<string>;
            /**
             * Credential of the image registry
             */
            imageRegistryCredential?: pulumi.Input<v20230901preview.ImageRegistryCredentialArgs>;
            /**
             * Language framework of the container image uploaded. Supported values: "springboot", "", null.
             */
            languageFramework?: pulumi.Input<string>;
            /**
             * The name of the registry that contains the container image
             */
            server?: pulumi.Input<string>;
        }

        /**
         * Custom container user source info
         */
        export interface CustomContainerUserSourceInfoArgs {
            /**
             * Custom container payload
             */
            customContainer?: pulumi.Input<v20230901preview.CustomContainerArgs>;
            /**
             * Type of the source uploaded
             * Expected value is 'Container'.
             */
            type: pulumi.Input<"Container">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Custom domain of app resource payload.
         */
        export interface CustomDomainPropertiesArgs {
            /**
             * The bound certificate name of domain.
             */
            certName?: pulumi.Input<string>;
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * Custom persistent disk resource payload.
         */
        export interface CustomPersistentDiskResourceArgs {
            /**
             * Properties of the custom persistent disk resource payload.
             */
            customPersistentDiskProperties?: pulumi.Input<v20230901preview.AzureFileVolumeArgs>;
            /**
             * The resource id of Azure Spring Apps Storage resource.
             */
            storageId: pulumi.Input<string>;
        }
        /**
         * customPersistentDiskResourceArgsProvideDefaults sets the appropriate defaults for CustomPersistentDiskResourceArgs
         */
        export function customPersistentDiskResourceArgsProvideDefaults(val: CustomPersistentDiskResourceArgs): CustomPersistentDiskResourceArgs {
            return {
                ...val,
                customPersistentDiskProperties: (val.customPersistentDiskProperties ? pulumi.output(val.customPersistentDiskProperties).apply(v20230901preview.azureFileVolumeArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Azure Spring Apps App Instance Custom scaling rule.
         */
        export interface CustomScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230901preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe custom scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Type of the custom scale rule
             * eg: azure-servicebus, redis etc.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Customized accelerator properties payload
         */
        export interface CustomizedAcceleratorPropertiesArgs {
            acceleratorTags?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Type of the customized accelerator.
             */
            acceleratorType?: pulumi.Input<string | enums.v20230901preview.CustomizedAcceleratorType>;
            description?: pulumi.Input<string>;
            displayName?: pulumi.Input<string>;
            gitRepository: pulumi.Input<v20230901preview.AcceleratorGitRepositoryArgs>;
            iconUrl?: pulumi.Input<string>;
        }

        /**
         * Deployment resource properties payload
         */
        export interface DeploymentResourcePropertiesArgs {
            /**
             * Indicates whether the Deployment is active
             */
            active?: pulumi.Input<boolean>;
            /**
             * Deployment settings of the Deployment
             */
            deploymentSettings?: pulumi.Input<v20230901preview.DeploymentSettingsArgs>;
            /**
             * Uploaded source information of the deployment.
             */
            source?: pulumi.Input<v20230901preview.BuildResultUserSourceInfoArgs | v20230901preview.CustomContainerUserSourceInfoArgs | v20230901preview.JarUploadedUserSourceInfoArgs | v20230901preview.NetCoreZipUploadedUserSourceInfoArgs | v20230901preview.SourceUploadedUserSourceInfoArgs | v20230901preview.UploadedUserSourceInfoArgs | v20230901preview.WarUploadedUserSourceInfoArgs>;
        }
        /**
         * deploymentResourcePropertiesArgsProvideDefaults sets the appropriate defaults for DeploymentResourcePropertiesArgs
         */
        export function deploymentResourcePropertiesArgsProvideDefaults(val: DeploymentResourcePropertiesArgs): DeploymentResourcePropertiesArgs {
            return {
                ...val,
                deploymentSettings: (val.deploymentSettings ? pulumi.output(val.deploymentSettings).apply(v20230901preview.deploymentSettingsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Deployment settings payload
         */
        export interface DeploymentSettingsArgs {
            /**
             * Collection of addons
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * Collection of ApmReferences
             */
            apms?: pulumi.Input<pulumi.Input<v20230901preview.ApmReferenceArgs>[]>;
            /**
             * Container liveness and readiness probe settings
             */
            containerProbeSettings?: pulumi.Input<v20230901preview.ContainerProbeSettingsArgs>;
            /**
             * Collection of environment variables
             */
            environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Periodic probe of App Instance liveness. App Instance will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            livenessProbe?: pulumi.Input<v20230901preview.ProbeArgs>;
            /**
             * Periodic probe of App Instance service readiness. App Instance will be removed from service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            readinessProbe?: pulumi.Input<v20230901preview.ProbeArgs>;
            /**
             * The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later.
             */
            resourceRequests?: pulumi.Input<v20230901preview.ResourceRequestsArgs>;
            /**
             * Scaling properties for the Azure Spring Apps App Instance.
             */
            scale?: pulumi.Input<v20230901preview.ScaleArgs>;
            /**
             * StartupProbe indicates that the App Instance has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a App Instance's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            startupProbe?: pulumi.Input<v20230901preview.ProbeArgs>;
            /**
             * Optional duration in seconds the App Instance needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the App Instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 90 seconds.
             */
            terminationGracePeriodSeconds?: pulumi.Input<number>;
        }
        /**
         * deploymentSettingsArgsProvideDefaults sets the appropriate defaults for DeploymentSettingsArgs
         */
        export function deploymentSettingsArgsProvideDefaults(val: DeploymentSettingsArgs): DeploymentSettingsArgs {
            return {
                ...val,
                livenessProbe: (val.livenessProbe ? pulumi.output(val.livenessProbe).apply(v20230901preview.probeArgsProvideDefaults) : undefined),
                readinessProbe: (val.readinessProbe ? pulumi.output(val.readinessProbe).apply(v20230901preview.probeArgsProvideDefaults) : undefined),
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230901preview.scaleArgsProvideDefaults) : undefined),
                startupProbe: (val.startupProbe ? pulumi.output(val.startupProbe).apply(v20230901preview.probeArgsProvideDefaults) : undefined),
                terminationGracePeriodSeconds: (val.terminationGracePeriodSeconds) ?? 90,
            };
        }

        /**
         * Detail settings for Dev Tool Portal feature
         */
        export interface DevToolPortalFeatureDetailArgs {
            /**
             * State of the plugin
             */
            state?: pulumi.Input<string | enums.v20230901preview.DevToolPortalFeatureState>;
        }
        /**
         * devToolPortalFeatureDetailArgsProvideDefaults sets the appropriate defaults for DevToolPortalFeatureDetailArgs
         */
        export function devToolPortalFeatureDetailArgsProvideDefaults(val: DevToolPortalFeatureDetailArgs): DevToolPortalFeatureDetailArgs {
            return {
                ...val,
                state: (val.state) ?? "Enabled",
            };
        }

        /**
         * Settings for Dev Tool Portal
         */
        export interface DevToolPortalFeatureSettingsArgs {
            /**
             * Detail of Accelerator plugin
             */
            applicationAccelerator?: pulumi.Input<v20230901preview.DevToolPortalFeatureDetailArgs>;
            /**
             * Detail of App Live View plugin
             */
            applicationLiveView?: pulumi.Input<v20230901preview.DevToolPortalFeatureDetailArgs>;
        }
        /**
         * devToolPortalFeatureSettingsArgsProvideDefaults sets the appropriate defaults for DevToolPortalFeatureSettingsArgs
         */
        export function devToolPortalFeatureSettingsArgsProvideDefaults(val: DevToolPortalFeatureSettingsArgs): DevToolPortalFeatureSettingsArgs {
            return {
                ...val,
                applicationAccelerator: (val.applicationAccelerator ? pulumi.output(val.applicationAccelerator).apply(v20230901preview.devToolPortalFeatureDetailArgsProvideDefaults) : undefined),
                applicationLiveView: (val.applicationLiveView ? pulumi.output(val.applicationLiveView).apply(v20230901preview.devToolPortalFeatureDetailArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Dev Tool Portal properties payload
         */
        export interface DevToolPortalPropertiesArgs {
            /**
             * Settings for Dev Tool Portal
             */
            features?: pulumi.Input<v20230901preview.DevToolPortalFeatureSettingsArgs>;
            /**
             * Indicates whether the resource exposes public endpoint
             */
            public?: pulumi.Input<boolean>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230901preview.DevToolPortalSsoPropertiesArgs>;
        }
        /**
         * devToolPortalPropertiesArgsProvideDefaults sets the appropriate defaults for DevToolPortalPropertiesArgs
         */
        export function devToolPortalPropertiesArgsProvideDefaults(val: DevToolPortalPropertiesArgs): DevToolPortalPropertiesArgs {
            return {
                ...val,
                features: (val.features ? pulumi.output(val.features).apply(v20230901preview.devToolPortalFeatureSettingsArgsProvideDefaults) : undefined),
                public: (val.public) ?? false,
            };
        }

        /**
         * Single sign-on related configuration
         */
        export interface DevToolPortalSsoPropertiesArgs {
            /**
             * The public identifier for the application
             */
            clientId?: pulumi.Input<string>;
            /**
             * The secret known only to the application and the authorization server
             */
            clientSecret?: pulumi.Input<string>;
            /**
             * The URI of a JSON file with generic OIDC provider configuration.
             */
            metadataUrl?: pulumi.Input<string>;
            /**
             * It defines the specific actions applications can be allowed to do on a user's behalf
             */
            scopes?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The error code compose of code and message.
         */
        export interface ErrorArgs {
            /**
             * The code of error.
             */
            code?: pulumi.Input<string>;
            /**
             * The message of error.
             */
            message?: pulumi.Input<string>;
        }

        /**
         * ExecAction describes a "run in container" action.
         */
        export interface ExecActionArgs {
            /**
             * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'ExecAction'.
             */
            type: pulumi.Input<"ExecAction">;
        }

        /**
         * API metadata property for Spring Cloud Gateway
         */
        export interface GatewayApiMetadataPropertiesArgs {
            /**
             * Detailed description of the APIs available on the Gateway instance (default: `Generated OpenAPI 3 document that describes the API routes configured.`)
             */
            description?: pulumi.Input<string>;
            /**
             * Location of additional documentation for the APIs available on the Gateway instance
             */
            documentation?: pulumi.Input<string>;
            /**
             * Base URL that API consumers will use to access APIs on the Gateway instance.
             */
            serverUrl?: pulumi.Input<string>;
            /**
             * Title describing the context of the APIs available on the Gateway instance (default: `Spring Cloud Gateway for K8S`)
             */
            title?: pulumi.Input<string>;
            /**
             * Version of APIs available on this Gateway instance (default: `unspecified`).
             */
            version?: pulumi.Input<string>;
        }

        /**
         * API route config of the Spring Cloud Gateway
         */
        export interface GatewayApiRouteArgs {
            /**
             * A description, will be applied to methods in the generated OpenAPI documentation.
             */
            description?: pulumi.Input<string>;
            /**
             * To modify the request before sending it to the target endpoint, or the received response.
             */
            filters?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Route processing order.
             */
            order?: pulumi.Input<number>;
            /**
             * A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
             */
            predicates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Enable sso validation.
             */
            ssoEnabled?: pulumi.Input<boolean>;
            /**
             * Classification tags, will be applied to methods in the generated OpenAPI documentation.
             */
            tags?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * A title, will be applied to methods in the generated OpenAPI documentation.
             */
            title?: pulumi.Input<string>;
            /**
             * Pass currently-authenticated user's identity token to application service, default is 'false'
             */
            tokenRelay?: pulumi.Input<boolean>;
            /**
             * Full uri, will override `appName`.
             */
            uri?: pulumi.Input<string>;
        }

        /**
         * Cross-Origin Resource Sharing property
         */
        export interface GatewayCorsPropertiesArgs {
            /**
             * Whether user credentials are supported on cross-site requests. Valid values: `true`, `false`.
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * Allowed headers in cross-site requests. The special value `*` allows actual requests to send any header.
             */
            allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed HTTP methods on cross-site requests. The special value `*` allows all methods. If not set, `GET` and `HEAD` are allowed by default.
             */
            allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed origin patterns to make cross-site requests.
             */
            allowedOriginPatterns?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Allowed origins to make cross-site requests. The special value `*` allows all domains.
             */
            allowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * HTTP response headers to expose for cross-site requests.
             */
            exposedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * How long, in seconds, the response from a pre-flight request can be cached by clients.
             */
            maxAge?: pulumi.Input<number>;
        }

        /**
         * The properties of custom domain for Spring Cloud Gateway
         */
        export interface GatewayCustomDomainPropertiesArgs {
            /**
             * The thumbprint of bound certificate.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * Spring Cloud Gateway properties payload
         */
        export interface GatewayPropertiesArgs {
            /**
             * Collection of addons for Spring Cloud Gateway
             */
            addonConfigs?: pulumi.Input<{[key: string]: any}>;
            /**
             * API metadata property for Spring Cloud Gateway
             */
            apiMetadataProperties?: pulumi.Input<v20230901preview.GatewayApiMetadataPropertiesArgs>;
            /**
             * Collection of APM type used in Spring Cloud Gateway
             */
            apmTypes?: pulumi.Input<pulumi.Input<string | enums.v20230901preview.ApmType>[]>;
            /**
             * Collection of ApmReferences in service level
             */
            apms?: pulumi.Input<pulumi.Input<v20230901preview.ApmReferenceArgs>[]>;
            /**
             * Client-Certification Authentication.
             */
            clientAuth?: pulumi.Input<v20230901preview.GatewayPropertiesClientAuthArgs>;
            /**
             * Cross-Origin Resource Sharing property
             */
            corsProperties?: pulumi.Input<v20230901preview.GatewayCorsPropertiesArgs>;
            /**
             * Environment variables of Spring Cloud Gateway
             */
            environmentVariables?: pulumi.Input<v20230901preview.GatewayPropertiesEnvironmentVariablesArgs>;
            /**
             * Indicate if only https is allowed.
             */
            httpsOnly?: pulumi.Input<boolean>;
            /**
             * Indicates whether the Spring Cloud Gateway exposes endpoint.
             */
            public?: pulumi.Input<boolean>;
            /**
             * The requested resource quantity for required CPU and Memory.
             */
            resourceRequests?: pulumi.Input<v20230901preview.GatewayResourceRequestsArgs>;
            /**
             * Single sign-on related configuration
             */
            ssoProperties?: pulumi.Input<v20230901preview.SsoPropertiesArgs>;
        }
        /**
         * gatewayPropertiesArgsProvideDefaults sets the appropriate defaults for GatewayPropertiesArgs
         */
        export function gatewayPropertiesArgsProvideDefaults(val: GatewayPropertiesArgs): GatewayPropertiesArgs {
            return {
                ...val,
                clientAuth: (val.clientAuth ? pulumi.output(val.clientAuth).apply(v20230901preview.gatewayPropertiesClientAuthArgsProvideDefaults) : undefined),
                httpsOnly: (val.httpsOnly) ?? false,
                public: (val.public) ?? false,
                resourceRequests: (val.resourceRequests ? pulumi.output(val.resourceRequests).apply(v20230901preview.gatewayResourceRequestsArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Client-Certification Authentication.
         */
        export interface GatewayPropertiesClientAuthArgs {
            /**
             * Whether to enable certificate verification or not
             */
            certificateVerification?: pulumi.Input<string | enums.v20230901preview.GatewayCertificateVerification>;
            /**
             * Collection of certificate resource Ids in Azure Spring Apps.
             */
            certificates?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * gatewayPropertiesClientAuthArgsProvideDefaults sets the appropriate defaults for GatewayPropertiesClientAuthArgs
         */
        export function gatewayPropertiesClientAuthArgsProvideDefaults(val: GatewayPropertiesClientAuthArgs): GatewayPropertiesClientAuthArgs {
            return {
                ...val,
                certificateVerification: (val.certificateVerification) ?? "Disabled",
            };
        }

        /**
         * Environment variables of Spring Cloud Gateway
         */
        export interface GatewayPropertiesEnvironmentVariablesArgs {
            /**
             * Non-sensitive properties
             */
            properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Sensitive properties
             */
            secrets?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Resource request payload of Spring Cloud Gateway.
         */
        export interface GatewayResourceRequestsArgs {
            /**
             * Cpu allocated to each Spring Cloud Gateway instance.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Memory allocated to each Spring Cloud Gateway instance.
             */
            memory?: pulumi.Input<string>;
        }
        /**
         * gatewayResourceRequestsArgsProvideDefaults sets the appropriate defaults for GatewayResourceRequestsArgs
         */
        export function gatewayResourceRequestsArgsProvideDefaults(val: GatewayResourceRequestsArgs): GatewayResourceRequestsArgs {
            return {
                ...val,
                cpu: (val.cpu) ?? "1",
                memory: (val.memory) ?? "2Gi",
            };
        }

        /**
         * OpenAPI properties of Spring Cloud Gateway route config.
         */
        export interface GatewayRouteConfigOpenApiPropertiesArgs {
            /**
             * The URI of OpenAPI specification.
             */
            uri?: pulumi.Input<string>;
        }

        /**
         * API route config of the Spring Cloud Gateway
         */
        export interface GatewayRouteConfigPropertiesArgs {
            /**
             * The resource Id of the Azure Spring Apps app, required unless route defines `uri`.
             */
            appResourceId?: pulumi.Input<string>;
            /**
             * To modify the request before sending it to the target endpoint, or the received response in app level.
             */
            filters?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * OpenAPI properties of Spring Cloud Gateway route config.
             */
            openApi?: pulumi.Input<v20230901preview.GatewayRouteConfigOpenApiPropertiesArgs>;
            /**
             * A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
             */
            predicates?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Protocol of routed Azure Spring Apps applications.
             */
            protocol?: pulumi.Input<string | enums.v20230901preview.GatewayRouteConfigProtocol>;
            /**
             * Array of API routes, each route contains properties such as `title`, `uri`, `ssoEnabled`, `predicates`, `filters`.
             */
            routes?: pulumi.Input<pulumi.Input<v20230901preview.GatewayApiRouteArgs>[]>;
            /**
             * Enable Single Sign-On in app level.
             */
            ssoEnabled?: pulumi.Input<boolean>;
        }
        /**
         * gatewayRouteConfigPropertiesArgsProvideDefaults sets the appropriate defaults for GatewayRouteConfigPropertiesArgs
         */
        export function gatewayRouteConfigPropertiesArgsProvideDefaults(val: GatewayRouteConfigPropertiesArgs): GatewayRouteConfigPropertiesArgs {
            return {
                ...val,
                protocol: (val.protocol) ?? "HTTP",
            };
        }

        /**
         * Git repository property payload for config server
         */
        export interface GitPatternRepositoryArgs {
            /**
             * Public sshKey of git repository.
             */
            hostKey?: pulumi.Input<string>;
            /**
             * SshKey algorithm of git repository.
             */
            hostKeyAlgorithm?: pulumi.Input<string>;
            /**
             * Label of the repository
             */
            label?: pulumi.Input<string>;
            /**
             * Name of the repository
             */
            name: pulumi.Input<string>;
            /**
             * Password of git repository basic auth.
             */
            password?: pulumi.Input<string>;
            /**
             * Collection of pattern of the repository
             */
            pattern?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Private sshKey algorithm of git repository.
             */
            privateKey?: pulumi.Input<string>;
            /**
             * Searching path of the repository
             */
            searchPaths?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Strict host key checking or not.
             */
            strictHostKeyChecking?: pulumi.Input<boolean>;
            /**
             * URI of the repository
             */
            uri: pulumi.Input<string>;
            /**
             * Username of git repository basic auth.
             */
            username?: pulumi.Input<string>;
        }

        /**
         * HTTPGetAction describes an action based on HTTP Get requests.
         */
        export interface HTTPGetActionArgs {
            /**
             * Path to access on the HTTP server.
             */
            path?: pulumi.Input<string>;
            /**
             * Scheme to use for connecting to the host. Defaults to HTTP.
             *
             * Possible enum values:
             *  - `"HTTP"` means that the scheme used will be http://
             *  - `"HTTPS"` means that the scheme used will be https://
             */
            scheme?: pulumi.Input<string | enums.v20230901preview.HTTPSchemeType>;
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'HTTPGetAction'.
             */
            type: pulumi.Input<"HTTPGetAction">;
        }

        /**
         * Azure Spring Apps App Instance Http scaling rule.
         */
        export interface HttpScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230901preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe http scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Credential of the image registry
         */
        export interface ImageRegistryCredentialArgs {
            /**
             * The password of the image registry credential
             */
            password?: pulumi.Input<string>;
            /**
             * The username of the image registry credential
             */
            username?: pulumi.Input<string>;
        }

        /**
         * Ingress configuration payload for Azure Spring Apps resource.
         */
        export interface IngressConfigArgs {
            /**
             * Ingress read time out in seconds.
             */
            readTimeoutInSeconds?: pulumi.Input<number>;
        }

        /**
         * App ingress settings payload.
         */
        export interface IngressSettingsArgs {
            /**
             * How ingress should communicate with this app backend service.
             */
            backendProtocol?: pulumi.Input<string | enums.v20230901preview.BackendProtocol>;
            /**
             * Client-Certification Authentication.
             */
            clientAuth?: pulumi.Input<v20230901preview.IngressSettingsClientAuthArgs>;
            /**
             * Ingress read time out in seconds.
             */
            readTimeoutInSeconds?: pulumi.Input<number>;
            /**
             * Ingress send time out in seconds.
             */
            sendTimeoutInSeconds?: pulumi.Input<number>;
            /**
             * Type of the affinity, set this to Cookie to enable session affinity.
             */
            sessionAffinity?: pulumi.Input<string | enums.v20230901preview.SessionAffinity>;
            /**
             * Time in seconds until the cookie expires.
             */
            sessionCookieMaxAge?: pulumi.Input<number>;
        }

        /**
         * Client-Certification Authentication.
         */
        export interface IngressSettingsClientAuthArgs {
            /**
             * Collection of certificate resource id.
             */
            certificates?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Uploaded Jar binary for a deployment
         */
        export interface JarUploadedUserSourceInfoArgs {
            /**
             * JVM parameter
             */
            jvmOptions?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the Jar file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'Jar'.
             */
            type: pulumi.Input<"Jar">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Properties of certificate imported from key vault.
         */
        export interface KeyVaultCertificatePropertiesArgs {
            /**
             * Indicates whether to automatically synchronize certificate from key vault or not.
             */
            autoSync?: pulumi.Input<string | enums.v20230901preview.KeyVaultCertificateAutoSync>;
            /**
             * The certificate version of key vault.
             */
            certVersion?: pulumi.Input<string>;
            /**
             * Optional. If set to true, it will not import private key from key vault.
             */
            excludePrivateKey?: pulumi.Input<boolean>;
            /**
             * The certificate name of key vault.
             */
            keyVaultCertName: pulumi.Input<string>;
            /**
             * The type of the certificate source.
             * Expected value is 'KeyVaultCertificate'.
             */
            type: pulumi.Input<"KeyVaultCertificate">;
            /**
             * The vault uri of user key vault.
             */
            vaultUri: pulumi.Input<string>;
        }
        /**
         * keyVaultCertificatePropertiesArgsProvideDefaults sets the appropriate defaults for KeyVaultCertificatePropertiesArgs
         */
        export function keyVaultCertificatePropertiesArgsProvideDefaults(val: KeyVaultCertificatePropertiesArgs): KeyVaultCertificatePropertiesArgs {
            return {
                ...val,
                autoSync: (val.autoSync) ?? "Disabled",
                excludePrivateKey: (val.excludePrivateKey) ?? false,
            };
        }

        /**
         * Loaded certificate payload
         */
        export interface LoadedCertificateArgs {
            /**
             * Indicate whether the certificate will be loaded into default trust store, only work for Java runtime.
             */
            loadTrustStore?: pulumi.Input<boolean>;
            /**
             * Resource Id of loaded certificate
             */
            resourceId: pulumi.Input<string>;
        }
        /**
         * loadedCertificateArgsProvideDefaults sets the appropriate defaults for LoadedCertificateArgs
         */
        export function loadedCertificateArgsProvideDefaults(val: LoadedCertificateArgs): LoadedCertificateArgs {
            return {
                ...val,
                loadTrustStore: (val.loadTrustStore) ?? false,
            };
        }

        /**
         * Managed identity properties retrieved from ARM request headers.
         */
        export interface ManagedIdentityPropertiesArgs {
            /**
             * Principal Id of system-assigned managed identity.
             */
            principalId?: pulumi.Input<string>;
            /**
             * Tenant Id of system-assigned managed identity.
             */
            tenantId?: pulumi.Input<string>;
            /**
             * Type of the managed identity
             */
            type?: pulumi.Input<string | enums.v20230901preview.ManagedIdentityType>;
            /**
             * Properties of user-assigned managed identities
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Purchasing 3rd Party product for one Azure Spring Apps instance
         */
        export interface MarketplaceResourceArgs {
            /**
             * The plan id of the 3rd Party Artifact that is being procured.
             */
            plan?: pulumi.Input<string>;
            /**
             * The 3rd Party artifact that is being procured.
             */
            product?: pulumi.Input<string>;
            /**
             * The publisher id of the 3rd Party Artifact that is being bought.
             */
            publisher?: pulumi.Input<string>;
        }

        /**
         * Monitoring Setting properties payload
         */
        export interface MonitoringSettingPropertiesArgs {
            /**
             * Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings
             */
            appInsightsInstrumentationKey?: pulumi.Input<string>;
            /**
             * Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0]
             */
            appInsightsSamplingRate?: pulumi.Input<number>;
            /**
             * Error when apply Monitoring Setting changes.
             */
            error?: pulumi.Input<v20230901preview.ErrorArgs>;
            /**
             * Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not
             */
            traceEnabled?: pulumi.Input<boolean>;
        }

        /**
         * Uploaded Jar binary for a deployment
         */
        export interface NetCoreZipUploadedUserSourceInfoArgs {
            /**
             * The path to the .NET executable relative to zip root
             */
            netCoreMainEntryPath?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the .Net file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'NetCoreZip'.
             */
            type: pulumi.Input<"NetCoreZip">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Service network profile payload
         */
        export interface NetworkProfileArgs {
            /**
             * Name of the resource group containing network resources for customer apps in Azure Spring Apps
             */
            appNetworkResourceGroup?: pulumi.Input<string>;
            /**
             * Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps
             */
            appSubnetId?: pulumi.Input<string>;
            /**
             * Ingress configuration payload for Azure Spring Apps resource.
             */
            ingressConfig?: pulumi.Input<v20230901preview.IngressConfigArgs>;
            /**
             * The egress traffic type of Azure Spring Apps VNet instances.
             */
            outboundType?: pulumi.Input<string>;
            /**
             * Azure Spring Apps service reserved CIDR
             */
            serviceCidr?: pulumi.Input<string>;
            /**
             * Name of the resource group containing network resources of Azure Spring Apps Service Runtime
             */
            serviceRuntimeNetworkResourceGroup?: pulumi.Input<string>;
            /**
             * Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime
             */
            serviceRuntimeSubnetId?: pulumi.Input<string>;
        }

        /**
         * Persistent disk payload
         */
        export interface PersistentDiskArgs {
            /**
             * Mount path of the persistent disk
             */
            mountPath?: pulumi.Input<string>;
            /**
             * Size of the persistent disk in GB
             */
            sizeInGB?: pulumi.Input<number>;
        }

        /**
         * Probe describes a health check to be performed against an App Instance to determine whether it is alive or ready to receive traffic.
         */
        export interface ProbeArgs {
            /**
             * Indicate whether the probe is disabled.
             */
            disableProbe: pulumi.Input<boolean>;
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded. Minimum value is 1.
             */
            failureThreshold?: pulumi.Input<number>;
            /**
             * Number of seconds after the App Instance has started before probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            initialDelaySeconds?: pulumi.Input<number>;
            /**
             * How often (in seconds) to perform the probe. Minimum value is 1.
             */
            periodSeconds?: pulumi.Input<number>;
            /**
             * The action of the probe.
             */
            probeAction?: pulumi.Input<v20230901preview.ExecActionArgs | v20230901preview.HTTPGetActionArgs | v20230901preview.TCPSocketActionArgs>;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 for liveness and startup. Minimum value is 1.
             */
            successThreshold?: pulumi.Input<number>;
            /**
             * Number of seconds after which the probe times out. Minimum value is 1.
             */
            timeoutSeconds?: pulumi.Input<number>;
        }
        /**
         * probeArgsProvideDefaults sets the appropriate defaults for ProbeArgs
         */
        export function probeArgsProvideDefaults(val: ProbeArgs): ProbeArgs {
            return {
                ...val,
                disableProbe: (val.disableProbe) ?? false,
            };
        }

        /**
         * Azure Spring Apps App Instance Azure Queue based scaling rule.
         */
        export interface QueueScaleRuleArgs {
            /**
             * Authentication secrets for the queue scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230901preview.ScaleRuleAuthArgs>[]>;
            /**
             * Queue length.
             */
            queueLength?: pulumi.Input<number>;
            /**
             * Queue name.
             */
            queueName?: pulumi.Input<string>;
        }

        /**
         * Deployment resource request payload
         */
        export interface ResourceRequestsArgs {
            /**
             * Required CPU. 1 core can be represented by 1 or 1000m. This should be 500m or 1 for Basic tier, and {500m, 1, 2, 3, 4} for Standard tier.
             */
            cpu?: pulumi.Input<string>;
            /**
             * Required memory. 1 GB can be represented by 1Gi or 1024Mi. This should be {512Mi, 1Gi, 2Gi} for Basic tier, and {512Mi, 1Gi, 2Gi, ..., 8Gi} for Standard tier.
             */
            memory?: pulumi.Input<string>;
        }

        /**
         * Azure Spring Apps scaling configurations.
         */
        export interface ScaleArgs {
            /**
             * Optional. Maximum number of container replicas. Defaults to 10 if not set.
             */
            maxReplicas?: pulumi.Input<number>;
            /**
             * Optional. Minimum number of container replicas.
             */
            minReplicas?: pulumi.Input<number>;
            /**
             * Scaling rules.
             */
            rules?: pulumi.Input<pulumi.Input<v20230901preview.ScaleRuleArgs>[]>;
        }
        /**
         * scaleArgsProvideDefaults sets the appropriate defaults for ScaleArgs
         */
        export function scaleArgsProvideDefaults(val: ScaleArgs): ScaleArgs {
            return {
                ...val,
                maxReplicas: (val.maxReplicas) ?? 10,
            };
        }

        /**
         * Azure Spring Apps App Instance scaling rule.
         */
        export interface ScaleRuleArgs {
            /**
             * Azure Queue based scaling.
             */
            azureQueue?: pulumi.Input<v20230901preview.QueueScaleRuleArgs>;
            /**
             * Custom scale rule.
             */
            custom?: pulumi.Input<v20230901preview.CustomScaleRuleArgs>;
            /**
             * HTTP requests based scaling.
             */
            http?: pulumi.Input<v20230901preview.HttpScaleRuleArgs>;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Tcp requests based scaling.
             */
            tcp?: pulumi.Input<v20230901preview.TcpScaleRuleArgs>;
        }

        /**
         * Auth Secrets for Azure Spring Apps App Instance Scale Rule
         */
        export interface ScaleRuleAuthArgs {
            /**
             * Name of the Azure Spring Apps App Instance secret from which to pull the auth params.
             */
            secretRef?: pulumi.Input<string>;
            /**
             * Trigger Parameter that uses the secret
             */
            triggerParameter?: pulumi.Input<string>;
        }

        /**
         * Secret definition.
         */
        export interface SecretArgs {
            /**
             * Secret Name.
             */
            name?: pulumi.Input<string>;
            /**
             * Secret Value.
             */
            value?: pulumi.Input<string>;
        }

        /**
         * Additional Service settings in vnet injection instance
         */
        export interface ServiceVNetAddonsArgs {
            /**
             * Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet.
             */
            dataPlanePublicEndpoint?: pulumi.Input<boolean>;
            /**
             * Indicates whether the log stream in vnet injection instance could be accessed from internet.
             */
            logStreamPublicEndpoint?: pulumi.Input<boolean>;
        }
        /**
         * serviceVNetAddonsArgsProvideDefaults sets the appropriate defaults for ServiceVNetAddonsArgs
         */
        export function serviceVNetAddonsArgsProvideDefaults(val: ServiceVNetAddonsArgs): ServiceVNetAddonsArgs {
            return {
                ...val,
                dataPlanePublicEndpoint: (val.dataPlanePublicEndpoint) ?? false,
                logStreamPublicEndpoint: (val.logStreamPublicEndpoint) ?? false,
            };
        }

        /**
         * Sku of Azure Spring Apps
         */
        export interface SkuArgs {
            /**
             * Current capacity of the target resource
             */
            capacity?: pulumi.Input<number>;
            /**
             * Name of the Sku
             */
            name?: pulumi.Input<string>;
            /**
             * Tier of the Sku
             */
            tier?: pulumi.Input<string>;
        }
        /**
         * skuArgsProvideDefaults sets the appropriate defaults for SkuArgs
         */
        export function skuArgsProvideDefaults(val: SkuArgs): SkuArgs {
            return {
                ...val,
                name: (val.name) ?? "S0",
                tier: (val.tier) ?? "Standard",
            };
        }

        /**
         * Uploaded Java source code binary for a deployment
         */
        export interface SourceUploadedUserSourceInfoArgs {
            /**
             * Selector for the artifact to be used for the deployment for multi-module projects. This should be
             * the relative path to the target module/project.
             */
            artifactSelector?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the source file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'Source'.
             */
            type: pulumi.Input<"Source">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Single sign-on related configuration
         */
        export interface SsoPropertiesArgs {
            /**
             * The public identifier for the application
             */
            clientId?: pulumi.Input<string>;
            /**
             * The secret known only to the application and the authorization server
             */
            clientSecret?: pulumi.Input<string>;
            /**
             * The URI of Issuer Identifier
             */
            issuerUri?: pulumi.Input<string>;
            /**
             * It defines the specific actions applications can be allowed to do on a user's behalf
             */
            scope?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * KPack ClusterStack properties payload
         */
        export interface StackPropertiesArgs {
            /**
             * Id of the ClusterStack.
             */
            id?: pulumi.Input<string>;
            /**
             * Version of the ClusterStack
             */
            version?: pulumi.Input<string>;
        }

        /**
         * storage resource of type Azure Storage Account.
         */
        export interface StorageAccountArgs {
            /**
             * The account key of the Azure Storage Account.
             */
            accountKey: pulumi.Input<string>;
            /**
             * The account name of the Azure Storage Account.
             */
            accountName: pulumi.Input<string>;
            /**
             * The type of the storage.
             * Expected value is 'StorageAccount'.
             */
            storageType: pulumi.Input<"StorageAccount">;
        }

        /**
         * TCPSocketAction describes an action based on opening a socket
         */
        export interface TCPSocketActionArgs {
            /**
             * The type of the action to take to perform the health check.
             * Expected value is 'TCPSocketAction'.
             */
            type: pulumi.Input<"TCPSocketAction">;
        }

        /**
         * Azure Spring Apps App Instance Tcp scaling rule.
         */
        export interface TcpScaleRuleArgs {
            /**
             * Authentication secrets for the tcp scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230901preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe tcp scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * Temporary disk payload
         */
        export interface TemporaryDiskArgs {
            /**
             * Mount path of the temporary disk
             */
            mountPath?: pulumi.Input<string>;
            /**
             * Size of the temporary disk in GB
             */
            sizeInGB?: pulumi.Input<number>;
        }
        /**
         * temporaryDiskArgsProvideDefaults sets the appropriate defaults for TemporaryDiskArgs
         */
        export function temporaryDiskArgsProvideDefaults(val: TemporaryDiskArgs): TemporaryDiskArgs {
            return {
                ...val,
                mountPath: (val.mountPath) ?? "/tmp",
            };
        }

        /**
         * Source with uploaded location
         */
        export interface UploadedUserSourceInfoArgs {
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'UploadedUserSourceInfo'.
             */
            type: pulumi.Input<"UploadedUserSourceInfo">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Uploaded War binary for a deployment
         */
        export interface WarUploadedUserSourceInfoArgs {
            /**
             * JVM parameter
             */
            jvmOptions?: pulumi.Input<string>;
            /**
             * Relative path of the storage which stores the source
             */
            relativePath?: pulumi.Input<string>;
            /**
             * Runtime version of the war file
             */
            runtimeVersion?: pulumi.Input<string>;
            /**
             * Server version, currently only Apache Tomcat is supported
             */
            serverVersion?: pulumi.Input<string>;
            /**
             * Type of the source uploaded
             * Expected value is 'War'.
             */
            type: pulumi.Input<"War">;
            /**
             * Version of the source
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Weekly planned maintenance
         */
        export interface WeeklyMaintenanceScheduleConfigurationArgs {
            /**
             * The day to run the maintenance job
             */
            day: pulumi.Input<string | enums.v20230901preview.WeekDay>;
            /**
             * The frequency to run the maintenance job
             * Expected value is 'Weekly'.
             */
            frequency: pulumi.Input<"Weekly">;
            /**
             * The hour to run the maintenance job
             */
            hour: pulumi.Input<number>;
        }

    }
}
