import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        instanceView?: pulumi.Input<MachineExtensionInstanceViewArgs>;
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
        locationData?: pulumi.Input<LocationDataArgs>;
        /**
         * Specifies whether any MS SQL instance is discovered on the machine.
         */
        mssqlDiscovered?: pulumi.Input<string>;
        /**
         * Specifies the operating system settings for the hybrid machine.
         */
        osProfile?: pulumi.Input<OSProfileArgs>;
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
        serviceStatuses?: pulumi.Input<ServiceStatusesArgs>;
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
