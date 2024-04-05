import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the user ManagementConfiguration.
 */
export function getManagementConfiguration(args: GetManagementConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationsmanagement/v20151101preview:getManagementConfiguration", {
        "managementConfigurationName": args.managementConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagementConfigurationArgs {
    /**
     * User Management Configuration Name.
     */
    managementConfigurationName: string;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The container for solution.
 */
export interface GetManagementConfigurationResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Properties for ManagementConfiguration object supported by the OperationsManagement resource provider.
     */
    readonly properties: types.outputs.ManagementConfigurationPropertiesResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the user ManagementConfiguration.
 */
export function getManagementConfigurationOutput(args: GetManagementConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getManagementConfiguration(a, opts))
}

export interface GetManagementConfigurationOutputArgs {
    /**
     * User Management Configuration Name.
     */
    managementConfigurationName: pulumi.Input<string>;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}