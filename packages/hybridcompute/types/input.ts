import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The info w.r.t Agent Upgrade.
 */
export interface AgentUpgradeArgs {
    /**
     * The correlation ID passed in from RSM per upgrade.
     */
    correlationId?: pulumi.Input<string | undefined>;
    /**
     * Specifies the version info w.r.t AgentUpgrade for the machine.
     */
    desiredVersion?: pulumi.Input<string | undefined>;
    /**
     * Specifies if RSM should try to upgrade this machine
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean | undefined>;
}

/**
 * Properties that define a Azure Arc PrivateLinkScope resource.
 */
export interface HybridComputePrivateLinkScopePropertiesArgs {
    /**
     * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessType | undefined>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
}

/**
 * Describes a license in a hybrid machine.
 */
export interface LicenseArgs {
    /**
     * Describes the properties of a License.
     */
    licenseDetails?: pulumi.Input<LicenseDetailsArgs | undefined>;
    /**
     * The type of the license resource.
     */
    licenseType?: pulumi.Input<string | enums.LicenseType | undefined>;
    /**
     * The geo-location where the resource lives
     */
    location: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Describes the tenant id.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Describes the properties of a License.
 */
export interface LicenseDetailsArgs {
    /**
     * Describes the edition of the license. The values are either Standard or Datacenter.
     */
    edition?: pulumi.Input<string | enums.LicenseEdition | undefined>;
    /**
     * Describes the number of processors.
     */
    processors?: pulumi.Input<number | undefined>;
    /**
     * Describes the state of the license.
     */
    state?: pulumi.Input<string | enums.LicenseState | undefined>;
    /**
     * Describes the license target server.
     */
    target?: pulumi.Input<string | enums.LicenseTarget | undefined>;
    /**
     * Describes the license core type (pCore or vCore).
     */
    type?: pulumi.Input<string | enums.LicenseCoreType | undefined>;
    /**
     * A list of volume license details.
     */
    volumeLicenseDetails?: pulumi.Input<pulumi.Input<VolumeLicenseDetailsArgs>[] | undefined>;
}

/**
 * License Profile Instance View in Machine Properties.
 */
export interface LicenseProfileMachineInstanceViewArgs {
    /**
     * Properties for the Machine ESU profile.
     */
    esuProfile?: pulumi.Input<LicenseProfileMachineInstanceViewEsuPropertiesArgs | undefined>;
    /**
     * The list of product features.
     */
    productFeatures?: pulumi.Input<pulumi.Input<ProductFeatureArgs>[] | undefined>;
    /**
     * Indicates the product type of the license.
     */
    productType?: pulumi.Input<string | enums.LicenseProfileProductType | undefined>;
    /**
     * Specifies if this machine is licensed as part of a Software Assurance agreement.
     */
    softwareAssuranceCustomer?: pulumi.Input<boolean | undefined>;
    /**
     * Indicates the subscription status of the product.
     */
    subscriptionStatus?: pulumi.Input<string | enums.LicenseProfileSubscriptionStatus | undefined>;
}

/**
 * Properties for the Machine ESU profile.
 */
export interface LicenseProfileMachineInstanceViewEsuPropertiesArgs {
    /**
     * The assigned license resource.
     */
    assignedLicense?: pulumi.Input<LicenseArgs | undefined>;
    /**
     * Describes the license assignment state (Assigned or NotAssigned).
     */
    licenseAssignmentState?: pulumi.Input<string | enums.LicenseAssignmentState | undefined>;
}

/**
 * Metadata pertaining to the geographic location of the resource.
 */
export interface LocationDataArgs {
    /**
     * The city or locality where the resource is located.
     */
    city?: pulumi.Input<string | undefined>;
    /**
     * The country or region where the resource is located
     */
    countryOrRegion?: pulumi.Input<string | undefined>;
    /**
     * The district, state, or province where the resource is located.
     */
    district?: pulumi.Input<string | undefined>;
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
    name?: pulumi.Input<string | undefined>;
    /**
     * Instance view status.
     */
    status?: pulumi.Input<MachineExtensionInstanceViewStatusArgs | undefined>;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: pulumi.Input<string | undefined>;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: pulumi.Input<string | undefined>;
}

/**
 * Instance view status.
 */
export interface MachineExtensionInstanceViewStatusArgs {
    /**
     * The status code.
     */
    code?: pulumi.Input<string | undefined>;
    /**
     * The short localizable label for the status.
     */
    displayStatus?: pulumi.Input<string | undefined>;
    /**
     * The level code.
     */
    level?: pulumi.Input<string | enums.StatusLevelTypes | undefined>;
    /**
     * The detailed status message, including for alerts and error messages.
     */
    message?: pulumi.Input<string | undefined>;
    /**
     * The time of the status.
     */
    time?: pulumi.Input<string | undefined>;
}

/**
 * Describes the properties of a Machine Extension.
 */
export interface MachineExtensionPropertiesArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean | undefined>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean | undefined>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: pulumi.Input<string | undefined>;
    /**
     * The machine extension instance view.
     */
    instanceView?: pulumi.Input<MachineExtensionInstanceViewArgs | undefined>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings?: any | undefined;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: pulumi.Input<string | undefined>;
    /**
     * Json formatted public settings for the extension.
     */
    settings?: any | undefined;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: pulumi.Input<string | undefined>;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: pulumi.Input<string | undefined>;
}

/**
 * Describes the script sources for run command. Use only one of script, scriptUri, commandId.
 */
export interface MachineRunCommandScriptSourceArgs {
    /**
     * Specifies the commandId of predefined built-in script.
     */
    commandId?: pulumi.Input<string | undefined>;
    /**
     * Specifies the script content to be executed on the machine.
     */
    script?: pulumi.Input<string | undefined>;
    /**
     * Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI.
     */
    scriptUri?: pulumi.Input<string | undefined>;
    /**
     * User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged.
     */
    scriptUriManagedIdentity?: pulumi.Input<RunCommandManagedIdentityArgs | undefined>;
}

/**
 * Specifies the operating system settings for the hybrid machine.
 */
export interface OSProfileArgs {
    /**
     * Specifies the linux configuration for update management.
     */
    linuxConfiguration?: pulumi.Input<OSProfileLinuxConfigurationArgs | undefined>;
    /**
     * Specifies the windows configuration for update management.
     */
    windowsConfiguration?: pulumi.Input<OSProfileWindowsConfigurationArgs | undefined>;
}

/**
 * Specifies the linux configuration for update management.
 */
export interface OSProfileLinuxConfigurationArgs {
    /**
     * Specifies the assessment mode.
     */
    assessmentMode?: pulumi.Input<string | enums.AssessmentModeTypes | undefined>;
    /**
     * Captures the hotpatch capability enrollment intent of the customers, which enables customers to patch their Windows machines without requiring a reboot.
     */
    enableHotpatching?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the patch mode.
     */
    patchMode?: pulumi.Input<string | enums.PatchModeTypes | undefined>;
}

/**
 * Specifies the windows configuration for update management.
 */
export interface OSProfileWindowsConfigurationArgs {
    /**
     * Specifies the assessment mode.
     */
    assessmentMode?: pulumi.Input<string | enums.AssessmentModeTypes | undefined>;
    /**
     * Captures the hotpatch capability enrollment intent of the customers, which enables customers to patch their Windows machines without requiring a reboot.
     */
    enableHotpatching?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the patch mode.
     */
    patchMode?: pulumi.Input<string | enums.PatchModeTypes | undefined>;
}

/**
 * Properties of a private endpoint connection.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * Private endpoint which the connection belongs to.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointPropertyArgs | undefined>;
    /**
     * Connection state of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStatePropertyArgs | undefined>;
}

/**
 * Private endpoint which the connection belongs to.
 */
export interface PrivateEndpointPropertyArgs {
    /**
     * Resource id of the private endpoint.
     */
    id?: pulumi.Input<string | undefined>;
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
 * Product Feature
 */
export interface ProductFeatureArgs {
    /**
     * Product feature name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Indicates the current status of the product features.
     */
    subscriptionStatus?: pulumi.Input<string | enums.LicenseProfileSubscriptionStatus | undefined>;
}

/**
 * Describes the properties of a run command parameter.
 */
export interface RunCommandInputParameterArgs {
    /**
     * The run command parameter name.
     */
    name: pulumi.Input<string>;
    /**
     * The run command parameter value.
     */
    value: pulumi.Input<string>;
}

/**
 *  Contains clientId or objectId (use only one, not both) of a user-assigned managed identity that has access to storage blob used in Run Command. Use an empty RunCommandManagedIdentity object in case of system-assigned identity. Make sure the Azure storage blob exists in case of scriptUri, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment with scriptUri blob and 'Storage Blob Data Contributor' for Append blobs(outputBlobUri, errorBlobUri). In case of user assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged.
 */
export interface RunCommandManagedIdentityArgs {
    /**
     * Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided.
     */
    objectId?: pulumi.Input<string | undefined>;
}

/**
 * Describes the status and behavior of a service.
 */
export interface ServiceStatusArgs {
    /**
     * The behavior of the service when the Arc-enabled machine starts up.
     */
    startupType?: pulumi.Input<string | undefined>;
    /**
     * The current status of the service.
     */
    status?: pulumi.Input<string | undefined>;
}

/**
 * Reports the state and behavior of dependent services.
 */
export interface ServiceStatusesArgs {
    /**
     * The state of the extension service on the Arc-enabled machine.
     */
    extensionService?: pulumi.Input<ServiceStatusArgs | undefined>;
    /**
     * The state of the guest configuration service on the Arc-enabled machine.
     */
    guestConfigurationService?: pulumi.Input<ServiceStatusArgs | undefined>;
}

export interface VolumeLicenseDetailsArgs {
    /**
     * The invoice id for the volume license.
     */
    invoiceId?: pulumi.Input<string | undefined>;
    /**
     * Describes the program year the volume license is for.
     */
    programYear?: pulumi.Input<string | enums.ProgramYear | undefined>;
}
