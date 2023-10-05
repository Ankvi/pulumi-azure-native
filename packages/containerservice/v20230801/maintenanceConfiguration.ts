import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * See [planned maintenance](https://docs.microsoft.com/azure/aks/planned-maintenance) for more information about planned maintenance.
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
    public static readonly __pulumiType = 'azure-native:containerservice/v20230801:MaintenanceConfiguration';

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
     * Maintenance window for the maintenance configuration.
     */
    public readonly maintenanceWindow!: pulumi.Output<types.outputs.MaintenanceWindowResponse | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Time slots on which upgrade is not allowed.
     */
    public readonly notAllowedTime!: pulumi.Output<types.outputs.TimeSpanResponse[] | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * If two array entries specify the same day of the week, the applied configuration is the union of times in both entries.
     */
    public readonly timeInWeek!: pulumi.Output<types.outputs.TimeInWeekResponse[] | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["configName"] = args ? args.configName : undefined;
            resourceInputs["maintenanceWindow"] = args ? (args.maintenanceWindow ? pulumi.output(args.maintenanceWindow).apply(types.inputs.maintenanceWindowArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["notAllowedTime"] = args ? args.notAllowedTime : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["timeInWeek"] = args ? args.timeInWeek : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["maintenanceWindow"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notAllowedTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeInWeek"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20201201:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20210201:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20210301:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20210501:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20210701:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20210801:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20210901:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20211001:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20211101preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220101:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220102preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220201:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220202preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220301:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220302preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220401:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220402preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220502preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220601:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220602preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220701:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220702preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220802preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220803preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220901:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20220902preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20221002preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20221101:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20221102preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230101:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230102preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230201:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230202preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230301:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230302preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230401:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230402preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230501:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230502preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230601:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230602preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230701:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230702preview:MaintenanceConfiguration" }, { type: "azure-native:containerservice/v20230802preview:MaintenanceConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MaintenanceConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MaintenanceConfiguration resource.
 */
export interface MaintenanceConfigurationArgs {
    /**
     * The name of the maintenance configuration.
     */
    configName?: pulumi.Input<string>;
    /**
     * Maintenance window for the maintenance configuration.
     */
    maintenanceWindow?: pulumi.Input<types.inputs.MaintenanceWindowArgs>;
    /**
     * Time slots on which upgrade is not allowed.
     */
    notAllowedTime?: pulumi.Input<pulumi.Input<types.inputs.TimeSpanArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * If two array entries specify the same day of the week, the applied configuration is the union of times in both entries.
     */
    timeInWeek?: pulumi.Input<pulumi.Input<types.inputs.TimeInWeekArgs>[]>;
}
