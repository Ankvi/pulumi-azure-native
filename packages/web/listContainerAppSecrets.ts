import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App Secrets Collection ARM resource.
 * Azure REST API version: 2023-01-01.
 */
export function listContainerAppSecrets(args: ListContainerAppSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListContainerAppSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listContainerAppSecrets", {
        "name": args.name,
    }, opts);
}

export interface ListContainerAppSecretsArgs {
    /**
     * Name of the Container App.
     */
    name: string;
}

/**
 * Container App Secrets Collection ARM resource.
 */
export interface ListContainerAppSecretsResult {
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.ContainerAppSecretResponse[];
}
/**
 * Container App Secrets Collection ARM resource.
 * Azure REST API version: 2023-01-01.
 */
export function listContainerAppSecretsOutput(args: ListContainerAppSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListContainerAppSecretsResult> {
    return pulumi.output(args).apply((a: any) => listContainerAppSecrets(a, opts))
}

export interface ListContainerAppSecretsOutputArgs {
    /**
     * Name of the Container App.
     */
    name: pulumi.Input<string>;
}
