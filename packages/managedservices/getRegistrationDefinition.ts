import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the registration definition details.
 *
 * Uses Azure REST API version 2022-10-01.
 */
export function getRegistrationDefinition(args: GetRegistrationDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistrationDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managedservices:getRegistrationDefinition", {
        "registrationDefinitionId": args.registrationDefinitionId,
        "scope": args.scope,
    }, opts);
}

export interface GetRegistrationDefinitionArgs {
    /**
     * The GUID of the registration definition.
     */
    registrationDefinitionId: string;
    /**
     * The scope of the resource.
     */
    scope: string;
}

/**
 * The registration definition.
 */
export interface GetRegistrationDefinitionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The fully qualified path of the registration definition.
     */
    readonly id: string;
    /**
     * The name of the registration definition.
     */
    readonly name: string;
    /**
     * The details for the Managed Services offer’s plan in Azure Marketplace.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * The properties of a registration definition.
     */
    readonly properties: types.outputs.RegistrationDefinitionPropertiesResponse;
    /**
     * The metadata for the registration assignment resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the Azure resource (Microsoft.ManagedServices/registrationDefinitions).
     */
    readonly type: string;
}
/**
 * Gets the registration definition details.
 *
 * Uses Azure REST API version 2022-10-01.
 */
export function getRegistrationDefinitionOutput(args: GetRegistrationDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRegistrationDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managedservices:getRegistrationDefinition", {
        "registrationDefinitionId": args.registrationDefinitionId,
        "scope": args.scope,
    }, opts);
}

export interface GetRegistrationDefinitionOutputArgs {
    /**
     * The GUID of the registration definition.
     */
    registrationDefinitionId: pulumi.Input<string>;
    /**
     * The scope of the resource.
     */
    scope: pulumi.Input<string>;
}