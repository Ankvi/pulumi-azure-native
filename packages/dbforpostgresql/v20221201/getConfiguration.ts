import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a configuration of server.
 */
export function getConfiguration(args: GetConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20221201:getConfiguration", {
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
     * Configuration documentation link.
     */
    readonly documentationLink: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Configuration is pending restart or not.
     */
    readonly isConfigPendingRestart: boolean;
    /**
     * Configuration dynamic or static.
     */
    readonly isDynamicConfig: boolean;
    /**
     * Configuration read-only or not.
     */
    readonly isReadOnly: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Source of the configuration.
     */
    readonly source?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Configuration unit.
     */
    readonly unit: string;
    /**
     * Value of the configuration.
     */
    readonly value?: string;
}
/**
 * Gets information about a configuration of server.
 */
export function getConfigurationOutput(args: GetConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getConfiguration(a, opts))
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