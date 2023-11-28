import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BrokerAuthorizationResource
 */
export function getBrokerAuthorization(args: GetBrokerAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetBrokerAuthorizationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq/v20231004preview:getBrokerAuthorization", {
        "authorizationName": args.authorizationName,
        "brokerName": args.brokerName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBrokerAuthorizationArgs {
    /**
     * Name of MQ broker/authorization resource
     */
    authorizationName: string;
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
 * MQ broker/authorization resource
 */
export interface GetBrokerAuthorizationResult {
    /**
     * The list of authorization policies supported by the Authorization Resource.
     */
    readonly authorizationPolicies: types.outputs.AuthorizationConfigResponse;
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
 * Get a BrokerAuthorizationResource
 */
export function getBrokerAuthorizationOutput(args: GetBrokerAuthorizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBrokerAuthorizationResult> {
    return pulumi.output(args).apply((a: any) => getBrokerAuthorization(a, opts))
}

export interface GetBrokerAuthorizationOutputArgs {
    /**
     * Name of MQ broker/authorization resource
     */
    authorizationName: pulumi.Input<string>;
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
