import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BrokerAuthenticationResource
 */
export function getBrokerAuthentication(args: GetBrokerAuthenticationArgs, opts?: pulumi.InvokeOptions): Promise<GetBrokerAuthenticationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq/v20231004preview:getBrokerAuthentication", {
        "authenticationName": args.authenticationName,
        "brokerName": args.brokerName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerAuthenticationArgs {
    /**
     * Name of MQ broker/authentication resource
     */
    authenticationName: string;
    /**
     * Name of MQ broker resource
     */
    brokerName: string;
    /**
     * Name of MQ resource
     */
    mqName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * MQ broker/authentication resource
 */
export interface GetBrokerAuthenticationResult {
    /**
     * The list of authentication methods supported by the Authentication Resource. For each array element, NOTE - Enum only authenticator type supported.
     */
    readonly authenticationMethods: types.outputs.BrokerAuthenticatorMethodsResponse[];
    /**
     * Extended Location
     */
    readonly extendedLocation: types.outputs.ExtendedLocationPropertyResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The array of listener Resources it supports.
     */
    readonly listenerRef: string[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a BrokerAuthenticationResource
 */
export function getBrokerAuthenticationOutput(args: GetBrokerAuthenticationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBrokerAuthenticationResult> {
    return pulumi.output(args).apply((a: any) => getBrokerAuthentication(a, opts))
}

export interface GetBrokerAuthenticationOutputArgs {
    /**
     * Name of MQ broker/authentication resource
     */
    authenticationName: pulumi.Input<string>;
    /**
     * Name of MQ broker resource
     */
    brokerName: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
