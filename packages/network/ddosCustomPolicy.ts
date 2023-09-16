import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A DDoS custom policy in a resource group.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01
 */
export class DdosCustomPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DdosCustomPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DdosCustomPolicy {
        return new DdosCustomPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:DdosCustomPolicy';

    /**
     * Returns true if the given object is an instance of DdosCustomPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosCustomPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosCustomPolicy.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the DDoS custom policy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DdosCustomPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosCustomPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["ddosCustomPolicyName"] = args ? args.ddosCustomPolicyName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20181101:DdosCustomPolicy" }, { type: "azure-native:network/v20181201:DdosCustomPolicy" }, { type: "azure-native:network/v20190201:DdosCustomPolicy" }, { type: "azure-native:network/v20190401:DdosCustomPolicy" }, { type: "azure-native:network/v20190601:DdosCustomPolicy" }, { type: "azure-native:network/v20190701:DdosCustomPolicy" }, { type: "azure-native:network/v20190801:DdosCustomPolicy" }, { type: "azure-native:network/v20190901:DdosCustomPolicy" }, { type: "azure-native:network/v20191101:DdosCustomPolicy" }, { type: "azure-native:network/v20191201:DdosCustomPolicy" }, { type: "azure-native:network/v20200301:DdosCustomPolicy" }, { type: "azure-native:network/v20200401:DdosCustomPolicy" }, { type: "azure-native:network/v20200501:DdosCustomPolicy" }, { type: "azure-native:network/v20200601:DdosCustomPolicy" }, { type: "azure-native:network/v20200701:DdosCustomPolicy" }, { type: "azure-native:network/v20200801:DdosCustomPolicy" }, { type: "azure-native:network/v20201101:DdosCustomPolicy" }, { type: "azure-native:network/v20210201:DdosCustomPolicy" }, { type: "azure-native:network/v20210301:DdosCustomPolicy" }, { type: "azure-native:network/v20210501:DdosCustomPolicy" }, { type: "azure-native:network/v20210801:DdosCustomPolicy" }, { type: "azure-native:network/v20220101:DdosCustomPolicy" }, { type: "azure-native:network/v20220501:DdosCustomPolicy" }, { type: "azure-native:network/v20220701:DdosCustomPolicy" }, { type: "azure-native:network/v20220901:DdosCustomPolicy" }, { type: "azure-native:network/v20221101:DdosCustomPolicy" }, { type: "azure-native:network/v20230201:DdosCustomPolicy" }, { type: "azure-native:network/v20230401:DdosCustomPolicy" }, { type: "azure-native:network/v20230501:DdosCustomPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DdosCustomPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DdosCustomPolicy resource.
 */
export interface DdosCustomPolicyArgs {
    /**
     * The name of the DDoS custom policy.
     */
    ddosCustomPolicyName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
