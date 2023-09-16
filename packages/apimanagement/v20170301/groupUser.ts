import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * User details.
 */
export class GroupUser extends pulumi.CustomResource {
    /**
     * Get an existing GroupUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GroupUser {
        return new GroupUser(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20170301:GroupUser';

    /**
     * Returns true if the given object is an instance of GroupUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupUser.__pulumiType;
    }

    /**
     * Email address.
     */
    public /*out*/ readonly email!: pulumi.Output<string | undefined>;
    /**
     * First name.
     */
    public /*out*/ readonly firstName!: pulumi.Output<string | undefined>;
    /**
     * Collection of groups user is part of.
     */
    public /*out*/ readonly groups!: pulumi.Output<types.outputs.apimanagement.v20170301.GroupContractResponse[]>;
    /**
     * Collection of user identities.
     */
    public /*out*/ readonly identities!: pulumi.Output<types.outputs.apimanagement.v20170301.UserIdentityContractResponse[]>;
    /**
     * Last name.
     */
    public /*out*/ readonly lastName!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Optional note about a user set by the administrator.
     */
    public /*out*/ readonly note!: pulumi.Output<string | undefined>;
    /**
     * Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly registrationDate!: pulumi.Output<string | undefined>;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    public /*out*/ readonly state!: pulumi.Output<string | undefined>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GroupUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupUserArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["uid"] = args ? args.uid : undefined;
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["firstName"] = undefined /*out*/;
            resourceInputs["groups"] = undefined /*out*/;
            resourceInputs["identities"] = undefined /*out*/;
            resourceInputs["lastName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["note"] = undefined /*out*/;
            resourceInputs["registrationDate"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["firstName"] = undefined /*out*/;
            resourceInputs["groups"] = undefined /*out*/;
            resourceInputs["identities"] = undefined /*out*/;
            resourceInputs["lastName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["note"] = undefined /*out*/;
            resourceInputs["registrationDate"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:GroupUser" }, { type: "azure-native:apimanagement/v20180101:GroupUser" }, { type: "azure-native:apimanagement/v20180601preview:GroupUser" }, { type: "azure-native:apimanagement/v20190101:GroupUser" }, { type: "azure-native:apimanagement/v20191201:GroupUser" }, { type: "azure-native:apimanagement/v20191201preview:GroupUser" }, { type: "azure-native:apimanagement/v20200601preview:GroupUser" }, { type: "azure-native:apimanagement/v20201201:GroupUser" }, { type: "azure-native:apimanagement/v20210101preview:GroupUser" }, { type: "azure-native:apimanagement/v20210401preview:GroupUser" }, { type: "azure-native:apimanagement/v20210801:GroupUser" }, { type: "azure-native:apimanagement/v20211201preview:GroupUser" }, { type: "azure-native:apimanagement/v20220401preview:GroupUser" }, { type: "azure-native:apimanagement/v20220801:GroupUser" }, { type: "azure-native:apimanagement/v20220901preview:GroupUser" }, { type: "azure-native:apimanagement/v20230301preview:GroupUser" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GroupUser.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GroupUser resource.
 */
export interface GroupUserArgs {
    /**
     * Group identifier. Must be unique in the current API Management service instance.
     */
    groupId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    uid?: pulumi.Input<string>;
}
