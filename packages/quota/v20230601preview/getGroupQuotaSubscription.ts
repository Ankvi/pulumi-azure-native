import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns the subscriptionId along with its provisioning state for being associated with the GroupQuotasEntity.
 */
export function getGroupQuotaSubscription(args: GetGroupQuotaSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupQuotaSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:quota/v20230601preview:getGroupQuotaSubscription", {
        "groupQuotaName": args.groupQuotaName,
        "mgId": args.mgId,
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
    mgId: string;
}

/**
 * This represents a Azure subscriptionId that is associated with a GroupQuotaSEntity.
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
    readonly properties: types.outputs.quota.v20230601preview.GroupQuotaSubscriptionIdResponseProperties;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.quota.v20230601preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the subscriptionId along with its provisioning state for being associated with the GroupQuotasEntity.
 */
export function getGroupQuotaSubscriptionOutput(args: GetGroupQuotaSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGroupQuotaSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getGroupQuotaSubscription(a, opts))
}

export interface GetGroupQuotaSubscriptionOutputArgs {
    /**
     * The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
     */
    groupQuotaName: pulumi.Input<string>;
    /**
     * Management Group Id.
     */
    mgId: pulumi.Input<string>;
}
