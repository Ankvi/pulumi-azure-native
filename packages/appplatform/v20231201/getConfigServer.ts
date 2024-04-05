import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the config server and its properties.
 */
export function getConfigServer(args: GetConfigServerArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20231201:getConfigServer", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetConfigServerArgs {
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
 * Config Server resource
 */
export interface GetConfigServerResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the Config Server resource
     */
    readonly properties: types.outputs.ConfigServerPropertiesResponse;
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
 * Get the config server and its properties.
 */
export function getConfigServerOutput(args: GetConfigServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigServerResult> {
    return pulumi.output(args).apply((a: any) => getConfigServer(a, opts))
}

export interface GetConfigServerOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}