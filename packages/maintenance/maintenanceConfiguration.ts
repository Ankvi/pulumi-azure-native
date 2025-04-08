import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Maintenance configuration record type
 *
 * Uses Azure REST API version 2023-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-11-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maintenance [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MaintenanceConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing MaintenanceConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MaintenanceConfiguration {
        return new MaintenanceConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:maintenance:MaintenanceConfiguration';

    /**
     * Returns true if the given object is an instance of MaintenanceConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MaintenanceConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MaintenanceConfiguration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00.
     */
    public readonly duration!: pulumi.Output<string | undefined>;
    /**
     * Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
     */
    public readonly expirationDateTime!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets extensionProperties of the maintenanceConfiguration
     */
    public readonly extensionProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The input parameters to be passed to the patch run operation.
     */
    public readonly installPatches!: pulumi.Output<types.outputs.InputPatchConfigurationResponse | undefined>;
    /**
     * Gets or sets location of the resource
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets maintenanceScope of the configuration
     */
    public readonly maintenanceScope!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets namespace of the resource
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6.
     */
    public readonly recurEvery!: pulumi.Output<string | undefined>;
    /**
     * Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
     */
    public readonly startDateTime!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets or sets tags of the resource
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.
     */
    public readonly timeZone!: pulumi.Output<string | undefined>;
    /**
     * Type of the resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets the visibility of the configuration. The default value is 'Custom'
     */
    public readonly visibility!: pulumi.Output<string | undefined>;

    /**
     * Create a MaintenanceConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MaintenanceConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["expirationDateTime"] = args ? args.expirationDateTime : undefined;
            resourceInputs["extensionProperties"] = args ? args.extensionProperties : undefined;
            resourceInputs["installPatches"] = args ? (args.installPatches ? pulumi.output(args.installPatches).apply(types.inputs.inputPatchConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceScope"] = args ? args.maintenanceScope : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["recurEvery"] = args ? args.recurEvery : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["startDateTime"] = args ? args.startDateTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["visibility"] = args ? args.visibility : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["duration"] = undefined /*out*/;
            resourceInputs["expirationDateTime"] = undefined /*out*/;
            resourceInputs["extensionProperties"] = undefined /*out*/;
            resourceInputs["installPatches"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceScope"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespace"] = undefined /*out*/;
            resourceInputs["recurEvery"] = undefined /*out*/;
            resourceInputs["startDateTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeZone"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["visibility"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:maintenance/v20180601preview:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20200401:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20200701preview:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20210401preview:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20210501:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20210901preview:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20220701preview:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20221101preview:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20230401:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20230901preview:MaintenanceConfiguration" }, { type: "azure-native:maintenance/v20231001preview:MaintenanceConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MaintenanceConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MaintenanceConfiguration resource.
 */
export interface MaintenanceConfigurationArgs {
    /**
     * Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00.
     */
    duration?: pulumi.Input<string>;
    /**
     * Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
     */
    expirationDateTime?: pulumi.Input<string>;
    /**
     * Gets or sets extensionProperties of the maintenanceConfiguration
     */
    extensionProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The input parameters to be passed to the patch run operation.
     */
    installPatches?: pulumi.Input<types.inputs.InputPatchConfigurationArgs>;
    /**
     * Gets or sets location of the resource
     */
    location?: pulumi.Input<string>;
    /**
     * Gets or sets maintenanceScope of the configuration
     */
    maintenanceScope?: pulumi.Input<string | types.enums.MaintenanceScope>;
    /**
     * Gets or sets namespace of the resource
     */
    namespace?: pulumi.Input<string>;
    /**
     * Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6.
     */
    recurEvery?: pulumi.Input<string>;
    /**
     * Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Maintenance Configuration Name
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
     */
    startDateTime?: pulumi.Input<string>;
    /**
     * Gets or sets tags of the resource
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.
     */
    timeZone?: pulumi.Input<string>;
    /**
     * Gets or sets the visibility of the configuration. The default value is 'Custom'
     */
    visibility?: pulumi.Input<string | types.enums.Visibility>;
}