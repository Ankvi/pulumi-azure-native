import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Create new debug credentials for gateway.
 */
export function listGatewayDebugCredentials(args: ListGatewayDebugCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListGatewayDebugCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:listGatewayDebugCredentials", {
        "apiId": args.apiId,
        "credentialsExpireAfter": args.credentialsExpireAfter,
        "gatewayId": args.gatewayId,
        "purposes": args.purposes,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListGatewayDebugCredentialsArgs {
    /**
     * Full resource Id of an API.
     */
    apiId: string;
    /**
     * Credentials expiration in ISO8601 format. Maximum duration of the credentials is PT1H. When property is not specified, them value PT1H is used.
     */
    credentialsExpireAfter?: string;
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: string;
    /**
     * Purposes of debug credential.
     */
    purposes: (string | types.enums.GatewayListDebugCredentialsContractPurpose)[];
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Gateway debug credentials.
 */
export interface ListGatewayDebugCredentialsResult {
    /**
     * Gateway debug token.
     */
    readonly token?: string;
}
/**
 * Create new debug credentials for gateway.
 */
export function listGatewayDebugCredentialsOutput(args: ListGatewayDebugCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGatewayDebugCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listGatewayDebugCredentials(a, opts))
}

export interface ListGatewayDebugCredentialsOutputArgs {
    /**
     * Full resource Id of an API.
     */
    apiId: pulumi.Input<string>;
    /**
     * Credentials expiration in ISO8601 format. Maximum duration of the credentials is PT1H. When property is not specified, them value PT1H is used.
     */
    credentialsExpireAfter?: pulumi.Input<string>;
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: pulumi.Input<string>;
    /**
     * Purposes of debug credential.
     */
    purposes: pulumi.Input<pulumi.Input<string | types.enums.GatewayListDebugCredentialsContractPurpose>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}