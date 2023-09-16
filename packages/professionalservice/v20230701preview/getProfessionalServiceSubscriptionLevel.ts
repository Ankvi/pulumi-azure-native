import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets information about the specified Subscription Level ProfessionalService.
 */
export function getProfessionalServiceSubscriptionLevel(args: GetProfessionalServiceSubscriptionLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetProfessionalServiceSubscriptionLevelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:professionalservice/v20230701preview:getProfessionalServiceSubscriptionLevel", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetProfessionalServiceSubscriptionLevelArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
    /**
     * The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
     */
    subscriptionId?: string;
}

/**
 * ProfessionalService REST API resource definition.
 */
export interface GetProfessionalServiceSubscriptionLevelResult {
    /**
     * The resource uri
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * professionalService properties
     */
    readonly properties: types.outputs.professionalservice.v20230701preview.ProfessionalServiceResourceResponseProperties;
    /**
     * the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets information about the specified Subscription Level ProfessionalService.
 */
export function getProfessionalServiceSubscriptionLevelOutput(args: GetProfessionalServiceSubscriptionLevelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProfessionalServiceSubscriptionLevelResult> {
    return pulumi.output(args).apply((a: any) => getProfessionalServiceSubscriptionLevel(a, opts))
}

export interface GetProfessionalServiceSubscriptionLevelOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
     */
    subscriptionId?: pulumi.Input<string>;
}
