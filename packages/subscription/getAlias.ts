import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Alias Subscription.
 *
 * Uses Azure REST API version 2021-10-01.
 *
 * Other available API versions: 2020-09-01, 2024-08-01-preview.
 */
export function getAlias(args: GetAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetAliasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:subscription:getAlias", {
        "aliasName": args.aliasName,
    }, opts);
}

export interface GetAliasArgs {
    /**
     * AliasName is the name for the subscription creation request. Note that this is not the same as subscription name and this doesn’t have any other lifecycle need beyond the request for subscription creation.
     */
    aliasName: string;
}

/**
 * Subscription Information with the alias.
 */
export interface GetAliasResult {
    /**
     * Fully qualified ID for the alias resource.
     */
    readonly id: string;
    /**
     * Alias ID.
     */
    readonly name: string;
    /**
     * Subscription Alias response properties.
     */
    readonly properties: types.outputs.SubscriptionAliasResponsePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type, Microsoft.Subscription/aliases.
     */
    readonly type: string;
}
/**
 * Get Alias Subscription.
 *
 * Uses Azure REST API version 2021-10-01.
 *
 * Other available API versions: 2020-09-01, 2024-08-01-preview.
 */
export function getAliasOutput(args: GetAliasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAliasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:subscription:getAlias", {
        "aliasName": args.aliasName,
    }, opts);
}

export interface GetAliasOutputArgs {
    /**
     * AliasName is the name for the subscription creation request. Note that this is not the same as subscription name and this doesn’t have any other lifecycle need beyond the request for subscription creation.
     */
    aliasName: pulumi.Input<string>;
}