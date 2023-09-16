import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified cache rule resource.
 * Azure REST API version: 2023-01-01-preview.
 */
export function getCacheRule(args: GetCacheRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetCacheRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getCacheRule", {
        "cacheRuleName": args.cacheRuleName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCacheRuleArgs {
    /**
     * The name of the cache rule.
     */
    cacheRuleName: string;
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An object that represents a cache rule for a container registry.
 */
export interface GetCacheRuleResult {
    /**
     * The creation date of the cache rule.
     */
    readonly creationDate: string;
    /**
     * The ARM resource ID of the credential store which is associated with the cache rule.
     */
    readonly credentialSetResourceId?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Source repository pulled from upstream.
     */
    readonly sourceRepository?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.containerregistry.SystemDataResponse;
    /**
     * Target repository specified in docker pull command.
     * Eg: docker pull myregistry.azurecr.io/{targetRepository}:{tag}
     */
    readonly targetRepository?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified cache rule resource.
 * Azure REST API version: 2023-01-01-preview.
 */
export function getCacheRuleOutput(args: GetCacheRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCacheRuleResult> {
    return pulumi.output(args).apply((a: any) => getCacheRule(a, opts))
}

export interface GetCacheRuleOutputArgs {
    /**
     * The name of the cache rule.
     */
    cacheRuleName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
