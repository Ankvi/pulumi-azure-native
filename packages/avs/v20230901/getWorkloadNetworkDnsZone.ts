import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadNetworkDnsZone
 */
export function getWorkloadNetworkDnsZone(args: GetWorkloadNetworkDnsZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkDnsZoneResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getWorkloadNetworkDnsZone", {
        "dnsZoneId": args.dnsZoneId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkDnsZoneArgs {
    /**
     * ID of the DNS zone.
     */
    dnsZoneId: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * NSX DNS Zone
 */
export interface GetWorkloadNetworkDnsZoneResult {
    /**
     * Display name of the DNS Zone.
     */
    readonly displayName?: string;
    /**
     * DNS Server IP array of the DNS Zone.
     */
    readonly dnsServerIps?: string[];
    /**
     * Number of DNS Services using the DNS zone.
     */
    readonly dnsServices?: number;
    /**
     * Domain names of the DNS Zone.
     */
    readonly domain?: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * NSX revision number.
     */
    readonly revision?: number;
    /**
     * Source IP of the DNS Zone.
     */
    readonly sourceIp?: string;
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
 * Get a WorkloadNetworkDnsZone
 */
export function getWorkloadNetworkDnsZoneOutput(args: GetWorkloadNetworkDnsZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkDnsZoneResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkDnsZone(a, opts))
}

export interface GetWorkloadNetworkDnsZoneOutputArgs {
    /**
     * ID of the DNS zone.
     */
    dnsZoneId: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}