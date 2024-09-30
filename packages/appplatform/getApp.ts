import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an App and its properties.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview, 2024-05-01-preview.
 */
export function getApp(args: GetAppArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getApp", {
        "appName": args.appName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "syncStatus": args.syncStatus,
    }, opts);
}

export interface GetAppArgs {
    /**
     * The name of the App resource.
     */
    appName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
    /**
     * Indicates whether sync status
     */
    syncStatus?: string;
}

/**
 * App resource payload
 */
export interface GetAppResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The Managed Identity type of the app resource
     */
    readonly identity?: types.outputs.ManagedIdentityPropertiesResponse;
    /**
     * The GEO location of the application, always the same with its parent resource
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the App resource
     */
    readonly properties: types.outputs.AppResourcePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get an App and its properties.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview, 2024-05-01-preview.
 */
export function getAppOutput(args: GetAppOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appplatform:getApp", {
        "appName": args.appName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "syncStatus": args.syncStatus,
    }, opts);
}

export interface GetAppOutputArgs {
    /**
     * The name of the App resource.
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Indicates whether sync status
     */
    syncStatus?: pulumi.Input<string>;
}