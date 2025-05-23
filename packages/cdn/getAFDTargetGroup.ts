import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing target group within a profile.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getAFDTargetGroup(args: GetAFDTargetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetAFDTargetGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getAFDTargetGroup", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "targetGroupName": args.targetGroupName,
    }, opts);
}

export interface GetAFDTargetGroupArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the Target Group under the profile.
     */
    targetGroupName: string;
}

/**
 * AFDTargetGroup comprises a list of Endpoints that is used for tunnelling protocols to allow certain traffic.
 */
export interface GetAFDTargetGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    readonly deploymentStatus: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * TargetEndpoint list referenced by this target group.
     */
    readonly targetEndpoints: types.outputs.TargetEndpointResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing target group within a profile.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getAFDTargetGroupOutput(args: GetAFDTargetGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAFDTargetGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getAFDTargetGroup", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "targetGroupName": args.targetGroupName,
    }, opts);
}

export interface GetAFDTargetGroupOutputArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Target Group under the profile.
     */
    targetGroupName: pulumi.Input<string>;
}