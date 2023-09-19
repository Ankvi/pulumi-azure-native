import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the logging configuration of an app.
 */
export function getWebAppDiagnosticLogsConfiguration(args: GetWebAppDiagnosticLogsConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDiagnosticLogsConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:getWebAppDiagnosticLogsConfiguration", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppDiagnosticLogsConfigurationArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Configuration of App Service site logs.
 */
export interface GetWebAppDiagnosticLogsConfigurationResult {
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
 */
export function getWebAppDiagnosticLogsConfigurationOutput(args: GetWebAppDiagnosticLogsConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppDiagnosticLogsConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getWebAppDiagnosticLogsConfiguration(a, opts))
}

export interface GetWebAppDiagnosticLogsConfigurationOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
