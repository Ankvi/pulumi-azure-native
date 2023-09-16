import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Contact details for security issues
 */
export class SecurityContact extends pulumi.CustomResource {
    /**
     * Get an existing SecurityContact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityContact {
        return new SecurityContact(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security/v20170801preview:SecurityContact';

    /**
     * Returns true if the given object is an instance of SecurityContact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityContact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityContact.__pulumiType;
    }

    /**
     * Whether to send security alerts notifications to the security contact
     */
    public readonly alertNotifications!: pulumi.Output<string>;
    /**
     * Whether to send security alerts notifications to subscription admins
     */
    public readonly alertsToAdmins!: pulumi.Output<string>;
    /**
     * The email of this security contact
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The phone number of this security contact
     */
    public readonly phone!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SecurityContact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityContactArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.alertNotifications === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertNotifications'");
            }
            if ((!args || args.alertsToAdmins === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertsToAdmins'");
            }
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            resourceInputs["alertNotifications"] = args ? args.alertNotifications : undefined;
            resourceInputs["alertsToAdmins"] = args ? args.alertsToAdmins : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["phone"] = args ? args.phone : undefined;
            resourceInputs["securityContactName"] = args ? args.securityContactName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alertNotifications"] = undefined /*out*/;
            resourceInputs["alertsToAdmins"] = undefined /*out*/;
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["phone"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security:SecurityContact" }, { type: "azure-native:security/v20200101preview:SecurityContact" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityContact.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityContact resource.
 */
export interface SecurityContactArgs {
    /**
     * Whether to send security alerts notifications to the security contact
     */
    alertNotifications: pulumi.Input<string | types.enums.v20170801preview.AlertNotifications>;
    /**
     * Whether to send security alerts notifications to subscription admins
     */
    alertsToAdmins: pulumi.Input<string | types.enums.v20170801preview.AlertsToAdmins>;
    /**
     * The email of this security contact
     */
    email: pulumi.Input<string>;
    /**
     * The phone number of this security contact
     */
    phone?: pulumi.Input<string>;
    /**
     * Name of the security contact object
     */
    securityContactName?: pulumi.Input<string>;
}
