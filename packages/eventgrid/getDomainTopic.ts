import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a domain topic.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview.
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
     * The system metadata relating to Domain Topic resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a domain topic.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview.
 */
export function getDomainTopicOutput(args: GetDomainTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainTopicResult> {
    return pulumi.output(args).apply((a: any) => getDomainTopic(a, opts))
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