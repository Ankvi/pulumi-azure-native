import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns current billing features for an Application Insights component.
 */
export function getComponentCurrentBillingFeature(args: GetComponentCurrentBillingFeatureArgs, opts?: pulumi.InvokeOptions): Promise<GetComponentCurrentBillingFeatureResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20150501:getComponentCurrentBillingFeature", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetComponentCurrentBillingFeatureArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: string;
}

/**
 * An Application Insights component billing features
 */
export interface GetComponentCurrentBillingFeatureResult {
    /**
     * Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
     */
    readonly currentBillingFeatures?: string[];
    /**
     * An Application Insights component daily data volume cap
     */
    readonly dataVolumeCap?: types.outputs.ApplicationInsightsComponentDataVolumeCapResponse;
}
/**
 * Returns current billing features for an Application Insights component.
 */
export function getComponentCurrentBillingFeatureOutput(args: GetComponentCurrentBillingFeatureOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComponentCurrentBillingFeatureResult> {
    return pulumi.output(args).apply((a: any) => getComponentCurrentBillingFeature(a, opts))
}

export interface GetComponentCurrentBillingFeatureOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}
