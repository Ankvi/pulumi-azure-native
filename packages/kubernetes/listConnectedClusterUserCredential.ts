import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets cluster user credentials of the connected cluster with a specified resource group and name.
 *
 * Uses Azure REST API version 2024-02-01-preview.
 *
 * Other available API versions: 2021-10-01, 2022-05-01-preview, 2022-10-01-preview, 2023-11-01-preview, 2024-01-01, 2024-06-01-preview, 2024-07-01-preview, 2024-07-15-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kubernetes [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listConnectedClusterUserCredential(args: ListConnectedClusterUserCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectedClusterUserCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetes:listConnectedClusterUserCredential", {
        "authenticationMethod": args.authenticationMethod,
        "clientProxy": args.clientProxy,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListConnectedClusterUserCredentialArgs {
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
export interface ListConnectedClusterUserCredentialResult {
    /**
     * Contains the REP (rendezvous endpoint) and “Sender” access token.
     */
    readonly hybridConnectionConfig: types.outputs.HybridConnectionConfigResponse;
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.CredentialResultResponse[];
}
/**
 * Gets cluster user credentials of the connected cluster with a specified resource group and name.
 *
 * Uses Azure REST API version 2024-02-01-preview.
 *
 * Other available API versions: 2021-10-01, 2022-05-01-preview, 2022-10-01-preview, 2023-11-01-preview, 2024-01-01, 2024-06-01-preview, 2024-07-01-preview, 2024-07-15-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kubernetes [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listConnectedClusterUserCredentialOutput(args: ListConnectedClusterUserCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListConnectedClusterUserCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kubernetes:listConnectedClusterUserCredential", {
        "authenticationMethod": args.authenticationMethod,
        "clientProxy": args.clientProxy,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListConnectedClusterUserCredentialOutputArgs {
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