import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the properties of an Experiment
 *
 * Uses Azure REST API version 2019-11-01.
 */
export function getExperiment(args: GetExperimentArgs, opts?: pulumi.InvokeOptions): Promise<GetExperimentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:frontdoor:getExperiment", {
        "experimentName": args.experimentName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExperimentArgs {
    /**
     * The Experiment identifier associated with the Experiment
     */
    experimentName: string;
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
 * Defines the properties of an Experiment
 */
export interface GetExperimentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The description of the details or intents of the Experiment
     */
    readonly description?: string;
    /**
     * The state of the Experiment
     */
    readonly enabledState?: string;
    /**
     * The endpoint A of an experiment
     */
    readonly endpointA?: types.outputs.EndpointResponse;
    /**
     * The endpoint B of an experiment
     */
    readonly endpointB?: types.outputs.EndpointResponse;
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
     * The uri to the Script used in the Experiment
     */
    readonly scriptFileUri: string;
    /**
     * The description of Experiment status from the server side
     */
    readonly status: string;
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
 * Defines the properties of an Experiment
 *
 * Uses Azure REST API version 2019-11-01.
 */
export function getExperimentOutput(args: GetExperimentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExperimentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:frontdoor:getExperiment", {
        "experimentName": args.experimentName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExperimentOutputArgs {
    /**
     * The Experiment identifier associated with the Experiment
     */
    experimentName: pulumi.Input<string>;
    /**
     * The Profile identifier associated with the Tenant and Partner
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}