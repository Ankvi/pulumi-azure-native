import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets training results.
 */
export function getPredictionTrainingResults(args: GetPredictionTrainingResultsArgs, opts?: pulumi.InvokeOptions): Promise<GetPredictionTrainingResultsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights/v20170426:getPredictionTrainingResults", {
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
    readonly canonicalProfiles: types.outputs.customerinsights.v20170426.CanonicalProfileDefinitionResponse[];
    /**
     * Prediction distribution.
     */
    readonly predictionDistribution: types.outputs.customerinsights.v20170426.PredictionDistributionDefinitionResponse;
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
 */
export function getPredictionTrainingResultsOutput(args: GetPredictionTrainingResultsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPredictionTrainingResultsResult> {
    return pulumi.output(args).apply((a: any) => getPredictionTrainingResults(a, opts))
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
