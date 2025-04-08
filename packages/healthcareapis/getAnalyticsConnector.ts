import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified Analytics Connector.
 *
 * Uses Azure REST API version 2022-10-01-preview.
 */
export function getAnalyticsConnector(args: GetAnalyticsConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAnalyticsConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis:getAnalyticsConnector", {
        "analyticsConnectorName": args.analyticsConnectorName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAnalyticsConnectorArgs {
    /**
     * The name of Analytics Connector resource.
     */
    analyticsConnectorName: string;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: string;
    /**
     * The name of workspace resource.
     */
    workspaceName: string;
}

/**
 * Analytics Connector definition.
 */
export interface GetAnalyticsConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Data destination configuration for Analytics Connector.
     */
    readonly dataDestinationConfiguration: types.outputs.AnalyticsConnectorDataLakeDataDestinationResponse;
    /**
     * Data mapping configuration for Analytics Connector.
     */
    readonly dataMappingConfiguration: types.outputs.AnalyticsConnectorFhirToParquetMappingResponse;
    /**
     * Data source for Analytics Connector.
     */
    readonly dataSourceConfiguration: types.outputs.AnalyticsConnectorFhirServiceDataSourceResponse;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: types.outputs.ServiceManagedIdentityResponseIdentity;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified Analytics Connector.
 *
 * Uses Azure REST API version 2022-10-01-preview.
 */
export function getAnalyticsConnectorOutput(args: GetAnalyticsConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAnalyticsConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:healthcareapis:getAnalyticsConnector", {
        "analyticsConnectorName": args.analyticsConnectorName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAnalyticsConnectorOutputArgs {
    /**
     * The name of Analytics Connector resource.
     */
    analyticsConnectorName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}