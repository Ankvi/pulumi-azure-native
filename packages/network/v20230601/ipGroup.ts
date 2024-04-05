import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The IpGroups resource information.
 */
export class IpGroup extends pulumi.CustomResource {
    /**
     * Get an existing IpGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IpGroup {
        return new IpGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230601:IpGroup';

    /**
     * Returns true if the given object is an instance of IpGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpGroup.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * List of references to Firewall Policies resources that this IpGroups is associated with.
     */
    public /*out*/ readonly firewallPolicies!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * List of references to Firewall resources that this IpGroups is associated with.
     */
    public /*out*/ readonly firewalls!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * IpAddresses/IpAddressPrefixes in the IpGroups resource.
     */
    public readonly ipAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the IpGroups resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IpGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipAddresses"] = args ? args.ipAddresses : undefined;
            resourceInputs["ipGroupsName"] = args ? args.ipGroupsName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["firewallPolicies"] = undefined /*out*/;
            resourceInputs["firewalls"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["firewallPolicies"] = undefined /*out*/;
            resourceInputs["firewalls"] = undefined /*out*/;
            resourceInputs["ipAddresses"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:IpGroup" }, { type: "azure-native:network/v20190901:IpGroup" }, { type: "azure-native:network/v20191101:IpGroup" }, { type: "azure-native:network/v20191201:IpGroup" }, { type: "azure-native:network/v20200301:IpGroup" }, { type: "azure-native:network/v20200401:IpGroup" }, { type: "azure-native:network/v20200501:IpGroup" }, { type: "azure-native:network/v20200601:IpGroup" }, { type: "azure-native:network/v20200701:IpGroup" }, { type: "azure-native:network/v20200801:IpGroup" }, { type: "azure-native:network/v20201101:IpGroup" }, { type: "azure-native:network/v20210201:IpGroup" }, { type: "azure-native:network/v20210301:IpGroup" }, { type: "azure-native:network/v20210501:IpGroup" }, { type: "azure-native:network/v20210801:IpGroup" }, { type: "azure-native:network/v20220101:IpGroup" }, { type: "azure-native:network/v20220501:IpGroup" }, { type: "azure-native:network/v20220701:IpGroup" }, { type: "azure-native:network/v20220901:IpGroup" }, { type: "azure-native:network/v20221101:IpGroup" }, { type: "azure-native:network/v20230201:IpGroup" }, { type: "azure-native:network/v20230401:IpGroup" }, { type: "azure-native:network/v20230501:IpGroup" }, { type: "azure-native:network/v20230901:IpGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IpGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IpGroup resource.
 */
export interface IpGroupArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * IpAddresses/IpAddressPrefixes in the IpGroups resource.
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the ipGroups.
     */
    ipGroupsName?: pulumi.Input<string>;
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