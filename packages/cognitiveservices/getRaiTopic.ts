import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified custom topic associated with the Azure OpenAI account.
 *
 * Uses Azure REST API version 2025-07-01-preview.
 *
 * Other available API versions: 2025-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRaiTopic(args: GetRaiTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetRaiTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getRaiTopic", {
        "accountName": args.accountName,
        "raiTopicName": args.raiTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRaiTopicArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the Rai Topic associated with the Cognitive Services Account
     */
    raiTopicName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cognitive Services Rai Topic.
 */
export interface GetRaiTopicResult {
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
     * Properties of Cognitive Services Rai Topic.
     */
    readonly properties: types.outputs.RaiTopicPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
 * Gets the specified custom topic associated with the Azure OpenAI account.
 *
 * Uses Azure REST API version 2025-07-01-preview.
 *
 * Other available API versions: 2025-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRaiTopicOutput(args: GetRaiTopicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRaiTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getRaiTopic", {
        "accountName": args.accountName,
        "raiTopicName": args.raiTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRaiTopicOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Rai Topic associated with the Cognitive Services Account
     */
    raiTopicName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}