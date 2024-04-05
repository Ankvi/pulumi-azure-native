import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Service Token
 */
export function getOnlineEndpointToken(args: GetOnlineEndpointTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetOnlineEndpointTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20231001:getOnlineEndpointToken", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetOnlineEndpointTokenArgs {
    /**
     * Online Endpoint name.
     */
    endpointName: string;
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
 * Service Token
 */
export interface GetOnlineEndpointTokenResult {
    /**
     * Access token for endpoint authentication.
     */
    readonly accessToken?: string;
    /**
     * Access token expiry time (UTC).
     */
    readonly expiryTimeUtc?: number;
    /**
     * Refresh access token after time (UTC).
     */
    readonly refreshAfterTimeUtc?: number;
    /**
     * Access token type.
     */
    readonly tokenType?: string;
}
/**
 * Service Token
 */
export function getOnlineEndpointTokenOutput(args: GetOnlineEndpointTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOnlineEndpointTokenResult> {
    return pulumi.output(args).apply((a: any) => getOnlineEndpointToken(a, opts))
}

export interface GetOnlineEndpointTokenOutputArgs {
    /**
     * Online Endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}