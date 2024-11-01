import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the GroupQuotas for the name passed. It will return the GroupQuotas properties only. The details on group quota can be access from the group quota APIs.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2024-10-15-preview.
 */
export function getGroupQuota(args: GetGroupQuotaArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupQuotaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:quota:getGroupQuota", {
        "groupQuotaName": args.groupQuotaName,
        "managementGroupId": args.managementGroupId,
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
    managementGroupId: string;
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
 * Gets the GroupQuotas for the name passed. It will return the GroupQuotas properties only. The details on group quota can be access from the group quota APIs.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2024-10-15-preview.
 */
export function getGroupQuotaOutput(args: GetGroupQuotaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGroupQuotaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:quota:getGroupQuota", {
        "groupQuotaName": args.groupQuotaName,
        "managementGroupId": args.managementGroupId,
    }, opts);
}

export interface GetGroupQuotaOutputArgs {
    /**
     * The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
     */
    groupQuotaName: pulumi.Input<string>;
    /**
     * Management Group Id.
     */
    managementGroupId: pulumi.Input<string>;
}