import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve a hybrid runbook worker group.
 */
export function getHybridRunbookWorkerGroup(args: GetHybridRunbookWorkerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridRunbookWorkerGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20230515preview:getHybridRunbookWorkerGroup", {
        "automationAccountName": args.automationAccountName,
        "hybridRunbookWorkerGroupName": args.hybridRunbookWorkerGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHybridRunbookWorkerGroupArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The hybrid runbook worker group name
     */
    hybridRunbookWorkerGroupName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of hybrid runbook worker group.
 */
export interface GetHybridRunbookWorkerGroupResult {
    /**
     * Sets the credential of a worker group.
     */
    readonly credential?: types.outputs.RunAsCredentialAssociationPropertyResponse;
    /**
     * Type of the HybridWorkerGroup.
     */
    readonly groupType?: string;
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
 * Retrieve a hybrid runbook worker group.
 */
export function getHybridRunbookWorkerGroupOutput(args: GetHybridRunbookWorkerGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHybridRunbookWorkerGroupResult> {
    return pulumi.output(args).apply((a: any) => getHybridRunbookWorkerGroup(a, opts))
}

export interface GetHybridRunbookWorkerGroupOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The hybrid runbook worker group name
     */
    hybridRunbookWorkerGroupName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
