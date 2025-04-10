import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contact details and configurations for notifications coming from Microsoft Defender for Cloud.
 *
 * Uses Azure REST API version 2020-01-01-preview. In version 1.x of the Azure Native provider, it used API version 2020-01-01-preview.
 *
 * Other available API versions: 2017-08-01-preview, 2023-12-01-preview.
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
    public static readonly __pulumiType = 'azure-native:security:SecurityContact';

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
     * Defines whether to send email notifications about new security alerts
     */
    public readonly alertNotifications!: pulumi.Output<types.outputs.SecurityContactPropertiesResponseAlertNotifications | undefined>;
    /**
     * List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact.
     */
    public readonly emails!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
     */
    public readonly notificationsByRole!: pulumi.Output<types.outputs.SecurityContactPropertiesResponseNotificationsByRole | undefined>;
    /**
     * The security contact's phone number
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
    constructor(name: string, args?: SecurityContactArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["alertNotifications"] = args ? args.alertNotifications : undefined;
            resourceInputs["emails"] = args ? args.emails : undefined;
            resourceInputs["notificationsByRole"] = args ? args.notificationsByRole : undefined;
            resourceInputs["phone"] = args ? args.phone : undefined;
            resourceInputs["securityContactName"] = args ? args.securityContactName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alertNotifications"] = undefined /*out*/;
            resourceInputs["emails"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationsByRole"] = undefined /*out*/;
            resourceInputs["phone"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20170801preview:SecurityContact" }, { type: "azure-native:security/v20200101preview:SecurityContact" }, { type: "azure-native:security/v20231201preview:SecurityContact" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityContact.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityContact resource.
 */
export interface SecurityContactArgs {
    /**
     * Defines whether to send email notifications about new security alerts
     */
    alertNotifications?: pulumi.Input<types.inputs.SecurityContactPropertiesAlertNotificationsArgs>;
    /**
     * List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact.
     */
    emails?: pulumi.Input<string>;
    /**
     * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
     */
    notificationsByRole?: pulumi.Input<types.inputs.SecurityContactPropertiesNotificationsByRoleArgs>;
    /**
     * The security contact's phone number
     */
    phone?: pulumi.Input<string>;
    /**
     * Name of the security contact object
     */
    securityContactName?: pulumi.Input<string>;
}