import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the logger specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2017-03-01, 2018-01-01, 2019-12-01-preview, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getLogger(args: GetLoggerArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getLogger", {
        "loggerId": args.loggerId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetLoggerArgs {
    /**
     * Logger identifier. Must be unique in the API Management service instance.
     */
    loggerId: string;
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
 * Logger details.
 */
export interface GetLoggerResult {
    /**
     * The name and SendRule connection string of the event hub for azureEventHub logger.
     * Instrumentation key for applicationInsights logger.
     */
    readonly credentials?: {[key: string]: string};
    /**
     * Logger description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Whether records are buffered in the logger before publishing. Default is assumed to be true.
     */
    readonly isBuffered?: boolean;
    /**
     * Logger type.
     */
    readonly loggerType: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
     */
    readonly resourceId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the logger specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2017-03-01, 2018-01-01, 2019-12-01-preview, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getLoggerOutput(args: GetLoggerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLoggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getLogger", {
        "loggerId": args.loggerId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetLoggerOutputArgs {
    /**
     * Logger identifier. Must be unique in the API Management service instance.
     */
    loggerId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}