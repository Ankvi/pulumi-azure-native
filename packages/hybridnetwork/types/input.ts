import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The arm template RE.
 */
export interface ArmResourceDefinitionResourceElementTemplateArgs {
    /**
     * Artifact profile properties.
     */
    artifactProfile?: pulumi.Input<NSDArtifactProfileArgs | undefined>;
    /**
     * Name and value pairs that define the parameter values. It can be  a well formed escaped JSON string.
     */
    parameterValues?: pulumi.Input<string | undefined>;
    /**
     * The template type.
     */
    templateType?: pulumi.Input<string | enums.TemplateType | undefined>;
}

/**
 * The arm resource definition resource element template details.
 */
export interface ArmResourceDefinitionResourceElementTemplateDetailsArgs {
    /**
     * The resource element template type.
     */
    configuration?: pulumi.Input<ArmResourceDefinitionResourceElementTemplateArgs | undefined>;
    /**
     * The depends on profile.
     */
    dependsOnProfile?: pulumi.Input<DependsOnProfileArgs | undefined>;
    /**
     * Name of the resource element template.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The resource element template type.
     * Expected value is 'ArmResourceDefinition'.
     */
    resourceElementType: pulumi.Input<"ArmResourceDefinition">;
}

/**
 * Template artifact profile.
 */
export interface ArmTemplateArtifactProfileArgs {
    /**
     * Template name.
     */
    templateName?: pulumi.Input<string | undefined>;
    /**
     * Template version.
     */
    templateVersion?: pulumi.Input<string | undefined>;
}

/**
 * Template mapping rule profile
 */
export interface ArmTemplateMappingRuleProfileArgs {
    /**
     * List of template parameters.
     */
    templateParameters?: pulumi.Input<string | undefined>;
}

/**
 * Artifact manifest properties.
 */
export interface ArtifactManifestPropertiesFormatArgs {
    /**
     * The artifacts list.
     */
    artifacts?: pulumi.Input<pulumi.Input<ManifestArtifactFormatArgs>[] | undefined>;
}

/**
 * Artifact store properties.
 */
export interface ArtifactStorePropertiesFormatArgs {
    /**
     * The artifact store backing resource network access type
     */
    backingResourcePublicNetworkAccess?: pulumi.Input<string | enums.BackingResourcePublicNetworkAccess | undefined>;
    managedResourceGroupConfiguration?: pulumi.Input<ArtifactStorePropertiesFormatManagedResourceGroupConfigurationArgs | undefined>;
    /**
     * The replication strategy.
     */
    replicationStrategy?: pulumi.Input<string | enums.ArtifactReplicationStrategy | undefined>;
    /**
     * The artifact store type.
     */
    storeType?: pulumi.Input<string | enums.ArtifactStoreType | undefined>;
}

export interface ArtifactStorePropertiesFormatManagedResourceGroupConfigurationArgs {
    /**
     * The managed resource group location.
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * The managed resource group name.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * The AzureArcK8sCluster NFVI detail.
 */
export interface AzureArcK8sClusterNFVIDetailsArgs {
    /**
     * The reference to the custom location.
     */
    customLocationReference?: pulumi.Input<ReferencedResourceArgs | undefined>;
    /**
     * Name of the nfvi.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The NFVI type.
     * Expected value is 'AzureArcKubernetes'.
     */
    nfviType: pulumi.Input<"AzureArcKubernetes">;
}

/**
 * Azure arc kubernetes artifact profile properties.
 */
export interface AzureArcKubernetesArtifactProfileArgs {
    /**
     * The reference to artifact store.
     */
    artifactStore?: pulumi.Input<ReferencedResourceArgs | undefined>;
    /**
     * Helm artifact profile.
     */
    helmArtifactProfile?: pulumi.Input<HelmArtifactProfileArgs | undefined>;
}

/**
 * Azure arc kubernetes deploy mapping rule profile.
 */
export interface AzureArcKubernetesDeployMappingRuleProfileArgs {
    /**
     * The application enablement.
     */
    applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement | undefined>;
    /**
     * The helm mapping rule profile.
     */
    helmMappingRuleProfile?: pulumi.Input<HelmMappingRuleProfileArgs | undefined>;
}

/**
 * Azure arc kubernetes helm application configurations.
 */
export interface AzureArcKubernetesHelmApplicationArgs {
    /**
     * Azure arc kubernetes artifact profile.
     */
    artifactProfile?: pulumi.Input<AzureArcKubernetesArtifactProfileArgs | undefined>;
    /**
     * The artifact type.
     * Expected value is 'HelmPackage'.
     */
    artifactType: pulumi.Input<"HelmPackage">;
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: pulumi.Input<DependsOnProfileArgs | undefined>;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: pulumi.Input<AzureArcKubernetesDeployMappingRuleProfileArgs | undefined>;
    /**
     * The name of the network function application.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Azure Arc kubernetes network function template.
 */
export interface AzureArcKubernetesNetworkFunctionTemplateArgs {
    /**
     * Network function applications.
     */
    networkFunctionApplications?: pulumi.Input<pulumi.Input<AzureArcKubernetesHelmApplicationArgs>[] | undefined>;
    /**
     * The network function type.
     * Expected value is 'AzureArcKubernetes'.
     */
    nfviType: pulumi.Input<"AzureArcKubernetes">;
}

/**
 * Azure template artifact profile properties.
 */
export interface AzureCoreArmTemplateArtifactProfileArgs {
    /**
     * The reference to artifact store.
     */
    artifactStore?: pulumi.Input<ReferencedResourceArgs | undefined>;
    /**
     * Template artifact profile.
     */
    templateArtifactProfile?: pulumi.Input<ArmTemplateArtifactProfileArgs | undefined>;
}

/**
 * Azure template deploy mapping rule profile.
 */
export interface AzureCoreArmTemplateDeployMappingRuleProfileArgs {
    /**
     * The application enablement.
     */
    applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement | undefined>;
    /**
     * The template mapping rule profile.
     */
    templateMappingRuleProfile?: pulumi.Input<ArmTemplateMappingRuleProfileArgs | undefined>;
}

/**
 * The Azure Core NFVI detail.
 */
export interface AzureCoreNFVIDetailsArgs {
    /**
     * Location of the Azure core.
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * Name of the nfvi.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The NFVI type.
     * Expected value is 'AzureCore'.
     */
    nfviType: pulumi.Input<"AzureCore">;
}

/**
 * Azure core network function Template application definition.
 */
export interface AzureCoreNetworkFunctionArmTemplateApplicationArgs {
    /**
     * Azure template artifact profile.
     */
    artifactProfile?: pulumi.Input<AzureCoreArmTemplateArtifactProfileArgs | undefined>;
    /**
     * The artifact type.
     * Expected value is 'ArmTemplate'.
     */
    artifactType: pulumi.Input<"ArmTemplate">;
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: pulumi.Input<DependsOnProfileArgs | undefined>;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: pulumi.Input<AzureCoreArmTemplateDeployMappingRuleProfileArgs | undefined>;
    /**
     * The name of the network function application.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Azure virtual network function template.
 */
export interface AzureCoreNetworkFunctionTemplateArgs {
    /**
     * Network function applications.
     */
    networkFunctionApplications?: pulumi.Input<pulumi.Input<AzureCoreNetworkFunctionArmTemplateApplicationArgs | AzureCoreNetworkFunctionVhdApplicationArgs>[] | undefined>;
    /**
     * The network function type.
     * Expected value is 'AzureCore'.
     */
    nfviType: pulumi.Input<"AzureCore">;
}

/**
 * Azure core network function vhd application definition.
 */
export interface AzureCoreNetworkFunctionVhdApplicationArgs {
    /**
     * Azure vhd image artifact profile.
     */
    artifactProfile?: pulumi.Input<AzureCoreVhdImageArtifactProfileArgs | undefined>;
    /**
     * The artifact type.
     * Expected value is 'VhdImageFile'.
     */
    artifactType: pulumi.Input<"VhdImageFile">;
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: pulumi.Input<DependsOnProfileArgs | undefined>;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: pulumi.Input<AzureCoreVhdImageDeployMappingRuleProfileArgs | undefined>;
    /**
     * The name of the network function application.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Azure vhd artifact profile properties.
 */
export interface AzureCoreVhdImageArtifactProfileArgs {
    /**
     * The reference to artifact store.
     */
    artifactStore?: pulumi.Input<ReferencedResourceArgs | undefined>;
    /**
     * Vhd artifact profile.
     */
    vhdArtifactProfile?: pulumi.Input<VhdImageArtifactProfileArgs | undefined>;
}

/**
 * Azure vhd deploy mapping rule profile.
 */
export interface AzureCoreVhdImageDeployMappingRuleProfileArgs {
    /**
     * The application enablement.
     */
    applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement | undefined>;
    /**
     * The vhd mapping rule profile.
     */
    vhdImageMappingRuleProfile?: pulumi.Input<VhdImageMappingRuleProfileArgs | undefined>;
}

/**
 * Azure Operator Distributed Services vhd artifact profile properties.
 */
export interface AzureOperatorNexusArmTemplateArtifactProfileArgs {
    /**
     * The reference to artifact store.
     */
    artifactStore?: pulumi.Input<ReferencedResourceArgs | undefined>;
    /**
     * Template artifact profile.
     */
    templateArtifactProfile?: pulumi.Input<ArmTemplateArtifactProfileArgs | undefined>;
}

/**
 * Azure Operator Distributed Services template deploy mapping rule profile.
 */
export interface AzureOperatorNexusArmTemplateDeployMappingRuleProfileArgs {
    /**
     * The application enablement.
     */
    applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement | undefined>;
    /**
     * The template mapping rule profile.
     */
    templateMappingRuleProfile?: pulumi.Input<ArmTemplateMappingRuleProfileArgs | undefined>;
}

/**
 * The AzureOperatorNexusCluster NFVI detail.
 */
export interface AzureOperatorNexusClusterNFVIDetailsArgs {
    /**
     * The reference to the custom location.
     */
    customLocationReference?: pulumi.Input<ReferencedResourceArgs | undefined>;
    /**
     * Name of the nfvi.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The NFVI type.
     * Expected value is 'AzureOperatorNexus'.
     */
    nfviType: pulumi.Input<"AzureOperatorNexus">;
}

/**
 * Azure Operator Distributed Services image artifact profile properties.
 */
export interface AzureOperatorNexusImageArtifactProfileArgs {
    /**
     * The reference to artifact store.
     */
    artifactStore?: pulumi.Input<ReferencedResourceArgs | undefined>;
    /**
     * Image artifact profile.
     */
    imageArtifactProfile?: pulumi.Input<ImageArtifactProfileArgs | undefined>;
}

/**
 * Azure Operator Distributed Services image deploy mapping rule profile.
 */
export interface AzureOperatorNexusImageDeployMappingRuleProfileArgs {
    /**
     * The application enablement.
     */
    applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement | undefined>;
    /**
     * The vhd mapping rule profile.
     */
    imageMappingRuleProfile?: pulumi.Input<ImageMappingRuleProfileArgs | undefined>;
}

/**
 * Azure Operator Distributed Services network function Template application definition.
 */
export interface AzureOperatorNexusNetworkFunctionArmTemplateApplicationArgs {
    /**
     * Azure Operator Distributed Services Template artifact profile.
     */
    artifactProfile?: pulumi.Input<AzureOperatorNexusArmTemplateArtifactProfileArgs | undefined>;
    /**
     * The artifact type.
     * Expected value is 'ArmTemplate'.
     */
    artifactType: pulumi.Input<"ArmTemplate">;
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: pulumi.Input<DependsOnProfileArgs | undefined>;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: pulumi.Input<AzureOperatorNexusArmTemplateDeployMappingRuleProfileArgs | undefined>;
    /**
     * The name of the network function application.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Azure Operator Distributed Services network function image application definition.
 */
export interface AzureOperatorNexusNetworkFunctionImageApplicationArgs {
    /**
     * Azure Operator Distributed Services image artifact profile.
     */
    artifactProfile?: pulumi.Input<AzureOperatorNexusImageArtifactProfileArgs | undefined>;
    /**
     * The artifact type.
     * Expected value is 'ImageFile'.
     */
    artifactType: pulumi.Input<"ImageFile">;
    /**
     * Depends on profile definition.
     */
    dependsOnProfile?: pulumi.Input<DependsOnProfileArgs | undefined>;
    /**
     * Deploy mapping rule profile.
     */
    deployParametersMappingRuleProfile?: pulumi.Input<AzureOperatorNexusImageDeployMappingRuleProfileArgs | undefined>;
    /**
     * The name of the network function application.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Azure Operator Distributed Services network function template.
 */
export interface AzureOperatorNexusNetworkFunctionTemplateArgs {
    /**
     * Network function applications.
     */
    networkFunctionApplications?: pulumi.Input<pulumi.Input<AzureOperatorNexusNetworkFunctionArmTemplateApplicationArgs | AzureOperatorNexusNetworkFunctionImageApplicationArgs>[] | undefined>;
    /**
     * The network function type.
     * Expected value is 'AzureOperatorNexus'.
     */
    nfviType: pulumi.Input<"AzureOperatorNexus">;
}

/**
 * Configuration group schema properties.
 */
export interface ConfigurationGroupSchemaPropertiesFormatArgs {
    /**
     * Description of what schema can contain.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
     */
    schemaDefinition?: pulumi.Input<string | undefined>;
}

/**
 * The ConfigurationValue with secrets.
 */
export interface ConfigurationValueWithSecretsArgs {
    /**
     * The configuration group schema resource reference.
     */
    configurationGroupSchemaResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs | undefined>;
    /**
     * The secret type which indicates if secret or not.
     * Expected value is 'Secret'.
     */
    configurationType: pulumi.Input<"Secret">;
    /**
     * Name and value pairs that define the configuration value secrets. It can be a well formed escaped JSON string.
     */
    secretConfigurationValue?: pulumi.Input<string | undefined>;
}

/**
 * The ConfigurationValue with no secrets.
 */
export interface ConfigurationValueWithoutSecretsArgs {
    /**
     * The configuration group schema resource reference.
     */
    configurationGroupSchemaResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs | undefined>;
    /**
     * The secret type which indicates if secret or not.
     * Expected value is 'Open'.
     */
    configurationType: pulumi.Input<"Open">;
    /**
     * Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
     */
    configurationValue?: pulumi.Input<string | undefined>;
}

/**
 * Containerized network function network function definition version properties.
 */
export interface ContainerizedNetworkFunctionDefinitionVersionArgs {
    /**
     * The deployment parameters of the network function definition version.
     */
    deployParameters?: pulumi.Input<string | undefined>;
    /**
     * The network function definition version description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Containerized network function template.
     */
    networkFunctionTemplate?: pulumi.Input<AzureArcKubernetesNetworkFunctionTemplateArgs | undefined>;
    /**
     * The network function type.
     * Expected value is 'ContainerizedNetworkFunction'.
     */
    networkFunctionType: pulumi.Input<"ContainerizedNetworkFunction">;
}

/**
 * Specifies the custom settings for the virtual machine.
 */
export interface CustomProfileArgs {
    /**
     * Path for metadata configuration.
     */
    metadataConfigurationPath?: pulumi.Input<string | undefined>;
}

/**
 * Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
 */
export interface DataDiskArgs {
    /**
     * Specifies how the virtual machine should be created.
     */
    createOption?: pulumi.Input<string | enums.DiskCreateOptionTypes | undefined>;
    /**
     * Specifies the size of an empty disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image.
     */
    diskSizeGB?: pulumi.Input<number | undefined>;
    /**
     * The name of data disk.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Depends on profile definition.
 */
export interface DependsOnProfileArgs {
    /**
     * Application installation operation dependency.
     */
    installDependsOn?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Application deletion operation dependency.
     */
    uninstallDependsOn?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Application update operation dependency.
     */
    updateDependsOn?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Helm artifact profile.
 */
export interface HelmArtifactProfileArgs {
    /**
     * Helm package name.
     */
    helmPackageName?: pulumi.Input<string | undefined>;
    /**
     * Helm package version range.
     */
    helmPackageVersionRange?: pulumi.Input<string | undefined>;
    /**
     * The image pull secrets values path list.
     */
    imagePullSecretsValuesPaths?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The registry values path list.
     */
    registryValuesPaths?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The helm deployment install options
 */
export interface HelmInstallOptionsArgs {
    /**
     * The helm deployment atomic options
     */
    atomic?: pulumi.Input<string | undefined>;
    /**
     * The helm deployment timeout options
     */
    timeout?: pulumi.Input<string | undefined>;
    /**
     * The helm deployment wait options
     */
    wait?: pulumi.Input<string | undefined>;
}

/**
 * Helm mapping rule profile
 */
export interface HelmMappingRuleProfileArgs {
    /**
     * Helm package version.
     */
    helmPackageVersion?: pulumi.Input<string | undefined>;
    /**
     * The helm deployment options
     */
    options?: pulumi.Input<HelmMappingRuleProfileOptionsArgs | undefined>;
    /**
     * Helm release name.
     */
    releaseName?: pulumi.Input<string | undefined>;
    /**
     * Helm release namespace.
     */
    releaseNamespace?: pulumi.Input<string | undefined>;
    /**
     * Helm release values.
     */
    values?: pulumi.Input<string | undefined>;
}

/**
 * The helm deployment options
 */
export interface HelmMappingRuleProfileOptionsArgs {
    /**
     * The helm deployment install options
     */
    installOptions?: pulumi.Input<HelmInstallOptionsArgs | undefined>;
    /**
     * The helm deployment upgrade options
     */
    upgradeOptions?: pulumi.Input<HelmUpgradeOptionsArgs | undefined>;
}

/**
 * The helm deployment install options
 */
export interface HelmUpgradeOptionsArgs {
    /**
     * The helm deployment atomic options
     */
    atomic?: pulumi.Input<string | undefined>;
    /**
     * The helm deployment timeout options
     */
    timeout?: pulumi.Input<string | undefined>;
    /**
     * The helm deployment wait options
     */
    wait?: pulumi.Input<string | undefined>;
}

/**
 * Image artifact profile.
 */
export interface ImageArtifactProfileArgs {
    /**
     * Image name.
     */
    imageName?: pulumi.Input<string | undefined>;
    /**
     * Image version.
     */
    imageVersion?: pulumi.Input<string | undefined>;
}

/**
 * Image mapping rule profile
 */
export interface ImageMappingRuleProfileArgs {
    /**
     * List of values.
     */
    userConfiguration?: pulumi.Input<string | undefined>;
}

/**
 * The image reference properties.
 */
export interface ImageReferenceArgs {
    /**
     * Specifies in decimal numbers, the exact version of image used to create the virtual machine.
     */
    exactVersion?: pulumi.Input<string | undefined>;
    /**
     * Specifies the offer of the image used to create the virtual machine.
     */
    offer?: pulumi.Input<string | undefined>;
    /**
     * The image publisher.
     */
    publisher?: pulumi.Input<string | undefined>;
    /**
     * The image SKU.
     */
    sku?: pulumi.Input<string | undefined>;
    /**
     * Specifies the version of the image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Specifies the Linux operating system settings on the virtual machine.
 */
export interface LinuxConfigurationArgs {
    /**
     * Specifies the ssh key configuration for a Linux OS.
     */
    ssh?: pulumi.Input<SshConfigurationArgs | undefined>;
}

/**
 * Managed resource group configuration.
 */
export interface ManagedResourceGroupConfigurationArgs {
    /**
     * Managed resource group location.
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * Managed resource group name.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Manifest artifact properties.
 */
export interface ManifestArtifactFormatArgs {
    /**
     * The artifact name
     */
    artifactName?: pulumi.Input<string | undefined>;
    /**
     * The artifact type.
     */
    artifactType?: pulumi.Input<string | enums.ArtifactType | undefined>;
    /**
     * The artifact version.
     */
    artifactVersion?: pulumi.Input<string | undefined>;
}

/**
 * Artifact profile properties.
 */
export interface NSDArtifactProfileArgs {
    /**
     * Artifact name.
     */
    artifactName?: pulumi.Input<string | undefined>;
    /**
     * The artifact store resource id
     */
    artifactStoreReference?: pulumi.Input<ReferencedResourceArgs | undefined>;
    /**
     * Artifact version.
     */
    artifactVersion?: pulumi.Input<string | undefined>;
}

/**
 * Network function definition group properties.
 */
export interface NetworkFunctionDefinitionGroupPropertiesFormatArgs {
    /**
     * The network function definition group description.
     */
    description?: pulumi.Input<string | undefined>;
}

/**
 * The network function definition resource element template details.
 */
export interface NetworkFunctionDefinitionResourceElementTemplateDetailsArgs {
    /**
     * The resource element template type.
     */
    configuration?: pulumi.Input<ArmResourceDefinitionResourceElementTemplateArgs | undefined>;
    /**
     * The depends on profile.
     */
    dependsOnProfile?: pulumi.Input<DependsOnProfileArgs | undefined>;
    /**
     * Name of the resource element template.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The resource element template type.
     * Expected value is 'NetworkFunctionDefinition'.
     */
    resourceElementType: pulumi.Input<"NetworkFunctionDefinition">;
}

/**
 * Network function role configuration.
 */
export interface NetworkFunctionRoleConfigurationArgs {
    /**
     * Specifies the custom settings for the virtual machine.
     */
    customProfile?: pulumi.Input<CustomProfileArgs | undefined>;
    /**
     * The network interface configurations.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceArgs>[] | undefined>;
    /**
     * Specifies the operating system settings for the role instance. This value can be updated during the deployment of network function.
     */
    osProfile?: pulumi.Input<OsProfileArgs | undefined>;
    /**
     * The name of the network function role.
     */
    roleName?: pulumi.Input<string | undefined>;
    /**
     * Role type.
     */
    roleType?: pulumi.Input<string | enums.NetworkFunctionRoleConfigurationType | undefined>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs | undefined>;
    /**
     * The user parameters for customers. The format of user data parameters has to be matched with the provided user data template.
     */
    userDataParameters?: any | undefined;
    /**
     * The user data template for customers. This is a json schema template describing the format and data type of user data parameters.
     */
    userDataTemplate?: any | undefined;
    /**
     * The size of the virtual machine.
     */
    virtualMachineSize?: pulumi.Input<string | enums.VirtualMachineSizeTypes | undefined>;
}
/**
 * networkFunctionRoleConfigurationArgsProvideDefaults sets the appropriate defaults for NetworkFunctionRoleConfigurationArgs
 */
export function networkFunctionRoleConfigurationArgsProvideDefaults(val: NetworkFunctionRoleConfigurationArgs): NetworkFunctionRoleConfigurationArgs {
    return {
        ...val,
        osProfile: pulumi.output(val.osProfile).apply(v => v === undefined ? undefined : osProfileArgsProvideDefaults(v)),
    };
}

/**
 * The network function template.
 */
export interface NetworkFunctionTemplateArgs {
    /**
     * An array of network function role definitions.
     */
    networkFunctionRoleConfigurations?: pulumi.Input<pulumi.Input<NetworkFunctionRoleConfigurationArgs>[] | undefined>;
}

/**
 * NetworkFunction with secrets.
 */
export interface NetworkFunctionValueWithSecretsArgs {
    /**
     * Indicates if software updates are allowed during deployment.
     */
    allowSoftwareUpdate?: pulumi.Input<boolean | undefined>;
    /**
     * The secret type which indicates if secret or not.
     * Expected value is 'Secret'.
     */
    configurationType: pulumi.Input<"Secret">;
    /**
     * The network function definition group name for the network function.
     */
    networkFunctionDefinitionGroupName?: pulumi.Input<string | undefined>;
    /**
     * The location of the network function definition offering.
     */
    networkFunctionDefinitionOfferingLocation?: pulumi.Input<string | undefined>;
    /**
     * The network function definition version for the network function.
     */
    networkFunctionDefinitionVersion?: pulumi.Input<string | undefined>;
    /**
     * The network function definition version resource reference.
     */
    networkFunctionDefinitionVersionResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs | undefined>;
    /**
     * The nfviId for the network function.
     */
    nfviId?: pulumi.Input<string | undefined>;
    /**
     * The nfvi type for the network function.
     */
    nfviType?: pulumi.Input<string | enums.NFVIType | undefined>;
    /**
     * The publisher name for the network function.
     */
    publisherName?: pulumi.Input<string | undefined>;
    /**
     * The scope of the publisher.
     */
    publisherScope?: pulumi.Input<string | enums.PublisherScope | undefined>;
    /**
     * The role configuration override values from the user.
     */
    roleOverrideValues?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The JSON-serialized secret deployment values from the user. This contains secrets like passwords,keys etc
     */
    secretDeploymentValues?: pulumi.Input<string | undefined>;
}

/**
 * NetworkFunction with no secrets.
 */
export interface NetworkFunctionValueWithoutSecretsArgs {
    /**
     * Indicates if software updates are allowed during deployment.
     */
    allowSoftwareUpdate?: pulumi.Input<boolean | undefined>;
    /**
     * The secret type which indicates if secret or not.
     * Expected value is 'Open'.
     */
    configurationType: pulumi.Input<"Open">;
    /**
     * The JSON-serialized deployment values from the user.
     */
    deploymentValues?: pulumi.Input<string | undefined>;
    /**
     * The network function definition group name for the network function.
     */
    networkFunctionDefinitionGroupName?: pulumi.Input<string | undefined>;
    /**
     * The location of the network function definition offering.
     */
    networkFunctionDefinitionOfferingLocation?: pulumi.Input<string | undefined>;
    /**
     * The network function definition version for the network function.
     */
    networkFunctionDefinitionVersion?: pulumi.Input<string | undefined>;
    /**
     * The network function definition version resource reference.
     */
    networkFunctionDefinitionVersionResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs | undefined>;
    /**
     * The nfviId for the network function.
     */
    nfviId?: pulumi.Input<string | undefined>;
    /**
     * The nfvi type for the network function.
     */
    nfviType?: pulumi.Input<string | enums.NFVIType | undefined>;
    /**
     * The publisher name for the network function.
     */
    publisherName?: pulumi.Input<string | undefined>;
    /**
     * The scope of the publisher.
     */
    publisherScope?: pulumi.Input<string | enums.PublisherScope | undefined>;
    /**
     * The role configuration override values from the user.
     */
    roleOverrideValues?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Network interface properties.
 */
export interface NetworkInterfaceArgs {
    /**
     * A list of IP configurations of the network interface.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<NetworkInterfaceIPConfigurationArgs>[] | undefined>;
    /**
     * The MAC address of the network interface.
     */
    macAddress?: pulumi.Input<string | undefined>;
    /**
     * The name of the network interface.
     */
    networkInterfaceName?: pulumi.Input<string | undefined>;
    /**
     * The type of the VM switch.
     */
    vmSwitchType?: pulumi.Input<string | enums.VMSwitchType | undefined>;
}

/**
 * Network interface IP configuration properties.
 */
export interface NetworkInterfaceIPConfigurationArgs {
    /**
     * The list of DNS servers IP addresses.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The value of the gateway.
     */
    gateway?: pulumi.Input<string | undefined>;
    /**
     * The value of the IP address.
     */
    ipAddress?: pulumi.Input<string | undefined>;
    /**
     * IP address allocation method.
     */
    ipAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod | undefined>;
    /**
     * IP address version.
     */
    ipVersion?: pulumi.Input<string | enums.IPVersion | undefined>;
    /**
     * The value of the subnet.
     */
    subnet?: pulumi.Input<string | undefined>;
}

/**
 * network service design group properties.
 */
export interface NetworkServiceDesignGroupPropertiesFormatArgs {
    /**
     * The network service design group description.
     */
    description?: pulumi.Input<string | undefined>;
}

/**
 * network service design version properties.
 */
export interface NetworkServiceDesignVersionPropertiesFormatArgs {
    /**
     * The configuration schemas to used to define the values.
     */
    configurationGroupSchemaReferences?: pulumi.Input<{[key: string]: pulumi.Input<ReferencedResourceArgs>} | undefined>;
    /**
     * The network service design version description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The nfvis from the site.
     */
    nfvisFromSite?: pulumi.Input<{[key: string]: pulumi.Input<NfviDetailsArgs>} | undefined>;
    /**
     * List of resource element template
     */
    resourceElementTemplates?: pulumi.Input<pulumi.Input<ArmResourceDefinitionResourceElementTemplateDetailsArgs | NetworkFunctionDefinitionResourceElementTemplateDetailsArgs>[] | undefined>;
}

/**
 * The nfvi details.
 */
export interface NfviDetailsArgs {
    /**
     * The nfvi name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The nfvi type.
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * Non secret deployment resource id reference.
 */
export interface OpenDeploymentResourceReferenceArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The resource reference arm id type.
     * Expected value is 'Open'.
     */
    idType: pulumi.Input<"Open">;
}

/**
 * Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
 */
export interface OsDiskArgs {
    /**
     * Specifies the size of os disk in gigabytes. This is the fully expanded disk size needed of the VHD image on the ASE. This disk size should be greater than the size of the VHD provided in vhdUri.
     */
    diskSizeGB?: pulumi.Input<number | undefined>;
    /**
     * The VHD name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The OS type.
     */
    osType?: pulumi.Input<string | enums.OperatingSystemTypes | undefined>;
    /**
     * The virtual hard disk.
     */
    vhd?: pulumi.Input<VirtualHardDiskArgs | undefined>;
}

/**
 * Specifies the operating system settings for the role instance.
 */
export interface OsProfileArgs {
    /**
     * Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    adminUsername?: pulumi.Input<string | undefined>;
    /**
     * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file. For more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
     */
    customData?: pulumi.Input<string | undefined>;
    /**
     * Indicates if custom data is required to deploy this role.
     */
    customDataRequired?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    linuxConfiguration?: pulumi.Input<LinuxConfigurationArgs | undefined>;
}
/**
 * osProfileArgsProvideDefaults sets the appropriate defaults for OsProfileArgs
 */
export function osProfileArgsProvideDefaults(val: OsProfileArgs): OsProfileArgs {
    return {
        ...val,
        customDataRequired: (val.customDataRequired) ?? true,
    };
}

/**
 * publisher properties.
 */
export interface PublisherPropertiesFormatArgs {
    /**
     * The publisher scope.
     */
    scope?: pulumi.Input<string | enums.PublisherScope | undefined>;
}

/**
 * Reference to another resource.
 */
export interface ReferencedResourceArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Secret deployment resource id reference.
 */
export interface SecretDeploymentResourceReferenceArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The resource reference arm id type.
     * Expected value is 'Secret'.
     */
    idType: pulumi.Input<"Secret">;
}

/**
 * Site network service properties.
 */
export interface SiteNetworkServicePropertiesFormatArgs {
    /**
     * The goal state of the site network service resource. This has references to the configuration group value objects that describe the desired state of the site network service.
     */
    desiredStateConfigurationGroupValueReferences?: pulumi.Input<{[key: string]: pulumi.Input<ReferencedResourceArgs>} | undefined>;
    /**
     * Managed resource group configuration.
     */
    managedResourceGroupConfiguration?: pulumi.Input<ManagedResourceGroupConfigurationArgs | undefined>;
    /**
     * The network service design version resource reference.
     */
    networkServiceDesignVersionResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs | undefined>;
    /**
     * The site details
     */
    siteReference?: pulumi.Input<ReferencedResourceArgs | undefined>;
}

/**
 * Site properties.
 */
export interface SitePropertiesFormatArgs {
    /**
     * List of NFVIs
     */
    nfvis?: pulumi.Input<pulumi.Input<AzureArcK8sClusterNFVIDetailsArgs | AzureCoreNFVIDetailsArgs | AzureOperatorNexusClusterNFVIDetailsArgs>[] | undefined>;
}

/**
 * Sku, to be associated with a SiteNetworkService.
 */
export interface SkuArgs {
    /**
     * Name of this Sku
     */
    name: pulumi.Input<string | enums.SkuName>;
}

/**
 * SSH configuration for Linux based VMs running on Azure
 */
export interface SshConfigurationArgs {
    /**
     * The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: pulumi.Input<pulumi.Input<SshPublicKeyArgs>[] | undefined>;
}

/**
 * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
 */
export interface SshPublicKeyArgs {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    keyData?: pulumi.Input<string | undefined>;
    /**
     * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: pulumi.Input<string | undefined>;
}

/**
 * Specifies the storage settings for the virtual machine disks.
 */
export interface StorageProfileArgs {
    /**
     * Specifies the parameters that are used to add a data disk to a virtual machine.
     */
    dataDisks?: pulumi.Input<pulumi.Input<DataDiskArgs>[] | undefined>;
    /**
     * The image reference properties.
     */
    imageReference?: pulumi.Input<ImageReferenceArgs | undefined>;
    /**
     * Specifies information about the operating system disk used by the virtual machine.
     */
    osDisk?: pulumi.Input<OsDiskArgs | undefined>;
}

/**
 * Vhd artifact profile.
 */
export interface VhdImageArtifactProfileArgs {
    /**
     * Vhd name.
     */
    vhdName?: pulumi.Input<string | undefined>;
    /**
     * Vhd version.
     */
    vhdVersion?: pulumi.Input<string | undefined>;
}

/**
 * Vhd mapping rule profile
 */
export interface VhdImageMappingRuleProfileArgs {
    /**
     * List of values.
     */
    userConfiguration?: pulumi.Input<string | undefined>;
}

/**
 * Describes the uri of a disk.
 */
export interface VirtualHardDiskArgs {
    /**
     * Specifies the virtual hard disk's uri.
     */
    uri?: pulumi.Input<string | undefined>;
}

/**
 * Virtual network function network function definition version properties.
 */
export interface VirtualNetworkFunctionNetworkFunctionDefinitionVersionArgs {
    /**
     * The deployment parameters of the network function definition version.
     */
    deployParameters?: pulumi.Input<string | undefined>;
    /**
     * The network function definition version description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Virtual network function template.
     */
    networkFunctionTemplate?: pulumi.Input<AzureCoreNetworkFunctionTemplateArgs | AzureOperatorNexusNetworkFunctionTemplateArgs | undefined>;
    /**
     * The network function type.
     * Expected value is 'VirtualNetworkFunction'.
     */
    networkFunctionType: pulumi.Input<"VirtualNetworkFunction">;
}
