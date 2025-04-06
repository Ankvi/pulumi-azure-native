import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 *
 * Uses Azure REST API version 2017-02-01.
 */
export function getRedisLinkedServer(args: GetRedisLinkedServerArgs, opts?: pulumi.InvokeOptions): Promise<GetRedisLinkedServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redis:getRedisLinkedServer", {
        "linkedServerName": args.linkedServerName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRedisLinkedServerArgs {
    /**
     * The name of the linked server.
     */
    linkedServerName: string;
    /**
     * The name of the redis cache.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Response to put/get linked server (with properties) for Redis cache.
 */
export interface GetRedisLinkedServerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource ID.
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
     * Resource name.
     */
    readonly name: string;
    /**
     * Terminal state of the link between primary and secondary redis cache.
     */
    readonly provisioningState: string;
    /**
     * Role of the linked server.
     */
    readonly serverRole: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 *
 * Uses Azure REST API version 2017-02-01.
 */
export function getRedisLinkedServerOutput(args: GetRedisLinkedServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRedisLinkedServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redis:getRedisLinkedServer", {
        "linkedServerName": args.linkedServerName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRedisLinkedServerOutputArgs {
    /**
     * The name of the linked server.
     */
    linkedServerName: pulumi.Input<string>;
    /**
     * The name of the redis cache.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}