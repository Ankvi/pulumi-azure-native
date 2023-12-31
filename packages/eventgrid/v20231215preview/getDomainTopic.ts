import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a domain topic.
 */
export function getDomainTopic(args: GetDomainTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainTopicResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20231215preview:getDomainTopic", {
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
