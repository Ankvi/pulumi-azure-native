import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a custom API by name for a specific subscription and resource group
 * Azure REST API version: 2016-06-01.
 */
export function getCustomApi(args: GetCustomApiArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getCustomApi", {
        "apiName": args.apiName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetCustomApiArgs {
    /**
     * API name
     */
    apiName: string;
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
 * A custom API
 */
export interface GetCustomApiResult {
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
    /**
     * Custom API properties
     */
    readonly properties: types.outputs.CustomApiPropertiesDefinitionResponse;
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
 * Gets a custom API by name for a specific subscription and resource group
 * Azure REST API version: 2016-06-01.
 */
export function getCustomApiOutput(args: GetCustomApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCustomApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getCustomApi", {
        "apiName": args.apiName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetCustomApiOutputArgs {
    /**
     * API name
     */
    apiName: pulumi.Input<string>;
    /**
     * The resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Subscription Id
     */
    subscriptionId?: pulumi.Input<string>;
}