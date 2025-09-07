import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a EnclaveResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualEnclave(args: GetVirtualEnclaveArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualEnclaveResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mission:getVirtualEnclave", {
        "resourceGroupName": args.resourceGroupName,
        "virtualEnclaveName": args.virtualEnclaveName,
    }, opts);
}

export interface GetVirtualEnclaveArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the enclaveResource Resource
     */
    virtualEnclaveName: string;
}

/**
 * Virtual Enclave Model Resource
 */
export interface GetVirtualEnclaveResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Deploy Bastion service (True or False).
     */
    readonly bastionEnabled?: boolean;
    /**
     * Community Resource Id.
     */
    readonly communityResourceId: string;
    /**
     * Enclave Address Spaces
     */
    readonly enclaveAddressSpaces: types.outputs.EnclaveAddressSpacesModelResponse;
    /**
     * Enclave default settings.
     */
    readonly enclaveDefaultSettings?: types.outputs.EnclaveDefaultSettingsModelResponse;
    /**
     * Enclave role assignments
     */
    readonly enclaveRoleAssignments?: types.outputs.RoleAssignmentItemResponse[];
    /**
     * Virtual Network.
     */
    readonly enclaveVirtualNetwork: types.outputs.EnclaveVirtualNetworkModelResponse;
    /**
     * Enclave specific policies
     */
    readonly governedServiceList?: types.outputs.GovernedServiceItemResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maintenance Mode configuration.
     */
    readonly maintenanceModeConfiguration?: types.outputs.MaintenanceModeConfigurationModelResponse;
    /**
     * Managed On Behalf Of Configuration.
     */
    readonly managedOnBehalfOfConfiguration: types.outputs.ManagedOnBehalfOfConfigurationResponse;
    /**
     * Managed resource group name.
     */
    readonly managedResourceGroupName: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning State.
     */
    readonly provisioningState: string;
    /**
     * List of resource ids created by Virtual Enclave.
     */
    readonly resourceCollection: string[];
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
     * Workload role assignments
     */
    readonly workloadRoleAssignments?: types.outputs.RoleAssignmentItemResponse[];
}
/**
 * Get a EnclaveResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualEnclaveOutput(args: GetVirtualEnclaveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualEnclaveResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mission:getVirtualEnclave", {
        "resourceGroupName": args.resourceGroupName,
        "virtualEnclaveName": args.virtualEnclaveName,
    }, opts);
}

export interface GetVirtualEnclaveOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the enclaveResource Resource
     */
    virtualEnclaveName: pulumi.Input<string>;
}