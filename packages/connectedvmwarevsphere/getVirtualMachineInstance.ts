import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a virtual machine instance.
 * Azure REST API version: 2023-03-01-preview.
 */
export function getVirtualMachineInstance(args: GetVirtualMachineInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getVirtualMachineInstance", {
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
     * Gets or sets the extended location.
     */
    readonly extendedLocation?: types.outputs.connectedvmwarevsphere.ExtendedLocationResponse;
    /**
     * Hardware properties.
     */
    readonly hardwareProfile?: types.outputs.connectedvmwarevsphere.HardwareProfileResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Gets the infrastructure profile.
     */
    readonly infrastructureProfile?: types.outputs.connectedvmwarevsphere.InfrastructureProfileResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network properties.
     */
    readonly networkProfile?: types.outputs.connectedvmwarevsphere.NetworkProfileResponse;
    /**
     * OS properties.
     */
    readonly osProfile?: types.outputs.connectedvmwarevsphere.OsProfileForVMInstanceResponse;
    /**
     * Placement properties.
     */
    readonly placementProfile?: types.outputs.connectedvmwarevsphere.PlacementProfileResponse;
    /**
     * Gets the power state of the virtual machine.
     */
    readonly powerState: string;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets a unique identifier for the vm resource.
     */
    readonly resourceUid: string;
    /**
     * Gets the security profile.
     */
    readonly securityProfile?: types.outputs.connectedvmwarevsphere.SecurityProfileResponse;
    /**
     * The resource status information.
     */
    readonly statuses: types.outputs.connectedvmwarevsphere.ResourceStatusResponse[];
    /**
     * Storage properties.
     */
    readonly storageProfile?: types.outputs.connectedvmwarevsphere.StorageProfileResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.connectedvmwarevsphere.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves information about a virtual machine instance.
 * Azure REST API version: 2023-03-01-preview.
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
