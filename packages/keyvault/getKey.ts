import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the current version of the specified key from the specified key vault.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2023-07-01, 2024-04-01-preview, 2024-11-01, 2024-12-01-preview.
 */
export function getKey(args: GetKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:keyvault:getKey", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetKeyArgs {
    /**
     * The name of the key to be retrieved.
     */
    keyName: string;
    /**
     * The name of the resource group which contains the specified key vault.
     */
    resourceGroupName: string;
    /**
     * The name of the vault which contains the key to be retrieved.
     */
    vaultName: string;
}

/**
 * The key resource.
 */
export interface GetKeyResult {
    /**
     * The attributes of the key.
     */
    readonly attributes?: types.outputs.KeyAttributesResponse;
    /**
     * The elliptic curve name. For valid values, see JsonWebKeyCurveName.
     */
    readonly curveName?: string;
    /**
     * Fully qualified identifier of the key vault resource.
     */
    readonly id: string;
    readonly keyOps?: string[];
    /**
     * The key size in bits. For example: 2048, 3072, or 4096 for RSA.
     */
    readonly keySize?: number;
    /**
     * The URI to retrieve the current version of the key.
     */
    readonly keyUri: string;
    /**
     * The URI to retrieve the specific version of the key.
     */
    readonly keyUriWithVersion: string;
    /**
     * The type of the key. For valid values, see JsonWebKeyType.
     */
    readonly kty?: string;
    /**
     * Azure location of the key vault resource.
     */
    readonly location: string;
    /**
     * Name of the key vault resource.
     */
    readonly name: string;
    /**
     * Key release policy in response. It will be used for both output and input. Omitted if empty
     */
    readonly releasePolicy?: types.outputs.KeyReleasePolicyResponse;
    /**
     * Key rotation policy in response. It will be used for both output and input. Omitted if empty
     */
    readonly rotationPolicy?: types.outputs.RotationPolicyResponse;
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
 * Gets the current version of the specified key from the specified key vault.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2023-07-01, 2024-04-01-preview, 2024-11-01, 2024-12-01-preview.
 */
export function getKeyOutput(args: GetKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:keyvault:getKey", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetKeyOutputArgs {
    /**
     * The name of the key to be retrieved.
     */
    keyName: pulumi.Input<string>;
    /**
     * The name of the resource group which contains the specified key vault.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the vault which contains the key to be retrieved.
     */
    vaultName: pulumi.Input<string>;
}