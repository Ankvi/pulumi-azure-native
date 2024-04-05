import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the list of advanced security objects
 */
export function listLocalRulestackAdvancedSecurityObjects(args: ListLocalRulestackAdvancedSecurityObjectsArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalRulestackAdvancedSecurityObjectsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20230901preview:listLocalRulestackAdvancedSecurityObjects", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
        "type": args.type,
    }, opts);
}

export interface ListLocalRulestackAdvancedSecurityObjectsArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    skip?: string;
    top?: number;
    type: string;
}

/**
 * advanced security object
 */
export interface ListLocalRulestackAdvancedSecurityObjectsResult {
    /**
     * next link
     */
    readonly nextLink?: string;
    /**
     * response value
     */
    readonly value: types.outputs.AdvSecurityObjectModelResponse;
}
/**
 * Get the list of advanced security objects
 */
export function listLocalRulestackAdvancedSecurityObjectsOutput(args: ListLocalRulestackAdvancedSecurityObjectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLocalRulestackAdvancedSecurityObjectsResult> {
    return pulumi.output(args).apply((a: any) => listLocalRulestackAdvancedSecurityObjects(a, opts))
}

export interface ListLocalRulestackAdvancedSecurityObjectsOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    skip?: pulumi.Input<string>;
    top?: pulumi.Input<number>;
    type: pulumi.Input<string>;
}