import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve a hybrid runbook worker group.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2021-06-22.
 */
export function getHybridRunbookWorkerGroup(args: GetHybridRunbookWorkerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridRunbookWorkerGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getHybridRunbookWorkerGroup", {
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
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource system metadata.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieve a hybrid runbook worker group.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2021-06-22.
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
