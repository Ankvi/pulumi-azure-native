import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the endpoint access credentials to the resource.
 *
 * Uses Azure REST API version 2024-12-01.
 *
 * Other available API versions: 2023-03-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridconnectivity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listEndpointCredentials(args: ListEndpointCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListEndpointCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity:listEndpointCredentials", {
        "endpointName": args.endpointName,
        "expiresin": args.expiresin,
        "resourceUri": args.resourceUri,
        "serviceName": args.serviceName,
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
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
    /**
     * The name of the service. If not provided, the request will by pass the generation of service configuration token
     */
    serviceName?: string | types.enums.ServiceName;
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
    /**
     * The token to access the enabled service.
     */
    readonly serviceConfigurationToken?: string;
}
/**
 * Gets the endpoint access credentials to the resource.
 *
 * Uses Azure REST API version 2024-12-01.
 *
 * Other available API versions: 2023-03-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridconnectivity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listEndpointCredentialsOutput(args: ListEndpointCredentialsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListEndpointCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridconnectivity:listEndpointCredentials", {
        "endpointName": args.endpointName,
        "expiresin": args.expiresin,
        "resourceUri": args.resourceUri,
        "serviceName": args.serviceName,
    }, opts);
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
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The name of the service. If not provided, the request will by pass the generation of service configuration token
     */
    serviceName?: pulumi.Input<string | types.enums.ServiceName>;
}