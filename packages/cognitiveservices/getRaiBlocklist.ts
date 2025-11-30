import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified custom blocklist associated with the Azure OpenAI account.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-04-01-preview, 2024-06-01-preview, 2025-04-01-preview, 2025-06-01, 2025-07-01-preview, 2025-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRaiBlocklist(args: GetRaiBlocklistArgs, opts?: pulumi.InvokeOptions): Promise<GetRaiBlocklistResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getRaiBlocklist", {
        "accountName": args.accountName,
        "raiBlocklistName": args.raiBlocklistName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRaiBlocklistArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the RaiBlocklist associated with the Cognitive Services Account
     */
    raiBlocklistName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cognitive Services RaiBlocklist.
 */
export interface GetRaiBlocklistResult {
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
     * Properties of Cognitive Services RaiBlocklist.
     */
    readonly properties: types.outputs.RaiBlocklistPropertiesResponse;
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
 * Gets the specified custom blocklist associated with the Azure OpenAI account.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-04-01-preview, 2024-06-01-preview, 2025-04-01-preview, 2025-06-01, 2025-07-01-preview, 2025-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRaiBlocklistOutput(args: GetRaiBlocklistOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRaiBlocklistResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getRaiBlocklist", {
        "accountName": args.accountName,
        "raiBlocklistName": args.raiBlocklistName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRaiBlocklistOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the RaiBlocklist associated with the Cognitive Services Account
     */
    raiBlocklistName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}