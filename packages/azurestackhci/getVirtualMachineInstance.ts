import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a virtual machine instance
 *
 * Uses Azure REST API version 2025-02-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2024-01-01, 2024-02-01-preview, 2024-05-01-preview, 2024-07-15-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-04-01-preview, 2025-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualMachineInstance(args: GetVirtualMachineInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getVirtualMachineInstance", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetVirtualMachineInstanceArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * The virtual machine instance resource definition.
 */
export interface GetVirtualMachineInstanceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Boolean indicating whether this is an existing local virtual machine or if one should be created.
     */
    readonly createFromLocal?: boolean;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Guest agent install status.
     */
    readonly guestAgentInstallStatus?: types.outputs.GuestAgentInstallStatusResponse;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine instance.
     */
    readonly hardwareProfile?: types.outputs.VirtualMachineInstancePropertiesHardwareProfileResponse;
    /**
     * HTTP Proxy configuration for the VM.
     */
    readonly httpProxyConfig?: types.outputs.HttpProxyConfigurationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The virtual machine instance view.
     */
    readonly instanceView: types.outputs.VirtualMachineInstanceViewResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * NetworkProfile - describes the network configuration the virtual machine instance
     */
    readonly networkProfile?: types.outputs.VirtualMachineInstancePropertiesNetworkProfileResponse;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    readonly osProfile?: types.outputs.VirtualMachineInstancePropertiesOsProfileResponse;
    /**
     * Provisioning state of the virtual machine instance.
     */
    readonly provisioningState: string;
    /**
     * Unique identifier defined by ARC to identify the guest of the VM.
     */
    readonly resourceUid?: string;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine instance.
     */
    readonly securityProfile?: types.outputs.VirtualMachineInstancePropertiesSecurityProfileResponse;
    /**
     * The observed state of virtual machine instances
     */
    readonly status: types.outputs.VirtualMachineInstanceStatusResponse;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine instance
     */
    readonly storageProfile?: types.outputs.VirtualMachineInstancePropertiesStorageProfileResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Unique identifier for the vm resource.
     */
    readonly vmId: string;
}
/**
 * Gets a virtual machine instance
 *
 * Uses Azure REST API version 2025-02-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2024-01-01, 2024-02-01-preview, 2024-05-01-preview, 2024-07-15-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-04-01-preview, 2025-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualMachineInstanceOutput(args: GetVirtualMachineInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualMachineInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getVirtualMachineInstance", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetVirtualMachineInstanceOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}