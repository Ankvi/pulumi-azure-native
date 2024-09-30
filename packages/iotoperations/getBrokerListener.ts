import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BrokerListenerResource
 * Azure REST API version: 2024-07-01-preview.
 *
 * Other available API versions: 2024-08-15-preview.
 */
export function getBrokerListener(args: GetBrokerListenerArgs, opts?: pulumi.InvokeOptions): Promise<GetBrokerListenerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperations:getBrokerListener", {
        "brokerName": args.brokerName,
        "instanceName": args.instanceName,
        "listenerName": args.listenerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerListenerArgs {
    /**
     * Name of broker.
     */
    brokerName: string;
    /**
     * Name of instance.
     */
    instanceName: string;
    /**
     * Name of Instance broker listener resource
     */
    listenerName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Instance broker resource
 */
export interface GetBrokerListenerResult {
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
    readonly properties: types.outputs.BrokerListenerPropertiesResponse;
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
 * Get a BrokerListenerResource
 * Azure REST API version: 2024-07-01-preview.
 *
 * Other available API versions: 2024-08-15-preview.
 */
export function getBrokerListenerOutput(args: GetBrokerListenerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBrokerListenerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperations:getBrokerListener", {
        "brokerName": args.brokerName,
        "instanceName": args.instanceName,
        "listenerName": args.listenerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerListenerOutputArgs {
    /**
     * Name of broker.
     */
    brokerName: pulumi.Input<string>;
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * Name of Instance broker listener resource
     */
    listenerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}