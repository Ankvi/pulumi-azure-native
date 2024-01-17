import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the schema configuration at the API level.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2019-01-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getApiSchema(args: GetApiSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetApiSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiSchema", {
        "apiId": args.apiId,
        "resourceGroupName": args.resourceGroupName,
        "schemaId": args.schemaId,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiSchemaArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Schema id identifier. Must be unique in the current API Management service instance.
     */
    schemaId: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * API Schema Contract details.
 */
export interface GetApiSchemaResult {
    /**
     * Types definitions. Used for Swagger/OpenAPI v2/v3 schemas only, null otherwise.
     */
    readonly components?: any;
    /**
     * Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
     */
    readonly contentType: string;
    /**
     * Types definitions. Used for Swagger/OpenAPI v1 schemas only, null otherwise.
     */
    readonly definitions?: any;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
     */
    readonly value?: string;
}
/**
 * Get the schema configuration at the API level.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2019-01-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getApiSchemaOutput(args: GetApiSchemaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiSchemaResult> {
    return pulumi.output(args).apply((a: any) => getApiSchema(a, opts))
}

export interface GetApiSchemaOutputArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema id identifier. Must be unique in the current API Management service instance.
     */
    schemaId: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
