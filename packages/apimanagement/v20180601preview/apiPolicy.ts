import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Policy Contract details.
 */
export class ApiPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ApiPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiPolicy {
        return new ApiPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20180601preview:ApiPolicy';

    /**
     * Returns true if the given object is an instance of ApiPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiPolicy.__pulumiType;
    }

    /**
     * Format of the policyContent.
     */
    public readonly contentFormat!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Json escaped Xml Encoded contents of the Policy.
     */
    public readonly policyContent!: pulumi.Output<string>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApiPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.policyContent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyContent'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["contentFormat"] = (args ? args.contentFormat : undefined) ?? "xml";
            resourceInputs["policyContent"] = args ? args.policyContent : undefined;
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["contentFormat"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyContent"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:ApiPolicy" }, { type: "azure-native:apimanagement/v20170301:ApiPolicy" }, { type: "azure-native:apimanagement/v20180101:ApiPolicy" }, { type: "azure-native:apimanagement/v20190101:ApiPolicy" }, { type: "azure-native:apimanagement/v20191201:ApiPolicy" }, { type: "azure-native:apimanagement/v20191201preview:ApiPolicy" }, { type: "azure-native:apimanagement/v20200601preview:ApiPolicy" }, { type: "azure-native:apimanagement/v20201201:ApiPolicy" }, { type: "azure-native:apimanagement/v20210101preview:ApiPolicy" }, { type: "azure-native:apimanagement/v20210401preview:ApiPolicy" }, { type: "azure-native:apimanagement/v20210801:ApiPolicy" }, { type: "azure-native:apimanagement/v20211201preview:ApiPolicy" }, { type: "azure-native:apimanagement/v20220401preview:ApiPolicy" }, { type: "azure-native:apimanagement/v20220801:ApiPolicy" }, { type: "azure-native:apimanagement/v20220901preview:ApiPolicy" }, { type: "azure-native:apimanagement/v20230301preview:ApiPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiPolicy resource.
 */
export interface ApiPolicyArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Format of the policyContent.
     */
    contentFormat?: pulumi.Input<string | types.enums.PolicyContentFormat>;
    /**
     * Json escaped Xml Encoded contents of the Policy.
     */
    policyContent: pulumi.Input<string>;
    /**
     * The identifier of the Policy.
     */
    policyId?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
