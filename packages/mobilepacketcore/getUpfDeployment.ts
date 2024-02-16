import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a UpfDeploymentResource
 * Azure REST API version: 2023-10-15-preview.
 */
export function getUpfDeployment(args: GetUpfDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetUpfDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilepacketcore:getUpfDeployment", {
        "resourceGroupName": args.resourceGroupName,
        "upfDeploymentName": args.upfDeploymentName,
    }, opts);
}

export interface GetUpfDeploymentArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the UpfDeployment
     */
    upfDeploymentName: string;
}

/**
 * Azure for Operators 5G Core User Plane Function (UPF) Deployment Resource
 */
export interface GetUpfDeploymentResult {
    /**
     * Reference to cluster where the Network Function is deployed
     */
    readonly clusterService: string;
    /**
     * Azure for Operators 5G Core UPF component parameters
     */
    readonly componentParameters: string;
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
     * Azure for Operators 5G Core F secrets parameters
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
 * Get a UpfDeploymentResource
 * Azure REST API version: 2023-10-15-preview.
 */
export function getUpfDeploymentOutput(args: GetUpfDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUpfDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getUpfDeployment(a, opts))
}

export interface GetUpfDeploymentOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the UpfDeployment
     */
    upfDeploymentName: pulumi.Input<string>;
}