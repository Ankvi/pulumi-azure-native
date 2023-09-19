import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The storage account blob inventory policy.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2021-02-01
 */
export class BlobInventoryPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BlobInventoryPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobInventoryPolicy {
        return new BlobInventoryPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:BlobInventoryPolicy';

    /**
     * Returns true if the given object is an instance of BlobInventoryPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlobInventoryPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlobInventoryPolicy.__pulumiType;
    }

    /**
     * Returns the last modified date and time of the blob inventory policy.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The storage account blob inventory policy object. It is composed of policy rules.
     */
    public readonly policy!: pulumi.Output<types.outputs.BlobInventoryPolicySchemaResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BlobInventoryPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobInventoryPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["blobInventoryPolicyName"] = args ? args.blobInventoryPolicyName : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policy"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage/v20190601:BlobInventoryPolicy" }, { type: "azure-native:storage/v20200801preview:BlobInventoryPolicy" }, { type: "azure-native:storage/v20210101:BlobInventoryPolicy" }, { type: "azure-native:storage/v20210201:BlobInventoryPolicy" }, { type: "azure-native:storage/v20210401:BlobInventoryPolicy" }, { type: "azure-native:storage/v20210601:BlobInventoryPolicy" }, { type: "azure-native:storage/v20210801:BlobInventoryPolicy" }, { type: "azure-native:storage/v20210901:BlobInventoryPolicy" }, { type: "azure-native:storage/v20220501:BlobInventoryPolicy" }, { type: "azure-native:storage/v20220901:BlobInventoryPolicy" }, { type: "azure-native:storage/v20230101:BlobInventoryPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BlobInventoryPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlobInventoryPolicy resource.
 */
export interface BlobInventoryPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the storage account blob inventory policy. It should always be 'default'
     */
    blobInventoryPolicyName?: pulumi.Input<string>;
    /**
     * The storage account blob inventory policy object. It is composed of policy rules.
     */
    policy: pulumi.Input<types.inputs.BlobInventoryPolicySchemaArgs>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
