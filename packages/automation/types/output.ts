import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace automation {
    /**
     * The properties of the create advanced schedule monthly occurrence.
     */
    export interface AdvancedScheduleMonthlyOccurrenceResponse {
        /**
         * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
         */
        day?: string;
        /**
         * Occurrence of the week within the month. Must be between 1 and 5
         */
        occurrence?: number;
    }

    /**
     * The properties of the create Advanced Schedule.
     */
    export interface AdvancedScheduleResponse {
        /**
         * Days of the month that the job should execute on. Must be between 1 and 31.
         */
        monthDays?: number[];
        /**
         * Occurrences of days within a month.
         */
        monthlyOccurrences?: AdvancedScheduleMonthlyOccurrenceResponse[];
        /**
         * Days of the week that the job should execute on.
         */
        weekDays?: string[];
    }

    /**
     * Azure query for the update configuration.
     */
    export interface AzureQueryPropertiesResponse {
        /**
         * List of locations to scope the query to.
         */
        locations?: string[];
        /**
         * List of Subscription or Resource Group ARM Ids.
         */
        scope?: string[];
        /**
         * Tag settings for the VM.
         */
        tagSettings?: TagSettingsPropertiesResponse;
    }

    /**
     * The connection type property associated with the entity.
     */
    export interface ConnectionTypeAssociationPropertyResponse {
        /**
         * Gets or sets the name of the connection type.
         */
        name?: string;
    }

    /**
     * Definition of the runbook property type.
     */
    export interface ContentHashResponse {
        /**
         * Gets or sets the content hash algorithm used to hash the content.
         */
        algorithm: string;
        /**
         * Gets or sets expected hash value of the content.
         */
        value: string;
    }

    /**
     * Definition of the content link.
     */
    export interface ContentLinkResponse {
        /**
         * Gets or sets the hash.
         */
        contentHash?: ContentHashResponse;
        /**
         * Gets or sets the uri of the runbook content.
         */
        uri?: string;
        /**
         * Gets or sets the version of the content.
         */
        version?: string;
    }

    /**
     * Definition of the content source.
     */
    export interface ContentSourceResponse {
        /**
         * Gets or sets the hash.
         */
        hash?: ContentHashResponse;
        /**
         * Gets or sets the content source type.
         */
        type?: string;
        /**
         * Gets or sets the value of the content. This is based on the content source type.
         */
        value?: string;
        /**
         * Gets or sets the version of the content.
         */
        version?: string;
    }

    /**
     * The Dsc configuration property associated with the entity.
     */
    export interface DscConfigurationAssociationPropertyResponse {
        /**
         * Gets or sets the name of the Dsc configuration.
         */
        name?: string;
    }

    /**
     * Definition of the configuration parameter type.
     */
    export interface DscConfigurationParameterResponse {
        /**
         * Gets or sets the default value of parameter.
         */
        defaultValue?: string;
        /**
         * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
         */
        isMandatory?: boolean;
        /**
         * Get or sets the position of the parameter.
         */
        position?: number;
        /**
         * Gets or sets the type of the parameter.
         */
        type?: string;
    }

    /**
     * The encryption settings for automation account
     */
    export interface EncryptionPropertiesResponse {
        /**
         * User identity used for CMK.
         */
        identity?: EncryptionPropertiesResponseIdentity;
        /**
         * Encryption Key Source
         */
        keySource?: string;
        /**
         * Key vault properties.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
    }

    /**
     * User identity used for CMK.
     */
    export interface EncryptionPropertiesResponseIdentity {
        /**
         * The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentity?: any;
    }

    /**
     * Error response of an operation failure
     */
    export interface ErrorResponseResponse {
        /**
         * Error code
         */
        code?: string;
        /**
         * Error message indicating why the operation failed.
         */
        message?: string;
    }

    /**
     * Definition of the connection fields.
     */
    export interface FieldDefinitionResponse {
        /**
         * Gets or sets the isEncrypted flag of the connection field definition.
         */
        isEncrypted?: boolean;
        /**
         * Gets or sets the isOptional flag of the connection field definition.
         */
        isOptional?: boolean;
        /**
         * Gets or sets the type of the connection field definition.
         */
        type: string;
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
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesPropertiesResponse};
    }

    /**
     * Automation key which is used to register a DSC Node
     */
    export interface KeyResponse {
        /**
         * Automation key name.
         */
        keyName: string;
        /**
         * Automation key permissions.
         */
        permissions: string;
        /**
         * Value of the Automation Key used for registration.
         */
        value: string;
    }

    /**
     * Settings concerning key vault encryption for a configuration store.
     */
    export interface KeyVaultPropertiesResponse {
        /**
         * The name of key used to encrypt data.
         */
        keyName?: string;
        /**
         * The key version of the key used to encrypt data.
         */
        keyVersion?: string;
        /**
         * The URI of the key vault key used to encrypt data.
         */
        keyvaultUri?: string;
    }

    /**
     * Linux specific update configuration.
     */
    export interface LinuxPropertiesResponse {
        /**
         * packages excluded from the software update configuration.
         */
        excludedPackageNameMasks?: string[];
        /**
         * Update classifications included in the software update configuration.
         */
        includedPackageClassifications?: string;
        /**
         * packages included from the software update configuration.
         */
        includedPackageNameMasks?: string[];
        /**
         * Reboot setting for the software update configuration.
         */
        rebootSetting?: string;
    }

    /**
     * Definition of the module error info type.
     */
    export interface ModuleErrorInfoResponse {
        /**
         * Gets or sets the error code.
         */
        code?: string;
        /**
         * Gets or sets the error message.
         */
        message?: string;
    }

    /**
     * Non Azure query for the update configuration.
     */
    export interface NonAzureQueryPropertiesResponse {
        /**
         * Log Analytics Saved Search name.
         */
        functionAlias?: string;
        /**
         * Workspace Id for Log Analytics in which the saved Search is resided.
         */
        workspaceId?: string;
    }

    /**
     * A private endpoint connection
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Gets the groupIds.
         */
        groupIds?: string[];
        /**
         * Fully qualified resource Id for the resource
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: PrivateEndpointPropertyResponse;
        /**
         * Connection State of the Private Endpoint Connection.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStatePropertyResponse;
        /**
         * The type of the resource.
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
     * Connection State of the Private Endpoint Connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyResponse {
        /**
         * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    /**
     * Definition of RunAs credential to use for hybrid worker.
     */
    export interface RunAsCredentialAssociationPropertyResponse {
        /**
         * Gets or sets the name of the credential.
         */
        name?: string;
    }

    /**
     * The runbook property associated with the entity.
     */
    export interface RunbookAssociationPropertyResponse {
        /**
         * Gets or sets the name of the runbook.
         */
        name?: string;
    }

    export interface RunbookDraftResponse {
        /**
         * Gets or sets the creation time of the runbook draft.
         */
        creationTime?: string;
        /**
         * Gets or sets the draft runbook content link.
         */
        draftContentLink?: ContentLinkResponse;
        /**
         * Gets or sets whether runbook is in edit mode.
         */
        inEdit?: boolean;
        /**
         * Gets or sets the last modified time of the runbook draft.
         */
        lastModifiedTime?: string;
        /**
         * Gets or sets the runbook output types.
         */
        outputTypes?: string[];
        /**
         * Gets or sets the runbook draft parameters.
         */
        parameters?: {[key: string]: RunbookParameterResponse};
    }

    /**
     * Definition of the runbook parameter type.
     */
    export interface RunbookParameterResponse {
        /**
         * Gets or sets the default value of parameter.
         */
        defaultValue?: string;
        /**
         * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
         */
        isMandatory?: boolean;
        /**
         * Get or sets the position of the parameter.
         */
        position?: number;
        /**
         * Gets or sets the type of the parameter.
         */
        type?: string;
    }

    /**
     * Definition of schedule parameters.
     */
    export interface SUCSchedulePropertiesResponse {
        /**
         * Gets or sets the advanced schedule.
         */
        advancedSchedule?: AdvancedScheduleResponse;
        /**
         * Gets or sets the creation time.
         */
        creationTime?: string;
        /**
         * Gets or sets the description.
         */
        description?: string;
        /**
         * Gets or sets the end time of the schedule.
         */
        expiryTime?: string;
        /**
         * Gets or sets the expiry time's offset in minutes.
         */
        expiryTimeOffsetMinutes?: number;
        /**
         * Gets or sets the frequency of the schedule.
         */
        frequency?: string;
        /**
         * Gets or sets the interval of the schedule.
         */
        interval?: number;
        /**
         * Gets or sets a value indicating whether this schedule is enabled.
         */
        isEnabled?: boolean;
        /**
         * Gets or sets the last modified time.
         */
        lastModifiedTime?: string;
        /**
         * Gets or sets the next run time of the schedule.
         */
        nextRun?: string;
        /**
         * Gets or sets the next run time's offset in minutes.
         */
        nextRunOffsetMinutes?: number;
        /**
         * Gets or sets the start time of the schedule.
         */
        startTime?: string;
        /**
         * Gets the start time's offset in minutes.
         */
        startTimeOffsetMinutes: number;
        /**
         * Gets or sets the time zone of the schedule.
         */
        timeZone?: string;
    }
    /**
     * sucschedulePropertiesResponseProvideDefaults sets the appropriate defaults for SUCSchedulePropertiesResponse
     */
    export function sucschedulePropertiesResponseProvideDefaults(val: SUCSchedulePropertiesResponse): SUCSchedulePropertiesResponse {
        return {
            ...val,
            isEnabled: (val.isEnabled) ?? false,
        };
    }

    /**
     * The schedule property associated with the entity.
     */
    export interface ScheduleAssociationPropertyResponse {
        /**
         * Gets or sets the name of the Schedule.
         */
        name?: string;
    }

    /**
     * The account SKU.
     */
    export interface SkuResponse {
        /**
         * Gets or sets the SKU capacity.
         */
        capacity?: number;
        /**
         * Gets or sets the SKU family.
         */
        family?: string;
        /**
         * Gets or sets the SKU name of the account.
         */
        name: string;
    }

    /**
     * Task properties of the software update configuration.
     */
    export interface SoftwareUpdateConfigurationTasksResponse {
        /**
         * Post task properties.
         */
        postTask?: TaskPropertiesResponse;
        /**
         * Pre task properties.
         */
        preTask?: TaskPropertiesResponse;
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
     * Tag filter information for the VM.
     */
    export interface TagSettingsPropertiesResponse {
        /**
         * Filter VMs by Any or All specified tags.
         */
        filterOperator?: string;
        /**
         * Dictionary of tags with its list of values.
         */
        tags?: {[key: string]: string[]};
    }

    /**
     * Group specific to the update configuration.
     */
    export interface TargetPropertiesResponse {
        /**
         * List of Azure queries in the software update configuration.
         */
        azureQueries?: AzureQueryPropertiesResponse[];
        /**
         * List of non Azure queries in the software update configuration.
         */
        nonAzureQueries?: NonAzureQueryPropertiesResponse[];
    }

    /**
     * Task properties of the software update configuration.
     */
    export interface TaskPropertiesResponse {
        /**
         * Gets or sets the parameters of the task.
         */
        parameters?: {[key: string]: string};
        /**
         * Gets or sets the name of the runbook.
         */
        source?: string;
    }

    /**
     * Update specific properties of the software update configuration.
     */
    export interface UpdateConfigurationResponse {
        /**
         * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
         */
        azureVirtualMachines?: string[];
        /**
         * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
         */
        duration?: string;
        /**
         * Linux specific update configuration.
         */
        linux?: LinuxPropertiesResponse;
        /**
         * List of names of non-azure machines targeted by the software update configuration.
         */
        nonAzureComputerNames?: string[];
        /**
         * operating system of target machines
         */
        operatingSystem: string;
        /**
         * Group targets for the software update configuration.
         */
        targets?: TargetPropertiesResponse;
        /**
         * Windows specific update configuration.
         */
        windows?: WindowsPropertiesResponse;
    }

    export interface UserAssignedIdentitiesPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * Windows specific update configuration.
     */
    export interface WindowsPropertiesResponse {
        /**
         * KB numbers excluded from the software update configuration.
         */
        excludedKbNumbers?: string[];
        /**
         * KB numbers included from the software update configuration.
         */
        includedKbNumbers?: string[];
        /**
         * Update classification included in the software update configuration. A comma separated string with required values
         */
        includedUpdateClassifications?: string;
        /**
         * Reboot setting for the software update configuration.
         */
        rebootSetting?: string;
    }

    export namespace v20151031 {
        /**
         * The runbook property associated with the entity.
         */
        export interface RunbookAssociationPropertyResponse {
            /**
             * Gets or sets the name of the runbook.
             */
            name?: string;
        }

    }

    export namespace v20170515preview {
        /**
         * The properties of the create advanced schedule monthly occurrence.
         */
        export interface AdvancedScheduleMonthlyOccurrenceResponse {
            /**
             * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
             */
            day?: string;
            /**
             * Occurrence of the week within the month. Must be between 1 and 5
             */
            occurrence?: number;
        }

        /**
         * The properties of the create Advanced Schedule.
         */
        export interface AdvancedScheduleResponse {
            /**
             * Days of the month that the job should execute on. Must be between 1 and 31.
             */
            monthDays?: number[];
            /**
             * Occurrences of days within a month.
             */
            monthlyOccurrences?: v20170515preview.AdvancedScheduleMonthlyOccurrenceResponse[];
            /**
             * Days of the week that the job should execute on.
             */
            weekDays?: string[];
        }

        /**
         * Azure query for the update configuration.
         */
        export interface AzureQueryPropertiesResponse {
            /**
             * List of locations to scope the query to.
             */
            locations?: string[];
            /**
             * List of Subscription or Resource Group ARM Ids.
             */
            scope?: string[];
            /**
             * Tag settings for the VM.
             */
            tagSettings?: v20170515preview.TagSettingsPropertiesResponse;
        }

        /**
         * Error response of an operation failure
         */
        export interface ErrorResponseResponse {
            /**
             * Error code
             */
            code?: string;
            /**
             * Error message indicating why the operation failed.
             */
            message?: string;
        }

        /**
         * Linux specific update configuration.
         */
        export interface LinuxPropertiesResponse {
            /**
             * packages excluded from the software update configuration.
             */
            excludedPackageNameMasks?: string[];
            /**
             * Update classifications included in the software update configuration.
             */
            includedPackageClassifications?: string;
            /**
             * packages included from the software update configuration.
             */
            includedPackageNameMasks?: string[];
            /**
             * Reboot setting for the software update configuration.
             */
            rebootSetting?: string;
        }

        /**
         * Non Azure query for the update configuration.
         */
        export interface NonAzureQueryPropertiesResponse {
            /**
             * Log Analytics Saved Search name.
             */
            functionAlias?: string;
            /**
             * Workspace Id for Log Analytics in which the saved Search is resided.
             */
            workspaceId?: string;
        }

        /**
         * Definition of schedule parameters.
         */
        export interface SchedulePropertiesResponse {
            /**
             * Gets or sets the advanced schedule.
             */
            advancedSchedule?: v20170515preview.AdvancedScheduleResponse;
            /**
             * Gets or sets the creation time.
             */
            creationTime?: string;
            /**
             * Gets or sets the description.
             */
            description?: string;
            /**
             * Gets or sets the end time of the schedule.
             */
            expiryTime?: string;
            /**
             * Gets or sets the expiry time's offset in minutes.
             */
            expiryTimeOffsetMinutes?: number;
            /**
             * Gets or sets the frequency of the schedule.
             */
            frequency?: string;
            /**
             * Gets or sets the interval of the schedule.
             */
            interval?: number;
            /**
             * Gets or sets a value indicating whether this schedule is enabled.
             */
            isEnabled?: boolean;
            /**
             * Gets or sets the last modified time.
             */
            lastModifiedTime?: string;
            /**
             * Gets or sets the next run time of the schedule.
             */
            nextRun?: string;
            /**
             * Gets or sets the next run time's offset in minutes.
             */
            nextRunOffsetMinutes?: number;
            /**
             * Gets or sets the start time of the schedule.
             */
            startTime?: string;
            /**
             * Gets the start time's offset in minutes.
             */
            startTimeOffsetMinutes: number;
            /**
             * Gets or sets the time zone of the schedule.
             */
            timeZone?: string;
        }
        /**
         * schedulePropertiesResponseProvideDefaults sets the appropriate defaults for SchedulePropertiesResponse
         */
        export function schedulePropertiesResponseProvideDefaults(val: SchedulePropertiesResponse): SchedulePropertiesResponse {
            return {
                ...val,
                isEnabled: (val.isEnabled) ?? false,
            };
        }

        /**
         * Task properties of the software update configuration.
         */
        export interface SoftwareUpdateConfigurationTasksResponse {
            /**
             * Post task properties.
             */
            postTask?: v20170515preview.TaskPropertiesResponse;
            /**
             * Pre task properties.
             */
            preTask?: v20170515preview.TaskPropertiesResponse;
        }

        /**
         * Tag filter information for the VM.
         */
        export interface TagSettingsPropertiesResponse {
            /**
             * Filter VMs by Any or All specified tags.
             */
            filterOperator?: string;
            /**
             * Dictionary of tags with its list of values.
             */
            tags?: {[key: string]: string[]};
        }

        /**
         * Group specific to the update configuration.
         */
        export interface TargetPropertiesResponse {
            /**
             * List of Azure queries in the software update configuration.
             */
            azureQueries?: v20170515preview.AzureQueryPropertiesResponse[];
            /**
             * List of non Azure queries in the software update configuration.
             */
            nonAzureQueries?: v20170515preview.NonAzureQueryPropertiesResponse[];
        }

        /**
         * Task properties of the software update configuration.
         */
        export interface TaskPropertiesResponse {
            /**
             * Gets or sets the parameters of the task.
             */
            parameters?: {[key: string]: string};
            /**
             * Gets or sets the name of the runbook.
             */
            source?: string;
        }

        /**
         * Update specific properties of the software update configuration.
         */
        export interface UpdateConfigurationResponse {
            /**
             * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
             */
            azureVirtualMachines?: string[];
            /**
             * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
             */
            duration?: string;
            /**
             * Linux specific update configuration.
             */
            linux?: v20170515preview.LinuxPropertiesResponse;
            /**
             * List of names of non-azure machines targeted by the software update configuration.
             */
            nonAzureComputerNames?: string[];
            /**
             * operating system of target machines
             */
            operatingSystem: string;
            /**
             * Group targets for the software update configuration.
             */
            targets?: v20170515preview.TargetPropertiesResponse;
            /**
             * Windows specific update configuration.
             */
            windows?: v20170515preview.WindowsPropertiesResponse;
        }

        /**
         * Windows specific update configuration.
         */
        export interface WindowsPropertiesResponse {
            /**
             * KB numbers excluded from the software update configuration.
             */
            excludedKbNumbers?: string[];
            /**
             * KB numbers included from the software update configuration.
             */
            includedKbNumbers?: string[];
            /**
             * Update classification included in the software update configuration. A comma separated string with required values
             */
            includedUpdateClassifications?: string;
            /**
             * Reboot setting for the software update configuration.
             */
            rebootSetting?: string;
        }

    }

    export namespace v20190601 {
        /**
         * The properties of the create advanced schedule monthly occurrence.
         */
        export interface AdvancedScheduleMonthlyOccurrenceResponse {
            /**
             * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
             */
            day?: string;
            /**
             * Occurrence of the week within the month. Must be between 1 and 5
             */
            occurrence?: number;
        }

        /**
         * The properties of the create Advanced Schedule.
         */
        export interface AdvancedScheduleResponse {
            /**
             * Days of the month that the job should execute on. Must be between 1 and 31.
             */
            monthDays?: number[];
            /**
             * Occurrences of days within a month.
             */
            monthlyOccurrences?: v20190601.AdvancedScheduleMonthlyOccurrenceResponse[];
            /**
             * Days of the week that the job should execute on.
             */
            weekDays?: string[];
        }

        /**
         * Azure query for the update configuration.
         */
        export interface AzureQueryPropertiesResponse {
            /**
             * List of locations to scope the query to.
             */
            locations?: string[];
            /**
             * List of Subscription or Resource Group ARM Ids.
             */
            scope?: string[];
            /**
             * Tag settings for the VM.
             */
            tagSettings?: v20190601.TagSettingsPropertiesResponse;
        }

        /**
         * Error response of an operation failure
         */
        export interface ErrorResponseResponse {
            /**
             * Error code
             */
            code?: string;
            /**
             * Error message indicating why the operation failed.
             */
            message?: string;
        }

        /**
         * Linux specific update configuration.
         */
        export interface LinuxPropertiesResponse {
            /**
             * packages excluded from the software update configuration.
             */
            excludedPackageNameMasks?: string[];
            /**
             * Update classifications included in the software update configuration.
             */
            includedPackageClassifications?: string;
            /**
             * packages included from the software update configuration.
             */
            includedPackageNameMasks?: string[];
            /**
             * Reboot setting for the software update configuration.
             */
            rebootSetting?: string;
        }

        /**
         * Non Azure query for the update configuration.
         */
        export interface NonAzureQueryPropertiesResponse {
            /**
             * Log Analytics Saved Search name.
             */
            functionAlias?: string;
            /**
             * Workspace Id for Log Analytics in which the saved Search is resided.
             */
            workspaceId?: string;
        }

        /**
         * Definition of schedule parameters.
         */
        export interface SUCSchedulePropertiesResponse {
            /**
             * Gets or sets the advanced schedule.
             */
            advancedSchedule?: v20190601.AdvancedScheduleResponse;
            /**
             * Gets or sets the creation time.
             */
            creationTime?: string;
            /**
             * Gets or sets the description.
             */
            description?: string;
            /**
             * Gets or sets the end time of the schedule.
             */
            expiryTime?: string;
            /**
             * Gets or sets the expiry time's offset in minutes.
             */
            expiryTimeOffsetMinutes?: number;
            /**
             * Gets or sets the frequency of the schedule.
             */
            frequency?: string;
            /**
             * Gets or sets the interval of the schedule.
             */
            interval?: number;
            /**
             * Gets or sets a value indicating whether this schedule is enabled.
             */
            isEnabled?: boolean;
            /**
             * Gets or sets the last modified time.
             */
            lastModifiedTime?: string;
            /**
             * Gets or sets the next run time of the schedule.
             */
            nextRun?: string;
            /**
             * Gets or sets the next run time's offset in minutes.
             */
            nextRunOffsetMinutes?: number;
            /**
             * Gets or sets the start time of the schedule.
             */
            startTime?: string;
            /**
             * Gets the start time's offset in minutes.
             */
            startTimeOffsetMinutes: number;
            /**
             * Gets or sets the time zone of the schedule.
             */
            timeZone?: string;
        }
        /**
         * sucschedulePropertiesResponseProvideDefaults sets the appropriate defaults for SUCSchedulePropertiesResponse
         */
        export function sucschedulePropertiesResponseProvideDefaults(val: SUCSchedulePropertiesResponse): SUCSchedulePropertiesResponse {
            return {
                ...val,
                isEnabled: (val.isEnabled) ?? false,
            };
        }

        /**
         * Task properties of the software update configuration.
         */
        export interface SoftwareUpdateConfigurationTasksResponse {
            /**
             * Post task properties.
             */
            postTask?: v20190601.TaskPropertiesResponse;
            /**
             * Pre task properties.
             */
            preTask?: v20190601.TaskPropertiesResponse;
        }

        /**
         * Tag filter information for the VM.
         */
        export interface TagSettingsPropertiesResponse {
            /**
             * Filter VMs by Any or All specified tags.
             */
            filterOperator?: string;
            /**
             * Dictionary of tags with its list of values.
             */
            tags?: {[key: string]: string[]};
        }

        /**
         * Group specific to the update configuration.
         */
        export interface TargetPropertiesResponse {
            /**
             * List of Azure queries in the software update configuration.
             */
            azureQueries?: v20190601.AzureQueryPropertiesResponse[];
            /**
             * List of non Azure queries in the software update configuration.
             */
            nonAzureQueries?: v20190601.NonAzureQueryPropertiesResponse[];
        }

        /**
         * Task properties of the software update configuration.
         */
        export interface TaskPropertiesResponse {
            /**
             * Gets or sets the parameters of the task.
             */
            parameters?: {[key: string]: string};
            /**
             * Gets or sets the name of the runbook.
             */
            source?: string;
        }

        /**
         * Update specific properties of the software update configuration.
         */
        export interface UpdateConfigurationResponse {
            /**
             * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
             */
            azureVirtualMachines?: string[];
            /**
             * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
             */
            duration?: string;
            /**
             * Linux specific update configuration.
             */
            linux?: v20190601.LinuxPropertiesResponse;
            /**
             * List of names of non-azure machines targeted by the software update configuration.
             */
            nonAzureComputerNames?: string[];
            /**
             * operating system of target machines
             */
            operatingSystem: string;
            /**
             * Group targets for the software update configuration.
             */
            targets?: v20190601.TargetPropertiesResponse;
            /**
             * Windows specific update configuration.
             */
            windows?: v20190601.WindowsPropertiesResponse;
        }

        /**
         * Windows specific update configuration.
         */
        export interface WindowsPropertiesResponse {
            /**
             * KB numbers excluded from the software update configuration.
             */
            excludedKbNumbers?: string[];
            /**
             * KB numbers included from the software update configuration.
             */
            includedKbNumbers?: string[];
            /**
             * Update classification included in the software update configuration. A comma separated string with required values
             */
            includedUpdateClassifications?: string;
            /**
             * Reboot setting for the software update configuration.
             */
            rebootSetting?: string;
        }

    }

    export namespace v20200113preview {
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
         * Connection State of the Private Endpoint Connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyResponse {
            /**
             * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
             */
            actionsRequired: string;
            /**
             * The private link service connection description.
             */
            description?: string;
            /**
             * The private link service connection status.
             */
            status?: string;
        }

    }

    export namespace v20210622 {
        /**
         * Definition of hybrid runbook worker Legacy.
         */
        export interface HybridRunbookWorkerLegacyResponse {
            /**
             * Gets or sets the assigned machine IP address.
             */
            ip?: string;
            /**
             * Last Heartbeat from the Worker
             */
            lastSeenDateTime?: string;
            /**
             * Gets or sets the worker machine name.
             */
            name?: string;
            /**
             * Gets or sets the registration time of the worker machine.
             */
            registrationTime?: string;
        }

        /**
         * Definition of RunAs credential to use for hybrid worker.
         */
        export interface RunAsCredentialAssociationPropertyResponse {
            /**
             * Gets or sets the name of the credential.
             */
            name?: string;
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

    export namespace v20220808 {
        /**
         * The properties of the create advanced schedule monthly occurrence.
         */
        export interface AdvancedScheduleMonthlyOccurrenceResponse {
            /**
             * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
             */
            day?: string;
            /**
             * Occurrence of the week within the month. Must be between 1 and 5
             */
            occurrence?: number;
        }

        /**
         * The properties of the create Advanced Schedule.
         */
        export interface AdvancedScheduleResponse {
            /**
             * Days of the month that the job should execute on. Must be between 1 and 31.
             */
            monthDays?: number[];
            /**
             * Occurrences of days within a month.
             */
            monthlyOccurrences?: v20220808.AdvancedScheduleMonthlyOccurrenceResponse[];
            /**
             * Days of the week that the job should execute on.
             */
            weekDays?: string[];
        }

        /**
         * The connection type property associated with the entity.
         */
        export interface ConnectionTypeAssociationPropertyResponse {
            /**
             * Gets or sets the name of the connection type.
             */
            name?: string;
        }

        /**
         * Definition of the runbook property type.
         */
        export interface ContentHashResponse {
            /**
             * Gets or sets the content hash algorithm used to hash the content.
             */
            algorithm: string;
            /**
             * Gets or sets expected hash value of the content.
             */
            value: string;
        }

        /**
         * Definition of the content link.
         */
        export interface ContentLinkResponse {
            /**
             * Gets or sets the hash.
             */
            contentHash?: v20220808.ContentHashResponse;
            /**
             * Gets or sets the uri of the runbook content.
             */
            uri?: string;
            /**
             * Gets or sets the version of the content.
             */
            version?: string;
        }

        /**
         * Definition of the content source.
         */
        export interface ContentSourceResponse {
            /**
             * Gets or sets the hash.
             */
            hash?: v20220808.ContentHashResponse;
            /**
             * Gets or sets the content source type.
             */
            type?: string;
            /**
             * Gets or sets the value of the content. This is based on the content source type.
             */
            value?: string;
            /**
             * Gets or sets the version of the content.
             */
            version?: string;
        }

        /**
         * The Dsc configuration property associated with the entity.
         */
        export interface DscConfigurationAssociationPropertyResponse {
            /**
             * Gets or sets the name of the Dsc configuration.
             */
            name?: string;
        }

        /**
         * Definition of the configuration parameter type.
         */
        export interface DscConfigurationParameterResponse {
            /**
             * Gets or sets the default value of parameter.
             */
            defaultValue?: string;
            /**
             * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
             */
            isMandatory?: boolean;
            /**
             * Get or sets the position of the parameter.
             */
            position?: number;
            /**
             * Gets or sets the type of the parameter.
             */
            type?: string;
        }

        /**
         * The encryption settings for automation account
         */
        export interface EncryptionPropertiesResponse {
            /**
             * User identity used for CMK.
             */
            identity?: v20220808.EncryptionPropertiesResponseIdentity;
            /**
             * Encryption Key Source
             */
            keySource?: string;
            /**
             * Key vault properties.
             */
            keyVaultProperties?: v20220808.KeyVaultPropertiesResponse;
        }

        /**
         * User identity used for CMK.
         */
        export interface EncryptionPropertiesResponseIdentity {
            /**
             * The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentity?: any;
        }

        /**
         * Definition of the connection fields.
         */
        export interface FieldDefinitionResponse {
            /**
             * Gets or sets the isEncrypted flag of the connection field definition.
             */
            isEncrypted?: boolean;
            /**
             * Gets or sets the isOptional flag of the connection field definition.
             */
            isOptional?: boolean;
            /**
             * Gets or sets the type of the connection field definition.
             */
            type: string;
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
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20220808.UserAssignedIdentitiesPropertiesResponse};
        }

        /**
         * Automation key which is used to register a DSC Node
         */
        export interface KeyResponse {
            /**
             * Automation key name.
             */
            keyName: string;
            /**
             * Automation key permissions.
             */
            permissions: string;
            /**
             * Value of the Automation Key used for registration.
             */
            value: string;
        }

        /**
         * Settings concerning key vault encryption for a configuration store.
         */
        export interface KeyVaultPropertiesResponse {
            /**
             * The name of key used to encrypt data.
             */
            keyName?: string;
            /**
             * The key version of the key used to encrypt data.
             */
            keyVersion?: string;
            /**
             * The URI of the key vault key used to encrypt data.
             */
            keyvaultUri?: string;
        }

        /**
         * Definition of the module error info type.
         */
        export interface ModuleErrorInfoResponse {
            /**
             * Gets or sets the error code.
             */
            code?: string;
            /**
             * Gets or sets the error message.
             */
            message?: string;
        }

        /**
         * A private endpoint connection
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Gets the groupIds.
             */
            groupIds?: string[];
            /**
             * Fully qualified resource Id for the resource
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Private endpoint which the connection belongs to.
             */
            privateEndpoint?: v20220808.PrivateEndpointPropertyResponse;
            /**
             * Connection State of the Private Endpoint Connection.
             */
            privateLinkServiceConnectionState?: v20220808.PrivateLinkServiceConnectionStatePropertyResponse;
            /**
             * The type of the resource.
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
         * Connection State of the Private Endpoint Connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyResponse {
            /**
             * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
             */
            actionsRequired: string;
            /**
             * The private link service connection description.
             */
            description?: string;
            /**
             * The private link service connection status.
             */
            status?: string;
        }

        /**
         * Definition of RunAs credential to use for hybrid worker.
         */
        export interface RunAsCredentialAssociationPropertyResponse {
            /**
             * Gets or sets the name of the credential.
             */
            name?: string;
        }

        /**
         * The runbook property associated with the entity.
         */
        export interface RunbookAssociationPropertyResponse {
            /**
             * Gets or sets the name of the runbook.
             */
            name?: string;
        }

        export interface RunbookDraftResponse {
            /**
             * Gets or sets the creation time of the runbook draft.
             */
            creationTime?: string;
            /**
             * Gets or sets the draft runbook content link.
             */
            draftContentLink?: v20220808.ContentLinkResponse;
            /**
             * Gets or sets whether runbook is in edit mode.
             */
            inEdit?: boolean;
            /**
             * Gets or sets the last modified time of the runbook draft.
             */
            lastModifiedTime?: string;
            /**
             * Gets or sets the runbook output types.
             */
            outputTypes?: string[];
            /**
             * Gets or sets the runbook draft parameters.
             */
            parameters?: {[key: string]: v20220808.RunbookParameterResponse};
        }

        /**
         * Definition of the runbook parameter type.
         */
        export interface RunbookParameterResponse {
            /**
             * Gets or sets the default value of parameter.
             */
            defaultValue?: string;
            /**
             * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
             */
            isMandatory?: boolean;
            /**
             * Get or sets the position of the parameter.
             */
            position?: number;
            /**
             * Gets or sets the type of the parameter.
             */
            type?: string;
        }

        /**
         * The schedule property associated with the entity.
         */
        export interface ScheduleAssociationPropertyResponse {
            /**
             * Gets or sets the name of the Schedule.
             */
            name?: string;
        }

        /**
         * The account SKU.
         */
        export interface SkuResponse {
            /**
             * Gets or sets the SKU capacity.
             */
            capacity?: number;
            /**
             * Gets or sets the SKU family.
             */
            family?: string;
            /**
             * Gets or sets the SKU name of the account.
             */
            name: string;
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

        export interface UserAssignedIdentitiesPropertiesResponse {
            /**
             * The client id of user assigned identity.
             */
            clientId: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId: string;
        }

    }
}
