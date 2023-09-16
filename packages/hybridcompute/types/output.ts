import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace hybridcompute {
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
     * The info w.r.t Agent Upgrade.
     */
    export interface AgentUpgradeResponse {
        /**
         * The correlation ID passed in from RSM per upgrade.
         */
        correlationId?: string;
        /**
         * Specifies the version info w.r.t AgentUpgrade for the machine.
         */
        desiredVersion?: string;
        /**
         * Specifies if RSM should try to upgrade this machine
         */
        enableAutomaticUpgrade?: boolean;
        /**
         * Failure message of last upgrade attempt if any.
         */
        lastAttemptMessage: string;
        /**
         * Specifies the status of Agent Upgrade.
         */
        lastAttemptStatus: string;
        /**
         * Timestamp of last upgrade attempt
         */
        lastAttemptTimestamp: string;
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
     * ESU key
     */
    export interface EsuKeyResponse {
        /**
         * The current status of the license profile key.
         */
        licenseStatus?: string;
        /**
         * SKU number.
         */
        sku?: string;
    }

    /**
     * Properties that define a Azure Arc PrivateLinkScope resource.
     */
    export interface HybridComputePrivateLinkScopePropertiesResponse {
        /**
         * The collection of associated Private Endpoint Connections.
         */
        privateEndpointConnections: PrivateEndpointConnectionDataModelResponse[];
        /**
         * The Guid id of the private link scope.
         */
        privateLinkScopeId: string;
        /**
         * Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
         */
        provisioningState: string;
        /**
         * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
         */
        publicNetworkAccess?: string;
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
     * Describes the properties of a License.
     */
    export interface LicenseDetailsResponse {
        /**
         * Describes the number of assigned licenses.
         */
        assignedLicenses: number;
        /**
         * Describes the edition of the license. The values are either Standard or Datacenter.
         */
        edition?: string;
        /**
         * Describes the immutable id.
         */
        immutableId: string;
        /**
         * Describes the number of processors.
         */
        processors?: number;
        /**
         * Describes the state of the license.
         */
        state?: string;
        /**
         * Describes the license target server.
         */
        target?: string;
        /**
         * Describes the license core type (pCore or vCore).
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
     * Describes a Machine Extension.
     */
    export interface MachineExtensionResponse {
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
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The machine extension instance view.
         */
        instanceView?: MachineExtensionInstanceViewResponse;
        /**
         * The geo-location where the resource lives
         */
        location: string;
        /**
         * The name of the resource
         */
        name: string;
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
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion?: string;
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
     * The Data Model for a Private Endpoint Connection associated with a Private Link Scope
     */
    export interface PrivateEndpointConnectionDataModelResponse {
        /**
         * The ARM Resource Id of the Private Endpoint.
         */
        id: string;
        /**
         * The Name of the Private Endpoint.
         */
        name: string;
        /**
         * The Private Endpoint Connection properties.
         */
        properties?: PrivateEndpointConnectionPropertiesResponse;
        /**
         * Azure resource type
         */
        type: string;
    }

    /**
     * Properties of a private endpoint connection.
     */
    export interface PrivateEndpointConnectionPropertiesResponse {
        /**
         * List of group IDs.
         */
        groupIds: string[];
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: PrivateEndpointPropertyResponse;
        /**
         * Connection state of the private endpoint connection.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStatePropertyResponse;
        /**
         * State of the private endpoint connection.
         */
        provisioningState: string;
    }

    /**
     * Private endpoint which the connection belongs to.
     */
    export interface PrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    /**
     * State of the private endpoint connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyResponse {
        /**
         * The actions required for private link service connection.
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description: string;
        /**
         * The private link service connection status.
         */
        status: string;
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

    export namespace v20200802 {
        export interface ErrorDetailResponse {
            /**
             * The error's code.
             */
            code: string;
            /**
             * Additional error details.
             */
            details?: v20200802.ErrorDetailResponse[];
            /**
             * A human readable error message.
             */
            message: string;
            /**
             * Indicates which property in the request is responsible for the error.
             */
            target?: string;
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
            name: string;
            /**
             * Instance view status.
             */
            status?: v20200802.MachineExtensionInstanceViewResponseStatus;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type: string;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion: string;
        }

        /**
         * Instance view status.
         */
        export interface MachineExtensionInstanceViewResponseStatus {
            /**
             * The status code.
             */
            code: string;
            /**
             * The short localizable label for the status.
             */
            displayStatus: string;
            /**
             * The level code.
             */
            level: string;
            /**
             * The detailed status message, including for alerts and error messages.
             */
            message: string;
            /**
             * The time of the status.
             */
            time: string;
        }

        /**
         * Specifies the operating system settings for the hybrid machine.
         */
        export interface MachinePropertiesResponseOsProfile {
            /**
             * Specifies the host OS name of the hybrid machine.
             */
            computerName: string;
        }

        export interface MachineResponseIdentity {
            /**
             * The identity's principal id.
             */
            principalId: string;
            /**
             * The identity's tenant id.
             */
            tenantId: string;
            /**
             * The identity type.
             */
            type?: string;
        }

    }

    export namespace v20200815preview {
        export interface ErrorDetailResponse {
            /**
             * The error's code.
             */
            code: string;
            /**
             * Additional error details.
             */
            details?: v20200815preview.ErrorDetailResponse[];
            /**
             * A human readable error message.
             */
            message: string;
            /**
             * Indicates which property in the request is responsible for the error.
             */
            target?: string;
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
            status?: v20200815preview.MachineExtensionInstanceViewResponseStatus;
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
         * The machine extension instance view.
         */
        export interface MachineExtensionPropertiesResponseInstanceView {
            /**
             * The machine extension name.
             */
            name?: string;
            /**
             * Instance view status.
             */
            status?: v20200815preview.MachineExtensionInstanceViewResponseStatus;
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
         * Specifies the operating system settings for the hybrid machine.
         */
        export interface MachinePropertiesResponseOsProfile {
            /**
             * Specifies the host OS name of the hybrid machine.
             */
            computerName: string;
        }

        export interface MachineResponseIdentity {
            /**
             * The identity's principal id.
             */
            principalId: string;
            /**
             * The identity's tenant id.
             */
            tenantId: string;
            /**
             * The identity type.
             */
            type?: string;
        }

        /**
         * A private endpoint connection
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: v20200815preview.PrivateEndpointPropertyResponse;
            /**
             * Connection state of the private endpoint connection.
             */
            privateLinkServiceConnectionState?: v20200815preview.PrivateLinkServiceConnectionStatePropertyResponse;
            /**
             * State of the private endpoint connection.
             */
            provisioningState: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
        }

        /**
         * Private endpoint which the connection belongs to.
         */
        export interface PrivateEndpointPropertyResponse {
            /**
             * Resource id of the private endpoint.
             */
            id?: string;
        }

        /**
         * State of the private endpoint connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyResponse {
            /**
             * The actions required for private link service connection.
             */
            actionsRequired: string;
            /**
             * The private link service connection description.
             */
            description: string;
            /**
             * The private link service connection status.
             */
            status: string;
        }

    }

    export namespace v20220510preview {
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
            extensionsAllowList: v20220510preview.ConfigurationExtensionResponse[];
            /**
             * Array of extensions that are blocked (cannot be installed or updated)
             */
            extensionsBlockList: v20220510preview.ConfigurationExtensionResponse[];
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
            additionalInfo: v20220510preview.ErrorAdditionalInfoResponse[];
            /**
             * The error code.
             */
            code: string;
            /**
             * The error details.
             */
            details: v20220510preview.ErrorDetailResponse[];
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
            status?: v20220510preview.MachineExtensionInstanceViewResponseStatus;
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
            instanceView?: v20220510preview.MachineExtensionInstanceViewResponse;
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
            properties?: v20220510preview.MachineExtensionPropertiesResponse;
            /**
             * The system meta data relating to this resource.
             */
            systemData: v20220510preview.SystemDataResponse;
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
            agentConfiguration: v20220510preview.AgentConfigurationResponse;
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
            cloudMetadata?: v20220510preview.CloudMetadataResponse;
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
            errorDetails: v20220510preview.ErrorDetailResponse[];
            /**
             * The time of the last status change.
             */
            lastStatusChange: string;
            /**
             * Metadata pertaining to the geographic location of the resource.
             */
            locationData?: v20220510preview.LocationDataResponse;
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
            osProfile?: v20220510preview.OSProfileResponse;
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
            serviceStatuses?: v20220510preview.ServiceStatusesResponse;
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
            linuxConfiguration?: v20220510preview.OSProfileResponseLinuxConfiguration;
            /**
             * Specifies the windows configuration for update management.
             */
            windowsConfiguration?: v20220510preview.OSProfileResponseWindowsConfiguration;
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
            extensionService?: v20220510preview.ServiceStatusResponse;
            /**
             * The state of the guest configuration service on the Arc-enabled machine.
             */
            guestConfigurationService?: v20220510preview.ServiceStatusResponse;
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

    }

    export namespace v20221227 {
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
            extensionsAllowList: v20221227.ConfigurationExtensionResponse[];
            /**
             * Array of extensions that are blocked (cannot be installed or updated)
             */
            extensionsBlockList: v20221227.ConfigurationExtensionResponse[];
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
         * The info w.r.t Agent Upgrade.
         */
        export interface AgentUpgradeResponse {
            /**
             * The correlation ID passed in from RSM per upgrade.
             */
            correlationId?: string;
            /**
             * Specifies the version info w.r.t AgentUpgrade for the machine.
             */
            desiredVersion?: string;
            /**
             * Specifies if RSM should try to upgrade this machine
             */
            enableAutomaticUpgrade?: boolean;
            /**
             * Failure message of last upgrade attempt if any.
             */
            lastAttemptMessage: string;
            /**
             * Specifies the status of Agent Upgrade.
             */
            lastAttemptStatus: string;
            /**
             * Timestamp of last upgrade attempt
             */
            lastAttemptTimestamp: string;
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
            additionalInfo: v20221227.ErrorAdditionalInfoResponse[];
            /**
             * The error code.
             */
            code: string;
            /**
             * The error details.
             */
            details: v20221227.ErrorDetailResponse[];
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
         * Properties that define a Azure Arc PrivateLinkScope resource.
         */
        export interface HybridComputePrivateLinkScopePropertiesResponse {
            /**
             * The collection of associated Private Endpoint Connections.
             */
            privateEndpointConnections: v20221227.PrivateEndpointConnectionDataModelResponse[];
            /**
             * The Guid id of the private link scope.
             */
            privateLinkScopeId: string;
            /**
             * Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
             */
            provisioningState: string;
            /**
             * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
             */
            publicNetworkAccess?: string;
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
            status?: v20221227.MachineExtensionInstanceViewResponseStatus;
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
         * Describes a Machine Extension.
         */
        export interface MachineExtensionResponse {
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
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The machine extension instance view.
             */
            instanceView?: v20221227.MachineExtensionInstanceViewResponse;
            /**
             * The geo-location where the resource lives
             */
            location: string;
            /**
             * The name of the resource
             */
            name: string;
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
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20221227.SystemDataResponse;
            /**
             * Resource tags.
             */
            tags?: {[key: string]: string};
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion?: string;
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
            linuxConfiguration?: v20221227.OSProfileResponseLinuxConfiguration;
            /**
             * Specifies the windows configuration for update management.
             */
            windowsConfiguration?: v20221227.OSProfileResponseWindowsConfiguration;
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
         * The Data Model for a Private Endpoint Connection associated with a Private Link Scope
         */
        export interface PrivateEndpointConnectionDataModelResponse {
            /**
             * The ARM Resource Id of the Private Endpoint.
             */
            id: string;
            /**
             * The Name of the Private Endpoint.
             */
            name: string;
            /**
             * The Private Endpoint Connection properties.
             */
            properties?: v20221227.PrivateEndpointConnectionPropertiesResponse;
            /**
             * Azure resource type
             */
            type: string;
        }

        /**
         * Properties of a private endpoint connection.
         */
        export interface PrivateEndpointConnectionPropertiesResponse {
            /**
             * List of group IDs.
             */
            groupIds: string[];
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: v20221227.PrivateEndpointPropertyResponse;
            /**
             * Connection state of the private endpoint connection.
             */
            privateLinkServiceConnectionState?: v20221227.PrivateLinkServiceConnectionStatePropertyResponse;
            /**
             * State of the private endpoint connection.
             */
            provisioningState: string;
        }

        /**
         * Private endpoint which the connection belongs to.
         */
        export interface PrivateEndpointPropertyResponse {
            /**
             * Resource id of the private endpoint.
             */
            id?: string;
        }

        /**
         * State of the private endpoint connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyResponse {
            /**
             * The actions required for private link service connection.
             */
            actionsRequired: string;
            /**
             * The private link service connection description.
             */
            description: string;
            /**
             * The private link service connection status.
             */
            status: string;
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
            extensionService?: v20221227.ServiceStatusResponse;
            /**
             * The state of the guest configuration service on the Arc-enabled machine.
             */
            guestConfigurationService?: v20221227.ServiceStatusResponse;
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

    }

    export namespace v20230620preview {
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
            extensionsAllowList: v20230620preview.ConfigurationExtensionResponse[];
            /**
             * Array of extensions that are blocked (cannot be installed or updated)
             */
            extensionsBlockList: v20230620preview.ConfigurationExtensionResponse[];
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
         * The info w.r.t Agent Upgrade.
         */
        export interface AgentUpgradeResponse {
            /**
             * The correlation ID passed in from RSM per upgrade.
             */
            correlationId?: string;
            /**
             * Specifies the version info w.r.t AgentUpgrade for the machine.
             */
            desiredVersion?: string;
            /**
             * Specifies if RSM should try to upgrade this machine
             */
            enableAutomaticUpgrade?: boolean;
            /**
             * Specifies the version of the last attempt
             */
            lastAttemptDesiredVersion: string;
            /**
             * Failure message of last upgrade attempt if any.
             */
            lastAttemptMessage: string;
            /**
             * Specifies the status of Agent Upgrade.
             */
            lastAttemptStatus: string;
            /**
             * Timestamp of last upgrade attempt
             */
            lastAttemptTimestamp: string;
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
            additionalInfo: v20230620preview.ErrorAdditionalInfoResponse[];
            /**
             * The error code.
             */
            code: string;
            /**
             * The error details.
             */
            details: v20230620preview.ErrorDetailResponse[];
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
         * ESU key
         */
        export interface EsuKeyResponse {
            /**
             * The current status of the license profile key.
             */
            licenseStatus?: string;
            /**
             * SKU number.
             */
            sku?: string;
        }

        /**
         * Properties that define a Azure Arc PrivateLinkScope resource.
         */
        export interface HybridComputePrivateLinkScopePropertiesResponse {
            /**
             * The collection of associated Private Endpoint Connections.
             */
            privateEndpointConnections: v20230620preview.PrivateEndpointConnectionDataModelResponse[];
            /**
             * The Guid id of the private link scope.
             */
            privateLinkScopeId: string;
            /**
             * Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
             */
            provisioningState: string;
            /**
             * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
             */
            publicNetworkAccess?: string;
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
         * Describes properties of the IP address.
         */
        export interface IpAddressResponse {
            /**
             * Represents the IP Address.
             */
            address?: string;
            /**
             * Represents the Ip Address Version.
             */
            ipAddressVersion?: string;
            /**
             * The subnet to which this IP address belongs.
             */
            subnet: v20230620preview.SubnetResponse;
        }

        /**
         * Describes the properties of a License.
         */
        export interface LicenseDetailsResponse {
            /**
             * Describes the number of assigned licenses.
             */
            assignedLicenses: number;
            /**
             * Describes the edition of the license. The values are either Standard or Datacenter.
             */
            edition?: string;
            /**
             * Describes the immutable id.
             */
            immutableId: string;
            /**
             * Describes the number of processors.
             */
            processors?: number;
            /**
             * Describes the state of the license.
             */
            state?: string;
            /**
             * Describes the license target server.
             */
            target?: string;
            /**
             * Describes the license core type (pCore or vCore).
             */
            type?: string;
        }

        /**
         * Properties for the Machine ESU profile.
         */
        export interface LicenseProfileMachineInstanceViewEsuPropertiesResponse {
            /**
             * The assigned license resource.
             */
            assignedLicense?: v20230620preview.LicenseResponse;
            /**
             * The guid id of the license.
             */
            assignedLicenseImmutableId: string;
            /**
             * Indicates the eligibility state of Esu.
             */
            esuEligibility: string;
            /**
             * Indicates whether there is an ESU Key currently active for the machine.
             */
            esuKeyState: string;
            /**
             * The list of ESU keys.
             */
            esuKeys: v20230620preview.EsuKeyResponse[];
            /**
             * Describes the license assignment state (Assigned or NotAssigned).
             */
            licenseAssignmentState?: string;
            /**
             * The type of the Esu servers.
             */
            serverType: string;
        }

        /**
         * License Profile Instance View in Machine Properties.
         */
        export interface LicenseProfileMachineInstanceViewResponse {
            /**
             * Properties for the Machine ESU profile.
             */
            esuProfile?: v20230620preview.LicenseProfileMachineInstanceViewEsuPropertiesResponse;
        }

        /**
         * Describes a license in a hybrid machine.
         */
        export interface LicenseResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * Describes the properties of a License.
             */
            licenseDetails?: v20230620preview.LicenseDetailsResponse;
            /**
             * The type of the license resource.
             */
            licenseType?: string;
            /**
             * The geo-location where the resource lives
             */
            location: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The provisioning state, which only appears in the response.
             */
            provisioningState: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20230620preview.SystemDataResponse;
            /**
             * Resource tags.
             */
            tags?: {[key: string]: string};
            /**
             * Describes the tenant id.
             */
            tenantId?: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
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
            status?: v20230620preview.MachineExtensionInstanceViewResponseStatus;
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
            instanceView?: v20230620preview.MachineExtensionInstanceViewResponse;
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
            properties?: v20230620preview.MachineExtensionPropertiesResponse;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20230620preview.SystemDataResponse;
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
         * Describes a network interface.
         */
        export interface NetworkInterfaceResponse {
            /**
             * The list of IP addresses in this interface.
             */
            ipAddresses?: v20230620preview.IpAddressResponse[];
        }

        /**
         * Describes the network information on this machine.
         */
        export interface NetworkProfileResponse {
            /**
             * The list of network interfaces.
             */
            networkInterfaces?: v20230620preview.NetworkInterfaceResponse[];
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
            linuxConfiguration?: v20230620preview.OSProfileResponseLinuxConfiguration;
            /**
             * Specifies the windows configuration for update management.
             */
            windowsConfiguration?: v20230620preview.OSProfileResponseWindowsConfiguration;
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
         * The Data Model for a Private Endpoint Connection associated with a Private Link Scope
         */
        export interface PrivateEndpointConnectionDataModelResponse {
            /**
             * The ARM Resource Id of the Private Endpoint.
             */
            id: string;
            /**
             * The Name of the Private Endpoint.
             */
            name: string;
            /**
             * The Private Endpoint Connection properties.
             */
            properties?: v20230620preview.PrivateEndpointConnectionPropertiesResponse;
            /**
             * Azure resource type
             */
            type: string;
        }

        /**
         * Properties of a private endpoint connection.
         */
        export interface PrivateEndpointConnectionPropertiesResponse {
            /**
             * List of group IDs.
             */
            groupIds: string[];
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: v20230620preview.PrivateEndpointPropertyResponse;
            /**
             * Connection state of the private endpoint connection.
             */
            privateLinkServiceConnectionState?: v20230620preview.PrivateLinkServiceConnectionStatePropertyResponse;
            /**
             * State of the private endpoint connection.
             */
            provisioningState: string;
        }

        /**
         * Private endpoint which the connection belongs to.
         */
        export interface PrivateEndpointPropertyResponse {
            /**
             * Resource id of the private endpoint.
             */
            id?: string;
        }

        /**
         * State of the private endpoint connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyResponse {
            /**
             * The actions required for private link service connection.
             */
            actionsRequired: string;
            /**
             * The private link service connection description.
             */
            description: string;
            /**
             * The private link service connection status.
             */
            status: string;
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
            extensionService?: v20230620preview.ServiceStatusResponse;
            /**
             * The state of the guest configuration service on the Arc-enabled machine.
             */
            guestConfigurationService?: v20230620preview.ServiceStatusResponse;
        }

        /**
         * Describes the subnet.
         */
        export interface SubnetResponse {
            /**
             * Represents address prefix.
             */
            addressPrefix?: string;
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

    }
}
