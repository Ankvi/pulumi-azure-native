import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an autoscale setting
 *
 * Uses Azure REST API version 2021-05-01-preview.
 */
export function getAutoscaleSetting(args: GetAutoscaleSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetAutoscaleSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getAutoscaleSetting", {
        "autoscaleSettingName": args.autoscaleSettingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAutoscaleSettingArgs {
    /**
     * The autoscale setting name.
     */
    autoscaleSettingName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The autoscale setting resource.
 */
export interface GetAutoscaleSettingResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The autoscale setting of the resource.
     */
    readonly properties: types.outputs.AutoscaleSettingResponse;
    /**
     * The system metadata related to the response.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Gets an autoscale setting
 *
 * Uses Azure REST API version 2021-05-01-preview.
 */
export function getAutoscaleSettingOutput(args: GetAutoscaleSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAutoscaleSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getAutoscaleSetting", {
        "autoscaleSettingName": args.autoscaleSettingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAutoscaleSettingOutputArgs {
    /**
     * The autoscale setting name.
     */
    autoscaleSettingName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}