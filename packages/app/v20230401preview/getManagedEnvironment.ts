import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the properties of a Managed Environment used to host container apps.
 */
export function getManagedEnvironment(args: GetManagedEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230401preview:getManagedEnvironment", {
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedEnvironmentArgs {
    /**
     * Name of the Environment.
     */
    environmentName: string;
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
    readonly appLogsConfiguration?: types.outputs.app.v20230401preview.AppLogsConfigurationResponse;
    /**
     * Custom domain configuration for the environment
     */
    readonly customDomainConfiguration?: types.outputs.app.v20230401preview.CustomDomainConfigurationResponse;
    /**
     * Application Insights connection string used by Dapr to export Service to Service communication telemetry
     */
    readonly daprAIConnectionString?: string;
    /**
     * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
     */
    readonly daprAIInstrumentationKey?: string;
    /**
     * The configuration of Dapr component.
     */
    readonly daprConfiguration?: types.outputs.app.v20230401preview.DaprConfigurationResponse;
    /**
     * Default Domain Name for the cluster
     */
    readonly defaultDomain: string;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    readonly deploymentErrors: string;
    /**
     * The endpoint of the eventstream of the Environment.
     */
    readonly eventStreamEndpoint: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. If a subnet ID is provided, this resource group will be created in the same subscription as the subnet.
     */
    readonly infrastructureResourceGroup?: string;
    /**
     * The configuration of Keda component.
     */
    readonly kedaConfiguration?: types.outputs.app.v20230401preview.KedaConfigurationResponse;
    /**
     * Kind of the Environment.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Peer authentication settings for the Managed Environment
     */
    readonly peerAuthentication?: types.outputs.app.v20230401preview.ManagedEnvironmentResponsePeerAuthentication;
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
    readonly systemData: types.outputs.app.v20230401preview.SystemDataResponse;
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
    readonly vnetConfiguration?: types.outputs.app.v20230401preview.VnetConfigurationResponse;
    /**
     * Workload profiles configured for the Managed Environment.
     */
    readonly workloadProfiles?: types.outputs.app.v20230401preview.WorkloadProfileResponse[];
    /**
     * Whether or not this Managed Environment is zone-redundant.
     */
    readonly zoneRedundant?: boolean;
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
    environmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
