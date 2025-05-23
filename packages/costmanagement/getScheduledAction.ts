import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the private scheduled action by name.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-06-01-preview, 2022-10-01, 2023-03-01, 2023-04-01-preview, 2023-07-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-10-01-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native costmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScheduledAction(args: GetScheduledActionArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledActionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getScheduledAction", {
        "name": args.name,
    }, opts);
}

export interface GetScheduledActionArgs {
    /**
     * Scheduled action name.
     */
    name: string;
}

/**
 * Scheduled action definition.
 */
export interface GetScheduledActionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Scheduled action name.
     */
    readonly displayName: string;
    /**
     * Resource Etag. For update calls, eTag is optional and can be specified to achieve optimistic concurrency. Fetch the resource's eTag by doing a 'GET' call first and then including the latest eTag as part of the request body or 'If-Match' header while performing the update. For create calls, eTag is not required.
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
     * For private scheduled action(Create or Update), scope will be empty.<br /> For shared scheduled action(Create or Update By Scope), Cost Management scope can be 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
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
 * Get the private scheduled action by name.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-06-01-preview, 2022-10-01, 2023-03-01, 2023-04-01-preview, 2023-07-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-10-01-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native costmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScheduledActionOutput(args: GetScheduledActionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledActionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:costmanagement:getScheduledAction", {
        "name": args.name,
    }, opts);
}

export interface GetScheduledActionOutputArgs {
    /**
     * Scheduled action name.
     */
    name: pulumi.Input<string>;
}