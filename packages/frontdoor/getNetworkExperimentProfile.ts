import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Defines an Network Experiment Profile and lists of Experiments
 *
 * Uses Azure REST API version 2019-11-01.
 */
export function getNetworkExperimentProfile(args: GetNetworkExperimentProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkExperimentProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:frontdoor:getNetworkExperimentProfile", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkExperimentProfileArgs {
    /**
     * The Profile identifier associated with the Tenant and Partner
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Defines an Network Experiment Profile and lists of Experiments
 */
export interface GetNetworkExperimentProfileResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The state of the Experiment
     */
    readonly enabledState?: string;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource status.
     */
    readonly resourceState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Defines an Network Experiment Profile and lists of Experiments
 *
 * Uses Azure REST API version 2019-11-01.
 */
export function getNetworkExperimentProfileOutput(args: GetNetworkExperimentProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkExperimentProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:frontdoor:getNetworkExperimentProfile", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkExperimentProfileOutputArgs {
    /**
     * The Profile identifier associated with the Tenant and Partner
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}