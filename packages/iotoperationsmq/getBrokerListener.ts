import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BrokerListenerResource
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getBrokerListener(args: GetBrokerListenerArgs, opts?: pulumi.InvokeOptions): Promise<GetBrokerListenerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq:getBrokerListener", {
        "brokerName": args.brokerName,
        "listenerName": args.listenerName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerListenerArgs {
    /**
     * Name of MQ broker resource
     */
    brokerName: string;
    /**
     * Name of MQ broker/listener resource
     */
    listenerName: string;
    /**
     * Name of MQ resource
     */
    mqName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * MQ broker/listener resource
 */
export interface GetBrokerListenerResult {
    /**
     * The flag for enabling Authentication rules on Listener Port.
     */
    readonly authenticationEnabled?: boolean;
    /**
     * The flag for enabling Authorization policies on Listener Port. false - AllowAll, true - Use Authorization resource rules if present.
     */
    readonly authorizationEnabled?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The k8s cr/resource reference of mq/broker.
     */
    readonly brokerRef: string;
    /**
     * Extended Location
     */
    readonly extendedLocation: types.outputs.ExtendedLocationPropertyResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The node port to use on the Host node.
     */
    readonly nodePort?: number;
    /**
     * The port to start Listening for connections on.
     */
    readonly port: number;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * The service name to expose Listener port on.
     */
    readonly serviceName?: string;
    /**
     * The Kubernetes Service type to deploy for Listener.
     */
    readonly serviceType?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Defines configuration of a TLS server certificate. NOTE Enum - Only one TLS Cert method is supported
     */
    readonly tls?: types.outputs.TlsCertMethodResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a BrokerListenerResource
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getBrokerListenerOutput(args: GetBrokerListenerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBrokerListenerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperationsmq:getBrokerListener", {
        "brokerName": args.brokerName,
        "listenerName": args.listenerName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerListenerOutputArgs {
    /**
     * Name of MQ broker resource
     */
    brokerName: pulumi.Input<string>;
    /**
     * Name of MQ broker/listener resource
     */
    listenerName: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}