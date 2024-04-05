import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns details of the API.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-03-15-preview.
 */
export function getApi(args: GetApiArgs, opts?: pulumi.InvokeOptions): Promise<GetApiResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apicenter:getApi", {
        "apiName": args.apiName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetApiArgs {
    /**
     * The name of the API.
     */
    apiName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of Azure API Center service.
     */
    serviceName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * API entity.
 */
export interface GetApiResult {
    /**
     * The set of contacts
     */
    readonly contacts?: types.outputs.ContactResponse[];
    /**
     * The custom metadata defined for API catalog entities.
     */
    readonly customProperties?: any;
    /**
     * Description of the API.
     */
    readonly description?: string;
    /**
     * The set of external documentation
     */
    readonly externalDocumentation?: types.outputs.ExternalDocumentationResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Kind of API. For example, REST or GraphQL.
     */
    readonly kind: string;
    /**
     * The license information for the API.
     */
    readonly license?: types.outputs.LicenseResponse;
    /**
     * Current lifecycle stage of the API.
     */
    readonly lifecycleStage: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Short description of the API.
     */
    readonly summary?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Terms of service for the API.
     */
    readonly termsOfService?: types.outputs.TermsOfServiceResponse;
    /**
     * API title.
     */
    readonly title: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns details of the API.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-03-15-preview.
 */
export function getApiOutput(args: GetApiOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiResult> {
    return pulumi.output(args).apply((a: any) => getApi(a, opts))
}

export interface GetApiOutputArgs {
    /**
     * The name of the API.
     */
    apiName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}