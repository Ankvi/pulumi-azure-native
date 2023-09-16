import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the endpoint access credentials to the resource.
 */
export function listEndpointCredentials(args: ListEndpointCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListEndpointCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity/v20220501preview:listEndpointCredentials", {
        "endpointName": args.endpointName,
        "expiresin": args.expiresin,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface ListEndpointCredentialsArgs {
    /**
     * The endpoint name.
     */
    endpointName: string;
    /**
     * The is how long the endpoint access token is valid (in seconds).
     */
    expiresin?: number;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
}

/**
 * The endpoint access for the target resource.
 */
export interface ListEndpointCredentialsResult {
    /**
     * Access key for hybrid connection.
     */
    readonly accessKey: string;
    /**
     * The expiration of access key in unix time.
     */
    readonly expiresOn?: number;
    /**
     * Azure Relay hybrid connection name for the resource.
     */
    readonly hybridConnectionName: string;
    /**
     * The namespace name.
     */
    readonly namespaceName: string;
    /**
     * The suffix domain name of relay namespace.
     */
    readonly namespaceNameSuffix: string;
}
/**
 * Gets the endpoint access credentials to the resource.
 */
export function listEndpointCredentialsOutput(args: ListEndpointCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListEndpointCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listEndpointCredentials(a, opts))
}

export interface ListEndpointCredentialsOutputArgs {
    /**
     * The endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The is how long the endpoint access token is valid (in seconds).
     */
    expiresin?: pulumi.Input<number>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
}
