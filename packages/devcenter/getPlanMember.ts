import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a devcenter plan member.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPlanMember(args: GetPlanMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetPlanMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getPlanMember", {
        "memberName": args.memberName,
        "planName": args.planName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPlanMemberArgs {
    /**
     * The name of a devcenter plan member.
     */
    memberName: string;
    /**
     * The name of the devcenter plan.
     */
    planName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a devcenter plan member resource.
 */
export interface GetPlanMemberResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The unique id of the member.
     */
    readonly memberId?: string;
    /**
     * The type of the member (user, group)
     */
    readonly memberType?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The sync status of the member.
     */
    readonly syncStatus: types.outputs.PlanMemberSyncStatusResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The tier of the member.
     */
    readonly tier?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a devcenter plan member.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPlanMemberOutput(args: GetPlanMemberOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPlanMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getPlanMember", {
        "memberName": args.memberName,
        "planName": args.planName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPlanMemberOutputArgs {
    /**
     * The name of a devcenter plan member.
     */
    memberName: pulumi.Input<string>;
    /**
     * The name of the devcenter plan.
     */
    planName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}