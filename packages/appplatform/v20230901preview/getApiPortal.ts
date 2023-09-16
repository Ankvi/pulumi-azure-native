import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the API portal and its properties.
 */
export function getApiPortal(args: GetApiPortalArgs, opts?: pulumi.InvokeOptions): Promise<GetApiPortalResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230901preview:getApiPortal", {
        "apiPortalName": args.apiPortalName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiPortalArgs {
    /**
     * The name of API portal.
     */
    apiPortalName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * API portal resource
 */
export interface GetApiPortalResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * API portal properties payload
     */
    readonly properties: types.outputs.appplatform.v20230901preview.ApiPortalPropertiesResponse;
    /**
     * Sku of the API portal resource
     */
    readonly sku?: types.outputs.appplatform.v20230901preview.SkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.appplatform.v20230901preview.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the API portal and its properties.
 */
export function getApiPortalOutput(args: GetApiPortalOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiPortalResult> {
    return pulumi.output(args).apply((a: any) => getApiPortal(a, opts))
}

export interface GetApiPortalOutputArgs {
    /**
     * The name of API portal.
     */
    apiPortalName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
