import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Configurable properties that the user can set locally via the azcmagent config command, or remotely via ARM.
     */
    export interface AgentConfigurationResponse {
        /**
         * Name of configuration mode to use. Modes are pre-defined configurations of security controls, extension allowlists and guest configuration, maintained by Microsoft.
         */
        configMode: string;
        /**
         * Array of extensions that are allowed to be installed or updated.
         */
        extensionsAllowList: ConfigurationExtensionResponse[];
        /**
         * Array of extensions that are blocked (cannot be installed or updated)
         */
        extensionsBlockList: ConfigurationExtensionResponse[];
        /**
         * Specifies whether the extension service is enabled or disabled.
         */
        extensionsEnabled: string;
        /**
         * Specified whether the guest configuration service is enabled or disabled.
         */
        guestConfigurationEnabled: string;
        /**
         * Specifies the list of ports that the agent will be able to listen on.
         */
        incomingConnectionsPorts: string[];
        /**
         * List of service names which should not use the specified proxy server.
         */
        proxyBypass: string[];
        /**
         * Specifies the URL of the proxy to be used.
         */
        proxyUrl: string;
    }

    /**
     * The metadata of the cloud environment (Azure/GCP/AWS/OCI...).
     */
    export interface CloudMetadataResponse {
        /**
         * Specifies the cloud provider (Azure/AWS/GCP...).
         */
        provider: string;
    }

    /**
     * Describes properties that can identify extensions.
     */
    export interface ConfigurationExtensionResponse {
        /**
         * Publisher of the extension.
         */
        publisher: string;
        /**
         * Type of the extension.
         */
        type: string;
    }

    /**
     * The resource management error additional info.
     */
    export interface ErrorAdditionalInfoResponse {
        /**
         * The additional info.
         */
        info: any;
        /**
         * The additional info type.
         */
        type: string;
    }

    /**
     * The error detail.
     */
    export interface ErrorDetailResponse {
        /**
         * The error additional info.
         */
        additionalInfo: ErrorAdditionalInfoResponse[];
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details: ErrorDetailResponse[];
        /**
         * The error message.
         */
        message: string;
        /**
         * The error target.
         */
        target: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
    }

    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    export interface LocationDataResponse {
        /**
         * The city or locality where the resource is located.
         */
        city?: string;
        /**
         * The country or region where the resource is located
         */
        countryOrRegion?: string;
        /**
         * The district, state, or province where the resource is located.
         */
        district?: string;
        /**
         * A canonical name for the geographic or physical location.
         */
        name: string;
    }

    /**
     * Describes the Machine Extension Instance View.
     */
    export interface MachineExtensionInstanceViewResponse {
        /**
         * The machine extension name.
         */
        name?: string;
        /**
         * Instance view status.
         */
        status?: MachineExtensionInstanceViewResponseStatus;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type?: string;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion?: string;
    }

    /**
     * Instance view status.
     */
    export interface MachineExtensionInstanceViewResponseStatus {
        /**
         * The status code.
         */
        code?: string;
        /**
         * The short localizable label for the status.
         */
        displayStatus?: string;
        /**
         * The level code.
         */
        level?: string;
        /**
         * The detailed status message, including for alerts and error messages.
         */
        message?: string;
        /**
         * The time of the status.
         */
        time?: string;
    }

    /**
     * Describes the properties of a Machine Extension.
     */
    export interface MachineExtensionPropertiesResponse {
        /**
         * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
         */
        autoUpgradeMinorVersion?: boolean;
        /**
         * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
         */
        enableAutomaticUpgrade?: boolean;
        /**
         * How the extension handler should be forced to update even if the extension configuration has not changed.
         */
        forceUpdateTag?: string;
        /**
         * The machine extension instance view.
         */
        instanceView?: MachineExtensionInstanceViewResponse;
        /**
         * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
         */
        protectedSettings?: any;
        /**
         * The provisioning state, which only appears in the response.
         */
        provisioningState: string;
        /**
         * The name of the extension handler publisher.
         */
        publisher?: string;
        /**
         * Json formatted public settings for the extension.
         */
        settings?: any;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type?: string;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion?: string;
    }

    /**
     * Describes a Machine Extension.
     */
    export interface MachineExtensionResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The geo-location where the resource lives
         */
        location: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Describes Machine Extension Properties.
         */
        properties?: MachineExtensionPropertiesResponse;
        /**
         * The system meta data relating to this resource.
         */
        systemData: SystemDataResponse;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Describes the properties of a hybrid machine.
     */
    export interface MachinePropertiesResponse {
        /**
         * Specifies the AD fully qualified display name.
         */
        adFqdn: string;
        /**
         * Configurable properties that the user can set locally via the azcmagent config command, or remotely via ARM.
         */
        agentConfiguration: AgentConfigurationResponse;
        /**
         * The hybrid machine agent full version.
         */
        agentVersion: string;
        /**
         * Public Key that the client provides to be used during initial resource onboarding
         */
        clientPublicKey?: string;
        /**
         * The metadata of the cloud environment (Azure/GCP/AWS/OCI...).
         */
        cloudMetadata?: CloudMetadataResponse;
        /**
         * Detected properties from the machine.
         */
        detectedProperties: {[key: string]: string};
        /**
         * Specifies the hybrid machine display name.
         */
        displayName: string;
        /**
         * Specifies the DNS fully qualified display name.
         */
        dnsFqdn: string;
        /**
         * Specifies the Windows domain name.
         */
        domainName: string;
        /**
         * Details about the error state.
         */
        errorDetails: ErrorDetailResponse[];
        /**
         * The time of the last status change.
         */
        lastStatusChange: string;
        /**
         * Metadata pertaining to the geographic location of the resource.
         */
        locationData?: LocationDataResponse;
        /**
         * Specifies the hybrid machine FQDN.
         */
        machineFqdn: string;
        /**
         * Specifies whether any MS SQL instance is discovered on the machine.
         */
        mssqlDiscovered?: string;
        /**
         * The Operating System running on the hybrid machine.
         */
        osName: string;
        /**
         * Specifies the operating system settings for the hybrid machine.
         */
        osProfile?: OSProfileResponse;
        /**
         * Specifies the Operating System product SKU.
         */
        osSku: string;
        /**
         * The type of Operating System (windows/linux).
         */
        osType?: string;
        /**
         * The version of Operating System running on the hybrid machine.
         */
        osVersion: string;
        /**
         * The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any.
         */
        parentClusterResourceId?: string;
        /**
         * The resource id of the private link scope this machine is assigned to, if any.
         */
        privateLinkScopeResourceId?: string;
        /**
         * The provisioning state, which only appears in the response.
         */
        provisioningState: string;
        /**
         * Statuses of dependent services that are reported back to ARM.
         */
        serviceStatuses?: ServiceStatusesResponse;
        /**
         * The status of the hybrid machine agent.
         */
        status: string;
        /**
         * Specifies the hybrid machine unique ID.
         */
        vmId?: string;
        /**
         * Specifies the Arc Machine's unique SMBIOS ID
         */
        vmUuid: string;
    }

    /**
     * Specifies the operating system settings for the hybrid machine.
     */
    export interface OSProfileResponse {
        /**
         * Specifies the host OS name of the hybrid machine.
         */
        computerName: string;
        /**
         * Specifies the linux configuration for update management.
         */
        linuxConfiguration?: OSProfileResponseLinuxConfiguration;
        /**
         * Specifies the windows configuration for update management.
         */
        windowsConfiguration?: OSProfileResponseWindowsConfiguration;
    }

    /**
     * Specifies the linux configuration for update management.
     */
    export interface OSProfileResponseLinuxConfiguration {
        /**
         * Specifies the assessment mode.
         */
        assessmentMode?: string;
        /**
         * Specifies the patch mode.
         */
        patchMode?: string;
    }

    /**
     * Specifies the windows configuration for update management.
     */
    export interface OSProfileResponseWindowsConfiguration {
        /**
         * Specifies the assessment mode.
         */
        assessmentMode?: string;
        /**
         * Specifies the patch mode.
         */
        patchMode?: string;
    }

    /**
     * Describes the status and behavior of a service.
     */
    export interface ServiceStatusResponse {
        /**
         * The behavior of the service when the Arc-enabled machine starts up.
         */
        startupType?: string;
        /**
         * The current status of the service.
         */
        status?: string;
    }

    /**
     * Reports the state and behavior of dependent services.
     */
    export interface ServiceStatusesResponse {
        /**
         * The state of the extension service on the Arc-enabled machine.
         */
        extensionService?: ServiceStatusResponse;
        /**
         * The state of the guest configuration service on the Arc-enabled machine.
         */
        guestConfigurationService?: ServiceStatusResponse;
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
