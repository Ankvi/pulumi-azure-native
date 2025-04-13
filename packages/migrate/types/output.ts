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
 * Data model of AKS Assessment Details.
 */
export interface AKSAssessmentDetailsResponse {
    /**
     * Gets Confidence score.
     */
    confidenceRatingInPercentage: number;
    /**
     * Gets date and time when assessment was created.
     */
    createdTimestamp: string;
    /**
     * Gets the number of machines.
     */
    machineCount: number;
    /**
     * Gets last time when rates were queried.
     */
    pricesTimestamp: string;
    /**
     * Gets assessment status.
     */
    status: string;
    /**
     * Gets the total monthly cost.
     */
    totalMonthlyCost: number;
    /**
     * Gets date and time when assessment was last updated.
     */
    updatedTimestamp: string;
    /**
     * Gets the number of web apps.
     */
    webAppCount: number;
    /**
     * Gets the number of web servers.
     */
    webServerCount: number;
}

/**
 * Data model of AKS Assessment Settings.
 */
export interface AKSAssessmentSettingsResponse {
    /**
     * Gets or sets azure location.
     */
    azureLocation: string;
    /**
     * Gets or sets azure VM category.
     */
    category: string;
    /**
     * Gets or sets consolidation type.
     */
    consolidation: string;
    /**
     * Gets or sets currency.
     */
    currency: string;
    /**
     * Gets or sets discount percentage.
     */
    discountPercentage?: number;
    /**
     * Gets or sets environment type.
     */
    environmentType: string;
    /**
     * Gets or sets licensing program.
     */
    licensingProgram: string;
    /**
     * Gets or sets performance data settings.
     */
    performanceData?: PerfDataSettingsResponse;
    /**
     * Gets or sets pricing tier.
     */
    pricingTier: string;
    /**
     * Gets or sets savings options.
     */
    savingsOptions: string;
    /**
     * Gets or sets scaling factor.
     */
    scalingFactor?: number;
    /**
     * Gets or sets sizing criteria.
     */
    sizingCriteria: string;
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
 * App service container settings.
 */
export interface AppSvcContainerSettingsResponse {
    /**
     * Gets or sets the isolation required.
     */
    isolationRequired: boolean;
}

/**
 * App service native settings.
 */
export interface AppSvcNativeSettingsResponse {
    /**
     * Gets or sets the isolation required.
     */
    isolationRequired: boolean;
}

/**
 * Properties of an assessment.
 */
export interface AssessmentPropertiesResponse {
    /**
     * Storage type selected for this disk.
     */
    azureDiskType: string;
    /**
     * AHUB discount on windows virtual machines.
     */
    azureHybridUseBenefit: string;
    /**
     * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
     */
    azureLocation: string;
    /**
     * Offer code according to which cost estimation is done.
     */
    azureOfferCode: string;
    /**
     * Pricing tier for Size evaluation.
     */
    azurePricingTier: string;
    /**
     * Storage Redundancy type offered by Azure.
     */
    azureStorageRedundancy: string;
    /**
     * List of azure VM families.
     */
    azureVmFamilies: string[];
    /**
     * Confidence rating percentage for assessment. Can be in the range [0, 100].
     */
    confidenceRatingInPercentage: number;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    createdTimestamp: string;
    /**
     * Currency to report prices in.
     */
    currency: string;
    /**
     * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
     */
    discountPercentage: number;
    /**
     * Enterprise agreement subscription arm id.
     */
    eaSubscriptionId: string;
    /**
     * Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    monthlyBandwidthCost: number;
    /**
     * Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    monthlyComputeCost: number;
    /**
     * Monthly premium storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    monthlyPremiumStorageCost: number;
    /**
     * Monthly standard SSD storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    monthlyStandardSSDStorageCost: number;
    /**
     * Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    monthlyStorageCost: number;
    /**
     * Number of assessed machines part of this assessment.
     */
    numberOfMachines: number;
    /**
     * Percentile of performance data used to recommend Azure size.
     */
    percentile: string;
    /**
     * End time to consider performance data for assessment
     */
    perfDataEndTime: string;
    /**
     * Start time to consider performance data for assessment
     */
    perfDataStartTime: string;
    /**
     * Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
     */
    pricesTimestamp: string;
    /**
     * Azure reserved instance.
     */
    reservedInstance: string;
    /**
     * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
     */
    scalingFactor: number;
    /**
     * Assessment sizing criterion.
     */
    sizingCriterion: string;
    /**
     * User configurable setting that describes the status of the assessment.
     */
    stage: string;
    /**
     * Whether the assessment has been created and is valid.
     */
    status: string;
    /**
     * Time range of performance data used to recommend a size.
     */
    timeRange: string;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    updatedTimestamp: string;
    /**
     * Specify the duration for which the VMs are up in the on-premises environment.
     */
    vmUptime: VmUptimeResponse;
}

/**
 * Data model of Assessment Scope Parameters.
 */
export interface AssessmentScopeParametersResponse {
    /**
     * Gets or sets the server group id.
     */
    serverGroupId?: string;
}

/**
 * Defines the properties for automatic resolution.
 */
export interface AutomaticResolutionPropertiesResponse {
    /**
     * Gets the MoveResource ARM ID of
     * the dependent resource if the resolution type is Automatic.
     */
    moveResourceId?: string;
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
 * Gets or sets the availability set resource settings.
 */
export interface AvailabilitySetResourceSettingsResponse {
    /**
     * Gets or sets the target fault domain.
     */
    faultDomain?: number;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Compute/availabilitySets'.
     */
    resourceType: "Microsoft.Compute/availabilitySets";
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
    /**
     * Gets or sets the target update domain.
     */
    updateDomain?: number;
}

/**
 * Details on the Estimated External Storage for AVS Assessment.
 */
export interface AvsEstimatedExternalStorageResponse {
    /**
     * Total monthly cost for type of storage.
     */
    monthlyPrice?: number;
    /**
     * Recommended External Storage.
     */
    storageType?: string;
    /**
     * Predicted storage utilization.
     */
    storageUtilization?: number;
    /**
     * Predicted total Storage used in GB.
     */
    totalStorageInGB?: number;
}

/**
 * Details on the Estimated Network Costs for AVS Assessment.
 */
export interface AvsEstimatedNetworkResponse {
    /**
     * Monthly cost for network type.
     */
    monthlyPrice?: number;
    /**
     * Recommended Network Sku.
     */
    networkType?: string;
}

/**
 * Details on the Estimated nodes for AVS Assessment.
 */
export interface AvsEstimatedNodeResponse {
    /**
     * Predicted CPU utilization.
     */
    cpuUtilization?: number;
    /**
     * FttRaidLevel recommended for Node.
     */
    fttRaidLevel?: string;
    /**
     * Total monthly cost for type and number of nodes.
     */
    monthlyPrice?: number;
    /**
     * Number of nodes that will be needed.
     */
    nodeNumber?: number;
    /**
     * Recommended SKU.
     */
    nodeType?: string;
    /**
     * Pricing model indicates what hour multiplier to use while estimating the Nodes cost.
     */
    pricingModel?: string;
    /**
     * Predicted RAM utilization.
     */
    ramUtilization?: number;
    /**
     * Predicted storage utilization.
     */
    storageUtilization?: number;
    /**
     * Predicted total CPU cores across the set of nodes.
     */
    totalCpu?: number;
    /**
     * Predicted total RAM used in GB.
     */
    totalRam?: number;
    /**
     * Predicted total Storage used in GB.
     */
    totalStorage?: number;
}

/**
 * Azure Arc Management settings.
 */
export interface AzureArcManagementSettingsResponse {
    /**
     * Gets the azure arc monitoring settings.
     */
    monitoringSettings: AzureArcMonitoringSettingsResponse;
}

/**
 * Azure Arc Monitoring settings.
 */
export interface AzureArcMonitoringSettingsResponse {
    /**
     * Number of alert rules settings.
     */
    alertRulesCount: number;
    /**
     * Logs volume settings.
     */
    logsVolumeInGB: number;
}

/**
 * Azure arc settings for a business case.
 */
export interface AzureArcSettingsResponse {
    /**
     * AzureArc state indicates whether to include azure arc related costs in on-premises or not.
     */
    azureArcState: string;
    /**
     * Gets Azure arc labour cost percentage.
     */
    laborCostPercentage?: number;
    /**
     * Management settings.
     */
    managementSettings?: AzureArcManagementSettingsResponse;
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
 * Azure settings for a business case.
 */
export interface AzureSettingsResponse {
    /**
     * Gets Avs labour cost percentage.
     */
    avsLaborCostPercentage?: number;
    /**
     * Migration Strategy.
     */
    businessCaseType?: string;
    /**
     * Gets comfort factor.
     */
    comfortFactor?: number;
    /**
     * Business case Currency.
     */
    currency: string;
    /**
     * Gets azure Discount percentage.
     */
    discountPercentage?: number;
    /**
     * Gets IaaS labour cost percentage.
     */
    iaasLaborCostPercentage?: number;
    /**
     * Gets infrastructure growth rate.
     */
    infrastructureGrowthRate?: number;
    /**
     * Gets network cost percentage.
     */
    networkCostPercentage?: number;
    /**
     * Gets PaaS labour cost percentage.
     */
    paasLaborCostPercentage?: number;
    /**
     * Gets migration completion percentage per year.
     */
    perYearMigrationCompletionPercentage?: {[key: string]: number};
    /**
     * Gets end time to use for performance.
     */
    performanceDataEndTime?: string;
    /**
     * Gets start time to use for performance.
     */
    performanceDataStartTime?: string;
    /**
     * Gets utilization percentile for performance.
     */
    performanceUtilizationPercentile?: number;
    /**
     * Gets the business case savings option type.
     */
    savingsOption?: string;
    /**
     * Gets or sets azure location.
     */
    targetLocation: string;
    /**
     * Gets wACC percentage.
     */
    wacc?: number;
    /**
     * Workload discovery source.
     */
    workloadDiscoverySource?: string;
}
/**
 * azureSettingsResponseProvideDefaults sets the appropriate defaults for AzureSettingsResponse
 */
export function azureSettingsResponseProvideDefaults(val: AzureSettingsResponse): AzureSettingsResponse {
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
 * Collector agent property class.
 */
export interface CollectorAgentPropertiesBaseResponse {
    /**
     * Gets the collector agent id.
     */
    id?: string;
    /**
     * Gets the collector last heartbeat time.
     */
    lastHeartbeatUtc?: string;
    /**
     * Gets or sets the SPN details.
     */
    spnDetails?: CollectorAgentSpnPropertiesBaseResponse;
    /**
     * Gets the collector agent version.
     */
    version?: string;
}

export interface CollectorAgentPropertiesResponse {
    id: string;
    lastHeartbeatUtc: string;
    spnDetails?: CollectorBodyAgentSpnPropertiesResponse;
    version: string;
}

/**
 * Collector agent SPN details class.
 */
export interface CollectorAgentSpnPropertiesBaseResponse {
    /**
     * Gets the AAD application id.
     */
    applicationId?: string;
    /**
     * Gets the AAD audience url.
     */
    audience?: string;
    /**
     * Gets the AAD authority endpoint.
     */
    authority?: string;
    /**
     * Gets the object id of the AAD application.
     */
    objectId?: string;
    /**
     * Gets the tenant id of the AAD application.
     */
    tenantId?: string;
}

export interface CollectorBodyAgentSpnPropertiesResponse {
    /**
     * Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    applicationId?: string;
    /**
     * Intended audience for the service principal.
     */
    audience?: string;
    /**
     * AAD Authority URL which was used to request the token for the service principal.
     */
    authority?: string;
    /**
     * Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    objectId?: string;
    /**
     * Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    tenantId?: string;
}

export interface CollectorPropertiesResponse {
    agentProperties?: CollectorAgentPropertiesResponse;
    /**
     * Time when this collector was created. Date-Time represented in ISO-8601 format.
     */
    createdTimestamp: string;
    /**
     * The ARM id of the discovery service site.
     */
    discoverySiteId?: string;
    /**
     * Time when this collector was updated. Date-Time represented in ISO-8601 format.
     */
    updatedTimestamp: string;
}

/**
 * Compute settings.
 */
export interface ComputeSettingsResponse {
    /**
     * Hyperthread core to memory ratio.
     */
    hyperthreadCoreToMemoryRatio: number;
    /**
     * Compute Price.
     */
    price: number;
    /**
     * Linux Rhel Server licensing settings.
     */
    rhelLinuxServerLicensing: LinuxServerLicensingSettingsResponse;
    /**
     * SQL Server licensing settings.
     */
    sqlServerLicensing: SqlServerLicensingSettingsResponse[];
    /**
     * Linux Suse Server licensing settings.
     */
    suseLinuxServerLicensing: LinuxServerLicensingSettingsResponse;
    /**
     * Virtualization software settings.
     */
    virtualizationSoftwareSettings: VirtualizationSoftwareSettingsResponse;
    /**
     * Windows Server licensing settings.
     */
    windowsServerLicensing: WindowsServerLicensingSettingsResponse;
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
 * Class to represent the component of the cost.
 */
export interface CostComponentResponse {
    /**
     * The textual description of the component.
     */
    description?: string;
    /**
     * Gets the name of the component.
     */
    name: string;
    /**
     * The value of the component.
     */
    value?: number;
}

/**
 * The database project summary class.
 */
export interface DatabaseProjectSummaryResponse {
    /**
     * Gets or sets the extended summary.
     */
    extendedSummary?: {[key: string]: string};
    /**
     * Gets the Instance type.
     * Expected value is 'Databases'.
     */
    instanceType: "Databases";
    /**
     * Gets or sets the time when summary was last refreshed.
     */
    lastSummaryRefreshedTime?: string;
    /**
     * Gets or sets the state of refresh summary.
     */
    refreshSummaryState?: string;
}

/**
 * Class representing the databases solution summary.
 */
export interface DatabasesSolutionSummaryResponse {
    /**
     * Gets or sets the count of database instances assessed.
     */
    databaseInstancesAssessedCount?: number;
    /**
     * Gets or sets the count of databases assessed.
     */
    databasesAssessedCount?: number;
    /**
     * Gets the Instance type.
     * Expected value is 'Databases'.
     */
    instanceType: "Databases";
    /**
     * Gets or sets the count of databases ready for migration.
     */
    migrationReadyCount?: number;
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
 * Discovered entity light summary.
 */
export interface DiscoveredEntityLightSummaryResponse {
    /**
     * Gets or sets the number of machines.
     */
    numberOfMachines: number;
    /**
     * Gets or sets the number of servers.
     */
    numberOfServers: number;
    /**
     * Gets or sets the number of web apps.
     */
    numberOfWebApps: number;
}

/**
 * Defines the disk encryption set resource settings.
 */
export interface DiskEncryptionSetResourceSettingsResponse {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Compute/diskEncryptionSets'.
     */
    resourceType: "Microsoft.Compute/diskEncryptionSets";
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
}

/**
 * Entity Uptime.
 */
export interface EntityUptimeResponse {
    /**
     * Gets the days per month.
     */
    daysPerMonth?: number;
    /**
     * Gets the hours per day.
     */
    hoursPerDay?: number;
}

/**
 * Facility settings.
 */
export interface FacilitySettingsResponse {
    /**
     * The facilities cost.
     */
    facilitiesCostPerKwh?: number;
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
 * Properties of group resource.
 */
export interface GroupPropertiesResponse {
    /**
     * If the assessments are in running state.
     */
    areAssessmentsRunning: boolean;
    /**
     * List of References to Assessments created on this group.
     */
    assessments: string[];
    /**
     * Time when this group was created. Date-Time represented in ISO-8601 format.
     */
    createdTimestamp: string;
    /**
     * Whether the group has been created and is valid.
     */
    groupStatus: string;
    /**
     * The type of group.
     */
    groupType?: string;
    /**
     * Number of machines part of this group.
     */
    machineCount: number;
    /**
     * Time when this group was last updated. Date-Time represented in ISO-8601 format.
     */
    updatedTimestamp: string;
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
 * Representation of a licence.
 */
export interface HypervLicenseResponse {
    /**
     * Cost of a licence.
     */
    licenseCost: number;
    /**
     * HyperV licence type.
     */
    licenseType: string;
}

/**
 * HyperV Virtualization Management Settings.
 */
export interface HypervVirtualizationManagementSettingsResponse {
    /**
     * Licence and support list.
     */
    licenseAndSupportList: HypervLicenseResponse[];
    /**
     * Number of physical cores per licence.
     */
    numberOfPhysicalCoresPerLicense: number;
    /**
     * Software Assurance Cost.
     */
    softwareAssuranceCost: number;
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
 * Defines the MSI properties of the Move Collection.
 */
export interface IdentityResponse {
    /**
     * Gets or sets the principal id.
     */
    principalId?: string;
    /**
     * Gets or sets the tenant id.
     */
    tenantId?: string;
    /**
     * The type of identity used for the resource mover service.
     */
    type?: string;
}

export interface ImportCollectorPropertiesResponse {
    createdTimestamp: string;
    discoverySiteId?: string;
    updatedTimestamp: string;
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

/**
 * Defines the job status.
 */
export interface JobStatusResponse {
    /**
     * Defines the job name.
     */
    jobName: string;
    /**
     * Gets or sets the monitoring job percentage.
     */
    jobProgress: string;
}

/**
 * Defines the key vault resource settings.
 */
export interface KeyVaultResourceSettingsResponse {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.KeyVault/vaults'.
     */
    resourceType: "Microsoft.KeyVault/vaults";
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
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

/**
 * Defines load balancer backend address pool properties.
 */
export interface LBBackendAddressPoolResourceSettingsResponse {
    /**
     * Gets or sets the backend address pool name.
     */
    name?: string;
}

/**
 * Defines load balancer frontend IP configuration properties.
 */
export interface LBFrontendIPConfigurationResourceSettingsResponse {
    /**
     * Gets or sets the frontend IP configuration name.
     */
    name?: string;
    /**
     * Gets or sets the IP address of the Load Balancer.This is only specified if a specific
     * private IP address shall be allocated from the subnet specified in subnetRef.
     */
    privateIpAddress?: string;
    /**
     * Gets or sets PrivateIP allocation method (Static/Dynamic).
     */
    privateIpAllocationMethod?: string;
    /**
     * Defines reference to subnet.
     */
    subnet?: SubnetReferenceResponse;
    /**
     * Gets or sets the csv list of zones.
     */
    zones?: string;
}

/**
 * Labour settings.
 */
export interface LaborSettingsResponse {
    /**
     * Hourly administrator cost.
     */
    hourlyAdminCost: number;
    /**
     * Physical servers per administrator.
     */
    physicalServersPerAdmin: number;
    /**
     * Virtual machines per administrator.
     */
    virtualMachinesPerAdmin: number;
}

/**
 * Linux Server licensing settings.
 */
export interface LinuxServerLicensingSettingsResponse {
    /**
     * Licence Cost.
     */
    licenseCost: number;
}

/**
 * Defines reference to load balancer backend address pools.
 */
export interface LoadBalancerBackendAddressPoolReferenceResponse {
    /**
     * Gets the name of the proxy resource on the target side.
     */
    name?: string;
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: string;
}

/**
 * Defines reference to load balancer NAT rules.
 */
export interface LoadBalancerNatRuleReferenceResponse {
    /**
     * Gets the name of the proxy resource on the target side.
     */
    name?: string;
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: string;
}

/**
 * Defines the load balancer resource settings.
 */
export interface LoadBalancerResourceSettingsResponse {
    /**
     * Gets or sets the backend address pools of the load balancer.
     */
    backendAddressPools?: LBBackendAddressPoolResourceSettingsResponse[];
    /**
     * Gets or sets the frontend IP configurations of the load balancer.
     */
    frontendIPConfigurations?: LBFrontendIPConfigurationResourceSettingsResponse[];
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/loadBalancers'.
     */
    resourceType: "Microsoft.Network/loadBalancers";
    /**
     * Gets or sets load balancer sku (Basic/Standard).
     */
    sku?: string;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
    /**
     * Gets or sets the csv list of zones common for all frontend IP configurations. Note this is given
     *  precedence only if frontend IP configurations settings are not present.
     */
    zones?: string;
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
 * Management settings.
 */
export interface ManagementSettingsResponse {
    /**
     * HyperV Virtualization Management Settings.
     */
    hypervVirtualizationManagementSettings: HypervVirtualizationManagementSettingsResponse;
    /**
     * Other Management Costs Settings.
     */
    otherManagementCostsSettings: OtherManagementCostsSettingsResponse;
    /**
     * Third Party Management Settings.
     */
    thirdPartyManagementSettings: ThirdPartyManagementSettingsResponse;
}

/**
 * Defines the properties for manual resolution.
 */
export interface ManualResolutionPropertiesResponse {
    /**
     * Gets or sets the target resource ARM ID of the dependent resource if the resource type is Manual.
     */
    targetId?: string;
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
 * Properties of a migrate project.
 */
export interface MigrateProjectPropertiesResponse {
    /**
     * Last summary refresh time.
     */
    lastSummaryRefreshedTime: string;
    /**
     * Gets the private endpoint connections.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the migrate project.
     */
    provisioningState?: string;
    /**
     * Gets or sets the state of public network access.
     */
    publicNetworkAccess?: string;
    /**
     * Refresh summary state.
     */
    refreshSummaryState: string;
    /**
     * Register tools inside project.
     */
    registeredTools: string[];
    /**
     * Service endpoint.
     */
    serviceEndpoint?: string;
    /**
     * Project summary.
     */
    summary: {[key: string]: DatabaseProjectSummaryResponse | ServersProjectSummaryResponse | ProjectSummaryResponse};
    /**
     * Utility storage account id.
     */
    utilityStorageAccountId?: string;
}

/**
 * Gets or sets the tags.
 */
export interface MigrateProjectResponseTags {
    additionalProperties?: string;
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

/**
 * Defines the move collection properties.
 */
export interface MoveCollectionPropertiesResponse {
    /**
     * Defines the move collection errors.
     */
    errors: MoveCollectionPropertiesResponseErrors;
    /**
     * Gets or sets the move region which indicates the region where the VM Regional to Zonal move will be conducted.
     */
    moveRegion?: string;
    /**
     * Defines the MoveType.
     */
    moveType?: string;
    /**
     * Defines the provisioning states.
     */
    provisioningState: string;
    /**
     * Gets or sets the source region.
     */
    sourceRegion?: string;
    /**
     * Gets or sets the target region.
     */
    targetRegion?: string;
    /**
     * Gets or sets the version of move collection.
     */
    version?: string;
}

/**
 * Defines the move collection errors.
 */
export interface MoveCollectionPropertiesResponseErrors {
    /**
     * The move resource error body.
     */
    properties?: MoveResourceErrorBodyResponse;
}

/**
 * Defines the dependency override of the move resource.
 */
export interface MoveResourceDependencyOverrideResponse {
    /**
     * Gets or sets the ARM ID of the dependent resource.
     */
    id?: string;
    /**
     * Gets or sets the resource ARM id of either the MoveResource or the resource ARM ID of
     * the dependent resource.
     */
    targetId?: string;
}

/**
 * Defines the dependency of the move resource.
 */
export interface MoveResourceDependencyResponse {
    /**
     * Defines the properties for automatic resolution.
     */
    automaticResolution?: AutomaticResolutionPropertiesResponse;
    /**
     * Defines the dependency type.
     */
    dependencyType?: string;
    /**
     * Gets the source ARM ID of the dependent resource.
     */
    id?: string;
    /**
     * Gets or sets a value indicating whether the dependency is optional.
     */
    isOptional?: string;
    /**
     * Defines the properties for manual resolution.
     */
    manualResolution?: ManualResolutionPropertiesResponse;
    /**
     * Gets the dependency resolution status.
     */
    resolutionStatus?: string;
    /**
     * Defines the resolution type.
     */
    resolutionType?: string;
}

/**
 * An error response from the Azure Migrate service.
 */
export interface MoveResourceErrorBodyResponse {
    /**
     * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
     */
    code: string;
    /**
     * A list of additional details about the error.
     */
    details: MoveResourceErrorBodyResponse[];
    /**
     * A message describing the error, intended to be suitable for display in a user interface.
     */
    message: string;
    /**
     * The target of the particular error. For example, the name of the property in error.
     */
    target: string;
}

/**
 * An error response from the azure resource mover service.
 */
export interface MoveResourceErrorResponse {
    /**
     * The move resource error body.
     */
    properties?: MoveResourceErrorBodyResponse;
}

/**
 * Defines the move resource properties.
 */
export interface MoveResourcePropertiesResponse {
    /**
     * Gets or sets the move resource dependencies.
     */
    dependsOn: MoveResourceDependencyResponse[];
    /**
     * Gets or sets the move resource dependencies overrides.
     */
    dependsOnOverrides?: MoveResourceDependencyOverrideResponse[];
    /**
     * Defines the move resource errors.
     */
    errors: MoveResourcePropertiesResponseErrors;
    /**
     * Gets or sets the existing target ARM Id of the resource.
     */
    existingTargetId?: string;
    /**
     * Gets a value indicating whether the resolve action is required over the move collection.
     */
    isResolveRequired: boolean;
    /**
     * Defines the move resource status.
     */
    moveStatus: MoveResourcePropertiesResponseMoveStatus;
    /**
     * Defines the provisioning states.
     */
    provisioningState: string;
    /**
     * Gets or sets the resource settings.
     */
    resourceSettings?: AvailabilitySetResourceSettingsResponse | DiskEncryptionSetResourceSettingsResponse | KeyVaultResourceSettingsResponse | LoadBalancerResourceSettingsResponse | NetworkInterfaceResourceSettingsResponse | NetworkSecurityGroupResourceSettingsResponse | PublicIPAddressResourceSettingsResponse | ResourceGroupResourceSettingsResponse | SqlDatabaseResourceSettingsResponse | SqlElasticPoolResourceSettingsResponse | SqlServerResourceSettingsResponse | VirtualMachineResourceSettingsResponse | VirtualNetworkResourceSettingsResponse;
    /**
     * Gets or sets the Source ARM Id of the resource.
     */
    sourceId: string;
    /**
     * Gets or sets the source resource settings.
     */
    sourceResourceSettings: AvailabilitySetResourceSettingsResponse | DiskEncryptionSetResourceSettingsResponse | KeyVaultResourceSettingsResponse | LoadBalancerResourceSettingsResponse | NetworkInterfaceResourceSettingsResponse | NetworkSecurityGroupResourceSettingsResponse | PublicIPAddressResourceSettingsResponse | ResourceGroupResourceSettingsResponse | SqlDatabaseResourceSettingsResponse | SqlElasticPoolResourceSettingsResponse | SqlServerResourceSettingsResponse | VirtualMachineResourceSettingsResponse | VirtualNetworkResourceSettingsResponse;
    /**
     * Gets or sets the Target ARM Id of the resource.
     */
    targetId: string;
}

/**
 * Defines the move resource errors.
 */
export interface MoveResourcePropertiesResponseErrors {
    /**
     * The move resource error body.
     */
    properties?: MoveResourceErrorBodyResponse;
}

/**
 * Defines the move resource status.
 */
export interface MoveResourcePropertiesResponseMoveStatus {
    /**
     * An error response from the azure resource mover service.
     */
    errors?: MoveResourceErrorResponse;
    /**
     * Defines the job status.
     */
    jobStatus?: JobStatusResponse;
    /**
     * Defines the MoveResource states.
     */
    moveState: string;
}

/**
 * Defines the network interface resource settings.
 */
export interface NetworkInterfaceResourceSettingsResponse {
    /**
     * Gets or sets a value indicating whether accelerated networking is enabled.
     */
    enableAcceleratedNetworking?: boolean;
    /**
     * Gets or sets the IP configurations of the NIC.
     */
    ipConfigurations?: NicIpConfigurationResourceSettingsResponse[];
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/networkInterfaces'.
     */
    resourceType: "Microsoft.Network/networkInterfaces";
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
}

/**
 * Defines the NSG resource settings.
 */
export interface NetworkSecurityGroupResourceSettingsResponse {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/networkSecurityGroups'.
     */
    resourceType: "Microsoft.Network/networkSecurityGroups";
    /**
     * Gets or sets Security rules of network security group.
     */
    securityRules?: NsgSecurityRuleResponse[];
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
}

/**
 * Network settings.
 */
export interface NetworkSettingsResponse {
    /**
     * Network hardware and software cost percentage.
     */
    hardwareSoftwareCostPercentage: number;
    /**
     * Network maintenance cost percentage.
     */
    maintenanceCostPercentage: number;
}

/**
 * Defines NIC IP configuration properties.
 */
export interface NicIpConfigurationResourceSettingsResponse {
    /**
     * Gets or sets the references of the load balancer backend address pools.
     */
    loadBalancerBackendAddressPools?: LoadBalancerBackendAddressPoolReferenceResponse[];
    /**
     * Gets or sets the references of the load balancer NAT rules.
     */
    loadBalancerNatRules?: LoadBalancerNatRuleReferenceResponse[];
    /**
     * Gets or sets the IP configuration name.
     */
    name?: string;
    /**
     * Gets or sets a value indicating whether this IP configuration is the primary.
     */
    primary?: boolean;
    /**
     * Gets or sets the private IP address of the network interface IP Configuration.
     */
    privateIpAddress?: string;
    /**
     * Gets or sets the private IP address allocation method.
     */
    privateIpAllocationMethod?: string;
    /**
     * Defines reference to a public IP.
     */
    publicIp?: PublicIpReferenceResponse;
    /**
     * Defines reference to subnet.
     */
    subnet?: SubnetReferenceResponse;
}

/**
 * Defines reference to NSG.
 */
export interface NsgReferenceResponse {
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: string;
}

/**
 * Security Rule data model for Network Security Groups.
 */
export interface NsgSecurityRuleResponse {
    /**
     * Gets or sets whether network traffic is allowed or denied.
     * Possible values are “Allow” and “Deny”.
     */
    access?: string;
    /**
     * Gets or sets a description for this rule. Restricted to 140 chars.
     */
    description?: string;
    /**
     * Gets or sets destination address prefix. CIDR or source IP range.
     *  A “*” can also be used to match all source IPs. Default tags such
     * as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used.
     */
    destinationAddressPrefix?: string;
    /**
     * Gets or sets Destination Port or Range. Integer or range between
     * 0 and 65535. A “*” can also be used to match all ports.
     */
    destinationPortRange?: string;
    /**
     * Gets or sets the direction of the rule.InBound or Outbound. The
     * direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    direction?: string;
    /**
     * Gets or sets the Security rule name.
     */
    name?: string;
    /**
     * Gets or sets the priority of the rule. The value can be between
     * 100 and 4096. The priority number must be unique for each rule in the collection.
     * The lower the priority number, the higher the priority of the rule.
     */
    priority?: number;
    /**
     * Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
     */
    protocol?: string;
    /**
     * Gets or sets source address prefix. CIDR or source IP range. A
     * “*” can also be used to match all source IPs.  Default tags such as ‘VirtualNetwork’,
     * ‘AzureLoadBalancer’ and ‘Internet’ can also be used. If this is an ingress
     * rule, specifies where network traffic originates from.
     */
    sourceAddressPrefix?: string;
    /**
     * Gets or sets Source Port or Range. Integer or range between 0 and
     * 65535. A “*” can also be used to match all ports.
     */
    sourcePortRange?: string;
}

/**
 * On-premise settings.
 */
export interface OnPremiseSettingsResponse {
    /**
     * Compute settings.
     */
    computeSettings: ComputeSettingsResponse;
    /**
     * Facility settings.
     */
    facilitySettings: FacilitySettingsResponse;
    /**
     * Labour settings.
     */
    laborSettings: LaborSettingsResponse;
    /**
     * Management settings.
     */
    managementSettings?: ManagementSettingsResponse;
    /**
     * Network settings.
     */
    networkSettings: NetworkSettingsResponse;
    /**
     * Security settings.
     */
    securitySettings: SecuritySettingsResponse;
    /**
     * Storage settings.
     */
    storageSettings: StorageSettingsResponse;
}

export interface OperatingSystemDetailsResponse {
    os?: string;
    osArchitecture?: string;
    osName?: string;
    osVersion?: string;
}

/**
 * Other Management Costs Settings.
 */
export interface OtherManagementCostsSettingsResponse {
    /**
     * Data Protection Cost Per Server Per Year.
     */
    dataProtectionCostPerServerPerYear: number;
    /**
     * Monitoring Cost Per Server Per Year.
     */
    monitoringCostPerServerPerYear: number;
    /**
     * Patching Cost Per Server Per Year.
     */
    patchingCostPerServerPerYear: number;
}

/**
 * Data model of Performance Data Settings.
 */
export interface PerfDataSettingsResponse {
    /**
     * Gets percentile utilization for performance data.
     */
    percentile: string;
    /**
     * Gets or sets perf data end time.
     */
    perfDataEndTime?: string;
    /**
     * Gets or sets perf data start time.
     */
    perfDataStartTime?: string;
    /**
     * Gets perf data time range.
     */
    timeRange: string;
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

/**
 * Private endpoint connection properties.
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * ARM id for the private endpoint resource corresponding to the connection.
     */
    privateEndpoint: ResourceIdResponse;
    /**
     * State of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * Indicates whether there is an ongoing operation on the private endpoint.
     */
    provisioningState: string;
}

/**
 * A private endpoint connection for a project.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * For optimistic concurrency control.
     */
    eTag?: string;
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds?: string[];
    /**
     * Path reference to this private endpoint endpoint connection. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateEndpointConnections/{privateEndpointConnectionName}
     */
    id: string;
    /**
     * Name of the private endpoint endpoint connection.
     */
    name: string;
    /**
     * The private endpoint resource.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * Properties of the private endpoint endpoint connection.
     */
    properties: PrivateEndpointConnectionPropertiesResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData?: SystemDataResponse;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects/privateEndpointConnections].
     */
    type: string;
}

/**
 * The private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for private endpoint.
     */
    id: string;
}

/**
 * State of a private endpoint connection.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * Actions required on the private endpoint connection.
     */
    actionsRequired?: string;
    /**
     * Description of the private endpoint connection.
     */
    description?: string;
    /**
     * Connection status of the private endpoint connection.
     */
    status?: string;
}

/**
 * Properties of a project.
 */
export interface ProjectPropertiesResponse {
    /**
     * Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
     */
    assessmentSolutionId?: string;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    createdTimestamp: string;
    /**
     * The ARM id of the storage account used for interactions when public access is disabled.
     */
    customerStorageAccountArmId?: string;
    /**
     * The ARM id of service map workspace created by customer.
     */
    customerWorkspaceId?: string;
    /**
     * Location of service map workspace created by customer.
     */
    customerWorkspaceLocation?: string;
    /**
     * Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
     */
    lastAssessmentTimestamp: string;
    /**
     * Number of assessments created in the project.
     */
    numberOfAssessments: number;
    /**
     * Number of groups created in the project.
     */
    numberOfGroups: number;
    /**
     * Number of machines in the project.
     */
    numberOfMachines: number;
    /**
     * The list of private endpoint connections to the project.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * Assessment project status.
     */
    projectStatus?: string;
    /**
     * Provisioning state of the project.
     */
    provisioningState: string;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
     */
    publicNetworkAccess?: string;
    /**
     * Endpoint at which the collector agent can call agent REST API.
     */
    serviceEndpoint: string;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    updatedTimestamp: string;
}

/**
 * Project summary.
 */
export interface ProjectSummaryResponse {
    /**
     * Extended summary.
     */
    extendedSummary?: {[key: string]: string};
    /**
     * Instance type.
     */
    instanceType: string;
    /**
     * Last summary refresh time.
     */
    lastSummaryRefreshedTime?: string;
    /**
     * Refresh summary state.
     */
    refreshSummaryState?: string;
}

/**
 * Defines the public IP address resource settings.
 */
export interface PublicIPAddressResourceSettingsResponse {
    /**
     * Gets or sets the domain name label.
     */
    domainNameLabel?: string;
    /**
     * Gets or sets the fully qualified domain name.
     */
    fqdn?: string;
    /**
     * Gets or sets public IP allocation method.
     */
    publicIpAllocationMethod?: string;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/publicIPAddresses'.
     */
    resourceType: "Microsoft.Network/publicIPAddresses";
    /**
     * Gets or sets public IP sku.
     */
    sku?: string;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
    /**
     * Gets or sets public IP zones.
     */
    zones?: string;
}

/**
 * Defines reference to a public IP.
 */
export interface PublicIpReferenceResponse {
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: string;
}

/**
 * Business case report details.
 */
export interface ReportDetailsResponse {
    /**
     * Report status.
     */
    reportStatus: string;
    /**
     * Report type.
     */
    reportType: string;
}

/**
 * Defines the resource group resource settings.
 */
export interface ResourceGroupResourceSettingsResponse {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'resourceGroups'.
     */
    resourceType: "resourceGroups";
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
}

/**
 * ARM id for a resource.
 */
export interface ResourceIdResponse {
    id: string;
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
 * Security settings.
 */
export interface SecuritySettingsResponse {
    /**
     * Physical servers per administrator.
     */
    serverSecurityCostPerServerPerYear: number;
    /**
     * Virtual machines per administrator.
     */
    sqlServerSecurityCostPerServerPerYear: number;
}

/**
 * Class representing the servers project summary.
 */
export interface ServersProjectSummaryResponse {
    /**
     * Gets or sets the count of entities assessed.
     */
    assessedCount?: number;
    /**
     * Gets or sets the count of entities discovered.
     */
    discoveredCount?: number;
    /**
     * Gets or sets the extended summary.
     */
    extendedSummary?: {[key: string]: string};
    /**
     * Gets the Instance type.
     * Expected value is 'Servers'.
     */
    instanceType: "Servers";
    /**
     * Gets or sets the time when summary was last refreshed.
     */
    lastSummaryRefreshedTime?: string;
    /**
     * Gets or sets the count of entities migrated.
     */
    migratedCount?: number;
    /**
     * Gets or sets the state of refresh summary.
     */
    refreshSummaryState?: string;
    /**
     * Gets or sets the count of entities being replicated.
     */
    replicatingCount?: number;
    /**
     * Gets or sets the count of entities test migrated.
     */
    testMigratedCount?: number;
}

/**
 * Class representing the servers solution summary.
 */
export interface ServersSolutionSummaryResponse {
    /**
     * Gets or sets the count of servers assessed.
     */
    assessedCount?: number;
    /**
     * Gets or sets the count of servers discovered.
     */
    discoveredCount?: number;
    /**
     * Gets the Instance type.
     * Expected value is 'Servers'.
     */
    instanceType: "Servers";
    /**
     * Gets or sets the count of servers migrated.
     */
    migratedCount?: number;
    /**
     * Gets or sets the count of servers being replicated.
     */
    replicatingCount?: number;
    /**
     * Gets or sets the count of servers test migrated.
     */
    testMigratedCount?: number;
}

/**
 * Business case settings.
 */
export interface SettingsResponse {
    /**
     * Azure arc settings.
     */
    azureArcSettings?: AzureArcSettingsResponse;
    /**
     * Azure settings for a business case.
     */
    azureSettings: AzureSettingsResponse;
    /**
     * On-premise settings.
     */
    onPremiseSettings?: OnPremiseSettingsResponse;
}
/**
 * settingsResponseProvideDefaults sets the appropriate defaults for SettingsResponse
 */
export function settingsResponseProvideDefaults(val: SettingsResponse): SettingsResponse {
    return {
        ...val,
        azureSettings: azureSettingsResponseProvideDefaults(val.azureSettings),
    };
}

/**
 * Class representing the details of the solution.
 */
export interface SolutionDetailsResponse {
    /**
     * Gets or sets the count of assessments reported by the solution.
     */
    assessmentCount?: number;
    /**
     * Gets or sets the extended details reported by the solution.
     */
    extendedDetails?: {[key: string]: string};
    /**
     * Gets or sets the count of groups reported by the solution.
     */
    groupCount?: number;
}

/**
 * Class for solution properties.
 */
export interface SolutionPropertiesResponse {
    /**
     * Gets or sets the cleanup state of the solution.
     */
    cleanupState?: string;
    /**
     * Gets or sets the details of the solution.
     */
    details?: SolutionDetailsResponse;
    /**
     * Gets or sets the goal of the solution.
     */
    goal?: string;
    /**
     * Gets or sets the purpose of the solution.
     */
    purpose?: string;
    /**
     * Gets or sets the current status of the solution.
     */
    status?: string;
    /**
     * Gets or sets the summary of the solution.
     */
    summary?: DatabasesSolutionSummaryResponse | ServersSolutionSummaryResponse;
    /**
     * Gets or sets the tool being used in the solution.
     */
    tool?: string;
}

/**
 * Defines the Sql Database resource settings.
 */
export interface SqlDatabaseResourceSettingsResponse {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Sql/servers/databases'.
     */
    resourceType: "Microsoft.Sql/servers/databases";
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
    /**
     * Defines the zone redundant resource setting.
     */
    zoneRedundant?: string;
}

/**
 * SQL database assessment settings.
 */
export interface SqlDbSettingsResponse {
    /**
     * Gets or sets the azure SQL compute tier.
     */
    azureSqlComputeTier?: string;
    /**
     * Gets or sets the azure PAAS SQL instance type.
     */
    azureSqlDataBaseType?: string;
    /**
     * Gets or sets the azure SQL purchase model.
     */
    azureSqlPurchaseModel?: string;
    /**
     * Gets or sets the azure SQL service tier.
     */
    azureSqlServiceTier?: string;
}

/**
 * Defines the Sql ElasticPool resource settings.
 */
export interface SqlElasticPoolResourceSettingsResponse {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Sql/servers/elasticPools'.
     */
    resourceType: "Microsoft.Sql/servers/elasticPools";
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
    /**
     * Defines the zone redundant resource setting.
     */
    zoneRedundant?: string;
}

/**
 * SQL managed instance assessment settings.
 */
export interface SqlMiSettingsResponse {
    /**
     * Gets or sets the azure PAAS SQL instance type.
     */
    azureSqlInstanceType?: string;
    /**
     * Gets or sets the azure SQL service tier.
     */
    azureSqlServiceTier?: string;
}

/**
 * SQL Server licensing settings.
 */
export interface SqlServerLicensingSettingsResponse {
    /**
     * Licence cost.
     */
    licenseCost: number;
    /**
     * Software assurance (SA) cost.
     */
    softwareAssuranceCost: number;
    /**
     * SQL Server version.
     */
    version: string;
}

/**
 * Defines the SQL Server resource settings.
 */
export interface SqlServerResourceSettingsResponse {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Sql/servers'.
     */
    resourceType: "Microsoft.Sql/servers";
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
}

/**
 * SQL VM assessment settings.
 */
export interface SqlVmSettingsResponse {
    /**
     * Gets or sets the Azure VM families (calling instance series to keep it
     * consistent with other targets).
     */
    instanceSeries?: string[];
}

/**
 * Storage settings.
 */
export interface StorageSettingsResponse {
    /**
     * Cost per gigabyte per month.
     */
    costPerGbPerMonth: number;
    /**
     * Maintenance cost percentage.
     */
    maintainanceCostPercentageToAcquisitionCost: number;
}

/**
 * Defines reference to subnet.
 */
export interface SubnetReferenceResponse {
    /**
     * Gets the name of the proxy resource on the target side.
     */
    name?: string;
    /**
     * Gets the ARM resource ID of the tracked resource being referenced.
     */
    sourceArmResourceId: string;
}

/**
 * Defines the virtual network subnets resource settings.
 */
export interface SubnetResourceSettingsResponse {
    /**
     * Gets or sets address prefix for the subnet.
     */
    addressPrefix?: string;
    /**
     * Gets or sets the Subnet name.
     */
    name?: string;
    /**
     * Defines reference to NSG.
     */
    networkSecurityGroup?: NsgReferenceResponse;
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

/**
 * Third Party Management settings.
 */
export interface ThirdPartyManagementSettingsResponse {
    /**
     * License Cost.
     */
    licenseCost: number;
    /**
     * Support Cost.
     */
    supportCost: number;
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
 * Gets or sets the virtual machine resource settings.
 */
export interface VirtualMachineResourceSettingsResponse {
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Compute/virtualMachines'.
     */
    resourceType: "Microsoft.Compute/virtualMachines";
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target availability set id for virtual machines not in an availability set at source.
     */
    targetAvailabilitySetId?: string;
    /**
     * Gets or sets the target availability zone.
     */
    targetAvailabilityZone?: string;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
    /**
     * Gets or sets the target virtual machine size.
     */
    targetVmSize?: string;
    /**
     * Gets or sets user-managed identities
     */
    userManagedIdentities?: string[];
}

/**
 * Defines the virtual network resource settings.
 */
export interface VirtualNetworkResourceSettingsResponse {
    /**
     * Gets or sets the address prefixes for the virtual network.
     */
    addressSpace?: string[];
    /**
     * Gets or sets DHCPOptions that contains an array of DNS servers available to VMs
     * deployed in the virtual network.
     */
    dnsServers?: string[];
    /**
     * Gets or sets a value indicating whether gets or sets whether the
     * DDOS protection should be switched on.
     */
    enableDdosProtection?: boolean;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/virtualNetworks'.
     */
    resourceType: "Microsoft.Network/virtualNetworks";
    /**
     * Gets or sets List of subnets in a VirtualNetwork.
     */
    subnets?: SubnetResourceSettingsResponse[];
    /**
     * Gets or sets the Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: string;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: string;
}

/**
 * Virtualization software settings.
 */
export interface VirtualizationSoftwareSettingsResponse {
    /**
     * VMware cloud foundation license cost.
     */
    vMwareCloudFoundationLicenseCost: number;
}

/**
 * Details on the total up-time for the VM.
 */
export interface VmUptimeResponse {
    /**
     * Number of days in a month for VM uptime.
     */
    daysPerMonth?: number;
    /**
     * Number of hours per day for VM uptime.
     */
    hoursPerDay?: number;
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
 * Windows Server licensing settings.
 */
export interface WindowsServerLicensingSettingsResponse {
    /**
     * Licence Cost.
     */
    licenseCost: number;
    /**
     * Licenses per core.
     */
    licensesPerCore: number;
    /**
     * Software assurance (SA) cost.
     */
    softwareAssuranceCost: number;
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
