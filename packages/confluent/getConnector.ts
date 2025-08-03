import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get confluent connector by Name
 *
 * Uses Azure REST API version 2024-07-01.
 */
export function getConnector(args: GetConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:getConnector", {
        "clusterId": args.clusterId,
        "connectorName": args.connectorName,
        "environmentId": args.environmentId,
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectorArgs {
    /**
     * Confluent kafka or schema registry cluster id
     */
    clusterId: string;
    /**
     * Confluent connector name
     */
    connectorName: string;
    /**
     * Confluent environment id
     */
    environmentId: string;
    /**
     * Organization resource name
     */
    organizationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Details of connector record
 */
export interface GetConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Connector Info Base
     */
    readonly connectorBasicInfo?: types.outputs.ConnectorInfoBaseResponse;
    /**
     * Connector Service type info base properties.
     */
    readonly connectorServiceTypeInfo?: types.outputs.AzureBlobStorageSinkConnectorServiceInfoResponse | types.outputs.AzureBlobStorageSourceConnectorServiceInfoResponse | types.outputs.AzureCosmosDBSinkConnectorServiceInfoResponse | types.outputs.AzureCosmosDBSourceConnectorServiceInfoResponse | types.outputs.AzureSynapseAnalyticsSinkConnectorServiceInfoResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The connection information consumed by applications.
     */
    readonly partnerConnectorInfo?: types.outputs.KafkaAzureBlobStorageSinkConnectorInfoResponse | types.outputs.KafkaAzureBlobStorageSourceConnectorInfoResponse | types.outputs.KafkaAzureCosmosDBSinkConnectorInfoResponse | types.outputs.KafkaAzureCosmosDBSourceConnectorInfoResponse | types.outputs.KafkaAzureSynapseAnalyticsSinkConnectorInfoResponse;
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
 * Get confluent connector by Name
 *
 * Uses Azure REST API version 2024-07-01.
 */
export function getConnectorOutput(args: GetConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:getConnector", {
        "clusterId": args.clusterId,
        "connectorName": args.connectorName,
        "environmentId": args.environmentId,
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectorOutputArgs {
    /**
     * Confluent kafka or schema registry cluster id
     */
    clusterId: pulumi.Input<string>;
    /**
     * Confluent connector name
     */
    connectorName: pulumi.Input<string>;
    /**
     * Confluent environment id
     */
    environmentId: pulumi.Input<string>;
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}