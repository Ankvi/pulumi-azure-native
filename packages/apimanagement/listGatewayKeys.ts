import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves gateway keys.
 * Azure REST API version: 2022-08-01.
 */
export function listGatewayKeys(args: ListGatewayKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListGatewayKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:listGatewayKeys", {
        "gatewayId": args.gatewayId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListGatewayKeysArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: string;
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
 * Gateway authentication keys.
 */
export interface ListGatewayKeysResult {
    /**
     * Primary gateway key.
     */
    readonly primary?: string;
    /**
     * Secondary gateway key.
     */
    readonly secondary?: string;
}
/**
 * Retrieves gateway keys.
 * Azure REST API version: 2022-08-01.
 */
export function listGatewayKeysOutput(args: ListGatewayKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGatewayKeysResult> {
    return pulumi.output(args).apply((a: any) => listGatewayKeys(a, opts))
}

export interface ListGatewayKeysOutputArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
