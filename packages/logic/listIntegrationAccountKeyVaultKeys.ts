import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the integration account's Key Vault keys.
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listIntegrationAccountKeyVaultKeysOutput(args: ListIntegrationAccountKeyVaultKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIntegrationAccountKeyVaultKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:listIntegrationAccountKeyVaultKeys", {
        "integrationAccountName": args.integrationAccountName,
        "keyVault": args.keyVault,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
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