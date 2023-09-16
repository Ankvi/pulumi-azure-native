import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a virtual machine instance.
 * Azure REST API version: 2023-04-01-preview.
 */
export function getVirtualMachineInstance(args: GetVirtualMachineInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getVirtualMachineInstance", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetVirtualMachineInstanceArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: string;
}

/**
 * Define the virtualMachineInstance.
 */
export interface GetVirtualMachineInstanceResult {
    /**
     * Availability Sets in vm.
     */
    readonly availabilitySets?: types.outputs.scvmm.VirtualMachineInstancePropertiesResponseAvailabilitySets[];
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation: types.outputs.scvmm.ExtendedLocationResponse;
    /**
     * Hardware properties.
     */
    readonly hardwareProfile?: types.outputs.scvmm.HardwareProfileResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Gets the infrastructure profile.
     */
    readonly infrastructureProfile?: types.outputs.scvmm.InfrastructureProfileResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network properties.
     */
    readonly networkProfile?: types.outputs.scvmm.NetworkProfileResponse;
    /**
     * OS properties.
     */
    readonly osProfile?: types.outputs.scvmm.OsProfileForVMInstanceResponse;
    /**
     * Gets the power state of the virtual machine.
     */
    readonly powerState: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Storage properties.
     */
    readonly storageProfile?: types.outputs.scvmm.StorageProfileResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.scvmm.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves information about a virtual machine instance.
 * Azure REST API version: 2023-04-01-preview.
 */
export function getVirtualMachineInstanceOutput(args: GetVirtualMachineInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineInstanceResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineInstance(a, opts))
}

export interface GetVirtualMachineInstanceOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: pulumi.Input<string>;
}
