import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dapr component Secrets Collection for ListSecrets Action.
 *
 * Uses Azure REST API version 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01.
 */
export function listDaprComponentSecrets(args: ListDaprComponentSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListDaprComponentSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:listDaprComponentSecrets", {
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
 *
 * Uses Azure REST API version 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01.
 */
export function listDaprComponentSecretsOutput(args: ListDaprComponentSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDaprComponentSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:listDaprComponentSecrets", {
        "componentName": args.componentName,
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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