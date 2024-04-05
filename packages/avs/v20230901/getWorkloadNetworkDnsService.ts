import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadNetworkDnsService
 */
export function getWorkloadNetworkDnsService(args: GetWorkloadNetworkDnsServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkDnsServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getWorkloadNetworkDnsService", {
        "dnsServiceId": args.dnsServiceId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkDnsServiceArgs {
    /**
     * ID of the DNS service.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * DNS Service log level.
     */
    readonly logLevel?: string;
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
     * DNS Service status.
     */
    readonly status: string;
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
 * Get a WorkloadNetworkDnsService
 */
export function getWorkloadNetworkDnsServiceOutput(args: GetWorkloadNetworkDnsServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkDnsServiceResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkDnsService(a, opts))
}

export interface GetWorkloadNetworkDnsServiceOutputArgs {
    /**
     * ID of the DNS service.
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