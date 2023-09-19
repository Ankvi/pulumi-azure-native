import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * list source configurations for a Linker.
 * Azure REST API version: 2022-11-01-preview.
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
 * Azure REST API version: 2022-11-01-preview.
 */
export function listLinkerConfigurationsOutput(args: ListLinkerConfigurationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLinkerConfigurationsResult> {
    return pulumi.output(args).apply((a: any) => listLinkerConfigurations(a, opts))
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
