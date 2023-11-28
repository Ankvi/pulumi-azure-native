import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The arm template RE.
     */
    export interface ArmResourceDefinitionResourceElementTemplateArgs {
        /**
         * Artifact profile properties.
         */
        artifactProfile?: pulumi.Input<NSDArtifactProfileArgs>;
        /**
         * Name and value pairs that define the parameter values. It can be  a well formed escaped JSON string.
         */
        parameterValues?: pulumi.Input<string>;
        /**
         * The template type.
         */
        templateType?: pulumi.Input<string | enums.TemplateType>;
    }

    /**
     * The arm resource definition resource element template details.
     */
    export interface ArmResourceDefinitionResourceElementTemplateDetailsArgs {
        /**
         * The resource element template type.
         */
        configuration?: pulumi.Input<ArmResourceDefinitionResourceElementTemplateArgs>;
        /**
         * The depends on profile.
         */
        dependsOnProfile?: pulumi.Input<DependsOnProfileArgs>;
        /**
         * Name of the resource element template.
         */
        name?: pulumi.Input<string>;
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
        templateName?: pulumi.Input<string>;
        /**
         * Template version.
         */
        templateVersion?: pulumi.Input<string>;
    }

    /**
     * Template mapping rule profile
     */
    export interface ArmTemplateMappingRuleProfileArgs {
        /**
         * List of template parameters.
         */
        templateParameters?: pulumi.Input<string>;
    }

    /**
     * Artifact manifest properties.
     */
    export interface ArtifactManifestPropertiesFormatArgs {
        /**
         * The artifacts list.
         */
        artifacts?: pulumi.Input<pulumi.Input<ManifestArtifactFormatArgs>[]>;
    }

    /**
     * Artifact store properties.
     */
    export interface ArtifactStorePropertiesFormatArgs {
        managedResourceGroupConfiguration?: pulumi.Input<ArtifactStorePropertiesFormatManagedResourceGroupConfigurationArgs>;
        /**
         * The replication strategy.
         */
        replicationStrategy?: pulumi.Input<string | enums.ArtifactReplicationStrategy>;
        /**
         * The artifact store type.
         */
        storeType?: pulumi.Input<string | enums.ArtifactStoreType>;
    }

    export interface ArtifactStorePropertiesFormatManagedResourceGroupConfigurationArgs {
        /**
         * The managed resource group location.
         */
        location?: pulumi.Input<string>;
        /**
         * The managed resource group name.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The AzureArcK8sCluster NFVI detail.
     */
    export interface AzureArcK8sClusterNFVIDetailsArgs {
        /**
         * The reference to the custom location.
         */
        customLocationReference?: pulumi.Input<ReferencedResourceArgs>;
        /**
         * Name of the nfvi.
         */
        name?: pulumi.Input<string>;
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
        artifactStore?: pulumi.Input<ReferencedResourceArgs>;
        /**
         * Helm artifact profile.
         */
        helmArtifactProfile?: pulumi.Input<HelmArtifactProfileArgs>;
    }

    /**
     * Azure arc kubernetes deploy mapping rule profile.
     */
    export interface AzureArcKubernetesDeployMappingRuleProfileArgs {
        /**
         * The application enablement.
         */
        applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement>;
        /**
         * The helm mapping rule profile.
         */
        helmMappingRuleProfile?: pulumi.Input<HelmMappingRuleProfileArgs>;
    }

    /**
     * Azure arc kubernetes helm application configurations.
     */
    export interface AzureArcKubernetesHelmApplicationArgs {
        /**
         * Azure arc kubernetes artifact profile.
         */
        artifactProfile?: pulumi.Input<AzureArcKubernetesArtifactProfileArgs>;
        /**
         * The artifact type.
         * Expected value is 'HelmPackage'.
         */
        artifactType: pulumi.Input<"HelmPackage">;
        /**
         * Depends on profile definition.
         */
        dependsOnProfile?: pulumi.Input<DependsOnProfileArgs>;
        /**
         * Deploy mapping rule profile.
         */
        deployParametersMappingRuleProfile?: pulumi.Input<AzureArcKubernetesDeployMappingRuleProfileArgs>;
        /**
         * The name of the network function application.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Azure Arc kubernetes network function template.
     */
    export interface AzureArcKubernetesNetworkFunctionTemplateArgs {
        /**
         * Network function applications.
         */
        networkFunctionApplications?: pulumi.Input<pulumi.Input<AzureArcKubernetesHelmApplicationArgs>[]>;
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
        artifactStore?: pulumi.Input<ReferencedResourceArgs>;
        /**
         * Template artifact profile.
         */
        templateArtifactProfile?: pulumi.Input<ArmTemplateArtifactProfileArgs>;
    }

    /**
     * Azure template deploy mapping rule profile.
     */
    export interface AzureCoreArmTemplateDeployMappingRuleProfileArgs {
        /**
         * The application enablement.
         */
        applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement>;
        /**
         * The template mapping rule profile.
         */
        templateMappingRuleProfile?: pulumi.Input<ArmTemplateMappingRuleProfileArgs>;
    }

    /**
     * The Azure Core NFVI detail.
     */
    export interface AzureCoreNFVIDetailsArgs {
        /**
         * Location of the Azure core.
         */
        location?: pulumi.Input<string>;
        /**
         * Name of the nfvi.
         */
        name?: pulumi.Input<string>;
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
        artifactProfile?: pulumi.Input<AzureCoreArmTemplateArtifactProfileArgs>;
        /**
         * The artifact type.
         * Expected value is 'ArmTemplate'.
         */
        artifactType: pulumi.Input<"ArmTemplate">;
        /**
         * Depends on profile definition.
         */
        dependsOnProfile?: pulumi.Input<DependsOnProfileArgs>;
        /**
         * Deploy mapping rule profile.
         */
        deployParametersMappingRuleProfile?: pulumi.Input<AzureCoreArmTemplateDeployMappingRuleProfileArgs>;
        /**
         * The name of the network function application.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Azure virtual network function template.
     */
    export interface AzureCoreNetworkFunctionTemplateArgs {
        /**
         * Network function applications.
         */
        networkFunctionApplications?: pulumi.Input<pulumi.Input<AzureCoreNetworkFunctionArmTemplateApplicationArgs | AzureCoreNetworkFunctionVhdApplicationArgs>[]>;
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
        artifactProfile?: pulumi.Input<AzureCoreVhdImageArtifactProfileArgs>;
        /**
         * The artifact type.
         * Expected value is 'VhdImageFile'.
         */
        artifactType: pulumi.Input<"VhdImageFile">;
        /**
         * Depends on profile definition.
         */
        dependsOnProfile?: pulumi.Input<DependsOnProfileArgs>;
        /**
         * Deploy mapping rule profile.
         */
        deployParametersMappingRuleProfile?: pulumi.Input<AzureCoreVhdImageDeployMappingRuleProfileArgs>;
        /**
         * The name of the network function application.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Azure vhd artifact profile properties.
     */
    export interface AzureCoreVhdImageArtifactProfileArgs {
        /**
         * The reference to artifact store.
         */
        artifactStore?: pulumi.Input<ReferencedResourceArgs>;
        /**
         * Vhd artifact profile.
         */
        vhdArtifactProfile?: pulumi.Input<VhdImageArtifactProfileArgs>;
    }

    /**
     * Azure vhd deploy mapping rule profile.
     */
    export interface AzureCoreVhdImageDeployMappingRuleProfileArgs {
        /**
         * The application enablement.
         */
        applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement>;
        /**
         * The vhd mapping rule profile.
         */
        vhdImageMappingRuleProfile?: pulumi.Input<VhdImageMappingRuleProfileArgs>;
    }

    /**
     * Azure Operator Distributed Services vhd artifact profile properties.
     */
    export interface AzureOperatorNexusArmTemplateArtifactProfileArgs {
        /**
         * The reference to artifact store.
         */
        artifactStore?: pulumi.Input<ReferencedResourceArgs>;
        /**
         * Template artifact profile.
         */
        templateArtifactProfile?: pulumi.Input<ArmTemplateArtifactProfileArgs>;
    }

    /**
     * Azure Operator Distributed Services template deploy mapping rule profile.
     */
    export interface AzureOperatorNexusArmTemplateDeployMappingRuleProfileArgs {
        /**
         * The application enablement.
         */
        applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement>;
        /**
         * The template mapping rule profile.
         */
        templateMappingRuleProfile?: pulumi.Input<ArmTemplateMappingRuleProfileArgs>;
    }

    /**
     * The AzureOperatorNexusCluster NFVI detail.
     */
    export interface AzureOperatorNexusClusterNFVIDetailsArgs {
        /**
         * The reference to the custom location.
         */
        customLocationReference?: pulumi.Input<ReferencedResourceArgs>;
        /**
         * Name of the nfvi.
         */
        name?: pulumi.Input<string>;
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
        artifactStore?: pulumi.Input<ReferencedResourceArgs>;
        /**
         * Image artifact profile.
         */
        imageArtifactProfile?: pulumi.Input<ImageArtifactProfileArgs>;
    }

    /**
     * Azure Operator Distributed Services image deploy mapping rule profile.
     */
    export interface AzureOperatorNexusImageDeployMappingRuleProfileArgs {
        /**
         * The application enablement.
         */
        applicationEnablement?: pulumi.Input<string | enums.ApplicationEnablement>;
        /**
         * The vhd mapping rule profile.
         */
        imageMappingRuleProfile?: pulumi.Input<ImageMappingRuleProfileArgs>;
    }

    /**
     * Azure Operator Distributed Services network function Template application definition.
     */
    export interface AzureOperatorNexusNetworkFunctionArmTemplateApplicationArgs {
        /**
         * Azure Operator Distributed Services Template artifact profile.
         */
        artifactProfile?: pulumi.Input<AzureOperatorNexusArmTemplateArtifactProfileArgs>;
        /**
         * The artifact type.
         * Expected value is 'ArmTemplate'.
         */
        artifactType: pulumi.Input<"ArmTemplate">;
        /**
         * Depends on profile definition.
         */
        dependsOnProfile?: pulumi.Input<DependsOnProfileArgs>;
        /**
         * Deploy mapping rule profile.
         */
        deployParametersMappingRuleProfile?: pulumi.Input<AzureOperatorNexusArmTemplateDeployMappingRuleProfileArgs>;
        /**
         * The name of the network function application.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Azure Operator Distributed Services network function image application definition.
     */
    export interface AzureOperatorNexusNetworkFunctionImageApplicationArgs {
        /**
         * Azure Operator Distributed Services image artifact profile.
         */
        artifactProfile?: pulumi.Input<AzureOperatorNexusImageArtifactProfileArgs>;
        /**
         * The artifact type.
         * Expected value is 'ImageFile'.
         */
        artifactType: pulumi.Input<"ImageFile">;
        /**
         * Depends on profile definition.
         */
        dependsOnProfile?: pulumi.Input<DependsOnProfileArgs>;
        /**
         * Deploy mapping rule profile.
         */
        deployParametersMappingRuleProfile?: pulumi.Input<AzureOperatorNexusImageDeployMappingRuleProfileArgs>;
        /**
         * The name of the network function application.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Azure Operator Distributed Services network function template.
     */
    export interface AzureOperatorNexusNetworkFunctionTemplateArgs {
        /**
         * Network function applications.
         */
        networkFunctionApplications?: pulumi.Input<pulumi.Input<AzureOperatorNexusNetworkFunctionArmTemplateApplicationArgs | AzureOperatorNexusNetworkFunctionImageApplicationArgs>[]>;
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
        description?: pulumi.Input<string>;
        /**
         * Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
         */
        schemaDefinition?: pulumi.Input<string>;
    }

    /**
     * The ConfigurationValue with secrets.
     */
    export interface ConfigurationValueWithSecretsArgs {
        /**
         * The configuration group schema resource reference.
         */
        configurationGroupSchemaResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs>;
        /**
         * The secret type which indicates if secret or not.
         * Expected value is 'Secret'.
         */
        configurationType: pulumi.Input<"Secret">;
        /**
         * Name and value pairs that define the configuration value secrets. It can be a well formed escaped JSON string.
         */
        secretConfigurationValue?: pulumi.Input<string>;
    }

    /**
     * The ConfigurationValue with no secrets.
     */
    export interface ConfigurationValueWithoutSecretsArgs {
        /**
         * The configuration group schema resource reference.
         */
        configurationGroupSchemaResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs>;
        /**
         * The secret type which indicates if secret or not.
         * Expected value is 'Open'.
         */
        configurationType: pulumi.Input<"Open">;
        /**
         * Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
         */
        configurationValue?: pulumi.Input<string>;
    }

    /**
     * Containerized network function network function definition version properties.
     */
    export interface ContainerizedNetworkFunctionDefinitionVersionArgs {
        /**
         * The deployment parameters of the network function definition version.
         */
        deployParameters?: pulumi.Input<string>;
        /**
         * The network function definition version description.
         */
        description?: pulumi.Input<string>;
        /**
         * Containerized network function template.
         */
        networkFunctionTemplate?: pulumi.Input<AzureArcKubernetesNetworkFunctionTemplateArgs>;
        /**
         * The network function type.
         * Expected value is 'ContainerizedNetworkFunction'.
         */
        networkFunctionType: pulumi.Input<"ContainerizedNetworkFunction">;
    }

    /**
     * Depends on profile definition.
     */
    export interface DependsOnProfileArgs {
        /**
         * Application installation operation dependency.
         */
        installDependsOn?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Application deletion operation dependency.
         */
        uninstallDependsOn?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Application update operation dependency.
         */
        updateDependsOn?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Helm artifact profile.
     */
    export interface HelmArtifactProfileArgs {
        /**
         * Helm package name.
         */
        helmPackageName?: pulumi.Input<string>;
        /**
         * Helm package version range.
         */
        helmPackageVersionRange?: pulumi.Input<string>;
        /**
         * The image pull secrets values path list.
         */
        imagePullSecretsValuesPaths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The registry values path list.
         */
        registryValuesPaths?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The helm deployment install options
     */
    export interface HelmInstallOptionsArgs {
        /**
         * The helm deployment atomic options
         */
        atomic?: pulumi.Input<string>;
        /**
         * The helm deployment timeout options
         */
        timeout?: pulumi.Input<string>;
        /**
         * The helm deployment wait options
         */
        wait?: pulumi.Input<string>;
    }

    /**
     * Helm mapping rule profile
     */
    export interface HelmMappingRuleProfileArgs {
        /**
         * Helm package version.
         */
        helmPackageVersion?: pulumi.Input<string>;
        /**
         * The helm deployment options
         */
        options?: pulumi.Input<HelmMappingRuleProfileOptionsArgs>;
        /**
         * Helm release name.
         */
        releaseName?: pulumi.Input<string>;
        /**
         * Helm release namespace.
         */
        releaseNamespace?: pulumi.Input<string>;
        /**
         * Helm release values.
         */
        values?: pulumi.Input<string>;
    }

    /**
     * The helm deployment options
     */
    export interface HelmMappingRuleProfileOptionsArgs {
        /**
         * The helm deployment install options
         */
        installOptions?: pulumi.Input<HelmInstallOptionsArgs>;
        /**
         * The helm deployment upgrade options
         */
        upgradeOptions?: pulumi.Input<HelmUpgradeOptionsArgs>;
    }

    /**
     * The helm deployment install options
     */
    export interface HelmUpgradeOptionsArgs {
        /**
         * The helm deployment atomic options
         */
        atomic?: pulumi.Input<string>;
        /**
         * The helm deployment timeout options
         */
        timeout?: pulumi.Input<string>;
        /**
         * The helm deployment wait options
         */
        wait?: pulumi.Input<string>;
    }

    /**
     * Image artifact profile.
     */
    export interface ImageArtifactProfileArgs {
        /**
         * Image name.
         */
        imageName?: pulumi.Input<string>;
        /**
         * Image version.
         */
        imageVersion?: pulumi.Input<string>;
    }

    /**
     * Image mapping rule profile
     */
    export interface ImageMappingRuleProfileArgs {
        /**
         * List of values.
         */
        userConfiguration?: pulumi.Input<string>;
    }

    /**
     * Managed resource group configuration.
     */
    export interface ManagedResourceGroupConfigurationArgs {
        /**
         * Managed resource group location.
         */
        location?: pulumi.Input<string>;
        /**
         * Managed resource group name.
         */
        name?: pulumi.Input<string>;
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
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Manifest artifact properties.
     */
    export interface ManifestArtifactFormatArgs {
        /**
         * The artifact name
         */
        artifactName?: pulumi.Input<string>;
        /**
         * The artifact type.
         */
        artifactType?: pulumi.Input<string | enums.ArtifactType>;
        /**
         * The artifact version.
         */
        artifactVersion?: pulumi.Input<string>;
    }

    /**
     * Artifact profile properties.
     */
    export interface NSDArtifactProfileArgs {
        /**
         * Artifact name.
         */
        artifactName?: pulumi.Input<string>;
        /**
         * The artifact store resource id
         */
        artifactStoreReference?: pulumi.Input<ReferencedResourceArgs>;
        /**
         * Artifact version.
         */
        artifactVersion?: pulumi.Input<string>;
    }

    /**
     * Network function definition group properties.
     */
    export interface NetworkFunctionDefinitionGroupPropertiesFormatArgs {
        /**
         * The network function definition group description.
         */
        description?: pulumi.Input<string>;
    }

    /**
     * The network function definition resource element template details.
     */
    export interface NetworkFunctionDefinitionResourceElementTemplateDetailsArgs {
        /**
         * The resource element template type.
         */
        configuration?: pulumi.Input<ArmResourceDefinitionResourceElementTemplateArgs>;
        /**
         * The depends on profile.
         */
        dependsOnProfile?: pulumi.Input<DependsOnProfileArgs>;
        /**
         * Name of the resource element template.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource element template type.
         * Expected value is 'NetworkFunctionDefinition'.
         */
        resourceElementType: pulumi.Input<"NetworkFunctionDefinition">;
    }

    /**
     * NetworkFunction with secrets.
     */
    export interface NetworkFunctionValueWithSecretsArgs {
        /**
         * Indicates if software updates are allowed during deployment.
         */
        allowSoftwareUpdate?: pulumi.Input<boolean>;
        /**
         * The secret type which indicates if secret or not.
         * Expected value is 'Secret'.
         */
        configurationType: pulumi.Input<"Secret">;
        /**
         * The network function definition version resource reference.
         */
        networkFunctionDefinitionVersionResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs>;
        /**
         * The nfviId for the network function.
         */
        nfviId?: pulumi.Input<string>;
        /**
         * The nfvi type for the network function.
         */
        nfviType?: pulumi.Input<string | enums.NFVIType>;
        /**
         * The role configuration override values from the user.
         */
        roleOverrideValues?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The JSON-serialized secret deployment values from the user. This contains secrets like passwords,keys etc
         */
        secretDeploymentValues?: pulumi.Input<string>;
    }

    /**
     * NetworkFunction with no secrets.
     */
    export interface NetworkFunctionValueWithoutSecretsArgs {
        /**
         * Indicates if software updates are allowed during deployment.
         */
        allowSoftwareUpdate?: pulumi.Input<boolean>;
        /**
         * The secret type which indicates if secret or not.
         * Expected value is 'Open'.
         */
        configurationType: pulumi.Input<"Open">;
        /**
         * The JSON-serialized deployment values from the user.
         */
        deploymentValues?: pulumi.Input<string>;
        /**
         * The network function definition version resource reference.
         */
        networkFunctionDefinitionVersionResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs>;
        /**
         * The nfviId for the network function.
         */
        nfviId?: pulumi.Input<string>;
        /**
         * The nfvi type for the network function.
         */
        nfviType?: pulumi.Input<string | enums.NFVIType>;
        /**
         * The role configuration override values from the user.
         */
        roleOverrideValues?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * network service design group properties.
     */
    export interface NetworkServiceDesignGroupPropertiesFormatArgs {
        /**
         * The network service design group description.
         */
        description?: pulumi.Input<string>;
    }

    /**
     * network service design version properties.
     */
    export interface NetworkServiceDesignVersionPropertiesFormatArgs {
        /**
         * The configuration schemas to used to define the values.
         */
        configurationGroupSchemaReferences?: pulumi.Input<{[key: string]: pulumi.Input<ReferencedResourceArgs>}>;
        /**
         * The network service design version description.
         */
        description?: pulumi.Input<string>;
        /**
         * The nfvis from the site.
         */
        nfvisFromSite?: pulumi.Input<{[key: string]: pulumi.Input<NfviDetailsArgs>}>;
        /**
         * List of resource element template
         */
        resourceElementTemplates?: pulumi.Input<pulumi.Input<ArmResourceDefinitionResourceElementTemplateDetailsArgs | NetworkFunctionDefinitionResourceElementTemplateDetailsArgs>[]>;
    }

    /**
     * The nfvi details.
     */
    export interface NfviDetailsArgs {
        /**
         * The nfvi name.
         */
        name?: pulumi.Input<string>;
        /**
         * The nfvi type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Non secret deployment resource id reference.
     */
    export interface OpenDeploymentResourceReferenceArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The resource reference arm id type.
         * Expected value is 'Open'.
         */
        idType: pulumi.Input<"Open">;
    }

    /**
     * publisher properties.
     */
    export interface PublisherPropertiesFormatArgs {
        /**
         * The publisher scope.
         */
        scope?: pulumi.Input<string | enums.PublisherScope>;
    }

    /**
     * Reference to another resource.
     */
    export interface ReferencedResourceArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Secret deployment resource id reference.
     */
    export interface SecretDeploymentResourceReferenceArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
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
        desiredStateConfigurationGroupValueReferences?: pulumi.Input<{[key: string]: pulumi.Input<ReferencedResourceArgs>}>;
        /**
         * Managed resource group configuration.
         */
        managedResourceGroupConfiguration?: pulumi.Input<ManagedResourceGroupConfigurationArgs>;
        /**
         * The network service design version resource reference.
         */
        networkServiceDesignVersionResourceReference?: pulumi.Input<OpenDeploymentResourceReferenceArgs | SecretDeploymentResourceReferenceArgs>;
        /**
         * The site details
         */
        siteReference?: pulumi.Input<ReferencedResourceArgs>;
    }

    /**
     * Site properties.
     */
    export interface SitePropertiesFormatArgs {
        /**
         * List of NFVIs
         */
        nfvis?: pulumi.Input<pulumi.Input<AzureArcK8sClusterNFVIDetailsArgs | AzureCoreNFVIDetailsArgs | AzureOperatorNexusClusterNFVIDetailsArgs>[]>;
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
     * Vhd artifact profile.
     */
    export interface VhdImageArtifactProfileArgs {
        /**
         * Vhd name.
         */
        vhdName?: pulumi.Input<string>;
        /**
         * Vhd version.
         */
        vhdVersion?: pulumi.Input<string>;
    }

    /**
     * Vhd mapping rule profile
     */
    export interface VhdImageMappingRuleProfileArgs {
        /**
         * List of values.
         */
        userConfiguration?: pulumi.Input<string>;
    }

    /**
     * Virtual network function network function definition version properties.
     */
    export interface VirtualNetworkFunctionNetworkFunctionDefinitionVersionArgs {
        /**
         * The deployment parameters of the network function definition version.
         */
        deployParameters?: pulumi.Input<string>;
        /**
         * The network function definition version description.
         */
        description?: pulumi.Input<string>;
        /**
         * Virtual network function template.
         */
        networkFunctionTemplate?: pulumi.Input<AzureCoreNetworkFunctionTemplateArgs | AzureOperatorNexusNetworkFunctionTemplateArgs>;
        /**
         * The network function type.
         * Expected value is 'VirtualNetworkFunction'.
         */
        networkFunctionType: pulumi.Input<"VirtualNetworkFunction">;
    }
