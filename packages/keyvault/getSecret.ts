import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
 * Azure REST API version: 2023-02-01.
 */
export function getSecret(args: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:keyvault:getSecret", {
        "resourceGroupName": args.resourceGroupName,
        "secretName": args.secretName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetSecretArgs {
    /**
     * The name of the Resource Group to which the vault belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the secret.
     */
    secretName: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
}

/**
 * Resource information with extended details.
 */
export interface GetSecretResult {
    /**
     * Fully qualified identifier of the key vault resource.
     */
    readonly id: string;
    /**
     * Azure location of the key vault resource.
     */
    readonly location: string;
    /**
     * Name of the key vault resource.
     */
    readonly name: string;
    /**
     * Properties of the secret
     */
    readonly properties: types.outputs.keyvault.SecretPropertiesResponse;
    /**
     * Tags assigned to the key vault resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * Resource type of the key vault resource.
     */
    readonly type: string;
}
/**
 * Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
 * Azure REST API version: 2023-02-01.
 */
export function getSecretOutput(args: GetSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretResult> {
    return pulumi.output(args).apply((a: any) => getSecret(a, opts))
}

export interface GetSecretOutputArgs {
    /**
     * The name of the Resource Group to which the vault belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the secret.
     */
    secretName: pulumi.Input<string>;
    /**
     * The name of the vault.
     */
    vaultName: pulumi.Input<string>;
}
