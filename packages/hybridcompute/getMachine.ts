import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about the model view or the instance view of a hybrid machine.
 * Azure REST API version: 2022-12-27.
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
    readonly agentConfiguration: types.outputs.hybridcompute.AgentConfigurationResponse;
    /**
     * The info of the machine w.r.t Agent Upgrade
     */
    readonly agentUpgrade?: types.outputs.hybridcompute.AgentUpgradeResponse;
    /**
     * The hybrid machine agent full version.
     */
    readonly agentVersion: string;
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    readonly clientPublicKey?: string;
    /**
     * The metadata of the cloud environment (Azure/GCP/AWS/OCI...).
     */
    readonly cloudMetadata?: types.outputs.hybridcompute.CloudMetadataResponse;
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
    readonly errorDetails: types.outputs.hybridcompute.ErrorDetailResponse[];
    /**
     * Machine Extensions information (deprecated field)
     */
    readonly extensions?: types.outputs.hybridcompute.MachineExtensionInstanceViewResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.hybridcompute.IdentityResponse;
    /**
     * The time of the last status change.
     */
    readonly lastStatusChange: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    readonly locationData?: types.outputs.hybridcompute.LocationDataResponse;
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
     * The Operating System running on the hybrid machine.
     */
    readonly osName: string;
    /**
     * Specifies the operating system settings for the hybrid machine.
     */
    readonly osProfile?: types.outputs.hybridcompute.OSProfileResponse;
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
    readonly resources: types.outputs.hybridcompute.MachineExtensionResponse[];
    /**
     * Statuses of dependent services that are reported back to ARM.
     */
    readonly serviceStatuses?: types.outputs.hybridcompute.ServiceStatusesResponse;
    /**
     * The status of the hybrid machine agent.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.hybridcompute.SystemDataResponse;
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
 * Azure REST API version: 2022-12-27.
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
