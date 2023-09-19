import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Class for ACR Properties.
     */
    export interface ACRPropertiesResponse {
        /**
         * Gets or sets the azure container registry name.
         */
        registryName?: string;
        /**
         * Gets or sets the resource group of the resource.
         */
        resourceGroup?: string;
        /**
         * Gets or sets the subscription id of the resource.
         */
        subscriptionId?: string;
        /**
         * Gets or sets the tenant id.
         */
        tenantId?: string;
    }

    /**
     * Class for AKSDeployment Properties.
     */
    export interface AKSDeploymentPropertiesResponse {
        /**
         * Gets or sets the AKS cluster name.
         */
        aksClusterName?: string;
        /**
         * Gets or sets the resource group of the resource.
         */
        resourceGroup?: string;
        /**
         * Gets or sets the subscription id of the resource.
         */
        subscriptionId?: string;
        /**
         * Gets or sets the tenant id.
         */
        tenantId?: string;
    }

    /**
     * AKS Deployment Specification.
     */
    export interface AKSDeploymentSpecificationResponse {
        /**
         * Gets or sets the Merged Deployment and service Yaml.
         */
        kubernetesObjectsYaml?: string;
        /**
         * Gets or sets the load balancer type.
         */
        loadBalancerType?: string;
        /**
         * Gets or sets the replica count to be created in AKS.
         */
        replicaCount?: string;
    }

    /**
     * ApacheTomcat workload instance model custom properties.
     */
    export interface ApacheTomcatAKSWorkloadDeploymentModelCustomPropertiesResponse {
        /**
         * ApacheTomcat web application.
         */
        apacheTomcatAksWorkloadDeploymentProperties?: ApacheTomcatAKSWorkloadDeploymentResponse;
        /**
         * Gets or sets the instance type.
         * Expected value is 'ApacheTomcatAKSWorkloadDeploymentModelCustomProperties'.
         */
        instanceType: "ApacheTomcatAKSWorkloadDeploymentModelCustomProperties";
    }

    /**
     * ApacheTomcat web application.
     */
    export interface ApacheTomcatAKSWorkloadDeploymentResponse {
        /**
         * Class for automation artifact.
         */
        automationArtifactProperties?: AutomationArtifactResponse;
        /**
         * Gets or sets the bindings for the application.
         */
        bindings?: BindingResponse[];
        /**
         * Gets or sets the build container images.
         */
        buildContainerImages?: ContainerImagePropertiesResponse[];
        /**
         * Class for AKSDeployment Properties.
         */
        clusterProperties?: AKSDeploymentPropertiesResponse;
        /**
         * Gets or sets application configuration.
         */
        configurations?: WebApplicationConfigurationResponse[];
        /**
         * Class for container image properties.
         */
        containerImageProperties?: ContainerImagePropertiesResponse;
        /**
         * Gets or sets the deployment history.
         */
        deploymentHistory: DeployedResourcesPropertiesResponse[];
        /**
         * Gets or sets the deployment name prefix.
         */
        deploymentNamePrefix?: string;
        /**
         * AKS Deployment Specification.
         */
        deploymentSpec?: AKSDeploymentSpecificationResponse;
        /**
         * Gets or sets application directories.
         */
        directories?: WebApplicationDirectoryResponse[];
        /**
         * Resource Requirements.
         */
        limits?: ResourceRequirementsResponse;
        /**
         * Class for app insight monitoring properties.
         */
        monitoringProperties?: AppInsightMonitoringPropertiesResponse;
        /**
         * Resource Requirements.
         */
        requests?: ResourceRequirementsResponse;
        /**
         * Gets or sets the target platform managed identity.
         */
        targetPlatformIdentity?: string;
    }

    /**
     * ApacheTomcat web application.
     */
    export interface ApacheTomcatWebApplicationResponse {
        /**
         * Gets or sets the web application id.
         */
        applicationId?: string;
        /**
         * Gets or sets the web application name.
         */
        applicationName?: string;
        /**
         * Gets or sets application scratch path.
         */
        applicationScratchPath?: string;
        /**
         * Gets or sets the bindings for the application.
         */
        bindings?: BindingResponse[];
        /**
         * Gets or sets application configuration.
         */
        configurations?: WebApplicationConfigurationResponse[];
        /**
         * Gets or sets application directories.
         */
        directories?: WebApplicationDirectoryResponse[];
        /**
         * Gets or sets the discovered frameworks of application.
         */
        discoveredFrameworks?: WebApplicationFrameworkResponse[];
        /**
         * Gets or sets the display name.
         */
        displayName?: string;
        /**
         * Resource Requirements.
         */
        limits?: ResourceRequirementsResponse;
        /**
         * Second level entity for virtual directories.
         */
        path?: DirectoryPathResponse;
        /**
         * Framework specific data for a web application.
         */
        primaryFramework?: WebApplicationFrameworkResponse;
        /**
         * Resource Requirements.
         */
        requests?: ResourceRequirementsResponse;
        /**
         * Gets or sets the web server id.
         */
        webServerId?: string;
        /**
         * Gets or sets the web server name.
         */
        webServerName?: string;
    }

    /**
     * ApacheTomcat workload instance model custom properties.
     */
    export interface ApacheTomcatWorkloadInstanceModelCustomPropertiesResponse {
        /**
         * ApacheTomcat web application.
         */
        apacheTomcatWebApplication?: ApacheTomcatWebApplicationResponse;
        /**
         * Gets or sets the instance type.
         * Expected value is 'ApacheTomcatWorkloadInstanceModelCustomProperties'.
         */
        instanceType: "ApacheTomcatWorkloadInstanceModelCustomProperties";
        /**
         * Gets or sets the Web application ARM id.
         */
        webAppArmId?: string;
        /**
         * Gets or sets the Web application site name.
         */
        webAppSiteName?: string;
    }

    /**
     * Class for app insight monitoring properties.
     */
    export interface AppInsightMonitoringPropertiesResponse {
        /**
         * Gets or sets the app insights name.
         */
        appInsightsName?: string;
        /**
         * Gets or sets a value indicating whether monitoring is enabled.
         */
        isEnabled?: boolean;
        /**
         * Gets or sets the region.
         */
        region?: string;
        /**
         * Gets or sets the resource group of the resource.
         */
        resourceGroup?: string;
        secretStoreDetails?: SecretStoreDetailsResponse;
        /**
         * Gets or sets the subscription id of the resource.
         */
        subscriptionId?: string;
    }

    /**
     * Class for automation artifact.
     */
    export interface AutomationArtifactResponse {
        /**
         * Gets or sets the artifacts.
         */
        artifacts?: {[key: string]: string};
        /**
         * Azure file share profile for hydration of application folders not mounted on
         * the container file system.
         */
        azureFileShareProfile?: AzureFileShareHydrationProfileResponse;
        /**
         * Gets or sets the status of automation artifacts.
         */
        status?: string;
    }

    /**
     * Azure file share profile for hydration of application folders not mounted on
     * the container file system.
     */
    export interface AzureFileShareHydrationProfileResponse {
        /**
         * Gets or sets the cloud directory path of the directory on azure file share.
         */
        azureFileShareDirPath?: string;
        /**
         * Gets or sets the name of the azure file share.
         */
        azureFileShareName?: string;
        /**
         * Gets or sets the name of the azure file share resource group.
         */
        azureFileShareResourceGroup?: string;
        /**
         * Gets or sets the name of the azure file share storage account.
         */
        azureFileShareStorageAccount?: string;
        /**
         * Gets or sets the subscription id of the azure file share.
         */
        azureFileShareSubscriptionId?: string;
    }

    /**
     * Binding for a web application.
     */
    export interface BindingResponse {
        /**
         * WebApplication certificate.
         */
        cert?: CertResponse;
        /**
         * Gets or sets the binding host name.
         */
        hostName?: string;
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets or sets the IP Address.
         */
        ipAddress?: string;
        /**
         * Gets or sets the application port.
         */
        port?: string;
        /**
         * WebApplication port mapping.
         */
        portMapping?: PortMappingResponse;
        /**
         * Gets or sets the protocol.
         */
        protocol?: string;
    }

    /**
     * WebApplication certificate.
     */
    export interface CertResponse {
        /**
         * Gets or sets the Certificate data.
         */
        certData?: string;
        /**
         * Gets or sets a value indicating whether certificate is needed or not.
         */
        certNeeded?: boolean;
        /**
         * Gets or sets a value indicating whether certificate is provided or not.
         */
        certProvided?: boolean;
        /**
         * Gets or sets the type of secret store for the certificate.
         */
        secretStore?: string;
    }

    /**
     * Class for container image properties.
     */
    export interface ContainerImagePropertiesResponse {
        /**
         * Gets or sets the dockerfile for the container image.
         */
        dockerfile?: string;
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets or sets the container image name.
         */
        imageName?: string;
        /**
         * Gets or sets the container image tag.
         */
        imageTag?: string;
        /**
         * Class for ACR Properties.
         */
        registryProperties?: ACRPropertiesResponse;
        /**
         * Gets or sets the RunId.
         */
        runId?: string;
        /**
         * Gets or sets the RunStatus.
         */
        runStatus?: string;
    }

    /**
     * Class for deployed resource properties.
     */
    export interface DeployedResourcesPropertiesResponse {
        /**
         * Gets or sets the context of deployed resources.
         */
        context: string;
        /**
         * Gets or sets the deployed resource id.
         */
        deployedResourceId: string;
        /**
         * Gets or sets the deployment timestamp.
         */
        deploymentTimestamp: string;
        /**
         * Gets or sets the name of deployed resources.
         */
        displayName: string;
        /**
         * Gets or sets the ID.
         */
        id: string;
        /**
         * Gets or sets a value indicating whether resources are cleaned up from target.
         */
        isCleanUpDone: boolean;
        /**
         * Gets or sets a value indicating whether scenario is test migration.
         */
        isTestMigration: boolean;
        /**
         * Gets or sets the status of deployed resources.
         */
        status: string;
        /**
         * Gets or sets the type of deployed resources.
         */
        type: string;
    }

    /**
     * Second level entity for virtual directories.
     */
    export interface DirectoryPathResponse {
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets or sets the physical path of the directory on the web server.
         */
        physical?: string;
        /**
         * Gets or sets the virtual path for the directory.
         */
        virtual?: string;
    }

    /**
     * Class for GMSA authentication details to configure Active Directory connectivity.
     */
    export interface GmsaAuthenticationPropertiesResponse {
        /**
         * Gets or sets the list of dns server that can resolve the Active Directory Domain Name/Address.
         */
        adDomainControllerDns?: string;
        /**
         * Gets or sets the FQDN of the Active Directory Domain. For e.g. 'contoso.local', 'fareast.corp.microsoft.com' etc.
         */
        adDomainFqdn?: string;
        akvProperties?: KeyVaultSecretStorePropertiesResponse;
        /**
         * Gets or sets the current state of GMSA configuration.
         */
        configurationState: string;
        /**
         * Gets or sets the password of the user specified by RestApi.Controllers.V2022_05_01_preview.Models.WorkloadDeployment.Gmsa.GmsaAuthenticationProperties.DomainAdminUsername.
         */
        domainAdminPassword?: string;
        /**
         * Gets or sets the name of the user having admin rights on the Active Directory Domain Controller.
         */
        domainAdminUsername?: string;
        /**
         * Gets or sets the address of the Active Directory Domain Controller running Domain Services.
         */
        domainControllerAddress?: string;
        /**
         * Gets or sets the name to be used for GMSA.
         */
        gmsaAccountName?: string;
        /**
         * Gets Cred Spec Name to be used.
         */
        gmsaCredSpecName: string;
        /**
         * Gets name of the secret where GMSA secret is stored in the KeyVault.
         */
        gmsaSecretName: string;
        /**
         * Gets or sets the password of the user specified by RestApi.Controllers.V2022_05_01_preview.Models.WorkloadDeployment.Gmsa.GmsaAuthenticationProperties.GmsaUsername.
         */
        gmsaUserPassword?: string;
        /**
         * Gets or sets username of the user having authorization to access GMSA on Active Directory.
         */
        gmsaUsername?: string;
    }

    /**
     * Health error model.
     */
    export interface HealthErrorModelResponse {
        /**
         * Gets or sets the list of affected resource correlation Ids. This can be used to
         * uniquely identify the count of items affected by a specific category and severity
         * as well as count of item affected by an specific issue.
         */
        affectedResourceCorrelationIds?: string[];
        /**
         * Gets or sets the type of affected resource type.
         */
        affectedResourceType?: string;
        /**
         * Gets or sets the error category.
         */
        category: string;
        /**
         * Gets or sets possible causes of the error.
         */
        causes: string;
        /**
         * Gets or sets a list of child health errors associated with this error.
         */
        childErrors?: InnerHealthErrorModelResponse[];
        /**
         * Gets or sets the error code.
         */
        code: string;
        /**
         * Gets or sets the error creation time.
         */
        creationTime: string;
        /**
         * Gets or sets the health category.
         */
        healthCategory: string;
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets or sets a value indicating whether the error is customer resolvable.
         */
        isCustomerResolvable: boolean;
        /**
         * Gets or sets the error message.
         */
        message: string;
        /**
         * Gets or sets recommended action to resolve the error.
         */
        recommendation: string;
        /**
         * Gets or sets the error severity.
         */
        severity: string;
        /**
         * Gets or sets the error source.
         */
        source: string;
        /**
         * Gets or sets the error summary.
         */
        summary: string;
    }

    /**
     * IIS workload instance model custom properties.
     */
    export interface IISAKSWorkloadDeploymentModelCustomPropertiesResponse {
        /**
         * IIS AKS workload deployment.
         */
        iisAksWorkloadDeploymentProperties?: IISAKSWorkloadDeploymentResponse;
        /**
         * Gets or sets the instance type.
         * Expected value is 'IISAKSWorkloadDeploymentModelCustomProperties'.
         */
        instanceType: "IISAKSWorkloadDeploymentModelCustomProperties";
    }

    /**
     * IIS AKS workload deployment.
     */
    export interface IISAKSWorkloadDeploymentResponse {
        /**
         * Class for GMSA authentication details to configure Active Directory connectivity.
         */
        authenticationProperties?: GmsaAuthenticationPropertiesResponse;
        /**
         * Class for automation artifact.
         */
        automationArtifactProperties?: AutomationArtifactResponse;
        /**
         * Gets or sets the bindings for the application.
         */
        bindings?: BindingResponse[];
        /**
         * Gets or sets the build container images.
         */
        buildContainerImages?: ContainerImagePropertiesResponse[];
        /**
         * Class for AKSDeployment Properties.
         */
        clusterProperties?: AKSDeploymentPropertiesResponse;
        /**
         * Gets or sets application configuration.
         */
        configurations?: WebApplicationConfigurationResponse[];
        /**
         * Class for container image properties.
         */
        containerImageProperties?: ContainerImagePropertiesResponse;
        /**
         * Gets or sets the deployment history.
         */
        deploymentHistory: DeployedResourcesPropertiesResponse[];
        /**
         * Gets or sets the deployment name prefix.
         */
        deploymentNamePrefix?: string;
        /**
         * AKS Deployment Specification.
         */
        deploymentSpec?: AKSDeploymentSpecificationResponse;
        /**
         * Gets or sets application directories.
         */
        directories?: WebApplicationDirectoryResponse[];
        /**
         * Resource Requirements.
         */
        limits?: ResourceRequirementsResponse;
        /**
         * Class for app insight monitoring properties.
         */
        monitoringProperties?: AppInsightMonitoringPropertiesResponse;
        /**
         * Resource Requirements.
         */
        requests?: ResourceRequirementsResponse;
        /**
         * Gets or sets the target platform managed identity.
         */
        targetPlatformIdentity?: string;
    }

    /**
     * IISApplication details.
     */
    export interface IISApplicationDetailsResponse {
        /**
         * Gets or sets the application pool name.
         */
        applicationPoolName?: string;
        /**
         * Gets or sets the list of directories.
         */
        directories?: DirectoryPathResponse[];
        /**
         * Gets or sets a value indicating whether 32 bit applications are allowed to run on 64 bit.
         */
        enable32BitApiOnWin64?: boolean;
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets or sets the managed pipeline mode.
         */
        managedPipelineMode?: string;
        /**
         * Second level entity for virtual directories.
         */
        path?: DirectoryPathResponse;
        /**
         * Gets or sets the runtime version.
         */
        runtimeVersion?: string;
    }

    /**
     * IIS virtual application details.
     */
    export interface IISVirtualApplicationDetailsResponse {
        /**
         * Gets or sets the list of directories.
         */
        directories?: DirectoryPathResponse[];
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets a value indicating whether the application corresponds to a directory.
         */
        isVirtualDirectory: boolean;
        /**
         * Second level entity for virtual directories.
         */
        path?: DirectoryPathResponse;
    }

    /**
     * IISWeb application.
     */
    export interface IISWebApplicationResponse {
        /**
         * Gets or sets the web application id.
         */
        applicationId?: string;
        /**
         * Gets or sets the web application name.
         */
        applicationName?: string;
        /**
         * Gets or sets application scratch path.
         */
        applicationScratchPath?: string;
        /**
         * Gets or sets the list of applications for the IIS web site.
         */
        applications?: IISApplicationDetailsResponse[];
        /**
         * Gets or sets the bindings for the application.
         */
        bindings?: BindingResponse[];
        /**
         * Gets or sets application configuration.
         */
        configurations?: WebApplicationConfigurationResponse[];
        /**
         * Gets or sets application directories.
         */
        directories?: WebApplicationDirectoryResponse[];
        /**
         * Gets or sets the discovered frameworks of application.
         */
        discoveredFrameworks?: WebApplicationFrameworkResponse[];
        /**
         * Gets or sets the display name.
         */
        displayName?: string;
        /**
         * IISWeb server.
         */
        iisWebServer?: IISWebServerResponse;
        /**
         * Resource Requirements.
         */
        limits?: ResourceRequirementsResponse;
        /**
         * Second level entity for virtual directories.
         */
        path?: DirectoryPathResponse;
        /**
         * Framework specific data for a web application.
         */
        primaryFramework?: WebApplicationFrameworkResponse;
        /**
         * Resource Requirements.
         */
        requests?: ResourceRequirementsResponse;
        /**
         * Gets or sets the list of application units for the web site.
         */
        virtualApplications?: IISVirtualApplicationDetailsResponse[];
        /**
         * Gets or sets the web server id.
         */
        webServerId?: string;
        /**
         * Gets or sets the web server name.
         */
        webServerName?: string;
    }

    /**
     * IISWeb server.
     */
    export interface IISWebServerResponse {
        /**
         * Gets or sets the display name.
         */
        displayName?: string;
        /**
         * Gets or sets list of ip addresses.
         */
        ipAddresses?: string[];
        /**
         * Gets or sets the list of machines.
         */
        machines?: string[];
        operatingSystemDetails?: OperatingSystemDetailsResponse;
        /**
         * Gets or sets the server root configuration location.
         */
        rootConfigurationLocation?: string;
        /**
         * Gets or sets the run as account id.
         */
        runAsAccountId?: string;
        /**
         * Gets or sets the server FQDN.
         */
        serverFqdn?: string;
        /**
         * Gets or sets the web server id.
         */
        serverId?: string;
        /**
         * Gets or sets the web server name.
         */
        serverName?: string;
        /**
         * Gets or sets the server version.
         */
        version?: string;
        /**
         * Gets or sets the list of web applications.
         */
        webApplications?: string[];
    }

    /**
     * IIS workload instance model custom properties.
     */
    export interface IISWorkloadInstanceModelCustomPropertiesResponse {
        /**
         * Gets or sets the container Id.
         */
        containerName?: string;
        /**
         * Gets or sets the fileshare name.
         */
        fileshareName?: string;
        /**
         * IISWeb application.
         */
        iisWebApplication?: IISWebApplicationResponse;
        /**
         * Gets or sets the instance type.
         * Expected value is 'IISWorkloadInstanceModelCustomProperties'.
         */
        instanceType: "IISWorkloadInstanceModelCustomProperties";
        /**
         * Gets or sets the Web application ARM id.
         */
        webAppArmId?: string;
        /**
         * Gets or sets the Web application site name.
         */
        webAppSiteName?: string;
    }

    /**
     * Identity model.
     */
    export interface IdentityModelResponse {
        /**
         * Gets or sets the authority of the SPN with which MigrateAgent communicates to service.
         */
        aadAuthority?: string;
        /**
         * Gets or sets the client/application Id of the SPN with which MigrateAgent communicates to
         * service.
         */
        applicationId?: string;
        /**
         * Gets or sets the audience of the SPN with which MigrateAgent communicates to service.
         */
        audience?: string;
        /**
         * Gets or sets the object Id of the SPN with which MigrateAgent communicates to service.
         */
        objectId?: string;
        /**
         * Gets or sets the tenant Id of the SPN with which MigrateAgent communicates to service.
         */
        tenantId?: string;
    }

    /**
     * Inner health error model.
     */
    export interface InnerHealthErrorModelResponse {
        /**
         * Gets or sets the error category.
         */
        category: string;
        /**
         * Gets or sets possible causes of the error.
         */
        causes: string;
        /**
         * Gets or sets the error code.
         */
        code: string;
        /**
         * Gets or sets the error creation time.
         */
        creationTime: string;
        /**
         * Gets or sets the health category.
         */
        healthCategory: string;
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets or sets a value indicating whether the error is customer resolvable.
         */
        isCustomerResolvable: boolean;
        /**
         * Gets or sets the error message.
         */
        message: string;
        /**
         * Gets or sets recommended action to resolve the error.
         */
        recommendation: string;
        /**
         * Gets or sets the error severity.
         */
        severity: string;
        /**
         * Gets or sets the error source.
         */
        source: string;
        /**
         * Gets or sets the error summary.
         */
        summary: string;
    }

    export interface KeyVaultSecretStorePropertiesResponse {
        inputType: string;
        keyvaultName?: string;
        managedIdentityProperties?: ManagedIdentityPropertiesResponse;
        resourceGroup?: string;
        secretStoreId?: string;
        subscriptionId?: string;
        tenantId?: string;
    }

    export interface ManagedIdentityPropertiesResponse {
        clientId?: string;
        managedIdentityName?: string;
        principalId?: string;
        resourceGroup?: string;
        subscriptionId?: string;
        tenantId?: string;
    }

    /**
     * MigrateAgent model properties.
     */
    export interface MigrateAgentModelPropertiesResponse {
        /**
         * Identity model.
         */
        authenticationIdentity?: IdentityModelResponse;
        /**
         * Gets or sets the MigrateAgent correlation Id.
         */
        correlationId: string;
        /**
         * MigrateAgent model custom properties.
         */
        customProperties?: VMwareMigrateAgentModelCustomPropertiesResponse;
        /**
         * Gets or sets the list of health errors.
         */
        healthErrors: HealthErrorModelResponse[];
        /**
         * Gets or sets a value indicating whether MigrateAgent is responsive.
         */
        isResponsive: boolean;
        /**
         * Gets or sets the time when last heartbeat was sent by the MigrateAgent.
         */
        lastHeartbeat: string;
        /**
         * Gets or sets the machine Id where MigrateAgent is running.
         */
        machineId?: string;
        /**
         * Gets or sets the machine name where MigrateAgent is running.
         */
        machineName?: string;
        /**
         * Gets or sets the provisioning state of the MigrateAgent.
         */
        provisioningState: string;
        /**
         * Gets or sets the MigrateAgent version.
         */
        versionNumber: string;
    }

    export interface MigrateAgentModelResponseSystemData {
        /**
         * Gets or sets the timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * Gets or sets identity that created the resource.
         */
        createdBy?: string;
        /**
         * Gets or sets the type of identity that created the resource: user, application,
         * managedIdentity.
         */
        createdByType?: string;
        /**
         * Gets or sets the timestamp of resource last modification (UTC).
         */
        lastModifiedAt?: string;
        /**
         * Gets or sets the identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * Gets or sets the type of identity that last modified the resource: user, application,
         * managedIdentity.
         */
        lastModifiedByType?: string;
    }

    /**
     * MigrationConfiguration properties.
     */
    export interface MigrationConfigurationResponse {
        /**
         * Gets or sets the key vault resource Id.
         */
        keyVaultResourceId?: string;
        /**
         * Gets or sets the migration solution resource Id.
         */
        migrationSolutionResourceId?: string;
        /**
         * Gets or sets the storage account resource Id.
         */
        storageAccountResourceId?: string;
    }

    /**
     * ModernizeProject properties.
     */
    export interface ModernizeProjectModelPropertiesResponse {
        /**
         * MigrationConfiguration properties.
         */
        migrationConfiguration?: MigrationConfigurationResponse;
        /**
         * Gets or sets the provisioning state of the ModernizeProject.
         */
        provisioningState: string;
        /**
         * Gets or sets the service endpoint.
         */
        serviceEndpoint: string;
        /**
         * Gets or sets the service resource Id.
         */
        serviceResourceId: string;
    }

    export interface ModernizeProjectModelResponseSystemData {
        /**
         * Gets or sets the timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * Gets or sets identity that created the resource.
         */
        createdBy?: string;
        /**
         * Gets or sets the type of identity that created the resource: user, application,
         * managedIdentity.
         */
        createdByType?: string;
        /**
         * Gets or sets the timestamp of resource last modification (UTC).
         */
        lastModifiedAt?: string;
        /**
         * Gets or sets the identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * Gets or sets the type of identity that last modified the resource: user, application,
         * managedIdentity.
         */
        lastModifiedByType?: string;
    }

    export interface OperatingSystemDetailsResponse {
        os?: string;
        osArchitecture?: string;
        osName?: string;
        osVersion?: string;
    }

    /**
     * WebApplication port mapping.
     */
    export interface PortMappingResponse {
        /**
         * Gets or sets the External Port.
         */
        externalPort?: number;
        /**
         * Gets or sets the Internal Port.
         */
        internalPort?: number;
    }

    export interface ResourceIdentityResponse {
        principalId?: string;
        tenantId?: string;
        type?: string;
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Resource Requirements.
     */
    export interface ResourceRequirementsResponse {
        /**
         * Gets or sets the Cpu requirement.
         */
        cpu?: string;
        /**
         * Gets or sets the Memory requirement.
         */
        memory?: string;
    }

    export interface SecretStoreDetailsResponse {
        secretStore?: string;
        secretStoreProperties?: SecretStorePropertiesResponse;
    }

    export interface SecretStorePropertiesResponse {
        inputType: string;
        secretStoreId?: string;
    }

    /**
     * Storage profile for the directory on the target container.
     */
    export interface TargetStorageProfileResponse {
        /**
         * Azure file share profile for hydration of application folders not mounted on
         * the container file system.
         */
        azureFileShareProfile?: AzureFileShareHydrationProfileResponse;
        /**
         * Gets or sets the storage provider type on the target.
         * Applicable when StorageProjectionType is not ContainerFileSystem.
         */
        hydrationStorageProviderType?: string;
        /**
         * Gets or sets the target persistent volume id.
         * Applicable when StorageProjectionType is PersistentVolume and on using an
         * existing PersistentVolume.
         */
        persistentVolumeId?: string;
        /**
         * Gets or sets the target storage access type.
         */
        storageAccessType?: string;
        /**
         * Gets or sets the target projection type.
         */
        storageProjectionType?: string;
        /**
         * Gets or sets the name of the projected volume on the target environment.
         */
        targetName?: string;
        /**
         * Gets or sets the storage size on the target.
         * Applicable when StorageProjectionType is PersistentVolume and on creating a new
         * PersistentVolume.
         */
        targetSize?: string;
    }

    export interface UserAssignedIdentityResponse {
        clientId?: string;
        principalId?: string;
    }

    /**
     * VMware MigrateAgent model custom properties.
     */
    export interface VMwareMigrateAgentModelCustomPropertiesResponse {
        /**
         * Gets or sets the friendly name of the,of the MigrateAgent fabric.
         */
        fabricFriendlyName?: string;
        /**
         * Gets or sets the instance type.
         * Expected value is 'VMwareMigrateAgentModelCustomProperties'.
         */
        instanceType: "VMwareMigrateAgentModelCustomProperties";
        /**
         * Gets or sets the master Site Id of the Migrate Agent.
         */
        vmwareSiteId?: string;
    }

    /**
     * Class for web application configurations.
     */
    export interface WebApplicationConfigurationResponse {
        /**
         * Gets or sets the configuration file path.
         */
        filePath?: string;
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets or sets the identifier for the configuration.
         */
        identifier?: string;
        /**
         * Gets or sets a value indicating whether the configuration is edited or not by the user.
         */
        isDeploymentTimeEditable?: boolean;
        /**
         * Gets or sets the configuration local file path.
         */
        localFilePath?: string;
        /**
         * Gets or sets the configuration name.
         */
        name?: string;
        secretStoreDetails?: SecretStoreDetailsResponse;
        /**
         * Gets or sets the configuration section in the file.
         */
        section?: string;
        /**
         * Gets or sets the configuration target file path.
         */
        targetFilePath?: string;
        /**
         * Gets or sets the configuration type.
         */
        type?: string;
        /**
         * Gets or sets the configuration value.
         */
        value?: string;
    }

    /**
     * WebApplication directory structure.
     */
    export interface WebApplicationDirectoryResponse {
        /**
         * Gets the unique id corresponding to the application directory.
         */
        id: string;
        /**
         * Gets or sets a value indicating whether the directory object is editable.
         * True when the directory is added as an optional directory, false when discovery is done
         * manually.
         */
        isEditable?: boolean;
        /**
         * Gets or sets the paths of the directory on the source machine.
         */
        sourcePaths?: string[];
        /**
         * Gets or sets the size of the directory on the source machine.
         */
        sourceSize?: string;
        /**
         * Storage profile for the directory on the target container.
         */
        storageProfile?: TargetStorageProfileResponse;
    }

    /**
     * Framework specific data for a web application.
     */
    export interface WebApplicationFrameworkResponse {
        /**
         * Gets the ID.
         */
        id: string;
        /**
         * Gets or sets Name of the framework.
         */
        name?: string;
        /**
         * Gets or sets Version of the framework.
         */
        version?: string;
    }

    /**
     * Workload deployment model properties.
     */
    export interface WorkloadDeploymentModelPropertiesResponse {
        /**
         * Gets or sets the allowed scenarios on the workload deployment.
         */
        allowedOperations: string[];
        /**
         * Gets or sets the workload deployment correlation Id.
         */
        correlationId: string;
        currentJob: WorkloadDeploymentModelPropertiesResponseCurrentJob;
        /**
         * Workload deployment model custom properties.
         */
        customProperties?: ApacheTomcatAKSWorkloadDeploymentModelCustomPropertiesResponse | IISAKSWorkloadDeploymentModelCustomPropertiesResponse;
        /**
         * Gets or sets the display name.
         */
        displayName?: string;
        /**
         * Gets or sets the list of health errors.
         */
        healthErrors: HealthErrorModelResponse[];
        /**
         * Gets or sets the Last successful unplanned migrate time.
         */
        lastSuccessfulMigrateTime: string;
        /**
         * Gets or sets the Last successful test migrate time.
         */
        lastSuccessfulTestMigrateTime: string;
        /**
         * Gets or sets the migrate state.
         */
        migrationStatus: string;
        /**
         * Gets or sets the migrate state description.
         */
        migrationStatusDescription: string;
        /**
         * Gets or sets the provisioning state of the workload deployment.
         */
        provisioningState: string;
        /**
         * Gets or sets the workload deployment status.
         */
        status: string;
        /**
         * Gets or sets the workload deployment status description.
         */
        statusDescription: string;
        /**
         * Gets or sets the deployment target platform.
         */
        targetPlatform?: string;
        /**
         * Gets or sets the test migrate state.
         */
        testMigrationStatus: string;
        /**
         * Gets or sets the Test migrate state description.
         */
        testMigrationStatusDescription: string;
        /**
         * Workload instance model properties.
         */
        workloadInstanceProperties?: WorkloadInstanceModelPropertiesResponse;
    }

    export interface WorkloadDeploymentModelPropertiesResponseCurrentJob {
        /**
         * Gets or sets the workflow friendly display name.
         */
        displayName: string;
        /**
         * Gets or sets end time of the workflow.
         */
        endTime: string;
        /**
         * Gets or sets workflow Id.
         */
        id: string;
        /**
         * Gets or sets workflow name.
         */
        name: string;
        /**
         * Gets or sets workload scenario name.
         */
        scenarioName: string;
        /**
         * Gets or sets start time of the workflow.
         */
        startTime: string;
        /**
         * Gets or sets workflow state.
         */
        state: string;
    }

    export interface WorkloadDeploymentModelResponseSystemData {
        /**
         * Gets or sets the timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * Gets or sets identity that created the resource.
         */
        createdBy?: string;
        /**
         * Gets or sets the type of identity that created the resource: user, application,
         * managedIdentity.
         */
        createdByType?: string;
        /**
         * Gets or sets the timestamp of resource last modification (UTC).
         */
        lastModifiedAt?: string;
        /**
         * Gets or sets the identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * Gets or sets the type of identity that last modified the resource: user, application,
         * managedIdentity.
         */
        lastModifiedByType?: string;
    }

    /**
     * Workload instance model properties.
     */
    export interface WorkloadInstanceModelPropertiesResponse {
        /**
         * Gets or sets the allowed scenarios on the workload instance.
         */
        allowedOperations: string[];
        currentJob: WorkloadInstanceModelPropertiesResponseCurrentJob;
        /**
         * Workload instance model custom properties.
         */
        customProperties?: ApacheTomcatWorkloadInstanceModelCustomPropertiesResponse | IISWorkloadInstanceModelCustomPropertiesResponse;
        /**
         * Gets or sets the display name.
         */
        displayName?: string;
        /**
         * Gets or sets the list of health errors.
         */
        healthErrors: HealthErrorModelResponse[];
        /**
         * Gets or sets the Last successful replication cycle time.
         */
        lastSuccessfulReplicationCycleTime: string;
        /**
         * Gets or Sets the master site name.
         */
        masterSiteName?: string;
        /**
         * Gets or sets the migrate agent id associated with the workload instance.
         */
        migrateAgentId?: string;
        /**
         * Gets or sets the workload instance name.
         */
        name?: string;
        /**
         * Gets or sets the provisioning state of the workload instance.
         */
        provisioningState: string;
        /**
         * Gets or sets the replication health of the workload instance.
         */
        replicationHealth: string;
        /**
         * Gets or sets the replication state of the workload instance.
         */
        replicationStatus: string;
        /**
         * Gets or sets the workload replication state description.
         */
        replicationStatusDescription: string;
        /**
         * Gets or sets the source name.
         */
        sourceName?: string;
        /**
         * Gets or sets the source platform.
         */
        sourcePlatform?: string;
    }

    export interface WorkloadInstanceModelPropertiesResponseCurrentJob {
        /**
         * Gets or sets the workflow friendly display name.
         */
        displayName: string;
        /**
         * Gets or sets end time of the workflow.
         */
        endTime: string;
        /**
         * Gets or sets workflow Id.
         */
        id: string;
        /**
         * Gets or sets workflow name.
         */
        name: string;
        /**
         * Gets or sets workload scenario name.
         */
        scenarioName: string;
        /**
         * Gets or sets start time of the workflow.
         */
        startTime: string;
        /**
         * Gets or sets workflow state.
         */
        state: string;
    }

    export interface WorkloadInstanceModelResponseSystemData {
        /**
         * Gets or sets the timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * Gets or sets identity that created the resource.
         */
        createdBy?: string;
        /**
         * Gets or sets the type of identity that created the resource: user, application,
         * managedIdentity.
         */
        createdByType?: string;
        /**
         * Gets or sets the timestamp of resource last modification (UTC).
         */
        lastModifiedAt?: string;
        /**
         * Gets or sets the identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * Gets or sets the type of identity that last modified the resource: user, application,
         * managedIdentity.
         */
        lastModifiedByType?: string;
    }
