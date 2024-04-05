import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dapr component Secrets Collection for ListSecrets Action.
 */
export function listDaprComponentSecrets(args: ListDaprComponentSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListDaprComponentSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20221001:listDaprComponentSecrets", {
        "componentName": args.componentName,
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDaprComponentSecretsArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: string;
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Dapr component Secrets Collection for ListSecrets Action.
 */
export interface ListDaprComponentSecretsResult {
    /**
     * Collection of secrets used by a Dapr component
     */
    readonly value: types.outputs.DaprSecretResponse[];
}
/**
 * Dapr component Secrets Collection for ListSecrets Action.
 */
export function listDaprComponentSecretsOutput(args: ListDaprComponentSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDaprComponentSecretsResult> {
    return pulumi.output(args).apply((a: any) => listDaprComponentSecrets(a, opts))
}

export interface ListDaprComponentSecretsOutputArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: pulumi.Input<string>;
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}