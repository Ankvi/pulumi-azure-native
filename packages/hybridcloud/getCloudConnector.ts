import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified cloud connector in a specified resource group.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 */
export function getCloudConnector(args: GetCloudConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcloud:getCloudConnector", {
        "cloudConnectorName": args.cloudConnectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudConnectorArgs {
    /**
     * The name of the cloud connector resource
     */
    cloudConnectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cloud Connector resource.
 */
export interface GetCloudConnectorResult {
    /**
     * Account identifier of the remote cloud.
     */
    readonly accountId?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The cloud connector type.
     */
    readonly cloudType?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The provisioning state of the cloud connector resource.
     */
    readonly provisioningState: string;
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
 * Gets the specified cloud connector in a specified resource group.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 */
export function getCloudConnectorOutput(args: GetCloudConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCloudConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcloud:getCloudConnector", {
        "cloudConnectorName": args.cloudConnectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudConnectorOutputArgs {
    /**
     * The name of the cloud connector resource
     */
    cloudConnectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}