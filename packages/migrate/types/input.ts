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
 * Data model of AKS Assessment Settings.
 */
export interface AKSAssessmentSettingsArgs {
    /**
     * Gets or sets azure location.
     */
    azureLocation: pulumi.Input<string>;
    /**
     * Gets or sets azure VM category.
     */
    category: pulumi.Input<string | enums.AzureVmCategory>;
    /**
     * Gets or sets consolidation type.
     */
    consolidation: pulumi.Input<string | enums.ConsolidationType>;
    /**
     * Gets or sets currency.
     */
    currency: pulumi.Input<string | enums.AzureCurrency>;
    /**
     * Gets or sets discount percentage.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Gets or sets environment type.
     */
    environmentType: pulumi.Input<string | enums.AzureEnvironmentType>;
    /**
     * Gets or sets licensing program.
     */
    licensingProgram: pulumi.Input<string | enums.LicensingProgram>;
    /**
     * Gets or sets performance data settings.
     */
    performanceData?: pulumi.Input<PerfDataSettingsArgs>;
    /**
     * Gets or sets pricing tier.
     */
    pricingTier: pulumi.Input<string | enums.PricingTier>;
    /**
     * Gets or sets savings options.
     */
    savingsOptions: pulumi.Input<string | enums.SavingsOptions>;
    /**
     * Gets or sets scaling factor.
     */
    scalingFactor?: pulumi.Input<number>;
    /**
     * Gets or sets sizing criteria.
     */
    sizingCriteria: pulumi.Input<string | enums.AssessmentSizingCriterion>;
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
 * App service container settings.
 */
export interface AppSvcContainerSettingsArgs {
    /**
     * Gets or sets the isolation required.
     */
    isolationRequired: pulumi.Input<boolean>;
}

/**
 * App service native settings.
 */
export interface AppSvcNativeSettingsArgs {
    /**
     * Gets or sets the isolation required.
     */
    isolationRequired: pulumi.Input<boolean>;
}

/**
 * Properties of an assessment.
 */
export interface AssessmentPropertiesArgs {
    /**
     * Storage type selected for this disk.
     */
    azureDiskType: pulumi.Input<string | enums.AzureDiskType>;
    /**
     * AHUB discount on windows virtual machines.
     */
    azureHybridUseBenefit: pulumi.Input<string | enums.AzureHybridUseBenefit>;
    /**
     * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
     */
    azureLocation: pulumi.Input<string | enums.AzureLocation>;
    /**
     * Offer code according to which cost estimation is done.
     */
    azureOfferCode: pulumi.Input<string | enums.AzureOfferCode>;
    /**
     * Pricing tier for Size evaluation.
     */
    azurePricingTier: pulumi.Input<string | enums.AzurePricingTier>;
    /**
     * Storage Redundancy type offered by Azure.
     */
    azureStorageRedundancy: pulumi.Input<string | enums.AzureStorageRedundancy>;
    /**
     * List of azure VM families.
     */
    azureVmFamilies: pulumi.Input<pulumi.Input<string | enums.AzureVmFamily>[]>;
    /**
     * Currency to report prices in.
     */
    currency: pulumi.Input<string | enums.Currency>;
    /**
     * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
     */
    discountPercentage: pulumi.Input<number>;
    /**
     * Percentile of performance data used to recommend Azure size.
     */
    percentile: pulumi.Input<string | enums.Percentile>;
    /**
     * Azure reserved instance.
     */
    reservedInstance: pulumi.Input<string | enums.ReservedInstance>;
    /**
     * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
     */
    scalingFactor: pulumi.Input<number>;
    /**
     * Assessment sizing criterion.
     */
    sizingCriterion: pulumi.Input<string | enums.AssessmentSizingCriterion>;
    /**
     * User configurable setting that describes the status of the assessment.
     */
    stage: pulumi.Input<string | enums.AssessmentStage>;
    /**
     * Time range of performance data used to recommend a size.
     */
    timeRange: pulumi.Input<string | enums.TimeRange>;
    /**
     * Specify the duration for which the VMs are up in the on-premises environment.
     */
    vmUptime: pulumi.Input<VmUptimeArgs>;
}

/**
 * Data model of Assessment Scope Parameters.
 */
export interface AssessmentScopeParametersArgs {
    /**
     * Gets or sets the server group id.
     */
    serverGroupId?: pulumi.Input<string>;
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
 * Gets or sets the availability set resource settings.
 */
export interface AvailabilitySetResourceSettingsArgs {
    /**
     * Gets or sets the target fault domain.
     */
    faultDomain?: pulumi.Input<number>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Compute/availabilitySets'.
     */
    resourceType: pulumi.Input<"Microsoft.Compute/availabilitySets">;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
    /**
     * Gets or sets the target update domain.
     */
    updateDomain?: pulumi.Input<number>;
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
 * Azure settings for a business case.
 */
export interface AzureSettingsArgs {
    /**
     * Gets Avs labour cost percentage.
     */
    avsLaborCostPercentage?: pulumi.Input<number>;
    /**
     * Migration Strategy.
     */
    businessCaseType?: pulumi.Input<string | enums.MigrationStrategy>;
    /**
     * Gets comfort factor.
     */
    comfortFactor?: pulumi.Input<number>;
    /**
     * Business case Currency.
     */
    currency: pulumi.Input<string | enums.BusinessCaseCurrency>;
    /**
     * Gets azure Discount percentage.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Gets IaaS labour cost percentage.
     */
    iaasLaborCostPercentage?: pulumi.Input<number>;
    /**
     * Gets infrastructure growth rate.
     */
    infrastructureGrowthRate?: pulumi.Input<number>;
    /**
     * Gets network cost percentage.
     */
    networkCostPercentage?: pulumi.Input<number>;
    /**
     * Gets PaaS labour cost percentage.
     */
    paasLaborCostPercentage?: pulumi.Input<number>;
    /**
     * Gets migration completion percentage per year.
     */
    perYearMigrationCompletionPercentage?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
    /**
     * Gets end time to use for performance.
     */
    performanceDataEndTime?: pulumi.Input<string>;
    /**
     * Gets start time to use for performance.
     */
    performanceDataStartTime?: pulumi.Input<string>;
    /**
     * Gets utilization percentile for performance.
     */
    performanceUtilizationPercentile?: pulumi.Input<number>;
    /**
     * Gets the business case savings option type.
     */
    savingsOption?: pulumi.Input<string | enums.SavingsOption>;
    /**
     * Gets or sets azure location.
     */
    targetLocation: pulumi.Input<string>;
    /**
     * Gets wACC percentage.
     */
    wacc?: pulumi.Input<number>;
    /**
     * Workload discovery source.
     */
    workloadDiscoverySource?: pulumi.Input<string | enums.DiscoverySource>;
}
/**
 * azureSettingsArgsProvideDefaults sets the appropriate defaults for AzureSettingsArgs
 */
export function azureSettingsArgsProvideDefaults(val: AzureSettingsArgs): AzureSettingsArgs {
    return {
        ...val,
        avsLaborCostPercentage: (val.avsLaborCostPercentage) ?? 75,
        businessCaseType: (val.businessCaseType) ?? "OptimizeForCost",
        comfortFactor: (val.comfortFactor) ?? 1,
        currency: (val.currency) ?? "USD",
        iaasLaborCostPercentage: (val.iaasLaborCostPercentage) ?? 75,
        infrastructureGrowthRate: (val.infrastructureGrowthRate) ?? 5,
        networkCostPercentage: (val.networkCostPercentage) ?? 5,
        paasLaborCostPercentage: (val.paasLaborCostPercentage) ?? 60,
        performanceUtilizationPercentile: (val.performanceUtilizationPercentile) ?? 95,
        savingsOption: (val.savingsOption) ?? "RI3Year",
        workloadDiscoverySource: (val.workloadDiscoverySource) ?? "Appliance",
    };
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

export interface CollectorAgentPropertiesArgs {
    spnDetails?: pulumi.Input<CollectorBodyAgentSpnPropertiesArgs>;
}

/**
 * Collector agent property class.
 */
export interface CollectorAgentPropertiesBaseArgs {
    /**
     * Gets the collector agent id.
     */
    id?: pulumi.Input<string>;
    /**
     * Gets the collector last heartbeat time.
     */
    lastHeartbeatUtc?: pulumi.Input<string>;
    /**
     * Gets or sets the SPN details.
     */
    spnDetails?: pulumi.Input<CollectorAgentSpnPropertiesBaseArgs>;
    /**
     * Gets the collector agent version.
     */
    version?: pulumi.Input<string>;
}

/**
 * Collector agent SPN details class.
 */
export interface CollectorAgentSpnPropertiesBaseArgs {
    /**
     * Gets the AAD application id.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * Gets the AAD audience url.
     */
    audience?: pulumi.Input<string>;
    /**
     * Gets the AAD authority endpoint.
     */
    authority?: pulumi.Input<string>;
    /**
     * Gets the object id of the AAD application.
     */
    objectId?: pulumi.Input<string>;
    /**
     * Gets the tenant id of the AAD application.
     */
    tenantId?: pulumi.Input<string>;
}

export interface CollectorBodyAgentSpnPropertiesArgs {
    /**
     * Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * Intended audience for the service principal.
     */
    audience?: pulumi.Input<string>;
    /**
     * AAD Authority URL which was used to request the token for the service principal.
     */
    authority?: pulumi.Input<string>;
    /**
     * Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    objectId?: pulumi.Input<string>;
    /**
     * Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    tenantId?: pulumi.Input<string>;
}

export interface CollectorPropertiesArgs {
    agentProperties?: pulumi.Input<CollectorAgentPropertiesArgs>;
    /**
     * The ARM id of the discovery service site.
     */
    discoverySiteId?: pulumi.Input<string>;
}

/**
 * Compute settings.
 */
export interface ComputeSettingsArgs {
    /**
     * Hyperthread core to memory ratio.
     */
    hyperthreadCoreToMemoryRatio: pulumi.Input<number>;
    /**
     * Compute Price.
     */
    price: pulumi.Input<number>;
    /**
     * Linux Rhel Server licensing settings.
     */
    rhelLinuxServerLicensing: pulumi.Input<LinuxServerLicensingSettingsArgs>;
    /**
     * SQL Server licensing settings.
     */
    sqlServerLicensing: pulumi.Input<pulumi.Input<SqlServerLicensingSettingsArgs>[]>;
    /**
     * Linux Suse Server licensing settings.
     */
    suseLinuxServerLicensing: pulumi.Input<LinuxServerLicensingSettingsArgs>;
    /**
     * Virtualization software settings.
     */
    virtualizationSoftwareSettings: pulumi.Input<VirtualizationSoftwareSettingsArgs>;
    /**
     * Windows Server licensing settings.
     */
    windowsServerLicensing: pulumi.Input<WindowsServerLicensingSettingsArgs>;
}

/**
 * Properties of Connection state request.
 */
export interface ConnectionStateRequestBodyPropertiesArgs {
    /**
     * Private endpoint connection state.
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
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
 * Discovered entity light summary.
 */
export interface DiscoveredEntityLightSummaryArgs {
    /**
     * Gets or sets the number of machines.
     */
    numberOfMachines: pulumi.Input<number>;
    /**
     * Gets or sets the number of servers.
     */
    numberOfServers: pulumi.Input<number>;
    /**
     * Gets or sets the number of web apps.
     */
    numberOfWebApps: pulumi.Input<number>;
}

/**
 * Defines the disk encryption set resource settings.
 */
export interface DiskEncryptionSetResourceSettingsArgs {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Compute/diskEncryptionSets'.
     */
    resourceType: pulumi.Input<"Microsoft.Compute/diskEncryptionSets">;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
}

/**
 * Entity Uptime.
 */
export interface EntityUptimeArgs {
    /**
     * Gets the days per month.
     */
    daysPerMonth?: pulumi.Input<number>;
    /**
     * Gets the hours per day.
     */
    hoursPerDay?: pulumi.Input<number>;
}

/**
 * Facility settings.
 */
export interface FacilitySettingsArgs {
    /**
     * The facilities cost.
     */
    facilitiesCost: pulumi.Input<number>;
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
 * Properties of group resource.
 */
export interface GroupPropertiesArgs {
    /**
     * The type of group.
     */
    groupType?: pulumi.Input<string>;
}

/**
 * Representation of a licence.
 */
export interface HypervLicenseArgs {
    /**
     * Cost of a licence.
     */
    licenseCost: pulumi.Input<number>;
    /**
     * HyperV licence type.
     */
    licenseType: pulumi.Input<string | enums.HyperVLicenseType>;
}

/**
 * HyperV Virtualization Management Settings.
 */
export interface HypervVirtualizationManagementSettingsArgs {
    /**
     * Licence and support list.
     */
    licenseAndSupportList: pulumi.Input<pulumi.Input<HypervLicenseArgs>[]>;
    /**
     * Number of physical cores per licence.
     */
    numberOfPhysicalCoresPerLicense: pulumi.Input<number>;
    /**
     * Software Assurance Cost.
     */
    softwareAssuranceCost: pulumi.Input<number>;
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
 * Defines the MSI properties of the Move Collection.
 */
export interface IdentityArgs {
    /**
     * Gets or sets the principal id.
     */
    principalId?: pulumi.Input<string>;
    /**
     * Gets or sets the tenant id.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The type of identity used for the resource mover service.
     */
    type?: pulumi.Input<string | enums.ResourceIdentityType>;
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

export interface ImportCollectorPropertiesArgs {
    discoverySiteId?: pulumi.Input<string>;
}

/**
 * Defines the key vault resource settings.
 */
export interface KeyVaultResourceSettingsArgs {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.KeyVault/vaults'.
     */
    resourceType: pulumi.Input<"Microsoft.KeyVault/vaults">;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
}

export interface KeyVaultSecretStorePropertiesArgs {
    keyvaultName?: pulumi.Input<string>;
    managedIdentityProperties?: pulumi.Input<ManagedIdentityPropertiesArgs>;
    resourceGroup?: pulumi.Input<string>;
    secretStoreId?: pulumi.Input<string>;
    subscriptionId?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
}

/**
 * Defines load balancer backend address pool properties.
 */
export interface LBBackendAddressPoolResourceSettingsArgs {
    /**
     * Gets or sets the backend address pool name.
     */
    name?: pulumi.Input<string>;
}

/**
 * Defines load balancer frontend IP configuration properties.
 */
export interface LBFrontendIPConfigurationResourceSettingsArgs {
    /**
     * Gets or sets the frontend IP configuration name.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the IP address of the Load Balancer.This is only specified if a specific
     * private IP address shall be allocated from the subnet specified in subnetRef.
     */
    privateIpAddress?: pulumi.Input<string>;
    /**
     * Gets or sets PrivateIP allocation method (Static/Dynamic).
     */
    privateIpAllocationMethod?: pulumi.Input<string>;
    /**
     * Defines reference to subnet.
     */
    subnet?: pulumi.Input<SubnetReferenceArgs>;
    /**
     * Gets or sets the csv list of zones.
     */
    zones?: pulumi.Input<string>;
}

/**
 * Labour settings.
 */
export interface LaborSettingsArgs {
    /**
     * Hourly administrator cost.
     */
    hourlyAdminCost: pulumi.Input<number>;
    /**
     * Physical servers per administrator.
     */
    physicalServersPerAdmin: pulumi.Input<number>;
    /**
     * Virtual machines per administrator.
     */
    virtualMachinesPerAdmin: pulumi.Input<number>;
}

/**
 * Linux Server licensing settings.
 */
export interface LinuxServerLicensingSettingsArgs {
    /**
     * Licence Cost.
     */
    licenseCost: pulumi.Input<number>;
}

/**
 * Defines reference to load balancer backend address pools.
 */
export interface LoadBalancerBackendAddressPoolReferenceArgs {
    /**
     * Gets the name of the proxy resource on the target side.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: pulumi.Input<string>;
}

/**
 * Defines reference to load balancer NAT rules.
 */
export interface LoadBalancerNatRuleReferenceArgs {
    /**
     * Gets the name of the proxy resource on the target side.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: pulumi.Input<string>;
}

/**
 * Defines the load balancer resource settings.
 */
export interface LoadBalancerResourceSettingsArgs {
    /**
     * Gets or sets the backend address pools of the load balancer.
     */
    backendAddressPools?: pulumi.Input<pulumi.Input<LBBackendAddressPoolResourceSettingsArgs>[]>;
    /**
     * Gets or sets the frontend IP configurations of the load balancer.
     */
    frontendIPConfigurations?: pulumi.Input<pulumi.Input<LBFrontendIPConfigurationResourceSettingsArgs>[]>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/loadBalancers'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/loadBalancers">;
    /**
     * Gets or sets load balancer sku (Basic/Standard).
     */
    sku?: pulumi.Input<string>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
    /**
     * Gets or sets the csv list of zones common for all frontend IP configurations. Note this is given
     *  precedence only if frontend IP configurations settings are not present.
     */
    zones?: pulumi.Input<string>;
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
 * Management settings.
 */
export interface ManagementSettingsArgs {
    /**
     * HyperV Virtualization Management Settings.
     */
    hypervVirtualizationManagementSettings: pulumi.Input<HypervVirtualizationManagementSettingsArgs>;
    /**
     * Other Management Costs Settings.
     */
    otherManagementCostsSettings: pulumi.Input<OtherManagementCostsSettingsArgs>;
    /**
     * Third Party Management Settings.
     */
    thirdPartyManagementSettings: pulumi.Input<ThirdPartyManagementSettingsArgs>;
    /**
     * vSphere Management Settings.
     */
    vsphereManagementSettings: pulumi.Input<VsphereManagementSettingsArgs>;
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
 * Properties of a migrate project.
 */
export interface MigrateProjectPropertiesArgs {
    /**
     * Provisioning state of the migrate project.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
    /**
     * Gets or sets the state of public network access.
     */
    publicNetworkAccess?: pulumi.Input<string>;
    /**
     * Gets or sets the list of tools registered with the migrate project.
     */
    registeredTools?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Service endpoint.
     */
    serviceEndpoint?: pulumi.Input<string>;
    /**
     * Utility storage account id.
     */
    utilityStorageAccountId?: pulumi.Input<string>;
}

/**
 * Gets or sets the tags.
 */
export interface MigrateProjectTagsArgs {
    additionalProperties?: pulumi.Input<string>;
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

/**
 * Defines the move collection properties.
 */
export interface MoveCollectionPropertiesArgs {
    /**
     * Gets or sets the source region.
     */
    sourceRegion: pulumi.Input<string>;
    /**
     * Gets or sets the target region.
     */
    targetRegion: pulumi.Input<string>;
    /**
     * Gets or sets the version of move collection.
     */
    version?: pulumi.Input<string>;
}

/**
 * Defines the dependency override of the move resource.
 */
export interface MoveResourceDependencyOverrideArgs {
    /**
     * Gets or sets the ARM ID of the dependent resource.
     */
    id?: pulumi.Input<string>;
    /**
     * Gets or sets the resource ARM id of either the MoveResource or the resource ARM ID of
     * the dependent resource.
     */
    targetId?: pulumi.Input<string>;
}

/**
 * Defines the move resource properties.
 */
export interface MoveResourcePropertiesArgs {
    /**
     * Gets or sets the move resource dependencies overrides.
     */
    dependsOnOverrides?: pulumi.Input<pulumi.Input<MoveResourceDependencyOverrideArgs>[]>;
    /**
     * Gets or sets the existing target ARM Id of the resource.
     */
    existingTargetId?: pulumi.Input<string>;
    /**
     * Gets or sets the resource settings.
     */
    resourceSettings?: pulumi.Input<AvailabilitySetResourceSettingsArgs | DiskEncryptionSetResourceSettingsArgs | KeyVaultResourceSettingsArgs | LoadBalancerResourceSettingsArgs | NetworkInterfaceResourceSettingsArgs | NetworkSecurityGroupResourceSettingsArgs | PublicIPAddressResourceSettingsArgs | ResourceGroupResourceSettingsArgs | SqlDatabaseResourceSettingsArgs | SqlElasticPoolResourceSettingsArgs | SqlServerResourceSettingsArgs | VirtualMachineResourceSettingsArgs | VirtualNetworkResourceSettingsArgs>;
    /**
     * Gets or sets the Source ARM Id of the resource.
     */
    sourceId: pulumi.Input<string>;
}

/**
 * Defines the network interface resource settings.
 */
export interface NetworkInterfaceResourceSettingsArgs {
    /**
     * Gets or sets a value indicating whether accelerated networking is enabled.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Gets or sets the IP configurations of the NIC.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<NicIpConfigurationResourceSettingsArgs>[]>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/networkInterfaces'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/networkInterfaces">;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
}

/**
 * Defines the NSG resource settings.
 */
export interface NetworkSecurityGroupResourceSettingsArgs {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/networkSecurityGroups'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/networkSecurityGroups">;
    /**
     * Gets or sets Security rules of network security group.
     */
    securityRules?: pulumi.Input<pulumi.Input<NsgSecurityRuleArgs>[]>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
}

/**
 * Network settings.
 */
export interface NetworkSettingsArgs {
    /**
     * Network hardware and software cost percentage.
     */
    hardwareSoftwareCostPercentage: pulumi.Input<number>;
    /**
     * Network maintenance cost percentage.
     */
    maintenanceCostPercentage: pulumi.Input<number>;
}

/**
 * Defines NIC IP configuration properties.
 */
export interface NicIpConfigurationResourceSettingsArgs {
    /**
     * Gets or sets the references of the load balancer backend address pools.
     */
    loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<LoadBalancerBackendAddressPoolReferenceArgs>[]>;
    /**
     * Gets or sets the references of the load balancer NAT rules.
     */
    loadBalancerNatRules?: pulumi.Input<pulumi.Input<LoadBalancerNatRuleReferenceArgs>[]>;
    /**
     * Gets or sets the IP configuration name.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets a value indicating whether this IP configuration is the primary.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * Gets or sets the private IP address of the network interface IP Configuration.
     */
    privateIpAddress?: pulumi.Input<string>;
    /**
     * Gets or sets the private IP address allocation method.
     */
    privateIpAllocationMethod?: pulumi.Input<string>;
    /**
     * Defines reference to a public IP.
     */
    publicIp?: pulumi.Input<PublicIpReferenceArgs>;
    /**
     * Defines reference to subnet.
     */
    subnet?: pulumi.Input<SubnetReferenceArgs>;
}

/**
 * Defines reference to NSG.
 */
export interface NsgReferenceArgs {
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: pulumi.Input<string>;
}

/**
 * Security Rule data model for Network Security Groups.
 */
export interface NsgSecurityRuleArgs {
    /**
     * Gets or sets whether network traffic is allowed or denied.
     * Possible values are “Allow” and “Deny”.
     */
    access?: pulumi.Input<string>;
    /**
     * Gets or sets a description for this rule. Restricted to 140 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets destination address prefix. CIDR or source IP range.
     *  A “*” can also be used to match all source IPs. Default tags such
     * as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used.
     */
    destinationAddressPrefix?: pulumi.Input<string>;
    /**
     * Gets or sets Destination Port or Range. Integer or range between
     * 0 and 65535. A “*” can also be used to match all ports.
     */
    destinationPortRange?: pulumi.Input<string>;
    /**
     * Gets or sets the direction of the rule.InBound or Outbound. The
     * direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    direction?: pulumi.Input<string>;
    /**
     * Gets or sets the Security rule name.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the priority of the rule. The value can be between
     * 100 and 4096. The priority number must be unique for each rule in the collection.
     * The lower the priority number, the higher the priority of the rule.
     */
    priority?: pulumi.Input<number>;
    /**
     * Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
     */
    protocol?: pulumi.Input<string>;
    /**
     * Gets or sets source address prefix. CIDR or source IP range. A
     * “*” can also be used to match all source IPs.  Default tags such as ‘VirtualNetwork’,
     * ‘AzureLoadBalancer’ and ‘Internet’ can also be used. If this is an ingress
     * rule, specifies where network traffic originates from.
     */
    sourceAddressPrefix?: pulumi.Input<string>;
    /**
     * Gets or sets Source Port or Range. Integer or range between 0 and
     * 65535. A “*” can also be used to match all ports.
     */
    sourcePortRange?: pulumi.Input<string>;
}

/**
 * On-premise settings.
 */
export interface OnPremiseSettingsArgs {
    /**
     * Compute settings.
     */
    computeSettings: pulumi.Input<ComputeSettingsArgs>;
    /**
     * Facility settings.
     */
    facilitySettings: pulumi.Input<FacilitySettingsArgs>;
    /**
     * Labour settings.
     */
    laborSettings: pulumi.Input<LaborSettingsArgs>;
    /**
     * Management settings.
     */
    managementSettings?: pulumi.Input<ManagementSettingsArgs>;
    /**
     * Network settings.
     */
    networkSettings: pulumi.Input<NetworkSettingsArgs>;
    /**
     * Security settings.
     */
    securitySettings: pulumi.Input<SecuritySettingsArgs>;
    /**
     * Storage settings.
     */
    storageSettings: pulumi.Input<StorageSettingsArgs>;
}

export interface OperatingSystemDetailsArgs {
    os?: pulumi.Input<string | enums.OperatingSystemType>;
    osArchitecture?: pulumi.Input<string>;
    osName?: pulumi.Input<string>;
    osVersion?: pulumi.Input<string>;
}

/**
 * Other Management Costs Settings.
 */
export interface OtherManagementCostsSettingsArgs {
    /**
     * Data Protection Cost Per Server Per Year.
     */
    dataProtectionCostPerServerPerYear: pulumi.Input<number>;
    /**
     * Monitoring Cost Per Server Per Year.
     */
    monitoringCostPerServerPerYear: pulumi.Input<number>;
    /**
     * Patching Cost Per Server Per Year.
     */
    patchingCostPerServerPerYear: pulumi.Input<number>;
}

/**
 * Data model of Performance Data Settings.
 */
export interface PerfDataSettingsArgs {
    /**
     * Gets percentile utilization for performance data.
     */
    percentile: pulumi.Input<string | enums.Percentile>;
    /**
     * Gets or sets perf data end time.
     */
    perfDataEndTime?: pulumi.Input<string>;
    /**
     * Gets or sets perf data start time.
     */
    perfDataStartTime?: pulumi.Input<string>;
    /**
     * Gets perf data time range.
     */
    timeRange: pulumi.Input<string | enums.TimeRange>;
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

/**
 * Private endpoint connection properties.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * State of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
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
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | enums.Status>;
}

/**
 * Properties of a project.
 */
export interface ProjectPropertiesArgs {
    /**
     * Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
     */
    assessmentSolutionId?: pulumi.Input<string>;
    /**
     * The ARM id of the storage account used for interactions when public access is disabled.
     */
    customerStorageAccountArmId?: pulumi.Input<string>;
    /**
     * The ARM id of service map workspace created by customer.
     */
    customerWorkspaceId?: pulumi.Input<string>;
    /**
     * Location of service map workspace created by customer.
     */
    customerWorkspaceLocation?: pulumi.Input<string>;
    /**
     * Assessment project status.
     */
    projectStatus?: pulumi.Input<string | enums.ProjectStatus>;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
     */
    publicNetworkAccess?: pulumi.Input<string>;
}

/**
 * Defines the public IP address resource settings.
 */
export interface PublicIPAddressResourceSettingsArgs {
    /**
     * Gets or sets the domain name label.
     */
    domainNameLabel?: pulumi.Input<string>;
    /**
     * Gets or sets the fully qualified domain name.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Gets or sets public IP allocation method.
     */
    publicIpAllocationMethod?: pulumi.Input<string>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/publicIPAddresses'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/publicIPAddresses">;
    /**
     * Gets or sets public IP sku.
     */
    sku?: pulumi.Input<string>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
    /**
     * Gets or sets public IP zones.
     */
    zones?: pulumi.Input<string>;
}

/**
 * Defines reference to a public IP.
 */
export interface PublicIpReferenceArgs {
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: pulumi.Input<string>;
}

/**
 * Defines the resource group resource settings.
 */
export interface ResourceGroupResourceSettingsArgs {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'resourceGroups'.
     */
    resourceType: pulumi.Input<"resourceGroups">;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
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
 * Security settings.
 */
export interface SecuritySettingsArgs {
    /**
     * Physical servers per administrator.
     */
    serverSecurityCostPerServerPerYear: pulumi.Input<number>;
    /**
     * Virtual machines per administrator.
     */
    sqlServerSecurityCostPerServerPerYear: pulumi.Input<number>;
}

/**
 * Business case settings.
 */
export interface SettingsArgs {
    /**
     * Azure settings for a business case.
     */
    azureSettings: pulumi.Input<AzureSettingsArgs>;
    /**
     * On-premise settings.
     */
    onPremiseSettings?: pulumi.Input<OnPremiseSettingsArgs>;
}
/**
 * settingsArgsProvideDefaults sets the appropriate defaults for SettingsArgs
 */
export function settingsArgsProvideDefaults(val: SettingsArgs): SettingsArgs {
    return {
        ...val,
        azureSettings: pulumi.output(val.azureSettings).apply(azureSettingsArgsProvideDefaults),
    };
}

/**
 * Class representing the details of the solution.
 */
export interface SolutionDetailsArgs {
    /**
     * Gets or sets the count of assessments reported by the solution.
     */
    assessmentCount?: pulumi.Input<number>;
    /**
     * Gets or sets the extended details reported by the solution.
     */
    extendedDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the count of groups reported by the solution.
     */
    groupCount?: pulumi.Input<number>;
}

/**
 * Class for solution properties.
 */
export interface SolutionPropertiesArgs {
    /**
     * Gets or sets the cleanup state of the solution.
     */
    cleanupState?: pulumi.Input<string | enums.CleanupState>;
    /**
     * Gets or sets the details of the solution.
     */
    details?: pulumi.Input<SolutionDetailsArgs>;
    /**
     * Gets or sets the goal of the solution.
     */
    goal?: pulumi.Input<string | enums.Goal>;
    /**
     * Gets or sets the purpose of the solution.
     */
    purpose?: pulumi.Input<string | enums.Purpose>;
    /**
     * Gets or sets the current status of the solution.
     */
    status?: pulumi.Input<string | enums.Status>;
    /**
     * Gets or sets the tool being used in the solution.
     */
    tool?: pulumi.Input<string | enums.Tool>;
}

/**
 * Defines the Sql Database resource settings.
 */
export interface SqlDatabaseResourceSettingsArgs {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Sql/servers/databases'.
     */
    resourceType: pulumi.Input<"Microsoft.Sql/servers/databases">;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
    /**
     * Defines the zone redundant resource setting.
     */
    zoneRedundant?: pulumi.Input<string | enums.ZoneRedundant>;
}

/**
 * SQL database assessment settings.
 */
export interface SqlDbSettingsArgs {
    /**
     * Gets or sets the azure SQL compute tier.
     */
    azureSqlComputeTier?: pulumi.Input<string | enums.ComputeTier>;
    /**
     * Gets or sets the azure PAAS SQL instance type.
     */
    azureSqlDataBaseType?: pulumi.Input<string | enums.AzureSqlDataBaseType>;
    /**
     * Gets or sets the azure SQL purchase model.
     */
    azureSqlPurchaseModel?: pulumi.Input<string | enums.AzureSqlPurchaseModel>;
    /**
     * Gets or sets the azure SQL service tier.
     */
    azureSqlServiceTier?: pulumi.Input<string | enums.AzureSqlServiceTier>;
}

/**
 * Defines the Sql ElasticPool resource settings.
 */
export interface SqlElasticPoolResourceSettingsArgs {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Sql/servers/elasticPools'.
     */
    resourceType: pulumi.Input<"Microsoft.Sql/servers/elasticPools">;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
    /**
     * Defines the zone redundant resource setting.
     */
    zoneRedundant?: pulumi.Input<string | enums.ZoneRedundant>;
}

/**
 * SQL managed instance assessment settings.
 */
export interface SqlMiSettingsArgs {
    /**
     * Gets or sets the azure PAAS SQL instance type.
     */
    azureSqlInstanceType?: pulumi.Input<string | enums.AzureSqlInstanceType>;
    /**
     * Gets or sets the azure SQL service tier.
     */
    azureSqlServiceTier?: pulumi.Input<string | enums.AzureSqlServiceTier>;
}

/**
 * SQL Server licensing settings.
 */
export interface SqlServerLicensingSettingsArgs {
    /**
     * Licence cost.
     */
    licenseCost: pulumi.Input<number>;
    /**
     * Software assurance (SA) cost.
     */
    softwareAssuranceCost: pulumi.Input<number>;
    /**
     * SQL Server version.
     */
    version: pulumi.Input<string | enums.SqlServerLicenseType>;
}

/**
 * Defines the SQL Server resource settings.
 */
export interface SqlServerResourceSettingsArgs {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Sql/servers'.
     */
    resourceType: pulumi.Input<"Microsoft.Sql/servers">;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
}

/**
 * SQL VM assessment settings.
 */
export interface SqlVmSettingsArgs {
    /**
     * Gets or sets the Azure VM families (calling instance series to keep it
     * consistent with other targets).
     */
    instanceSeries?: pulumi.Input<pulumi.Input<string | enums.AzureVmFamily>[]>;
}

/**
 * Storage settings.
 */
export interface StorageSettingsArgs {
    /**
     * Cost per gigabyte per month.
     */
    costPerGbPerMonth: pulumi.Input<number>;
    /**
     * Maintenance cost percentage.
     */
    maintainanceCostPercentageToAcquisitionCost: pulumi.Input<number>;
}

/**
 * Defines reference to subnet.
 */
export interface SubnetReferenceArgs {
    /**
     * Gets the name of the proxy resource on the target side.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: pulumi.Input<string>;
}

/**
 * Defines the virtual network subnets resource settings.
 */
export interface SubnetResourceSettingsArgs {
    /**
     * Gets or sets address prefix for the subnet.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * Gets or sets the Subnet name.
     */
    name?: pulumi.Input<string>;
    /**
     * Defines reference to NSG.
     */
    networkSecurityGroup?: pulumi.Input<NsgReferenceArgs>;
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

/**
 * Third Party Management settings.
 */
export interface ThirdPartyManagementSettingsArgs {
    /**
     * License Cost.
     */
    licenseCost: pulumi.Input<number>;
    /**
     * Support Cost.
     */
    supportCost: pulumi.Input<number>;
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
 * Gets or sets the virtual machine resource settings.
 */
export interface VirtualMachineResourceSettingsArgs {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Compute/virtualMachines'.
     */
    resourceType: pulumi.Input<"Microsoft.Compute/virtualMachines">;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target availability set id for virtual machines not in an availability set at source.
     */
    targetAvailabilitySetId?: pulumi.Input<string>;
    /**
     * Gets or sets the target availability zone.
     */
    targetAvailabilityZone?: pulumi.Input<string | enums.TargetAvailabilityZone>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
    /**
     * Gets or sets the target virtual machine size.
     */
    targetVmSize?: pulumi.Input<string>;
    /**
     * Gets or sets user-managed identities
     */
    userManagedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Defines the virtual network resource settings.
 */
export interface VirtualNetworkResourceSettingsArgs {
    /**
     * Gets or sets the address prefixes for the virtual network.
     */
    addressSpace?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets DHCPOptions that contains an array of DNS servers available to VMs
     * deployed in the virtual network.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets a value indicating whether gets or sets whether the
     * DDOS protection should be switched on.
     */
    enableDdosProtection?: pulumi.Input<boolean>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/virtualNetworks'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/virtualNetworks">;
    /**
     * Gets or sets List of subnets in a VirtualNetwork.
     */
    subnets?: pulumi.Input<pulumi.Input<SubnetResourceSettingsArgs>[]>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName: pulumi.Input<string>;
}

/**
 * Virtualization software settings.
 */
export interface VirtualizationSoftwareSettingsArgs {
    /**
     * Licence and support list.
     */
    licenseAndSupportList: pulumi.Input<pulumi.Input<VsphereLicenseArgs>[]>;
    /**
     * Number of physical cores per licence.
     */
    numberOfPhysicalCoresPerLicense: pulumi.Input<number>;
    /**
     * Software Assurance cost.
     */
    softwareAssuranceCost: pulumi.Input<number>;
}

/**
 * Details on the total up-time for the VM.
 */
export interface VmUptimeArgs {
    /**
     * Number of days in a month for VM uptime.
     */
    daysPerMonth?: pulumi.Input<number>;
    /**
     * Number of hours per day for VM uptime.
     */
    hoursPerDay?: pulumi.Input<number>;
}

/**
 * Representation of a vsphere licence.
 */
export interface VsphereLicenseArgs {
    /**
     * Basic support cost.
     */
    basicSupportCost: pulumi.Input<number>;
    /**
     * Cost of a licence.
     */
    licenseCost: pulumi.Input<number>;
    /**
     * VSphere licence type.
     */
    licenseType: pulumi.Input<string | enums.LicenseType>;
    /**
     * Production support cost.
     */
    productionSupportCost: pulumi.Input<number>;
}

/**
 * Representation of a vsphere management licence.
 */
export interface VsphereManagementLicenseArgs {
    /**
     * Basic support cost.
     */
    basicSupportCost: pulumi.Input<number>;
    /**
     * Cost of a licence.
     */
    licenseCost: pulumi.Input<number>;
    /**
     * VSphere licence type.
     */
    licenseType: pulumi.Input<string | enums.VsphereManagementLicenseType>;
    /**
     * Production support cost.
     */
    productionSupportCost: pulumi.Input<number>;
}

/**
 * Vsphere management settings.
 */
export interface VsphereManagementSettingsArgs {
    /**
     * Licence and support list.
     */
    licenseAndSupportList: pulumi.Input<pulumi.Input<VsphereManagementLicenseArgs>[]>;
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
 * Windows Server licensing settings.
 */
export interface WindowsServerLicensingSettingsArgs {
    /**
     * Licence Cost.
     */
    licenseCost: pulumi.Input<number>;
    /**
     * Licenses per core.
     */
    licensesPerCore: pulumi.Input<number>;
    /**
     * Software assurance (SA) cost.
     */
    softwareAssuranceCost: pulumi.Input<number>;
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











