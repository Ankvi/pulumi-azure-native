import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2022-06-01. Prior API version in Azure Native 1.x: 2021-03-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01, 2023-07-07, 2023-10-20.
 */
export class Monitor extends pulumi.CustomResource {
    /**
     * Get an existing Monitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Monitor {
        return new Monitor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datadog:Monitor';

    /**
     * Returns true if the given object is an instance of Monitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Monitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Monitor.__pulumiType;
    }

    public readonly identity!: pulumi.Output<types.outputs.IdentityPropertiesResponse | undefined>;
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of the monitor resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties specific to the monitor resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.MonitorPropertiesResponse>;
    public readonly sku!: pulumi.Output<types.outputs.ResourceSkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the monitor resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Monitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datadog/v20200201preview:Monitor" }, { type: "azure-native:datadog/v20210301:Monitor" }, { type: "azure-native:datadog/v20220601:Monitor" }, { type: "azure-native:datadog/v20220801:Monitor" }, { type: "azure-native:datadog/v20230101:Monitor" }, { type: "azure-native:datadog/v20230707:Monitor" }, { type: "azure-native:datadog/v20231020:Monitor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Monitor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Monitor resource.
 */
export interface MonitorArgs {
    identity?: pulumi.Input<types.inputs.IdentityPropertiesArgs>;
    location?: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName?: pulumi.Input<string>;
    /**
     * Properties specific to the monitor resource.
     */
    properties?: pulumi.Input<types.inputs.MonitorPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    sku?: pulumi.Input<types.inputs.ResourceSkuArgs>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}