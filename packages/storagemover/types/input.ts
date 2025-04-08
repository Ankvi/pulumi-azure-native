import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Azure Key Vault secret URIs which store the credentials.
 */
export interface AzureKeyVaultSmbCredentialsArgs {
    /**
     * The Azure Key Vault secret URI which stores the password. Use empty string to clean-up existing value.
     */
    passwordUri?: pulumi.Input<string>;
    /**
     * The Credentials type.
     * Expected value is 'AzureKeyVaultSmb'.
     */
    type: pulumi.Input<"AzureKeyVaultSmb">;
    /**
     * The Azure Key Vault secret URI which stores the username. Use empty string to clean-up existing value.
     */
    usernameUri?: pulumi.Input<string>;
}

/**
 * The properties of Azure Storage blob container endpoint.
 */
export interface AzureStorageBlobContainerEndpointPropertiesArgs {
    /**
     * The name of the Storage blob container that is the target destination.
     */
    blobContainerName: pulumi.Input<string>;
    /**
     * A description for the Endpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * The Endpoint resource type.
     * Expected value is 'AzureStorageBlobContainer'.
     */
    endpointType: pulumi.Input<"AzureStorageBlobContainer">;
    /**
     * The Azure Resource ID of the storage account that is the target destination.
     */
    storageAccountResourceId: pulumi.Input<string>;
}

/**
 * The properties of Azure Storage SMB file share endpoint.
 */
export interface AzureStorageSmbFileShareEndpointPropertiesArgs {
    /**
     * A description for the Endpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * The Endpoint resource type.
     * Expected value is 'AzureStorageSmbFileShare'.
     */
    endpointType: pulumi.Input<"AzureStorageSmbFileShare">;
    /**
     * The name of the Azure Storage file share.
     */
    fileShareName: pulumi.Input<string>;
    /**
     * The Azure Resource ID of the storage account.
     */
    storageAccountResourceId: pulumi.Input<string>;
}

/**
 * The properties of NFS share endpoint.
 */
export interface NfsMountEndpointPropertiesArgs {
    /**
     * A description for the Endpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * The Endpoint resource type.
     * Expected value is 'NfsMount'.
     */
    endpointType: pulumi.Input<"NfsMount">;
    /**
     * The directory being exported from the server.
     */
    export: pulumi.Input<string>;
    /**
     * The host name or IP address of the server exporting the file system.
     */
    host: pulumi.Input<string>;
    /**
     * The NFS protocol version.
     */
    nfsVersion?: pulumi.Input<string | enums.NfsVersion>;
}

/**
 * The properties of SMB share endpoint.
 */
export interface SmbMountEndpointPropertiesArgs {
    /**
     * The Azure Key Vault secret URIs which store the required credentials to access the SMB share.
     */
    credentials?: pulumi.Input<AzureKeyVaultSmbCredentialsArgs>;
    /**
     * A description for the Endpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * The Endpoint resource type.
     * Expected value is 'SmbMount'.
     */
    endpointType: pulumi.Input<"SmbMount">;
    /**
     * The host name or IP address of the server exporting the file system.
     */
    host: pulumi.Input<string>;
    /**
     * The name of the SMB share being exported from the server.
     */
    shareName: pulumi.Input<string>;
}

/**
 * The time of day.
 */
export interface TimeArgs {
    /**
     * The hour element of the time. Allowed values range from 0 (start of the selected day) to 24 (end of the selected day). Hour value 24 cannot be combined with any other minute value but 0.
     */
    hour: pulumi.Input<number>;
    /**
     * The minute element of the time. Allowed values are 0 and 30. If not specified, its value defaults to 0.
     */
    minute?: pulumi.Input<number>;
}
/**
 * timeArgsProvideDefaults sets the appropriate defaults for TimeArgs
 */
export function timeArgsProvideDefaults(val: TimeArgs): TimeArgs {
    return {
        ...val,
        minute: (val.minute) ?? 0,
    };
}

/**
 * The WAN-link upload limit schedule. Overlapping recurrences are not allowed.
 */
export interface UploadLimitScheduleArgs {
    /**
     * The set of weekly repeating recurrences of the WAN-link upload limit schedule.
     */
    weeklyRecurrences?: pulumi.Input<pulumi.Input<UploadLimitWeeklyRecurrenceArgs>[]>;
}

/**
 * The weekly recurrence of the WAN-link upload limit schedule. The start time must be earlier in the day than the end time. The recurrence must not span across multiple days.
 */
export interface UploadLimitWeeklyRecurrenceArgs {
    /**
     * The set of days of week for the schedule recurrence. A day must not be specified more than once in a recurrence.
     */
    days: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
    /**
     * The end time of the schedule recurrence. Full hour and 30-minute intervals are supported.
     */
    endTime: pulumi.Input<TimeArgs>;
    /**
     * The WAN-link upload bandwidth (maximum data transfer rate) in megabits per second. Value of 0 indicates no throughput is allowed and any running migration job is effectively paused for the duration of this recurrence. Only data plane operations are governed by this limit. Control plane operations ensure seamless functionality. The agent may exceed this limit with control messages, if necessary.
     */
    limitInMbps: pulumi.Input<number>;
    /**
     * The start time of the schedule recurrence. Full hour and 30-minute intervals are supported.
     */
    startTime: pulumi.Input<TimeArgs>;
}
/**
 * uploadLimitWeeklyRecurrenceArgsProvideDefaults sets the appropriate defaults for UploadLimitWeeklyRecurrenceArgs
 */
export function uploadLimitWeeklyRecurrenceArgsProvideDefaults(val: UploadLimitWeeklyRecurrenceArgs): UploadLimitWeeklyRecurrenceArgs {
    return {
        ...val,
        endTime: pulumi.output(val.endTime).apply(timeArgsProvideDefaults),
        startTime: pulumi.output(val.startTime).apply(timeArgsProvideDefaults),
    };
}
