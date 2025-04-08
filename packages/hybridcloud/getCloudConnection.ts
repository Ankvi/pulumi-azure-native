import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified cloud connection in a specified resource group.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 */
export function getCloudConnection(args: GetCloudConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcloud:getCloudConnection", {
        "cloudConnectionName": args.cloudConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudConnectionArgs {
    /**
     * The name of the cloud connection resource
     */
    cloudConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Resource which represents the managed network connection between Azure Gateways and remote cloud gateways.
 */
export interface GetCloudConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The cloud connector which discovered the remote resource.
     */
    readonly cloudConnector?: types.outputs.ResourceReferenceResponse;
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
     * The provisioning state of the cloud collection resource.
     */
    readonly provisioningState: string;
    /**
     * Identifier for the remote cloud resource
     */
    readonly remoteResourceId?: string;
    /**
     * Shared key of the cloud connection.
     */
    readonly sharedKey?: string;
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
    /**
     * The virtualHub to which the cloud connection belongs.
     */
    readonly virtualHub?: types.outputs.ResourceReferenceResponse;
}
/**
 * Gets the specified cloud connection in a specified resource group.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 */
export function getCloudConnectionOutput(args: GetCloudConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCloudConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcloud:getCloudConnection", {
        "cloudConnectionName": args.cloudConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudConnectionOutputArgs {
    /**
     * The name of the cloud connection resource
     */
    cloudConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}