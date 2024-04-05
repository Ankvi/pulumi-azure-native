import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 */
export function getAwsS3DataConnector(args: GetAwsS3DataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsS3DataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230901preview:getAwsS3DataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAwsS3DataConnectorArgs {
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
 * Represents Amazon Web Services S3 data connector.
 */
export interface GetAwsS3DataConnectorResult {
    /**
     * The available data types for the connector.
     */
    readonly dataTypes: types.outputs.AwsS3DataConnectorDataTypesResponse;
    /**
     * The logs destination table name in LogAnalytics.
     */
    readonly destinationTable: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The kind of the data connector
     * Expected value is 'AmazonWebServicesS3'.
     */
    readonly kind: "AmazonWebServicesS3";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Aws Role Arn that is used to access the Aws account.
     */
    readonly roleArn: string;
    /**
     * The AWS sqs urls for the connector.
     */
    readonly sqsUrls: string[];
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
 */
export function getAwsS3DataConnectorOutput(args: GetAwsS3DataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAwsS3DataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getAwsS3DataConnector(a, opts))
}

export interface GetAwsS3DataConnectorOutputArgs {
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