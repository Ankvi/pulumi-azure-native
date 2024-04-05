import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the GroupQuotas for the name passed. It will return the GroupQuotas properties only. The details on groupQuota can be access from the groupQuota APIs.
 */
export function getGroupQuota(args: GetGroupQuotaArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupQuotaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:quota/v20230601preview:getGroupQuota", {
        "groupQuotaName": args.groupQuotaName,
        "mgId": args.mgId,
    }, opts);
}

export interface GetGroupQuotaArgs {
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
 * Properties and filters for ShareQuota. The request parameter is optional, if there are no filters specified.
 */
export interface GetGroupQuotaResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties and filters for ShareQuota. The request parameter is optional, if there are no filters specified.
     */
    readonly properties: types.outputs.GroupQuotasEntityBaseResponse;
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
 * Gets the GroupQuotas for the name passed. It will return the GroupQuotas properties only. The details on groupQuota can be access from the groupQuota APIs.
 */
export function getGroupQuotaOutput(args: GetGroupQuotaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGroupQuotaResult> {
    return pulumi.output(args).apply((a: any) => getGroupQuota(a, opts))
}

export interface GetGroupQuotaOutputArgs {
    /**
     * The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
     */
    groupQuotaName: pulumi.Input<string>;
    /**
     * Management Group Id.
     */
    mgId: pulumi.Input<string>;
}