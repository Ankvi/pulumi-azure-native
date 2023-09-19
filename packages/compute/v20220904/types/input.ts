import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes a cloud service extension profile.
     */
    export interface CloudServiceExtensionProfileArgs {
        /**
         * List of extensions for the cloud service.
         */
        extensions?: pulumi.Input<pulumi.Input<ExtensionArgs>[]>;
    }

    /**
     * Extension Properties.
     */
    export interface CloudServiceExtensionPropertiesArgs {
        /**
         * Explicitly specify whether platform can automatically upgrade typeHandlerVersion to higher minor versions when they become available.
         */
        autoUpgradeMinorVersion?: pulumi.Input<boolean>;
        /**
         * Tag to force apply the provided public and protected settings.
         * Changing the tag value allows for re-running the extension without changing any of the public or protected settings.
         * If forceUpdateTag is not changed, updates to public or protected settings would still be applied by the handler.
         * If neither forceUpdateTag nor any of public or protected settings change, extension would flow to the role instance with the same sequence-number, and
         * it is up to handler implementation whether to re-run it or not
         */
        forceUpdateTag?: pulumi.Input<string>;
        /**
         * Protected settings for the extension which are encrypted before sent to the role instance.
         */
        protectedSettings?: any;
        /**
         * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
         */
        protectedSettingsFromKeyVault?: pulumi.Input<CloudServiceVaultAndSecretReferenceArgs>;
        /**
         * The name of the extension handler publisher.
         */
        publisher?: pulumi.Input<string>;
        /**
         * Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service.
         */
        rolesAppliedTo?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension.
         */
        settings?: any;
        /**
         * Specifies the type of the extension.
         */
        type?: pulumi.Input<string>;
        /**
         * Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance.
         */
        typeHandlerVersion?: pulumi.Input<string>;
    }

    /**
     * Network Profile for the cloud service.
     */
    export interface CloudServiceNetworkProfileArgs {
        /**
         * List of Load balancer configurations. Cloud service can have up to two load balancer configurations, corresponding to a Public Load Balancer and an Internal Load Balancer.
         */
        loadBalancerConfigurations?: pulumi.Input<pulumi.Input<LoadBalancerConfigurationArgs>[]>;
        /**
         * Slot type for the cloud service.
         * Possible values are <br /><br />**Production**<br /><br />**Staging**<br /><br />
         * If not specified, the default value is Production.
         */
        slotType?: pulumi.Input<string | enums.CloudServiceSlotType>;
        /**
         * The id reference of the cloud service containing the target IP with which the subject cloud service can perform a swap. This property cannot be updated once it is set. The swappable cloud service referred by this id must be present otherwise an error will be thrown.
         */
        swappableCloudService?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * Describes the OS profile for the cloud service.
     */
    export interface CloudServiceOsProfileArgs {
        /**
         * Specifies set of certificates that should be installed onto the role instances.
         */
        secrets?: pulumi.Input<pulumi.Input<CloudServiceVaultSecretGroupArgs>[]>;
    }

    /**
     * Cloud service properties
     */
    export interface CloudServicePropertiesArgs {
        /**
         * (Optional) Indicates whether the role sku properties (roleProfile.roles.sku) specified in the model/template should override the role instance count and vm size specified in the .cscfg and .csdef respectively.
         * The default value is `false`.
         */
        allowModelOverride?: pulumi.Input<boolean>;
        /**
         * Specifies the XML service configuration (.cscfg) for the cloud service.
         */
        configuration?: pulumi.Input<string>;
        /**
         * Specifies a URL that refers to the location of the service configuration in the Blob service. The service package URL  can be Shared Access Signature (SAS) URI from any storage account.
         * This is a write-only property and is not returned in GET calls.
         */
        configurationUrl?: pulumi.Input<string>;
        /**
         * Describes a cloud service extension profile.
         */
        extensionProfile?: pulumi.Input<CloudServiceExtensionProfileArgs>;
        /**
         * Network Profile for the cloud service.
         */
        networkProfile?: pulumi.Input<CloudServiceNetworkProfileArgs>;
        /**
         * Describes the OS profile for the cloud service.
         */
        osProfile?: pulumi.Input<CloudServiceOsProfileArgs>;
        /**
         * Specifies a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account.
         * This is a write-only property and is not returned in GET calls.
         */
        packageUrl?: pulumi.Input<string>;
        /**
         * Describes the role profile for the cloud service.
         */
        roleProfile?: pulumi.Input<CloudServiceRoleProfileArgs>;
        /**
         * (Optional) Indicates whether to start the cloud service immediately after it is created. The default value is `true`.
         * If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff.
         */
        startCloudService?: pulumi.Input<boolean>;
        /**
         * Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.
         * Possible Values are <br /><br />**Auto**<br /><br />**Manual** <br /><br />**Simultaneous**<br /><br />
         * If not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence.
         */
        upgradeMode?: pulumi.Input<string | enums.CloudServiceUpgradeMode>;
    }

    /**
     * Describes the role profile for the cloud service.
     */
    export interface CloudServiceRoleProfileArgs {
        /**
         * List of roles for the cloud service.
         */
        roles?: pulumi.Input<pulumi.Input<CloudServiceRoleProfilePropertiesArgs>[]>;
    }

    /**
     * Describes the role properties.
     */
    export interface CloudServiceRoleProfilePropertiesArgs {
        /**
         * Resource name.
         */
        name?: pulumi.Input<string>;
        /**
         * Describes the cloud service role sku.
         */
        sku?: pulumi.Input<CloudServiceRoleSkuArgs>;
    }

    /**
     * Describes the cloud service role sku.
     */
    export interface CloudServiceRoleSkuArgs {
        /**
         * Specifies the number of role instances in the cloud service.
         */
        capacity?: pulumi.Input<number>;
        /**
         * The sku name. NOTE: If the new SKU is not supported on the hardware the cloud service is currently on, you need to delete and recreate the cloud service or move back to the old sku.
         */
        name?: pulumi.Input<string>;
        /**
         * Specifies the tier of the cloud service. Possible Values are <br /><br /> **Standard** <br /><br /> **Basic**
         */
        tier?: pulumi.Input<string>;
    }

    /**
     * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
     */
    export interface CloudServiceVaultAndSecretReferenceArgs {
        /**
         * Secret URL which contains the protected settings of the extension
         */
        secretUrl?: pulumi.Input<string>;
        /**
         * The ARM Resource ID of the Key Vault
         */
        sourceVault?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the role instance.
     */
    export interface CloudServiceVaultCertificateArgs {
        /**
         * This is the URL of a certificate that has been uploaded to Key Vault as a secret.
         */
        certificateUrl?: pulumi.Input<string>;
    }

    /**
     * Describes a set of certificates which are all in the same Key Vault.
     */
    export interface CloudServiceVaultSecretGroupArgs {
        /**
         * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
         */
        sourceVault?: pulumi.Input<SubResourceArgs>;
        /**
         * The list of key vault references in SourceVault which contain certificates.
         */
        vaultCertificates?: pulumi.Input<pulumi.Input<CloudServiceVaultCertificateArgs>[]>;
    }

    /**
     * Describes a cloud service Extension.
     */
    export interface ExtensionArgs {
        /**
         * The name of the extension.
         */
        name?: pulumi.Input<string>;
        /**
         * Extension Properties.
         */
        properties?: pulumi.Input<CloudServiceExtensionPropertiesArgs>;
    }

    /**
     * Describes the load balancer configuration.
     */
    export interface LoadBalancerConfigurationArgs {
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the Load balancer
         */
        name: pulumi.Input<string>;
        /**
         * Properties of the load balancer configuration.
         */
        properties: pulumi.Input<LoadBalancerConfigurationPropertiesArgs>;
    }

    /**
     * Describes the properties of the load balancer configuration.
     */
    export interface LoadBalancerConfigurationPropertiesArgs {
        /**
         * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
         */
        frontendIpConfigurations: pulumi.Input<pulumi.Input<LoadBalancerFrontendIpConfigurationArgs>[]>;
    }

    /**
     * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
     */
    export interface LoadBalancerFrontendIpConfigurationArgs {
        /**
         * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
         */
        name: pulumi.Input<string>;
        /**
         * Properties of load balancer frontend ip configuration.
         */
        properties: pulumi.Input<LoadBalancerFrontendIpConfigurationPropertiesArgs>;
    }

    /**
     * Describes a cloud service IP Configuration
     */
    export interface LoadBalancerFrontendIpConfigurationPropertiesArgs {
        /**
         * The virtual network private IP address of the IP configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * The reference to the public ip address resource.
         */
        publicIPAddress?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference to the virtual network subnet resource.
         */
        subnet?: pulumi.Input<SubResourceArgs>;
    }

    export interface SubResourceArgs {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: pulumi.Input<string>;
    }
