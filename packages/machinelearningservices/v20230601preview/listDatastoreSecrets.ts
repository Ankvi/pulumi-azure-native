import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Base definition for datastore secrets.
 */
export function listDatastoreSecrets(args: ListDatastoreSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListDatastoreSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230601preview:listDatastoreSecrets", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListDatastoreSecretsArgs {
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
 * Base definition for datastore secrets.
 */
export interface ListDatastoreSecretsResult {
    /**
     * [Required] Credential type used to authentication with storage.
     */
    readonly secretsType: string;
}
/**
 * Base definition for datastore secrets.
 */
export function listDatastoreSecretsOutput(args: ListDatastoreSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDatastoreSecretsResult> {
    return pulumi.output(args).apply((a: any) => listDatastoreSecrets(a, opts))
}

export interface ListDatastoreSecretsOutputArgs {
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
