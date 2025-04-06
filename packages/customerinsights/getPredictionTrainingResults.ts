import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets training results.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getPredictionTrainingResults(args: GetPredictionTrainingResultsArgs, opts?: pulumi.InvokeOptions): Promise<GetPredictionTrainingResultsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getPredictionTrainingResults", {
        "hubName": args.hubName,
        "predictionName": args.predictionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPredictionTrainingResultsArgs {
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the Prediction.
     */
    predictionName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The training results of the prediction.
 */
export interface GetPredictionTrainingResultsResult {
    /**
     * Canonical profiles.
     */
    readonly canonicalProfiles: types.outputs.CanonicalProfileDefinitionResponse[];
    /**
     * Prediction distribution.
     */
    readonly predictionDistribution: types.outputs.PredictionDistributionDefinitionResponse;
    /**
     * Instance count of the primary profile.
     */
    readonly primaryProfileInstanceCount: number;
    /**
     * Score name.
     */
    readonly scoreName: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
}
/**
 * Gets training results.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getPredictionTrainingResultsOutput(args: GetPredictionTrainingResultsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPredictionTrainingResultsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getPredictionTrainingResults", {
        "hubName": args.hubName,
        "predictionName": args.predictionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPredictionTrainingResultsOutputArgs {
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the Prediction.
     */
    predictionName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}