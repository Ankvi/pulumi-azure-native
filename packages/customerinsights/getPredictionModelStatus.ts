import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets model status of the prediction.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getPredictionModelStatus(args: GetPredictionModelStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetPredictionModelStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getPredictionModelStatus", {
        "hubName": args.hubName,
        "predictionName": args.predictionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPredictionModelStatusArgs {
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
 * The prediction model status.
 */
export interface GetPredictionModelStatusResult {
    /**
     * The model status message.
     */
    readonly message: string;
    /**
     * Version of the model.
     */
    readonly modelVersion: string;
    /**
     * The prediction GUID ID.
     */
    readonly predictionGuidId: string;
    /**
     * The prediction name.
     */
    readonly predictionName: string;
    /**
     * The signals used.
     */
    readonly signalsUsed: number;
    /**
     * Prediction model life cycle.  When prediction is in PendingModelConfirmation status, it is allowed to update the status to PendingFeaturing or Active through API.
     */
    readonly status: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * Count of the test set.
     */
    readonly testSetCount: number;
    /**
     * The training accuracy.
     */
    readonly trainingAccuracy: number;
    /**
     * Count of the training set.
     */
    readonly trainingSetCount: number;
    /**
     * Count of the validation set.
     */
    readonly validationSetCount: number;
}
/**
 * Gets model status of the prediction.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getPredictionModelStatusOutput(args: GetPredictionModelStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPredictionModelStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getPredictionModelStatus", {
        "hubName": args.hubName,
        "predictionName": args.predictionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPredictionModelStatusOutputArgs {
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