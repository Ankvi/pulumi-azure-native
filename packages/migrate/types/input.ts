import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Class for ACR Properties.
 */
export interface ACRPropertiesArgs {
    /**
     * Gets or sets the azure container registry name.
     */
    registryName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the resource group of the resource.
     */
    resourceGroup?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the subscription id of the resource.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the tenant id.
     */
    tenantId?: pulumi.Input<string | undefined>;
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
    discountPercentage?: pulumi.Input<number | undefined>;
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
    performanceData?: pulumi.Input<PerfDataSettingsArgs | undefined>;
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
    scalingFactor?: pulumi.Input<number | undefined>;
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
    aksClusterName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the resource group of the resource.
     */
    resourceGroup?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the subscription id of the resource.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the tenant id.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * AKS Deployment Specification.
 */
export interface AKSDeploymentSpecificationArgs {
    /**
     * Gets or sets the Merged Deployment and service Yaml.
     */
    kubernetesObjectsYaml?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the load balancer type.
     */
    loadBalancerType?: pulumi.Input<string | enums.LoadBalancerType | undefined>;
    /**
     * Gets or sets the replica count to be created in AKS.
     */
    replicaCount?: pulumi.Input<string | undefined>;
}

/**
 * ApacheTomcat web application.
 */
export interface ApacheTomcatAKSWorkloadDeploymentArgs {
    /**
     * Class for automation artifact.
     */
    automationArtifactProperties?: pulumi.Input<AutomationArtifactArgs | undefined>;
    /**
     * Gets or sets the bindings for the application.
     */
    bindings?: pulumi.Input<pulumi.Input<BindingArgs>[] | undefined>;
    /**
     * Gets or sets the build container images.
     */
    buildContainerImages?: pulumi.Input<pulumi.Input<ContainerImagePropertiesArgs>[] | undefined>;
    /**
     * Class for AKSDeployment Properties.
     */
    clusterProperties?: pulumi.Input<AKSDeploymentPropertiesArgs | undefined>;
    /**
     * Gets or sets application configuration.
     */
    configurations?: pulumi.Input<pulumi.Input<WebApplicationConfigurationArgs>[] | undefined>;
    /**
     * Class for container image properties.
     */
    containerImageProperties?: pulumi.Input<ContainerImagePropertiesArgs | undefined>;
    /**
     * Gets or sets the deployment name prefix.
     */
    deploymentNamePrefix?: pulumi.Input<string | undefined>;
    /**
     * AKS Deployment Specification.
     */
    deploymentSpec?: pulumi.Input<AKSDeploymentSpecificationArgs | undefined>;
    /**
     * Gets or sets application directories.
     */
    directories?: pulumi.Input<pulumi.Input<WebApplicationDirectoryArgs>[] | undefined>;
    /**
     * Resource Requirements.
     */
    limits?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * Class for app insight monitoring properties.
     */
    monitoringProperties?: pulumi.Input<AppInsightMonitoringPropertiesArgs | undefined>;
    /**
     * Resource Requirements.
     */
    requests?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * Gets or sets the target platform managed identity.
     */
    targetPlatformIdentity?: pulumi.Input<string | undefined>;
}

/**
 * ApacheTomcat workload instance model custom properties.
 */
export interface ApacheTomcatAKSWorkloadDeploymentModelCustomPropertiesArgs {
    /**
     * ApacheTomcat web application.
     */
    apacheTomcatAksWorkloadDeploymentProperties?: pulumi.Input<ApacheTomcatAKSWorkloadDeploymentArgs | undefined>;
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
    applicationId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the web application name.
     */
    applicationName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets application scratch path.
     */
    applicationScratchPath?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the bindings for the application.
     */
    bindings?: pulumi.Input<pulumi.Input<BindingArgs>[] | undefined>;
    /**
     * Gets or sets application configuration.
     */
    configurations?: pulumi.Input<pulumi.Input<WebApplicationConfigurationArgs>[] | undefined>;
    /**
     * Gets or sets application directories.
     */
    directories?: pulumi.Input<pulumi.Input<WebApplicationDirectoryArgs>[] | undefined>;
    /**
     * Gets or sets the discovered frameworks of application.
     */
    discoveredFrameworks?: pulumi.Input<pulumi.Input<WebApplicationFrameworkArgs>[] | undefined>;
    /**
     * Gets or sets the display name.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Resource Requirements.
     */
    limits?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * Second level entity for virtual directories.
     */
    path?: pulumi.Input<DirectoryPathArgs | undefined>;
    /**
     * Framework specific data for a web application.
     */
    primaryFramework?: pulumi.Input<WebApplicationFrameworkArgs | undefined>;
    /**
     * Resource Requirements.
     */
    requests?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * Gets or sets the web server id.
     */
    webServerId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the web server name.
     */
    webServerName?: pulumi.Input<string | undefined>;
}

/**
 * ApacheTomcat workload instance model custom properties.
 */
export interface ApacheTomcatWorkloadInstanceModelCustomPropertiesArgs {
    /**
     * ApacheTomcat web application.
     */
    apacheTomcatWebApplication?: pulumi.Input<ApacheTomcatWebApplicationArgs | undefined>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'ApacheTomcatWorkloadInstanceModelCustomProperties'.
     */
    instanceType: pulumi.Input<"ApacheTomcatWorkloadInstanceModelCustomProperties">;
    /**
     * Gets or sets the Web application ARM id.
     */
    webAppArmId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the Web application site name.
     */
    webAppSiteName?: pulumi.Input<string | undefined>;
}

/**
 * Class for app insight monitoring properties.
 */
export interface AppInsightMonitoringPropertiesArgs {
    /**
     * Gets or sets the app insights name.
     */
    appInsightsName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a value indicating whether monitoring is enabled.
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the region.
     */
    region?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the resource group of the resource.
     */
    resourceGroup?: pulumi.Input<string | undefined>;
    secretStoreDetails?: pulumi.Input<SecretStoreDetailsArgs | undefined>;
    /**
     * Gets or sets the subscription id of the resource.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
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
 * ARG query and other details to create workloads within a wave.
 */
export interface ArgArgs {
    /**
     * The query to create workloads within the wave.
     */
    query: pulumi.Input<string>;
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
    serverGroupId?: pulumi.Input<string | undefined>;
}

/**
 * Class for automation artifact.
 */
export interface AutomationArtifactArgs {
    /**
     * Gets or sets the artifacts.
     */
    artifacts?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Azure file share profile for hydration of application folders not mounted on
     * the container file system.
     */
    azureFileShareProfile?: pulumi.Input<AzureFileShareHydrationProfileArgs | undefined>;
    /**
     * Gets or sets the status of automation artifacts.
     */
    status?: pulumi.Input<string | enums.AutomationArtifactStatus | undefined>;
}

/**
 * Gets or sets the availability set resource settings.
 */
export interface AvailabilitySetResourceSettingsArgs {
    /**
     * Gets or sets the target fault domain.
     */
    faultDomain?: pulumi.Input<number | undefined>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Compute/availabilitySets'.
     */
    resourceType: pulumi.Input<"Microsoft.Compute/availabilitySets">;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target update domain.
     */
    updateDomain?: pulumi.Input<number | undefined>;
}

/**
 * Assessment properties class.
 */
export interface AvsAssessmentPropertiesV2Args {
    /**
     * Gets or sets the machine assessment ARM ID for VM fallback.
     */
    fallbackMachineAssessmentArmId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the scope of assessment.
     */
    scope?: pulumi.Input<ScopeArgs | undefined>;
    /**
     * Gets or sets the settings for the assessment.
     */
    settings?: pulumi.Input<AvsAssessmentSettingsArgs | undefined>;
}

/**
 * Properties of the AVS assessment.
 */
export interface AvsAssessmentSettingsArgs {
    /**
     * AVS Assessment Scenario.
     */
    avsAssessmentScenario?: pulumi.Input<string | enums.AvsAssessmentScenario | undefined>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    azureLocation?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the billing settings.
     */
    billingSettings?: pulumi.Input<BillingSettingsArgs | undefined>;
    /**
     * Gets or sets the CPU headroom.
     */
    cpuHeadroom?: pulumi.Input<number | undefined>;
    /**
     * Currency in which prices should be reported.
     */
    currency?: pulumi.Input<string | enums.AzureCurrency | undefined>;
    /**
     * De-duplication compression.
     */
    dedupeCompression?: pulumi.Input<number | undefined>;
    /**
     * Custom discount percentage.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets user configurable setting to display the environment type.
     */
    environmentType?: pulumi.Input<string | enums.EnvironmentType | undefined>;
    /**
     * List of AVS external storage types.
     */
    externalStorageTypes?: pulumi.Input<pulumi.Input<string | enums.ExternalStorageType>[] | undefined>;
    /**
     * List of Failures to tolerate and RAID levels in a common property.
     */
    failuresToTolerateAndRaidLevelList?: pulumi.Input<pulumi.Input<string | enums.FttAndRaidLevel>[] | undefined>;
    /**
     * Is Stretch Cluster Enabled.
     */
    isStretchClusterEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Is VCF license applied
     */
    isVcfByolEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Memory overcommit.
     */
    memOvercommit?: pulumi.Input<number | undefined>;
    /**
     * AVS node types.
     */
    nodeTypes?: pulumi.Input<pulumi.Input<string | enums.AzureAvsNodeType>[] | undefined>;
    /**
     * Gets or sets the performance data.
     */
    performanceData?: pulumi.Input<PerformanceDataArgs | undefined>;
    /**
     * Gets or sets the savings settings.
     */
    savingsSettings?: pulumi.Input<SavingsSettingsArgs | undefined>;
    /**
     * Percentage of buffer that user wants on performance metrics when recommending
     * Azure sizes.
     */
    scalingFactor?: pulumi.Input<number | undefined>;
    /**
     * Assessment sizing criterion.
     */
    sizingCriterion?: pulumi.Input<string | enums.AssessmentSizingCriterion | undefined>;
    /**
     * VCPU over subscription.
     */
    vcpuOversubscription?: pulumi.Input<number | undefined>;
}

/**
 * Azure Arc Management settings.
 */
export interface AzureArcManagementSettingsArgs {
    /**
     * Gets the azure arc monitoring settings.
     */
    monitoringSettings: pulumi.Input<AzureArcMonitoringSettingsArgs>;
}

/**
 * Azure Arc Monitoring settings.
 */
export interface AzureArcMonitoringSettingsArgs {
    /**
     * Number of alert rules settings.
     */
    alertRulesCount: pulumi.Input<number>;
    /**
     * Logs volume settings.
     */
    logsVolumeInGB: pulumi.Input<number>;
}

/**
 * Azure arc settings for a business case.
 */
export interface AzureArcSettingsArgs {
    /**
     * AzureArc state indicates whether to include azure arc related costs in on-premises or not.
     */
    azureArcState: pulumi.Input<string | enums.AzureArcState>;
    /**
     * Gets Azure arc labour cost percentage.
     */
    laborCostPercentage?: pulumi.Input<number | undefined>;
    /**
     * Management settings.
     */
    managementSettings?: pulumi.Input<AzureArcManagementSettingsArgs | undefined>;
}

/**
 * Azure file share profile for hydration of application folders not mounted on
 * the container file system.
 */
export interface AzureFileShareHydrationProfileArgs {
    /**
     * Gets or sets the cloud directory path of the directory on azure file share.
     */
    azureFileShareDirPath?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the name of the azure file share.
     */
    azureFileShareName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the name of the azure file share resource group.
     */
    azureFileShareResourceGroup?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the name of the azure file share storage account.
     */
    azureFileShareStorageAccount?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the subscription id of the azure file share.
     */
    azureFileShareSubscriptionId?: pulumi.Input<string | undefined>;
}

/**
 * Azure settings for a business case.
 */
export interface AzureSettingsArgs {
    /**
     * Gets Avs labour cost percentage.
     */
    avsLaborCostPercentage?: pulumi.Input<number | undefined>;
    /**
     * Migration Strategy.
     */
    businessCaseType?: pulumi.Input<string | enums.MigrationStrategy | undefined>;
    /**
     * Gets comfort factor.
     */
    comfortFactor?: pulumi.Input<number | undefined>;
    /**
     * Business case Currency.
     */
    currency: pulumi.Input<string | enums.BusinessCaseCurrency>;
    /**
     * Gets azure Discount percentage.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Gets IaaS labour cost percentage.
     */
    iaasLaborCostPercentage?: pulumi.Input<number | undefined>;
    /**
     * Gets infrastructure growth rate.
     */
    infrastructureGrowthRate?: pulumi.Input<number | undefined>;
    /**
     * Gets network cost percentage.
     */
    networkCostPercentage?: pulumi.Input<number | undefined>;
    /**
     * Gets PaaS labour cost percentage.
     */
    paasLaborCostPercentage?: pulumi.Input<number | undefined>;
    /**
     * Gets migration completion percentage per year.
     */
    perYearMigrationCompletionPercentage?: pulumi.Input<{[key: string]: pulumi.Input<number>} | undefined>;
    /**
     * Gets end time to use for performance.
     */
    performanceDataEndTime?: pulumi.Input<string | undefined>;
    /**
     * Gets start time to use for performance.
     */
    performanceDataStartTime?: pulumi.Input<string | undefined>;
    /**
     * Gets utilization percentile for performance.
     */
    performanceUtilizationPercentile?: pulumi.Input<number | undefined>;
    /**
     * Gets the business case savings option type.
     */
    savingsOption?: pulumi.Input<string | enums.SavingsOption | undefined>;
    /**
     * Gets or sets azure location.
     */
    targetLocation: pulumi.Input<string>;
    /**
     * Gets wACC percentage.
     */
    wacc?: pulumi.Input<number | undefined>;
    /**
     * Workload discovery source.
     */
    workloadDiscoverySource?: pulumi.Input<string | enums.DiscoverySource | undefined>;
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
 * Billing settings class.
 */
export interface BillingSettingsArgs {
    /**
     * Gets or sets the licensing program.
     */
    licensingProgram?: pulumi.Input<string | enums.LicensingProgram | undefined>;
    /**
     * Gets or sets the subscription ID for licensing program selected.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
}

/**
 * Binding for a web application.
 */
export interface BindingArgs {
    /**
     * WebApplication certificate.
     */
    cert?: pulumi.Input<CertArgs | undefined>;
    /**
     * Gets or sets the binding host name.
     */
    hostName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the IP Address.
     */
    ipAddress?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the application port.
     */
    port?: pulumi.Input<string | undefined>;
    /**
     * WebApplication port mapping.
     */
    portMapping?: pulumi.Input<PortMappingArgs | undefined>;
    /**
     * Gets or sets the protocol.
     */
    protocol?: pulumi.Input<string | undefined>;
}

/**
 * WebApplication certificate.
 */
export interface CertArgs {
    /**
     * Gets or sets the Certificate data.
     */
    certData?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a value indicating whether certificate is needed or not.
     */
    certNeeded?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets a value indicating whether certificate is provided or not.
     */
    certProvided?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the type of secret store for the certificate.
     */
    secretStore?: pulumi.Input<string | enums.SecretStoreType | undefined>;
}

export interface CollectorAgentPropertiesArgs {
    spnDetails?: pulumi.Input<CollectorBodyAgentSpnPropertiesArgs | undefined>;
}

/**
 * Collector agent property class.
 */
export interface CollectorAgentPropertiesBaseArgs {
    /**
     * Gets the collector agent id.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Gets the collector last heartbeat time.
     */
    lastHeartbeatUtc?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the SPN details.
     */
    spnDetails?: pulumi.Input<CollectorAgentSpnPropertiesBaseArgs | undefined>;
    /**
     * Gets the collector agent version.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Collector agent SPN details class.
 */
export interface CollectorAgentSpnPropertiesBaseArgs {
    /**
     * Gets the AAD application id.
     */
    applicationId?: pulumi.Input<string | undefined>;
    /**
     * Gets the AAD audience url.
     */
    audience?: pulumi.Input<string | undefined>;
    /**
     * Gets the AAD authority endpoint.
     */
    authority?: pulumi.Input<string | undefined>;
    /**
     * Gets the object id of the AAD application.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * Gets the tenant id of the AAD application.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

export interface CollectorBodyAgentSpnPropertiesArgs {
    /**
     * Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    applicationId?: pulumi.Input<string | undefined>;
    /**
     * Intended audience for the service principal.
     */
    audience?: pulumi.Input<string | undefined>;
    /**
     * AAD Authority URL which was used to request the token for the service principal.
     */
    authority?: pulumi.Input<string | undefined>;
    /**
     * Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

export interface CollectorPropertiesArgs {
    agentProperties?: pulumi.Input<CollectorAgentPropertiesArgs | undefined>;
    /**
     * The ARM id of the discovery service site.
     */
    discoverySiteId?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a compound assessment.
 */
export interface CompoundAssessmentPropertiesArgs {
    /**
     * Fallback machine assessment ARM ID.
     */
    fallbackMachineAssessmentArmId?: pulumi.Input<string | undefined>;
    /**
     * ARM IDs of the target assessments.
     */
    targetAssessmentArmIds: pulumi.Input<TargetAssessmentArmIdsArgs>;
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
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs | undefined>;
}

/**
 * Class for container image properties.
 */
export interface ContainerImagePropertiesArgs {
    /**
     * Gets or sets the dockerfile for the container image.
     */
    dockerfile?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the container image name.
     */
    imageName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the container image tag.
     */
    imageTag?: pulumi.Input<string | undefined>;
    /**
     * Class for ACR Properties.
     */
    registryProperties?: pulumi.Input<ACRPropertiesArgs | undefined>;
    /**
     * Gets or sets the RunId.
     */
    runId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the RunStatus.
     */
    runStatus?: pulumi.Input<string | undefined>;
}

/**
 * Second level entity for virtual directories.
 */
export interface DirectoryPathArgs {
    /**
     * Gets or sets the physical path of the directory on the web server.
     */
    physical?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the virtual path for the directory.
     */
    virtual?: pulumi.Input<string | undefined>;
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
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
}

/**
 * Entity Uptime.
 */
export interface EntityUptimeArgs {
    /**
     * Gets the days per month.
     */
    daysPerMonth?: pulumi.Input<number | undefined>;
    /**
     * Gets the hours per day.
     */
    hoursPerDay?: pulumi.Input<number | undefined>;
}

/**
 * Facility settings.
 */
export interface FacilitySettingsArgs {
    /**
     * The facilities cost.
     */
    facilitiesCostPerKwh?: pulumi.Input<number | undefined>;
}

/**
 * Class for GMSA authentication details to configure Active Directory connectivity.
 */
export interface GmsaAuthenticationPropertiesArgs {
    /**
     * Gets or sets the list of dns server that can resolve the Active Directory Domain Name/Address.
     */
    adDomainControllerDns?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the FQDN of the Active Directory Domain. For e.g. 'contoso.local', 'fareast.corp.microsoft.com' etc.
     */
    adDomainFqdn?: pulumi.Input<string | undefined>;
    akvProperties?: pulumi.Input<KeyVaultSecretStorePropertiesArgs | undefined>;
    /**
     * Gets or sets the password of the user specified by RestApi.Controllers.V2022_05_01_preview.Models.WorkloadDeployment.Gmsa.GmsaAuthenticationProperties.DomainAdminUsername.
     */
    domainAdminPassword?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the name of the user having admin rights on the Active Directory Domain Controller.
     */
    domainAdminUsername?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the address of the Active Directory Domain Controller running Domain Services.
     */
    domainControllerAddress?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the name to be used for GMSA.
     */
    gmsaAccountName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the password of the user specified by RestApi.Controllers.V2022_05_01_preview.Models.WorkloadDeployment.Gmsa.GmsaAuthenticationProperties.GmsaUsername.
     */
    gmsaUserPassword?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets username of the user having authorization to access GMSA on Active Directory.
     */
    gmsaUsername?: pulumi.Input<string | undefined>;
}

/**
 * Properties of group resource.
 */
export interface GroupPropertiesArgs {
    /**
     * The type of group.
     */
    groupType?: pulumi.Input<string | undefined>;
}

/**
 * Properties of an assessment.
 */
export interface HeterogeneousAssessmentPropertiesArgs {
    /**
     * Arm id of partner assessments.
     */
    assessmentArmIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
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
    authenticationProperties?: pulumi.Input<GmsaAuthenticationPropertiesArgs | undefined>;
    /**
     * Class for automation artifact.
     */
    automationArtifactProperties?: pulumi.Input<AutomationArtifactArgs | undefined>;
    /**
     * Gets or sets the bindings for the application.
     */
    bindings?: pulumi.Input<pulumi.Input<BindingArgs>[] | undefined>;
    /**
     * Gets or sets the build container images.
     */
    buildContainerImages?: pulumi.Input<pulumi.Input<ContainerImagePropertiesArgs>[] | undefined>;
    /**
     * Class for AKSDeployment Properties.
     */
    clusterProperties?: pulumi.Input<AKSDeploymentPropertiesArgs | undefined>;
    /**
     * Gets or sets application configuration.
     */
    configurations?: pulumi.Input<pulumi.Input<WebApplicationConfigurationArgs>[] | undefined>;
    /**
     * Class for container image properties.
     */
    containerImageProperties?: pulumi.Input<ContainerImagePropertiesArgs | undefined>;
    /**
     * Gets or sets the deployment name prefix.
     */
    deploymentNamePrefix?: pulumi.Input<string | undefined>;
    /**
     * AKS Deployment Specification.
     */
    deploymentSpec?: pulumi.Input<AKSDeploymentSpecificationArgs | undefined>;
    /**
     * Gets or sets application directories.
     */
    directories?: pulumi.Input<pulumi.Input<WebApplicationDirectoryArgs>[] | undefined>;
    /**
     * Resource Requirements.
     */
    limits?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * Class for app insight monitoring properties.
     */
    monitoringProperties?: pulumi.Input<AppInsightMonitoringPropertiesArgs | undefined>;
    /**
     * Resource Requirements.
     */
    requests?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * Gets or sets the target platform managed identity.
     */
    targetPlatformIdentity?: pulumi.Input<string | undefined>;
}

/**
 * IIS workload instance model custom properties.
 */
export interface IISAKSWorkloadDeploymentModelCustomPropertiesArgs {
    /**
     * IIS AKS workload deployment.
     */
    iisAksWorkloadDeploymentProperties?: pulumi.Input<IISAKSWorkloadDeploymentArgs | undefined>;
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
    applicationPoolName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the list of directories.
     */
    directories?: pulumi.Input<pulumi.Input<DirectoryPathArgs>[] | undefined>;
    /**
     * Gets or sets a value indicating whether 32 bit applications are allowed to run on 64 bit.
     */
    enable32BitApiOnWin64?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the managed pipeline mode.
     */
    managedPipelineMode?: pulumi.Input<string | undefined>;
    /**
     * Second level entity for virtual directories.
     */
    path?: pulumi.Input<DirectoryPathArgs | undefined>;
    /**
     * Gets or sets the runtime version.
     */
    runtimeVersion?: pulumi.Input<string | undefined>;
}

/**
 * IIS virtual application details.
 */
export interface IISVirtualApplicationDetailsArgs {
    /**
     * Gets or sets the list of directories.
     */
    directories?: pulumi.Input<pulumi.Input<DirectoryPathArgs>[] | undefined>;
    /**
     * Second level entity for virtual directories.
     */
    path?: pulumi.Input<DirectoryPathArgs | undefined>;
}

/**
 * IISWeb application.
 */
export interface IISWebApplicationArgs {
    /**
     * Gets or sets the web application id.
     */
    applicationId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the web application name.
     */
    applicationName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets application scratch path.
     */
    applicationScratchPath?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the list of applications for the IIS web site.
     */
    applications?: pulumi.Input<pulumi.Input<IISApplicationDetailsArgs>[] | undefined>;
    /**
     * Gets or sets the bindings for the application.
     */
    bindings?: pulumi.Input<pulumi.Input<BindingArgs>[] | undefined>;
    /**
     * Gets or sets application configuration.
     */
    configurations?: pulumi.Input<pulumi.Input<WebApplicationConfigurationArgs>[] | undefined>;
    /**
     * Gets or sets application directories.
     */
    directories?: pulumi.Input<pulumi.Input<WebApplicationDirectoryArgs>[] | undefined>;
    /**
     * Gets or sets the discovered frameworks of application.
     */
    discoveredFrameworks?: pulumi.Input<pulumi.Input<WebApplicationFrameworkArgs>[] | undefined>;
    /**
     * Gets or sets the display name.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * IISWeb server.
     */
    iisWebServer?: pulumi.Input<IISWebServerArgs | undefined>;
    /**
     * Resource Requirements.
     */
    limits?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * Second level entity for virtual directories.
     */
    path?: pulumi.Input<DirectoryPathArgs | undefined>;
    /**
     * Framework specific data for a web application.
     */
    primaryFramework?: pulumi.Input<WebApplicationFrameworkArgs | undefined>;
    /**
     * Resource Requirements.
     */
    requests?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * Gets or sets the list of application units for the web site.
     */
    virtualApplications?: pulumi.Input<pulumi.Input<IISVirtualApplicationDetailsArgs>[] | undefined>;
    /**
     * Gets or sets the web server id.
     */
    webServerId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the web server name.
     */
    webServerName?: pulumi.Input<string | undefined>;
}

/**
 * IISWeb server.
 */
export interface IISWebServerArgs {
    /**
     * Gets or sets the display name.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets list of ip addresses.
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets the list of machines.
     */
    machines?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    operatingSystemDetails?: pulumi.Input<OperatingSystemDetailsArgs | undefined>;
    /**
     * Gets or sets the server root configuration location.
     */
    rootConfigurationLocation?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the run as account id.
     */
    runAsAccountId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the server FQDN.
     */
    serverFqdn?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the web server id.
     */
    serverId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the web server name.
     */
    serverName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the server version.
     */
    version?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the list of web applications.
     */
    webApplications?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * IIS workload instance model custom properties.
 */
export interface IISWorkloadInstanceModelCustomPropertiesArgs {
    /**
     * Gets or sets the container Id.
     */
    containerName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the fileshare name.
     */
    fileshareName?: pulumi.Input<string | undefined>;
    /**
     * IISWeb application.
     */
    iisWebApplication?: pulumi.Input<IISWebApplicationArgs | undefined>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'IISWorkloadInstanceModelCustomProperties'.
     */
    instanceType: pulumi.Input<"IISWorkloadInstanceModelCustomProperties">;
    /**
     * Gets or sets the Web application ARM id.
     */
    webAppArmId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the Web application site name.
     */
    webAppSiteName?: pulumi.Input<string | undefined>;
}

/**
 * Defines the MSI properties of the Move Collection.
 */
export interface IdentityArgs {
    /**
     * Gets or sets the principal id.
     */
    principalId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the tenant id.
     */
    tenantId?: pulumi.Input<string | undefined>;
    /**
     * The type of identity used for the resource mover service.
     */
    type?: pulumi.Input<string | enums.ResourceIdentityType | undefined>;
}

/**
 * Identity model.
 */
export interface IdentityModelArgs {
    /**
     * Gets or sets the authority of the SPN with which MigrateAgent communicates to service.
     */
    aadAuthority?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the client/application Id of the SPN with which MigrateAgent communicates to
     * service.
     */
    applicationId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the audience of the SPN with which MigrateAgent communicates to service.
     */
    audience?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the object Id of the SPN with which MigrateAgent communicates to service.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the tenant Id of the SPN with which MigrateAgent communicates to service.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

export interface ImportCollectorPropertiesArgs {
    discoverySiteId?: pulumi.Input<string | undefined>;
}

/**
 * Import SQL Collector properties class.
 */
export interface ImportSqlCollectorPropertiesArgs {
    /**
     * The sql db extended details.
     */
    discoverySiteId?: pulumi.Input<string | undefined>;
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
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
}

export interface KeyVaultSecretStorePropertiesArgs {
    keyvaultName?: pulumi.Input<string | undefined>;
    managedIdentityProperties?: pulumi.Input<ManagedIdentityPropertiesArgs | undefined>;
    resourceGroup?: pulumi.Input<string | undefined>;
    secretStoreId?: pulumi.Input<string | undefined>;
    subscriptionId?: pulumi.Input<string | undefined>;
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Defines load balancer backend address pool properties.
 */
export interface LBBackendAddressPoolResourceSettingsArgs {
    /**
     * Gets or sets the backend address pool name.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Defines load balancer frontend IP configuration properties.
 */
export interface LBFrontendIPConfigurationResourceSettingsArgs {
    /**
     * Gets or sets the frontend IP configuration name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the IP address of the Load Balancer.This is only specified if a specific
     * private IP address shall be allocated from the subnet specified in subnetRef.
     */
    privateIpAddress?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets PrivateIP allocation method (Static/Dynamic).
     */
    privateIpAllocationMethod?: pulumi.Input<string | undefined>;
    /**
     * Defines reference to subnet.
     */
    subnet?: pulumi.Input<SubnetReferenceArgs | undefined>;
    /**
     * Gets or sets the csv list of zones.
     */
    zones?: pulumi.Input<string | undefined>;
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
    name?: pulumi.Input<string | undefined>;
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
    name?: pulumi.Input<string | undefined>;
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
    backendAddressPools?: pulumi.Input<pulumi.Input<LBBackendAddressPoolResourceSettingsArgs>[] | undefined>;
    /**
     * Gets or sets the frontend IP configurations of the load balancer.
     */
    frontendIPConfigurations?: pulumi.Input<pulumi.Input<LBFrontendIPConfigurationResourceSettingsArgs>[] | undefined>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/loadBalancers'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/loadBalancers">;
    /**
     * Gets or sets load balancer sku (Basic/Standard).
     */
    sku?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the csv list of zones common for all frontend IP configurations. Note this is given
     *  precedence only if frontend IP configurations settings are not present.
     */
    zones?: pulumi.Input<string | undefined>;
}

/**
 * Properties of an assessment.
 */
export interface MachineAssessmentSettingsArgs {
    /**
     * The disk type for the assessment.
     */
    azureDiskTypes?: pulumi.Input<pulumi.Input<string | enums.AzureDiskType>[] | undefined>;
    /**
     * Gets or sets the user configurable setting to display the azure hybrid use
     * benefit.
     */
    azureHybridUseBenefit?: pulumi.Input<string | enums.AzureHybridUseBenefit | undefined>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    azureLocation?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets Azure Pricing Tier - Free, Basic, etc.
     */
    azurePricingTier?: pulumi.Input<string | enums.AzurePricingTier | undefined>;
    /**
     * The azure security offering type.
     */
    azureSecurityOfferingType?: pulumi.Input<string | enums.AzureSecurityOfferingType | undefined>;
    /**
     * Gets or sets the Azure Storage Redundancy. Example: Locally Redundant Storage.
     */
    azureStorageRedundancy?: pulumi.Input<string | enums.AzureStorageRedundancy | undefined>;
    /**
     * Gets or sets the Azure VM families.
     */
    azureVmFamilies?: pulumi.Input<pulumi.Input<string | enums.AzureVmFamily>[] | undefined>;
    /**
     * Gets or sets the Azure VM security options.
     */
    azureVmSecurityOptions?: pulumi.Input<pulumi.Input<string | enums.AzureVmSecurityType>[] | undefined>;
    /**
     * Gets or sets the billing settings.
     */
    billingSettings?: pulumi.Input<BillingSettingsArgs | undefined>;
    /**
     * Currency in which prices should be reported.
     */
    currency?: pulumi.Input<string | enums.AzureCurrency | undefined>;
    /**
     * Custom discount percentage.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets user configurable setting to display the environment type.
     */
    environmentType?: pulumi.Input<string | enums.EnvironmentType | undefined>;
    /**
     * Gets or sets the user configurable setting to display the linux azure hybrid use
     * benefit.
     */
    linuxAzureHybridUseBenefit?: pulumi.Input<string | enums.AzureHybridUseBenefit | undefined>;
    /**
     * Gets or sets the performance data.
     */
    performanceData?: pulumi.Input<PerformanceDataArgs | undefined>;
    /**
     * Gets or sets the savings settings.
     */
    savingsSettings?: pulumi.Input<SavingsSettingsArgs | undefined>;
    /**
     * Percentage of buffer that user wants on performance metrics when recommending
     * Azure sizes.
     */
    scalingFactor?: pulumi.Input<number | undefined>;
    /**
     * Assessment sizing criterion.
     */
    sizingCriterion?: pulumi.Input<string | enums.AssessmentSizingCriterion | undefined>;
    /**
     * Gets or sets the duration for which the VMs are up in the on-premises
     * environment.
     */
    vmUptime?: pulumi.Input<VmUptimeArgs | undefined>;
}

/**
 * Assessment properties class.
 */
export interface MachineAssessmentV2PropertiesArgs {
    /**
     * Gets or sets the scope of assessment.
     */
    scope?: pulumi.Input<ScopeArgs | undefined>;
    /**
     * Gets or sets the settings for the assessment.
     */
    settings?: pulumi.Input<MachineAssessmentSettingsArgs | undefined>;
}

export interface ManagedIdentityPropertiesArgs {
    clientId?: pulumi.Input<string | undefined>;
    managedIdentityName?: pulumi.Input<string | undefined>;
    principalId?: pulumi.Input<string | undefined>;
    resourceGroup?: pulumi.Input<string | undefined>;
    subscriptionId?: pulumi.Input<string | undefined>;
    tenantId?: pulumi.Input<string | undefined>;
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
}

/**
 * MigrateAgent model properties.
 */
export interface MigrateAgentModelPropertiesArgs {
    /**
     * Identity model.
     */
    authenticationIdentity?: pulumi.Input<IdentityModelArgs | undefined>;
    /**
     * MigrateAgent model custom properties.
     */
    customProperties?: pulumi.Input<VMwareMigrateAgentModelCustomPropertiesArgs | undefined>;
    /**
     * Gets or sets the machine Id where MigrateAgent is running.
     */
    machineId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the machine name where MigrateAgent is running.
     */
    machineName?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a migrate project.
 */
export interface MigrateProjectPropertiesArgs {
    /**
     * Provisioning state of the migrate project.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState | undefined>;
    /**
     * Gets or sets the state of public network access.
     */
    publicNetworkAccess?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the list of tools registered with the migrate project.
     */
    registeredTools?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Service endpoint.
     */
    serviceEndpoint?: pulumi.Input<string | undefined>;
    /**
     * Utility storage account id.
     */
    utilityStorageAccountId?: pulumi.Input<string | undefined>;
}

/**
 * Gets or sets the tags.
 */
export interface MigrateProjectTagsArgs {
    additionalProperties?: pulumi.Input<string | undefined>;
}

/**
 * MigrationConfiguration properties.
 */
export interface MigrationConfigurationArgs {
    /**
     * Gets or sets the key vault resource Id.
     */
    keyVaultResourceId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the migration solution resource Id.
     */
    migrationSolutionResourceId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the storage account resource Id.
     */
    storageAccountResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Migration Entity Group Properties class.
 */
export interface MigrationEntityGroupPropertiesArgs {
    /**
     * Display Name of the Workload.
     */
    applicationDisplayName: pulumi.Input<string>;
    /**
     * Application id
     */
    applicationId: pulumi.Input<string>;
    /**
     * Associated Assessment Id
     */
    associatedAssessmentId?: pulumi.Input<string | undefined>;
    /**
     * associated Wave Id
     */
    associatedWaveIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Migration path
     */
    migrationPath?: pulumi.Input<string | undefined>;
}

/**
 * Migration Entity Properties class.
 */
export interface MigrationEntityPropertiesArgs {
    /**
     * Assessed Entity ARM Id
     */
    assessedEntityArmId?: pulumi.Input<string | undefined>;
    /**
     * Associated Assessment Id
     */
    associatedAssessmentId?: pulumi.Input<string | undefined>;
    /**
     * inventory resource id
     */
    associatedInventoryResourceId: pulumi.Input<string>;
    /**
     * associated Migration Entity Group Id
     */
    associatedMigrationEntityGroupIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * associated Wave Id
     */
    associatedWaveId?: pulumi.Input<string | undefined>;
    /**
     * Display Name of the Workload.
     */
    inventoryDisplayName: pulumi.Input<string>;
    /**
     * Migration path
     */
    migrationPath?: pulumi.Input<string | undefined>;
    /**
     * Migration specific properties for the entity.
     */
    migrationSpecificProperties?: pulumi.Input<ServerMigrationSpecificPropertiesArgs | undefined>;
    /**
     * Migration Tool of the Migration Entity.
     */
    migrationTool?: pulumi.Input<string | undefined>;
    /**
     * ARM Resource Identifier for the partner resource.
     */
    partnerResourceArmId?: pulumi.Input<string | undefined>;
    /**
     * Target of the Migration Entity.
     */
    target?: pulumi.Input<string | undefined>;
    /**
     * target Azure Resource ARM Id.
     */
    targetAzureResourceArmId?: pulumi.Input<string | undefined>;
}

/**
 * ModernizeProject properties.
 */
export interface ModernizeProjectModelPropertiesArgs {
    /**
     * MigrationConfiguration properties.
     */
    migrationConfiguration?: pulumi.Input<MigrationConfigurationArgs | undefined>;
}

/**
 * Defines the move collection properties.
 */
export interface MoveCollectionPropertiesArgs {
    /**
     * Gets or sets the move region which indicates the region where the VM Regional to Zonal move will be conducted.
     */
    moveRegion?: pulumi.Input<string | undefined>;
    /**
     * Defines the MoveType.
     */
    moveType?: pulumi.Input<string | enums.MoveType | undefined>;
    /**
     * Gets or sets the source region.
     */
    sourceRegion?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target region.
     */
    targetRegion?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the version of move collection.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Defines the dependency override of the move resource.
 */
export interface MoveResourceDependencyOverrideArgs {
    /**
     * Gets or sets the ARM ID of the dependent resource.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the resource ARM id of either the MoveResource or the resource ARM ID of
     * the dependent resource.
     */
    targetId?: pulumi.Input<string | undefined>;
}

/**
 * Defines the move resource properties.
 */
export interface MoveResourcePropertiesArgs {
    /**
     * Gets or sets the move resource dependencies overrides.
     */
    dependsOnOverrides?: pulumi.Input<pulumi.Input<MoveResourceDependencyOverrideArgs>[] | undefined>;
    /**
     * Gets or sets the existing target ARM Id of the resource.
     */
    existingTargetId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the resource settings.
     */
    resourceSettings?: pulumi.Input<AvailabilitySetResourceSettingsArgs | DiskEncryptionSetResourceSettingsArgs | KeyVaultResourceSettingsArgs | LoadBalancerResourceSettingsArgs | NetworkInterfaceResourceSettingsArgs | NetworkSecurityGroupResourceSettingsArgs | PublicIPAddressResourceSettingsArgs | ResourceGroupResourceSettingsArgs | SqlDatabaseResourceSettingsArgs | SqlElasticPoolResourceSettingsArgs | SqlServerResourceSettingsArgs | VirtualMachineResourceSettingsArgs | VirtualNetworkResourceSettingsArgs | undefined>;
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
    enableAcceleratedNetworking?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the IP configurations of the NIC.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<NicIpConfigurationResourceSettingsArgs>[] | undefined>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/networkInterfaces'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/networkInterfaces">;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
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
    securityRules?: pulumi.Input<pulumi.Input<NsgSecurityRuleArgs>[] | undefined>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
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
    loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<LoadBalancerBackendAddressPoolReferenceArgs>[] | undefined>;
    /**
     * Gets or sets the references of the load balancer NAT rules.
     */
    loadBalancerNatRules?: pulumi.Input<pulumi.Input<LoadBalancerNatRuleReferenceArgs>[] | undefined>;
    /**
     * Gets or sets the IP configuration name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a value indicating whether this IP configuration is the primary.
     */
    primary?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the private IP address of the network interface IP Configuration.
     */
    privateIpAddress?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the private IP address allocation method.
     */
    privateIpAllocationMethod?: pulumi.Input<string | undefined>;
    /**
     * Defines reference to a public IP.
     */
    publicIp?: pulumi.Input<PublicIpReferenceArgs | undefined>;
    /**
     * Defines reference to subnet.
     */
    subnet?: pulumi.Input<SubnetReferenceArgs | undefined>;
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
    access?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a description for this rule. Restricted to 140 chars.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets destination address prefix. CIDR or source IP range.
     *  A “*” can also be used to match all source IPs. Default tags such
     * as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used.
     */
    destinationAddressPrefix?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets Destination Port or Range. Integer or range between
     * 0 and 65535. A “*” can also be used to match all ports.
     */
    destinationPortRange?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the direction of the rule.InBound or Outbound. The
     * direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    direction?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the Security rule name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the priority of the rule. The value can be between
     * 100 and 4096. The priority number must be unique for each rule in the collection.
     * The lower the priority number, the higher the priority of the rule.
     */
    priority?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
     */
    protocol?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets source address prefix. CIDR or source IP range. A
     * “*” can also be used to match all source IPs.  Default tags such as ‘VirtualNetwork’,
     * ‘AzureLoadBalancer’ and ‘Internet’ can also be used. If this is an ingress
     * rule, specifies where network traffic originates from.
     */
    sourceAddressPrefix?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets Source Port or Range. Integer or range between 0 and
     * 65535. A “*” can also be used to match all ports.
     */
    sourcePortRange?: pulumi.Input<string | undefined>;
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
    managementSettings?: pulumi.Input<ManagementSettingsArgs | undefined>;
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
    os?: pulumi.Input<string | enums.OperatingSystemType | undefined>;
    osArchitecture?: pulumi.Input<string | undefined>;
    osName?: pulumi.Input<string | undefined>;
    osVersion?: pulumi.Input<string | undefined>;
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
    perfDataEndTime?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets perf data start time.
     */
    perfDataStartTime?: pulumi.Input<string | undefined>;
    /**
     * Gets perf data time range.
     */
    timeRange: pulumi.Input<string | enums.TimeRange>;
}

/**
 * Performance data class.
 */
export interface PerformanceDataArgs {
    /**
     * Percentile of the utilization data values to be considered while assessing
     * machines.
     */
    percentile?: pulumi.Input<string | enums.Percentile | undefined>;
    /**
     * Gets or sets the end time to consider performance data for assessment.
     */
    perfDataEndTime?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the start time to consider performance data for assessment.
     */
    perfDataStartTime?: pulumi.Input<string | undefined>;
    /**
     * Time Range for which the historic utilization data should be considered for
     * assessment.
     */
    timeRange?: pulumi.Input<string | enums.TimeRange | undefined>;
}

/**
 * WebApplication port mapping.
 */
export interface PortMappingArgs {
    /**
     * Gets or sets the External Port.
     */
    externalPort?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the Internal Port.
     */
    internalPort?: pulumi.Input<number | undefined>;
}

/**
 * Private endpoint connection properties.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * State of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs | undefined>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | enums.Status | undefined>;
}

/**
 * Properties of a project.
 */
export interface ProjectPropertiesArgs {
    /**
     * Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
     */
    assessmentSolutionId?: pulumi.Input<string | undefined>;
    /**
     * The ARM id of the storage account used for interactions when public access is disabled.
     */
    customerStorageAccountArmId?: pulumi.Input<string | undefined>;
    /**
     * The ARM id of service map workspace created by customer.
     */
    customerWorkspaceId?: pulumi.Input<string | undefined>;
    /**
     * Location of service map workspace created by customer.
     */
    customerWorkspaceLocation?: pulumi.Input<string | undefined>;
    /**
     * Assessment project status.
     */
    projectStatus?: pulumi.Input<string | enums.ProjectStatus | undefined>;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
     */
    publicNetworkAccess?: pulumi.Input<string | undefined>;
}

/**
 * Defines the public IP address resource settings.
 */
export interface PublicIPAddressResourceSettingsArgs {
    /**
     * Gets or sets the domain name label.
     */
    domainNameLabel?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the fully qualified domain name.
     */
    fqdn?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets public IP allocation method.
     */
    publicIpAllocationMethod?: pulumi.Input<string | undefined>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/publicIPAddresses'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/publicIPAddresses">;
    /**
     * Gets or sets public IP sku.
     */
    sku?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets public IP zones.
     */
    zones?: pulumi.Input<string | undefined>;
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
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
}

export interface ResourceIdentityArgs {
    principalId?: pulumi.Input<string | undefined>;
    tenantId?: pulumi.Input<string | undefined>;
    type?: pulumi.Input<string | enums.ResourceIdentityTypes | undefined>;
    userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserAssignedIdentityArgs>} | undefined>;
}

/**
 * Resource Requirements.
 */
export interface ResourceRequirementsArgs {
    /**
     * Gets or sets the Cpu requirement.
     */
    cpu?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the Memory requirement.
     */
    memory?: pulumi.Input<string | undefined>;
}

/**
 * Savings settings class.
 */
export interface SavingsSettingsArgs {
    /**
     * Gets or sets the Azure offer code.
     */
    azureOfferCode?: pulumi.Input<string | enums.AzureOffer | undefined>;
    /**
     * Gets or sets the savings options.
     */
    savingsOptions?: pulumi.Input<string | enums.SavingsOptions | undefined>;
}

/**
 * Scope of the assessment.
 */
export interface ScopeArgs {
    /**
     * The ARG query.
     */
    azureResourceGraphQuery?: pulumi.Input<string | undefined>;
    /**
     * The scope type
     */
    scopeType?: pulumi.Input<string | enums.ScopeType | undefined>;
    /**
     * The server group arm id.
     */
    serverGroupId?: pulumi.Input<string | undefined>;
}

export interface SecretStoreDetailsArgs {
    secretStore?: pulumi.Input<string | enums.SecretStoreType | undefined>;
    secretStoreProperties?: pulumi.Input<SecretStorePropertiesArgs | undefined>;
}

export interface SecretStorePropertiesArgs {
    secretStoreId?: pulumi.Input<string | undefined>;
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
 * Represents a Server Migration Specific properties base model.
 */
export interface ServerMigrationSpecificPropertiesArgs {
    /**
     * A type definition that refers the id to an Azure Resource Manager resource.
     */
    currentJobId?: pulumi.Input<string | undefined>;
    /**
     * A type definition that refers the id to an Azure Resource Manager resource.
     */
    drApplianceInventoryId?: pulumi.Input<string | undefined>;
    /**
     * Migration Specific Properties Instance Types.
     * Expected value is 'ServerMigration'.
     */
    instanceType: pulumi.Input<"ServerMigration">;
}

/**
 * Business case settings.
 */
export interface SettingsArgs {
    /**
     * Azure arc settings.
     */
    azureArcSettings?: pulumi.Input<AzureArcSettingsArgs | undefined>;
    /**
     * Azure settings for a business case.
     */
    azureSettings: pulumi.Input<AzureSettingsArgs>;
    /**
     * On-premise settings.
     */
    onPremiseSettings?: pulumi.Input<OnPremiseSettingsArgs | undefined>;
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
    assessmentCount?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the extended details reported by the solution.
     */
    extendedDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the count of groups reported by the solution.
     */
    groupCount?: pulumi.Input<number | undefined>;
}

/**
 * Class for solution properties.
 */
export interface SolutionPropertiesArgs {
    /**
     * Gets or sets the cleanup state of the solution.
     */
    cleanupState?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the details of the solution.
     */
    details?: pulumi.Input<SolutionDetailsArgs | undefined>;
    /**
     * Gets or sets the goal of the solution.
     */
    goal?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the purpose of the solution.
     */
    purpose?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the current status of the solution.
     */
    status?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the tool being used in the solution.
     */
    tool?: pulumi.Input<string | undefined>;
}

/**
 * SQL assessment settings class.
 */
export interface SqlAssessmentSettingsArgs {
    /**
     * Gets or sets user preference indicating intent of async commit mode.
     */
    asyncCommitModeIntent?: pulumi.Input<string | enums.AsyncCommitModeIntent | undefined>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    azureLocation?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a value indicating azure security offering type.
     */
    azureSecurityOfferingType?: pulumi.Input<string | enums.AzureSecurityOfferingType | undefined>;
    /**
     * Gets or sets user configurable SQL database settings.
     */
    azureSqlDatabaseSettings?: pulumi.Input<SqlDbSettingsV3Args | undefined>;
    /**
     * Gets or sets user configurable SQL managed instance settings.
     */
    azureSqlManagedInstanceSettings?: pulumi.Input<SqlMiSettingsV3Args | undefined>;
    /**
     * Gets or sets user configurable SQL VM settings.
     */
    azureSqlVmSettings?: pulumi.Input<SqlVmSettingsArgs | undefined>;
    /**
     * Gets or sets the billing settings.
     */
    billingSettings?: pulumi.Input<BillingSettingsArgs | undefined>;
    /**
     * Currency in which prices should be reported.
     */
    currency?: pulumi.Input<string | enums.AzureCurrency | undefined>;
    /**
     * Gets or sets the Azure Location or Azure region where to which the machines
     * will be migrated.
     */
    disasterRecoveryLocation?: pulumi.Input<string | enums.AzureLocation | undefined>;
    /**
     * Custom discount percentage.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets a value indicating whether HADR assessments needs to be created.
     */
    enableHadrAssessment?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the duration for which the entity (SQL, VMs) are up in the
     * on-premises environment.
     */
    entityUptime?: pulumi.Input<EntityUptimeArgs | undefined>;
    /**
     * Gets or sets user configurable setting to display the environment type.
     */
    environmentType?: pulumi.Input<string | enums.EnvironmentType | undefined>;
    /**
     * Gets or sets a value indicating whether internet access is available.
     */
    isInternetAccessAvailable?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets user preference indicating intent of multi-subnet configuration.
     */
    multiSubnetIntent?: pulumi.Input<string | enums.MultiSubnetIntent | undefined>;
    /**
     * Gets or sets user configurable setting to display the azure hybrid use benefit.
     */
    osLicense?: pulumi.Input<string | enums.OsLicense | undefined>;
    /**
     * Gets or sets the performance data.
     */
    performanceData?: pulumi.Input<PerformanceDataArgs | undefined>;
    /**
     * Gets or sets SQL the preferred azure targets.
     */
    preferredTargets?: pulumi.Input<pulumi.Input<string | enums.AzureTarget>[] | undefined>;
    /**
     * Gets or sets the savings settings.
     */
    savingsSettings?: pulumi.Input<SavingsSettingsArgs | undefined>;
    /**
     * Percentage of buffer that user wants on performance metrics when recommending
     * Azure sizes.
     */
    scalingFactor?: pulumi.Input<number | undefined>;
    /**
     * Assessment sizing criterion.
     */
    sizingCriterion?: pulumi.Input<string | enums.AssessmentSizingCriterion | undefined>;
    /**
     * SQL server license.
     */
    sqlServerLicense?: pulumi.Input<string | enums.SqlServerLicense | undefined>;
}

/**
 * SQL assessment properties class.
 */
export interface SqlAssessmentV3PropertiesArgs {
    /**
     * Gets or sets the machine assessment ARM ID for VM fallback.
     */
    fallbackMachineAssessmentArmId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the scope of assessment.
     */
    scope?: pulumi.Input<ScopeArgs | undefined>;
    /**
     * Gets or sets the settings for the assessment.
     */
    settings?: pulumi.Input<SqlAssessmentSettingsArgs | undefined>;
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
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
    /**
     * Defines the zone redundant resource setting.
     */
    zoneRedundant?: pulumi.Input<string | enums.ZoneRedundant | undefined>;
}

/**
 * SQL database assessment settings.
 */
export interface SqlDbSettingsArgs {
    /**
     * Gets or sets the azure SQL compute tier.
     */
    azureSqlComputeTier?: pulumi.Input<string | enums.ComputeTier | undefined>;
    /**
     * Gets or sets the azure PAAS SQL instance type.
     */
    azureSqlDataBaseType?: pulumi.Input<string | enums.AzureSqlDataBaseType | undefined>;
    /**
     * Gets or sets the azure SQL purchase model.
     */
    azureSqlPurchaseModel?: pulumi.Input<string | enums.AzureSqlPurchaseModel | undefined>;
    /**
     * Gets or sets the azure SQL service tier.
     */
    azureSqlServiceTier?: pulumi.Input<string | enums.AzureSqlServiceTier | undefined>;
}

/**
 * SQL database assessment settings V3.
 */
export interface SqlDbSettingsV3Args {
    /**
     * Gets or sets the azure SQL compute tier.
     */
    azureSqlComputeTier?: pulumi.Input<string | enums.ComputeTier | undefined>;
    /**
     * Gets or sets the azure PAAS SQL instance type.
     */
    azureSqlDataBaseType?: pulumi.Input<string | enums.AzureSqlDataBaseType | undefined>;
    /**
     * Gets or sets the azure SQL purchase model.
     */
    azureSqlPurchaseModel?: pulumi.Input<string | enums.AzureSqlPurchaseModel | undefined>;
    /**
     * Gets or sets the azure SQL service tier.
     */
    azureSqlServiceTier?: pulumi.Input<string | enums.AzureSqlServiceTierV3 | undefined>;
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
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
    /**
     * Defines the zone redundant resource setting.
     */
    zoneRedundant?: pulumi.Input<string | enums.ZoneRedundant | undefined>;
}

/**
 * SQL managed instance assessment settings.
 */
export interface SqlMiSettingsArgs {
    /**
     * Gets or sets the azure PAAS SQL instance type.
     */
    azureSqlInstanceType?: pulumi.Input<string | enums.AzureSqlInstanceType | undefined>;
    /**
     * Gets or sets the azure SQL service tier.
     */
    azureSqlServiceTier?: pulumi.Input<string | enums.AzureSqlServiceTier | undefined>;
}

/**
 * SQL managed instance assessment settings V3.
 */
export interface SqlMiSettingsV3Args {
    /**
     * Gets or sets the azure PAAS SQL instance type.
     */
    azureSqlInstanceType?: pulumi.Input<string | enums.AzureSqlInstanceType | undefined>;
    /**
     * Gets or sets the azure SQL service tier.
     */
    azureSqlServiceTier?: pulumi.Input<string | enums.AzureSqlServiceTierV3 | undefined>;
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
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
}

/**
 * SQL VM assessment settings.
 */
export interface SqlVmSettingsArgs {
    /**
     * Gets or sets the Azure VM families (calling instance series to keep it
     * consistent with other targets).
     */
    instanceSeries?: pulumi.Input<pulumi.Input<string | enums.AzureVmFamily>[] | undefined>;
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
    name?: pulumi.Input<string | undefined>;
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
    addressPrefix?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the Subnet name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Defines reference to NSG.
     */
    networkSecurityGroup?: pulumi.Input<NsgReferenceArgs | undefined>;
}

/**
 * ARM IDs of the target assessments.
 */
export interface TargetAssessmentArmIdsArgs {
    /**
     * ARM ID for Azure Kubernetes Service assessment.
     */
    aks?: pulumi.Input<string | undefined>;
    /**
     * ARM ID for Azure App Service assessment.
     */
    azureAppService?: pulumi.Input<string | undefined>;
    /**
     * ARM ID for Azure App Service Container assessment.
     */
    azureAppServiceContainer?: pulumi.Input<string | undefined>;
}

/**
 * Storage profile for the directory on the target container.
 */
export interface TargetStorageProfileArgs {
    /**
     * Azure file share profile for hydration of application folders not mounted on
     * the container file system.
     */
    azureFileShareProfile?: pulumi.Input<AzureFileShareHydrationProfileArgs | undefined>;
    /**
     * Gets or sets the storage provider type on the target.
     * Applicable when StorageProjectionType is not ContainerFileSystem.
     */
    hydrationStorageProviderType?: pulumi.Input<string | enums.TargetHydrationStorageProviderType | undefined>;
    /**
     * Gets or sets the target persistent volume id.
     * Applicable when StorageProjectionType is PersistentVolume and on using an
     * existing PersistentVolume.
     */
    persistentVolumeId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target storage access type.
     */
    storageAccessType?: pulumi.Input<string | enums.TargetStorageAccessType | undefined>;
    /**
     * Gets or sets the target projection type.
     */
    storageProjectionType?: pulumi.Input<string | enums.TargetStorageProjectionType | undefined>;
    /**
     * Gets or sets the name of the projected volume on the target environment.
     */
    targetName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the storage size on the target.
     * Applicable when StorageProjectionType is PersistentVolume and on creating a new
     * PersistentVolume.
     */
    targetSize?: pulumi.Input<string | undefined>;
}

/**
 * Task Properties class.
 */
export interface TaskPropertiesArgs {
    /**
     * Task Description
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Task Dislay Name
     */
    displayName: pulumi.Input<string>;
    /**
     * Task Scope
     */
    scope: pulumi.Input<string | enums.TaskScope>;
    /**
     * associated Wave Id
     */
    scopeId: pulumi.Input<string>;
    /**
     * Task Stage
     */
    stage?: pulumi.Input<string | undefined>;
    /**
     * Task Status
     */
    status: pulumi.Input<string>;
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
    clientId?: pulumi.Input<string | undefined>;
    principalId?: pulumi.Input<string | undefined>;
}

/**
 * VMware MigrateAgent model custom properties.
 */
export interface VMwareMigrateAgentModelCustomPropertiesArgs {
    /**
     * Gets or sets the friendly name of the,of the MigrateAgent fabric.
     */
    fabricFriendlyName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareMigrateAgentModelCustomProperties'.
     */
    instanceType: pulumi.Input<"VMwareMigrateAgentModelCustomProperties">;
    /**
     * Gets or sets the master Site Id of the Migrate Agent.
     */
    vmwareSiteId?: pulumi.Input<string | undefined>;
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
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target availability set id for virtual machines not in an availability set at source.
     */
    targetAvailabilitySetId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target availability zone.
     */
    targetAvailabilityZone?: pulumi.Input<string | enums.TargetAvailabilityZone | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target virtual machine size.
     */
    targetVmSize?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets user-managed identities
     */
    userManagedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Defines the virtual network resource settings.
 */
export interface VirtualNetworkResourceSettingsArgs {
    /**
     * Gets or sets the address prefixes for the virtual network.
     */
    addressSpace?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets DHCPOptions that contains an array of DNS servers available to VMs
     * deployed in the virtual network.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets a value indicating whether gets or sets whether the
     * DDOS protection should be switched on.
     */
    enableDdosProtection?: pulumi.Input<boolean | undefined>;
    /**
     * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
     * Expected value is 'Microsoft.Network/virtualNetworks'.
     */
    resourceType: pulumi.Input<"Microsoft.Network/virtualNetworks">;
    /**
     * Gets or sets List of subnets in a VirtualNetwork.
     */
    subnets?: pulumi.Input<pulumi.Input<SubnetResourceSettingsArgs>[] | undefined>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the target resource group name.
     */
    targetResourceGroupName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the target Resource name.
     */
    targetResourceName?: pulumi.Input<string | undefined>;
}

/**
 * Virtualization software settings.
 */
export interface VirtualizationSoftwareSettingsArgs {
    /**
     * VMware cloud foundation license cost.
     */
    vMwareCloudFoundationLicenseCost: pulumi.Input<number>;
}

/**
 * Details on the total up-time for the VM.
 */
export interface VmUptimeArgs {
    /**
     * Number of days in a month for VM uptime.
     */
    daysPerMonth?: pulumi.Input<number | undefined>;
    /**
     * Number of hours per day for VM uptime.
     */
    hoursPerDay?: pulumi.Input<number | undefined>;
}

/**
 * Migration Wave Properties class.
 */
export interface WavePropertiesArgs {
    /**
     * ARG query and other details to create workloads within a wave
     */
    arg: pulumi.Input<ArgArgs>;
    /**
     * Description of the wave.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Display Name of the wave.
     */
    displayName: pulumi.Input<string>;
    /**
     * Planned completion date of the wave.
     */
    plannedCompletionDate?: pulumi.Input<string | undefined>;
    /**
     * Planned start date of the wave.
     */
    plannedStartDate: pulumi.Input<string>;
}

/**
 * Web app assessment settings class.
 */
export interface WebAppAssessmentSettingsArgs {
    /**
     * App Service container settings.
     */
    appSvcContainerSettings: pulumi.Input<AppSvcContainerSettingsArgs>;
    /**
     * App Service native settings.
     */
    appSvcNativeSettings: pulumi.Input<AppSvcNativeSettingsArgs>;
    /**
     * Azure Location or Azure region where to which the machines will be migrated.
     */
    azureLocation?: pulumi.Input<string | undefined>;
    /**
     * Azure security offering type.
     */
    azureSecurityOfferingType: pulumi.Input<string | enums.AzureSecurityOfferingType>;
    /**
     * Gets or sets the billing settings.
     */
    billingSettings?: pulumi.Input<BillingSettingsArgs | undefined>;
    /**
     * Currency in which prices should be reported.
     */
    currency?: pulumi.Input<string | enums.AzureCurrency | undefined>;
    /**
     * Custom discount percentage.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets user configurable setting to display the environment type.
     */
    environmentType?: pulumi.Input<string | enums.EnvironmentType | undefined>;
    /**
     * Gets or sets the performance data.
     */
    performanceData?: pulumi.Input<PerformanceDataArgs | undefined>;
    /**
     * Gets or sets the savings settings.
     */
    savingsSettings?: pulumi.Input<SavingsSettingsArgs | undefined>;
    /**
     * Percentage of buffer that user wants on performance metrics when recommending
     * Azure sizes.
     */
    scalingFactor?: pulumi.Input<number | undefined>;
    /**
     * Assessment sizing criterion.
     */
    sizingCriterion?: pulumi.Input<string | enums.AssessmentSizingCriterion | undefined>;
}

/**
 * WebApp assessment resource properties.
 */
export interface WebAppAssessmentV3PropertiesArgs {
    /**
     * Gets or sets the machine assessment ARM ID for VM fallback.
     */
    fallbackMachineAssessmentArmId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the scope of assessment.
     */
    scope?: pulumi.Input<ScopeArgs | undefined>;
    /**
     * Gets or sets the settings for the assessment.
     */
    settings?: pulumi.Input<WebAppAssessmentSettingsArgs | undefined>;
}

/**
 * Class for web application configurations.
 */
export interface WebApplicationConfigurationArgs {
    /**
     * Gets or sets the configuration file path.
     */
    filePath?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the identifier for the configuration.
     */
    identifier?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a value indicating whether the configuration is edited or not by the user.
     */
    isDeploymentTimeEditable?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the configuration local file path.
     */
    localFilePath?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the configuration name.
     */
    name?: pulumi.Input<string | undefined>;
    secretStoreDetails?: pulumi.Input<SecretStoreDetailsArgs | undefined>;
    /**
     * Gets or sets the configuration section in the file.
     */
    section?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the configuration target file path.
     */
    targetFilePath?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the configuration type.
     */
    type?: pulumi.Input<string | enums.ConfigurationType | undefined>;
    /**
     * Gets or sets the configuration value.
     */
    value?: pulumi.Input<string | undefined>;
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
    isEditable?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the paths of the directory on the source machine.
     */
    sourcePaths?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets the size of the directory on the source machine.
     */
    sourceSize?: pulumi.Input<string | undefined>;
    /**
     * Storage profile for the directory on the target container.
     */
    storageProfile?: pulumi.Input<TargetStorageProfileArgs | undefined>;
}

/**
 * Framework specific data for a web application.
 */
export interface WebApplicationFrameworkArgs {
    /**
     * Gets or sets Name of the framework.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets Version of the framework.
     */
    version?: pulumi.Input<string | undefined>;
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
    customProperties?: pulumi.Input<ApacheTomcatAKSWorkloadDeploymentModelCustomPropertiesArgs | IISAKSWorkloadDeploymentModelCustomPropertiesArgs | undefined>;
    /**
     * Gets or sets the display name.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the deployment target platform.
     */
    targetPlatform?: pulumi.Input<string | enums.WorkloadDeploymentTarget | undefined>;
    /**
     * Workload instance model properties.
     */
    workloadInstanceProperties?: pulumi.Input<WorkloadInstanceModelPropertiesArgs | undefined>;
}

/**
 * Workload instance model properties.
 */
export interface WorkloadInstanceModelPropertiesArgs {
    /**
     * Workload instance model custom properties.
     */
    customProperties?: pulumi.Input<ApacheTomcatWorkloadInstanceModelCustomPropertiesArgs | IISWorkloadInstanceModelCustomPropertiesArgs | undefined>;
    /**
     * Gets or sets the display name.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Gets or Sets the master site name.
     */
    masterSiteName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the migrate agent id associated with the workload instance.
     */
    migrateAgentId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the workload instance name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the source name.
     */
    sourceName?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the source platform.
     */
    sourcePlatform?: pulumi.Input<string | undefined>;
}
