import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of the create Advanced Schedule.
 */
export interface AdvancedScheduleArgs {
    /**
     * Days of the month that the job should execute on. Must be between 1 and 31.
     */
    monthDays?: pulumi.Input<pulumi.Input<number>[] | undefined>;
    /**
     * Occurrences of days within a month.
     */
    monthlyOccurrences?: pulumi.Input<pulumi.Input<AdvancedScheduleMonthlyOccurrenceArgs>[] | undefined>;
    /**
     * Days of the week that the job should execute on.
     */
    weekDays?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The properties of the create advanced schedule monthly occurrence.
 */
export interface AdvancedScheduleMonthlyOccurrenceArgs {
    /**
     * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
     */
    day?: pulumi.Input<string | enums.ScheduleDay | undefined>;
    /**
     * Occurrence of the week within the month. Must be between 1 and 5
     */
    occurrence?: pulumi.Input<number | undefined>;
}

/**
 * Error response of an operation failure
 */
export interface AutomationErrorResponseArgs {
    /**
     * Error code
     */
    code?: pulumi.Input<string | undefined>;
    /**
     * Error message indicating why the operation failed.
     */
    message?: pulumi.Input<string | undefined>;
}

/**
 * Azure query for the update configuration.
 */
export interface AzureQueryPropertiesArgs {
    /**
     * List of locations to scope the query to.
     */
    locations?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of Subscription or Resource Group ARM Ids.
     */
    scope?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Tag settings for the VM.
     */
    tagSettings?: pulumi.Input<TagSettingsPropertiesArgs | undefined>;
}

/**
 * The connection type property associated with the entity.
 */
export interface ConnectionTypeAssociationPropertyArgs {
    /**
     * Gets or sets the name of the connection type.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Definition of the runbook property type.
 */
export interface ContentHashArgs {
    /**
     * Gets or sets the content hash algorithm used to hash the content.
     */
    algorithm: pulumi.Input<string>;
    /**
     * Gets or sets expected hash value of the content.
     */
    value: pulumi.Input<string>;
}

/**
 * Definition of the content link.
 */
export interface ContentLinkArgs {
    /**
     * Gets or sets the hash.
     */
    contentHash?: pulumi.Input<ContentHashArgs | undefined>;
    /**
     * Gets or sets the uri of content.
     */
    uri?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the version of the content.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * Definition of the content source.
 */
export interface ContentSourceArgs {
    /**
     * Gets or sets the hash.
     */
    hash?: pulumi.Input<ContentHashArgs | undefined>;
    /**
     * Gets or sets the content source type.
     */
    type?: pulumi.Input<string | enums.ContentSourceType | undefined>;
    /**
     * Gets or sets the value of the content. This is based on the content source type.
     */
    value?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the version of the content.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * The Dsc configuration property associated with the entity.
 */
export interface DscConfigurationAssociationPropertyArgs {
    /**
     * Gets or sets the name of the Dsc configuration.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Definition of the configuration parameter type.
 */
export interface DscConfigurationParameterArgs {
    /**
     * Gets or sets the default value of parameter.
     */
    defaultValue?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
     */
    isMandatory?: pulumi.Input<boolean | undefined>;
    /**
     * Get or sets the position of the parameter.
     */
    position?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the type of the parameter.
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * The encryption settings for automation account
 */
export interface EncryptionPropertiesArgs {
    /**
     * User identity used for CMK.
     */
    identity?: pulumi.Input<EncryptionPropertiesIdentityArgs | undefined>;
    /**
     * Encryption Key Source
     */
    keySource?: pulumi.Input<enums.EncryptionKeySourceType | undefined>;
    /**
     * Key vault properties.
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs | undefined>;
}

/**
 * User identity used for CMK.
 */
export interface EncryptionPropertiesIdentityArgs {
    /**
     * The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentity?: any | undefined;
}

/**
 * Definition of the connection fields.
 */
export interface FieldDefinitionArgs {
    /**
     * Gets or sets the isEncrypted flag of the connection field definition.
     */
    isEncrypted?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the isOptional flag of the connection field definition.
     */
    isOptional?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the type of the connection field definition.
     */
    type: pulumi.Input<string>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Settings concerning key vault encryption for a configuration store.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * The name of key used to encrypt data.
     */
    keyName?: pulumi.Input<string | undefined>;
    /**
     * The key version of the key used to encrypt data.
     */
    keyVersion?: pulumi.Input<string | undefined>;
    /**
     * The URI of the key vault key used to encrypt data.
     */
    keyvaultUri?: pulumi.Input<string | undefined>;
}

/**
 * Linux specific update configuration.
 */
export interface LinuxPropertiesArgs {
    /**
     * packages excluded from the software update configuration.
     */
    excludedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Update classifications included in the software update configuration.
     */
    includedPackageClassifications?: pulumi.Input<string | enums.LinuxUpdateClasses | undefined>;
    /**
     * packages included from the software update configuration.
     */
    includedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Reboot setting for the software update configuration.
     */
    rebootSetting?: pulumi.Input<string | undefined>;
}

/**
 * Non Azure query for the update configuration.
 */
export interface NonAzureQueryPropertiesArgs {
    /**
     * Log Analytics Saved Search name.
     */
    functionAlias?: pulumi.Input<string | undefined>;
    /**
     * Workspace Id for Log Analytics in which the saved Search is resided.
     */
    workspaceId?: pulumi.Input<string | undefined>;
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
 * Connection State of the Private Endpoint Connection.
 */
export interface PrivateLinkServiceConnectionStatePropertyArgs {
    /**
     * The private link service connection description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The private link service connection status.
     */
    status?: pulumi.Input<string | undefined>;
}

/**
 * Definition of RunAs credential to use for hybrid worker.
 */
export interface RunAsCredentialAssociationPropertyArgs {
    /**
     * Gets or sets the name of the credential.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * The runbook property associated with the entity.
 */
export interface RunbookAssociationPropertyArgs {
    /**
     * Gets or sets the name of the runbook.
     */
    name?: pulumi.Input<string | undefined>;
}

export interface RunbookDraftArgs {
    /**
     * Gets or sets the creation time of the runbook draft.
     */
    creationTime?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the draft runbook content link.
     */
    draftContentLink?: pulumi.Input<ContentLinkArgs | undefined>;
    /**
     * Gets or sets whether runbook is in edit mode.
     */
    inEdit?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the last modified time of the runbook draft.
     */
    lastModifiedTime?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the runbook output types.
     */
    outputTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gets or sets the runbook draft parameters.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<RunbookParameterArgs>} | undefined>;
}

/**
 * Definition of the runbook parameter type.
 */
export interface RunbookParameterArgs {
    /**
     * Gets or sets the default value of parameter.
     */
    defaultValue?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
     */
    isMandatory?: pulumi.Input<boolean | undefined>;
    /**
     * Get or sets the position of the parameter.
     */
    position?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the type of the parameter.
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * Definition of schedule parameters.
 */
export interface SUCSchedulePropertiesArgs {
    /**
     * Gets or sets the advanced schedule.
     */
    advancedSchedule?: pulumi.Input<AdvancedScheduleArgs | undefined>;
    /**
     * Gets or sets the creation time.
     */
    creationTime?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the end time of the schedule.
     */
    expiryTime?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the expiry time's offset in minutes.
     */
    expiryTimeOffsetMinutes?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the frequency of the schedule.
     */
    frequency?: pulumi.Input<string | enums.ScheduleFrequency | undefined>;
    /**
     * Gets or sets the interval of the schedule.
     */
    interval?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets a value indicating whether this schedule is enabled.
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    lastModifiedTime?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the next run time of the schedule.
     */
    nextRun?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the next run time's offset in minutes.
     */
    nextRunOffsetMinutes?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the start time of the schedule.
     */
    startTime?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the time zone of the schedule.
     */
    timeZone?: pulumi.Input<string | undefined>;
}

/**
 * The schedule property associated with the entity.
 */
export interface ScheduleAssociationPropertyArgs {
    /**
     * Gets or sets the name of the Schedule.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * The account SKU.
 */
export interface SkuArgs {
    /**
     * Gets or sets the SKU capacity.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * Gets or sets the SKU family.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the SKU name of the account.
     */
    name: pulumi.Input<string | enums.SkuNameEnum>;
}

/**
 * Task properties of the software update configuration.
 */
export interface SoftwareUpdateConfigurationTasksArgs {
    /**
     * Post task properties.
     */
    postTask?: pulumi.Input<TaskPropertiesArgs | undefined>;
    /**
     * Pre task properties.
     */
    preTask?: pulumi.Input<TaskPropertiesArgs | undefined>;
}

export interface SourceControlSecurityTokenPropertiesArgs {
    /**
     * The access token.
     */
    accessToken?: pulumi.Input<string | undefined>;
    /**
     * The refresh token.
     */
    refreshToken?: pulumi.Input<string | undefined>;
    /**
     * The token type. Must be either PersonalAccessToken or Oauth.
     */
    tokenType?: pulumi.Input<string | enums.TokenType | undefined>;
}

/**
 * Tag filter information for the VM.
 */
export interface TagSettingsPropertiesArgs {
    /**
     * Filter VMs by Any or All specified tags.
     */
    filterOperator?: pulumi.Input<enums.TagOperators | undefined>;
    /**
     * Dictionary of tags with its list of values.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>} | undefined>;
}

/**
 * Group specific to the update configuration.
 */
export interface TargetPropertiesArgs {
    /**
     * List of Azure queries in the software update configuration.
     */
    azureQueries?: pulumi.Input<pulumi.Input<AzureQueryPropertiesArgs>[] | undefined>;
    /**
     * List of non Azure queries in the software update configuration.
     */
    nonAzureQueries?: pulumi.Input<pulumi.Input<NonAzureQueryPropertiesArgs>[] | undefined>;
}

/**
 * Task properties of the software update configuration.
 */
export interface TaskPropertiesArgs {
    /**
     * Gets or sets the parameters of the task.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Gets or sets the name of the runbook.
     */
    source?: pulumi.Input<string | undefined>;
}

/**
 * The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location'
 */
export interface TrackedResourceArgs {
    /**
     * The geo-location where the resource lives
     */
    location: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Update specific properties of the software update configuration.
 */
export interface UpdateConfigurationArgs {
    /**
     * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
     */
    azureVirtualMachines?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
     */
    duration?: pulumi.Input<string | undefined>;
    /**
     * Linux specific update configuration.
     */
    linux?: pulumi.Input<LinuxPropertiesArgs | undefined>;
    /**
     * List of names of non-azure machines targeted by the software update configuration.
     */
    nonAzureComputerNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * operating system of target machines
     */
    operatingSystem: pulumi.Input<enums.OperatingSystemType>;
    /**
     * Group targets for the software update configuration.
     */
    targets?: pulumi.Input<TargetPropertiesArgs | undefined>;
    /**
     * Windows specific update configuration.
     */
    windows?: pulumi.Input<WindowsPropertiesArgs | undefined>;
}

/**
 * Windows specific update configuration.
 */
export interface WindowsPropertiesArgs {
    /**
     * KB numbers excluded from the software update configuration.
     */
    excludedKbNumbers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * KB numbers included from the software update configuration.
     */
    includedKbNumbers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Update classification included in the software update configuration. A comma separated string with required values
     */
    includedUpdateClassifications?: pulumi.Input<string | enums.WindowsUpdateClasses | undefined>;
    /**
     * Reboot setting for the software update configuration.
     */
    rebootSetting?: pulumi.Input<string | undefined>;
}
