import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Subscription entity.
 */
export function getSubscription(args: GetSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getSubscription", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "sid": args.sid,
    }, opts);
}

export interface GetSubscriptionArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
     */
    sid: string;
}

/**
 * Subscription details.
 */
export interface GetSubscriptionResult {
    /**
     * Determines whether tracing is enabled
     */
    readonly allowTracing?: boolean;
    /**
     * Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly createdDate: string;
    /**
     * The name of the subscription, or null if the subscription has no name.
     */
    readonly displayName?: string;
    /**
     * Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly endDate?: string;
    /**
     * Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly expirationDate?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly notificationDate?: string;
    /**
     * The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
     */
    readonly ownerId?: string;
    /**
     * Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly primaryKey?: string;
    /**
     * Scope like /products/{productId} or /apis or /apis/{apiId}.
     */
    readonly scope: string;
    /**
     * Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly secondaryKey?: string;
    /**
     * Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly startDate?: string;
    /**
     * Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
     */
    readonly state: string;
    /**
     * Optional subscription comment added by an administrator when the state is changed to the 'rejected'.
     */
    readonly stateComment?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified Subscription entity.
 */
export function getSubscriptionOutput(args: GetSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getSubscription(a, opts))
}

export interface GetSubscriptionOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
     */
    sid: pulumi.Input<string>;
}