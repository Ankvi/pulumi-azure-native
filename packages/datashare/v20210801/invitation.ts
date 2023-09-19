import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Invitation data transfer object.
 */
export class Invitation extends pulumi.CustomResource {
    /**
     * Get an existing Invitation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Invitation {
        return new Invitation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare/v20210801:Invitation';

    /**
     * Returns true if the given object is an instance of Invitation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Invitation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Invitation.__pulumiType;
    }

    /**
     * The expiration date for the invitation and share subscription.
     */
    public readonly expirationDate!: pulumi.Output<string | undefined>;
    /**
     * unique invitation id
     */
    public /*out*/ readonly invitationId!: pulumi.Output<string>;
    /**
     * The status of the invitation.
     */
    public /*out*/ readonly invitationStatus!: pulumi.Output<string>;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The time the recipient responded to the invitation.
     */
    public /*out*/ readonly respondedAt!: pulumi.Output<string>;
    /**
     * Gets the time at which the invitation was sent.
     */
    public /*out*/ readonly sentAt!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The target Azure AD Id. Can't be combined with email.
     */
    public readonly targetActiveDirectoryId!: pulumi.Output<string | undefined>;
    /**
     * The email the invitation is directed to.
     */
    public readonly targetEmail!: pulumi.Output<string | undefined>;
    /**
     * The target user or application Id that invitation is being sent to.
     * Must be specified along TargetActiveDirectoryId. This enables sending
     * invitations to specific users or applications in an AD tenant.
     */
    public readonly targetObjectId!: pulumi.Output<string | undefined>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Email of the user who created the resource
     */
    public /*out*/ readonly userEmail!: pulumi.Output<string>;
    /**
     * Name of the user who created the resource
     */
    public /*out*/ readonly userName!: pulumi.Output<string>;

    /**
     * Create a Invitation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InvitationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["expirationDate"] = args ? args.expirationDate : undefined;
            resourceInputs["invitationName"] = args ? args.invitationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["targetActiveDirectoryId"] = args ? args.targetActiveDirectoryId : undefined;
            resourceInputs["targetEmail"] = args ? args.targetEmail : undefined;
            resourceInputs["targetObjectId"] = args ? args.targetObjectId : undefined;
            resourceInputs["invitationId"] = undefined /*out*/;
            resourceInputs["invitationStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["respondedAt"] = undefined /*out*/;
            resourceInputs["sentAt"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userEmail"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        } else {
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["invitationId"] = undefined /*out*/;
            resourceInputs["invitationStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["respondedAt"] = undefined /*out*/;
            resourceInputs["sentAt"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetActiveDirectoryId"] = undefined /*out*/;
            resourceInputs["targetEmail"] = undefined /*out*/;
            resourceInputs["targetObjectId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userEmail"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare:Invitation" }, { type: "azure-native:datashare/v20181101preview:Invitation" }, { type: "azure-native:datashare/v20191101:Invitation" }, { type: "azure-native:datashare/v20200901:Invitation" }, { type: "azure-native:datashare/v20201001preview:Invitation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Invitation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Invitation resource.
 */
export interface InvitationArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The expiration date for the invitation and share subscription.
     */
    expirationDate?: pulumi.Input<string>;
    /**
     * The name of the invitation.
     */
    invitationName?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to send the invitation for.
     */
    shareName: pulumi.Input<string>;
    /**
     * The target Azure AD Id. Can't be combined with email.
     */
    targetActiveDirectoryId?: pulumi.Input<string>;
    /**
     * The email the invitation is directed to.
     */
    targetEmail?: pulumi.Input<string>;
    /**
     * The target user or application Id that invitation is being sent to.
     * Must be specified along TargetActiveDirectoryId. This enables sending
     * invitations to specific users or applications in an AD tenant.
     */
    targetObjectId?: pulumi.Input<string>;
}
