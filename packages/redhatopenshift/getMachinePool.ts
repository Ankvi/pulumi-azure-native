import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation returns properties of a MachinePool.
 *
 * Uses Azure REST API version 2022-09-04.
 *
 * Other available API versions: 2023-04-01, 2023-07-01-preview, 2023-09-04, 2023-11-22.
 */
export function getMachinePool(args: GetMachinePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetMachinePoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redhatopenshift:getMachinePool", {
        "childResourceName": args.childResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetMachinePoolArgs {
    /**
     * The name of the MachinePool resource.
     */
    childResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: string;
}

/**
 * MachinePool represents a MachinePool
 */
export interface GetMachinePoolResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly resources?: string;
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
 * The operation returns properties of a MachinePool.
 *
 * Uses Azure REST API version 2022-09-04.
 *
 * Other available API versions: 2023-04-01, 2023-07-01-preview, 2023-09-04, 2023-11-22.
 */
export function getMachinePoolOutput(args: GetMachinePoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMachinePoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redhatopenshift:getMachinePool", {
        "childResourceName": args.childResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetMachinePoolOutputArgs {
    /**
     * The name of the MachinePool resource.
     */
    childResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: pulumi.Input<string>;
}