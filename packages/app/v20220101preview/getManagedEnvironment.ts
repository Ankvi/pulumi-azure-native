import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of a Managed Environment used to host container apps.
 */
export function getManagedEnvironment(args: GetManagedEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20220101preview:getManagedEnvironment", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedEnvironmentArgs {
    /**
     * Name of the Environment.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An environment for hosting container apps
 */
export interface GetManagedEnvironmentResult {
    /**
     * Cluster configuration which enables the log daemon to export
     * app logs to a destination. Currently only "log-analytics" is
     * supported
     */
    readonly appLogsConfiguration?: types.outputs.AppLogsConfigurationResponse;
    /**
     * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
     */
    readonly daprAIInstrumentationKey?: string;
    /**
     * Default Domain Name for the cluster
     */
    readonly defaultDomain: string;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    readonly deploymentErrors: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the Environment.
     */
    readonly provisioningState: string;
    /**
     * Static IP of the Environment
     */
    readonly staticIp: string;
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
    /**
     * Vnet configuration for the environment
     */
    readonly vnetConfiguration?: types.outputs.VnetConfigurationResponse;
}
/**
 * Get the properties of a Managed Environment used to host container apps.
 */
export function getManagedEnvironmentOutput(args: GetManagedEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getManagedEnvironment(a, opts))
}

export interface GetManagedEnvironmentOutputArgs {
    /**
     * Name of the Environment.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
