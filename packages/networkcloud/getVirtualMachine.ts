import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided virtual machine.
 *
 * Uses Azure REST API version 2025-02-01.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualMachine(args: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getVirtualMachine", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine.
     */
    virtualMachineName: string;
}

export interface GetVirtualMachineResult {
    /**
     * The name of the administrator to which the ssh public keys will be added into the authorized keys.
     */
    readonly adminUsername: string;
    /**
     * The cluster availability zone containing this virtual machine.
     */
    readonly availabilityZone: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource ID of the bare metal machine that hosts the virtual machine.
     */
    readonly bareMetalMachineId: string;
    /**
     * Selects the boot method for the virtual machine.
     */
    readonly bootMethod?: string;
    /**
     * The cloud service network that provides platform-level services for the virtual machine.
     */
    readonly cloudServicesNetworkAttachment: types.outputs.NetworkAttachmentResponse;
    /**
     * The resource ID of the cluster the virtual machine is created for.
     */
    readonly clusterId: string;
    /**
     * The extended location to use for creation of a VM console resource.
     */
    readonly consoleExtendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The number of CPU cores in the virtual machine.
     */
    readonly cpuCores: number;
    /**
     * The more detailed status of the virtual machine.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * Resource ETag.
     */
    readonly etag: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Field Deprecated, the value will be ignored if provided. The indicator of whether one of the specified CPU cores is isolated to run the emulator thread for this virtual machine.
     */
    readonly isolateEmulatorThread?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The memory size of the virtual machine. Allocations are measured in gibibytes.
     */
    readonly memorySizeGB: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The list of network attachments to the virtual machine.
     */
    readonly networkAttachments?: types.outputs.NetworkAttachmentResponse[];
    /**
     * The Base64 encoded cloud-init network data.
     */
    readonly networkData?: string;
    /**
     * The scheduling hints for the virtual machine.
     */
    readonly placementHints?: types.outputs.VirtualMachinePlacementHintResponse[];
    /**
     * The power state of the virtual machine.
     */
    readonly powerState: string;
    /**
     * The provisioning state of the virtual machine.
     */
    readonly provisioningState: string;
    /**
     * The list of ssh public keys. Each key will be added to the virtual machine using the cloud-init ssh_authorized_keys mechanism for the adminUsername.
     */
    readonly sshPublicKeys?: types.outputs.SshPublicKeyResponse[];
    /**
     * The storage profile that specifies size and other parameters about the disks related to the virtual machine.
     */
    readonly storageProfile: types.outputs.StorageProfileResponse;
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
     * The Base64 encoded cloud-init user data.
     */
    readonly userData?: string;
    /**
     * Field Deprecated, use virtualizationModel instead. The type of the virtio interface.
     */
    readonly virtioInterface?: string;
    /**
     * The type of the device model to use.
     */
    readonly vmDeviceModel?: string;
    /**
     * The virtual machine image that is currently provisioned to the OS disk, using the full url and tag notation used to pull the image.
     */
    readonly vmImage: string;
    /**
     * The credentials used to login to the image repository that has access to the specified image.
     */
    readonly vmImageRepositoryCredentials?: types.outputs.ImageRepositoryCredentialsResponse;
    /**
     * The resource IDs of volumes that are attached to the virtual machine.
     */
    readonly volumes: string[];
}
/**
 * Get properties of the provided virtual machine.
 *
 * Uses Azure REST API version 2025-02-01.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualMachineOutput(args: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getVirtualMachine", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    virtualMachineName: pulumi.Input<string>;
}