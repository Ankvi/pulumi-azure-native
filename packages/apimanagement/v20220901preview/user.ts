import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * User details.
 */
export class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): User {
        return new User(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20220901preview:User';

    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is User {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === User.__pulumiType;
    }

    /**
     * Email address.
     */
    public readonly email!: pulumi.Output<string | undefined>;
    /**
     * First name.
     */
    public readonly firstName!: pulumi.Output<string | undefined>;
    /**
     * Collection of groups user is part of.
     */
    public /*out*/ readonly groups!: pulumi.Output<types.outputs.GroupContractPropertiesResponse[]>;
    /**
     * Collection of user identities.
     */
    public readonly identities!: pulumi.Output<types.outputs.UserIdentityContractResponse[] | undefined>;
    /**
     * Last name.
     */
    public readonly lastName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Optional note about a user set by the administrator.
     */
    public readonly note!: pulumi.Output<string | undefined>;
    /**
     * Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly registrationDate!: pulumi.Output<string | undefined>;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.firstName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firstName'");
            }
            if ((!args || args.lastName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lastName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["appType"] = args ? args.appType : undefined;
            resourceInputs["confirmation"] = args ? args.confirmation : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["firstName"] = args ? args.firstName : undefined;
            resourceInputs["identities"] = args ? args.identities : undefined;
            resourceInputs["lastName"] = args ? args.lastName : undefined;
            resourceInputs["note"] = args ? args.note : undefined;
            resourceInputs["notify"] = args ? args.notify : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["state"] = (args ? args.state : undefined) ?? "active";
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["groups"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["registrationDate"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:User" }, { type: "azure-native:apimanagement/v20160707:User" }, { type: "azure-native:apimanagement/v20161010:User" }, { type: "azure-native:apimanagement/v20170301:User" }, { type: "azure-native:apimanagement/v20180101:User" }, { type: "azure-native:apimanagement/v20180601preview:User" }, { type: "azure-native:apimanagement/v20190101:User" }, { type: "azure-native:apimanagement/v20191201:User" }, { type: "azure-native:apimanagement/v20191201preview:User" }, { type: "azure-native:apimanagement/v20200601preview:User" }, { type: "azure-native:apimanagement/v20201201:User" }, { type: "azure-native:apimanagement/v20210101preview:User" }, { type: "azure-native:apimanagement/v20210401preview:User" }, { type: "azure-native:apimanagement/v20210801:User" }, { type: "azure-native:apimanagement/v20211201preview:User" }, { type: "azure-native:apimanagement/v20220401preview:User" }, { type: "azure-native:apimanagement/v20220801:User" }, { type: "azure-native:apimanagement/v20230301preview:User" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(User.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * Determines the type of application which send the create user request. Default is legacy portal.
     */
    appType?: pulumi.Input<string | types.enums.AppType>;
    /**
     * Determines the type of confirmation e-mail that will be sent to the newly created user.
     */
    confirmation?: pulumi.Input<string | types.enums.Confirmation>;
    /**
     * Email address. Must not be empty and must be unique within the service instance.
     */
    email: pulumi.Input<string>;
    /**
     * First name.
     */
    firstName: pulumi.Input<string>;
    /**
     * Collection of user identities.
     */
    identities?: pulumi.Input<pulumi.Input<types.inputs.UserIdentityContractArgs>[]>;
    /**
     * Last name.
     */
    lastName: pulumi.Input<string>;
    /**
     * Optional note about a user set by the administrator.
     */
    note?: pulumi.Input<string>;
    /**
     * Send an Email notification to the User.
     */
    notify?: pulumi.Input<boolean>;
    /**
     * User Password. If no value is provided, a default password is generated.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    state?: pulumi.Input<string | types.enums.UserState>;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    userId?: pulumi.Input<string>;
}
