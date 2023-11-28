import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the AAD user credentials of a provisioned cluster instance used only in direct mode.
 */
export function listprovisionedClusterInstanceUserKubeconfig(args: ListprovisionedClusterInstanceUserKubeconfigArgs, opts?: pulumi.InvokeOptions): Promise<ListprovisionedClusterInstanceUserKubeconfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20231115preview:listprovisionedClusterInstanceUserKubeconfig", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface ListprovisionedClusterInstanceUserKubeconfigArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the connected cluster resource.
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
 * Lists the AAD user credentials of a provisioned cluster instance used only in direct mode.
 */
export function listprovisionedClusterInstanceUserKubeconfigOutput(args: ListprovisionedClusterInstanceUserKubeconfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListprovisionedClusterInstanceUserKubeconfigResult> {
    return pulumi.output(args).apply((a: any) => listprovisionedClusterInstanceUserKubeconfig(a, opts))
}

export interface ListprovisionedClusterInstanceUserKubeconfigOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}
