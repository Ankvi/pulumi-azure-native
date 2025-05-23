import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about a configuration of server.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerConfiguration(args: GetSingleServerConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetSingleServerConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getSingleServerConfiguration", {
        "configurationName": args.configurationName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerConfigurationArgs {
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
export interface GetSingleServerConfigurationResult {
    /**
     * Allowed values of the configuration.
     */
    readonly allowedValues: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Source of the configuration.
     */
    readonly source?: string;
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
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerConfigurationOutput(args: GetSingleServerConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSingleServerConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformysql:getSingleServerConfiguration", {
        "configurationName": args.configurationName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerConfigurationOutputArgs {
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