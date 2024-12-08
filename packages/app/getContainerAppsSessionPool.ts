import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App session pool.
 * Azure REST API version: 2024-02-02-preview.
 *
 * Other available API versions: 2024-08-02-preview, 2024-10-02-preview.
 */
export function getContainerAppsSessionPool(args: GetContainerAppsSessionPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAppsSessionPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getContainerAppsSessionPool", {
        "resourceGroupName": args.resourceGroupName,
        "sessionPoolName": args.sessionPoolName,
    }, opts);
}

export interface GetContainerAppsSessionPoolArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the session pool.
     */
    sessionPoolName: string;
}

/**
 * Container App session pool.
 */
export interface GetContainerAppsSessionPoolResult {
    /**
     * The container type of the sessions.
     */
    readonly containerType?: string;
    /**
     * The custom container configuration if the containerType is CustomContainer.
     */
    readonly customContainerTemplate?: types.outputs.CustomContainerTemplateResponse;
    /**
     * The pool configuration if the poolManagementType is dynamic.
     */
    readonly dynamicPoolConfiguration?: types.outputs.DynamicPoolConfigurationResponse;
    /**
     * Resource ID of the session pool's environment.
     */
    readonly environmentId?: string;
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
     * The number of nodes the session pool is using.
     */
    readonly nodeCount: number;
    /**
     * The endpoint to manage the pool.
     */
    readonly poolManagementEndpoint: string;
    /**
     * The pool management type of the session pool.
     */
    readonly poolManagementType?: string;
    /**
     * Provisioning state of the session pool.
     */
    readonly provisioningState: string;
    /**
     * The scale configuration of the session pool.
     */
    readonly scaleConfiguration?: types.outputs.ScaleConfigurationResponse;
    /**
     * The secrets of the session pool.
     */
    readonly secrets?: types.outputs.SessionPoolSecretResponse[];
    /**
     * The network configuration of the sessions in the session pool.
     */
    readonly sessionNetworkConfiguration?: types.outputs.SessionNetworkConfigurationResponse;
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
 * Container App session pool.
 * Azure REST API version: 2024-02-02-preview.
 *
 * Other available API versions: 2024-08-02-preview, 2024-10-02-preview.
 */
export function getContainerAppsSessionPoolOutput(args: GetContainerAppsSessionPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContainerAppsSessionPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getContainerAppsSessionPool", {
        "resourceGroupName": args.resourceGroupName,
        "sessionPoolName": args.sessionPoolName,
    }, opts);
}

export interface GetContainerAppsSessionPoolOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the session pool.
     */
    sessionPoolName: pulumi.Input<string>;
}