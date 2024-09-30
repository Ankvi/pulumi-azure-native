import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SmfDeploymentResource
 * Azure REST API version: 2023-10-15-preview.
 */
export function getSmfDeployment(args: GetSmfDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetSmfDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilepacketcore:getSmfDeployment", {
        "resourceGroupName": args.resourceGroupName,
        "smfDeploymentName": args.smfDeploymentName,
    }, opts);
}

export interface GetSmfDeploymentArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SmfDeployment
     */
    smfDeploymentName: string;
}

/**
 * Azure for Operators 5G Core Session Management Function (SMF) Deployment Resource
 */
export interface GetSmfDeploymentResult {
    /**
     * Reference to cluster where the Network Function is deployed
     */
    readonly clusterService: string;
    /**
     * Azure for Operators 5G Core SMF component parameters
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
     * Azure for Operators 5G Core SMF secrets parameters
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
 * Get a SmfDeploymentResource
 * Azure REST API version: 2023-10-15-preview.
 */
export function getSmfDeploymentOutput(args: GetSmfDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSmfDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilepacketcore:getSmfDeployment", {
        "resourceGroupName": args.resourceGroupName,
        "smfDeploymentName": args.smfDeploymentName,
    }, opts);
}

export interface GetSmfDeploymentOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SmfDeployment
     */
    smfDeploymentName: pulumi.Input<string>;
}