import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a StandbyVirtualMachinePoolResource
 * Azure REST API version: 2023-12-01-preview.
 *
 * Other available API versions: 2024-03-01, 2024-03-01-preview.
 */
export function getStandbyVirtualMachinePool(args: GetStandbyVirtualMachinePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetStandbyVirtualMachinePoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:standbypool:getStandbyVirtualMachinePool", {
        "resourceGroupName": args.resourceGroupName,
        "standbyVirtualMachinePoolName": args.standbyVirtualMachinePoolName,
    }, opts);
}

export interface GetStandbyVirtualMachinePoolArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the standby virtual machine pool
     */
    standbyVirtualMachinePoolName: string;
}

/**
 * A StandbyVirtualMachinePoolResource.
 */
export interface GetStandbyVirtualMachinePoolResult {
    /**
     * Specifies the fully qualified resource ID of a virtual machine scale set the pool is attached to.
     */
    readonly attachedVirtualMachineScaleSetId?: string;
    /**
     * Specifies the elasticity profile of the standby virtual machine pools.
     */
    readonly elasticityProfile?: types.outputs.StandbyVirtualMachinePoolElasticityProfileResponse;
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
     * The status of the last operation.
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
    /**
     * Specifies the desired state of virtual machines in the pool.
     */
    readonly virtualMachineState: string;
}
/**
 * Get a StandbyVirtualMachinePoolResource
 * Azure REST API version: 2023-12-01-preview.
 *
 * Other available API versions: 2024-03-01, 2024-03-01-preview.
 */
export function getStandbyVirtualMachinePoolOutput(args: GetStandbyVirtualMachinePoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStandbyVirtualMachinePoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:standbypool:getStandbyVirtualMachinePool", {
        "resourceGroupName": args.resourceGroupName,
        "standbyVirtualMachinePoolName": args.standbyVirtualMachinePoolName,
    }, opts);
}

export interface GetStandbyVirtualMachinePoolOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the standby virtual machine pool
     */
    standbyVirtualMachinePoolName: pulumi.Input<string>;
}