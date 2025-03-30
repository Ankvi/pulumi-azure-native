import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a devcenter plan.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export function getPlan(args: GetPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getPlan", {
        "planName": args.planName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPlanArgs {
    /**
     * The name of the devcenter plan.
     */
    planName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a devcenter plan resource.
 */
export interface GetPlanResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU for DevCenters created using this definition.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a devcenter plan.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export function getPlanOutput(args: GetPlanOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getPlan", {
        "planName": args.planName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPlanOutputArgs {
    /**
     * The name of the devcenter plan.
     */
    planName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}