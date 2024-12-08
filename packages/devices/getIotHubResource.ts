import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the non-security related metadata of an IoT hub.
 * Azure REST API version: 2022-04-30-preview.
 *
 * Other available API versions: 2022-11-15-preview, 2023-06-30, 2023-06-30-preview.
 */
export function getIotHubResource(args: GetIotHubResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotHubResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices:getIotHubResource", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotHubResourceArgs {
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    resourceName: string;
}

/**
 * The description of the IoT hub.
 */
export interface GetIotHubResourceResult {
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag?: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The managed identities for the IotHub.
     */
    readonly identity?: types.outputs.ArmIdentityResponse;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * IotHub properties
     */
    readonly properties: types.outputs.IotHubPropertiesResponse;
    /**
     * IotHub SKU info
     */
    readonly sku: types.outputs.IotHubSkuInfoResponse;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get the non-security related metadata of an IoT hub.
 * Azure REST API version: 2022-04-30-preview.
 *
 * Other available API versions: 2022-11-15-preview, 2023-06-30, 2023-06-30-preview.
 */
export function getIotHubResourceOutput(args: GetIotHubResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIotHubResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devices:getIotHubResource", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotHubResourceOutputArgs {
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}