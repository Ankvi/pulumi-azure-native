import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * API Schema Contract details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApiSchema extends pulumi.CustomResource {
    /**
     * Get an existing ApiSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiSchema {
        return new ApiSchema(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ApiSchema';

    /**
     * Returns true if the given object is an instance of ApiSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiSchema {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiSchema.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Types definitions. Used for Swagger/OpenAPI v2/v3 schemas only, null otherwise.
     */
    public readonly components!: pulumi.Output<any | undefined>;
    /**
     * Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
     */
    public readonly contentType!: pulumi.Output<string>;
    /**
     * Types definitions. Used for Swagger/OpenAPI v1 schemas only, null otherwise.
     */
    public readonly definitions!: pulumi.Output<any | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a ApiSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiSchemaArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.contentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["components"] = args ? args.components : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["definitions"] = args ? args.definitions : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaId"] = args ? args.schemaId : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["components"] = undefined /*out*/;
            resourceInputs["contentType"] = undefined /*out*/;
            resourceInputs["definitions"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:ApiSchema" }, { type: "azure-native:apimanagement/v20180101:ApiSchema" }, { type: "azure-native:apimanagement/v20180601preview:ApiSchema" }, { type: "azure-native:apimanagement/v20190101:ApiSchema" }, { type: "azure-native:apimanagement/v20191201:ApiSchema" }, { type: "azure-native:apimanagement/v20191201preview:ApiSchema" }, { type: "azure-native:apimanagement/v20200601preview:ApiSchema" }, { type: "azure-native:apimanagement/v20201201:ApiSchema" }, { type: "azure-native:apimanagement/v20210101preview:ApiSchema" }, { type: "azure-native:apimanagement/v20210401preview:ApiSchema" }, { type: "azure-native:apimanagement/v20210801:ApiSchema" }, { type: "azure-native:apimanagement/v20211201preview:ApiSchema" }, { type: "azure-native:apimanagement/v20220401preview:ApiSchema" }, { type: "azure-native:apimanagement/v20220801:ApiSchema" }, { type: "azure-native:apimanagement/v20220901preview:ApiSchema" }, { type: "azure-native:apimanagement/v20230301preview:ApiSchema" }, { type: "azure-native:apimanagement/v20230501preview:ApiSchema" }, { type: "azure-native:apimanagement/v20230901preview:ApiSchema" }, { type: "azure-native:apimanagement/v20240501:ApiSchema" }, { type: "azure-native:apimanagement/v20240601preview:ApiSchema" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiSchema.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiSchema resource.
 */
export interface ApiSchemaArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Types definitions. Used for Swagger/OpenAPI v2/v3 schemas only, null otherwise.
     */
    components?: any;
    /**
     * Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
     */
    contentType: pulumi.Input<string>;
    /**
     * Types definitions. Used for Swagger/OpenAPI v1 schemas only, null otherwise.
     */
    definitions?: any;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema id identifier. Must be unique in the current API Management service instance.
     */
    schemaId?: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
     */
    value?: pulumi.Input<string>;
}