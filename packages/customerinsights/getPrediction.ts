import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Prediction in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getPrediction(args: GetPredictionArgs, opts?: pulumi.InvokeOptions): Promise<GetPredictionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getPrediction", {
        "hubName": args.hubName,
        "predictionName": args.predictionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPredictionArgs {
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
 * The prediction resource format.
 */
export interface GetPredictionResult {
    /**
     * Whether do auto analyze.
     */
    readonly autoAnalyze: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Description of the prediction.
     */
    readonly description?: {[key: string]: string};
    /**
     * Display name of the prediction.
     */
    readonly displayName?: {[key: string]: string};
    /**
     * The prediction grades.
     */
    readonly grades?: types.outputs.PredictionResponseGrades[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Interaction types involved in the prediction.
     */
    readonly involvedInteractionTypes?: string[];
    /**
     * KPI types involved in the prediction.
     */
    readonly involvedKpiTypes?: string[];
    /**
     * Relationships involved in the prediction.
     */
    readonly involvedRelationships?: string[];
    /**
     * Definition of the link mapping of prediction.
     */
    readonly mappings: types.outputs.PredictionResponseMappings;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Negative outcome expression.
     */
    readonly negativeOutcomeExpression: string;
    /**
     * Positive outcome expression.
     */
    readonly positiveOutcomeExpression: string;
    /**
     * Name of the prediction.
     */
    readonly predictionName?: string;
    /**
     * Primary profile type.
     */
    readonly primaryProfileType: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Scope expression.
     */
    readonly scopeExpression: string;
    /**
     * Score label.
     */
    readonly scoreLabel: string;
    /**
     * System generated entities.
     */
    readonly systemGeneratedEntities: types.outputs.PredictionResponseSystemGeneratedEntities;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Prediction in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getPredictionOutput(args: GetPredictionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPredictionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getPrediction", {
        "hubName": args.hubName,
        "predictionName": args.predictionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPredictionOutputArgs {
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