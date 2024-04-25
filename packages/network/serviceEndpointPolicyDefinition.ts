import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Service Endpoint policy definitions.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2018-07-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01.
 */
export class ServiceEndpointPolicyDefinition extends pulumi.CustomResource {
    /**
     * Get an existing ServiceEndpointPolicyDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceEndpointPolicyDefinition {
        return new ServiceEndpointPolicyDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ServiceEndpointPolicyDefinition';

    /**
     * Returns true if the given object is an instance of ServiceEndpointPolicyDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceEndpointPolicyDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceEndpointPolicyDefinition.__pulumiType;
    }

    /**
     * A description for this rule. Restricted to 140 chars.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the service endpoint policy definition resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Service endpoint name.
     */
    public readonly service!: pulumi.Output<string | undefined>;
    /**
     * A list of service resources.
     */
    public readonly serviceResources!: pulumi.Output<string[] | undefined>;
    /**
     * The type of the resource.
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a ServiceEndpointPolicyDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceEndpointPolicyDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceEndpointPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceEndpointPolicyName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["serviceEndpointPolicyDefinitionName"] = args ? args.serviceEndpointPolicyDefinitionName : undefined;
            resourceInputs["serviceEndpointPolicyName"] = args ? args.serviceEndpointPolicyName : undefined;
            resourceInputs["serviceResources"] = args ? args.serviceResources : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["service"] = undefined /*out*/;
            resourceInputs["serviceResources"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180701:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20180801:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20181001:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20181101:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20181201:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20190201:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20190401:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20190601:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20190701:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20190801:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20190901:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20191101:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20191201:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20200301:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20200401:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20200501:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20200601:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20200701:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20200801:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20201101:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20210201:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20210301:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20210501:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20210801:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20220101:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20220501:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20220701:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20220901:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20221101:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20230201:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20230401:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20230501:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20230601:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20230901:ServiceEndpointPolicyDefinition" }, { type: "azure-native:network/v20231101:ServiceEndpointPolicyDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServiceEndpointPolicyDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServiceEndpointPolicyDefinition resource.
 */
export interface ServiceEndpointPolicyDefinitionArgs {
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Service endpoint name.
     */
    service?: pulumi.Input<string>;
    /**
     * The name of the service endpoint policy definition name.
     */
    serviceEndpointPolicyDefinitionName?: pulumi.Input<string>;
    /**
     * The name of the service endpoint policy.
     */
    serviceEndpointPolicyName: pulumi.Input<string>;
    /**
     * A list of service resources.
     */
    serviceResources?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the resource.
     */
    type?: pulumi.Input<string>;
}