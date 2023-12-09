import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the diagnostic settings categories for the specified resource.
 */
export function listDiagnosticSettingsCategory(args: ListDiagnosticSettingsCategoryArgs, opts?: pulumi.InvokeOptions): Promise<ListDiagnosticSettingsCategoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20210501preview:listDiagnosticSettingsCategory", {
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
 */
export function listDiagnosticSettingsCategoryOutput(args: ListDiagnosticSettingsCategoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDiagnosticSettingsCategoryResult> {
    return pulumi.output(args).apply((a: any) => listDiagnosticSettingsCategory(a, opts))
}

export interface ListDiagnosticSettingsCategoryOutputArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}
