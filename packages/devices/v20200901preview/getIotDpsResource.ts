import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the metadata of the provisioning service without SAS keys.
 */
export function getIotDpsResource(args: GetIotDpsResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDpsResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices/v20200901preview:getIotDpsResource", {
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
     * The managed identities for the IotDps instance.
     */
    readonly identity?: types.outputs.devices.v20200901preview.ArmIdentityResponse;
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
    readonly properties: types.outputs.devices.v20200901preview.IotDpsPropertiesDescriptionResponse;
    /**
     * Sku info for a provisioning Service.
     */
    readonly sku: types.outputs.devices.v20200901preview.IotDpsSkuInfoResponse;
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
