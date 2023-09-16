import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace hybridcompute {
    /**
     * The info w.r.t Agent Upgrade.
     */
    export interface AgentUpgradeArgs {
        /**
         * The correlation ID passed in from RSM per upgrade.
         */
        correlationId?: pulumi.Input<string>;
        /**
         * Specifies the version info w.r.t AgentUpgrade for the machine.
         */
        desiredVersion?: pulumi.Input<string>;
        /**
         * Specifies if RSM should try to upgrade this machine
         */
        enableAutomaticUpgrade?: pulumi.Input<boolean>;
    }

    /**
     * Properties that define a Azure Arc PrivateLinkScope resource.
     */
    export interface HybridComputePrivateLinkScopePropertiesArgs {
        /**
         * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
         */
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessType>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * Describes the properties of a License.
     */
    export interface LicenseDetailsArgs {
        /**
         * Describes the edition of the license. The values are either Standard or Datacenter.
         */
        edition?: pulumi.Input<string | enums.LicenseEdition>;
        /**
         * Describes the number of processors.
         */
        processors?: pulumi.Input<number>;
        /**
         * Describes the state of the license.
         */
        state?: pulumi.Input<string | enums.LicenseState>;
        /**
         * Describes the license target server.
         */
        target?: pulumi.Input<string | enums.LicenseTarget>;
        /**
         * Describes the license core type (pCore or vCore).
         */
        type?: pulumi.Input<string | enums.LicenseCoreType>;
    }

    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    export interface LocationDataArgs {
        /**
         * The city or locality where the resource is located.
         */
        city?: pulumi.Input<string>;
        /**
         * The country or region where the resource is located
         */
        countryOrRegion?: pulumi.Input<string>;
        /**
         * The district, state, or province where the resource is located.
         */
        district?: pulumi.Input<string>;
        /**
         * A canonical name for the geographic or physical location.
         */
        name: pulumi.Input<string>;
    }

    /**
     * Describes the Machine Extension Instance View.
     */
    export interface MachineExtensionInstanceViewArgs {
        /**
         * The machine extension name.
         */
        name?: pulumi.Input<string>;
        /**
         * Instance view status.
         */
        status?: pulumi.Input<MachineExtensionInstanceViewStatusArgs>;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type?: pulumi.Input<string>;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion?: pulumi.Input<string>;
    }

    /**
     * Instance view status.
     */
    export interface MachineExtensionInstanceViewStatusArgs {
        /**
         * The status code.
         */
        code?: pulumi.Input<string>;
        /**
         * The short localizable label for the status.
         */
        displayStatus?: pulumi.Input<string>;
        /**
         * The level code.
         */
        level?: pulumi.Input<string | enums.StatusLevelTypes>;
        /**
         * The detailed status message, including for alerts and error messages.
         */
        message?: pulumi.Input<string>;
        /**
         * The time of the status.
         */
        time?: pulumi.Input<string>;
    }

    /**
     * Specifies the operating system settings for the hybrid machine.
     */
    export interface OSProfileArgs {
        /**
         * Specifies the linux configuration for update management.
         */
        linuxConfiguration?: pulumi.Input<OSProfileLinuxConfigurationArgs>;
        /**
         * Specifies the windows configuration for update management.
         */
        windowsConfiguration?: pulumi.Input<OSProfileWindowsConfigurationArgs>;
    }

    /**
     * Specifies the linux configuration for update management.
     */
    export interface OSProfileLinuxConfigurationArgs {
        /**
         * Specifies the assessment mode.
         */
        assessmentMode?: pulumi.Input<string | enums.AssessmentModeTypes>;
        /**
         * Specifies the patch mode.
         */
        patchMode?: pulumi.Input<string | enums.PatchModeTypes>;
    }

    /**
     * Specifies the windows configuration for update management.
     */
    export interface OSProfileWindowsConfigurationArgs {
        /**
         * Specifies the assessment mode.
         */
        assessmentMode?: pulumi.Input<string | enums.AssessmentModeTypes>;
        /**
         * Specifies the patch mode.
         */
        patchMode?: pulumi.Input<string | enums.PatchModeTypes>;
    }

    /**
     * Properties of a private endpoint connection.
     */
    export interface PrivateEndpointConnectionPropertiesArgs {
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: pulumi.Input<PrivateEndpointPropertyArgs>;
        /**
         * Connection state of the private endpoint connection.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStatePropertyArgs>;
    }

    /**
     * Private endpoint which the connection belongs to.
     */
    export interface PrivateEndpointPropertyArgs {
        /**
         * Resource id of the private endpoint.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * State of the private endpoint connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyArgs {
        /**
         * The private link service connection description.
         */
        description: pulumi.Input<string>;
        /**
         * The private link service connection status.
         */
        status: pulumi.Input<string>;
    }

    /**
     * Describes the status and behavior of a service.
     */
    export interface ServiceStatusArgs {
        /**
         * The behavior of the service when the Arc-enabled machine starts up.
         */
        startupType?: pulumi.Input<string>;
        /**
         * The current status of the service.
         */
        status?: pulumi.Input<string>;
    }

    /**
     * Reports the state and behavior of dependent services.
     */
    export interface ServiceStatusesArgs {
        /**
         * The state of the extension service on the Arc-enabled machine.
         */
        extensionService?: pulumi.Input<ServiceStatusArgs>;
        /**
         * The state of the guest configuration service on the Arc-enabled machine.
         */
        guestConfigurationService?: pulumi.Input<ServiceStatusArgs>;
    }

    export namespace v20200802 {
        /**
         * Metadata pertaining to the geographic location of the resource.
         */
        export interface LocationDataArgs {
            /**
             * The city or locality where the resource is located.
             */
            city?: pulumi.Input<string>;
            /**
             * The country or region where the resource is located
             */
            countryOrRegion?: pulumi.Input<string>;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: pulumi.Input<string>;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: pulumi.Input<string>;
        }

        export interface MachineIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<string>;
        }

    }

    export namespace v20200815preview {
        /**
         * Metadata pertaining to the geographic location of the resource.
         */
        export interface LocationDataArgs {
            /**
             * The city or locality where the resource is located.
             */
            city?: pulumi.Input<string>;
            /**
             * The country or region where the resource is located
             */
            countryOrRegion?: pulumi.Input<string>;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: pulumi.Input<string>;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Describes the Machine Extension Instance View.
         */
        export interface MachineExtensionInstanceViewArgs {
            /**
             * The machine extension name.
             */
            name?: pulumi.Input<string>;
            /**
             * Instance view status.
             */
            status?: pulumi.Input<v20200815preview.MachineExtensionInstanceViewStatusArgs>;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type?: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion?: pulumi.Input<string>;
        }

        /**
         * Instance view status.
         */
        export interface MachineExtensionInstanceViewStatusArgs {
            /**
             * The status code.
             */
            code?: pulumi.Input<string>;
            /**
             * The short localizable label for the status.
             */
            displayStatus?: pulumi.Input<string>;
            /**
             * The level code.
             */
            level?: pulumi.Input<string | enums.v20200815preview.StatusLevelTypes>;
            /**
             * The detailed status message, including for alerts and error messages.
             */
            message?: pulumi.Input<string>;
            /**
             * The time of the status.
             */
            time?: pulumi.Input<string>;
        }

        /**
         * The machine extension instance view.
         */
        export interface MachineExtensionPropertiesInstanceViewArgs {
            /**
             * The machine extension name.
             */
            name?: pulumi.Input<string>;
            /**
             * Instance view status.
             */
            status?: pulumi.Input<v20200815preview.MachineExtensionInstanceViewStatusArgs>;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type?: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion?: pulumi.Input<string>;
        }

        export interface MachineIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Private endpoint which the connection belongs to.
         */
        export interface PrivateEndpointPropertyArgs {
            /**
             * Resource id of the private endpoint.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * State of the private endpoint connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyArgs {
            /**
             * The private link service connection description.
             */
            description: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status: pulumi.Input<string>;
        }

    }

    export namespace v20220510preview {
        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20220510preview.ResourceIdentityType>;
        }

        /**
         * Metadata pertaining to the geographic location of the resource.
         */
        export interface LocationDataArgs {
            /**
             * The city or locality where the resource is located.
             */
            city?: pulumi.Input<string>;
            /**
             * The country or region where the resource is located
             */
            countryOrRegion?: pulumi.Input<string>;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: pulumi.Input<string>;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Describes the Machine Extension Instance View.
         */
        export interface MachineExtensionInstanceViewArgs {
            /**
             * The machine extension name.
             */
            name?: pulumi.Input<string>;
            /**
             * Instance view status.
             */
            status?: pulumi.Input<v20220510preview.MachineExtensionInstanceViewStatusArgs>;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type?: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion?: pulumi.Input<string>;
        }

        /**
         * Instance view status.
         */
        export interface MachineExtensionInstanceViewStatusArgs {
            /**
             * The status code.
             */
            code?: pulumi.Input<string>;
            /**
             * The short localizable label for the status.
             */
            displayStatus?: pulumi.Input<string>;
            /**
             * The level code.
             */
            level?: pulumi.Input<string | enums.v20220510preview.StatusLevelTypes>;
            /**
             * The detailed status message, including for alerts and error messages.
             */
            message?: pulumi.Input<string>;
            /**
             * The time of the status.
             */
            time?: pulumi.Input<string>;
        }

        /**
         * Describes the properties of a Machine Extension.
         */
        export interface MachineExtensionPropertiesArgs {
            /**
             * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
             */
            autoUpgradeMinorVersion?: pulumi.Input<boolean>;
            /**
             * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
             */
            enableAutomaticUpgrade?: pulumi.Input<boolean>;
            /**
             * How the extension handler should be forced to update even if the extension configuration has not changed.
             */
            forceUpdateTag?: pulumi.Input<string>;
            /**
             * The machine extension instance view.
             */
            instanceView?: pulumi.Input<v20220510preview.MachineExtensionInstanceViewArgs>;
            /**
             * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
             */
            protectedSettings?: any;
            /**
             * The name of the extension handler publisher.
             */
            publisher?: pulumi.Input<string>;
            /**
             * Json formatted public settings for the extension.
             */
            settings?: any;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type?: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion?: pulumi.Input<string>;
        }

        /**
         * Describes the properties of a hybrid machine.
         */
        export interface MachinePropertiesArgs {
            /**
             * Public Key that the client provides to be used during initial resource onboarding
             */
            clientPublicKey?: pulumi.Input<string>;
            /**
             * Metadata pertaining to the geographic location of the resource.
             */
            locationData?: pulumi.Input<v20220510preview.LocationDataArgs>;
            /**
             * Specifies whether any MS SQL instance is discovered on the machine.
             */
            mssqlDiscovered?: pulumi.Input<string>;
            /**
             * Specifies the operating system settings for the hybrid machine.
             */
            osProfile?: pulumi.Input<v20220510preview.OSProfileArgs>;
            /**
             * The type of Operating System (windows/linux).
             */
            osType?: pulumi.Input<string>;
            /**
             * The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any.
             */
            parentClusterResourceId?: pulumi.Input<string>;
            /**
             * The resource id of the private link scope this machine is assigned to, if any.
             */
            privateLinkScopeResourceId?: pulumi.Input<string>;
            /**
             * Statuses of dependent services that are reported back to ARM.
             */
            serviceStatuses?: pulumi.Input<v20220510preview.ServiceStatusesArgs>;
            /**
             * Specifies the hybrid machine unique ID.
             */
            vmId?: pulumi.Input<string>;
        }

        /**
         * Specifies the operating system settings for the hybrid machine.
         */
        export interface OSProfileArgs {
            /**
             * Specifies the linux configuration for update management.
             */
            linuxConfiguration?: pulumi.Input<v20220510preview.OSProfileLinuxConfigurationArgs>;
            /**
             * Specifies the windows configuration for update management.
             */
            windowsConfiguration?: pulumi.Input<v20220510preview.OSProfileWindowsConfigurationArgs>;
        }

        /**
         * Specifies the linux configuration for update management.
         */
        export interface OSProfileLinuxConfigurationArgs {
            /**
             * Specifies the assessment mode.
             */
            assessmentMode?: pulumi.Input<string | enums.v20220510preview.AssessmentModeTypes>;
            /**
             * Specifies the patch mode.
             */
            patchMode?: pulumi.Input<string | enums.v20220510preview.PatchModeTypes>;
        }

        /**
         * Specifies the windows configuration for update management.
         */
        export interface OSProfileWindowsConfigurationArgs {
            /**
             * Specifies the assessment mode.
             */
            assessmentMode?: pulumi.Input<string | enums.v20220510preview.AssessmentModeTypes>;
            /**
             * Specifies the patch mode.
             */
            patchMode?: pulumi.Input<string | enums.v20220510preview.PatchModeTypes>;
        }

        /**
         * Describes the status and behavior of a service.
         */
        export interface ServiceStatusArgs {
            /**
             * The behavior of the service when the Arc-enabled machine starts up.
             */
            startupType?: pulumi.Input<string>;
            /**
             * The current status of the service.
             */
            status?: pulumi.Input<string>;
        }

        /**
         * Reports the state and behavior of dependent services.
         */
        export interface ServiceStatusesArgs {
            /**
             * The state of the extension service on the Arc-enabled machine.
             */
            extensionService?: pulumi.Input<v20220510preview.ServiceStatusArgs>;
            /**
             * The state of the guest configuration service on the Arc-enabled machine.
             */
            guestConfigurationService?: pulumi.Input<v20220510preview.ServiceStatusArgs>;
        }

    }

    export namespace v20221227 {
        /**
         * The info w.r.t Agent Upgrade.
         */
        export interface AgentUpgradeArgs {
            /**
             * The correlation ID passed in from RSM per upgrade.
             */
            correlationId?: pulumi.Input<string>;
            /**
             * Specifies the version info w.r.t AgentUpgrade for the machine.
             */
            desiredVersion?: pulumi.Input<string>;
            /**
             * Specifies if RSM should try to upgrade this machine
             */
            enableAutomaticUpgrade?: pulumi.Input<boolean>;
        }

        /**
         * Properties that define a Azure Arc PrivateLinkScope resource.
         */
        export interface HybridComputePrivateLinkScopePropertiesArgs {
            /**
             * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
             */
            publicNetworkAccess?: pulumi.Input<string | enums.v20221227.PublicNetworkAccessType>;
        }

        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20221227.ResourceIdentityType>;
        }

        /**
         * Metadata pertaining to the geographic location of the resource.
         */
        export interface LocationDataArgs {
            /**
             * The city or locality where the resource is located.
             */
            city?: pulumi.Input<string>;
            /**
             * The country or region where the resource is located
             */
            countryOrRegion?: pulumi.Input<string>;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: pulumi.Input<string>;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Describes the Machine Extension Instance View.
         */
        export interface MachineExtensionInstanceViewArgs {
            /**
             * The machine extension name.
             */
            name?: pulumi.Input<string>;
            /**
             * Instance view status.
             */
            status?: pulumi.Input<v20221227.MachineExtensionInstanceViewStatusArgs>;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type?: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion?: pulumi.Input<string>;
        }

        /**
         * Instance view status.
         */
        export interface MachineExtensionInstanceViewStatusArgs {
            /**
             * The status code.
             */
            code?: pulumi.Input<string>;
            /**
             * The short localizable label for the status.
             */
            displayStatus?: pulumi.Input<string>;
            /**
             * The level code.
             */
            level?: pulumi.Input<string | enums.v20221227.StatusLevelTypes>;
            /**
             * The detailed status message, including for alerts and error messages.
             */
            message?: pulumi.Input<string>;
            /**
             * The time of the status.
             */
            time?: pulumi.Input<string>;
        }

        /**
         * Specifies the operating system settings for the hybrid machine.
         */
        export interface OSProfileArgs {
            /**
             * Specifies the linux configuration for update management.
             */
            linuxConfiguration?: pulumi.Input<v20221227.OSProfileLinuxConfigurationArgs>;
            /**
             * Specifies the windows configuration for update management.
             */
            windowsConfiguration?: pulumi.Input<v20221227.OSProfileWindowsConfigurationArgs>;
        }

        /**
         * Specifies the linux configuration for update management.
         */
        export interface OSProfileLinuxConfigurationArgs {
            /**
             * Specifies the assessment mode.
             */
            assessmentMode?: pulumi.Input<string | enums.v20221227.AssessmentModeTypes>;
            /**
             * Specifies the patch mode.
             */
            patchMode?: pulumi.Input<string | enums.v20221227.PatchModeTypes>;
        }

        /**
         * Specifies the windows configuration for update management.
         */
        export interface OSProfileWindowsConfigurationArgs {
            /**
             * Specifies the assessment mode.
             */
            assessmentMode?: pulumi.Input<string | enums.v20221227.AssessmentModeTypes>;
            /**
             * Specifies the patch mode.
             */
            patchMode?: pulumi.Input<string | enums.v20221227.PatchModeTypes>;
        }

        /**
         * Properties of a private endpoint connection.
         */
        export interface PrivateEndpointConnectionPropertiesArgs {
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: pulumi.Input<v20221227.PrivateEndpointPropertyArgs>;
            /**
             * Connection state of the private endpoint connection.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20221227.PrivateLinkServiceConnectionStatePropertyArgs>;
        }

        /**
         * Private endpoint which the connection belongs to.
         */
        export interface PrivateEndpointPropertyArgs {
            /**
             * Resource id of the private endpoint.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * State of the private endpoint connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyArgs {
            /**
             * The private link service connection description.
             */
            description: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status: pulumi.Input<string>;
        }

        /**
         * Describes the status and behavior of a service.
         */
        export interface ServiceStatusArgs {
            /**
             * The behavior of the service when the Arc-enabled machine starts up.
             */
            startupType?: pulumi.Input<string>;
            /**
             * The current status of the service.
             */
            status?: pulumi.Input<string>;
        }

        /**
         * Reports the state and behavior of dependent services.
         */
        export interface ServiceStatusesArgs {
            /**
             * The state of the extension service on the Arc-enabled machine.
             */
            extensionService?: pulumi.Input<v20221227.ServiceStatusArgs>;
            /**
             * The state of the guest configuration service on the Arc-enabled machine.
             */
            guestConfigurationService?: pulumi.Input<v20221227.ServiceStatusArgs>;
        }

    }

    export namespace v20230620preview {
        /**
         * The info w.r.t Agent Upgrade.
         */
        export interface AgentUpgradeArgs {
            /**
             * The correlation ID passed in from RSM per upgrade.
             */
            correlationId?: pulumi.Input<string>;
            /**
             * Specifies the version info w.r.t AgentUpgrade for the machine.
             */
            desiredVersion?: pulumi.Input<string>;
            /**
             * Specifies if RSM should try to upgrade this machine
             */
            enableAutomaticUpgrade?: pulumi.Input<boolean>;
        }

        /**
         * Properties that define a Azure Arc PrivateLinkScope resource.
         */
        export interface HybridComputePrivateLinkScopePropertiesArgs {
            /**
             * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
             */
            publicNetworkAccess?: pulumi.Input<string | enums.v20230620preview.PublicNetworkAccessType>;
        }

        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20230620preview.ResourceIdentityType>;
        }

        /**
         * Describes a license in a hybrid machine.
         */
        export interface LicenseArgs {
            /**
             * Describes the properties of a License.
             */
            licenseDetails?: pulumi.Input<v20230620preview.LicenseDetailsArgs>;
            /**
             * The type of the license resource.
             */
            licenseType?: pulumi.Input<string | enums.v20230620preview.LicenseType>;
            /**
             * The geo-location where the resource lives
             */
            location: pulumi.Input<string>;
            /**
             * Resource tags.
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Describes the tenant id.
             */
            tenantId?: pulumi.Input<string>;
        }

        /**
         * Describes the properties of a License.
         */
        export interface LicenseDetailsArgs {
            /**
             * Describes the edition of the license. The values are either Standard or Datacenter.
             */
            edition?: pulumi.Input<string | enums.v20230620preview.LicenseEdition>;
            /**
             * Describes the number of processors.
             */
            processors?: pulumi.Input<number>;
            /**
             * Describes the state of the license.
             */
            state?: pulumi.Input<string | enums.v20230620preview.LicenseState>;
            /**
             * Describes the license target server.
             */
            target?: pulumi.Input<string | enums.v20230620preview.LicenseTarget>;
            /**
             * Describes the license core type (pCore or vCore).
             */
            type?: pulumi.Input<string | enums.v20230620preview.LicenseCoreType>;
        }

        /**
         * License Profile Instance View in Machine Properties.
         */
        export interface LicenseProfileMachineInstanceViewArgs {
            /**
             * Properties for the Machine ESU profile.
             */
            esuProfile?: pulumi.Input<v20230620preview.LicenseProfileMachineInstanceViewEsuPropertiesArgs>;
        }

        /**
         * Properties for the Machine ESU profile.
         */
        export interface LicenseProfileMachineInstanceViewEsuPropertiesArgs {
            /**
             * The assigned license resource.
             */
            assignedLicense?: pulumi.Input<v20230620preview.LicenseArgs>;
            /**
             * Describes the license assignment state (Assigned or NotAssigned).
             */
            licenseAssignmentState?: pulumi.Input<string | enums.v20230620preview.LicenseAssignmentState>;
        }

        /**
         * Metadata pertaining to the geographic location of the resource.
         */
        export interface LocationDataArgs {
            /**
             * The city or locality where the resource is located.
             */
            city?: pulumi.Input<string>;
            /**
             * The country or region where the resource is located
             */
            countryOrRegion?: pulumi.Input<string>;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: pulumi.Input<string>;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Describes the Machine Extension Instance View.
         */
        export interface MachineExtensionInstanceViewArgs {
            /**
             * The machine extension name.
             */
            name?: pulumi.Input<string>;
            /**
             * Instance view status.
             */
            status?: pulumi.Input<v20230620preview.MachineExtensionInstanceViewStatusArgs>;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type?: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion?: pulumi.Input<string>;
        }

        /**
         * Instance view status.
         */
        export interface MachineExtensionInstanceViewStatusArgs {
            /**
             * The status code.
             */
            code?: pulumi.Input<string>;
            /**
             * The short localizable label for the status.
             */
            displayStatus?: pulumi.Input<string>;
            /**
             * The level code.
             */
            level?: pulumi.Input<string | enums.v20230620preview.StatusLevelTypes>;
            /**
             * The detailed status message, including for alerts and error messages.
             */
            message?: pulumi.Input<string>;
            /**
             * The time of the status.
             */
            time?: pulumi.Input<string>;
        }

        /**
         * Describes the properties of a Machine Extension.
         */
        export interface MachineExtensionPropertiesArgs {
            /**
             * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
             */
            autoUpgradeMinorVersion?: pulumi.Input<boolean>;
            /**
             * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
             */
            enableAutomaticUpgrade?: pulumi.Input<boolean>;
            /**
             * How the extension handler should be forced to update even if the extension configuration has not changed.
             */
            forceUpdateTag?: pulumi.Input<string>;
            /**
             * The machine extension instance view.
             */
            instanceView?: pulumi.Input<v20230620preview.MachineExtensionInstanceViewArgs>;
            /**
             * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
             */
            protectedSettings?: any;
            /**
             * The name of the extension handler publisher.
             */
            publisher?: pulumi.Input<string>;
            /**
             * Json formatted public settings for the extension.
             */
            settings?: any;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type?: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion?: pulumi.Input<string>;
        }

        /**
         * Specifies the operating system settings for the hybrid machine.
         */
        export interface OSProfileArgs {
            /**
             * Specifies the linux configuration for update management.
             */
            linuxConfiguration?: pulumi.Input<v20230620preview.OSProfileLinuxConfigurationArgs>;
            /**
             * Specifies the windows configuration for update management.
             */
            windowsConfiguration?: pulumi.Input<v20230620preview.OSProfileWindowsConfigurationArgs>;
        }

        /**
         * Specifies the linux configuration for update management.
         */
        export interface OSProfileLinuxConfigurationArgs {
            /**
             * Specifies the assessment mode.
             */
            assessmentMode?: pulumi.Input<string | enums.v20230620preview.AssessmentModeTypes>;
            /**
             * Specifies the patch mode.
             */
            patchMode?: pulumi.Input<string | enums.v20230620preview.PatchModeTypes>;
        }

        /**
         * Specifies the windows configuration for update management.
         */
        export interface OSProfileWindowsConfigurationArgs {
            /**
             * Specifies the assessment mode.
             */
            assessmentMode?: pulumi.Input<string | enums.v20230620preview.AssessmentModeTypes>;
            /**
             * Specifies the patch mode.
             */
            patchMode?: pulumi.Input<string | enums.v20230620preview.PatchModeTypes>;
        }

        /**
         * Properties of a private endpoint connection.
         */
        export interface PrivateEndpointConnectionPropertiesArgs {
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: pulumi.Input<v20230620preview.PrivateEndpointPropertyArgs>;
            /**
             * Connection state of the private endpoint connection.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20230620preview.PrivateLinkServiceConnectionStatePropertyArgs>;
        }

        /**
         * Private endpoint which the connection belongs to.
         */
        export interface PrivateEndpointPropertyArgs {
            /**
             * Resource id of the private endpoint.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * State of the private endpoint connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyArgs {
            /**
             * The private link service connection description.
             */
            description: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status: pulumi.Input<string>;
        }

        /**
         * Describes the status and behavior of a service.
         */
        export interface ServiceStatusArgs {
            /**
             * The behavior of the service when the Arc-enabled machine starts up.
             */
            startupType?: pulumi.Input<string>;
            /**
             * The current status of the service.
             */
            status?: pulumi.Input<string>;
        }

        /**
         * Reports the state and behavior of dependent services.
         */
        export interface ServiceStatusesArgs {
            /**
             * The state of the extension service on the Arc-enabled machine.
             */
            extensionService?: pulumi.Input<v20230620preview.ServiceStatusArgs>;
            /**
             * The state of the guest configuration service on the Arc-enabled machine.
             */
            guestConfigurationService?: pulumi.Input<v20230620preview.ServiceStatusArgs>;
        }

    }
}
