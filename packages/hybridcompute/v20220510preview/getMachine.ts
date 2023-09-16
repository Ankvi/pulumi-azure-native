import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves information about the model view or the instance view of a hybrid machine.
 */
export function getMachine(args: GetMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute/v20220510preview:getMachine", {
        "expand": args.expand,
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMachineArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: string;
    /**
     * The name of the hybrid machine.
     */
    machineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a hybrid machine.
 */
export interface GetMachineResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.hybridcompute.v20220510preview.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Hybrid Compute Machine properties
     */
    readonly properties: types.outputs.hybridcompute.v20220510preview.MachinePropertiesResponse;
    /**
     * The list of extensions affiliated to the machine
     */
    readonly resources: types.outputs.hybridcompute.v20220510preview.MachineExtensionResponse[];
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.hybridcompute.v20220510preview.SystemDataResponse;
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
 * Retrieves information about the model view or the instance view of a hybrid machine.
 */
export function getMachineOutput(args: GetMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineResult> {
    return pulumi.output(args).apply((a: any) => getMachine(a, opts))
}

export interface GetMachineOutputArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the hybrid machine.
     */
    machineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
