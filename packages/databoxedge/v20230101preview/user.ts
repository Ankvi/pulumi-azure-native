import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a user who has access to one or more shares on the Data Box Edge/Gateway device.
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
    public static readonly __pulumiType = 'azure-native:databoxedge/v20230101preview:User';

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
     * The password details.
     */
    public readonly encryptedPassword!: pulumi.Output<types.outputs.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of shares that the user has rights on. This field should not be specified during user creation.
     */
    public /*out*/ readonly shareAccessRights!: pulumi.Output<types.outputs.ShareAccessRightResponse[]>;
    /**
     * Metadata pertaining to creation and last modification of User
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Type of the user.
     */
    public readonly userType!: pulumi.Output<string>;

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
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.userType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userType'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["encryptedPassword"] = args ? args.encryptedPassword : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["userType"] = args ? args.userType : undefined;
            resourceInputs["shareAccessRights"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["encryptedPassword"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["shareAccessRights"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge:User" }, { type: "azure-native:databoxedge/v20190301:User" }, { type: "azure-native:databoxedge/v20190701:User" }, { type: "azure-native:databoxedge/v20190801:User" }, { type: "azure-native:databoxedge/v20200501preview:User" }, { type: "azure-native:databoxedge/v20200901:User" }, { type: "azure-native:databoxedge/v20200901preview:User" }, { type: "azure-native:databoxedge/v20201201:User" }, { type: "azure-native:databoxedge/v20210201:User" }, { type: "azure-native:databoxedge/v20210201preview:User" }, { type: "azure-native:databoxedge/v20210601:User" }, { type: "azure-native:databoxedge/v20210601preview:User" }, { type: "azure-native:databoxedge/v20220301:User" }, { type: "azure-native:databoxedge/v20220401preview:User" }, { type: "azure-native:databoxedge/v20221201preview:User" }, { type: "azure-native:databoxedge/v20230701:User" }, { type: "azure-native:databoxedge/v20231201:User" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(User.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The password details.
     */
    encryptedPassword?: pulumi.Input<types.inputs.AsymmetricEncryptedSecretArgs>;
    /**
     * The user name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Type of the user.
     */
    userType: pulumi.Input<string | types.enums.UserType>;
}