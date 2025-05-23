import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a factory.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getFactory(args: GetFactoryArgs, opts?: pulumi.InvokeOptions): Promise<GetFactoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getFactory", {
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFactoryArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Factory resource type.
 */
export interface GetFactoryResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Time the factory was created in ISO8601 format.
     */
    readonly createTime: string;
    /**
     * Etag identifies change in the resource.
     */
    readonly eTag: string;
    /**
     * Properties to enable Customer Managed Key for the factory.
     */
    readonly encryption?: types.outputs.EncryptionConfigurationResponse;
    /**
     * List of parameters for factory.
     */
    readonly globalParameters?: {[key: string]: types.outputs.GlobalParameterSpecificationResponse};
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Managed service identity of the factory.
     */
    readonly identity?: types.outputs.FactoryIdentityResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Factory provisioning state, example Succeeded.
     */
    readonly provisioningState: string;
    /**
     * Whether or not public network access is allowed for the data factory.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Purview information of the factory.
     */
    readonly purviewConfiguration?: types.outputs.PurviewConfigurationResponse;
    /**
     * Git repo information of the factory.
     */
    readonly repoConfiguration?: types.outputs.FactoryGitHubConfigurationResponse | types.outputs.FactoryVSTSConfigurationResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * Version of the factory.
     */
    readonly version: string;
}
/**
 * Gets a factory.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getFactoryOutput(args: GetFactoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFactoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getFactory", {
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFactoryOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}