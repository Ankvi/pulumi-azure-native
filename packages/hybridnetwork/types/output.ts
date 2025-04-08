import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The arm resource definition resource element template details.
 */
export interface ArmResourceDefinitionResourceElementTemplateDetailsResponse {
    /**
     * The resource element template type.
     */
    configuration?: ArmResourceDefinitionResourceElementTemplateResponse;
    /**
     * The depends on profile.
     */
    dependsOnProfile?: DependsOnProfileResponse;
    /**
     * Name of the resource element template.
     */
    name?: string;
    /**
     * The resource element template type.
     * Expected value is 'ArmResourceDefinition'.
     */
    resourceElementType: "ArmResourceDefinition";
}

/**
 * The arm template RE.
 */
export interface ArmResourceDefinitionResourceElementTemplateResponse {
    /**
     * Artifact profile properties.
     */
    artifactProfile?: NSDArtifactProfileResponse;
    /**
     * Name and value pairs that define the parameter values. It can be  a well formed escaped JSON string.
     */
    parameterValues?: string;
    /**
     * The template type.
     */
    templateType?: string;
}

/**
 * Template artifact profile.
 */
export interface ArmTemplateArtifactProfileResponse {
    /**
     * Template name.
     */
    templateName?: string;
    /**
     * Template version.
     */
    templateVersion?: string;
}

/**
 * Template mapping rule profile
 */
export interface ArmTemplateMappingRuleProfileResponse {
    /**
     * List of template parameters.
     */
    templateParameters?: string;
}

/**
 * Artifact manifest properties.
 */
export interface ArtifactManifestPropertiesFormatResponse {
    /**
     * The artifact manifest state.
     */
    artifactManifestState: string;
    /**
     * The artifacts list.
     */
    artifacts?: ManifestArtifactFormatResponse[];
    /**
     * The provisioning state of the ArtifactManifest resource.
     */
    provisioningState: string;
}

/**
 * List of network fabric controller ids.
 */
export interface ArtifactStoreNetworkFabricControllerEndPointsResponse {
    /**
     * list of network fabric controllers.
     */
    networkFabricControllerIds?: ReferencedResourceResponse[];
}

/**
 * List of manual private endpoints.
 */
export interface ArtifactStorePrivateEndPointsFormatResponse {
    /**
     * list of private endpoints.
     */
    manualPrivateEndPointConnections?: ReferencedResourceResponse[];
}

/**
 * Artifact store properties.
 */
export interface ArtifactStorePropertiesFormatResponse {
    /**
     * The artifact store backing resource network access type
     */
    backingResourcePublicNetworkAccess?: string;
    managedResourceGroupConfiguration?: ArtifactStorePropertiesFormatResponseManagedResourceGroupConfiguration;
    /**
     * The provisioning state of the application groups resource.
     */
    provisioningState: string;
    /**
     * The replication strategy.
     */
    replicationStrategy?: string;
    /**
     * The created storage resource id
     */
    storageResourceId: string;
    /**
     * The artifact store type.
     */
    storeType?: string;
}

export interface ArtifactStorePropertiesFormatResponseManagedResourceGroupConfiguration {
    /**
     * The managed resource group location.
     */
    location?: string;
    /**
     * The managed resource group name.
     */
    name?: string;
}

/**
 * The AzureArcK8sCluster NFVI detail.
 */
export interface AzureArcK8sClusterNFVIDetailsResponse {
    /**
     * The reference to the custom location.
     */
    customLocationReference?: ReferencedResourceResponse;
    /**
     * Name of the nfvi.
     */
    name?: string;
    /**
     * The NFVI type.
     * Expected value is 'AzureArcKubernetes'.
     */
    nfviType: "AzureArcKubernetes";
}

/**
 * Azure arc kubernetes artifact profile properties.
 */
export interface AzureArcKubernetesArtifactProfileResponse {
    /**
     * The reference to artifact store.
     */
    artifactStore?: ReferencedResourceResponse;
    /**
     * Helm artifact profile.
     */
    helmArtifactProfile?: HelmArtifactProfileResponse;
}

/**
 * Azure arc kubernetes deploy mapping rule profile.
 */
export interface AzureArcKubernetesDeployMappingRuleProfileResponse {
    /**
     * The application enablement.
     */
    applicationEnablement?: string;
    /**
     * The helm mapping rule profile.
     */
    helmMappingRuleProfile?: HelmMappingRuleProfileResponse;
}

/**
 * Azure arc kubernetes helm application configurations.
 */
export interface AzureArcKubernetesHelmApplicationResponse {
    /**
     * Azure arc kubernetes artifact profile.
     */
    artifactProfile?: AzureArcKubernetesArtifactProfileResponse;
    /**
     * The artifact type.
     * Expected value is 'HelmPackage'.
     */
    artifactType: "HelmPackage";
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: DependsOnProfileResponse;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: AzureArcKubernetesDeployMappingRuleProfileResponse;
    /**
     * The name of the network function application.
     */
    name?: string;
}

/**
 * Azure Arc kubernetes network function template.
 */
export interface AzureArcKubernetesNetworkFunctionTemplateResponse {
    /**
     * Network function applications.
     */
    networkFunctionApplications?: AzureArcKubernetesHelmApplicationResponse[];
    /**
     * The network function type.
     * Expected value is 'AzureArcKubernetes'.
     */
    nfviType: "AzureArcKubernetes";
}

/**
 * Azure template artifact profile properties.
 */
export interface AzureCoreArmTemplateArtifactProfileResponse {
    /**
     * The reference to artifact store.
     */
    artifactStore?: ReferencedResourceResponse;
    /**
     * Template artifact profile.
     */
    templateArtifactProfile?: ArmTemplateArtifactProfileResponse;
}

/**
 * Azure template deploy mapping rule profile.
 */
export interface AzureCoreArmTemplateDeployMappingRuleProfileResponse {
    /**
     * The application enablement.
     */
    applicationEnablement?: string;
    /**
     * The template mapping rule profile.
     */
    templateMappingRuleProfile?: ArmTemplateMappingRuleProfileResponse;
}

/**
 * The Azure Core NFVI detail.
 */
export interface AzureCoreNFVIDetailsResponse {
    /**
     * Location of the Azure core.
     */
    location?: string;
    /**
     * Name of the nfvi.
     */
    name?: string;
    /**
     * The NFVI type.
     * Expected value is 'AzureCore'.
     */
    nfviType: "AzureCore";
}

/**
 * Azure core network function Template application definition.
 */
export interface AzureCoreNetworkFunctionArmTemplateApplicationResponse {
    /**
     * Azure template artifact profile.
     */
    artifactProfile?: AzureCoreArmTemplateArtifactProfileResponse;
    /**
     * The artifact type.
     * Expected value is 'ArmTemplate'.
     */
    artifactType: "ArmTemplate";
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: DependsOnProfileResponse;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: AzureCoreArmTemplateDeployMappingRuleProfileResponse;
    /**
     * The name of the network function application.
     */
    name?: string;
}

/**
 * Azure virtual network function template.
 */
export interface AzureCoreNetworkFunctionTemplateResponse {
    /**
     * Network function applications.
     */
    networkFunctionApplications?: (AzureCoreNetworkFunctionArmTemplateApplicationResponse | AzureCoreNetworkFunctionVhdApplicationResponse)[];
    /**
     * The network function type.
     * Expected value is 'AzureCore'.
     */
    nfviType: "AzureCore";
}

/**
 * Azure core network function vhd application definition.
 */
export interface AzureCoreNetworkFunctionVhdApplicationResponse {
    /**
     * Azure vhd image artifact profile.
     */
    artifactProfile?: AzureCoreVhdImageArtifactProfileResponse;
    /**
     * The artifact type.
     * Expected value is 'VhdImageFile'.
     */
    artifactType: "VhdImageFile";
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: DependsOnProfileResponse;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: AzureCoreVhdImageDeployMappingRuleProfileResponse;
    /**
     * The name of the network function application.
     */
    name?: string;
}

/**
 * Azure vhd artifact profile properties.
 */
export interface AzureCoreVhdImageArtifactProfileResponse {
    /**
     * The reference to artifact store.
     */
    artifactStore?: ReferencedResourceResponse;
    /**
     * Vhd artifact profile.
     */
    vhdArtifactProfile?: VhdImageArtifactProfileResponse;
}

/**
 * Azure vhd deploy mapping rule profile.
 */
export interface AzureCoreVhdImageDeployMappingRuleProfileResponse {
    /**
     * The application enablement.
     */
    applicationEnablement?: string;
    /**
     * The vhd mapping rule profile.
     */
    vhdImageMappingRuleProfile?: VhdImageMappingRuleProfileResponse;
}

/**
 * Azure Operator Distributed Services vhd artifact profile properties.
 */
export interface AzureOperatorNexusArmTemplateArtifactProfileResponse {
    /**
     * The reference to artifact store.
     */
    artifactStore?: ReferencedResourceResponse;
    /**
     * Template artifact profile.
     */
    templateArtifactProfile?: ArmTemplateArtifactProfileResponse;
}

/**
 * Azure Operator Distributed Services template deploy mapping rule profile.
 */
export interface AzureOperatorNexusArmTemplateDeployMappingRuleProfileResponse {
    /**
     * The application enablement.
     */
    applicationEnablement?: string;
    /**
     * The template mapping rule profile.
     */
    templateMappingRuleProfile?: ArmTemplateMappingRuleProfileResponse;
}

/**
 * The AzureOperatorNexusCluster NFVI detail.
 */
export interface AzureOperatorNexusClusterNFVIDetailsResponse {
    /**
     * The reference to the custom location.
     */
    customLocationReference?: ReferencedResourceResponse;
    /**
     * Name of the nfvi.
     */
    name?: string;
    /**
     * The NFVI type.
     * Expected value is 'AzureOperatorNexus'.
     */
    nfviType: "AzureOperatorNexus";
}

/**
 * Azure Operator Distributed Services image artifact profile properties.
 */
export interface AzureOperatorNexusImageArtifactProfileResponse {
    /**
     * The reference to artifact store.
     */
    artifactStore?: ReferencedResourceResponse;
    /**
     * Image artifact profile.
     */
    imageArtifactProfile?: ImageArtifactProfileResponse;
}

/**
 * Azure Operator Distributed Services image deploy mapping rule profile.
 */
export interface AzureOperatorNexusImageDeployMappingRuleProfileResponse {
    /**
     * The application enablement.
     */
    applicationEnablement?: string;
    /**
     * The vhd mapping rule profile.
     */
    imageMappingRuleProfile?: ImageMappingRuleProfileResponse;
}

/**
 * Azure Operator Distributed Services network function Template application definition.
 */
export interface AzureOperatorNexusNetworkFunctionArmTemplateApplicationResponse {
    /**
     * Azure Operator Distributed Services Template artifact profile.
     */
    artifactProfile?: AzureOperatorNexusArmTemplateArtifactProfileResponse;
    /**
     * The artifact type.
     * Expected value is 'ArmTemplate'.
     */
    artifactType: "ArmTemplate";
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: DependsOnProfileResponse;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: AzureOperatorNexusArmTemplateDeployMappingRuleProfileResponse;
    /**
     * The name of the network function application.
     */
    name?: string;
}

/**
 * Azure Operator Distributed Services network function image application definition.
 */
export interface AzureOperatorNexusNetworkFunctionImageApplicationResponse {
    /**
     * Azure Operator Distributed Services image artifact profile.
     */
    artifactProfile?: AzureOperatorNexusImageArtifactProfileResponse;
    /**
     * The artifact type.
     * Expected value is 'ImageFile'.
     */
    artifactType: "ImageFile";
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: DependsOnProfileResponse;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: AzureOperatorNexusImageDeployMappingRuleProfileResponse;
    /**
     * The name of the network function application.
     */
    name?: string;
}

/**
 * Azure Operator Distributed Services network function template.
 */
export interface AzureOperatorNexusNetworkFunctionTemplateResponse {
    /**
     * Network function applications.
     */
    networkFunctionApplications?: (AzureOperatorNexusNetworkFunctionArmTemplateApplicationResponse | AzureOperatorNexusNetworkFunctionImageApplicationResponse)[];
    /**
     * The network function type.
     * Expected value is 'AzureOperatorNexus'.
     */
    nfviType: "AzureOperatorNexus";
}

/**
 * Configuration group schema properties.
 */
export interface ConfigurationGroupSchemaPropertiesFormatResponse {
    /**
     * Description of what schema can contain.
     */
    description?: string;
    /**
     * The provisioning state of the Configuration group schema resource.
     */
    provisioningState: string;
    /**
     * Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
     */
    schemaDefinition?: string;
    /**
     * The configuration group schema version state.
     */
    versionState: string;
}

/**
 * The ConfigurationValue with secrets.
 */
export interface ConfigurationValueWithSecretsResponse {
    /**
     * The configuration group schema name.
     */
    configurationGroupSchemaName: string;
    /**
     * The location of the configuration group schema offering.
     */
    configurationGroupSchemaOfferingLocation: string;
    /**
     * The configuration group schema resource reference.
     */
    configurationGroupSchemaResourceReference?: OpenDeploymentResourceReferenceResponse | SecretDeploymentResourceReferenceResponse;
    /**
     * The secret type which indicates if secret or not.
     * Expected value is 'Secret'.
     */
    configurationType: "Secret";
    /**
     * The provisioning state of the site resource.
     */
    provisioningState: string;
    /**
     * The publisher name for the configuration group schema.
     */
    publisherName: string;
    /**
     * The scope of the publisher.
     */
    publisherScope: string;
}

/**
 * The ConfigurationValue with no secrets.
 */
export interface ConfigurationValueWithoutSecretsResponse {
    /**
     * The configuration group schema name.
     */
    configurationGroupSchemaName: string;
    /**
     * The location of the configuration group schema offering.
     */
    configurationGroupSchemaOfferingLocation: string;
    /**
     * The configuration group schema resource reference.
     */
    configurationGroupSchemaResourceReference?: OpenDeploymentResourceReferenceResponse | SecretDeploymentResourceReferenceResponse;
    /**
     * The secret type which indicates if secret or not.
     * Expected value is 'Open'.
     */
    configurationType: "Open";
    /**
     * Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
     */
    configurationValue?: string;
    /**
     * The provisioning state of the site resource.
     */
    provisioningState: string;
    /**
     * The publisher name for the configuration group schema.
     */
    publisherName: string;
    /**
     * The scope of the publisher.
     */
    publisherScope: string;
}

/**
 * Containerized network function network function definition version properties.
 */
export interface ContainerizedNetworkFunctionDefinitionVersionResponse {
    /**
     * The deployment parameters of the network function definition version.
     */
    deployParameters?: string;
    /**
     * The network function definition version description.
     */
    description?: string;
    /**
     * Containerized network function template.
     */
    networkFunctionTemplate?: AzureArcKubernetesNetworkFunctionTemplateResponse;
    /**
     * The network function type.
     * Expected value is 'ContainerizedNetworkFunction'.
     */
    networkFunctionType: "ContainerizedNetworkFunction";
    /**
     * The provisioning state of the network function definition version resource.
     */
    provisioningState: string;
    /**
     * The network function definition version state.
     */
    versionState: string;
}

/**
 * Specifies the custom settings for the virtual machine.
 */
export interface CustomProfileResponse {
    /**
     * Path for metadata configuration.
     */
    metadataConfigurationPath?: string;
}

/**
 * Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
 */
export interface DataDiskResponse {
    /**
     * Specifies how the virtual machine should be created.
     */
    createOption?: string;
    /**
     * Specifies the size of an empty disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image.
     */
    diskSizeGB?: number;
    /**
     * The name of data disk.
     */
    name?: string;
}

/**
 * Depends on profile definition.
 */
export interface DependsOnProfileResponse {
    /**
     * Application installation operation dependency.
     */
    installDependsOn?: string[];
    /**
     * Application deletion operation dependency.
     */
    uninstallDependsOn?: string[];
    /**
     * Application update operation dependency.
     */
    updateDependsOn?: string[];
}

/**
 * Helm artifact profile.
 */
export interface HelmArtifactProfileResponse {
    /**
     * Helm package name.
     */
    helmPackageName?: string;
    /**
     * Helm package version range.
     */
    helmPackageVersionRange?: string;
    /**
     * The image pull secrets values path list.
     */
    imagePullSecretsValuesPaths?: string[];
    /**
     * The registry values path list.
     */
    registryValuesPaths?: string[];
}

/**
 * The helm deployment install options
 */
export interface HelmInstallOptionsResponse {
    /**
     * The helm deployment atomic options
     */
    atomic?: string;
    /**
     * The helm deployment timeout options
     */
    timeout?: string;
    /**
     * The helm deployment wait options
     */
    wait?: string;
}

/**
 * Helm mapping rule profile
 */
export interface HelmMappingRuleProfileResponse {
    /**
     * Helm package version.
     */
    helmPackageVersion?: string;
    /**
     * The helm deployment options
     */
    options?: HelmMappingRuleProfileResponseOptions;
    /**
     * Helm release name.
     */
    releaseName?: string;
    /**
     * Helm release namespace.
     */
    releaseNamespace?: string;
    /**
     * Helm release values.
     */
    values?: string;
}

/**
 * The helm deployment options
 */
export interface HelmMappingRuleProfileResponseOptions {
    /**
     * The helm deployment install options
     */
    installOptions?: HelmInstallOptionsResponse;
    /**
     * The helm deployment upgrade options
     */
    upgradeOptions?: HelmUpgradeOptionsResponse;
}

/**
 * The helm deployment install options
 */
export interface HelmUpgradeOptionsResponse {
    /**
     * The helm deployment atomic options
     */
    atomic?: string;
    /**
     * The helm deployment timeout options
     */
    timeout?: string;
    /**
     * The helm deployment wait options
     */
    wait?: string;
}

/**
 * Image artifact profile.
 */
export interface ImageArtifactProfileResponse {
    /**
     * Image name.
     */
    imageName?: string;
    /**
     * Image version.
     */
    imageVersion?: string;
}

/**
 * Image mapping rule profile
 */
export interface ImageMappingRuleProfileResponse {
    /**
     * List of values.
     */
    userConfiguration?: string;
}

/**
 * The image reference properties.
 */
export interface ImageReferenceResponse {
    /**
     * Specifies in decimal numbers, the exact version of image used to create the virtual machine.
     */
    exactVersion?: string;
    /**
     * Specifies the offer of the image used to create the virtual machine.
     */
    offer?: string;
    /**
     * The image publisher.
     */
    publisher?: string;
    /**
     * The image SKU.
     */
    sku?: string;
    /**
     * Specifies the version of the image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.
     */
    version?: string;
}

/**
 * Specifies the Linux operating system settings on the virtual machine.
 */
export interface LinuxConfigurationResponse {
    /**
     * Specifies the ssh key configuration for a Linux OS.
     */
    ssh?: SshConfigurationResponse;
}

/**
 * Managed resource group configuration.
 */
export interface ManagedResourceGroupConfigurationResponse {
    /**
     * Managed resource group location.
     */
    location?: string;
    /**
     * Managed resource group name.
     */
    name?: string;
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
 * Manifest artifact properties.
 */
export interface ManifestArtifactFormatResponse {
    /**
     * The artifact name
     */
    artifactName?: string;
    /**
     * The artifact type.
     */
    artifactType?: string;
    /**
     * The artifact version.
     */
    artifactVersion?: string;
}

/**
 * Artifact profile properties.
 */
export interface NSDArtifactProfileResponse {
    /**
     * Artifact name.
     */
    artifactName?: string;
    /**
     * The artifact store resource id
     */
    artifactStoreReference?: ReferencedResourceResponse;
    /**
     * Artifact version.
     */
    artifactVersion?: string;
}

/**
 * Network function definition group properties.
 */
export interface NetworkFunctionDefinitionGroupPropertiesFormatResponse {
    /**
     * The network function definition group description.
     */
    description?: string;
    /**
     * The provisioning state of the network function definition groups resource.
     */
    provisioningState: string;
}

/**
 * The network function definition resource element template details.
 */
export interface NetworkFunctionDefinitionResourceElementTemplateDetailsResponse {
    /**
     * The resource element template type.
     */
    configuration?: ArmResourceDefinitionResourceElementTemplateResponse;
    /**
     * The depends on profile.
     */
    dependsOnProfile?: DependsOnProfileResponse;
    /**
     * Name of the resource element template.
     */
    name?: string;
    /**
     * The resource element template type.
     * Expected value is 'NetworkFunctionDefinition'.
     */
    resourceElementType: "NetworkFunctionDefinition";
}

/**
 * Network function role configuration.
 */
export interface NetworkFunctionRoleConfigurationResponse {
    /**
     * Specifies the custom settings for the virtual machine.
     */
    customProfile?: CustomProfileResponse;
    /**
     * The network interface configurations.
     */
    networkInterfaces?: NetworkInterfaceResponse[];
    /**
     * Specifies the operating system settings for the role instance. This value can be updated during the deployment of network function.
     */
    osProfile?: OsProfileResponse;
    /**
     * The name of the network function role.
     */
    roleName?: string;
    /**
     * Role type.
     */
    roleType?: string;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: StorageProfileResponse;
    /**
     * The user parameters for customers. The format of user data parameters has to be matched with the provided user data template.
     */
    userDataParameters?: any;
    /**
     * The user data template for customers. This is a json schema template describing the format and data type of user data parameters.
     */
    userDataTemplate?: any;
    /**
     * The size of the virtual machine.
     */
    virtualMachineSize?: string;
}
/**
 * networkFunctionRoleConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkFunctionRoleConfigurationResponse
 */
export function networkFunctionRoleConfigurationResponseProvideDefaults(val: NetworkFunctionRoleConfigurationResponse): NetworkFunctionRoleConfigurationResponse {
    return {
        ...val,
        osProfile: (val.osProfile ? osProfileResponseProvideDefaults(val.osProfile) : undefined),
    };
}

/**
 * The network function template.
 */
export interface NetworkFunctionTemplateResponse {
    /**
     * An array of network function role definitions.
     */
    networkFunctionRoleConfigurations?: NetworkFunctionRoleConfigurationResponse[];
}

/**
 * NetworkFunction with secrets.
 */
export interface NetworkFunctionValueWithSecretsResponse {
    /**
     * Indicates if software updates are allowed during deployment.
     */
    allowSoftwareUpdate?: boolean;
    /**
     * The secret type which indicates if secret or not.
     * Expected value is 'Secret'.
     */
    configurationType: "Secret";
    /**
     * The network function definition group name for the network function.
     */
    networkFunctionDefinitionGroupName?: string;
    /**
     * The location of the network function definition offering.
     */
    networkFunctionDefinitionOfferingLocation?: string;
    /**
     * The network function definition version for the network function.
     */
    networkFunctionDefinitionVersion?: string;
    /**
     * The network function definition version resource reference.
     */
    networkFunctionDefinitionVersionResourceReference?: OpenDeploymentResourceReferenceResponse | SecretDeploymentResourceReferenceResponse;
    /**
     * The nfviId for the network function.
     */
    nfviId?: string;
    /**
     * The nfvi type for the network function.
     */
    nfviType?: string;
    /**
     * The provisioning state of the network function resource.
     */
    provisioningState: string;
    /**
     * The publisher name for the network function.
     */
    publisherName?: string;
    /**
     * The scope of the publisher.
     */
    publisherScope?: string;
    /**
     * The role configuration override values from the user.
     */
    roleOverrideValues?: string[];
}

/**
 * NetworkFunction with no secrets.
 */
export interface NetworkFunctionValueWithoutSecretsResponse {
    /**
     * Indicates if software updates are allowed during deployment.
     */
    allowSoftwareUpdate?: boolean;
    /**
     * The secret type which indicates if secret or not.
     * Expected value is 'Open'.
     */
    configurationType: "Open";
    /**
     * The JSON-serialized deployment values from the user.
     */
    deploymentValues?: string;
    /**
     * The network function definition group name for the network function.
     */
    networkFunctionDefinitionGroupName?: string;
    /**
     * The location of the network function definition offering.
     */
    networkFunctionDefinitionOfferingLocation?: string;
    /**
     * The network function definition version for the network function.
     */
    networkFunctionDefinitionVersion?: string;
    /**
     * The network function definition version resource reference.
     */
    networkFunctionDefinitionVersionResourceReference?: OpenDeploymentResourceReferenceResponse | SecretDeploymentResourceReferenceResponse;
    /**
     * The nfviId for the network function.
     */
    nfviId?: string;
    /**
     * The nfvi type for the network function.
     */
    nfviType?: string;
    /**
     * The provisioning state of the network function resource.
     */
    provisioningState: string;
    /**
     * The publisher name for the network function.
     */
    publisherName?: string;
    /**
     * The scope of the publisher.
     */
    publisherScope?: string;
    /**
     * The role configuration override values from the user.
     */
    roleOverrideValues?: string[];
}

/**
 * Network interface IP configuration properties.
 */
export interface NetworkInterfaceIPConfigurationResponse {
    /**
     * The list of DNS servers IP addresses.
     */
    dnsServers?: string[];
    /**
     * The value of the gateway.
     */
    gateway?: string;
    /**
     * The value of the IP address.
     */
    ipAddress?: string;
    /**
     * IP address allocation method.
     */
    ipAllocationMethod?: string;
    /**
     * IP address version.
     */
    ipVersion?: string;
    /**
     * The value of the subnet.
     */
    subnet?: string;
}

/**
 * Network interface properties.
 */
export interface NetworkInterfaceResponse {
    /**
     * A list of IP configurations of the network interface.
     */
    ipConfigurations?: NetworkInterfaceIPConfigurationResponse[];
    /**
     * The MAC address of the network interface.
     */
    macAddress?: string;
    /**
     * The name of the network interface.
     */
    networkInterfaceName?: string;
    /**
     * The type of the VM switch.
     */
    vmSwitchType?: string;
}

/**
 * network service design group properties.
 */
export interface NetworkServiceDesignGroupPropertiesFormatResponse {
    /**
     * The network service design group description.
     */
    description?: string;
    /**
     * The provisioning state of the network service design groups resource.
     */
    provisioningState: string;
}

/**
 * network service design version properties.
 */
export interface NetworkServiceDesignVersionPropertiesFormatResponse {
    /**
     * The configuration schemas to used to define the values.
     */
    configurationGroupSchemaReferences?: {[key: string]: ReferencedResourceResponse};
    /**
     * The network service design version description.
     */
    description?: string;
    /**
     * The nfvis from the site.
     */
    nfvisFromSite?: {[key: string]: NfviDetailsResponse};
    /**
     * The provisioning state of the network service design version resource.
     */
    provisioningState: string;
    /**
     * List of resource element template
     */
    resourceElementTemplates?: (ArmResourceDefinitionResourceElementTemplateDetailsResponse | NetworkFunctionDefinitionResourceElementTemplateDetailsResponse)[];
    /**
     * The network service design version state.
     */
    versionState: string;
}

/**
 * The nfvi details.
 */
export interface NfviDetailsResponse {
    /**
     * The nfvi name.
     */
    name?: string;
    /**
     * The nfvi type.
     */
    type?: string;
}

/**
 * Non secret deployment resource id reference.
 */
export interface OpenDeploymentResourceReferenceResponse {
    /**
     * Resource ID.
     */
    id?: string;
    /**
     * The resource reference arm id type.
     * Expected value is 'Open'.
     */
    idType: "Open";
}

/**
 * Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
 */
export interface OsDiskResponse {
    /**
     * Specifies the size of os disk in gigabytes. This is the fully expanded disk size needed of the VHD image on the ASE. This disk size should be greater than the size of the VHD provided in vhdUri.
     */
    diskSizeGB?: number;
    /**
     * The VHD name.
     */
    name?: string;
    /**
     * The OS type.
     */
    osType?: string;
}

/**
 * Specifies the operating system settings for the role instance.
 */
export interface OsProfileResponse {
    /**
     * Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    adminUsername?: string;
    /**
     * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file. For more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
     */
    customData?: string;
    /**
     * Indicates if custom data is required to deploy this role.
     */
    customDataRequired?: boolean;
    /**
     * Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    linuxConfiguration?: LinuxConfigurationResponse;
}
/**
 * osProfileResponseProvideDefaults sets the appropriate defaults for OsProfileResponse
 */
export function osProfileResponseProvideDefaults(val: OsProfileResponse): OsProfileResponse {
    return {
        ...val,
        customDataRequired: (val.customDataRequired) ?? true,
    };
}

/**
 * publisher properties.
 */
export interface PublisherPropertiesFormatResponse {
    /**
     * The provisioning state of the publisher resource.
     */
    provisioningState: string;
    /**
     * The publisher scope.
     */
    scope?: string;
}

/**
 * Reference to another resource.
 */
export interface ReferencedResourceResponse {
    /**
     * Resource ID.
     */
    id?: string;
}

/**
 * Secret deployment resource id reference.
 */
export interface SecretDeploymentResourceReferenceResponse {
    /**
     * The resource reference arm id type.
     * Expected value is 'Secret'.
     */
    idType: "Secret";
}

/**
 * Site network service properties.
 */
export interface SiteNetworkServicePropertiesFormatResponse {
    /**
     * The goal state of the site network service resource. This has references to the configuration group value objects that describe the desired state of the site network service.
     */
    desiredStateConfigurationGroupValueReferences?: {[key: string]: ReferencedResourceResponse};
    /**
     * The last state of the site network service resource.
     */
    lastStateConfigurationGroupValueReferences: {[key: string]: ReferencedResourceResponse};
    /**
     * The network service design version for the site network service.
     */
    lastStateNetworkServiceDesignVersionName: string;
    /**
     * Managed resource group configuration.
     */
    managedResourceGroupConfiguration?: ManagedResourceGroupConfigurationResponse;
    /**
     * The network service design group name for the site network service.
     */
    networkServiceDesignGroupName: string;
    /**
     * The network service design version for the site network service.
     */
    networkServiceDesignVersionName: string;
    /**
     * The location of the network service design offering.
     */
    networkServiceDesignVersionOfferingLocation: string;
    /**
     * The network service design version resource reference.
     */
    networkServiceDesignVersionResourceReference?: OpenDeploymentResourceReferenceResponse | SecretDeploymentResourceReferenceResponse;
    /**
     * The provisioning state of the site network service resource.
     */
    provisioningState: string;
    /**
     * The publisher name for the site network service.
     */
    publisherName: string;
    /**
     * The scope of the publisher.
     */
    publisherScope: string;
    /**
     * The site details
     */
    siteReference?: ReferencedResourceResponse;
}

/**
 * Site properties.
 */
export interface SitePropertiesFormatResponse {
    /**
     * List of NFVIs
     */
    nfvis?: (AzureArcK8sClusterNFVIDetailsResponse | AzureCoreNFVIDetailsResponse | AzureOperatorNexusClusterNFVIDetailsResponse)[];
    /**
     * The provisioning state of the site resource. **TODO**: Confirm if this is needed.
     */
    provisioningState: string;
    /**
     * The list of site network services on the site.
     */
    siteNetworkServiceReferences: ReferencedResourceResponse[];
}

/**
 * Sku, to be associated with a SiteNetworkService.
 */
export interface SkuResponse {
    /**
     * Name of this Sku
     */
    name: string;
    /**
     * The SKU tier based on the SKU name.
     */
    tier: string;
}

/**
 * SSH configuration for Linux based VMs running on Azure
 */
export interface SshConfigurationResponse {
    /**
     * The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: SshPublicKeyResponse[];
}

/**
 * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
 */
export interface SshPublicKeyResponse {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    keyData?: string;
    /**
     * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: string;
}

/**
 * Specifies the storage settings for the virtual machine disks.
 */
export interface StorageProfileResponse {
    /**
     * Specifies the parameters that are used to add a data disk to a virtual machine.
     */
    dataDisks?: DataDiskResponse[];
    /**
     * The image reference properties.
     */
    imageReference?: ImageReferenceResponse;
    /**
     * Specifies information about the operating system disk used by the virtual machine.
     */
    osDisk?: OsDiskResponse;
}

/**
 * Reference to another sub resource.
 */
export interface SubResourceResponse {
    /**
     * Resource ID.
     */
    id?: string;
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

/**
 * Vhd artifact profile.
 */
export interface VhdImageArtifactProfileResponse {
    /**
     * Vhd name.
     */
    vhdName?: string;
    /**
     * Vhd version.
     */
    vhdVersion?: string;
}

/**
 * Vhd mapping rule profile
 */
export interface VhdImageMappingRuleProfileResponse {
    /**
     * List of values.
     */
    userConfiguration?: string;
}

/**
 * Virtual network function network function definition version properties.
 */
export interface VirtualNetworkFunctionNetworkFunctionDefinitionVersionResponse {
    /**
     * The deployment parameters of the network function definition version.
     */
    deployParameters?: string;
    /**
     * The network function definition version description.
     */
    description?: string;
    /**
     * Virtual network function template.
     */
    networkFunctionTemplate?: AzureCoreNetworkFunctionTemplateResponse | AzureOperatorNexusNetworkFunctionTemplateResponse;
    /**
     * The network function type.
     * Expected value is 'VirtualNetworkFunction'.
     */
    networkFunctionType: "VirtualNetworkFunction";
    /**
     * The provisioning state of the network function definition version resource.
     */
    provisioningState: string;
    /**
     * The network function definition version state.
     */
    versionState: string;
}
