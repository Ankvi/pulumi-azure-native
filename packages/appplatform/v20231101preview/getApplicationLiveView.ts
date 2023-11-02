import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Application Live  and its properties.
 */
export function getApplicationLiveView(args: GetApplicationLiveViewArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationLiveViewResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20231101preview:getApplicationLiveView", {
        "applicationLiveViewName": args.applicationLiveViewName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApplicationLiveViewArgs {
    /**
     * The name of Application Live View.
     */
    applicationLiveViewName: string;
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
 * Application Live View resource
 */
export interface GetApplicationLiveViewResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Application Live View properties payload
     */
    readonly properties: types.outputs.ApplicationLiveViewPropertiesResponse;
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
 * Get the Application Live  and its properties.
 */
export function getApplicationLiveViewOutput(args: GetApplicationLiveViewOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationLiveViewResult> {
    return pulumi.output(args).apply((a: any) => getApplicationLiveView(a, opts))
}

export interface GetApplicationLiveViewOutputArgs {
    /**
     * The name of Application Live View.
     */
    applicationLiveViewName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
