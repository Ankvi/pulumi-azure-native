import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the list of advanced security objects
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listLocalRulestackAdvancedSecurityObjects(args: ListLocalRulestackAdvancedSecurityObjectsArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalRulestackAdvancedSecurityObjectsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listLocalRulestackAdvancedSecurityObjects", {
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
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listLocalRulestackAdvancedSecurityObjectsOutput(args: ListLocalRulestackAdvancedSecurityObjectsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListLocalRulestackAdvancedSecurityObjectsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listLocalRulestackAdvancedSecurityObjects", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
        "type": args.type,
    }, opts);
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