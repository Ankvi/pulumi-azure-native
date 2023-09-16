import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified Analytics Connector.
 * Azure REST API version: 2022-10-01-preview.
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
     * Data destination configuration for Analytics Connector.
     */
    readonly dataDestinationConfiguration: types.outputs.healthcareapis.AnalyticsConnectorDataLakeDataDestinationResponse;
    /**
     * Data mapping configuration for Analytics Connector.
     */
    readonly dataMappingConfiguration: types.outputs.healthcareapis.AnalyticsConnectorFhirToParquetMappingResponse;
    /**
     * Data source for Analytics Connector.
     */
    readonly dataSourceConfiguration: types.outputs.healthcareapis.AnalyticsConnectorFhirServiceDataSourceResponse;
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
    readonly identity?: types.outputs.healthcareapis.ServiceManagedIdentityResponseIdentity;
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
    readonly systemData: types.outputs.healthcareapis.SystemDataResponse;
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
 * Azure REST API version: 2022-10-01-preview.
 */
export function getAnalyticsConnectorOutput(args: GetAnalyticsConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAnalyticsConnectorResult> {
    return pulumi.output(args).apply((a: any) => getAnalyticsConnector(a, opts))
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
