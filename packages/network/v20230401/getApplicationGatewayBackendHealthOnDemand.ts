import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.
 */
export function getApplicationGatewayBackendHealthOnDemand(args: GetApplicationGatewayBackendHealthOnDemandArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayBackendHealthOnDemandResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getApplicationGatewayBackendHealthOnDemand", {
        "applicationGatewayName": args.applicationGatewayName,
        "backendAddressPool": args.backendAddressPool,
        "backendHttpSettings": args.backendHttpSettings,
        "expand": args.expand,
        "host": args.host,
        "match": args.match,
        "path": args.path,
        "pickHostNameFromBackendHttpSettings": args.pickHostNameFromBackendHttpSettings,
        "protocol": args.protocol,
        "resourceGroupName": args.resourceGroupName,
        "timeout": args.timeout,
    }, opts);
}

export interface GetApplicationGatewayBackendHealthOnDemandArgs {
    /**
     * The name of the application gateway.
     */
    applicationGatewayName: string;
    /**
     * Reference to backend pool of application gateway to which probe request will be sent.
     */
    backendAddressPool?: types.inputs.network.v20230401.SubResource;
    /**
     * Reference to backend http setting of application gateway to be used for test probe.
     */
    backendHttpSettings?: types.inputs.network.v20230401.SubResource;
    /**
     * Expands BackendAddressPool and BackendHttpSettings referenced in backend health.
     */
    expand?: string;
    /**
     * Host name to send the probe to.
     */
    host?: string;
    /**
     * Criterion for classifying a healthy probe response.
     */
    match?: types.inputs.network.v20230401.ApplicationGatewayProbeHealthResponseMatch;
    /**
     * Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
     */
    path?: string;
    /**
     * Whether the host header should be picked from the backend http settings. Default value is false.
     */
    pickHostNameFromBackendHttpSettings?: boolean;
    /**
     * The protocol used for the probe.
     */
    protocol?: string | types.enums.v20230401.ApplicationGatewayProtocol;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout?: number;
}

/**
 * Result of on demand test probe.
 */
export interface GetApplicationGatewayBackendHealthOnDemandResult {
    /**
     * Reference to an ApplicationGatewayBackendAddressPool resource.
     */
    readonly backendAddressPool?: types.outputs.network.v20230401.ApplicationGatewayBackendAddressPoolResponse;
    /**
     * Application gateway BackendHealthHttp settings.
     */
    readonly backendHealthHttpSettings?: types.outputs.network.v20230401.ApplicationGatewayBackendHealthHttpSettingsResponse;
}
/**
 * Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.
 */
export function getApplicationGatewayBackendHealthOnDemandOutput(args: GetApplicationGatewayBackendHealthOnDemandOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationGatewayBackendHealthOnDemandResult> {
    return pulumi.output(args).apply((a: any) => getApplicationGatewayBackendHealthOnDemand(a, opts))
}

export interface GetApplicationGatewayBackendHealthOnDemandOutputArgs {
    /**
     * The name of the application gateway.
     */
    applicationGatewayName: pulumi.Input<string>;
    /**
     * Reference to backend pool of application gateway to which probe request will be sent.
     */
    backendAddressPool?: pulumi.Input<types.inputs.network.v20230401.SubResourceArgs>;
    /**
     * Reference to backend http setting of application gateway to be used for test probe.
     */
    backendHttpSettings?: pulumi.Input<types.inputs.network.v20230401.SubResourceArgs>;
    /**
     * Expands BackendAddressPool and BackendHttpSettings referenced in backend health.
     */
    expand?: pulumi.Input<string>;
    /**
     * Host name to send the probe to.
     */
    host?: pulumi.Input<string>;
    /**
     * Criterion for classifying a healthy probe response.
     */
    match?: pulumi.Input<types.inputs.network.v20230401.ApplicationGatewayProbeHealthResponseMatchArgs>;
    /**
     * Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
     */
    path?: pulumi.Input<string>;
    /**
     * Whether the host header should be picked from the backend http settings. Default value is false.
     */
    pickHostNameFromBackendHttpSettings?: pulumi.Input<boolean>;
    /**
     * The protocol used for the probe.
     */
    protocol?: pulumi.Input<string | types.enums.v20230401.ApplicationGatewayProtocol>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout?: pulumi.Input<number>;
}
