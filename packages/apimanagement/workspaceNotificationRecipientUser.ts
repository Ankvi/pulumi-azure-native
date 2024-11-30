import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Recipient User details.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export class WorkspaceNotificationRecipientUser extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceNotificationRecipientUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceNotificationRecipientUser {
        return new WorkspaceNotificationRecipientUser(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:WorkspaceNotificationRecipientUser';

    /**
     * Returns true if the given object is an instance of WorkspaceNotificationRecipientUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceNotificationRecipientUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceNotificationRecipientUser.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * API Management UserId subscribed to notification.
     */
    public readonly userId!: pulumi.Output<string | undefined>;

    /**
     * Create a WorkspaceNotificationRecipientUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceNotificationRecipientUserArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["notificationName"] = args ? args.notificationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220901preview:WorkspaceNotificationRecipientUser" }, { type: "azure-native:apimanagement/v20230301preview:WorkspaceNotificationRecipientUser" }, { type: "azure-native:apimanagement/v20230501preview:WorkspaceNotificationRecipientUser" }, { type: "azure-native:apimanagement/v20230901preview:WorkspaceNotificationRecipientUser" }, { type: "azure-native:apimanagement/v20240501:WorkspaceNotificationRecipientUser" }, { type: "azure-native:apimanagement/v20240601preview:WorkspaceNotificationRecipientUser" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceNotificationRecipientUser.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceNotificationRecipientUser resource.
 */
export interface WorkspaceNotificationRecipientUserArgs {
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
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    userId?: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}