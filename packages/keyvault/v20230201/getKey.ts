import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the current version of the specified key from the specified key vault.
 */
export function getKey(args: GetKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:keyvault/v20230201:getKey", {
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
    readonly attributes?: types.outputs.keyvault.v20230201.KeyAttributesResponse;
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
    readonly releasePolicy?: types.outputs.keyvault.v20230201.KeyReleasePolicyResponse;
    /**
     * Key rotation policy in response. It will be used for both output and input. Omitted if empty
     */
    readonly rotationPolicy?: types.outputs.keyvault.v20230201.RotationPolicyResponse;
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
 */
export function getKeyOutput(args: GetKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKeyResult> {
    return pulumi.output(args).apply((a: any) => getKey(a, opts))
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
