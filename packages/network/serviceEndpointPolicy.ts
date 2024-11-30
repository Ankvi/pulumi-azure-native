import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Service End point policy resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2018-07-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class ServiceEndpointPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ServiceEndpointPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceEndpointPolicy {
        return new ServiceEndpointPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ServiceEndpointPolicy';

    /**
     * Returns true if the given object is an instance of ServiceEndpointPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceEndpointPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceEndpointPolicy.__pulumiType;
    }

    /**
     * A collection of contextual service endpoint policy.
     */
    public readonly contextualServiceEndpointPolicies!: pulumi.Output<string[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Kind of service endpoint policy. This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the service endpoint policy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the service endpoint policy resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The alias indicating if the policy belongs to a service
     */
    public readonly serviceAlias!: pulumi.Output<string | undefined>;
    /**
     * A collection of service endpoint policy definitions of the service endpoint policy.
     */
    public readonly serviceEndpointPolicyDefinitions!: pulumi.Output<types.outputs.ServiceEndpointPolicyDefinitionResponse[] | undefined>;
    /**
     * A collection of references to subnets.
     */
    public /*out*/ readonly subnets!: pulumi.Output<types.outputs.SubnetResponse[]>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServiceEndpointPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceEndpointPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["contextualServiceEndpointPolicies"] = args ? args.contextualServiceEndpointPolicies : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceAlias"] = args ? args.serviceAlias : undefined;
            resourceInputs["serviceEndpointPolicyDefinitions"] = args ? args.serviceEndpointPolicyDefinitions : undefined;
            resourceInputs["serviceEndpointPolicyName"] = args ? args.serviceEndpointPolicyName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["contextualServiceEndpointPolicies"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["serviceAlias"] = undefined /*out*/;
            resourceInputs["serviceEndpointPolicyDefinitions"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180701:ServiceEndpointPolicy" }, { type: "azure-native:network/v20180801:ServiceEndpointPolicy" }, { type: "azure-native:network/v20181001:ServiceEndpointPolicy" }, { type: "azure-native:network/v20181101:ServiceEndpointPolicy" }, { type: "azure-native:network/v20181201:ServiceEndpointPolicy" }, { type: "azure-native:network/v20190201:ServiceEndpointPolicy" }, { type: "azure-native:network/v20190401:ServiceEndpointPolicy" }, { type: "azure-native:network/v20190601:ServiceEndpointPolicy" }, { type: "azure-native:network/v20190701:ServiceEndpointPolicy" }, { type: "azure-native:network/v20190801:ServiceEndpointPolicy" }, { type: "azure-native:network/v20190901:ServiceEndpointPolicy" }, { type: "azure-native:network/v20191101:ServiceEndpointPolicy" }, { type: "azure-native:network/v20191201:ServiceEndpointPolicy" }, { type: "azure-native:network/v20200301:ServiceEndpointPolicy" }, { type: "azure-native:network/v20200401:ServiceEndpointPolicy" }, { type: "azure-native:network/v20200501:ServiceEndpointPolicy" }, { type: "azure-native:network/v20200601:ServiceEndpointPolicy" }, { type: "azure-native:network/v20200701:ServiceEndpointPolicy" }, { type: "azure-native:network/v20200801:ServiceEndpointPolicy" }, { type: "azure-native:network/v20201101:ServiceEndpointPolicy" }, { type: "azure-native:network/v20210201:ServiceEndpointPolicy" }, { type: "azure-native:network/v20210301:ServiceEndpointPolicy" }, { type: "azure-native:network/v20210501:ServiceEndpointPolicy" }, { type: "azure-native:network/v20210801:ServiceEndpointPolicy" }, { type: "azure-native:network/v20220101:ServiceEndpointPolicy" }, { type: "azure-native:network/v20220501:ServiceEndpointPolicy" }, { type: "azure-native:network/v20220701:ServiceEndpointPolicy" }, { type: "azure-native:network/v20220901:ServiceEndpointPolicy" }, { type: "azure-native:network/v20221101:ServiceEndpointPolicy" }, { type: "azure-native:network/v20230201:ServiceEndpointPolicy" }, { type: "azure-native:network/v20230401:ServiceEndpointPolicy" }, { type: "azure-native:network/v20230501:ServiceEndpointPolicy" }, { type: "azure-native:network/v20230601:ServiceEndpointPolicy" }, { type: "azure-native:network/v20230901:ServiceEndpointPolicy" }, { type: "azure-native:network/v20231101:ServiceEndpointPolicy" }, { type: "azure-native:network/v20240101:ServiceEndpointPolicy" }, { type: "azure-native:network/v20240301:ServiceEndpointPolicy" }, { type: "azure-native:network/v20240501:ServiceEndpointPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServiceEndpointPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServiceEndpointPolicy resource.
 */
export interface ServiceEndpointPolicyArgs {
    /**
     * A collection of contextual service endpoint policy.
     */
    contextualServiceEndpointPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The alias indicating if the policy belongs to a service
     */
    serviceAlias?: pulumi.Input<string>;
    /**
     * A collection of service endpoint policy definitions of the service endpoint policy.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    serviceEndpointPolicyDefinitions?: pulumi.Input<pulumi.Input<types.inputs.ServiceEndpointPolicyDefinitionArgs>[]>;
    /**
     * The name of the service endpoint policy.
     */
    serviceEndpointPolicyName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}