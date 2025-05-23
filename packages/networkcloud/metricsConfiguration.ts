import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-02-01. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MetricsConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing MetricsConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MetricsConfiguration {
        return new MetricsConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:MetricsConfiguration';

    /**
     * Returns true if the given object is an instance of MetricsConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetricsConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetricsConfiguration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The interval in minutes by which metrics will be collected.
     */
    public readonly collectionInterval!: pulumi.Output<number>;
    /**
     * The more detailed status of the metrics configuration.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The list of metrics that are available for the cluster but disabled at the moment.
     */
    public /*out*/ readonly disabledMetrics!: pulumi.Output<string[]>;
    /**
     * The list of metric names that have been chosen to be enabled in addition to the core set of enabled metrics.
     */
    public readonly enabledMetrics!: pulumi.Output<string[] | undefined>;
    /**
     * Resource ETag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the metrics configuration.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MetricsConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetricsConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.collectionInterval === undefined) && !opts.urn) {
                throw new Error("Missing required property 'collectionInterval'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["collectionInterval"] = args ? args.collectionInterval : undefined;
            resourceInputs["enabledMetrics"] = args ? args.enabledMetrics : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metricsConfigurationName"] = args ? args.metricsConfigurationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["disabledMetrics"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["collectionInterval"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["disabledMetrics"] = undefined /*out*/;
            resourceInputs["enabledMetrics"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230701:MetricsConfiguration" }, { type: "azure-native:networkcloud/v20231001preview:MetricsConfiguration" }, { type: "azure-native:networkcloud/v20240601preview:MetricsConfiguration" }, { type: "azure-native:networkcloud/v20240701:MetricsConfiguration" }, { type: "azure-native:networkcloud/v20241001preview:MetricsConfiguration" }, { type: "azure-native:networkcloud/v20250201:MetricsConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MetricsConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MetricsConfiguration resource.
 */
export interface MetricsConfigurationArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The interval in minutes by which metrics will be collected.
     */
    collectionInterval: pulumi.Input<number>;
    /**
     * The list of metric names that have been chosen to be enabled in addition to the core set of enabled metrics.
     */
    enabledMetrics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the metrics configuration for the cluster.
     */
    metricsConfigurationName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}