import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a domain topic.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDomainTopic(args: GetDomainTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getDomainTopic", {
        "domainName": args.domainName,
        "domainTopicName": args.domainTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainTopicArgs {
    /**
     * Name of the domain.
     */
    domainName: string;
    /**
     * Name of the topic.
     */
    domainTopicName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Domain Topic.
 */
export interface GetDomainTopicResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the domain topic.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to the Event Grid resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a domain topic.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDomainTopicOutput(args: GetDomainTopicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDomainTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getDomainTopic", {
        "domainName": args.domainName,
        "domainTopicName": args.domainTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainTopicOutputArgs {
    /**
     * Name of the domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * Name of the topic.
     */
    domainTopicName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}