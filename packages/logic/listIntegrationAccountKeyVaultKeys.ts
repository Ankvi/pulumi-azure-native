import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the integration account's Key Vault keys.
 * Azure REST API version: 2019-05-01.
 */
export function listIntegrationAccountKeyVaultKeys(args: ListIntegrationAccountKeyVaultKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountKeyVaultKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listIntegrationAccountKeyVaultKeys", {
        "integrationAccountName": args.integrationAccountName,
        "keyVault": args.keyVault,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListIntegrationAccountKeyVaultKeysArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The key vault reference.
     */
    keyVault: types.inputs.KeyVaultReference;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The skip token.
     */
    skipToken?: string;
}

/**
 * Collection of key vault keys.
 */
export interface ListIntegrationAccountKeyVaultKeysResult {
    /**
     * The skip token.
     */
    readonly skipToken?: string;
    /**
     * The key vault keys.
     */
    readonly value?: types.outputs.KeyVaultKeyResponse[];
}
/**
 * Gets the integration account's Key Vault keys.
 * Azure REST API version: 2019-05-01.
 */
export function listIntegrationAccountKeyVaultKeysOutput(args: ListIntegrationAccountKeyVaultKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIntegrationAccountKeyVaultKeysResult> {
    return pulumi.output(args).apply((a: any) => listIntegrationAccountKeyVaultKeys(a, opts))
}

export interface ListIntegrationAccountKeyVaultKeysOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The key vault reference.
     */
    keyVault: pulumi.Input<types.inputs.KeyVaultReferenceArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The skip token.
     */
    skipToken?: pulumi.Input<string>;
}
