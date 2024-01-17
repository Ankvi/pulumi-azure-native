import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Maintenance configuration record type
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2023-04-01, 2023-09-01-preview, 2023-10-01-preview.
 */
export function getMaintenanceConfiguration(args: GetMaintenanceConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetMaintenanceConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maintenance:getMaintenanceConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetMaintenanceConfigurationArgs {
    /**
     * Resource Group Name
     */
    resourceGroupName: string;
    /**
     * Maintenance Configuration Name
     */
    resourceName: string;
}

/**
 * Maintenance configuration record type
 */
export interface GetMaintenanceConfigurationResult {
    /**
     * Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00.
     */
    readonly duration?: string;
    /**
     * Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
     */
    readonly expirationDateTime?: string;
    /**
     * Gets or sets extensionProperties of the maintenanceConfiguration
     */
    readonly extensionProperties?: {[key: string]: string};
    /**
     * Fully qualified identifier of the resource
     */
    readonly id: string;
    /**
     * The input parameters to be passed to the patch run operation.
     */
    readonly installPatches?: types.outputs.InputPatchConfigurationResponse;
    /**
     * Gets or sets location of the resource
     */
    readonly location?: string;
    /**
     * Gets or sets maintenanceScope of the configuration
     */
    readonly maintenanceScope?: string;
    /**
     * Name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets namespace of the resource
     */
    readonly namespace?: string;
    /**
     * Override Properties for the maintenance Configuration.
     */
    readonly overrides?: types.outputs.MaintenanceOverridePropertiesResponse[];
    /**
     * Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6.
     */
    readonly recurEvery?: string;
    /**
     * Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
     */
    readonly startDateTime?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets or sets tags of the resource
     */
    readonly tags?: {[key: string]: string};
    /**
     * Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.
     */
    readonly timeZone?: string;
    /**
     * Type of the resource
     */
    readonly type: string;
    /**
     * Gets or sets the visibility of the configuration. The default value is 'Custom'
     */
    readonly visibility?: string;
}
/**
 * Maintenance configuration record type
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2023-04-01, 2023-09-01-preview, 2023-10-01-preview.
 */
export function getMaintenanceConfigurationOutput(args: GetMaintenanceConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMaintenanceConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getMaintenanceConfiguration(a, opts))
}

export interface GetMaintenanceConfigurationOutputArgs {
    /**
     * Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Maintenance Configuration Name
     */
    resourceName: pulumi.Input<string>;
}
