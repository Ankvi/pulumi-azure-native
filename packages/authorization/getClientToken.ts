import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Use this function to get an Azure authentication token for the current login context.
 */
export function getClientToken(args?: GetClientTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetClientTokenResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getClientToken", {
        "endpoint": args.endpoint,
    }, opts);
}

export interface GetClientTokenArgs {
    /**
     * Optional authentication endpoint. Defaults to the endpoint of Azure Resource Manager.
     */
    endpoint?: string;
}

/**
 * Configuration values returned by getClientToken.
 */
export interface GetClientTokenResult {
    /**
     * OAuth token for Azure Management API and SDK authentication.
     */
    readonly token: string;
}
/**
 * Use this function to get an Azure authentication token for the current login context.
 */
export function getClientTokenOutput(args?: GetClientTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClientTokenResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getClientToken", {
        "endpoint": args.endpoint,
    }, opts);
}

export interface GetClientTokenOutputArgs {
    /**
     * Optional authentication endpoint. Defaults to the endpoint of Azure Resource Manager.
     */
    endpoint?: pulumi.Input<string>;
}