import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * API entity.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-03-15-preview, 2024-06-01-preview.
 */
export class Api extends pulumi.CustomResource {
    /**
     * Get an existing Api resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Api {
        return new Api(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apicenter:Api';

    /**
     * Returns true if the given object is an instance of Api.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Api {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Api.__pulumiType;
    }

    /**
     * The set of contacts
     */
    public readonly contacts!: pulumi.Output<types.outputs.ContactResponse[] | undefined>;
    /**
     * The custom metadata defined for API catalog entities.
     */
    public readonly customProperties!: pulumi.Output<any | undefined>;
    /**
     * Description of the API.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The set of external documentation
     */
    public readonly externalDocumentation!: pulumi.Output<types.outputs.ExternalDocumentationResponse[] | undefined>;
    /**
     * Kind of API. For example, REST or GraphQL.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * The license information for the API.
     */
    public readonly license!: pulumi.Output<types.outputs.LicenseResponse | undefined>;
    /**
     * Current lifecycle stage of the API.
     */
    public /*out*/ readonly lifecycleStage!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Short description of the API.
     */
    public readonly summary!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Terms of service for the API.
     */
    public readonly termsOfService!: pulumi.Output<types.outputs.TermsOfServiceResponse | undefined>;
    /**
     * API title.
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Api resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["apiName"] = args ? args.apiName : undefined;
            resourceInputs["contacts"] = args ? args.contacts : undefined;
            resourceInputs["customProperties"] = args ? args.customProperties : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["externalDocumentation"] = args ? args.externalDocumentation : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["license"] = args ? args.license : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["summary"] = args ? args.summary : undefined;
            resourceInputs["termsOfService"] = args ? args.termsOfService : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["lifecycleStage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["contacts"] = undefined /*out*/;
            resourceInputs["customProperties"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["externalDocumentation"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["license"] = undefined /*out*/;
            resourceInputs["lifecycleStage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["summary"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["termsOfService"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apicenter/v20240301:Api" }, { type: "azure-native:apicenter/v20240315preview:Api" }, { type: "azure-native:apicenter/v20240601preview:Api" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Api.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Api resource.
 */
export interface ApiArgs {
    /**
     * The name of the API.
     */
    apiName?: pulumi.Input<string>;
    /**
     * The set of contacts
     */
    contacts?: pulumi.Input<pulumi.Input<types.inputs.ContactArgs>[]>;
    /**
     * The custom metadata defined for API catalog entities.
     */
    customProperties?: any;
    /**
     * Description of the API.
     */
    description?: pulumi.Input<string>;
    /**
     * The set of external documentation
     */
    externalDocumentation?: pulumi.Input<pulumi.Input<types.inputs.ExternalDocumentationArgs>[]>;
    /**
     * Kind of API. For example, REST or GraphQL.
     */
    kind: pulumi.Input<string | types.enums.ApiKind>;
    /**
     * The license information for the API.
     */
    license?: pulumi.Input<types.inputs.LicenseArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Short description of the API.
     */
    summary?: pulumi.Input<string>;
    /**
     * Terms of service for the API.
     */
    termsOfService?: pulumi.Input<types.inputs.TermsOfServiceArgs>;
    /**
     * API title.
     */
    title: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}