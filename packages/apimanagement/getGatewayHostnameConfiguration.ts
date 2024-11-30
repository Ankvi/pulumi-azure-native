import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get details of a hostname configuration
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getGatewayHostnameConfiguration(args: GetGatewayHostnameConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayHostnameConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getGatewayHostnameConfiguration", {
        "gatewayId": args.gatewayId,
        "hcId": args.hcId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGatewayHostnameConfigurationArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: string;
    /**
     * Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway entity.
     */
    hcId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Gateway hostname configuration details.
 */
export interface GetGatewayHostnameConfigurationResult {
    /**
     * Identifier of Certificate entity that will be used for TLS connection establishment
     */
    readonly certificateId?: string;
    /**
     * Hostname value. Supports valid domain name, partial or full wildcard
     */
    readonly hostname?: string;
    /**
     * Specifies if HTTP/2.0 is supported
     */
    readonly http2Enabled?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Determines whether gateway requests client certificate
     */
    readonly negotiateClientCertificate?: boolean;
    /**
     * Specifies if TLS 1.0 is supported
     */
    readonly tls10Enabled?: boolean;
    /**
     * Specifies if TLS 1.1 is supported
     */
    readonly tls11Enabled?: boolean;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get details of a hostname configuration
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getGatewayHostnameConfigurationOutput(args: GetGatewayHostnameConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayHostnameConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getGatewayHostnameConfiguration", {
        "gatewayId": args.gatewayId,
        "hcId": args.hcId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGatewayHostnameConfigurationOutputArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: pulumi.Input<string>;
    /**
     * Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway entity.
     */
    hcId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}