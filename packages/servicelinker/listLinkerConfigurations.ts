import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * list source configurations for a Linker.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicelinker [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listLinkerConfigurations(args: ListLinkerConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<ListLinkerConfigurationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicelinker:listLinkerConfigurations", {
        "linkerName": args.linkerName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListLinkerConfigurationsArgs {
    /**
     * The name Linker resource.
     */
    linkerName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
}

/**
 * Configurations for source resource, include appSettings, connectionString and serviceBindings
 */
export interface ListLinkerConfigurationsResult {
    /**
     * The configuration properties for source resource.
     */
    readonly configurations?: types.outputs.SourceConfigurationResponse[];
}
/**
 * list source configurations for a Linker.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicelinker [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listLinkerConfigurationsOutput(args: ListLinkerConfigurationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListLinkerConfigurationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicelinker:listLinkerConfigurations", {
        "linkerName": args.linkerName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListLinkerConfigurationsOutputArgs {
    /**
     * The name Linker resource.
     */
    linkerName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
}