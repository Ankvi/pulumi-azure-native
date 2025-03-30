import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the diagnostic settings categories for the specified resource.
 *
 * Uses Azure REST API version 2021-05-01-preview.
 *
 * Other available API versions: 2017-05-01-preview.
 */
export function listDiagnosticSettingsCategory(args: ListDiagnosticSettingsCategoryArgs, opts?: pulumi.InvokeOptions): Promise<ListDiagnosticSettingsCategoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:listDiagnosticSettingsCategory", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListDiagnosticSettingsCategoryArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: string;
}

/**
 * Represents a collection of diagnostic setting category resources.
 */
export interface ListDiagnosticSettingsCategoryResult {
    /**
     * The collection of diagnostic settings category resources.
     */
    readonly value?: types.outputs.DiagnosticSettingsCategoryResourceResponse[];
}
/**
 * Lists the diagnostic settings categories for the specified resource.
 *
 * Uses Azure REST API version 2021-05-01-preview.
 *
 * Other available API versions: 2017-05-01-preview.
 */
export function listDiagnosticSettingsCategoryOutput(args: ListDiagnosticSettingsCategoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDiagnosticSettingsCategoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:insights:listDiagnosticSettingsCategory", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListDiagnosticSettingsCategoryOutputArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}