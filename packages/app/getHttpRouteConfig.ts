import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Advanced Ingress routing for path/header based routing for a Container App Environment
 *
 * Uses Azure REST API version 2024-10-02-preview.
 */
export function getHttpRouteConfig(args: GetHttpRouteConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetHttpRouteConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getHttpRouteConfig", {
        "environmentName": args.environmentName,
        "httpRouteName": args.httpRouteName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHttpRouteConfigArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * Name of the Http Route Config Resource.
     */
    httpRouteName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Advanced Ingress routing for path/header based routing for a Container App Environment
 */
export interface GetHttpRouteConfigResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Http Route Config properties
     */
    readonly properties: types.outputs.HttpRouteConfigResponseProperties;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Advanced Ingress routing for path/header based routing for a Container App Environment
 *
 * Uses Azure REST API version 2024-10-02-preview.
 */
export function getHttpRouteConfigOutput(args: GetHttpRouteConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHttpRouteConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getHttpRouteConfig", {
        "environmentName": args.environmentName,
        "httpRouteName": args.httpRouteName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHttpRouteConfigOutputArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the Http Route Config Resource.
     */
    httpRouteName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}