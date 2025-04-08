import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationGatewayBackendHealthOnDemand(args: GetApplicationGatewayBackendHealthOnDemandArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayBackendHealthOnDemandResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getApplicationGatewayBackendHealthOnDemand", {
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
    backendAddressPool?: types.inputs.SubResource;
    /**
     * Reference to backend http setting of application gateway to be used for test probe.
     */
    backendHttpSettings?: types.inputs.SubResource;
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
    match?: types.inputs.ApplicationGatewayProbeHealthResponseMatch;
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
    protocol?: string | types.enums.ApplicationGatewayProtocol;
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
    readonly backendAddressPool?: types.outputs.ApplicationGatewayBackendAddressPoolResponse;
    /**
     * Application gateway BackendHealthHttp settings.
     */
    readonly backendHealthHttpSettings?: types.outputs.ApplicationGatewayBackendHealthHttpSettingsResponse;
}
/**
 * Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationGatewayBackendHealthOnDemandOutput(args: GetApplicationGatewayBackendHealthOnDemandOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApplicationGatewayBackendHealthOnDemandResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getApplicationGatewayBackendHealthOnDemand", {
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

export interface GetApplicationGatewayBackendHealthOnDemandOutputArgs {
    /**
     * The name of the application gateway.
     */
    applicationGatewayName: pulumi.Input<string>;
    /**
     * Reference to backend pool of application gateway to which probe request will be sent.
     */
    backendAddressPool?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * Reference to backend http setting of application gateway to be used for test probe.
     */
    backendHttpSettings?: pulumi.Input<types.inputs.SubResourceArgs>;
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
    match?: pulumi.Input<types.inputs.ApplicationGatewayProbeHealthResponseMatchArgs>;
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
    protocol?: pulumi.Input<string | types.enums.ApplicationGatewayProtocol>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout?: pulumi.Input<number>;
}