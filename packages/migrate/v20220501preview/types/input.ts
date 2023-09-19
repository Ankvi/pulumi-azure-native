import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Class for ACR Properties.
     */
    export interface ACRPropertiesArgs {
        /**
         * Gets or sets the azure container registry name.
         */
        registryName?: pulumi.Input<string>;
        /**
         * Gets or sets the resource group of the resource.
         */
        resourceGroup?: pulumi.Input<string>;
        /**
         * Gets or sets the subscription id of the resource.
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * Gets or sets the tenant id.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Class for AKSDeployment Properties.
     */
    export interface AKSDeploymentPropertiesArgs {
        /**
         * Gets or sets the AKS cluster name.
         */
        aksClusterName?: pulumi.Input<string>;
        /**
         * Gets or sets the resource group of the resource.
         */
        resourceGroup?: pulumi.Input<string>;
        /**
         * Gets or sets the subscription id of the resource.
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * Gets or sets the tenant id.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * AKS Deployment Specification.
     */
    export interface AKSDeploymentSpecificationArgs {
        /**
         * Gets or sets the Merged Deployment and service Yaml.
         */
        kubernetesObjectsYaml?: pulumi.Input<string>;
        /**
         * Gets or sets the load balancer type.
         */
        loadBalancerType?: pulumi.Input<string | enums.LoadBalancerType>;
        /**
         * Gets or sets the replica count to be created in AKS.
         */
        replicaCount?: pulumi.Input<string>;
    }

    /**
     * ApacheTomcat web application.
     */
    export interface ApacheTomcatAKSWorkloadDeploymentArgs {
        /**
         * Class for automation artifact.
         */
        automationArtifactProperties?: pulumi.Input<AutomationArtifactArgs>;
        /**
         * Gets or sets the bindings for the application.
         */
        bindings?: pulumi.Input<pulumi.Input<BindingArgs>[]>;
        /**
         * Gets or sets the build container images.
         */
        buildContainerImages?: pulumi.Input<pulumi.Input<ContainerImagePropertiesArgs>[]>;
        /**
         * Class for AKSDeployment Properties.
         */
        clusterProperties?: pulumi.Input<AKSDeploymentPropertiesArgs>;
        /**
         * Gets or sets application configuration.
         */
        configurations?: pulumi.Input<pulumi.Input<WebApplicationConfigurationArgs>[]>;
        /**
         * Class for container image properties.
         */
        containerImageProperties?: pulumi.Input<ContainerImagePropertiesArgs>;
        /**
         * Gets or sets the deployment name prefix.
         */
        deploymentNamePrefix?: pulumi.Input<string>;
        /**
         * AKS Deployment Specification.
         */
        deploymentSpec?: pulumi.Input<AKSDeploymentSpecificationArgs>;
        /**
         * Gets or sets application directories.
         */
        directories?: pulumi.Input<pulumi.Input<WebApplicationDirectoryArgs>[]>;
        /**
         * Resource Requirements.
         */
        limits?: pulumi.Input<ResourceRequirementsArgs>;
        /**
         * Class for app insight monitoring properties.
         */
        monitoringProperties?: pulumi.Input<AppInsightMonitoringPropertiesArgs>;
        /**
         * Resource Requirements.
         */
        requests?: pulumi.Input<ResourceRequirementsArgs>;
        /**
         * Gets or sets the target platform managed identity.
         */
        targetPlatformIdentity?: pulumi.Input<string>;
    }

    /**
     * ApacheTomcat workload instance model custom properties.
     */
    export interface ApacheTomcatAKSWorkloadDeploymentModelCustomPropertiesArgs {
        /**
         * ApacheTomcat web application.
         */
        apacheTomcatAksWorkloadDeploymentProperties?: pulumi.Input<ApacheTomcatAKSWorkloadDeploymentArgs>;
        /**
         * Gets or sets the instance type.
         * Expected value is 'ApacheTomcatAKSWorkloadDeploymentModelCustomProperties'.
         */
        instanceType: pulumi.Input<"ApacheTomcatAKSWorkloadDeploymentModelCustomProperties">;
    }

    /**
     * ApacheTomcat web application.
     */
    export interface ApacheTomcatWebApplicationArgs {
        /**
         * Gets or sets the web application id.
         */
        applicationId?: pulumi.Input<string>;
        /**
         * Gets or sets the web application name.
         */
        applicationName?: pulumi.Input<string>;
        /**
         * Gets or sets application scratch path.
         */
        applicationScratchPath?: pulumi.Input<string>;
        /**
         * Gets or sets the bindings for the application.
         */
        bindings?: pulumi.Input<pulumi.Input<BindingArgs>[]>;
        /**
         * Gets or sets application configuration.
         */
        configurations?: pulumi.Input<pulumi.Input<WebApplicationConfigurationArgs>[]>;
        /**
         * Gets or sets application directories.
         */
        directories?: pulumi.Input<pulumi.Input<WebApplicationDirectoryArgs>[]>;
        /**
         * Gets or sets the discovered frameworks of application.
         */
        discoveredFrameworks?: pulumi.Input<pulumi.Input<WebApplicationFrameworkArgs>[]>;
        /**
         * Gets or sets the display name.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Resource Requirements.
         */
        limits?: pulumi.Input<ResourceRequirementsArgs>;
        /**
         * Second level entity for virtual directories.
         */
        path?: pulumi.Input<DirectoryPathArgs>;
        /**
         * Framework specific data for a web application.
         */
        primaryFramework?: pulumi.Input<WebApplicationFrameworkArgs>;
        /**
         * Resource Requirements.
         */
        requests?: pulumi.Input<ResourceRequirementsArgs>;
        /**
         * Gets or sets the web server id.
         */
        webServerId?: pulumi.Input<string>;
        /**
         * Gets or sets the web server name.
         */
        webServerName?: pulumi.Input<string>;
    }

    /**
     * ApacheTomcat workload instance model custom properties.
     */
    export interface ApacheTomcatWorkloadInstanceModelCustomPropertiesArgs {
        /**
         * ApacheTomcat web application.
         */
        apacheTomcatWebApplication?: pulumi.Input<ApacheTomcatWebApplicationArgs>;
        /**
         * Gets or sets the instance type.
         * Expected value is 'ApacheTomcatWorkloadInstanceModelCustomProperties'.
         */
        instanceType: pulumi.Input<"ApacheTomcatWorkloadInstanceModelCustomProperties">;
        /**
         * Gets or sets the Web application ARM id.
         */
        webAppArmId?: pulumi.Input<string>;
        /**
         * Gets or sets the Web application site name.
         */
        webAppSiteName?: pulumi.Input<string>;
    }

    /**
     * Class for app insight monitoring properties.
     */
    export interface AppInsightMonitoringPropertiesArgs {
        /**
         * Gets or sets the app insights name.
         */
        appInsightsName?: pulumi.Input<string>;
        /**
         * Gets or sets a value indicating whether monitoring is enabled.
         */
        isEnabled?: pulumi.Input<boolean>;
        /**
         * Gets or sets the region.
         */
        region?: pulumi.Input<string>;
        /**
         * Gets or sets the resource group of the resource.
         */
        resourceGroup?: pulumi.Input<string>;
        secretStoreDetails?: pulumi.Input<SecretStoreDetailsArgs>;
        /**
         * Gets or sets the subscription id of the resource.
         */
        subscriptionId?: pulumi.Input<string>;
    }

    /**
     * Class for automation artifact.
     */
    export interface AutomationArtifactArgs {
        /**
         * Gets or sets the artifacts.
         */
        artifacts?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Azure file share profile for hydration of application folders not mounted on
         * the container file system.
         */
        azureFileShareProfile?: pulumi.Input<AzureFileShareHydrationProfileArgs>;
        /**
         * Gets or sets the status of automation artifacts.
         */
        status?: pulumi.Input<string | enums.AutomationArtifactStatus>;
    }

    /**
     * Azure file share profile for hydration of application folders not mounted on
     * the container file system.
     */
    export interface AzureFileShareHydrationProfileArgs {
        /**
         * Gets or sets the cloud directory path of the directory on azure file share.
         */
        azureFileShareDirPath?: pulumi.Input<string>;
        /**
         * Gets or sets the name of the azure file share.
         */
        azureFileShareName?: pulumi.Input<string>;
        /**
         * Gets or sets the name of the azure file share resource group.
         */
        azureFileShareResourceGroup?: pulumi.Input<string>;
        /**
         * Gets or sets the name of the azure file share storage account.
         */
        azureFileShareStorageAccount?: pulumi.Input<string>;
        /**
         * Gets or sets the subscription id of the azure file share.
         */
        azureFileShareSubscriptionId?: pulumi.Input<string>;
    }

    /**
     * Binding for a web application.
     */
    export interface BindingArgs {
        /**
         * WebApplication certificate.
         */
        cert?: pulumi.Input<CertArgs>;
        /**
         * Gets or sets the binding host name.
         */
        hostName?: pulumi.Input<string>;
        /**
         * Gets or sets the IP Address.
         */
        ipAddress?: pulumi.Input<string>;
        /**
         * Gets or sets the application port.
         */
        port?: pulumi.Input<string>;
        /**
         * WebApplication port mapping.
         */
        portMapping?: pulumi.Input<PortMappingArgs>;
        /**
         * Gets or sets the protocol.
         */
        protocol?: pulumi.Input<string>;
    }

    /**
     * WebApplication certificate.
     */
    export interface CertArgs {
        /**
         * Gets or sets the Certificate data.
         */
        certData?: pulumi.Input<string>;
        /**
         * Gets or sets a value indicating whether certificate is needed or not.
         */
        certNeeded?: pulumi.Input<boolean>;
        /**
         * Gets or sets a value indicating whether certificate is provided or not.
         */
        certProvided?: pulumi.Input<boolean>;
        /**
         * Gets or sets the type of secret store for the certificate.
         */
        secretStore?: pulumi.Input<string | enums.SecretStoreType>;
    }

    /**
     * Class for container image properties.
     */
    export interface ContainerImagePropertiesArgs {
        /**
         * Gets or sets the dockerfile for the container image.
         */
        dockerfile?: pulumi.Input<string>;
        /**
         * Gets or sets the container image name.
         */
        imageName?: pulumi.Input<string>;
        /**
         * Gets or sets the container image tag.
         */
        imageTag?: pulumi.Input<string>;
        /**
         * Class for ACR Properties.
         */
        registryProperties?: pulumi.Input<ACRPropertiesArgs>;
        /**
         * Gets or sets the RunId.
         */
        runId?: pulumi.Input<string>;
        /**
         * Gets or sets the RunStatus.
         */
        runStatus?: pulumi.Input<string>;
    }

    /**
     * Second level entity for virtual directories.
     */
    export interface DirectoryPathArgs {
        /**
         * Gets or sets the physical path of the directory on the web server.
         */
        physical?: pulumi.Input<string>;
        /**
         * Gets or sets the virtual path for the directory.
         */
        virtual?: pulumi.Input<string>;
    }

    /**
     * Class for GMSA authentication details to configure Active Directory connectivity.
     */
    export interface GmsaAuthenticationPropertiesArgs {
        /**
         * Gets or sets the list of dns server that can resolve the Active Directory Domain Name/Address.
         */
        adDomainControllerDns?: pulumi.Input<string>;
        /**
         * Gets or sets the FQDN of the Active Directory Domain. For e.g. 'contoso.local', 'fareast.corp.microsoft.com' etc.
         */
        adDomainFqdn?: pulumi.Input<string>;
        akvProperties?: pulumi.Input<KeyVaultSecretStorePropertiesArgs>;
        /**
         * Gets or sets the password of the user specified by RestApi.Controllers.V2022_05_01_preview.Models.WorkloadDeployment.Gmsa.GmsaAuthenticationProperties.DomainAdminUsername.
         */
        domainAdminPassword?: pulumi.Input<string>;
        /**
         * Gets or sets the name of the user having admin rights on the Active Directory Domain Controller.
         */
        domainAdminUsername?: pulumi.Input<string>;
        /**
         * Gets or sets the address of the Active Directory Domain Controller running Domain Services.
         */
        domainControllerAddress?: pulumi.Input<string>;
        /**
         * Gets or sets the name to be used for GMSA.
         */
        gmsaAccountName?: pulumi.Input<string>;
        /**
         * Gets or sets the password of the user specified by RestApi.Controllers.V2022_05_01_preview.Models.WorkloadDeployment.Gmsa.GmsaAuthenticationProperties.GmsaUsername.
         */
        gmsaUserPassword?: pulumi.Input<string>;
        /**
         * Gets or sets username of the user having authorization to access GMSA on Active Directory.
         */
        gmsaUsername?: pulumi.Input<string>;
    }

    /**
     * IIS AKS workload deployment.
     */
    export interface IISAKSWorkloadDeploymentArgs {
        /**
         * Class for GMSA authentication details to configure Active Directory connectivity.
         */
        authenticationProperties?: pulumi.Input<GmsaAuthenticationPropertiesArgs>;
        /**
         * Class for automation artifact.
         */
        automationArtifactProperties?: pulumi.Input<AutomationArtifactArgs>;
        /**
         * Gets or sets the bindings for the application.
         */
        bindings?: pulumi.Input<pulumi.Input<BindingArgs>[]>;
        /**
         * Gets or sets the build container images.
         */
        buildContainerImages?: pulumi.Input<pulumi.Input<ContainerImagePropertiesArgs>[]>;
        /**
         * Class for AKSDeployment Properties.
         */
        clusterProperties?: pulumi.Input<AKSDeploymentPropertiesArgs>;
        /**
         * Gets or sets application configuration.
         */
        configurations?: pulumi.Input<pulumi.Input<WebApplicationConfigurationArgs>[]>;
        /**
         * Class for container image properties.
         */
        containerImageProperties?: pulumi.Input<ContainerImagePropertiesArgs>;
        /**
         * Gets or sets the deployment name prefix.
         */
        deploymentNamePrefix?: pulumi.Input<string>;
        /**
         * AKS Deployment Specification.
         */
        deploymentSpec?: pulumi.Input<AKSDeploymentSpecificationArgs>;
        /**
         * Gets or sets application directories.
         */
        directories?: pulumi.Input<pulumi.Input<WebApplicationDirectoryArgs>[]>;
        /**
         * Resource Requirements.
         */
        limits?: pulumi.Input<ResourceRequirementsArgs>;
        /**
         * Class for app insight monitoring properties.
         */
        monitoringProperties?: pulumi.Input<AppInsightMonitoringPropertiesArgs>;
        /**
         * Resource Requirements.
         */
        requests?: pulumi.Input<ResourceRequirementsArgs>;
        /**
         * Gets or sets the target platform managed identity.
         */
        targetPlatformIdentity?: pulumi.Input<string>;
    }

    /**
     * IIS workload instance model custom properties.
     */
    export interface IISAKSWorkloadDeploymentModelCustomPropertiesArgs {
        /**
         * IIS AKS workload deployment.
         */
        iisAksWorkloadDeploymentProperties?: pulumi.Input<IISAKSWorkloadDeploymentArgs>;
        /**
         * Gets or sets the instance type.
         * Expected value is 'IISAKSWorkloadDeploymentModelCustomProperties'.
         */
        instanceType: pulumi.Input<"IISAKSWorkloadDeploymentModelCustomProperties">;
    }

    /**
     * IISApplication details.
     */
    export interface IISApplicationDetailsArgs {
        /**
         * Gets or sets the application pool name.
         */
        applicationPoolName?: pulumi.Input<string>;
        /**
         * Gets or sets the list of directories.
         */
        directories?: pulumi.Input<pulumi.Input<DirectoryPathArgs>[]>;
        /**
         * Gets or sets a value indicating whether 32 bit applications are allowed to run on 64 bit.
         */
        enable32BitApiOnWin64?: pulumi.Input<boolean>;
        /**
         * Gets or sets the managed pipeline mode.
         */
        managedPipelineMode?: pulumi.Input<string>;
        /**
         * Second level entity for virtual directories.
         */
        path?: pulumi.Input<DirectoryPathArgs>;
        /**
         * Gets or sets the runtime version.
         */
        runtimeVersion?: pulumi.Input<string>;
    }

    /**
     * IIS virtual application details.
     */
    export interface IISVirtualApplicationDetailsArgs {
        /**
         * Gets or sets the list of directories.
         */
        directories?: pulumi.Input<pulumi.Input<DirectoryPathArgs>[]>;
        /**
         * Second level entity for virtual directories.
         */
        path?: pulumi.Input<DirectoryPathArgs>;
    }

    /**
     * IISWeb application.
     */
    export interface IISWebApplicationArgs {
        /**
         * Gets or sets the web application id.
         */
        applicationId?: pulumi.Input<string>;
        /**
         * Gets or sets the web application name.
         */
        applicationName?: pulumi.Input<string>;
        /**
         * Gets or sets application scratch path.
         */
        applicationScratchPath?: pulumi.Input<string>;
        /**
         * Gets or sets the list of applications for the IIS web site.
         */
        applications?: pulumi.Input<pulumi.Input<IISApplicationDetailsArgs>[]>;
        /**
         * Gets or sets the bindings for the application.
         */
        bindings?: pulumi.Input<pulumi.Input<BindingArgs>[]>;
        /**
         * Gets or sets application configuration.
         */
        configurations?: pulumi.Input<pulumi.Input<WebApplicationConfigurationArgs>[]>;
        /**
         * Gets or sets application directories.
         */
        directories?: pulumi.Input<pulumi.Input<WebApplicationDirectoryArgs>[]>;
        /**
         * Gets or sets the discovered frameworks of application.
         */
        discoveredFrameworks?: pulumi.Input<pulumi.Input<WebApplicationFrameworkArgs>[]>;
        /**
         * Gets or sets the display name.
         */
        displayName?: pulumi.Input<string>;
        /**
         * IISWeb server.
         */
        iisWebServer?: pulumi.Input<IISWebServerArgs>;
        /**
         * Resource Requirements.
         */
        limits?: pulumi.Input<ResourceRequirementsArgs>;
        /**
         * Second level entity for virtual directories.
         */
        path?: pulumi.Input<DirectoryPathArgs>;
        /**
         * Framework specific data for a web application.
         */
        primaryFramework?: pulumi.Input<WebApplicationFrameworkArgs>;
        /**
         * Resource Requirements.
         */
        requests?: pulumi.Input<ResourceRequirementsArgs>;
        /**
         * Gets or sets the list of application units for the web site.
         */
        virtualApplications?: pulumi.Input<pulumi.Input<IISVirtualApplicationDetailsArgs>[]>;
        /**
         * Gets or sets the web server id.
         */
        webServerId?: pulumi.Input<string>;
        /**
         * Gets or sets the web server name.
         */
        webServerName?: pulumi.Input<string>;
    }

    /**
     * IISWeb server.
     */
    export interface IISWebServerArgs {
        /**
         * Gets or sets the display name.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Gets or sets list of ip addresses.
         */
        ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Gets or sets the list of machines.
         */
        machines?: pulumi.Input<pulumi.Input<string>[]>;
        operatingSystemDetails?: pulumi.Input<OperatingSystemDetailsArgs>;
        /**
         * Gets or sets the server root configuration location.
         */
        rootConfigurationLocation?: pulumi.Input<string>;
        /**
         * Gets or sets the run as account id.
         */
        runAsAccountId?: pulumi.Input<string>;
        /**
         * Gets or sets the server FQDN.
         */
        serverFqdn?: pulumi.Input<string>;
        /**
         * Gets or sets the web server id.
         */
        serverId?: pulumi.Input<string>;
        /**
         * Gets or sets the web server name.
         */
        serverName?: pulumi.Input<string>;
        /**
         * Gets or sets the server version.
         */
        version?: pulumi.Input<string>;
        /**
         * Gets or sets the list of web applications.
         */
        webApplications?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * IIS workload instance model custom properties.
     */
    export interface IISWorkloadInstanceModelCustomPropertiesArgs {
        /**
         * Gets or sets the container Id.
         */
        containerName?: pulumi.Input<string>;
        /**
         * Gets or sets the fileshare name.
         */
        fileshareName?: pulumi.Input<string>;
        /**
         * IISWeb application.
         */
        iisWebApplication?: pulumi.Input<IISWebApplicationArgs>;
        /**
         * Gets or sets the instance type.
         * Expected value is 'IISWorkloadInstanceModelCustomProperties'.
         */
        instanceType: pulumi.Input<"IISWorkloadInstanceModelCustomProperties">;
        /**
         * Gets or sets the Web application ARM id.
         */
        webAppArmId?: pulumi.Input<string>;
        /**
         * Gets or sets the Web application site name.
         */
        webAppSiteName?: pulumi.Input<string>;
    }

    /**
     * Identity model.
     */
    export interface IdentityModelArgs {
        /**
         * Gets or sets the authority of the SPN with which MigrateAgent communicates to service.
         */
        aadAuthority?: pulumi.Input<string>;
        /**
         * Gets or sets the client/application Id of the SPN with which MigrateAgent communicates to
         * service.
         */
        applicationId?: pulumi.Input<string>;
        /**
         * Gets or sets the audience of the SPN with which MigrateAgent communicates to service.
         */
        audience?: pulumi.Input<string>;
        /**
         * Gets or sets the object Id of the SPN with which MigrateAgent communicates to service.
         */
        objectId?: pulumi.Input<string>;
        /**
         * Gets or sets the tenant Id of the SPN with which MigrateAgent communicates to service.
         */
        tenantId?: pulumi.Input<string>;
    }

    export interface KeyVaultSecretStorePropertiesArgs {
        keyvaultName?: pulumi.Input<string>;
        managedIdentityProperties?: pulumi.Input<ManagedIdentityPropertiesArgs>;
        resourceGroup?: pulumi.Input<string>;
        secretStoreId?: pulumi.Input<string>;
        subscriptionId?: pulumi.Input<string>;
        tenantId?: pulumi.Input<string>;
    }

    export interface ManagedIdentityPropertiesArgs {
        clientId?: pulumi.Input<string>;
        managedIdentityName?: pulumi.Input<string>;
        principalId?: pulumi.Input<string>;
        resourceGroup?: pulumi.Input<string>;
        subscriptionId?: pulumi.Input<string>;
        tenantId?: pulumi.Input<string>;
    }

    /**
     * MigrateAgent model properties.
     */
    export interface MigrateAgentModelPropertiesArgs {
        /**
         * Identity model.
         */
        authenticationIdentity?: pulumi.Input<IdentityModelArgs>;
        /**
         * MigrateAgent model custom properties.
         */
        customProperties?: pulumi.Input<VMwareMigrateAgentModelCustomPropertiesArgs>;
        /**
         * Gets or sets the machine Id where MigrateAgent is running.
         */
        machineId?: pulumi.Input<string>;
        /**
         * Gets or sets the machine name where MigrateAgent is running.
         */
        machineName?: pulumi.Input<string>;
    }

    /**
     * MigrationConfiguration properties.
     */
    export interface MigrationConfigurationArgs {
        /**
         * Gets or sets the key vault resource Id.
         */
        keyVaultResourceId?: pulumi.Input<string>;
        /**
         * Gets or sets the migration solution resource Id.
         */
        migrationSolutionResourceId?: pulumi.Input<string>;
        /**
         * Gets or sets the storage account resource Id.
         */
        storageAccountResourceId?: pulumi.Input<string>;
    }

    /**
     * ModernizeProject properties.
     */
    export interface ModernizeProjectModelPropertiesArgs {
        /**
         * MigrationConfiguration properties.
         */
        migrationConfiguration?: pulumi.Input<MigrationConfigurationArgs>;
    }

    export interface OperatingSystemDetailsArgs {
        os?: pulumi.Input<string | enums.OperatingSystemType>;
        osArchitecture?: pulumi.Input<string>;
        osName?: pulumi.Input<string>;
        osVersion?: pulumi.Input<string>;
    }

    /**
     * WebApplication port mapping.
     */
    export interface PortMappingArgs {
        /**
         * Gets or sets the External Port.
         */
        externalPort?: pulumi.Input<number>;
        /**
         * Gets or sets the Internal Port.
         */
        internalPort?: pulumi.Input<number>;
    }

    export interface ResourceIdentityArgs {
        principalId?: pulumi.Input<string>;
        tenantId?: pulumi.Input<string>;
        type?: pulumi.Input<string | enums.ResourceIdentityTypes>;
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserAssignedIdentityArgs>}>;
    }

    /**
     * Resource Requirements.
     */
    export interface ResourceRequirementsArgs {
        /**
         * Gets or sets the Cpu requirement.
         */
        cpu?: pulumi.Input<string>;
        /**
         * Gets or sets the Memory requirement.
         */
        memory?: pulumi.Input<string>;
    }

    export interface SecretStoreDetailsArgs {
        secretStore?: pulumi.Input<string | enums.SecretStoreType>;
        secretStoreProperties?: pulumi.Input<SecretStorePropertiesArgs>;
    }

    export interface SecretStorePropertiesArgs {
        secretStoreId?: pulumi.Input<string>;
    }

    /**
     * Storage profile for the directory on the target container.
     */
    export interface TargetStorageProfileArgs {
        /**
         * Azure file share profile for hydration of application folders not mounted on
         * the container file system.
         */
        azureFileShareProfile?: pulumi.Input<AzureFileShareHydrationProfileArgs>;
        /**
         * Gets or sets the storage provider type on the target.
         * Applicable when StorageProjectionType is not ContainerFileSystem.
         */
        hydrationStorageProviderType?: pulumi.Input<string | enums.TargetHydrationStorageProviderType>;
        /**
         * Gets or sets the target persistent volume id.
         * Applicable when StorageProjectionType is PersistentVolume and on using an
         * existing PersistentVolume.
         */
        persistentVolumeId?: pulumi.Input<string>;
        /**
         * Gets or sets the target storage access type.
         */
        storageAccessType?: pulumi.Input<string | enums.TargetStorageAccessType>;
        /**
         * Gets or sets the target projection type.
         */
        storageProjectionType?: pulumi.Input<string | enums.TargetStorageProjectionType>;
        /**
         * Gets or sets the name of the projected volume on the target environment.
         */
        targetName?: pulumi.Input<string>;
        /**
         * Gets or sets the storage size on the target.
         * Applicable when StorageProjectionType is PersistentVolume and on creating a new
         * PersistentVolume.
         */
        targetSize?: pulumi.Input<string>;
    }

    export interface UserAssignedIdentityArgs {
        clientId?: pulumi.Input<string>;
        principalId?: pulumi.Input<string>;
    }

    /**
     * VMware MigrateAgent model custom properties.
     */
    export interface VMwareMigrateAgentModelCustomPropertiesArgs {
        /**
         * Gets or sets the friendly name of the,of the MigrateAgent fabric.
         */
        fabricFriendlyName?: pulumi.Input<string>;
        /**
         * Gets or sets the instance type.
         * Expected value is 'VMwareMigrateAgentModelCustomProperties'.
         */
        instanceType: pulumi.Input<"VMwareMigrateAgentModelCustomProperties">;
        /**
         * Gets or sets the master Site Id of the Migrate Agent.
         */
        vmwareSiteId?: pulumi.Input<string>;
    }

    /**
     * Class for web application configurations.
     */
    export interface WebApplicationConfigurationArgs {
        /**
         * Gets or sets the configuration file path.
         */
        filePath?: pulumi.Input<string>;
        /**
         * Gets or sets the identifier for the configuration.
         */
        identifier?: pulumi.Input<string>;
        /**
         * Gets or sets a value indicating whether the configuration is edited or not by the user.
         */
        isDeploymentTimeEditable?: pulumi.Input<boolean>;
        /**
         * Gets or sets the configuration local file path.
         */
        localFilePath?: pulumi.Input<string>;
        /**
         * Gets or sets the configuration name.
         */
        name?: pulumi.Input<string>;
        secretStoreDetails?: pulumi.Input<SecretStoreDetailsArgs>;
        /**
         * Gets or sets the configuration section in the file.
         */
        section?: pulumi.Input<string>;
        /**
         * Gets or sets the configuration target file path.
         */
        targetFilePath?: pulumi.Input<string>;
        /**
         * Gets or sets the configuration type.
         */
        type?: pulumi.Input<string | enums.ConfigurationType>;
        /**
         * Gets or sets the configuration value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * WebApplication directory structure.
     */
    export interface WebApplicationDirectoryArgs {
        /**
         * Gets or sets a value indicating whether the directory object is editable.
         * True when the directory is added as an optional directory, false when discovery is done
         * manually.
         */
        isEditable?: pulumi.Input<boolean>;
        /**
         * Gets or sets the paths of the directory on the source machine.
         */
        sourcePaths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Gets or sets the size of the directory on the source machine.
         */
        sourceSize?: pulumi.Input<string>;
        /**
         * Storage profile for the directory on the target container.
         */
        storageProfile?: pulumi.Input<TargetStorageProfileArgs>;
    }

    /**
     * Framework specific data for a web application.
     */
    export interface WebApplicationFrameworkArgs {
        /**
         * Gets or sets Name of the framework.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets or sets Version of the framework.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Workload deployment model properties.
     */
    export interface WorkloadDeploymentModelPropertiesArgs {
        /**
         * Workload deployment model custom properties.
         */
        customProperties?: pulumi.Input<ApacheTomcatAKSWorkloadDeploymentModelCustomPropertiesArgs | IISAKSWorkloadDeploymentModelCustomPropertiesArgs>;
        /**
         * Gets or sets the display name.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Gets or sets the deployment target platform.
         */
        targetPlatform?: pulumi.Input<string | enums.WorkloadDeploymentTarget>;
        /**
         * Workload instance model properties.
         */
        workloadInstanceProperties?: pulumi.Input<WorkloadInstanceModelPropertiesArgs>;
    }

    /**
     * Workload instance model properties.
     */
    export interface WorkloadInstanceModelPropertiesArgs {
        /**
         * Workload instance model custom properties.
         */
        customProperties?: pulumi.Input<ApacheTomcatWorkloadInstanceModelCustomPropertiesArgs | IISWorkloadInstanceModelCustomPropertiesArgs>;
        /**
         * Gets or sets the display name.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Gets or Sets the master site name.
         */
        masterSiteName?: pulumi.Input<string>;
        /**
         * Gets or sets the migrate agent id associated with the workload instance.
         */
        migrateAgentId?: pulumi.Input<string>;
        /**
         * Gets or sets the workload instance name.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets or sets the source name.
         */
        sourceName?: pulumi.Input<string>;
        /**
         * Gets or sets the source platform.
         */
        sourcePlatform?: pulumi.Input<string>;
    }
