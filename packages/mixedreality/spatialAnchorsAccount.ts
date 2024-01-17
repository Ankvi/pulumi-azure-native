import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SpatialAnchorsAccount Response.
 * Azure REST API version: 2021-01-01. Prior API version in Azure Native 1.x: 2021-01-01.
 *
 * Other available API versions: 2019-02-28-preview, 2021-03-01-preview.
 */
export class SpatialAnchorsAccount extends pulumi.CustomResource {
    /**
     * Get an existing SpatialAnchorsAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SpatialAnchorsAccount {
        return new SpatialAnchorsAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mixedreality:SpatialAnchorsAccount';

    /**
     * Returns true if the given object is an instance of SpatialAnchorsAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SpatialAnchorsAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SpatialAnchorsAccount.__pulumiType;
    }

    /**
     * Correspond domain name of certain Spatial Anchors Account
     */
    public /*out*/ readonly accountDomain!: pulumi.Output<string>;
    /**
     * unique id of certain account.
     */
    public /*out*/ readonly accountId!: pulumi.Output<string>;
    /**
     * The identity associated with this account
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The kind of account, if supported
     */
    public readonly kind!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The plan associated with this account
     */
    public readonly plan!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The sku associated with this account
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The name of the storage account associated with this accountId
     */
    public readonly storageAccountName!: pulumi.Output<string | undefined>;
    /**
     * System metadata for this account
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
     * Create a SpatialAnchorsAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpatialAnchorsAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["accountDomain"] = undefined /*out*/;
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountDomain"] = undefined /*out*/;
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["storageAccountName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mixedreality/v20190228preview:SpatialAnchorsAccount" }, { type: "azure-native:mixedreality/v20191202preview:SpatialAnchorsAccount" }, { type: "azure-native:mixedreality/v20200501:SpatialAnchorsAccount" }, { type: "azure-native:mixedreality/v20210101:SpatialAnchorsAccount" }, { type: "azure-native:mixedreality/v20210301preview:SpatialAnchorsAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SpatialAnchorsAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SpatialAnchorsAccount resource.
 */
export interface SpatialAnchorsAccountArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The identity associated with this account
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The kind of account, if supported
     */
    kind?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The plan associated with this account
     */
    plan?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku associated with this account
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The name of the storage account associated with this accountId
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}