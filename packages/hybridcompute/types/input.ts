import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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




