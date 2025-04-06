import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about the model view or the instance view of a hybrid machine.
 *
 * Uses Azure REST API version 2024-07-10.
 *
 * Other available API versions: 2020-08-15-preview, 2021-01-28-preview, 2021-03-25-preview, 2021-04-22-preview, 2021-05-17-preview, 2021-05-20, 2021-06-10-preview, 2021-12-10-preview, 2022-03-10, 2022-05-10-preview, 2022-08-11-preview, 2022-11-10, 2022-12-27, 2022-12-27-preview, 2023-03-15-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMachine(args: GetMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute:getMachine", {
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
     * Specifies the AD fully qualified display name.
     */
    readonly adFqdn: string;
    /**
     * Configurable properties that the user can set locally via the azcmagent config command, or remotely via ARM.
     */
    readonly agentConfiguration: types.outputs.AgentConfigurationResponse;
    /**
     * The info of the machine w.r.t Agent Upgrade
     */
    readonly agentUpgrade?: types.outputs.AgentUpgradeResponse;
    /**
     * The hybrid machine agent full version.
     */
    readonly agentVersion: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    readonly clientPublicKey?: string;
    /**
     * The metadata of the cloud environment (Azure/GCP/AWS/OCI...).
     */
    readonly cloudMetadata?: types.outputs.CloudMetadataResponse;
    /**
     * Detected properties from the machine.
     */
    readonly detectedProperties: {[key: string]: string};
    /**
     * Specifies the hybrid machine display name.
     */
    readonly displayName: string;
    /**
     * Specifies the DNS fully qualified display name.
     */
    readonly dnsFqdn: string;
    /**
     * Specifies the Windows domain name.
     */
    readonly domainName: string;
    /**
     * Details about the error state.
     */
    readonly errorDetails: types.outputs.ErrorDetailResponse[];
    /**
     * Machine Extensions information (deprecated field)
     */
    readonly extensions?: types.outputs.MachineExtensionInstanceViewResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Indicates which kind of Arc machine placement on-premises, such as HCI, SCVMM or VMware etc.
     */
    readonly kind?: string;
    /**
     * The time of the last status change.
     */
    readonly lastStatusChange: string;
    /**
     * Specifies the License related properties for a machine.
     */
    readonly licenseProfile?: types.outputs.LicenseProfileMachineInstanceViewResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    readonly locationData?: types.outputs.LocationDataResponse;
    /**
     * Specifies the hybrid machine FQDN.
     */
    readonly machineFqdn: string;
    /**
     * Specifies whether any MS SQL instance is discovered on the machine.
     */
    readonly mssqlDiscovered?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Information about the network the machine is on.
     */
    readonly networkProfile: types.outputs.NetworkProfileResponse;
    /**
     * The edition of the Operating System.
     */
    readonly osEdition: string;
    /**
     * The Operating System running on the hybrid machine.
     */
    readonly osName: string;
    /**
     * Specifies the operating system settings for the hybrid machine.
     */
    readonly osProfile?: types.outputs.OSProfileResponse;
    /**
     * Specifies the Operating System product SKU.
     */
    readonly osSku: string;
    /**
     * The type of Operating System (windows/linux).
     */
    readonly osType?: string;
    /**
     * The version of Operating System running on the hybrid machine.
     */
    readonly osVersion: string;
    /**
     * The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any.
     */
    readonly parentClusterResourceId?: string;
    /**
     * The resource id of the private link scope this machine is assigned to, if any.
     */
    readonly privateLinkScopeResourceId?: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The list of extensions affiliated to the machine
     */
    readonly resources: types.outputs.MachineExtensionResponse[];
    /**
     * Statuses of dependent services that are reported back to ARM.
     */
    readonly serviceStatuses?: types.outputs.ServiceStatusesResponse;
    /**
     * The status of the hybrid machine agent.
     */
    readonly status: string;
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
     * Specifies the hybrid machine unique ID.
     */
    readonly vmId?: string;
    /**
     * Specifies the Arc Machine's unique SMBIOS ID
     */
    readonly vmUuid: string;
}
/**
 * Retrieves information about the model view or the instance view of a hybrid machine.
 *
 * Uses Azure REST API version 2024-07-10.
 *
 * Other available API versions: 2020-08-15-preview, 2021-01-28-preview, 2021-03-25-preview, 2021-04-22-preview, 2021-05-17-preview, 2021-05-20, 2021-06-10-preview, 2021-12-10-preview, 2022-03-10, 2022-05-10-preview, 2022-08-11-preview, 2022-11-10, 2022-12-27, 2022-12-27-preview, 2023-03-15-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMachineOutput(args: GetMachineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcompute:getMachine", {
        "expand": args.expand,
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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