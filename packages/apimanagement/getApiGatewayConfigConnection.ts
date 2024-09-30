import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an API Management gateway config connection resource description.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function getApiGatewayConfigConnection(args: GetApiGatewayConfigConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetApiGatewayConfigConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiGatewayConfigConnection", {
        "configConnectionName": args.configConnectionName,
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApiGatewayConfigConnectionArgs {
    /**
     * The name of the API Management gateway config connection.
     */
    configConnectionName: string;
    /**
     * The name of the API Management gateway.
     */
    gatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A single API Management gateway resource in List or Get response.
 */
export interface GetApiGatewayConfigConnectionResult {
    /**
     * The default hostname of the data-plane gateway.
     */
    readonly defaultHostname: string;
    /**
     * ETag of the resource.
     */
    readonly etag: string;
    /**
     * The hostnames of the data-plane gateway to which requests can be sent.
     */
    readonly hostnames?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current provisioning state of the API Management gateway config connection 
     */
    readonly provisioningState: string;
    /**
     * The link to the API Management service workspace.
     */
    readonly sourceId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an API Management gateway config connection resource description.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function getApiGatewayConfigConnectionOutput(args: GetApiGatewayConfigConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiGatewayConfigConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getApiGatewayConfigConnection", {
        "configConnectionName": args.configConnectionName,
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApiGatewayConfigConnectionOutputArgs {
    /**
     * The name of the API Management gateway config connection.
     */
    configConnectionName: pulumi.Input<string>;
    /**
     * The name of the API Management gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}