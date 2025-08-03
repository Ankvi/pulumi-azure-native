import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified EncryptionScope associated with the Cognitive Services account.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-04-01-preview, 2024-06-01-preview, 2025-04-01-preview, 2025-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getEncryptionScope(args: GetEncryptionScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetEncryptionScopeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getEncryptionScope", {
        "accountName": args.accountName,
        "encryptionScopeName": args.encryptionScopeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEncryptionScopeArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the encryptionScope associated with the Cognitive Services Account
     */
    encryptionScopeName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cognitive Services EncryptionScope
 */
export interface GetEncryptionScopeResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of Cognitive Services EncryptionScope.
     */
    readonly properties: types.outputs.EncryptionScopePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified EncryptionScope associated with the Cognitive Services account.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-04-01-preview, 2024-06-01-preview, 2025-04-01-preview, 2025-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getEncryptionScopeOutput(args: GetEncryptionScopeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEncryptionScopeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getEncryptionScope", {
        "accountName": args.accountName,
        "encryptionScopeName": args.encryptionScopeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEncryptionScopeOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the encryptionScope associated with the Cognitive Services Account
     */
    encryptionScopeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}