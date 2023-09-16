import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the non-security related metadata of an IoT hub.
 */
export function getIotHubResource(args: GetIotHubResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotHubResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices/v20230630:getIotHubResource", {
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
    readonly identity?: types.outputs.devices.v20230630.ArmIdentityResponse;
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
    readonly properties: types.outputs.devices.v20230630.IotHubPropertiesResponse;
    /**
     * IotHub SKU info
     */
    readonly sku: types.outputs.devices.v20230630.IotHubSkuInfoResponse;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.devices.v20230630.SystemDataResponse;
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
 */
export function getIotHubResourceOutput(args: GetIotHubResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotHubResourceResult> {
    return pulumi.output(args).apply((a: any) => getIotHubResource(a, opts))
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
