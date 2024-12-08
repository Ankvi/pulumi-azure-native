import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the logging configuration of an app.
 * Azure REST API version: 2023-12-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2024-04-01.
 */
export function getWebAppDiagnosticLogsConfigurationSlot(args: GetWebAppDiagnosticLogsConfigurationSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDiagnosticLogsConfigurationSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppDiagnosticLogsConfigurationSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppDiagnosticLogsConfigurationSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the logging configuration for the production slot.
     */
    slot: string;
}

/**
 * Configuration of App Service site logs.
 */
export interface GetWebAppDiagnosticLogsConfigurationSlotResult {
    /**
     * Application logs configuration.
     */
    readonly applicationLogs?: types.outputs.ApplicationLogsConfigResponse;
    /**
     * Detailed error messages configuration.
     */
    readonly detailedErrorMessages?: types.outputs.EnabledConfigResponse;
    /**
     * Failed requests tracing configuration.
     */
    readonly failedRequestsTracing?: types.outputs.EnabledConfigResponse;
    /**
     * HTTP logs configuration.
     */
    readonly httpLogs?: types.outputs.HttpLogsConfigResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the logging configuration of an app.
 * Azure REST API version: 2023-12-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2024-04-01.
 */
export function getWebAppDiagnosticLogsConfigurationSlotOutput(args: GetWebAppDiagnosticLogsConfigurationSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppDiagnosticLogsConfigurationSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppDiagnosticLogsConfigurationSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppDiagnosticLogsConfigurationSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the logging configuration for the production slot.
     */
    slot: pulumi.Input<string>;
}