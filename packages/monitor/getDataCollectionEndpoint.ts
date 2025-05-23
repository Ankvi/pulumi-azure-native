import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of ARM tracked top level resource.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export function getDataCollectionEndpoint(args: GetDataCollectionEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetDataCollectionEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getDataCollectionEndpoint", {
        "dataCollectionEndpointName": args.dataCollectionEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataCollectionEndpointArgs {
    /**
     * The name of the data collection endpoint. The name is case insensitive.
     */
    dataCollectionEndpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Definition of ARM tracked top level resource.
 */
export interface GetDataCollectionEndpointResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The endpoint used by clients to access their configuration.
     */
    readonly configurationAccess?: types.outputs.DataCollectionEndpointResponseConfigurationAccess;
    /**
     * Description of the data collection endpoint.
     */
    readonly description?: string;
    /**
     * Resource entity tag (ETag).
     */
    readonly etag: string;
    /**
     * Failover configuration on this endpoint. This property is READ-ONLY.
     */
    readonly failoverConfiguration: types.outputs.DataCollectionEndpointResponseFailoverConfiguration;
    /**
     * Fully qualified ID of the resource.
     */
    readonly id: string;
    /**
     * Managed service identity of the resource.
     */
    readonly identity?: types.outputs.DataCollectionEndpointResourceResponseIdentity;
    /**
     * The immutable ID of this data collection endpoint resource. This property is READ-ONLY.
     */
    readonly immutableId?: string;
    /**
     * The kind of the resource.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives.
     */
    readonly location: string;
    /**
     * The endpoint used by clients to ingest logs.
     */
    readonly logsIngestion?: types.outputs.DataCollectionEndpointResponseLogsIngestion;
    /**
     * Metadata for the resource. This property is READ-ONLY.
     */
    readonly metadata: types.outputs.DataCollectionEndpointResponseMetadata;
    /**
     * The endpoint used by clients to ingest metrics.
     */
    readonly metricsIngestion?: types.outputs.DataCollectionEndpointResponseMetricsIngestion;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Network access control rules for the endpoints.
     */
    readonly networkAcls?: types.outputs.DataCollectionEndpointResponseNetworkAcls;
    /**
     * List of Azure Monitor Private Link Scope Resources to which this data collection endpoint resource is associated. This property is READ-ONLY.
     */
    readonly privateLinkScopedResources: types.outputs.PrivateLinkScopedResourceResponse[];
    /**
     * The resource provisioning state. This property is READ-ONLY.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.DataCollectionEndpointResourceResponseSystemData;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Definition of ARM tracked top level resource.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export function getDataCollectionEndpointOutput(args: GetDataCollectionEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataCollectionEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getDataCollectionEndpoint", {
        "dataCollectionEndpointName": args.dataCollectionEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataCollectionEndpointOutputArgs {
    /**
     * The name of the data collection endpoint. The name is case insensitive.
     */
    dataCollectionEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}