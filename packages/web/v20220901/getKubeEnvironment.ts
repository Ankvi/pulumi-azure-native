import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Description for Get the properties of a Kubernetes Environment.
 */
export function getKubeEnvironment(args: GetKubeEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetKubeEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:getKubeEnvironment", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKubeEnvironmentArgs {
    /**
     * Name of the Kubernetes Environment.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * A Kubernetes cluster specialized for web workloads by Azure App Service
 */
export interface GetKubeEnvironmentResult {
    readonly aksResourceID?: string;
    /**
     * Cluster configuration which enables the log daemon to export
     * app logs to a destination. Currently only "log-analytics" is
     * supported
     */
    readonly appLogsConfiguration?: types.outputs.web.v20220901.AppLogsConfigurationResponse;
    /**
     * Cluster configuration which determines the ARC cluster
     * components types. Eg: Choosing between BuildService kind,
     * FrontEnd Service ArtifactsStorageType etc.
     */
    readonly arcConfiguration?: types.outputs.web.v20220901.ArcConfigurationResponse;
    /**
     * Cluster configuration for Container Apps Environments to configure Dapr Instrumentation Key and VNET Configuration
     */
    readonly containerAppsConfiguration?: types.outputs.web.v20220901.ContainerAppsConfigurationResponse;
    /**
     * Default Domain Name for the cluster
     */
    readonly defaultDomain: string;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    readonly deploymentErrors: string;
    /**
     * Type of Kubernetes Environment. Only supported for Container App Environments with value as Managed
     */
    readonly environmentType?: string;
    /**
     * Extended Location.
     */
    readonly extendedLocation?: types.outputs.web.v20220901.ExtendedLocationResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Only visible within Vnet/Subnet
     */
    readonly internalLoadBalancerEnabled?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Provisioning state of the Kubernetes Environment.
     */
    readonly provisioningState: string;
    /**
     * Static IP of the KubeEnvironment
     */
    readonly staticIp?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Get the properties of a Kubernetes Environment.
 */
export function getKubeEnvironmentOutput(args: GetKubeEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubeEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getKubeEnvironment(a, opts))
}

export interface GetKubeEnvironmentOutputArgs {
    /**
     * Name of the Kubernetes Environment.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
