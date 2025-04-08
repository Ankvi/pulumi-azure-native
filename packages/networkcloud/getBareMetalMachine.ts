import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided bare metal machine.
 *
 * Uses Azure REST API version 2025-02-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBareMetalMachine(args: GetBareMetalMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetBareMetalMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getBareMetalMachine", {
        "bareMetalMachineName": args.bareMetalMachineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBareMetalMachineArgs {
    /**
     * The name of the bare metal machine.
     */
    bareMetalMachineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetBareMetalMachineResult {
    /**
     * The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
     */
    readonly associatedResourceIds: string[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The connection string for the baseboard management controller including IP address and protocol.
     */
    readonly bmcConnectionString: string;
    /**
     * The credentials of the baseboard management controller on this bare metal machine.
     */
    readonly bmcCredentials: types.outputs.AdministrativeCredentialsResponse;
    /**
     * The MAC address of the BMC device.
     */
    readonly bmcMacAddress: string;
    /**
     * The MAC address of a NIC connected to the PXE network.
     */
    readonly bootMacAddress: string;
    /**
     * The resource ID of the cluster this bare metal machine is associated with.
     */
    readonly clusterId: string;
    /**
     * The cordon status of the bare metal machine.
     */
    readonly cordonStatus: string;
    /**
     * The more detailed status of the bare metal machine.
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
     * The hardware inventory, including information acquired from the model/sku information and from the ironic inspector.
     */
    readonly hardwareInventory: types.outputs.HardwareInventoryResponse;
    /**
     * The details of the latest hardware validation performed for this bare metal machine.
     */
    readonly hardwareValidationStatus: types.outputs.HardwareValidationStatusResponse;
    /**
     * Field Deprecated. These fields will be empty/omitted. The list of the resource IDs for the HybridAksClusters that have nodes hosted on this bare metal machine.
     */
    readonly hybridAksClustersAssociatedIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of this machine represented by the host object in the Cluster's Kubernetes control plane.
     */
    readonly kubernetesNodeName: string;
    /**
     * The version of Kubernetes running on this machine.
     */
    readonly kubernetesVersion: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The cluster version that has been applied to this machine during deployment or a version update.
     */
    readonly machineClusterVersion?: string;
    /**
     * The custom details provided by the customer.
     */
    readonly machineDetails: string;
    /**
     * The OS-level hostname assigned to this machine.
     */
    readonly machineName: string;
    /**
     * The list of roles that are assigned to the cluster node running on this machine.
     */
    readonly machineRoles: string[];
    /**
     * The unique internal identifier of the bare metal machine SKU.
     */
    readonly machineSkuId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The IPv4 address that is assigned to the bare metal machine during the cluster deployment.
     */
    readonly oamIpv4Address: string;
    /**
     * The IPv6 address that is assigned to the bare metal machine during the cluster deployment.
     */
    readonly oamIpv6Address: string;
    /**
     * The image that is currently provisioned to the OS disk.
     */
    readonly osImage: string;
    /**
     * The power state derived from the baseboard management controller.
     */
    readonly powerState: string;
    /**
     * The provisioning state of the bare metal machine.
     */
    readonly provisioningState: string;
    /**
     * The resource ID of the rack where this bare metal machine resides.
     */
    readonly rackId: string;
    /**
     * The rack slot in which this bare metal machine is located, ordered from the bottom up i.e. the lowest slot is 1.
     */
    readonly rackSlot: number;
    /**
     * The indicator of whether the bare metal machine is ready to receive workloads.
     */
    readonly readyState: string;
    /**
     * The runtime protection status of the bare metal machine.
     */
    readonly runtimeProtectionStatus: types.outputs.RuntimeProtectionStatusResponse;
    /**
     * The list of statuses that represent secret rotation activity.
     */
    readonly secretRotationStatus: types.outputs.SecretRotationStatusResponse[];
    /**
     * The serial number of the bare metal machine.
     */
    readonly serialNumber: string;
    /**
     * The discovered value of the machine's service tag.
     */
    readonly serviceTag: string;
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
     * Field Deprecated. These fields will be empty/omitted. The list of the resource IDs for the VirtualMachines that are hosted on this bare metal machine.
     */
    readonly virtualMachinesAssociatedIds: string[];
}
/**
 * Get properties of the provided bare metal machine.
 *
 * Uses Azure REST API version 2025-02-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBareMetalMachineOutput(args: GetBareMetalMachineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBareMetalMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getBareMetalMachine", {
        "bareMetalMachineName": args.bareMetalMachineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBareMetalMachineOutputArgs {
    /**
     * The name of the bare metal machine.
     */
    bareMetalMachineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}