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
     * The name of the resource group. The name is case insensitive.
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
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}