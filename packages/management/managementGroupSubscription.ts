import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The details of subscription under management group.
 * Azure REST API version: 2021-04-01. Prior API version in Azure Native 1.x: 2020-05-01.
 *
 * Other available API versions: 2023-04-01.
 */
export class ManagementGroupSubscription extends pulumi.CustomResource {
    /**
     * Get an existing ManagementGroupSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementGroupSubscription {
        return new ManagementGroupSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:management:ManagementGroupSubscription';

    /**
     * Returns true if the given object is an instance of ManagementGroupSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementGroupSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementGroupSubscription.__pulumiType;
    }

    /**
     * The friendly name of the subscription.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The stringified id of the subscription. For example, 00000000-0000-0000-0000-000000000000
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The ID of the parent management group.
     */
    public /*out*/ readonly parent!: pulumi.Output<types.outputs.DescendantParentGroupInfoResponse | undefined>;
    /**
     * The state of the subscription.
     */
    public /*out*/ readonly state!: pulumi.Output<string | undefined>;
    /**
     * The AAD Tenant ID associated with the subscription. For example, 00000000-0000-0000-0000-000000000000
     */
    public /*out*/ readonly tenant!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups/subscriptions
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagementGroupSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementGroupSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parent"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tenant"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parent"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tenant"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:management/v20200501:ManagementGroupSubscription" }, { type: "azure-native:management/v20201001:ManagementGroupSubscription" }, { type: "azure-native:management/v20210401:ManagementGroupSubscription" }, { type: "azure-native:management/v20230401:ManagementGroupSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagementGroupSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagementGroupSubscription resource.
 */
export interface ManagementGroupSubscriptionArgs {
    /**
     * Management Group ID.
     */
    groupId: pulumi.Input<string>;
    /**
     * Subscription ID.
     */
    subscriptionId?: pulumi.Input<string>;
}
