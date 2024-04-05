import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX DNS Zone
 */
export function getWorkloadNetworkDnsZone(args: GetWorkloadNetworkDnsZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkDnsZoneResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230301:getWorkloadNetworkDnsZone", {
        "dnsZoneId": args.dnsZoneId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkDnsZoneArgs {
    /**
     * NSX DNS Zone identifier. Generally the same as the DNS Zone's display name
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
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * NSX DNS Zone
 */
export function getWorkloadNetworkDnsZoneOutput(args: GetWorkloadNetworkDnsZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkDnsZoneResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkDnsZone(a, opts))
}

export interface GetWorkloadNetworkDnsZoneOutputArgs {
    /**
     * NSX DNS Zone identifier. Generally the same as the DNS Zone's display name
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