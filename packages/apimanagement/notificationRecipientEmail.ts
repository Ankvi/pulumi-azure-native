import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Recipient Email details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NotificationRecipientEmail extends pulumi.CustomResource {
    /**
     * Get an existing NotificationRecipientEmail resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotificationRecipientEmail {
        return new NotificationRecipientEmail(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:NotificationRecipientEmail';

    /**
     * Returns true if the given object is an instance of NotificationRecipientEmail.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationRecipientEmail {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationRecipientEmail.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * User Email subscribed to notification.
     */
    public readonly email!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NotificationRecipientEmail resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationRecipientEmailArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.notificationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notificationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["notificationName"] = args ? args.notificationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20180101:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20180601preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20190101:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20191201:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20191201preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20200601preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20201201:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20210101preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20210401preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20210801:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20211201preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20220401preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20220801:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20220901preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20230301preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20230501preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20230901preview:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20240501:NotificationRecipientEmail" }, { type: "azure-native:apimanagement/v20240601preview:NotificationRecipientEmail" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NotificationRecipientEmail.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NotificationRecipientEmail resource.
 */
export interface NotificationRecipientEmailArgs {
    /**
     * Email identifier.
     */
    email?: pulumi.Input<string>;
    /**
     * Notification Name Identifier.
     */
    notificationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}