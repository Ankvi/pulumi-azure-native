import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2017-10-01, 2018-03-01, 2019-07-01, 2020-06-01, 2020-12-01, 2021-06-01, 2022-05-01, 2022-06-01, 2023-04-01, 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLinkedServer(args: GetLinkedServerArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redis:getLinkedServer", {
        "linkedServerName": args.linkedServerName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLinkedServerArgs {
    /**
     * The name of the linked server.
     */
    linkedServerName: string;
    /**
     * The name of the redis cache.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response to put/get linked server (with properties) for Redis cache.
 */
export interface GetLinkedServerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The unchanging DNS name which will always point to current geo-primary cache among the linked redis caches for seamless Geo Failover experience.
     */
    readonly geoReplicatedPrimaryHostName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Fully qualified resourceId of the linked redis cache.
     */
    readonly linkedRedisCacheId: string;
    /**
     * Location of the linked redis cache.
     */
    readonly linkedRedisCacheLocation: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The changing DNS name that resolves to the current geo-primary cache among the linked redis caches before or after the Geo Failover.
     */
    readonly primaryHostName: string;
    /**
     * Terminal state of the link between primary and secondary redis cache.
     */
    readonly provisioningState: string;
    /**
     * Role of the linked server.
     */
    readonly serverRole: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2017-10-01, 2018-03-01, 2019-07-01, 2020-06-01, 2020-12-01, 2021-06-01, 2022-05-01, 2022-06-01, 2023-04-01, 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLinkedServerOutput(args: GetLinkedServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLinkedServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redis:getLinkedServer", {
        "linkedServerName": args.linkedServerName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLinkedServerOutputArgs {
    /**
     * The name of the linked server.
     */
    linkedServerName: pulumi.Input<string>;
    /**
     * The name of the redis cache.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}