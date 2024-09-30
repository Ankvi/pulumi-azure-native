import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a NrfDeploymentResource
 * Azure REST API version: 2023-10-15-preview.
 */
export function getNrfDeployment(args: GetNrfDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetNrfDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilepacketcore:getNrfDeployment", {
        "nrfDeploymentName": args.nrfDeploymentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNrfDeploymentArgs {
    /**
     * The name of the NrfDeployment
     */
    nrfDeploymentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Azure for Operators 5G Core Network Repository Function (NRF) Deployment Resource
 */
export interface GetNrfDeploymentResult {
    /**
     * Reference to cluster where the Network Function is deployed
     */
    readonly clusterService: string;
    /**
     * Azure for Operators 5G Core NRF component parameters
     */
    readonly componentParameters?: string;
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
     * Azure for Operators 5G Core NRF secrets parameters
     */
    readonly secretsParameters?: string;
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
 * Get a NrfDeploymentResource
 * Azure REST API version: 2023-10-15-preview.
 */
export function getNrfDeploymentOutput(args: GetNrfDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNrfDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilepacketcore:getNrfDeployment", {
        "nrfDeploymentName": args.nrfDeploymentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNrfDeploymentOutputArgs {
    /**
     * The name of the NrfDeployment
     */
    nrfDeploymentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}