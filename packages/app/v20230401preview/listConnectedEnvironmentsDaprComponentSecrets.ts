import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Dapr component Secrets Collection for ListSecrets Action.
 */
export function listConnectedEnvironmentsDaprComponentSecrets(args: ListConnectedEnvironmentsDaprComponentSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectedEnvironmentsDaprComponentSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230401preview:listConnectedEnvironmentsDaprComponentSecrets", {
        "componentName": args.componentName,
        "connectedEnvironmentName": args.connectedEnvironmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListConnectedEnvironmentsDaprComponentSecretsArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: string;
    /**
     * Name of the connected environment.
     */
    connectedEnvironmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Dapr component Secrets Collection for ListSecrets Action.
 */
export interface ListConnectedEnvironmentsDaprComponentSecretsResult {
    /**
     * Collection of secrets used by a Dapr component
     */
    readonly value: types.outputs.app.v20230401preview.DaprSecretResponse[];
}
/**
 * Dapr component Secrets Collection for ListSecrets Action.
 */
export function listConnectedEnvironmentsDaprComponentSecretsOutput(args: ListConnectedEnvironmentsDaprComponentSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListConnectedEnvironmentsDaprComponentSecretsResult> {
    return pulumi.output(args).apply((a: any) => listConnectedEnvironmentsDaprComponentSecrets(a, opts))
}

export interface ListConnectedEnvironmentsDaprComponentSecretsOutputArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: pulumi.Input<string>;
    /**
     * Name of the connected environment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
