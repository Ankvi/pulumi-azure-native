import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a client.
 */
export function getClient(args: GetClientArgs, opts?: pulumi.InvokeOptions): Promise<GetClientResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20231215preview:getClient", {
        "clientName": args.clientName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClientArgs {
    /**
     * Name of the client.
     */
    clientName: string;
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * The Client resource.
 */
export interface GetClientResult {
    /**
     * Attributes for the client. Supported values are int, bool, string, string[].
     * Example:
     * "attributes": { "room": "345", "floor": 12, "deviceTypes": ["Fan", "Light"] }
     */
    readonly attributes?: any;
    /**
     * The name presented by the client for authentication. The default value is the name of the resource.
     */
    readonly authenticationName?: string;
    /**
     * The client certificate authentication information.
     */
    readonly clientCertificateAuthentication?: types.outputs.ClientCertificateAuthenticationResponse;
    /**
     * Description for the Client resource.
     */
    readonly description?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the Client resource.
     */
    readonly provisioningState: string;
    /**
     * Indicates if the client is enabled or not. Default value is Enabled.
     */
    readonly state?: string;
    /**
     * The system metadata relating to the Client resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a client.
 */
export function getClientOutput(args: GetClientOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClientResult> {
    return pulumi.output(args).apply((a: any) => getClient(a, opts))
}

export interface GetClientOutputArgs {
    /**
     * Name of the client.
     */
    clientName: pulumi.Input<string>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}