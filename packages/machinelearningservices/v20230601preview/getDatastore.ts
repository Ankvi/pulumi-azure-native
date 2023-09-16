import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getDatastore(args: GetDatastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetDatastoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230601preview:getDatastore", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetDatastoreArgs {
    /**
     * Datastore name.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Azure Resource Manager resource envelope.
 */
export interface GetDatastoreResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly datastoreProperties: types.outputs.machinelearningservices.v20230601preview.AzureBlobDatastoreResponse | types.outputs.machinelearningservices.v20230601preview.AzureDataLakeGen1DatastoreResponse | types.outputs.machinelearningservices.v20230601preview.AzureDataLakeGen2DatastoreResponse | types.outputs.machinelearningservices.v20230601preview.AzureFileDatastoreResponse | types.outputs.machinelearningservices.v20230601preview.HdfsDatastoreResponse | types.outputs.machinelearningservices.v20230601preview.OneLakeDatastoreResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.machinelearningservices.v20230601preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Azure Resource Manager resource envelope.
 */
export function getDatastoreOutput(args: GetDatastoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatastoreResult> {
    return pulumi.output(args).apply((a: any) => getDatastore(a, opts))
}

export interface GetDatastoreOutputArgs {
    /**
     * Datastore name.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
