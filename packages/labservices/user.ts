import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * User of a lab that can register for and use virtual machines within the lab.
 *
 * Uses Azure REST API version 2023-06-07. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:labservices:User';

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
     * The amount of usage quota time the user gets in addition to the lab usage quota.
     */
    public readonly additionalUsageQuota!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Display name of the user, for example user's full name.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * Email address of the user.
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * Date and time when the invitation message was sent to the user.
     */
    public /*out*/ readonly invitationSent!: pulumi.Output<string>;
    /**
     * State of the invitation message for the user.
     */
    public /*out*/ readonly invitationState!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Current provisioning state of the user resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * State of the user's registration within the lab.
     */
    public /*out*/ readonly registrationState!: pulumi.Output<string>;
    /**
     * Error details of last operation done on lab plan.
     */
    public /*out*/ readonly resourceOperationError!: pulumi.Output<types.outputs.ResourceOperationErrorResponse>;
    /**
     * Metadata pertaining to creation and last modification of the user resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * How long the user has used their virtual machines in this lab.
     */
    public /*out*/ readonly totalUsage!: pulumi.Output<string>;
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
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalUsageQuota"] = args ? args.additionalUsageQuota : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["invitationSent"] = undefined /*out*/;
            resourceInputs["invitationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["registrationState"] = undefined /*out*/;
            resourceInputs["resourceOperationError"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalUsage"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalUsageQuota"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["invitationSent"] = undefined /*out*/;
            resourceInputs["invitationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["registrationState"] = undefined /*out*/;
            resourceInputs["resourceOperationError"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalUsage"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:labservices/v20181015:User" }, { type: "azure-native:labservices/v20211001preview:User" }, { type: "azure-native:labservices/v20211115preview:User" }, { type: "azure-native:labservices/v20220801:User" }, { type: "azure-native:labservices/v20230607:User" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(User.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The amount of usage quota time the user gets in addition to the lab usage quota.
     */
    additionalUsageQuota?: pulumi.Input<string>;
    /**
     * Email address of the user.
     */
    email: pulumi.Input<string>;
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the user that uniquely identifies it within containing lab. Used in resource URIs.
     */
    userName?: pulumi.Input<string>;
}