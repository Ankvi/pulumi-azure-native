import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves details about given subscription which is associated with the management group.
 *
 * Azure REST API version: 2021-04-01.
 */
export function getManagementGroupSubscription(args: GetManagementGroupSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementGroupSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:management:getManagementGroupSubscription", {
        "groupId": args.groupId,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetManagementGroupSubscriptionArgs {
    /**
     * Management Group ID.
     */
    groupId: string;
    /**
     * Subscription ID.
     */
    subscriptionId?: string;
}

/**
 * The details of subscription under management group.
 */
export interface GetManagementGroupSubscriptionResult {
    /**
     * The friendly name of the subscription.
     */
    readonly displayName?: string;
    /**
     * The fully qualified ID for the subscription.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000/subscriptions/0000000-0000-0000-0000-000000000001
     */
    readonly id: string;
    /**
     * The stringified id of the subscription. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly name: string;
    /**
     * The ID of the parent management group.
     */
    readonly parent?: types.outputs.management.DescendantParentGroupInfoResponse;
    /**
     * The state of the subscription.
     */
    readonly state?: string;
    /**
     * The AAD Tenant ID associated with the subscription. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly tenant?: string;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups/subscriptions
     */
    readonly type: string;
}
/**
 * Retrieves details about given subscription which is associated with the management group.
 *
 * Azure REST API version: 2021-04-01.
 */
export function getManagementGroupSubscriptionOutput(args: GetManagementGroupSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementGroupSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getManagementGroupSubscription(a, opts))
}

export interface GetManagementGroupSubscriptionOutputArgs {
    /**
     * Management Group ID.
     */
    groupId: pulumi.Input<string>;
    /**
     * Subscription ID.
     */
    subscriptionId?: pulumi.Input<string>;
}
