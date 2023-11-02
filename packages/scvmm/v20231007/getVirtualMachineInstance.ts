import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a virtual machine instance.
 */
export function getVirtualMachineInstance(args: GetVirtualMachineInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm/v20231007:getVirtualMachineInstance", {
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
    readonly availabilitySets?: types.outputs.VirtualMachineInstancePropertiesResponseAvailabilitySets[];
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Hardware properties.
     */
    readonly hardwareProfile?: types.outputs.HardwareProfileResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Gets the infrastructure profile.
     */
    readonly infrastructureProfile?: types.outputs.InfrastructureProfileResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network properties.
     */
    readonly networkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * OS properties.
     */
    readonly osProfile?: types.outputs.OsProfileForVMInstanceResponse;
    /**
     * Gets the power state of the virtual machine.
     */
    readonly powerState: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Storage properties.
     */
    readonly storageProfile?: types.outputs.StorageProfileResponse;
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
 * Retrieves information about a virtual machine instance.
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
