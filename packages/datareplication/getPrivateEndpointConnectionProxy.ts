import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the private endpoint connection proxy details.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getPrivateEndpointConnectionProxy(args: GetPrivateEndpointConnectionProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionProxyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datareplication:getPrivateEndpointConnectionProxy", {
        "privateEndpointConnectionProxyName": args.privateEndpointConnectionProxyName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetPrivateEndpointConnectionProxyArgs {
    /**
     * The private endpoint connection proxy name.
     */
    privateEndpointConnectionProxyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The vault name.
     */
    vaultName: string;
}

/**
 * Represents private endpoint connection proxy request.
 */
export interface GetPrivateEndpointConnectionProxyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets or sets ETag.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.PrivateEndpointConnectionProxyPropertiesResponse;
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
 * Gets the private endpoint connection proxy details.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getPrivateEndpointConnectionProxyOutput(args: GetPrivateEndpointConnectionProxyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionProxyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datareplication:getPrivateEndpointConnectionProxy", {
        "privateEndpointConnectionProxyName": args.privateEndpointConnectionProxyName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetPrivateEndpointConnectionProxyOutputArgs {
    /**
     * The private endpoint connection proxy name.
     */
    privateEndpointConnectionProxyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The vault name.
     */
    vaultName: pulumi.Input<string>;
}