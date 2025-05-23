import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * configuration associated with SAP Landscape Monitor Dashboard.
 *
 * Uses Azure REST API version 2024-02-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-04-01.
 *
 * Other available API versions: 2023-04-01, 2023-10-01-preview, 2023-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native workloads [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SapLandscapeMonitor extends pulumi.CustomResource {
    /**
     * Get an existing SapLandscapeMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SapLandscapeMonitor {
        return new SapLandscapeMonitor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:SapLandscapeMonitor';

    /**
     * Returns true if the given object is an instance of SapLandscapeMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SapLandscapeMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SapLandscapeMonitor.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the SID groupings by landscape and Environment.
     */
    public readonly grouping!: pulumi.Output<types.outputs.SapLandscapeMonitorPropertiesGroupingResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of provisioning of the SAP monitor.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard
     */
    public readonly topMetricsThresholds!: pulumi.Output<types.outputs.SapLandscapeMonitorMetricThresholdsResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SapLandscapeMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SapLandscapeMonitorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.monitorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["grouping"] = args ? args.grouping : undefined;
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["topMetricsThresholds"] = args ? args.topMetricsThresholds : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["grouping"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topMetricsThresholds"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20221101preview:SapLandscapeMonitor" }, { type: "azure-native:workloads/v20230401:SapLandscapeMonitor" }, { type: "azure-native:workloads/v20231001preview:SapLandscapeMonitor" }, { type: "azure-native:workloads/v20231201preview:SapLandscapeMonitor" }, { type: "azure-native:workloads/v20240201preview:SapLandscapeMonitor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SapLandscapeMonitor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SapLandscapeMonitor resource.
 */
export interface SapLandscapeMonitorArgs {
    /**
     * Gets or sets the SID groupings by landscape and Environment.
     */
    grouping?: pulumi.Input<types.inputs.SapLandscapeMonitorPropertiesGroupingArgs>;
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard
     */
    topMetricsThresholds?: pulumi.Input<pulumi.Input<types.inputs.SapLandscapeMonitorMetricThresholdsArgs>[]>;
}