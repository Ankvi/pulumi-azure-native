import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Wrapper resource for tags API requests and responses.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-07-01, 2024-03-01, 2024-07-01, 2024-11-01.
 */
export function getTagAtScope(args: GetTagAtScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetTagAtScopeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getTagAtScope", {
        "scope": args.scope,
    }, opts);
}

export interface GetTagAtScopeArgs {
    /**
     * The resource scope.
     */
    scope: string;
}

/**
 * Wrapper resource for tags API requests and responses.
 */
export interface GetTagAtScopeResult {
    /**
     * The ID of the tags wrapper resource.
     */
    readonly id: string;
    /**
     * The name of the tags wrapper resource.
     */
    readonly name: string;
    /**
     * The set of tags.
     */
    readonly properties: types.outputs.TagsResponse;
    /**
     * The type of the tags wrapper resource.
     */
    readonly type: string;
}
/**
 * Wrapper resource for tags API requests and responses.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-07-01, 2024-03-01, 2024-07-01, 2024-11-01.
 */
export function getTagAtScopeOutput(args: GetTagAtScopeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTagAtScopeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getTagAtScope", {
        "scope": args.scope,
    }, opts);
}

export interface GetTagAtScopeOutputArgs {
    /**
     * The resource scope.
     */
    scope: pulumi.Input<string>;
}