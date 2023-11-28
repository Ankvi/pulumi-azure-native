import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the variable identified by variable name.
 */
export function getVariable(args: GetVariableArgs, opts?: pulumi.InvokeOptions): Promise<GetVariableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20230515preview:getVariable", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "variableName": args.variableName,
    }, opts);
}

export interface GetVariableArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The name of variable.
     */
    variableName: string;
}

/**
 * Definition of the variable.
 */
export interface GetVariableResult {
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Gets or sets the encrypted flag of the variable.
     */
    readonly isEncrypted?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Gets or sets the value of the variable.
     */
    readonly value?: string;
}
/**
 * Retrieve the variable identified by variable name.
 */
export function getVariableOutput(args: GetVariableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVariableResult> {
    return pulumi.output(args).apply((a: any) => getVariable(a, opts))
}

export interface GetVariableOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of variable.
     */
    variableName: pulumi.Input<string>;
}
