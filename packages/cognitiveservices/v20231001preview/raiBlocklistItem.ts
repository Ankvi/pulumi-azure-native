import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Cognitive Services RaiBlocklist Item.
 */
export class RaiBlocklistItem extends pulumi.CustomResource {
    /**
     * Get an existing RaiBlocklistItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RaiBlocklistItem {
        return new RaiBlocklistItem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cognitiveservices/v20231001preview:RaiBlocklistItem';

    /**
     * Returns true if the given object is an instance of RaiBlocklistItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RaiBlocklistItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RaiBlocklistItem.__pulumiType;
    }

    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of Cognitive Services RaiBlocklist Item.
     */
    public readonly properties!: pulumi.Output<types.outputs.RaiBlocklistItemPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
     * Create a RaiBlocklistItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RaiBlocklistItemArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.raiBlocklistName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'raiBlocklistName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["raiBlocklistItemName"] = args ? args.raiBlocklistItemName : undefined;
            resourceInputs["raiBlocklistName"] = args ? args.raiBlocklistName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cognitiveservices:RaiBlocklistItem" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RaiBlocklistItem.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RaiBlocklistItem resource.
 */
export interface RaiBlocklistItemArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Properties of Cognitive Services RaiBlocklist Item.
     */
    properties?: pulumi.Input<types.inputs.RaiBlocklistItemPropertiesArgs>;
    /**
     * The name of the RaiBlocklist Item associated with the custom blocklist
     */
    raiBlocklistItemName?: pulumi.Input<string>;
    /**
     * The name of the RaiBlocklist associated with the Cognitive Services Account
     */
    raiBlocklistName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
