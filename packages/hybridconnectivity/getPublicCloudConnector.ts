import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PublicCloudConnector
 * Azure REST API version: 2024-12-01.
 */
export function getPublicCloudConnector(args: GetPublicCloudConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicCloudConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity:getPublicCloudConnector", {
        "publicCloudConnector": args.publicCloudConnector,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPublicCloudConnectorArgs {
    /**
     * Represent public cloud connectors resource.
     */
    publicCloudConnector: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Public Cloud Connector
 */
export interface GetPublicCloudConnectorResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.PublicCloudConnectorPropertiesResponse;
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
 * Get a PublicCloudConnector
 * Azure REST API version: 2024-12-01.
 */
export function getPublicCloudConnectorOutput(args: GetPublicCloudConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPublicCloudConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridconnectivity:getPublicCloudConnector", {
        "publicCloudConnector": args.publicCloudConnector,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPublicCloudConnectorOutputArgs {
    /**
     * Represent public cloud connectors resource.
     */
    publicCloudConnector: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}