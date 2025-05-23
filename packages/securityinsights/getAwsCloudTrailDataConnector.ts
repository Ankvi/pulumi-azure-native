import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getAwsCloudTrailDataConnector(args: GetAwsCloudTrailDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsCloudTrailDataConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getAwsCloudTrailDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAwsCloudTrailDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents Amazon Web Services CloudTrail data connector.
 */
export interface GetAwsCloudTrailDataConnectorResult {
    /**
     * The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
     */
    readonly awsRoleArn?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The available data types for the connector.
     */
    readonly dataTypes?: types.outputs.AwsCloudTrailDataConnectorDataTypesResponse;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The kind of the data connector
     * Expected value is 'AmazonWebServicesCloudTrail'.
     */
    readonly kind: "AmazonWebServicesCloudTrail";
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Gets a data connector.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getAwsCloudTrailDataConnectorOutput(args: GetAwsCloudTrailDataConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAwsCloudTrailDataConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getAwsCloudTrailDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAwsCloudTrailDataConnectorOutputArgs {
    /**
     * Connector ID
     */
    dataConnectorId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}