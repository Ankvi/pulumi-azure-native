import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Application Configuration Service and its properties.
 */
export function getConfigurationService(args: GetConfigurationServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230901preview:getConfigurationService", {
        "configurationServiceName": args.configurationServiceName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetConfigurationServiceArgs {
    /**
     * The name of Application Configuration Service.
     */
    configurationServiceName: string;
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
 * Application Configuration Service resource
 */
export interface GetConfigurationServiceResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Application Configuration Service properties payload
     */
    readonly properties: types.outputs.ConfigurationServicePropertiesResponse;
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
 * Get the Application Configuration Service and its properties.
 */
export function getConfigurationServiceOutput(args: GetConfigurationServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationServiceResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationService(a, opts))
}

export interface GetConfigurationServiceOutputArgs {
    /**
     * The name of Application Configuration Service.
     */
    configurationServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}