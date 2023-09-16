import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a feature registration
 * Azure REST API version: 2021-07-01.
 */
export function getSubscriptionFeatureRegistration(args: GetSubscriptionFeatureRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetSubscriptionFeatureRegistrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:features:getSubscriptionFeatureRegistration", {
        "featureName": args.featureName,
        "providerNamespace": args.providerNamespace,
    }, opts);
}

export interface GetSubscriptionFeatureRegistrationArgs {
    /**
     * The feature name.
     */
    featureName: string;
    /**
     * The provider namespace.
     */
    providerNamespace: string;
}

/**
 * Subscription feature registration details
 */
export interface GetSubscriptionFeatureRegistrationResult {
    /**
     * Azure resource Id.
     */
    readonly id: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    readonly properties: types.outputs.features.SubscriptionFeatureRegistrationResponseProperties;
    /**
     * Azure resource type.
     */
    readonly type: string;
}
/**
 * Returns a feature registration
 * Azure REST API version: 2021-07-01.
 */
export function getSubscriptionFeatureRegistrationOutput(args: GetSubscriptionFeatureRegistrationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubscriptionFeatureRegistrationResult> {
    return pulumi.output(args).apply((a: any) => getSubscriptionFeatureRegistration(a, opts))
}

export interface GetSubscriptionFeatureRegistrationOutputArgs {
    /**
     * The feature name.
     */
    featureName: pulumi.Input<string>;
    /**
     * The provider namespace.
     */
    providerNamespace: pulumi.Input<string>;
}
