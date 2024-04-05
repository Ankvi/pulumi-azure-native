import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AmfDeploymentResource
 */
export function getAmfDeployment(args: GetAmfDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetAmfDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilepacketcore/v20231015preview:getAmfDeployment", {
        "amfDeploymentName": args.amfDeploymentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAmfDeploymentArgs {
    /**
     * The name of the AMF Deployment
     */
    amfDeploymentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Azure for Operators 5G Core Access and Mobility Function (AMF) Deployment Resource
 */
export interface GetAmfDeploymentResult {
    /**
     * Reference to cluster where the Network Function is deployed
     */
    readonly clusterService: string;
    /**
     * Azure for Operators 5G Core AMF component parameters
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
     * Azure for Operators 5G Core AMF secrets parameters
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
 * Get a AmfDeploymentResource
 */
export function getAmfDeploymentOutput(args: GetAmfDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAmfDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getAmfDeployment(a, opts))
}

export interface GetAmfDeploymentOutputArgs {
    /**
     * The name of the AMF Deployment
     */
    amfDeploymentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}