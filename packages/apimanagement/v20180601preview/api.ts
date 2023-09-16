import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * API details.
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
    public static readonly __pulumiType = 'azure-native:apimanagement/v20180601preview:Api';

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
     * Describes the Revision of the Api. If no value is provided, default revision 1 is created
     */
    public readonly apiRevision!: pulumi.Output<string | undefined>;
    /**
     * Description of the Api Revision.
     */
    public readonly apiRevisionDescription!: pulumi.Output<string | undefined>;
    /**
     * Type of API.
     */
    public readonly apiType!: pulumi.Output<string | undefined>;
    /**
     * Indicates the Version identifier of the API if the API is versioned
     */
    public readonly apiVersion!: pulumi.Output<string | undefined>;
    /**
     * Description of the Api Version.
     */
    public readonly apiVersionDescription!: pulumi.Output<string | undefined>;
    /**
     * An API Version Set contains the common configuration for a set of API Versions relating 
     */
    public readonly apiVersionSet!: pulumi.Output<types.outputs.apimanagement.v20180601preview.ApiVersionSetContractDetailsResponse | undefined>;
    /**
     * A resource identifier for the related ApiVersionSet.
     */
    public readonly apiVersionSetId!: pulumi.Output<string | undefined>;
    /**
     * Collection of authentication settings included into this API.
     */
    public readonly authenticationSettings!: pulumi.Output<types.outputs.apimanagement.v20180601preview.AuthenticationSettingsContractResponse | undefined>;
    /**
     * Description of the API. May include HTML formatting tags.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * API name.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Indicates if API revision is current api revision.
     */
    public /*out*/ readonly isCurrent!: pulumi.Output<boolean>;
    /**
     * Indicates if API revision is accessible via the gateway.
     */
    public /*out*/ readonly isOnline!: pulumi.Output<boolean>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * Describes on which protocols the operations in this API can be invoked.
     */
    public readonly protocols!: pulumi.Output<string[] | undefined>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    public readonly serviceUrl!: pulumi.Output<string | undefined>;
    /**
     * Protocols over which API is made available.
     */
    public readonly subscriptionKeyParameterNames!: pulumi.Output<types.outputs.apimanagement.v20180601preview.SubscriptionKeyParameterNamesContractResponse | undefined>;
    /**
     * Specifies whether an API or Product subscription is required for accessing the API.
     */
    public readonly subscriptionRequired!: pulumi.Output<boolean | undefined>;
    /**
     * Resource type for API Management resource.
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
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["apiRevision"] = args ? args.apiRevision : undefined;
            resourceInputs["apiRevisionDescription"] = args ? args.apiRevisionDescription : undefined;
            resourceInputs["apiType"] = args ? args.apiType : undefined;
            resourceInputs["apiVersion"] = args ? args.apiVersion : undefined;
            resourceInputs["apiVersionDescription"] = args ? args.apiVersionDescription : undefined;
            resourceInputs["apiVersionSet"] = args ? args.apiVersionSet : undefined;
            resourceInputs["apiVersionSetId"] = args ? args.apiVersionSetId : undefined;
            resourceInputs["authenticationSettings"] = args ? args.authenticationSettings : undefined;
            resourceInputs["contentFormat"] = args ? args.contentFormat : undefined;
            resourceInputs["contentValue"] = args ? args.contentValue : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["protocols"] = args ? args.protocols : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["serviceUrl"] = args ? args.serviceUrl : undefined;
            resourceInputs["soapApiType"] = args ? args.soapApiType : undefined;
            resourceInputs["subscriptionKeyParameterNames"] = args ? args.subscriptionKeyParameterNames : undefined;
            resourceInputs["subscriptionRequired"] = args ? args.subscriptionRequired : undefined;
            resourceInputs["wsdlSelector"] = args ? args.wsdlSelector : undefined;
            resourceInputs["isCurrent"] = undefined /*out*/;
            resourceInputs["isOnline"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiRevision"] = undefined /*out*/;
            resourceInputs["apiRevisionDescription"] = undefined /*out*/;
            resourceInputs["apiType"] = undefined /*out*/;
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["apiVersionDescription"] = undefined /*out*/;
            resourceInputs["apiVersionSet"] = undefined /*out*/;
            resourceInputs["apiVersionSetId"] = undefined /*out*/;
            resourceInputs["authenticationSettings"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["isCurrent"] = undefined /*out*/;
            resourceInputs["isOnline"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["protocols"] = undefined /*out*/;
            resourceInputs["serviceUrl"] = undefined /*out*/;
            resourceInputs["subscriptionKeyParameterNames"] = undefined /*out*/;
            resourceInputs["subscriptionRequired"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:Api" }, { type: "azure-native:apimanagement/v20160707:Api" }, { type: "azure-native:apimanagement/v20161010:Api" }, { type: "azure-native:apimanagement/v20170301:Api" }, { type: "azure-native:apimanagement/v20180101:Api" }, { type: "azure-native:apimanagement/v20190101:Api" }, { type: "azure-native:apimanagement/v20191201:Api" }, { type: "azure-native:apimanagement/v20191201preview:Api" }, { type: "azure-native:apimanagement/v20200601preview:Api" }, { type: "azure-native:apimanagement/v20201201:Api" }, { type: "azure-native:apimanagement/v20210101preview:Api" }, { type: "azure-native:apimanagement/v20210401preview:Api" }, { type: "azure-native:apimanagement/v20210801:Api" }, { type: "azure-native:apimanagement/v20211201preview:Api" }, { type: "azure-native:apimanagement/v20220401preview:Api" }, { type: "azure-native:apimanagement/v20220801:Api" }, { type: "azure-native:apimanagement/v20220901preview:Api" }, { type: "azure-native:apimanagement/v20230301preview:Api" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Api.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Api resource.
 */
export interface ApiArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId?: pulumi.Input<string>;
    /**
     * Describes the Revision of the Api. If no value is provided, default revision 1 is created
     */
    apiRevision?: pulumi.Input<string>;
    /**
     * Description of the Api Revision.
     */
    apiRevisionDescription?: pulumi.Input<string>;
    /**
     * Type of API.
     */
    apiType?: pulumi.Input<string | types.enums.v20180601preview.ApiType>;
    /**
     * Indicates the Version identifier of the API if the API is versioned
     */
    apiVersion?: pulumi.Input<string>;
    /**
     * Description of the Api Version.
     */
    apiVersionDescription?: pulumi.Input<string>;
    /**
     * An API Version Set contains the common configuration for a set of API Versions relating 
     */
    apiVersionSet?: pulumi.Input<types.inputs.apimanagement.v20180601preview.ApiVersionSetContractDetailsArgs>;
    /**
     * A resource identifier for the related ApiVersionSet.
     */
    apiVersionSetId?: pulumi.Input<string>;
    /**
     * Collection of authentication settings included into this API.
     */
    authenticationSettings?: pulumi.Input<types.inputs.apimanagement.v20180601preview.AuthenticationSettingsContractArgs>;
    /**
     * Format of the Content in which the API is getting imported.
     */
    contentFormat?: pulumi.Input<string | types.enums.v20180601preview.ContentFormat>;
    /**
     * Content value when Importing an API.
     */
    contentValue?: pulumi.Input<string>;
    /**
     * Description of the API. May include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * API name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    path: pulumi.Input<string>;
    /**
     * Describes on which protocols the operations in this API can be invoked.
     */
    protocols?: pulumi.Input<pulumi.Input<types.enums.v20180601preview.Protocol>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    serviceUrl?: pulumi.Input<string>;
    /**
     * Type of Api to create. 
     *  * `http` creates a SOAP to REST API 
     *  * `soap` creates a SOAP pass-through API .
     */
    soapApiType?: pulumi.Input<string | types.enums.v20180601preview.SoapApiType>;
    /**
     * Protocols over which API is made available.
     */
    subscriptionKeyParameterNames?: pulumi.Input<types.inputs.apimanagement.v20180601preview.SubscriptionKeyParameterNamesContractArgs>;
    /**
     * Specifies whether an API or Product subscription is required for accessing the API.
     */
    subscriptionRequired?: pulumi.Input<boolean>;
    /**
     * Criteria to limit import of WSDL to a subset of the document.
     */
    wsdlSelector?: pulumi.Input<types.inputs.apimanagement.v20180601preview.ApiCreateOrUpdatePropertiesWsdlSelectorArgs>;
}
