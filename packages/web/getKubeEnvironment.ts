import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Get the properties of a Kubernetes Environment.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getKubeEnvironment(args: GetKubeEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetKubeEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getKubeEnvironment", {
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
    readonly appLogsConfiguration?: types.outputs.AppLogsConfigurationResponse;
    /**
     * Cluster configuration which determines the ARC cluster
     * components types. Eg: Choosing between BuildService kind,
     * FrontEnd Service ArtifactsStorageType etc.
     */
    readonly arcConfiguration?: types.outputs.ArcConfigurationResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Cluster configuration for Container Apps Environments to configure Dapr Instrumentation Key and VNET Configuration
     */
    readonly containerAppsConfiguration?: types.outputs.ContainerAppsConfigurationResponse;
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
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Only visible within Vnet/Subnet
     */
    readonly internalLoadBalancerEnabled?: boolean;
    /**
     * Kind of resource. If the resource is an app, you can refer to https://github.com/Azure/app-service-linux-docs/blob/master/Things_You_Should_Know/kind_property.md#app-service-resource-kind-reference for details supported values for kind.
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
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getKubeEnvironmentOutput(args: GetKubeEnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKubeEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getKubeEnvironment", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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