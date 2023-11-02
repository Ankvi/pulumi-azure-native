import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Get Storage Account ManagementPolicies operation response.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2021-02-01.
 *
 * Other available API versions: 2018-03-01-preview, 2023-01-01.
 */
export class ManagementPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ManagementPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementPolicy {
        return new ManagementPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:ManagementPolicy';

    /**
     * Returns true if the given object is an instance of ManagementPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementPolicy.__pulumiType;
    }

    /**
     * Returns the date and time the ManagementPolicies was last modified.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Storage Account ManagementPolicy, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
     */
    public readonly policy!: pulumi.Output<types.outputs.ManagementPolicySchemaResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagementPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementPolicyArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["managementPolicyName"] = args ? args.managementPolicyName : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policy"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage/v20180301preview:ManagementPolicy" }, { type: "azure-native:storage/v20181101:ManagementPolicy" }, { type: "azure-native:storage/v20190401:ManagementPolicy" }, { type: "azure-native:storage/v20190601:ManagementPolicy" }, { type: "azure-native:storage/v20200801preview:ManagementPolicy" }, { type: "azure-native:storage/v20210101:ManagementPolicy" }, { type: "azure-native:storage/v20210201:ManagementPolicy" }, { type: "azure-native:storage/v20210401:ManagementPolicy" }, { type: "azure-native:storage/v20210601:ManagementPolicy" }, { type: "azure-native:storage/v20210801:ManagementPolicy" }, { type: "azure-native:storage/v20210901:ManagementPolicy" }, { type: "azure-native:storage/v20220501:ManagementPolicy" }, { type: "azure-native:storage/v20220901:ManagementPolicy" }, { type: "azure-native:storage/v20230101:ManagementPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagementPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagementPolicy resource.
 */
export interface ManagementPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Storage Account Management Policy. It should always be 'default'
     */
    managementPolicyName?: pulumi.Input<string>;
    /**
     * The Storage Account ManagementPolicy, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
     */
    policy: pulumi.Input<types.inputs.ManagementPolicySchemaArgs>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
