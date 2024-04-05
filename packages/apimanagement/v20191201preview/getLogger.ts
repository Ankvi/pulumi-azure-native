import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the logger specified by its identifier.
 */
export function getLogger(args: GetLoggerArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20191201preview:getLogger", {
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
     * The name of the resource group.
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
    readonly credentials: {[key: string]: string};
    /**
     * Logger description.
     */
    readonly description?: string;
    /**
     * Resource ID.
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
     * Resource name.
     */
    readonly name: string;
    /**
     * Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
     */
    readonly resourceId?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the logger specified by its identifier.
 */
export function getLoggerOutput(args: GetLoggerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggerResult> {
    return pulumi.output(args).apply((a: any) => getLogger(a, opts))
}

export interface GetLoggerOutputArgs {
    /**
     * Logger identifier. Must be unique in the API Management service instance.
     */
    loggerId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}