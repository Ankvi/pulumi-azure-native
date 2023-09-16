import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets cluster user credentials of the connected cluster with a specified resource group and name.
 * Azure REST API version: 2021-04-01-preview.
 */
export function listConnectedClusterUserCredentials(args: ListConnectedClusterUserCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectedClusterUserCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetes:listConnectedClusterUserCredentials", {
        "authenticationMethod": args.authenticationMethod,
        "clientProxy": args.clientProxy,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListConnectedClusterUserCredentialsArgs {
    /**
     * The mode of client authentication.
     */
    authenticationMethod: string | types.enums.AuthenticationMethod;
    /**
     * Boolean value to indicate whether the request is for client side proxy or not
     */
    clientProxy: boolean;
    /**
     * The name of the Kubernetes cluster on which get is called.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The list of credential result response.
 */
export interface ListConnectedClusterUserCredentialsResult {
    /**
     * Contains the REP (rendezvous endpoint) and “Sender” access token.
     */
    readonly hybridConnectionConfig: types.outputs.kubernetes.HybridConnectionConfigResponse;
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.kubernetes.CredentialResultResponse[];
}
/**
 * Gets cluster user credentials of the connected cluster with a specified resource group and name.
 * Azure REST API version: 2021-04-01-preview.
 */
export function listConnectedClusterUserCredentialsOutput(args: ListConnectedClusterUserCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListConnectedClusterUserCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listConnectedClusterUserCredentials(a, opts))
}

export interface ListConnectedClusterUserCredentialsOutputArgs {
    /**
     * The mode of client authentication.
     */
    authenticationMethod: pulumi.Input<string | types.enums.AuthenticationMethod>;
    /**
     * Boolean value to indicate whether the request is for client side proxy or not
     */
    clientProxy: pulumi.Input<boolean>;
    /**
     * The name of the Kubernetes cluster on which get is called.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
