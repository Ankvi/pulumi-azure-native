import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a ConnectionPolicy.
 *
 * Uses Azure REST API version 2025-07-01.
 */
export function getConnectionPolicy(args: GetConnectionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getConnectionPolicy", {
        "connectionPolicyName": args.connectionPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetConnectionPolicyArgs {
    /**
     * The name of the ConnectionPolicy that is unique within a VirtualHub. This name can be used to access the resource.
     */
    connectionPolicyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: string;
}

/**
 * ConnectionPolicy resource defined for VirtualHub.
 */
export interface GetConnectionPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Properties of the ConnectionPolicy resource.
     */
    readonly properties: types.outputs.ConnectionPolicyPropertiesResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the details of a ConnectionPolicy.
 *
 * Uses Azure REST API version 2025-07-01.
 */
export function getConnectionPolicyOutput(args: GetConnectionPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getConnectionPolicy", {
        "connectionPolicyName": args.connectionPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetConnectionPolicyOutputArgs {
    /**
     * The name of the ConnectionPolicy that is unique within a VirtualHub. This name can be used to access the resource.
     */
    connectionPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}