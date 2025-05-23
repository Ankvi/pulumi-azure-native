import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the metadata of the provisioning service without SAS keys.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2017-08-21-preview, 2017-11-15, 2018-01-22, 2020-01-01, 2020-03-01, 2020-09-01-preview, 2021-10-15, 2022-02-05, 2022-12-12, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceprovisioningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIotDpsResource(args: GetIotDpsResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDpsResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceprovisioningservices:getIotDpsResource", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag?: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The managed identities for a provisioning service.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
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
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2017-08-21-preview, 2017-11-15, 2018-01-22, 2020-01-01, 2020-03-01, 2020-09-01-preview, 2021-10-15, 2022-02-05, 2022-12-12, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceprovisioningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIotDpsResourceOutput(args: GetIotDpsResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIotDpsResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceprovisioningservices:getIotDpsResource", {
        "provisioningServiceName": args.provisioningServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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