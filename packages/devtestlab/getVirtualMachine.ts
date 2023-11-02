import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get virtual machine.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getVirtualMachine(args: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getVirtualMachine", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVirtualMachineArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the virtual machine.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A virtual machine.
 */
export interface GetVirtualMachineResult {
    /**
     * Indicates whether another user can take ownership of the virtual machine
     */
    readonly allowClaim?: boolean;
    /**
     * The applicable schedule for the virtual machine.
     */
    readonly applicableSchedule: types.outputs.ApplicableScheduleResponse;
    /**
     * The artifact deployment status for the virtual machine.
     */
    readonly artifactDeploymentStatus: types.outputs.ArtifactDeploymentStatusPropertiesResponse;
    /**
     * The artifacts to be installed on the virtual machine.
     */
    readonly artifacts?: types.outputs.ArtifactInstallPropertiesResponse[];
    /**
     * The resource identifier (Microsoft.Compute) of the virtual machine.
     */
    readonly computeId: string;
    /**
     * The compute virtual machine properties.
     */
    readonly computeVm: types.outputs.ComputeVmPropertiesResponse;
    /**
     * The email address of creator of the virtual machine.
     */
    readonly createdByUser: string;
    /**
     * The object identifier of the creator of the virtual machine.
     */
    readonly createdByUserId: string;
    /**
     * The creation date of the virtual machine.
     */
    readonly createdDate?: string;
    /**
     * The custom image identifier of the virtual machine.
     */
    readonly customImageId?: string;
    /**
     * New or existing data disks to attach to the virtual machine after creation
     */
    readonly dataDiskParameters?: types.outputs.DataDiskPropertiesResponse[];
    /**
     * Indicates whether the virtual machine is to be created without a public IP address.
     */
    readonly disallowPublicIpAddress?: boolean;
    /**
     * The resource ID of the environment that contains this virtual machine, if any.
     */
    readonly environmentId?: string;
    /**
     * The expiration date for VM.
     */
    readonly expirationDate?: string;
    /**
     * The fully-qualified domain name of the virtual machine.
     */
    readonly fqdn: string;
    /**
     * The Microsoft Azure Marketplace image reference of the virtual machine.
     */
    readonly galleryImageReference?: types.outputs.GalleryImageReferenceResponse;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * Indicates whether this virtual machine uses an SSH key for authentication.
     */
    readonly isAuthenticationWithSshKey?: boolean;
    /**
     * The lab subnet name of the virtual machine.
     */
    readonly labSubnetName?: string;
    /**
     * The lab virtual network identifier of the virtual machine.
     */
    readonly labVirtualNetworkId?: string;
    /**
     * Last known compute power state captured in DTL
     */
    readonly lastKnownPowerState: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The network interface properties.
     */
    readonly networkInterface?: types.outputs.NetworkInterfacePropertiesResponse;
    /**
     * The notes of the virtual machine.
     */
    readonly notes?: string;
    /**
     * The OS type of the virtual machine.
     */
    readonly osType: string;
    /**
     * The object identifier of the owner of the virtual machine.
     */
    readonly ownerObjectId?: string;
    /**
     * The user principal name of the virtual machine owner.
     */
    readonly ownerUserPrincipalName?: string;
    /**
     * The password of the virtual machine administrator.
     */
    readonly password?: string;
    /**
     * The id of the plan associated with the virtual machine image
     */
    readonly planId?: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * Virtual Machine schedules to be created
     */
    readonly scheduleParameters?: types.outputs.ScheduleCreationParameterResponse[];
    /**
     * The size of the virtual machine.
     */
    readonly size?: string;
    /**
     * The SSH key of the virtual machine administrator.
     */
    readonly sshKey?: string;
    /**
     * Storage type to use for virtual machine (i.e. Standard, Premium).
     */
    readonly storageType?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * The user name of the virtual machine.
     */
    readonly userName?: string;
    /**
     * Tells source of creation of lab virtual machine. Output property only.
     */
    readonly virtualMachineCreationSource: string;
}
/**
 * Get virtual machine.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getVirtualMachineOutput(args: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachine(a, opts))
}

export interface GetVirtualMachineOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
