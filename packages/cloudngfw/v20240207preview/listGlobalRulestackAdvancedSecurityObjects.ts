import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the list of advanced security objects
 */
export function listGlobalRulestackAdvancedSecurityObjects(args: ListGlobalRulestackAdvancedSecurityObjectsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackAdvancedSecurityObjectsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240207preview:listGlobalRulestackAdvancedSecurityObjects", {
        "globalRulestackName": args.globalRulestackName,
        "skip": args.skip,
        "top": args.top,
        "type": args.type,
    }, opts);
}

export interface ListGlobalRulestackAdvancedSecurityObjectsArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    skip?: string;
    top?: number;
    type: string;
}

/**
 * advanced security object
 */
export interface ListGlobalRulestackAdvancedSecurityObjectsResult {
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
export function listGlobalRulestackAdvancedSecurityObjectsOutput(args: ListGlobalRulestackAdvancedSecurityObjectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGlobalRulestackAdvancedSecurityObjectsResult> {
    return pulumi.output(args).apply((a: any) => listGlobalRulestackAdvancedSecurityObjects(a, opts))
}

export interface ListGlobalRulestackAdvancedSecurityObjectsOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    skip?: pulumi.Input<string>;
    top?: pulumi.Input<number>;
    type: pulumi.Input<string>;
}