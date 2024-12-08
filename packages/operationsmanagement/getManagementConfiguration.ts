import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the user ManagementConfiguration.
 * Azure REST API version: 2015-11-01-preview.
 */
export function getManagementConfiguration(args: GetManagementConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationsmanagement:getManagementConfiguration", {
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
 * Azure REST API version: 2015-11-01-preview.
 */
export function getManagementConfigurationOutput(args: GetManagementConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagementConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationsmanagement:getManagementConfiguration", {
        "managementConfigurationName": args.managementConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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