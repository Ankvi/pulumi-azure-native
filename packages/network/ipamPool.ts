import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Instance of Pool resource.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export class IpamPool extends pulumi.CustomResource {
    /**
     * Get an existing IpamPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IpamPool {
        return new IpamPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:IpamPool';

    /**
     * Returns true if the given object is an instance of IpamPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpamPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpamPool.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of IpamPool resource properties which are specific to the Pool resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.IpamPoolPropertiesResponse>;
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
     * Create a IpamPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpamPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20240101preview:IpamPool" }, { type: "azure-native:network/v20240501:IpamPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IpamPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IpamPool resource.
 */
export interface IpamPoolArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * IP Address Manager Pool resource name.
     */
    poolName?: pulumi.Input<string>;
    /**
     * Properties of IpamPool resource properties which are specific to the Pool resource.
     */
    properties?: pulumi.Input<types.inputs.IpamPoolPropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}