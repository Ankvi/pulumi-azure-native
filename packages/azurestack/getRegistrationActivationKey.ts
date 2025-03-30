import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns Azure Stack Activation Key.
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview.
 */
export function getRegistrationActivationKey(args: GetRegistrationActivationKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistrationActivationKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack:getRegistrationActivationKey", {
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetRegistrationActivationKeyArgs {
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
 * The resource containing the Azure Stack activation key.
 */
export interface GetRegistrationActivationKeyResult {
    /**
     * Azure Stack activation key.
     */
    readonly activationKey?: string;
}
/**
 * Returns Azure Stack Activation Key.
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview.
 */
export function getRegistrationActivationKeyOutput(args: GetRegistrationActivationKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRegistrationActivationKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestack:getRegistrationActivationKey", {
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetRegistrationActivationKeyOutputArgs {
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}