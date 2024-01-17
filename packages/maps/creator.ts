import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure resource which represents Maps Creator product and provides ability to manage private location data.
 * Azure REST API version: 2021-02-01. Prior API version in Azure Native 1.x: 2020-02-01-preview.
 *
 * Other available API versions: 2020-02-01-preview, 2021-12-01-preview, 2023-06-01, 2023-08-01-preview, 2023-12-01-preview.
 */
export class Creator extends pulumi.CustomResource {
    /**
     * Get an existing Creator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Creator {
        return new Creator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:maps:Creator';

    /**
     * Returns true if the given object is an instance of Creator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Creator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Creator.__pulumiType;
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
     * The Creator resource properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.CreatorPropertiesResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Creator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CreatorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["creatorName"] = args ? args.creatorName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:maps/v20200201preview:Creator" }, { type: "azure-native:maps/v20210201:Creator" }, { type: "azure-native:maps/v20210701preview:Creator" }, { type: "azure-native:maps/v20211201preview:Creator" }, { type: "azure-native:maps/v20230601:Creator" }, { type: "azure-native:maps/v20230801preview:Creator" }, { type: "azure-native:maps/v20231201preview:Creator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Creator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Creator resource.
 */
export interface CreatorArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Maps Creator instance.
     */
    creatorName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The Creator resource properties.
     */
    properties: pulumi.Input<types.inputs.CreatorPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
