import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BrokerResource
 */
export function getBroker(args: GetBrokerArgs, opts?: pulumi.InvokeOptions): Promise<GetBrokerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq/v20231004preview:getBroker", {
        "brokerName": args.brokerName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerArgs {
    /**
     * Name of MQ broker resource
     */
    brokerName: string;
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
 * MQ broker resource
 */
export interface GetBrokerResult {
    /**
     * The details of Authentication Docker Image.
     */
    readonly authImage: types.outputs.ContainerImageResponse;
    /**
     * The details of Broker Docker Image.
     */
    readonly brokerImage: types.outputs.ContainerImageResponse;
    /**
     * The details of Node Tolerations for Broker Pods.
     */
    readonly brokerNodeTolerations?: types.outputs.NodeTolerationsResponse;
    /**
     * The cardinality details of the broker.
     */
    readonly cardinality?: types.outputs.CardinalityResponse;
    /**
     * The diagnostic details of the broker deployment.
     */
    readonly diagnostics?: types.outputs.BrokerDiagnosticsResponse;
    /**
     * The settings of the disk-backed message buffer.
     */
    readonly diskBackedMessageBufferSettings?: types.outputs.DiskBackedMessageBufferSettingsResponse;
    /**
     * The setting to enable or disable encryption of internal Traffic.
     */
    readonly encryptInternalTraffic?: boolean;
    /**
     * Extended Location
     */
    readonly extendedLocation: types.outputs.ExtendedLocationPropertyResponse;
    /**
     * The details of Health Manager Docker Image.
     */
    readonly healthManagerImage: types.outputs.ContainerImageResponse;
    /**
     * The details of Node Tolerations for Health Manager Pods.
     */
    readonly healthManagerNodeTolerations?: types.outputs.NodeTolerationsResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Details of the internal CA cert that will be used to secure communication between pods.
     */
    readonly internalCerts?: types.outputs.CertManagerCertOptionsResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Memory profile of broker.
     */
    readonly memoryProfile?: string;
    /**
     * The Running Mode of the Broker Deployment.
     */
    readonly mode: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a BrokerResource
 */
export function getBrokerOutput(args: GetBrokerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBrokerResult> {
    return pulumi.output(args).apply((a: any) => getBroker(a, opts))
}

export interface GetBrokerOutputArgs {
    /**
     * Name of MQ broker resource
     */
    brokerName: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}