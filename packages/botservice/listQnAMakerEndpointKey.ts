import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists the QnA Maker endpoint keys
 * Azure REST API version: 2022-09-15.
 */
export function listQnAMakerEndpointKey(args?: ListQnAMakerEndpointKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListQnAMakerEndpointKeyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice:listQnAMakerEndpointKey", {
        "authkey": args.authkey,
        "hostname": args.hostname,
    }, opts);
}

export interface ListQnAMakerEndpointKeyArgs {
    /**
     * Subscription key which provides access to this API.
     */
    authkey?: string;
    /**
     * the host name of the QnA Maker endpoint
     */
    hostname?: string;
}

/**
 * Schema for EndpointKeys generate/refresh operations.
 */
export interface ListQnAMakerEndpointKeyResult {
    /**
     * Current version of runtime.
     */
    readonly installedVersion?: string;
    /**
     * Latest version of runtime.
     */
    readonly lastStableVersion?: string;
    /**
     * Primary Access Key.
     */
    readonly primaryEndpointKey?: string;
    /**
     * Secondary Access Key.
     */
    readonly secondaryEndpointKey?: string;
}
/**
 * Lists the QnA Maker endpoint keys
 * Azure REST API version: 2022-09-15.
 */
export function listQnAMakerEndpointKeyOutput(args?: ListQnAMakerEndpointKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListQnAMakerEndpointKeyResult> {
    return pulumi.output(args).apply((a: any) => listQnAMakerEndpointKey(a, opts))
}

export interface ListQnAMakerEndpointKeyOutputArgs {
    /**
     * Subscription key which provides access to this API.
     */
    authkey?: pulumi.Input<string>;
    /**
     * the host name of the QnA Maker endpoint
     */
    hostname?: pulumi.Input<string>;
}
