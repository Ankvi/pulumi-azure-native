import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a single variable, given its name and the  management group it was created at.
 * Azure REST API version: 2022-08-01-preview.
 */
export function getVariableAtManagementGroup(args: GetVariableAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetVariableAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getVariableAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "variableName": args.variableName,
    }, opts);
}

export interface GetVariableAtManagementGroupArgs {
    /**
     * The ID of the management group.
     */
    managementGroupId: string;
    /**
     * The name of the variable to operate on.
     */
    variableName: string;
}

/**
 * The variable.
 */
export interface GetVariableAtManagementGroupResult {
    /**
     * Variable column definitions.
     */
    readonly columns: types.outputs.PolicyVariableColumnResponse[];
    /**
     * The ID of the variable.
     */
    readonly id: string;
    /**
     * The name of the variable.
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource (Microsoft.Authorization/variables).
     */
    readonly type: string;
}
/**
 * This operation retrieves a single variable, given its name and the  management group it was created at.
 * Azure REST API version: 2022-08-01-preview.
 */
export function getVariableAtManagementGroupOutput(args: GetVariableAtManagementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVariableAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getVariableAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "variableName": args.variableName,
    }, opts);
}

export interface GetVariableAtManagementGroupOutputArgs {
    /**
     * The ID of the management group.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The name of the variable to operate on.
     */
    variableName: pulumi.Input<string>;
}