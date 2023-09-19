import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The replication policy between two storage accounts. Multiple rules can be defined in one policy.
 */
export class ObjectReplicationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ObjectReplicationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ObjectReplicationPolicy {
        return new ObjectReplicationPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage/v20230101:ObjectReplicationPolicy';

    /**
     * Returns true if the given object is an instance of ObjectReplicationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectReplicationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectReplicationPolicy.__pulumiType;
    }

    /**
     * Required. Destination account name. It should be full resource id if allowCrossTenantReplication set to false.
     */
    public readonly destinationAccount!: pulumi.Output<string>;
    /**
     * Indicates when the policy is enabled on the source account.
     */
    public /*out*/ readonly enabledTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A unique id for object replication policy.
     */
    public /*out*/ readonly policyId!: pulumi.Output<string>;
    /**
     * The storage account object replication rules.
     */
    public readonly rules!: pulumi.Output<types.outputs.ObjectReplicationPolicyRuleResponse[] | undefined>;
    /**
     * Required. Source account name. It should be full resource id if allowCrossTenantReplication set to false.
     */
    public readonly sourceAccount!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ObjectReplicationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectReplicationPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.destinationAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationAccount'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceAccount'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["destinationAccount"] = args ? args.destinationAccount : undefined;
            resourceInputs["objectReplicationPolicyId"] = args ? args.objectReplicationPolicyId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["sourceAccount"] = args ? args.sourceAccount : undefined;
            resourceInputs["enabledTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["destinationAccount"] = undefined /*out*/;
            resourceInputs["enabledTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyId"] = undefined /*out*/;
            resourceInputs["rules"] = undefined /*out*/;
            resourceInputs["sourceAccount"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20190601:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20200801preview:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20210101:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20210201:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20210401:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20210601:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20210801:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20210901:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20220501:ObjectReplicationPolicy" }, { type: "azure-native:storage/v20220901:ObjectReplicationPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ObjectReplicationPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ObjectReplicationPolicy resource.
 */
export interface ObjectReplicationPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * Required. Destination account name. It should be full resource id if allowCrossTenantReplication set to false.
     */
    destinationAccount: pulumi.Input<string>;
    /**
     * For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
     */
    objectReplicationPolicyId?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The storage account object replication rules.
     */
    rules?: pulumi.Input<pulumi.Input<types.inputs.ObjectReplicationPolicyRuleArgs>[]>;
    /**
     * Required. Source account name. It should be full resource id if allowCrossTenantReplication set to false.
     */
    sourceAccount: pulumi.Input<string>;
}
