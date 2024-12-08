import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific connection
 * Azure REST API version: 2016-06-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function getConnection(args: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetConnectionArgs {
    /**
     * Connection name
     */
    connectionName: string;
    /**
     * The resource group
     */
    resourceGroupName: string;
    /**
     * Subscription Id
     */
    subscriptionId?: string;
}

/**
 * API connection
 */
export interface GetConnectionResult {
    /**
     * Resource ETag
     */
    readonly etag?: string;
    /**
     * Resource id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    readonly properties: types.outputs.ApiConnectionDefinitionResponseProperties;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific connection
 * Azure REST API version: 2016-06-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function getConnectionOutput(args: GetConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetConnectionOutputArgs {
    /**
     * Connection name
     */
    connectionName: pulumi.Input<string>;
    /**
     * The resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Subscription Id
     */
    subscriptionId?: pulumi.Input<string>;
}