import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the subscriptionIds along with its provisioning state for being associated with the GroupQuota. If the subscription is not a member of GroupQuota, it will return 404, else 200.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2024-10-15-preview, 2024-12-18-preview, 2025-03-01, 2025-03-15-preview.
 */
export function getGroupQuotaSubscription(args: GetGroupQuotaSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupQuotaSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:quota:getGroupQuotaSubscription", {
        "groupQuotaName": args.groupQuotaName,
        "managementGroupId": args.managementGroupId,
    }, opts);
}

export interface GetGroupQuotaSubscriptionArgs {
    /**
     * The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
     */
    groupQuotaName: string;
    /**
     * Management Group Id.
     */
    managementGroupId: string;
}

/**
 * This represents a Azure subscriptionId that is associated with a GroupQuotasEntity.
 */
export interface GetGroupQuotaSubscriptionResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.GroupQuotaSubscriptionIdResponseProperties;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the subscriptionIds along with its provisioning state for being associated with the GroupQuota. If the subscription is not a member of GroupQuota, it will return 404, else 200.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2024-10-15-preview, 2024-12-18-preview, 2025-03-01, 2025-03-15-preview.
 */
export function getGroupQuotaSubscriptionOutput(args: GetGroupQuotaSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGroupQuotaSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:quota:getGroupQuotaSubscription", {
        "groupQuotaName": args.groupQuotaName,
        "managementGroupId": args.managementGroupId,
    }, opts);
}

export interface GetGroupQuotaSubscriptionOutputArgs {
    /**
     * The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
     */
    groupQuotaName: pulumi.Input<string>;
    /**
     * Management Group Id.
     */
    managementGroupId: pulumi.Input<string>;
}