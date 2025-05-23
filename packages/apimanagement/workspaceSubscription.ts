import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Subscription details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WorkspaceSubscription extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceSubscription {
        return new WorkspaceSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:WorkspaceSubscription';

    /**
     * Returns true if the given object is an instance of WorkspaceSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceSubscription.__pulumiType;
    }

    /**
     * Determines whether tracing is enabled
     */
    public readonly allowTracing!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * The name of the subscription, or null if the subscription has no name.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly endDate!: pulumi.Output<string | undefined>;
    /**
     * Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly expirationDate!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly notificationDate!: pulumi.Output<string | undefined>;
    /**
     * The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
     */
    public readonly ownerId!: pulumi.Output<string | undefined>;
    /**
     * Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    public readonly primaryKey!: pulumi.Output<string | undefined>;
    /**
     * Scope like /products/{productId} or /apis or /apis/{apiId}.
     */
    public readonly scope!: pulumi.Output<string>;
    /**
     * Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    public readonly secondaryKey!: pulumi.Output<string | undefined>;
    /**
     * Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly startDate!: pulumi.Output<string | undefined>;
    /**
     * Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Optional subscription comment added by an administrator when the state is changed to the 'rejected'.
     */
    public /*out*/ readonly stateComment!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkspaceSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["allowTracing"] = args ? args.allowTracing : undefined;
            resourceInputs["appType"] = args ? args.appType : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["notify"] = args ? args.notify : undefined;
            resourceInputs["ownerId"] = args ? args.ownerId : undefined;
            resourceInputs["primaryKey"] = args ? args.primaryKey : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["secondaryKey"] = args ? args.secondaryKey : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sid"] = args ? args.sid : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["endDate"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationDate"] = undefined /*out*/;
            resourceInputs["startDate"] = undefined /*out*/;
            resourceInputs["stateComment"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowTracing"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["endDate"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationDate"] = undefined /*out*/;
            resourceInputs["ownerId"] = undefined /*out*/;
            resourceInputs["primaryKey"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["secondaryKey"] = undefined /*out*/;
            resourceInputs["startDate"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateComment"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220901preview:WorkspaceSubscription" }, { type: "azure-native:apimanagement/v20230301preview:WorkspaceSubscription" }, { type: "azure-native:apimanagement/v20230501preview:WorkspaceSubscription" }, { type: "azure-native:apimanagement/v20230901preview:WorkspaceSubscription" }, { type: "azure-native:apimanagement/v20240501:WorkspaceSubscription" }, { type: "azure-native:apimanagement/v20240601preview:WorkspaceSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceSubscription resource.
 */
export interface WorkspaceSubscriptionArgs {
    /**
     * Determines whether tracing can be enabled
     */
    allowTracing?: pulumi.Input<boolean>;
    /**
     * Determines the type of application which send the create user request. Default is legacy publisher portal.
     */
    appType?: pulumi.Input<string>;
    /**
     * Subscription name.
     */
    displayName: pulumi.Input<string>;
    /**
     * Notify change in Subscription State. 
     *  - If false, do not send any email notification for change of state of subscription 
     *  - If true, send email notification of change of state of subscription 
     */
    notify?: pulumi.Input<boolean>;
    /**
     * User (user id path) for whom subscription is being created in form /users/{userId}
     */
    ownerId?: pulumi.Input<string>;
    /**
     * Primary subscription key. If not specified during request key will be generated automatically.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Scope like /products/{productId} or /apis or /apis/{apiId}.
     */
    scope: pulumi.Input<string>;
    /**
     * Secondary subscription key. If not specified during request key will be generated automatically.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
     */
    sid?: pulumi.Input<string>;
    /**
     * Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
     */
    state?: pulumi.Input<types.enums.SubscriptionState>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}