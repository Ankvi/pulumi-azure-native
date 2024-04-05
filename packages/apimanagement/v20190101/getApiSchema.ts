import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the schema configuration at the API level.
 */
export function getApiSchema(args: GetApiSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetApiSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20190101:getApiSchema", {
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
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Schema identifier within an API. Must be unique in the current API Management service instance.
     */
    schemaId: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Schema Contract details.
 */
export interface GetApiSchemaResult {
    /**
     * Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`. 
     */
    readonly contentType: string;
    /**
     * Properties of the Schema Document.
     */
    readonly document?: any;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
/**
 * Get the schema configuration at the API level.
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
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema identifier within an API. Must be unique in the current API Management service instance.
     */
    schemaId: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}