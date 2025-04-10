import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX DNS Service
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getWorkloadNetworkDnsService(args: GetWorkloadNetworkDnsServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkDnsServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getWorkloadNetworkDnsService", {
        "dnsServiceId": args.dnsServiceId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkDnsServiceArgs {
    /**
     * NSX DNS Service identifier. Generally the same as the DNS Service's display name
     */
    dnsServiceId: string;
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
 * NSX DNS Service
 */
export interface GetWorkloadNetworkDnsServiceResult {
    /**
     * Default DNS zone of the DNS Service.
     */
    readonly defaultDnsZone?: string;
    /**
     * Display name of the DNS Service.
     */
    readonly displayName?: string;
    /**
     * DNS service IP of the DNS Service.
     */
    readonly dnsServiceIp?: string;
    /**
     * FQDN zones of the DNS Service.
     */
    readonly fqdnZones?: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * DNS Service log level.
     */
    readonly logLevel?: string;
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
     * DNS Service status.
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * NSX DNS Service
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getWorkloadNetworkDnsServiceOutput(args: GetWorkloadNetworkDnsServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkloadNetworkDnsServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getWorkloadNetworkDnsService", {
        "dnsServiceId": args.dnsServiceId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkDnsServiceOutputArgs {
    /**
     * NSX DNS Service identifier. Generally the same as the DNS Service's display name
     */
    dnsServiceId: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}