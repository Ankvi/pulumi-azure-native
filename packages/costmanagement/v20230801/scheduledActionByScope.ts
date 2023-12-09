import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Scheduled action definition.
 */
export class ScheduledActionByScope extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledActionByScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScheduledActionByScope {
        return new ScheduledActionByScope(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement/v20230801:ScheduledActionByScope';

    /**
     * Returns true if the given object is an instance of ScheduledActionByScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScheduledActionByScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScheduledActionByScope.__pulumiType;
    }

    /**
     * Scheduled action name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Resource Etag. For update calls, eTag is optional and can be specified to achieve optimistic concurrency. Fetch the resource's eTag by doing a 'GET' call first and then including the latest eTag as part of the request body or 'If-Match' header while performing the update. For create calls, eTag is not required.
     */
    public /*out*/ readonly eTag!: pulumi.Output<string>;
    /**
     * Destination format of the view data. This is optional.
     */
    public readonly fileDestination!: pulumi.Output<types.outputs.FileDestinationResponse | undefined>;
    /**
     * Kind of the scheduled action.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notification properties based on scheduled action kind.
     */
    public readonly notification!: pulumi.Output<types.outputs.NotificationPropertiesResponse>;
    /**
     * Email address of the point of contact that should get the unsubscribe requests and notification emails.
     */
    public readonly notificationEmail!: pulumi.Output<string | undefined>;
    /**
     * Schedule of the scheduled action.
     */
    public readonly schedule!: pulumi.Output<types.outputs.SchedulePropertiesResponse>;
    /**
     * For private scheduled action(Create or Update), scope will be empty.<br /> For shared scheduled action(Create or Update By Scope), Cost Management scope can be 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Status of the scheduled action.
     */
    public readonly status!: pulumi.Output<string>;
    /**
     * Kind of the scheduled action.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample'
     */
    public readonly viewId!: pulumi.Output<string>;

    /**
     * Create a ScheduledActionByScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledActionByScopeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.notification === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notification'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.status === undefined) && !opts.urn) {
                throw new Error("Missing required property 'status'");
            }
            if ((!args || args.viewId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'viewId'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["fileDestination"] = args ? args.fileDestination : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notification"] = args ? args.notification : undefined;
            resourceInputs["notificationEmail"] = args ? args.notificationEmail : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["viewId"] = args ? args.viewId : undefined;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["fileDestination"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notification"] = undefined /*out*/;
            resourceInputs["notificationEmail"] = undefined /*out*/;
            resourceInputs["schedule"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["viewId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement:ScheduledActionByScope" }, { type: "azure-native:costmanagement/v20220401preview:ScheduledActionByScope" }, { type: "azure-native:costmanagement/v20220601preview:ScheduledActionByScope" }, { type: "azure-native:costmanagement/v20221001:ScheduledActionByScope" }, { type: "azure-native:costmanagement/v20230301:ScheduledActionByScope" }, { type: "azure-native:costmanagement/v20230401preview:ScheduledActionByScope" }, { type: "azure-native:costmanagement/v20231101:ScheduledActionByScope" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScheduledActionByScope.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScheduledActionByScope resource.
 */
export interface ScheduledActionByScopeArgs {
    /**
     * Scheduled action name.
     */
    displayName: pulumi.Input<string>;
    /**
     * Destination format of the view data. This is optional.
     */
    fileDestination?: pulumi.Input<types.inputs.FileDestinationArgs>;
    /**
     * Kind of the scheduled action.
     */
    kind?: pulumi.Input<string | types.enums.ScheduledActionKind>;
    /**
     * Scheduled action name.
     */
    name?: pulumi.Input<string>;
    /**
     * Notification properties based on scheduled action kind.
     */
    notification: pulumi.Input<types.inputs.NotificationPropertiesArgs>;
    /**
     * Email address of the point of contact that should get the unsubscribe requests and notification emails.
     */
    notificationEmail?: pulumi.Input<string>;
    /**
     * Schedule of the scheduled action.
     */
    schedule: pulumi.Input<types.inputs.SchedulePropertiesArgs>;
    /**
     * For private scheduled action(Create or Update), scope will be empty.<br /> For shared scheduled action(Create or Update By Scope), Cost Management scope can be 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
     */
    scope: pulumi.Input<string>;
    /**
     * Status of the scheduled action.
     */
    status: pulumi.Input<string | types.enums.ScheduledActionStatus>;
    /**
     * Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample'
     */
    viewId: pulumi.Input<string>;
}
