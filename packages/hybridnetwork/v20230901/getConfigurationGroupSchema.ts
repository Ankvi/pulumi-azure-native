import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified configuration group schema.
 */
export function getConfigurationGroupSchema(args: GetConfigurationGroupSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationGroupSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork/v20230901:getConfigurationGroupSchema", {
        "configurationGroupSchemaName": args.configurationGroupSchemaName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationGroupSchemaArgs {
    /**
     * The name of the configuration group schema.
     */
    configurationGroupSchemaName: string;
    /**
     * The name of the publisher.
     */
    publisherName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Configuration group schema resource.
 */
export interface GetConfigurationGroupSchemaResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Configuration group schema properties.
     */
    readonly properties: types.outputs.ConfigurationGroupSchemaPropertiesFormatResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about the specified configuration group schema.
 */
export function getConfigurationGroupSchemaOutput(args: GetConfigurationGroupSchemaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationGroupSchemaResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationGroupSchema(a, opts))
}

export interface GetConfigurationGroupSchemaOutputArgs {
    /**
     * The name of the configuration group schema.
     */
    configurationGroupSchemaName: pulumi.Input<string>;
    /**
     * The name of the publisher.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
