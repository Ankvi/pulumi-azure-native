import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BrokerAuthorizationResource
 * Azure REST API version: 2024-07-01-preview.
 *
 * Other available API versions: 2024-08-15-preview, 2024-09-15-preview, 2024-11-01.
 */
export function getBrokerAuthorization(args: GetBrokerAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetBrokerAuthorizationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperations:getBrokerAuthorization", {
        "authorizationName": args.authorizationName,
        "brokerName": args.brokerName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerAuthorizationArgs {
    /**
     * Name of Instance broker authorization resource
     */
    authorizationName: string;
    /**
     * Name of broker.
     */
    brokerName: string;
    /**
     * Name of instance.
     */
    instanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Instance broker authorizations resource
 */
export interface GetBrokerAuthorizationResult {
    /**
     * Edge location of the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
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
    readonly properties: types.outputs.BrokerAuthorizationPropertiesResponse;
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
 * Get a BrokerAuthorizationResource
 * Azure REST API version: 2024-07-01-preview.
 *
 * Other available API versions: 2024-08-15-preview, 2024-09-15-preview, 2024-11-01.
 */
export function getBrokerAuthorizationOutput(args: GetBrokerAuthorizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBrokerAuthorizationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperations:getBrokerAuthorization", {
        "authorizationName": args.authorizationName,
        "brokerName": args.brokerName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerAuthorizationOutputArgs {
    /**
     * Name of Instance broker authorization resource
     */
    authorizationName: pulumi.Input<string>;
    /**
     * Name of broker.
     */
    brokerName: pulumi.Input<string>;
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}