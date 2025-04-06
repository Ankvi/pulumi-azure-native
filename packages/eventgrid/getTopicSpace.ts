import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a topic space.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTopicSpace(args: GetTopicSpaceArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicSpaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getTopicSpace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicSpaceName": args.topicSpaceName,
    }, opts);
}

export interface GetTopicSpaceArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the Topic space.
     */
    topicSpaceName: string;
}

/**
 * The Topic space resource.
 */
export interface GetTopicSpaceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Description for the Topic Space resource.
     */
    readonly description?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the TopicSpace resource.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to the Event Grid resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The topic filters in the topic space.
     * Example: "topicTemplates": [ 
     *               "devices/foo/bar",
     *               "devices/topic1/+",
     *               "devices/${principal.name}/${principal.attributes.keyName}" ].
     */
    readonly topicTemplates?: string[];
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a topic space.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTopicSpaceOutput(args: GetTopicSpaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTopicSpaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getTopicSpace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicSpaceName": args.topicSpaceName,
    }, opts);
}

export interface GetTopicSpaceOutputArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Topic space.
     */
    topicSpaceName: pulumi.Input<string>;
}