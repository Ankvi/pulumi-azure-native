import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadNetworkDnsService
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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