import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ObservabilityServiceResource
 * Azure REST API version: 2023-10-15-preview.
 */
export function getObservabilityService(args: GetObservabilityServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetObservabilityServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilepacketcore:getObservabilityService", {
        "observabilityServiceName": args.observabilityServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetObservabilityServiceArgs {
    /**
     * The name of the Observability Service
     */
    observabilityServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Azure for Operators 5G Core Observability Service Resource
 */
export interface GetObservabilityServiceResult {
    /**
     * Reference to cluster where the observability components are deployed
     */
    readonly clusterService: string;
    /**
     * Azure for Operators 5G Core Observability component parameters.  One set per component type
     */
    readonly componentParameters: types.outputs.QualifiedComponentDeploymentParametersResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Operational status
     */
    readonly operationalStatus: types.outputs.OperationalStatusResponse;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Release version. This is inherited from the cluster
     */
    readonly releaseVersion: string;
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
 * Get a ObservabilityServiceResource
 * Azure REST API version: 2023-10-15-preview.
 */
export function getObservabilityServiceOutput(args: GetObservabilityServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetObservabilityServiceResult> {
    return pulumi.output(args).apply((a: any) => getObservabilityService(a, opts))
}

export interface GetObservabilityServiceOutputArgs {
    /**
     * The name of the Observability Service
     */
    observabilityServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}