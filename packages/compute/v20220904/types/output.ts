import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes a cloud service extension profile.
     */
    export interface CloudServiceExtensionProfileResponse {
        /**
         * List of extensions for the cloud service.
         */
        extensions?: ExtensionResponse[];
    }

    /**
     * Extension Properties.
     */
    export interface CloudServiceExtensionPropertiesResponse {
        /**
         * Explicitly specify whether platform can automatically upgrade typeHandlerVersion to higher minor versions when they become available.
         */
        autoUpgradeMinorVersion?: boolean;
        /**
         * Tag to force apply the provided public and protected settings.
         * Changing the tag value allows for re-running the extension without changing any of the public or protected settings.
         * If forceUpdateTag is not changed, updates to public or protected settings would still be applied by the handler.
         * If neither forceUpdateTag nor any of public or protected settings change, extension would flow to the role instance with the same sequence-number, and
         * it is up to handler implementation whether to re-run it or not
         */
        forceUpdateTag?: string;
        /**
         * Protected settings for the extension which are encrypted before sent to the role instance.
         */
        protectedSettings?: any;
        /**
         * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
         */
        protectedSettingsFromKeyVault?: CloudServiceVaultAndSecretReferenceResponse;
        /**
         * The provisioning state, which only appears in the response.
         */
        provisioningState: string;
        /**
         * The name of the extension handler publisher.
         */
        publisher?: string;
        /**
         * Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service.
         */
        rolesAppliedTo?: string[];
        /**
         * Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension.
         */
        settings?: any;
        /**
         * Specifies the type of the extension.
         */
        type?: string;
        /**
         * Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance.
         */
        typeHandlerVersion?: string;
    }

    /**
     * Network Profile for the cloud service.
     */
    export interface CloudServiceNetworkProfileResponse {
        /**
         * List of Load balancer configurations. Cloud service can have up to two load balancer configurations, corresponding to a Public Load Balancer and an Internal Load Balancer.
         */
        loadBalancerConfigurations?: LoadBalancerConfigurationResponse[];
        /**
         * Slot type for the cloud service.
         * Possible values are <br /><br />**Production**<br /><br />**Staging**<br /><br />
         * If not specified, the default value is Production.
         */
        slotType?: string;
        /**
         * The id reference of the cloud service containing the target IP with which the subject cloud service can perform a swap. This property cannot be updated once it is set. The swappable cloud service referred by this id must be present otherwise an error will be thrown.
         */
        swappableCloudService?: SubResourceResponse;
    }

    /**
     * Describes the OS profile for the cloud service.
     */
    export interface CloudServiceOsProfileResponse {
        /**
         * Specifies set of certificates that should be installed onto the role instances.
         */
        secrets?: CloudServiceVaultSecretGroupResponse[];
    }

    /**
     * Cloud service properties
     */
    export interface CloudServicePropertiesResponse {
        /**
         * (Optional) Indicates whether the role sku properties (roleProfile.roles.sku) specified in the model/template should override the role instance count and vm size specified in the .cscfg and .csdef respectively.
         * The default value is `false`.
         */
        allowModelOverride?: boolean;
        /**
         * Specifies the XML service configuration (.cscfg) for the cloud service.
         */
        configuration?: string;
        /**
         * Specifies a URL that refers to the location of the service configuration in the Blob service. The service package URL  can be Shared Access Signature (SAS) URI from any storage account.
         * This is a write-only property and is not returned in GET calls.
         */
        configurationUrl?: string;
        /**
         * Describes a cloud service extension profile.
         */
        extensionProfile?: CloudServiceExtensionProfileResponse;
        /**
         * Network Profile for the cloud service.
         */
        networkProfile?: CloudServiceNetworkProfileResponse;
        /**
         * Describes the OS profile for the cloud service.
         */
        osProfile?: CloudServiceOsProfileResponse;
        /**
         * Specifies a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account.
         * This is a write-only property and is not returned in GET calls.
         */
        packageUrl?: string;
        /**
         * The provisioning state, which only appears in the response.
         */
        provisioningState: string;
        /**
         * Describes the role profile for the cloud service.
         */
        roleProfile?: CloudServiceRoleProfileResponse;
        /**
         * (Optional) Indicates whether to start the cloud service immediately after it is created. The default value is `true`.
         * If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff.
         */
        startCloudService?: boolean;
        /**
         * The unique identifier for the cloud service.
         */
        uniqueId: string;
        /**
         * Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.
         * Possible Values are <br /><br />**Auto**<br /><br />**Manual** <br /><br />**Simultaneous**<br /><br />
         * If not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence.
         */
        upgradeMode?: string;
    }

    /**
     * Describes the role properties.
     */
    export interface CloudServiceRoleProfilePropertiesResponse {
        /**
         * Resource name.
         */
        name?: string;
        /**
         * Describes the cloud service role sku.
         */
        sku?: CloudServiceRoleSkuResponse;
    }

    /**
     * Describes the role profile for the cloud service.
     */
    export interface CloudServiceRoleProfileResponse {
        /**
         * List of roles for the cloud service.
         */
        roles?: CloudServiceRoleProfilePropertiesResponse[];
    }

    /**
     * Describes the cloud service role sku.
     */
    export interface CloudServiceRoleSkuResponse {
        /**
         * Specifies the number of role instances in the cloud service.
         */
        capacity?: number;
        /**
         * The sku name. NOTE: If the new SKU is not supported on the hardware the cloud service is currently on, you need to delete and recreate the cloud service or move back to the old sku.
         */
        name?: string;
        /**
         * Specifies the tier of the cloud service. Possible Values are <br /><br /> **Standard** <br /><br /> **Basic**
         */
        tier?: string;
    }

    /**
     * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
     */
    export interface CloudServiceVaultAndSecretReferenceResponse {
        /**
         * Secret URL which contains the protected settings of the extension
         */
        secretUrl?: string;
        /**
         * The ARM Resource ID of the Key Vault
         */
        sourceVault?: SubResourceResponse;
    }

    /**
     * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the role instance.
     */
    export interface CloudServiceVaultCertificateResponse {
        /**
         * This is the URL of a certificate that has been uploaded to Key Vault as a secret.
         */
        certificateUrl?: string;
    }

    /**
     * Describes a set of certificates which are all in the same Key Vault.
     */
    export interface CloudServiceVaultSecretGroupResponse {
        /**
         * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
         */
        sourceVault?: SubResourceResponse;
        /**
         * The list of key vault references in SourceVault which contain certificates.
         */
        vaultCertificates?: CloudServiceVaultCertificateResponse[];
    }

    /**
     * Describes a cloud service Extension.
     */
    export interface ExtensionResponse {
        /**
         * The name of the extension.
         */
        name?: string;
        /**
         * Extension Properties.
         */
        properties?: CloudServiceExtensionPropertiesResponse;
    }

    /**
     * Describes the properties of the load balancer configuration.
     */
    export interface LoadBalancerConfigurationPropertiesResponse {
        /**
         * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
         */
        frontendIpConfigurations: LoadBalancerFrontendIpConfigurationResponse[];
    }

    /**
     * Describes the load balancer configuration.
     */
    export interface LoadBalancerConfigurationResponse {
        /**
         * Resource Id
         */
        id?: string;
        /**
         * The name of the Load balancer
         */
        name: string;
        /**
         * Properties of the load balancer configuration.
         */
        properties: LoadBalancerConfigurationPropertiesResponse;
    }

    /**
     * Describes a cloud service IP Configuration
     */
    export interface LoadBalancerFrontendIpConfigurationPropertiesResponse {
        /**
         * The virtual network private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * The reference to the public ip address resource.
         */
        publicIPAddress?: SubResourceResponse;
        /**
         * The reference to the virtual network subnet resource.
         */
        subnet?: SubResourceResponse;
    }

    /**
     * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
     */
    export interface LoadBalancerFrontendIpConfigurationResponse {
        /**
         * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
         */
        name: string;
        /**
         * Properties of load balancer frontend ip configuration.
         */
        properties: LoadBalancerFrontendIpConfigurationPropertiesResponse;
    }

    export interface SubResourceResponse {
        /**
         * Resource Id
         */
        id?: string;
    }

    /**
     * The system meta data relating to this resource.
     */
    export interface SystemDataResponse {
        /**
         * Specifies the time in UTC at which the Cloud Service (extended support) resource was created. <br />Minimum api-version: 2022-04-04.
         */
        createdAt: string;
        /**
         * Specifies the time in UTC at which the Cloud Service (extended support) resource was last modified. <br />Minimum api-version: 2022-04-04.
         */
        lastModifiedAt: string;
    }
