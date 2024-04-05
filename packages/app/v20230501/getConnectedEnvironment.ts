import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of an connectedEnvironment.
 */
export function getConnectedEnvironment(args: GetConnectedEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectedEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230501:getConnectedEnvironment", {
        "connectedEnvironmentName": args.connectedEnvironmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedEnvironmentArgs {
    /**
     * Name of the connectedEnvironment.
     */
    connectedEnvironmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An environment for Kubernetes cluster specialized for web workloads by Azure App Service
 */
export interface GetConnectedEnvironmentResult {
    /**
     * Custom domain configuration for the environment
     */
    readonly customDomainConfiguration?: types.outputs.CustomDomainConfigurationResponse;
    /**
     * Application Insights connection string used by Dapr to export Service to Service communication telemetry
     */
    readonly daprAIConnectionString?: string;
    /**
     * Default Domain Name for the cluster
     */
    readonly defaultDomain: string;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    readonly deploymentErrors: string;
    /**
     * The complex type of the extended location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
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
     * Provisioning state of the Kubernetes Environment.
     */
    readonly provisioningState: string;
    /**
     * Static IP of the connectedEnvironment
     */
    readonly staticIp?: string;
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
 * Get the properties of an connectedEnvironment.
 */
export function getConnectedEnvironmentOutput(args: GetConnectedEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectedEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getConnectedEnvironment(a, opts))
}

export interface GetConnectedEnvironmentOutputArgs {
    /**
     * Name of the connectedEnvironment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}