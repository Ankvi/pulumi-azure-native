import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of an Azure Stack registration.
 */
export function getRegistration(args: GetRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack/v20200601preview:getRegistration", {
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetRegistrationArgs {
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: string;
    /**
     * Name of the resource group.
     */
    resourceGroup: string;
}

/**
 * Registration information.
 */
export interface GetRegistrationResult {
    /**
     * Specifies the billing mode for the Azure Stack registration.
     */
    readonly billingModel?: string;
    /**
     * The identifier of the registered Azure Stack.
     */
    readonly cloudId?: string;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag?: string;
    /**
     * ID of the resource.
     */
    readonly id: string;
    /**
     * The kind of the resource.
     */
    readonly kind: string;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The object identifier associated with the Azure Stack connecting to Azure.
     */
    readonly objectId?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Custom tags for the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of Resource.
     */
    readonly type: string;
}
/**
 * Returns the properties of an Azure Stack registration.
 */
export function getRegistrationOutput(args: GetRegistrationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistrationResult> {
    return pulumi.output(args).apply((a: any) => getRegistration(a, opts))
}

export interface GetRegistrationOutputArgs {
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}