import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific gateway under a subscription and in a specific resource group
 *
 * Uses Azure REST API version 2016-06-01.
 */
export function getConnectionGateway(args: GetConnectionGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getConnectionGateway", {
        "connectionGatewayName": args.connectionGatewayName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetConnectionGatewayArgs {
    /**
     * The connection gateway name
     */
    connectionGatewayName: string;
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
 * The gateway definition
 */
export interface GetConnectionGatewayResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.ConnectionGatewayDefinitionResponseProperties;
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
 * Gets a specific gateway under a subscription and in a specific resource group
 *
 * Uses Azure REST API version 2016-06-01.
 */
export function getConnectionGatewayOutput(args: GetConnectionGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getConnectionGateway", {
        "connectionGatewayName": args.connectionGatewayName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetConnectionGatewayOutputArgs {
    /**
     * The connection gateway name
     */
    connectionGatewayName: pulumi.Input<string>;
    /**
     * The resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Subscription Id
     */
    subscriptionId?: pulumi.Input<string>;
}