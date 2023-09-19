import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about the model view or the instance view of a hybrid machine.
 */
export function getMachine(args: GetMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute/v20200815preview:getMachine", {
        "expand": args.expand,
        "name": args.name,
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
    name: string;
    /**
     * The name of the resource group.
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
     * The hybrid machine agent full version.
     */
    readonly agentVersion: string;
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    readonly clientPublicKey?: string;
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
     * Machine Extensions information
     */
    readonly extensions?: types.outputs.MachineExtensionInstanceViewResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    readonly identity?: types.outputs.MachineResponseIdentity;
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
    readonly locationData?: types.outputs.LocationDataResponse;
    /**
     * Specifies the hybrid machine FQDN.
     */
    readonly machineFqdn: string;
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
    readonly osProfile?: types.outputs.MachinePropertiesResponseOsProfile;
    /**
     * Specifies the Operating System product SKU.
     */
    readonly osSku: string;
    /**
     * The version of Operating System running on the hybrid machine.
     */
    readonly osVersion: string;
    /**
     * List of private link scoped resources associated with this machine.
     */
    readonly privateLinkScopedResources: string[];
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The status of the hybrid machine agent.
     */
    readonly status: string;
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
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
