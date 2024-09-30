import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the metadata of an IoT Central application.
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2018-09-01, 2021-11-01-preview.
 */
export function getApp(args: GetAppArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotcentral:getApp", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAppArgs {
    /**
     * The name of the resource group that contains the IoT Central application.
     */
    resourceGroupName: string;
    /**
     * The ARM resource name of the IoT Central application.
     */
    resourceName: string;
}

/**
 * The IoT Central application.
 */
export interface GetAppResult {
    /**
     * The ID of the application.
     */
    readonly applicationId: string;
    /**
     * The display name of the application.
     */
    readonly displayName?: string;
    /**
     * The ARM resource identifier.
     */
    readonly id: string;
    /**
     * The managed identities for the IoT Central application.
     */
    readonly identity?: types.outputs.SystemAssignedServiceIdentityResponse;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The ARM resource name.
     */
    readonly name: string;
    /**
     * A valid instance SKU.
     */
    readonly sku: types.outputs.AppSkuInfoResponse;
    /**
     * The current state of the application.
     */
    readonly state: string;
    /**
     * The subdomain of the application.
     */
    readonly subdomain?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
     */
    readonly template?: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get the metadata of an IoT Central application.
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2018-09-01, 2021-11-01-preview.
 */
export function getAppOutput(args: GetAppOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotcentral:getApp", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAppOutputArgs {
    /**
     * The name of the resource group that contains the IoT Central application.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ARM resource name of the IoT Central application.
     */
    resourceName: pulumi.Input<string>;
}