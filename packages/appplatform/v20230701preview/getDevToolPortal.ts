import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the Application Live  and its properties.
 */
export function getDevToolPortal(args: GetDevToolPortalArgs, opts?: pulumi.InvokeOptions): Promise<GetDevToolPortalResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230701preview:getDevToolPortal", {
        "devToolPortalName": args.devToolPortalName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetDevToolPortalArgs {
    /**
     * The name of Dev Tool Portal.
     */
    devToolPortalName: string;
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
 * Dev Tool Portal resource
 */
export interface GetDevToolPortalResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Dev Tool Portal properties payload
     */
    readonly properties: types.outputs.appplatform.v20230701preview.DevToolPortalPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.appplatform.v20230701preview.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the Application Live  and its properties.
 */
export function getDevToolPortalOutput(args: GetDevToolPortalOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevToolPortalResult> {
    return pulumi.output(args).apply((a: any) => getDevToolPortal(a, opts))
}

export interface GetDevToolPortalOutputArgs {
    /**
     * The name of Dev Tool Portal.
     */
    devToolPortalName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
