import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the description for the specified WCF relay.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native relay [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWCFRelay(args: GetWCFRelayArgs, opts?: pulumi.InvokeOptions): Promise<GetWCFRelayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay:getWCFRelay", {
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWCFRelayArgs {
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * The relay name.
     */
    relayName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Description of the WCF relay resource.
 */
export interface GetWCFRelayResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The time the WCF relay was created.
     */
    readonly createdAt: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Returns true if the relay is dynamic; otherwise, false.
     */
    readonly isDynamic: boolean;
    /**
     * The number of listeners for this relay. Note that min :1 and max:25 are supported.
     */
    readonly listenerCount: number;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * WCF relay type.
     */
    readonly relayType?: string;
    /**
     * Returns true if client authorization is needed for this relay; otherwise, false.
     */
    readonly requiresClientAuthorization?: boolean;
    /**
     * Returns true if transport security is needed for this relay; otherwise, false.
     */
    readonly requiresTransportSecurity?: boolean;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt: string;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    readonly userMetadata?: string;
}
/**
 * Returns the description for the specified WCF relay.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native relay [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWCFRelayOutput(args: GetWCFRelayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWCFRelayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:relay:getWCFRelay", {
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWCFRelayOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The relay name.
     */
    relayName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}