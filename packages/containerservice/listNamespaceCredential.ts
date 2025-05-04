import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The list credential result response.
 *
 * Uses Azure REST API version 2025-02-02-preview.
 */
export function listNamespaceCredential(args: ListNamespaceCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:listNamespaceCredential", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListNamespaceCredentialArgs {
    /**
     * The name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
}

/**
 * The list credential result response.
 */
export interface ListNamespaceCredentialResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.CredentialResultResponse[];
}
/**
 * The list credential result response.
 *
 * Uses Azure REST API version 2025-02-02-preview.
 */
export function listNamespaceCredentialOutput(args: ListNamespaceCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListNamespaceCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:listNamespaceCredential", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListNamespaceCredentialOutputArgs {
    /**
     * The name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}