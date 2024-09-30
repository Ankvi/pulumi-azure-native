import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource representation of a IacProfile.
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2024-08-01-preview.
 */
export function getIacProfile(args: GetIacProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetIacProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devhub:getIacProfile", {
        "iacProfileName": args.iacProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIacProfileArgs {
    /**
     * The name of the IacProfile.
     */
    iacProfileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Resource representation of a IacProfile.
 */
export interface GetIacProfileResult {
    /**
     * Determines the authorization status of requests.
     */
    readonly authStatus: string;
    /**
     * Repository Branch Name
     */
    readonly branchName?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
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
     * The status of the Pull Request submitted against the users repository.
     */
    readonly prStatus: string;
    /**
     * The number associated with the submitted pull request.
     */
    readonly pullNumber: number;
    /**
     * Repository Main Branch
     */
    readonly repositoryMainBranch?: string;
    /**
     * Repository Name
     */
    readonly repositoryName?: string;
    /**
     * Repository Owner
     */
    readonly repositoryOwner?: string;
    readonly stages?: types.outputs.StagePropertiesResponse[];
    /**
     * Terraform Storage Account Name
     */
    readonly storageAccountName?: string;
    /**
     * Terraform Storage Account Resource Group
     */
    readonly storageAccountResourceGroup?: string;
    /**
     * Terraform Storage Account Subscription
     */
    readonly storageAccountSubscription?: string;
    /**
     * Terraform Container Name
     */
    readonly storageContainerName?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    readonly templates?: types.outputs.IacTemplatePropertiesResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Resource representation of a IacProfile.
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2024-08-01-preview.
 */
export function getIacProfileOutput(args: GetIacProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIacProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devhub:getIacProfile", {
        "iacProfileName": args.iacProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIacProfileOutputArgs {
    /**
     * The name of the IacProfile.
     */
    iacProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}