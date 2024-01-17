import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the metadata of the provisioning service without SAS keys.
 * Azure REST API version: 2022-12-12.
 *
 * Other available API versions: 2020-09-01-preview, 2023-03-01-preview.
 */
export function getIotDpsResource(args: GetIotDpsResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDpsResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices:getIotDpsResource", {
        "provisioningServiceName": args.provisioningServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIotDpsResourceArgs {
    /**
     * Name of the provisioning service to retrieve.
     */
    provisioningServiceName: string;
    /**
     * Resource group name.
     */
    resourceGroupName: string;
}

/**
 * The description of the provisioning service.
 */
export interface GetIotDpsResourceResult {
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag?: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Service specific properties for a provisioning service
     */
    readonly properties: types.outputs.IotDpsPropertiesDescriptionResponse;
    /**
     * The resource group of the resource.
     */
    readonly resourcegroup?: string;
    /**
     * Sku info for a provisioning Service.
     */
    readonly sku: types.outputs.IotDpsSkuInfoResponse;
    /**
     * The subscription id of the resource.
     */
    readonly subscriptionid?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Get the metadata of the provisioning service without SAS keys.
 * Azure REST API version: 2022-12-12.
 *
 * Other available API versions: 2020-09-01-preview, 2023-03-01-preview.
 */
export function getIotDpsResourceOutput(args: GetIotDpsResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotDpsResourceResult> {
    return pulumi.output(args).apply((a: any) => getIotDpsResource(a, opts))
}

export interface GetIotDpsResourceOutputArgs {
    /**
     * Name of the provisioning service to retrieve.
     */
    provisioningServiceName: pulumi.Input<string>;
    /**
     * Resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}