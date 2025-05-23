import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * (INTERNAL - DO NOT USE) Get the specified private endpoint connection proxy associated with the device update account.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getPrivateEndpointConnectionProxy(args: GetPrivateEndpointConnectionProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionProxyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceupdate:getPrivateEndpointConnectionProxy", {
        "accountName": args.accountName,
        "privateEndpointConnectionProxyId": args.privateEndpointConnectionProxyId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionProxyArgs {
    /**
     * Account name.
     */
    accountName: string;
    /**
     * The ID of the private endpoint connection proxy object.
     */
    privateEndpointConnectionProxyId: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Private endpoint connection proxy details.
 */
export interface GetPrivateEndpointConnectionProxyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * ETag from NRP.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the private endpoint connection proxy resource.
     */
    readonly provisioningState: string;
    /**
     * Remote private endpoint details.
     */
    readonly remotePrivateEndpoint?: types.outputs.RemotePrivateEndpointResponse;
    /**
     * Operation status.
     */
    readonly status?: string;
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
 * (INTERNAL - DO NOT USE) Get the specified private endpoint connection proxy associated with the device update account.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getPrivateEndpointConnectionProxyOutput(args: GetPrivateEndpointConnectionProxyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionProxyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceupdate:getPrivateEndpointConnectionProxy", {
        "accountName": args.accountName,
        "privateEndpointConnectionProxyId": args.privateEndpointConnectionProxyId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionProxyOutputArgs {
    /**
     * Account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The ID of the private endpoint connection proxy object.
     */
    privateEndpointConnectionProxyId: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}