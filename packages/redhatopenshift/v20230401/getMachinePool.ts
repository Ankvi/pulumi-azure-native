import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation returns properties of a MachinePool.
 */
export function getMachinePool(args: GetMachinePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetMachinePoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redhatopenshift/v20230401:getMachinePool", {
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
 */
export function getMachinePoolOutput(args: GetMachinePoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachinePoolResult> {
    return pulumi.output(args).apply((a: any) => getMachinePool(a, opts))
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