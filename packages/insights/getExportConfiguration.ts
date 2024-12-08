import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the Continuous Export configuration for this export id.
 * Azure REST API version: 2015-05-01.
 */
export function getExportConfiguration(args: GetExportConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetExportConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getExportConfiguration", {
        "exportId": args.exportId,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetExportConfigurationArgs {
    /**
     * The Continuous Export configuration ID. This is unique within a Application Insights component.
     */
    exportId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: string;
}

/**
 * Properties that define a Continuous Export configuration.
 */
export interface GetExportConfigurationResult {
    /**
     * The name of the Application Insights component.
     */
    readonly applicationName: string;
    /**
     * The name of the destination storage container.
     */
    readonly containerName: string;
    /**
     * The name of destination account.
     */
    readonly destinationAccountId: string;
    /**
     * The destination account location ID.
     */
    readonly destinationStorageLocationId: string;
    /**
     * The destination storage account subscription ID.
     */
    readonly destinationStorageSubscriptionId: string;
    /**
     * The destination type.
     */
    readonly destinationType: string;
    /**
     * The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
     */
    readonly exportId: string;
    /**
     * This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
     */
    readonly exportStatus: string;
    /**
     * The instrumentation key of the Application Insights component.
     */
    readonly instrumentationKey: string;
    /**
     * This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
     */
    readonly isUserEnabled: string;
    /**
     * The last time the Continuous Export configuration started failing.
     */
    readonly lastGapTime: string;
    /**
     * The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
     */
    readonly lastSuccessTime: string;
    /**
     * Last time the Continuous Export configuration was updated.
     */
    readonly lastUserUpdate: string;
    /**
     * Deprecated
     */
    readonly notificationQueueEnabled?: string;
    /**
     * This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
     */
    readonly permanentErrorReason: string;
    /**
     * This comma separated list of document types that will be exported. The possible values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
     */
    readonly recordTypes?: string;
    /**
     * The resource group of the Application Insights component.
     */
    readonly resourceGroup: string;
    /**
     * The name of the destination storage account.
     */
    readonly storageName: string;
    /**
     * The subscription of the Application Insights component.
     */
    readonly subscriptionId: string;
}
/**
 * Get the Continuous Export configuration for this export id.
 * Azure REST API version: 2015-05-01.
 */
export function getExportConfigurationOutput(args: GetExportConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExportConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:insights:getExportConfiguration", {
        "exportId": args.exportId,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetExportConfigurationOutputArgs {
    /**
     * The Continuous Export configuration ID. This is unique within a Application Insights component.
     */
    exportId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}