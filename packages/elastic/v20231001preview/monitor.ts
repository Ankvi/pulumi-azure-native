import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Monitor resource.
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
    public static readonly __pulumiType = 'azure-native:elastic/v20231001preview:Monitor';

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

    /**
     * Identity properties of the monitor resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityPropertiesResponse | undefined>;
    /**
     * The location of the monitor resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of the monitor resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the monitor resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.MonitorPropertiesResponse>;
    /**
     * SKU of the monitor resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.ResourceSkuResponse | undefined>;
    /**
     * The system metadata relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tags of the monitor resource.
     */
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
        const aliasOpts = { aliases: [{ type: "azure-native:elastic:Monitor" }, { type: "azure-native:elastic/v20200701:Monitor" }, { type: "azure-native:elastic/v20200701preview:Monitor" }, { type: "azure-native:elastic/v20210901preview:Monitor" }, { type: "azure-native:elastic/v20211001preview:Monitor" }, { type: "azure-native:elastic/v20220505preview:Monitor" }, { type: "azure-native:elastic/v20220701preview:Monitor" }, { type: "azure-native:elastic/v20220901preview:Monitor" }, { type: "azure-native:elastic/v20230201preview:Monitor" }, { type: "azure-native:elastic/v20230501preview:Monitor" }, { type: "azure-native:elastic/v20230601:Monitor" }, { type: "azure-native:elastic/v20230615preview:Monitor" }, { type: "azure-native:elastic/v20230701preview:Monitor" }, { type: "azure-native:elastic/v20231101preview:Monitor" }, { type: "azure-native:elastic/v20240101preview:Monitor" }, { type: "azure-native:elastic/v20240301:Monitor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Monitor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Monitor resource.
 */
export interface MonitorArgs {
    /**
     * Identity properties of the monitor resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityPropertiesArgs>;
    /**
     * The location of the monitor resource
     */
    location?: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName?: pulumi.Input<string>;
    /**
     * Properties of the monitor resource.
     */
    properties?: pulumi.Input<types.inputs.MonitorPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU of the monitor resource.
     */
    sku?: pulumi.Input<types.inputs.ResourceSkuArgs>;
    /**
     * The tags of the monitor resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}