import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a configuration of server.
 *
 * Uses Azure REST API version 2022-01-01.
 *
 * Other available API versions: 2017-12-01, 2020-07-01-privatepreview, 2023-06-01-preview, 2023-06-30, 2023-12-30.
 */
export function getConfiguration(args: GetConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getConfiguration", {
        "configurationName": args.configurationName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetConfigurationArgs {
    /**
     * The name of the server configuration.
     */
    configurationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Represents a Configuration.
 */
export interface GetConfigurationResult {
    /**
     * Allowed values of the configuration.
     */
    readonly allowedValues: string;
    /**
     * Current value of the configuration.
     */
    readonly currentValue?: string;
    /**
     * Data type of the configuration.
     */
    readonly dataType: string;
    /**
     * Default value of the configuration.
     */
    readonly defaultValue: string;
    /**
     * Description of the configuration.
     */
    readonly description: string;
    /**
     * The link used to get the document from community or Azure site.
     */
    readonly documentationLink: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * If is the configuration pending restart or not.
     */
    readonly isConfigPendingRestart: string;
    /**
     * If is the configuration dynamic.
     */
    readonly isDynamicConfig: string;
    /**
     * If is the configuration read only.
     */
    readonly isReadOnly: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Source of the configuration.
     */
    readonly source?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Value of the configuration.
     */
    readonly value?: string;
}
/**
 * Gets information about a configuration of server.
 *
 * Uses Azure REST API version 2022-01-01.
 *
 * Other available API versions: 2017-12-01, 2020-07-01-privatepreview, 2023-06-01-preview, 2023-06-30, 2023-12-30.
 */
export function getConfigurationOutput(args: GetConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformysql:getConfiguration", {
        "configurationName": args.configurationName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetConfigurationOutputArgs {
    /**
     * The name of the server configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}