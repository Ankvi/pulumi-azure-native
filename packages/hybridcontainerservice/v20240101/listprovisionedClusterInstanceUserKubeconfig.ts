import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the user credentials of the provisioned cluster (can only be used within private network)
 */
export function listprovisionedClusterInstanceUserKubeconfig(args: ListprovisionedClusterInstanceUserKubeconfigArgs, opts?: pulumi.InvokeOptions): Promise<ListprovisionedClusterInstanceUserKubeconfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20240101:listprovisionedClusterInstanceUserKubeconfig", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface ListprovisionedClusterInstanceUserKubeconfigArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: string;
}

/**
 * The list kubeconfig result response.
 */
export interface ListprovisionedClusterInstanceUserKubeconfigResult {
    readonly error?: types.outputs.ListCredentialResponseResponseError;
    /**
     * Operation Id
     */
    readonly id: string;
    /**
     * Operation Name
     */
    readonly name: string;
    readonly properties: types.outputs.ListCredentialResponseResponseProperties;
    /**
     * ARM Resource Id of the provisioned cluster instance
     */
    readonly resourceId: string;
    /**
     * Provisioning state of the resource
     */
    readonly status: string;
}
/**
 * Lists the user credentials of the provisioned cluster (can only be used within private network)
 */
export function listprovisionedClusterInstanceUserKubeconfigOutput(args: ListprovisionedClusterInstanceUserKubeconfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListprovisionedClusterInstanceUserKubeconfigResult> {
    return pulumi.output(args).apply((a: any) => listprovisionedClusterInstanceUserKubeconfig(a, opts))
}

export interface ListprovisionedClusterInstanceUserKubeconfigOutputArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}