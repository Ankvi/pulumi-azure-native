import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadNetworkPublicIP
 */
export function getWorkloadNetworkPublicIP(args: GetWorkloadNetworkPublicIPArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkPublicIPResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getWorkloadNetworkPublicIP", {
        "privateCloudName": args.privateCloudName,
        "publicIPId": args.publicIPId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkPublicIPArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * ID of the DNS zone.
     */
    publicIPId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * NSX Public IP Block
 */
export interface GetWorkloadNetworkPublicIPResult {
    /**
     * Display name of the Public IP Block.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Number of Public IPs requested.
     */
    readonly numberOfPublicIPs?: number;
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * CIDR Block of the Public IP Block.
     */
    readonly publicIPBlock: string;
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
 * Get a WorkloadNetworkPublicIP
 */
export function getWorkloadNetworkPublicIPOutput(args: GetWorkloadNetworkPublicIPOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkPublicIPResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkPublicIP(a, opts))
}

export interface GetWorkloadNetworkPublicIPOutputArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * ID of the DNS zone.
     */
    publicIPId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}