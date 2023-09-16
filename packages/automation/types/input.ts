import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace automation {
    /**
     * The properties of the create Advanced Schedule.
     */
    export interface AdvancedScheduleArgs {
        /**
         * Days of the month that the job should execute on. Must be between 1 and 31.
         */
        monthDays?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * Occurrences of days within a month.
         */
        monthlyOccurrences?: pulumi.Input<pulumi.Input<AdvancedScheduleMonthlyOccurrenceArgs>[]>;
        /**
         * Days of the week that the job should execute on.
         */
        weekDays?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The properties of the create advanced schedule monthly occurrence.
     */
    export interface AdvancedScheduleMonthlyOccurrenceArgs {
        /**
         * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
         */
        day?: pulumi.Input<string | enums.ScheduleDay>;
        /**
         * Occurrence of the week within the month. Must be between 1 and 5
         */
        occurrence?: pulumi.Input<number>;
    }

    /**
     * Azure query for the update configuration.
     */
    export interface AzureQueryPropertiesArgs {
        /**
         * List of locations to scope the query to.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of Subscription or Resource Group ARM Ids.
         */
        scope?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Tag settings for the VM.
         */
        tagSettings?: pulumi.Input<TagSettingsPropertiesArgs>;
    }

    /**
     * The connection type property associated with the entity.
     */
    export interface ConnectionTypeAssociationPropertyArgs {
        /**
         * Gets or sets the name of the connection type.
         */
        name?: pulumi.Input<string>;
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
        contentHash?: pulumi.Input<ContentHashArgs>;
        /**
         * Gets or sets the uri of the runbook content.
         */
        uri?: pulumi.Input<string>;
        /**
         * Gets or sets the version of the content.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Definition of the content source.
     */
    export interface ContentSourceArgs {
        /**
         * Gets or sets the hash.
         */
        hash?: pulumi.Input<ContentHashArgs>;
        /**
         * Gets or sets the content source type.
         */
        type?: pulumi.Input<string | enums.ContentSourceType>;
        /**
         * Gets or sets the value of the content. This is based on the content source type.
         */
        value?: pulumi.Input<string>;
        /**
         * Gets or sets the version of the content.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * The Dsc configuration property associated with the entity.
     */
    export interface DscConfigurationAssociationPropertyArgs {
        /**
         * Gets or sets the name of the Dsc configuration.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Definition of the configuration parameter type.
     */
    export interface DscConfigurationParameterArgs {
        /**
         * Gets or sets the default value of parameter.
         */
        defaultValue?: pulumi.Input<string>;
        /**
         * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
         */
        isMandatory?: pulumi.Input<boolean>;
        /**
         * Get or sets the position of the parameter.
         */
        position?: pulumi.Input<number>;
        /**
         * Gets or sets the type of the parameter.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * The encryption settings for automation account
     */
    export interface EncryptionPropertiesArgs {
        /**
         * User identity used for CMK.
         */
        identity?: pulumi.Input<EncryptionPropertiesIdentityArgs>;
        /**
         * Encryption Key Source
         */
        keySource?: pulumi.Input<enums.EncryptionKeySourceType>;
        /**
         * Key vault properties.
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
    }

    /**
     * User identity used for CMK.
     */
    export interface EncryptionPropertiesIdentityArgs {
        /**
         * The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentity?: any;
    }

    /**
     * Error response of an operation failure
     */
    export interface ErrorResponseArgs {
        /**
         * Error code
         */
        code?: pulumi.Input<string>;
        /**
         * Error message indicating why the operation failed.
         */
        message?: pulumi.Input<string>;
    }

    /**
     * Definition of the connection fields.
     */
    export interface FieldDefinitionArgs {
        /**
         * Gets or sets the isEncrypted flag of the connection field definition.
         */
        isEncrypted?: pulumi.Input<boolean>;
        /**
         * Gets or sets the isOptional flag of the connection field definition.
         */
        isOptional?: pulumi.Input<boolean>;
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
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Settings concerning key vault encryption for a configuration store.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * The name of key used to encrypt data.
         */
        keyName?: pulumi.Input<string>;
        /**
         * The key version of the key used to encrypt data.
         */
        keyVersion?: pulumi.Input<string>;
        /**
         * The URI of the key vault key used to encrypt data.
         */
        keyvaultUri?: pulumi.Input<string>;
    }

    /**
     * Linux specific update configuration.
     */
    export interface LinuxPropertiesArgs {
        /**
         * packages excluded from the software update configuration.
         */
        excludedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Update classifications included in the software update configuration.
         */
        includedPackageClassifications?: pulumi.Input<string | enums.LinuxUpdateClasses>;
        /**
         * packages included from the software update configuration.
         */
        includedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Reboot setting for the software update configuration.
         */
        rebootSetting?: pulumi.Input<string>;
    }

    /**
     * Non Azure query for the update configuration.
     */
    export interface NonAzureQueryPropertiesArgs {
        /**
         * Log Analytics Saved Search name.
         */
        functionAlias?: pulumi.Input<string>;
        /**
         * Workspace Id for Log Analytics in which the saved Search is resided.
         */
        workspaceId?: pulumi.Input<string>;
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
     * Connection State of the Private Endpoint Connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyArgs {
        /**
         * The private link service connection description.
         */
        description?: pulumi.Input<string>;
        /**
         * The private link service connection status.
         */
        status?: pulumi.Input<string>;
    }

    /**
     * Definition of RunAs credential to use for hybrid worker.
     */
    export interface RunAsCredentialAssociationPropertyArgs {
        /**
         * Gets or sets the name of the credential.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The runbook property associated with the entity.
     */
    export interface RunbookAssociationPropertyArgs {
        /**
         * Gets or sets the name of the runbook.
         */
        name?: pulumi.Input<string>;
    }

    export interface RunbookDraftArgs {
        /**
         * Gets or sets the creation time of the runbook draft.
         */
        creationTime?: pulumi.Input<string>;
        /**
         * Gets or sets the draft runbook content link.
         */
        draftContentLink?: pulumi.Input<ContentLinkArgs>;
        /**
         * Gets or sets whether runbook is in edit mode.
         */
        inEdit?: pulumi.Input<boolean>;
        /**
         * Gets or sets the last modified time of the runbook draft.
         */
        lastModifiedTime?: pulumi.Input<string>;
        /**
         * Gets or sets the runbook output types.
         */
        outputTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Gets or sets the runbook draft parameters.
         */
        parameters?: pulumi.Input<{[key: string]: pulumi.Input<RunbookParameterArgs>}>;
    }

    /**
     * Definition of the runbook parameter type.
     */
    export interface RunbookParameterArgs {
        /**
         * Gets or sets the default value of parameter.
         */
        defaultValue?: pulumi.Input<string>;
        /**
         * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
         */
        isMandatory?: pulumi.Input<boolean>;
        /**
         * Get or sets the position of the parameter.
         */
        position?: pulumi.Input<number>;
        /**
         * Gets or sets the type of the parameter.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Definition of schedule parameters.
     */
    export interface SUCSchedulePropertiesArgs {
        /**
         * Gets or sets the advanced schedule.
         */
        advancedSchedule?: pulumi.Input<AdvancedScheduleArgs>;
        /**
         * Gets or sets the creation time.
         */
        creationTime?: pulumi.Input<string>;
        /**
         * Gets or sets the description.
         */
        description?: pulumi.Input<string>;
        /**
         * Gets or sets the end time of the schedule.
         */
        expiryTime?: pulumi.Input<string>;
        /**
         * Gets or sets the expiry time's offset in minutes.
         */
        expiryTimeOffsetMinutes?: pulumi.Input<number>;
        /**
         * Gets or sets the frequency of the schedule.
         */
        frequency?: pulumi.Input<string | enums.ScheduleFrequency>;
        /**
         * Gets or sets the interval of the schedule.
         */
        interval?: pulumi.Input<number>;
        /**
         * Gets or sets a value indicating whether this schedule is enabled.
         */
        isEnabled?: pulumi.Input<boolean>;
        /**
         * Gets or sets the last modified time.
         */
        lastModifiedTime?: pulumi.Input<string>;
        /**
         * Gets or sets the next run time of the schedule.
         */
        nextRun?: pulumi.Input<string>;
        /**
         * Gets or sets the next run time's offset in minutes.
         */
        nextRunOffsetMinutes?: pulumi.Input<number>;
        /**
         * Gets or sets the start time of the schedule.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Gets or sets the time zone of the schedule.
         */
        timeZone?: pulumi.Input<string>;
    }
    /**
     * sucschedulePropertiesArgsProvideDefaults sets the appropriate defaults for SUCSchedulePropertiesArgs
     */
    export function sucschedulePropertiesArgsProvideDefaults(val: SUCSchedulePropertiesArgs): SUCSchedulePropertiesArgs {
        return {
            ...val,
            isEnabled: (val.isEnabled) ?? false,
        };
    }

    /**
     * The schedule property associated with the entity.
     */
    export interface ScheduleAssociationPropertyArgs {
        /**
         * Gets or sets the name of the Schedule.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The account SKU.
     */
    export interface SkuArgs {
        /**
         * Gets or sets the SKU capacity.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Gets or sets the SKU family.
         */
        family?: pulumi.Input<string>;
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
        postTask?: pulumi.Input<TaskPropertiesArgs>;
        /**
         * Pre task properties.
         */
        preTask?: pulumi.Input<TaskPropertiesArgs>;
    }

    export interface SourceControlSecurityTokenPropertiesArgs {
        /**
         * The access token.
         */
        accessToken?: pulumi.Input<string>;
        /**
         * The refresh token.
         */
        refreshToken?: pulumi.Input<string>;
        /**
         * The token type. Must be either PersonalAccessToken or Oauth.
         */
        tokenType?: pulumi.Input<string | enums.TokenType>;
    }

    /**
     * Tag filter information for the VM.
     */
    export interface TagSettingsPropertiesArgs {
        /**
         * Filter VMs by Any or All specified tags.
         */
        filterOperator?: pulumi.Input<enums.TagOperators>;
        /**
         * Dictionary of tags with its list of values.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    }

    /**
     * Group specific to the update configuration.
     */
    export interface TargetPropertiesArgs {
        /**
         * List of Azure queries in the software update configuration.
         */
        azureQueries?: pulumi.Input<pulumi.Input<AzureQueryPropertiesArgs>[]>;
        /**
         * List of non Azure queries in the software update configuration.
         */
        nonAzureQueries?: pulumi.Input<pulumi.Input<NonAzureQueryPropertiesArgs>[]>;
    }

    /**
     * Task properties of the software update configuration.
     */
    export interface TaskPropertiesArgs {
        /**
         * Gets or sets the parameters of the task.
         */
        parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the name of the runbook.
         */
        source?: pulumi.Input<string>;
    }

    /**
     * Update specific properties of the software update configuration.
     */
    export interface UpdateConfigurationArgs {
        /**
         * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
         */
        azureVirtualMachines?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
         */
        duration?: pulumi.Input<string>;
        /**
         * Linux specific update configuration.
         */
        linux?: pulumi.Input<LinuxPropertiesArgs>;
        /**
         * List of names of non-azure machines targeted by the software update configuration.
         */
        nonAzureComputerNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * operating system of target machines
         */
        operatingSystem: pulumi.Input<enums.OperatingSystemType>;
        /**
         * Group targets for the software update configuration.
         */
        targets?: pulumi.Input<TargetPropertiesArgs>;
        /**
         * Windows specific update configuration.
         */
        windows?: pulumi.Input<WindowsPropertiesArgs>;
    }

    /**
     * Windows specific update configuration.
     */
    export interface WindowsPropertiesArgs {
        /**
         * KB numbers excluded from the software update configuration.
         */
        excludedKbNumbers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * KB numbers included from the software update configuration.
         */
        includedKbNumbers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Update classification included in the software update configuration. A comma separated string with required values
         */
        includedUpdateClassifications?: pulumi.Input<string | enums.WindowsUpdateClasses>;
        /**
         * Reboot setting for the software update configuration.
         */
        rebootSetting?: pulumi.Input<string>;
    }

    export namespace v20151031 {
        /**
         * The runbook property associated with the entity.
         */
        export interface RunbookAssociationPropertyArgs {
            /**
             * Gets or sets the name of the runbook.
             */
            name?: pulumi.Input<string>;
        }

    }

    export namespace v20170515preview {
        /**
         * The properties of the create Advanced Schedule.
         */
        export interface AdvancedScheduleArgs {
            /**
             * Days of the month that the job should execute on. Must be between 1 and 31.
             */
            monthDays?: pulumi.Input<pulumi.Input<number>[]>;
            /**
             * Occurrences of days within a month.
             */
            monthlyOccurrences?: pulumi.Input<pulumi.Input<v20170515preview.AdvancedScheduleMonthlyOccurrenceArgs>[]>;
            /**
             * Days of the week that the job should execute on.
             */
            weekDays?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The properties of the create advanced schedule monthly occurrence.
         */
        export interface AdvancedScheduleMonthlyOccurrenceArgs {
            /**
             * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
             */
            day?: pulumi.Input<string | enums.v20170515preview.ScheduleDay>;
            /**
             * Occurrence of the week within the month. Must be between 1 and 5
             */
            occurrence?: pulumi.Input<number>;
        }

        /**
         * Azure query for the update configuration.
         */
        export interface AzureQueryPropertiesArgs {
            /**
             * List of locations to scope the query to.
             */
            locations?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of Subscription or Resource Group ARM Ids.
             */
            scope?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Tag settings for the VM.
             */
            tagSettings?: pulumi.Input<v20170515preview.TagSettingsPropertiesArgs>;
        }

        /**
         * Error response of an operation failure
         */
        export interface ErrorResponseArgs {
            /**
             * Error code
             */
            code?: pulumi.Input<string>;
            /**
             * Error message indicating why the operation failed.
             */
            message?: pulumi.Input<string>;
        }

        /**
         * Linux specific update configuration.
         */
        export interface LinuxPropertiesArgs {
            /**
             * packages excluded from the software update configuration.
             */
            excludedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Update classifications included in the software update configuration.
             */
            includedPackageClassifications?: pulumi.Input<string | enums.v20170515preview.LinuxUpdateClasses>;
            /**
             * packages included from the software update configuration.
             */
            includedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Reboot setting for the software update configuration.
             */
            rebootSetting?: pulumi.Input<string>;
        }

        /**
         * Non Azure query for the update configuration.
         */
        export interface NonAzureQueryPropertiesArgs {
            /**
             * Log Analytics Saved Search name.
             */
            functionAlias?: pulumi.Input<string>;
            /**
             * Workspace Id for Log Analytics in which the saved Search is resided.
             */
            workspaceId?: pulumi.Input<string>;
        }

        /**
         * Definition of schedule parameters.
         */
        export interface SchedulePropertiesArgs {
            /**
             * Gets or sets the advanced schedule.
             */
            advancedSchedule?: pulumi.Input<v20170515preview.AdvancedScheduleArgs>;
            /**
             * Gets or sets the creation time.
             */
            creationTime?: pulumi.Input<string>;
            /**
             * Gets or sets the description.
             */
            description?: pulumi.Input<string>;
            /**
             * Gets or sets the end time of the schedule.
             */
            expiryTime?: pulumi.Input<string>;
            /**
             * Gets or sets the expiry time's offset in minutes.
             */
            expiryTimeOffsetMinutes?: pulumi.Input<number>;
            /**
             * Gets or sets the frequency of the schedule.
             */
            frequency?: pulumi.Input<string | enums.v20170515preview.ScheduleFrequency>;
            /**
             * Gets or sets the interval of the schedule.
             */
            interval?: pulumi.Input<number>;
            /**
             * Gets or sets a value indicating whether this schedule is enabled.
             */
            isEnabled?: pulumi.Input<boolean>;
            /**
             * Gets or sets the last modified time.
             */
            lastModifiedTime?: pulumi.Input<string>;
            /**
             * Gets or sets the next run time of the schedule.
             */
            nextRun?: pulumi.Input<string>;
            /**
             * Gets or sets the next run time's offset in minutes.
             */
            nextRunOffsetMinutes?: pulumi.Input<number>;
            /**
             * Gets or sets the start time of the schedule.
             */
            startTime?: pulumi.Input<string>;
            /**
             * Gets or sets the time zone of the schedule.
             */
            timeZone?: pulumi.Input<string>;
        }
        /**
         * schedulePropertiesArgsProvideDefaults sets the appropriate defaults for SchedulePropertiesArgs
         */
        export function schedulePropertiesArgsProvideDefaults(val: SchedulePropertiesArgs): SchedulePropertiesArgs {
            return {
                ...val,
                isEnabled: (val.isEnabled) ?? false,
            };
        }

        /**
         * Task properties of the software update configuration.
         */
        export interface SoftwareUpdateConfigurationTasksArgs {
            /**
             * Post task properties.
             */
            postTask?: pulumi.Input<v20170515preview.TaskPropertiesArgs>;
            /**
             * Pre task properties.
             */
            preTask?: pulumi.Input<v20170515preview.TaskPropertiesArgs>;
        }

        /**
         * Tag filter information for the VM.
         */
        export interface TagSettingsPropertiesArgs {
            /**
             * Filter VMs by Any or All specified tags.
             */
            filterOperator?: pulumi.Input<enums.v20170515preview.TagOperators>;
            /**
             * Dictionary of tags with its list of values.
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
        }

        /**
         * Group specific to the update configuration.
         */
        export interface TargetPropertiesArgs {
            /**
             * List of Azure queries in the software update configuration.
             */
            azureQueries?: pulumi.Input<pulumi.Input<v20170515preview.AzureQueryPropertiesArgs>[]>;
            /**
             * List of non Azure queries in the software update configuration.
             */
            nonAzureQueries?: pulumi.Input<pulumi.Input<v20170515preview.NonAzureQueryPropertiesArgs>[]>;
        }

        /**
         * Task properties of the software update configuration.
         */
        export interface TaskPropertiesArgs {
            /**
             * Gets or sets the parameters of the task.
             */
            parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Gets or sets the name of the runbook.
             */
            source?: pulumi.Input<string>;
        }

        /**
         * Update specific properties of the software update configuration.
         */
        export interface UpdateConfigurationArgs {
            /**
             * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
             */
            azureVirtualMachines?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
             */
            duration?: pulumi.Input<string>;
            /**
             * Linux specific update configuration.
             */
            linux?: pulumi.Input<v20170515preview.LinuxPropertiesArgs>;
            /**
             * List of names of non-azure machines targeted by the software update configuration.
             */
            nonAzureComputerNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * operating system of target machines
             */
            operatingSystem: pulumi.Input<enums.v20170515preview.OperatingSystemType>;
            /**
             * Group targets for the software update configuration.
             */
            targets?: pulumi.Input<v20170515preview.TargetPropertiesArgs>;
            /**
             * Windows specific update configuration.
             */
            windows?: pulumi.Input<v20170515preview.WindowsPropertiesArgs>;
        }

        /**
         * Windows specific update configuration.
         */
        export interface WindowsPropertiesArgs {
            /**
             * KB numbers excluded from the software update configuration.
             */
            excludedKbNumbers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * KB numbers included from the software update configuration.
             */
            includedKbNumbers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Update classification included in the software update configuration. A comma separated string with required values
             */
            includedUpdateClassifications?: pulumi.Input<string | enums.v20170515preview.WindowsUpdateClasses>;
            /**
             * Reboot setting for the software update configuration.
             */
            rebootSetting?: pulumi.Input<string>;
        }

    }

    export namespace v20190601 {
        /**
         * The properties of the create Advanced Schedule.
         */
        export interface AdvancedScheduleArgs {
            /**
             * Days of the month that the job should execute on. Must be between 1 and 31.
             */
            monthDays?: pulumi.Input<pulumi.Input<number>[]>;
            /**
             * Occurrences of days within a month.
             */
            monthlyOccurrences?: pulumi.Input<pulumi.Input<v20190601.AdvancedScheduleMonthlyOccurrenceArgs>[]>;
            /**
             * Days of the week that the job should execute on.
             */
            weekDays?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The properties of the create advanced schedule monthly occurrence.
         */
        export interface AdvancedScheduleMonthlyOccurrenceArgs {
            /**
             * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
             */
            day?: pulumi.Input<string | enums.v20190601.ScheduleDay>;
            /**
             * Occurrence of the week within the month. Must be between 1 and 5
             */
            occurrence?: pulumi.Input<number>;
        }

        /**
         * Azure query for the update configuration.
         */
        export interface AzureQueryPropertiesArgs {
            /**
             * List of locations to scope the query to.
             */
            locations?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of Subscription or Resource Group ARM Ids.
             */
            scope?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Tag settings for the VM.
             */
            tagSettings?: pulumi.Input<v20190601.TagSettingsPropertiesArgs>;
        }

        /**
         * Error response of an operation failure
         */
        export interface ErrorResponseArgs {
            /**
             * Error code
             */
            code?: pulumi.Input<string>;
            /**
             * Error message indicating why the operation failed.
             */
            message?: pulumi.Input<string>;
        }

        /**
         * Linux specific update configuration.
         */
        export interface LinuxPropertiesArgs {
            /**
             * packages excluded from the software update configuration.
             */
            excludedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Update classifications included in the software update configuration.
             */
            includedPackageClassifications?: pulumi.Input<string | enums.v20190601.LinuxUpdateClasses>;
            /**
             * packages included from the software update configuration.
             */
            includedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Reboot setting for the software update configuration.
             */
            rebootSetting?: pulumi.Input<string>;
        }

        /**
         * Non Azure query for the update configuration.
         */
        export interface NonAzureQueryPropertiesArgs {
            /**
             * Log Analytics Saved Search name.
             */
            functionAlias?: pulumi.Input<string>;
            /**
             * Workspace Id for Log Analytics in which the saved Search is resided.
             */
            workspaceId?: pulumi.Input<string>;
        }

        /**
         * Definition of schedule parameters.
         */
        export interface SUCSchedulePropertiesArgs {
            /**
             * Gets or sets the advanced schedule.
             */
            advancedSchedule?: pulumi.Input<v20190601.AdvancedScheduleArgs>;
            /**
             * Gets or sets the creation time.
             */
            creationTime?: pulumi.Input<string>;
            /**
             * Gets or sets the description.
             */
            description?: pulumi.Input<string>;
            /**
             * Gets or sets the end time of the schedule.
             */
            expiryTime?: pulumi.Input<string>;
            /**
             * Gets or sets the expiry time's offset in minutes.
             */
            expiryTimeOffsetMinutes?: pulumi.Input<number>;
            /**
             * Gets or sets the frequency of the schedule.
             */
            frequency?: pulumi.Input<string | enums.v20190601.ScheduleFrequency>;
            /**
             * Gets or sets the interval of the schedule.
             */
            interval?: pulumi.Input<number>;
            /**
             * Gets or sets a value indicating whether this schedule is enabled.
             */
            isEnabled?: pulumi.Input<boolean>;
            /**
             * Gets or sets the last modified time.
             */
            lastModifiedTime?: pulumi.Input<string>;
            /**
             * Gets or sets the next run time of the schedule.
             */
            nextRun?: pulumi.Input<string>;
            /**
             * Gets or sets the next run time's offset in minutes.
             */
            nextRunOffsetMinutes?: pulumi.Input<number>;
            /**
             * Gets or sets the start time of the schedule.
             */
            startTime?: pulumi.Input<string>;
            /**
             * Gets or sets the time zone of the schedule.
             */
            timeZone?: pulumi.Input<string>;
        }
        /**
         * sucschedulePropertiesArgsProvideDefaults sets the appropriate defaults for SUCSchedulePropertiesArgs
         */
        export function sucschedulePropertiesArgsProvideDefaults(val: SUCSchedulePropertiesArgs): SUCSchedulePropertiesArgs {
            return {
                ...val,
                isEnabled: (val.isEnabled) ?? false,
            };
        }

        /**
         * Task properties of the software update configuration.
         */
        export interface SoftwareUpdateConfigurationTasksArgs {
            /**
             * Post task properties.
             */
            postTask?: pulumi.Input<v20190601.TaskPropertiesArgs>;
            /**
             * Pre task properties.
             */
            preTask?: pulumi.Input<v20190601.TaskPropertiesArgs>;
        }

        /**
         * Tag filter information for the VM.
         */
        export interface TagSettingsPropertiesArgs {
            /**
             * Filter VMs by Any or All specified tags.
             */
            filterOperator?: pulumi.Input<enums.v20190601.TagOperators>;
            /**
             * Dictionary of tags with its list of values.
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
        }

        /**
         * Group specific to the update configuration.
         */
        export interface TargetPropertiesArgs {
            /**
             * List of Azure queries in the software update configuration.
             */
            azureQueries?: pulumi.Input<pulumi.Input<v20190601.AzureQueryPropertiesArgs>[]>;
            /**
             * List of non Azure queries in the software update configuration.
             */
            nonAzureQueries?: pulumi.Input<pulumi.Input<v20190601.NonAzureQueryPropertiesArgs>[]>;
        }

        /**
         * Task properties of the software update configuration.
         */
        export interface TaskPropertiesArgs {
            /**
             * Gets or sets the parameters of the task.
             */
            parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Gets or sets the name of the runbook.
             */
            source?: pulumi.Input<string>;
        }

        /**
         * Update specific properties of the software update configuration.
         */
        export interface UpdateConfigurationArgs {
            /**
             * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
             */
            azureVirtualMachines?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
             */
            duration?: pulumi.Input<string>;
            /**
             * Linux specific update configuration.
             */
            linux?: pulumi.Input<v20190601.LinuxPropertiesArgs>;
            /**
             * List of names of non-azure machines targeted by the software update configuration.
             */
            nonAzureComputerNames?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * operating system of target machines
             */
            operatingSystem: pulumi.Input<enums.v20190601.OperatingSystemType>;
            /**
             * Group targets for the software update configuration.
             */
            targets?: pulumi.Input<v20190601.TargetPropertiesArgs>;
            /**
             * Windows specific update configuration.
             */
            windows?: pulumi.Input<v20190601.WindowsPropertiesArgs>;
        }

        /**
         * Windows specific update configuration.
         */
        export interface WindowsPropertiesArgs {
            /**
             * KB numbers excluded from the software update configuration.
             */
            excludedKbNumbers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * KB numbers included from the software update configuration.
             */
            includedKbNumbers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Update classification included in the software update configuration. A comma separated string with required values
             */
            includedUpdateClassifications?: pulumi.Input<string | enums.v20190601.WindowsUpdateClasses>;
            /**
             * Reboot setting for the software update configuration.
             */
            rebootSetting?: pulumi.Input<string>;
        }

    }

    export namespace v20200113preview {
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
         * Connection State of the Private Endpoint Connection.
         */
        export interface PrivateLinkServiceConnectionStatePropertyArgs {
            /**
             * The private link service connection description.
             */
            description?: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status?: pulumi.Input<string>;
        }

    }

    export namespace v20210622 {
        /**
         * Definition of RunAs credential to use for hybrid worker.
         */
        export interface RunAsCredentialAssociationPropertyArgs {
            /**
             * Gets or sets the name of the credential.
             */
            name?: pulumi.Input<string>;
        }

    }

    export namespace v20220808 {
        /**
         * The properties of the create Advanced Schedule.
         */
        export interface AdvancedScheduleArgs {
            /**
             * Days of the month that the job should execute on. Must be between 1 and 31.
             */
            monthDays?: pulumi.Input<pulumi.Input<number>[]>;
            /**
             * Occurrences of days within a month.
             */
            monthlyOccurrences?: pulumi.Input<pulumi.Input<v20220808.AdvancedScheduleMonthlyOccurrenceArgs>[]>;
            /**
             * Days of the week that the job should execute on.
             */
            weekDays?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The properties of the create advanced schedule monthly occurrence.
         */
        export interface AdvancedScheduleMonthlyOccurrenceArgs {
            /**
             * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
             */
            day?: pulumi.Input<string | enums.v20220808.ScheduleDay>;
            /**
             * Occurrence of the week within the month. Must be between 1 and 5
             */
            occurrence?: pulumi.Input<number>;
        }

        /**
         * The connection type property associated with the entity.
         */
        export interface ConnectionTypeAssociationPropertyArgs {
            /**
             * Gets or sets the name of the connection type.
             */
            name?: pulumi.Input<string>;
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
            contentHash?: pulumi.Input<v20220808.ContentHashArgs>;
            /**
             * Gets or sets the uri of the runbook content.
             */
            uri?: pulumi.Input<string>;
            /**
             * Gets or sets the version of the content.
             */
            version?: pulumi.Input<string>;
        }

        /**
         * Definition of the content source.
         */
        export interface ContentSourceArgs {
            /**
             * Gets or sets the hash.
             */
            hash?: pulumi.Input<v20220808.ContentHashArgs>;
            /**
             * Gets or sets the content source type.
             */
            type?: pulumi.Input<string | enums.v20220808.ContentSourceType>;
            /**
             * Gets or sets the value of the content. This is based on the content source type.
             */
            value?: pulumi.Input<string>;
            /**
             * Gets or sets the version of the content.
             */
            version?: pulumi.Input<string>;
        }

        /**
         * The Dsc configuration property associated with the entity.
         */
        export interface DscConfigurationAssociationPropertyArgs {
            /**
             * Gets or sets the name of the Dsc configuration.
             */
            name?: pulumi.Input<string>;
        }

        /**
         * Definition of the configuration parameter type.
         */
        export interface DscConfigurationParameterArgs {
            /**
             * Gets or sets the default value of parameter.
             */
            defaultValue?: pulumi.Input<string>;
            /**
             * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
             */
            isMandatory?: pulumi.Input<boolean>;
            /**
             * Get or sets the position of the parameter.
             */
            position?: pulumi.Input<number>;
            /**
             * Gets or sets the type of the parameter.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * The encryption settings for automation account
         */
        export interface EncryptionPropertiesArgs {
            /**
             * User identity used for CMK.
             */
            identity?: pulumi.Input<v20220808.EncryptionPropertiesIdentityArgs>;
            /**
             * Encryption Key Source
             */
            keySource?: pulumi.Input<enums.v20220808.EncryptionKeySourceType>;
            /**
             * Key vault properties.
             */
            keyVaultProperties?: pulumi.Input<v20220808.KeyVaultPropertiesArgs>;
        }

        /**
         * User identity used for CMK.
         */
        export interface EncryptionPropertiesIdentityArgs {
            /**
             * The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentity?: any;
        }

        /**
         * Definition of the connection fields.
         */
        export interface FieldDefinitionArgs {
            /**
             * Gets or sets the isEncrypted flag of the connection field definition.
             */
            isEncrypted?: pulumi.Input<boolean>;
            /**
             * Gets or sets the isOptional flag of the connection field definition.
             */
            isOptional?: pulumi.Input<boolean>;
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
            type?: pulumi.Input<enums.v20220808.ResourceIdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Settings concerning key vault encryption for a configuration store.
         */
        export interface KeyVaultPropertiesArgs {
            /**
             * The name of key used to encrypt data.
             */
            keyName?: pulumi.Input<string>;
            /**
             * The key version of the key used to encrypt data.
             */
            keyVersion?: pulumi.Input<string>;
            /**
             * The URI of the key vault key used to encrypt data.
             */
            keyvaultUri?: pulumi.Input<string>;
        }

        /**
         * Definition of RunAs credential to use for hybrid worker.
         */
        export interface RunAsCredentialAssociationPropertyArgs {
            /**
             * Gets or sets the name of the credential.
             */
            name?: pulumi.Input<string>;
        }

        /**
         * The runbook property associated with the entity.
         */
        export interface RunbookAssociationPropertyArgs {
            /**
             * Gets or sets the name of the runbook.
             */
            name?: pulumi.Input<string>;
        }

        export interface RunbookDraftArgs {
            /**
             * Gets or sets the creation time of the runbook draft.
             */
            creationTime?: pulumi.Input<string>;
            /**
             * Gets or sets the draft runbook content link.
             */
            draftContentLink?: pulumi.Input<v20220808.ContentLinkArgs>;
            /**
             * Gets or sets whether runbook is in edit mode.
             */
            inEdit?: pulumi.Input<boolean>;
            /**
             * Gets or sets the last modified time of the runbook draft.
             */
            lastModifiedTime?: pulumi.Input<string>;
            /**
             * Gets or sets the runbook output types.
             */
            outputTypes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Gets or sets the runbook draft parameters.
             */
            parameters?: pulumi.Input<{[key: string]: pulumi.Input<v20220808.RunbookParameterArgs>}>;
        }

        /**
         * Definition of the runbook parameter type.
         */
        export interface RunbookParameterArgs {
            /**
             * Gets or sets the default value of parameter.
             */
            defaultValue?: pulumi.Input<string>;
            /**
             * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
             */
            isMandatory?: pulumi.Input<boolean>;
            /**
             * Get or sets the position of the parameter.
             */
            position?: pulumi.Input<number>;
            /**
             * Gets or sets the type of the parameter.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * The schedule property associated with the entity.
         */
        export interface ScheduleAssociationPropertyArgs {
            /**
             * Gets or sets the name of the Schedule.
             */
            name?: pulumi.Input<string>;
        }

        /**
         * The account SKU.
         */
        export interface SkuArgs {
            /**
             * Gets or sets the SKU capacity.
             */
            capacity?: pulumi.Input<number>;
            /**
             * Gets or sets the SKU family.
             */
            family?: pulumi.Input<string>;
            /**
             * Gets or sets the SKU name of the account.
             */
            name: pulumi.Input<string | enums.v20220808.SkuNameEnum>;
        }

        export interface SourceControlSecurityTokenPropertiesArgs {
            /**
             * The access token.
             */
            accessToken?: pulumi.Input<string>;
            /**
             * The refresh token.
             */
            refreshToken?: pulumi.Input<string>;
            /**
             * The token type. Must be either PersonalAccessToken or Oauth.
             */
            tokenType?: pulumi.Input<string | enums.v20220808.TokenType>;
        }

    }
}
