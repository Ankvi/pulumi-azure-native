import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information about the guest configuration assignment.
 */
export interface AssignmentInfoResponse {
    /**
     * Information about the configuration.
     */
    configuration?: ConfigurationInfoResponse;
    /**
     * Name of the guest configuration assignment.
     */
    name: string;
}

/**
 * Reason and code for the compliance of the guest configuration assignment resource.
 */
export interface AssignmentReportResourceComplianceReasonResponse {
    /**
     * Code for the compliance of the guest configuration assignment resource.
     */
    code: string;
    /**
     * Reason for the compliance of the guest configuration assignment resource.
     */
    phrase: string;
}

/**
 * The guest configuration assignment resource.
 */
export interface AssignmentReportResourceResponse {
    /**
     * A value indicating compliance status of the machine for the assigned guest configuration.
     */
    complianceStatus: string;
    /**
     * Properties of a guest configuration assignment resource.
     */
    properties: any;
    /**
     * Compliance reason and reason code for a resource.
     */
    reasons?: AssignmentReportResourceComplianceReasonResponse[];
    /**
     * Name of the guest configuration assignment resource setting.
     */
    resourceId: string;
}

export interface AssignmentReportResponse {
    /**
     * Configuration details of the guest configuration assignment.
     */
    assignment?: AssignmentInfoResponse;
    /**
     * A value indicating compliance status of the machine for the assigned guest configuration.
     */
    complianceStatus: string;
    /**
     * End date and time of the guest configuration assignment compliance status check.
     */
    endTime: string;
    /**
     * ARM resource id of the report for the guest configuration assignment.
     */
    id: string;
    /**
     * Type of report, Consistency or Initial
     */
    operationType: string;
    /**
     * GUID that identifies the guest configuration assignment report under a subscription, resource group.
     */
    reportId: string;
    /**
     * The list of resources for which guest configuration assignment compliance is checked.
     */
    resources?: AssignmentReportResourceResponse[];
    /**
     * Start date and time of the guest configuration assignment compliance status check.
     */
    startTime: string;
    /**
     * Information about the VM.
     */
    vm?: VMInfoResponse;
}

/**
 * Information about the configuration.
 */
export interface ConfigurationInfoResponse {
    /**
     * Name of the configuration.
     */
    name: string;
    /**
     * Version of the configuration.
     */
    version: string;
}

/**
 * Represents a configuration parameter.
 */
export interface ConfigurationParameterResponse {
    /**
     * Name of the configuration parameter.
     */
    name?: string;
    /**
     * Value of the configuration parameter.
     */
    value?: string;
}

/**
 * Configuration setting of LCM (Local Configuration Manager).
 */
export interface ConfigurationSettingResponse {
    /**
     * Specifies what happens after a reboot during the application of a configuration. The possible values are ContinueConfiguration and StopConfiguration
     */
    actionAfterReboot: string;
    /**
     * If true - new configurations downloaded from the pull service are allowed to overwrite the old ones on the target node. Otherwise, false
     */
    allowModuleOverwrite: boolean;
    /**
     * Specifies how the LCM(Local Configuration Manager) actually applies the configuration to the target nodes. Possible values are ApplyOnly, ApplyAndMonitor, and ApplyAndAutoCorrect.
     */
    configurationMode: string;
    /**
     * How often, in minutes, the current configuration is checked and applied. This property is ignored if the ConfigurationMode property is set to ApplyOnly. The default value is 15.
     */
    configurationModeFrequencyMins: number;
    /**
     * Set this to true to automatically reboot the node after a configuration that requires reboot is applied. Otherwise, you will have to manually reboot the node for any configuration that requires it. The default value is false. To use this setting when a reboot condition is enacted by something other than DSC (such as Windows Installer), combine this setting with the xPendingReboot module.
     */
    rebootIfNeeded: boolean;
    /**
     * The time interval, in minutes, at which the LCM checks a pull service to get updated configurations. This value is ignored if the LCM is not configured in pull mode. The default value is 30.
     */
    refreshFrequencyMins: number;
}
/**
 * configurationSettingResponseProvideDefaults sets the appropriate defaults for ConfigurationSettingResponse
 */
export function configurationSettingResponseProvideDefaults(val: ConfigurationSettingResponse): ConfigurationSettingResponse {
    return {
        ...val,
        configurationModeFrequencyMins: (val.configurationModeFrequencyMins) ?? 15,
        refreshFrequencyMins: (val.refreshFrequencyMins) ?? 30,
    };
}

/**
 * Guest configuration assignment properties.
 */
export interface GuestConfigurationAssignmentPropertiesResponse {
    /**
     * Combined hash of the configuration package and parameters.
     */
    assignmentHash: string;
    /**
     * A value indicating compliance status of the machine for the assigned guest configuration.
     */
    complianceStatus: string;
    /**
     * The source which initiated the guest configuration assignment. Ex: Azure Policy
     */
    context?: string;
    /**
     * The guest configuration to assign.
     */
    guestConfiguration?: GuestConfigurationNavigationResponse;
    /**
     * Date and time when last compliance status was checked.
     */
    lastComplianceStatusChecked: string;
    /**
     * Last reported guest configuration assignment report.
     */
    latestAssignmentReport?: AssignmentReportResponse;
    /**
     * Id of the latest report for the guest configuration assignment. 
     */
    latestReportId: string;
    /**
     * parameter hash for the guest configuration assignment. 
     */
    parameterHash: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    provisioningState: string;
    /**
     * Type of the resource - VMSS / VM
     */
    resourceType: string;
    /**
     * VM resource Id.
     */
    targetResourceId: string;
    /**
     * The list of VM Compliance data for VMSS
     */
    vmssVMList?: VMSSVMInfoResponse[];
}
/**
 * guestConfigurationAssignmentPropertiesResponseProvideDefaults sets the appropriate defaults for GuestConfigurationAssignmentPropertiesResponse
 */
export function guestConfigurationAssignmentPropertiesResponseProvideDefaults(val: GuestConfigurationAssignmentPropertiesResponse): GuestConfigurationAssignmentPropertiesResponse {
    return {
        ...val,
        guestConfiguration: (val.guestConfiguration ? guestConfigurationNavigationResponseProvideDefaults(val.guestConfiguration) : undefined),
    };
}

/**
 * Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules.
 */
export interface GuestConfigurationNavigationResponse {
    /**
     * Specifies the origin of the configuration.
     */
    assignmentSource: string;
    /**
     * Specifies the assignment type and execution of the configuration. Possible values are Audit, DeployAndAutoCorrect, ApplyAndAutoCorrect and ApplyAndMonitor.
     */
    assignmentType?: string;
    /**
     * The configuration parameters for the guest configuration.
     */
    configurationParameter?: ConfigurationParameterResponse[];
    /**
     * The protected configuration parameters for the guest configuration.
     */
    configurationProtectedParameter?: ConfigurationParameterResponse[];
    /**
     * The configuration setting for the guest configuration.
     */
    configurationSetting: ConfigurationSettingResponse;
    /**
     * Combined hash of the guest configuration package and configuration parameters.
     */
    contentHash?: string;
    /**
     * Managed identity with storage access of the guest configuration package and configuration parameters.
     */
    contentManagedIdentity?: string;
    /**
     * Specifies the content type of the configuration. Possible values could be Builtin or Custom.
     */
    contentType: string;
    /**
     * Uri of the storage where guest configuration package is uploaded.
     */
    contentUri?: string;
    /**
     * Kind of the guest configuration. For example:DSC
     */
    kind?: string;
    /**
     * Name of the guest configuration.
     */
    name?: string;
    /**
     * Version of the guest configuration.
     */
    version?: string;
}
/**
 * guestConfigurationNavigationResponseProvideDefaults sets the appropriate defaults for GuestConfigurationNavigationResponse
 */
export function guestConfigurationNavigationResponseProvideDefaults(val: GuestConfigurationNavigationResponse): GuestConfigurationNavigationResponse {
    return {
        ...val,
        configurationSetting: configurationSettingResponseProvideDefaults(val.configurationSetting),
    };
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

/**
 * Information about the VM.
 */
export interface VMInfoResponse {
    /**
     * Azure resource Id of the VM.
     */
    id: string;
    /**
     * UUID(Universally Unique Identifier) of the VM.
     */
    uuid: string;
}

/**
 * Information about VMSS VM
 */
export interface VMSSVMInfoResponse {
    /**
     * A value indicating compliance status of the machine for the assigned guest configuration.
     */
    complianceStatus: string;
    /**
     * Date and time when last compliance status was checked.
     */
    lastComplianceChecked: string;
    /**
     * Id of the latest report for the guest configuration assignment. 
     */
    latestReportId: string;
    /**
     * UUID of the VM.
     */
    vmId: string;
    /**
     * Azure resource Id of the VM.
     */
    vmResourceId: string;
}
