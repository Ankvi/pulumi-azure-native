import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a Datastore by name.
 */
export function getMachineLearningDatastore(args: GetMachineLearningDatastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineLearningDatastoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20200501preview:getMachineLearningDatastore", {
        "datastoreName": args.datastoreName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMachineLearningDatastoreArgs {
    /**
     * The Datastore name.
     */
    datastoreName: string;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Machine Learning datastore object wrapped into ARM resource envelope.
 */
export interface GetMachineLearningDatastoreResult {
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.machinelearningservices.v20200501preview.IdentityResponse;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * Datastore properties
     */
    readonly properties: types.outputs.machinelearningservices.v20200501preview.DatastoreResponse;
    /**
     * The sku of the workspace.
     */
    readonly sku?: types.outputs.machinelearningservices.v20200501preview.SkuResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
/**
 * Get a Datastore by name.
 */
export function getMachineLearningDatastoreOutput(args: GetMachineLearningDatastoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineLearningDatastoreResult> {
    return pulumi.output(args).apply((a: any) => getMachineLearningDatastore(a, opts))
}

export interface GetMachineLearningDatastoreOutputArgs {
    /**
     * The Datastore name.
     */
    datastoreName: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
