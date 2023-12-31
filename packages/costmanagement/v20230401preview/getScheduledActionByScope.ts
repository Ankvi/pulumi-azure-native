import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the shared scheduled action from the given scope by name.
 */
export function getScheduledActionByScope(args: GetScheduledActionByScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledActionByScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement/v20230401preview:getScheduledActionByScope", {
        "name": args.name,
        "scope": args.scope,
    }, opts);
}

export interface GetScheduledActionByScopeArgs {
    /**
     * Scheduled action name.
     */
    name: string;
    /**
     * The scope associated with scheduled action operations. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for External Billing Account scope and 'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External Subscription scope. Note: Insight Alerts are only available on subscription scope.
     */
    scope: string;
}

/**
 * Scheduled action definition.
 */
export interface GetScheduledActionByScopeResult {
    /**
     * Scheduled action name.
     */
    readonly displayName: string;
    /**
     * Resource Etag. For update calls, eTag is mandatory. Fetch the resource's eTag by doing a 'GET' call first and then including the latest eTag as part of the request body or 'If-Match' header while performing the update. For create calls, eTag is not required.
     */
    readonly eTag: string;
    /**
     * Destination format of the view data. This is optional.
     */
    readonly fileDestination?: types.outputs.FileDestinationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Kind of the scheduled action.
     */
    readonly kind?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Notification properties based on scheduled action kind.
     */
    readonly notification: types.outputs.NotificationPropertiesResponse;
    /**
     * Email address of the point of contact that should get the unsubscribe requests and notification emails.
     */
    readonly notificationEmail?: string;
    /**
     * Schedule of the scheduled action.
     */
    readonly schedule: types.outputs.SchedulePropertiesResponse;
    /**
     * Cost Management scope like 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
     */
    readonly scope?: string;
    /**
     * Status of the scheduled action.
     */
    readonly status: string;
    /**
     * Kind of the scheduled action.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample'
     */
    readonly viewId: string;
}
/**
 * Get the shared scheduled action from the given scope by name.
 */
export function getScheduledActionByScopeOutput(args: GetScheduledActionByScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScheduledActionByScopeResult> {
    return pulumi.output(args).apply((a: any) => getScheduledActionByScope(a, opts))
}

export interface GetScheduledActionByScopeOutputArgs {
    /**
     * Scheduled action name.
     */
    name: pulumi.Input<string>;
    /**
     * The scope associated with scheduled action operations. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for External Billing Account scope and 'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External Subscription scope. Note: Insight Alerts are only available on subscription scope.
     */
    scope: pulumi.Input<string>;
}
