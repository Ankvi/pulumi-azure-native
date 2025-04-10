import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The IpCommunity resource definition.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export class IpCommunity extends pulumi.CustomResource {
    /**
     * Get an existing IpCommunity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IpCommunity {
        return new IpCommunity(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:IpCommunity';

    /**
     * Returns true if the given object is an instance of IpCommunity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpCommunity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpCommunity.__pulumiType;
    }

    /**
     * Action to be taken on the configuration. Example: Permit | Deny.
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * List the communityMembers of IP Community .
     */
    public readonly communityMembers!: pulumi.Output<string[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Supported well known Community List.
     */
    public readonly wellKnownCommunities!: pulumi.Output<string[] | undefined>;

    /**
     * Create a IpCommunity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpCommunityArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.communityMembers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'communityMembers'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["communityMembers"] = args ? args.communityMembers : undefined;
            resourceInputs["ipCommunityName"] = args ? args.ipCommunityName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["wellKnownCommunities"] = args ? args.wellKnownCommunities : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["action"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["communityMembers"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["wellKnownCommunities"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:IpCommunity" }, { type: "azure-native:managednetworkfabric/v20230615:IpCommunity" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IpCommunity.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IpCommunity resource.
 */
export interface IpCommunityArgs {
    /**
     * Action to be taken on the configuration. Example: Permit | Deny.
     */
    action: pulumi.Input<string | types.enums.CommunityActionTypes>;
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * List the communityMembers of IP Community .
     */
    communityMembers: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the IP Community
     */
    ipCommunityName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Supported well known Community List.
     */
    wellKnownCommunities?: pulumi.Input<pulumi.Input<string | types.enums.WellKnownCommunities>[]>;
}