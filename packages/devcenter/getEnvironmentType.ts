import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an environment type.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview.
 */
export function getEnvironmentType(args: GetEnvironmentTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getEnvironmentType", {
        "devCenterName": args.devCenterName,
        "environmentTypeName": args.environmentTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnvironmentTypeArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the environment type.
     */
    environmentTypeName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents an environment type.
 */
export interface GetEnvironmentTypeResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
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
 * Gets an environment type.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview.
 */
export function getEnvironmentTypeOutput(args: GetEnvironmentTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEnvironmentTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getEnvironmentType", {
        "devCenterName": args.devCenterName,
        "environmentTypeName": args.environmentTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnvironmentTypeOutputArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the environment type.
     */
    environmentTypeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}